pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";

/********************
    This is the FiddyFiddy contract for v1. It is rather centralized in that only the contract
    owner (called admin here) can, and must, set several properties including some that must changed
    once or twice per week:

        1. Change the weekly schedule number. Do this after the previous week is finished and paid out.
        2. The initial setting of the contract is unlocked. Lock the contract prior to Sunday's first
           kickoff so that users cannot push entries after the games have started.
        3. While the contract is locked, enter the final scores of the games. You can do this as the
           games finish or in a single batch after Monday night's game concludes. The user experience
           is better with the former since users can see how they are doing throughout the day, but it
           requires the admin to enter scores several times in a timely manner as games conclude.
        4. While the contract is locked, after all games conclude and all final scores have been saved,
           set the master key, which is a perfect picks entry based on the final scores. Then run the
           determine the winner function, which grabs all the picks entries and grades them against the
           master key to determine the winner. Once this processing concludes, the winner(s) will appear
           on the screen.

    One of our two main goals is to completely decentralize FiddyFiddy such
    that the admin functions can be triggered by timestamps and scores can be fed in via a third-party
    API provider. Right now it is the contract owner's responsibility to create their own database
    and populate the game schedule manually until a third-party API provider is secured, at which point
    it is the contract owner's responsibility to activate an account with that provider.
 */

contract FiddyFiddy is Ownable {
    using SafeMath for uint8;
    using SafeMath for uint256;

    /*****************************
     * 		 STATE MEMBERS  	 *
     *****************************/

    struct Config {
        uint8 weekNumber;
        bool contractLocked;
        address admin;
        address payable stakeholder;
        address payable founder;
    }

    struct GameType {
        GameTypeName name;
        uint256 value;
    }

    enum GameTypeName { SmallBuyIn, MediumBuyIn, LargeBuyIn }
    uint8 constant TOTAL_WEEKS = 21;
    uint8 constant GAME_TYPE_COUNT = 3;
    uint256 constant SMALL_VALUE = 0.05 ether;
    uint256 constant MEDIUM_VALUE = 0.2 ether;
    uint256 constant LARGE_VALUE = 1 ether;
    GameType[GAME_TYPE_COUNT] gameTypes; // 3-Tier buy-in levels
    Config private config; // Includes dependencies such as week # and contact lock status

    // weekNumber => gameType => player => picks[]
    mapping(uint8 => mapping(uint8 => mapping(address => bytes32[]))) public entries;
    // weekNumber => gameType => player => winningPicks[]
    mapping(uint8 => mapping(uint8 => mapping(address => bytes32[]))) public winningEntries;
    // weekNumber => gameType => player[]
    mapping(uint8 => mapping(uint8 => address payable[])) public winners;
    // weekNumber => gameType => entriesCount
    mapping(uint8 => mapping(uint8 => uint256)) public entriesCount;
    // weekNumber => gameType => ether
    mapping(uint8 => mapping(uint8 => uint256)) public winningsVault;
    // Only admitted players can post picks
    mapping(address => bool) public isAdmitted;

    // I applaud you on deploying and extending your own version of FiddyFiddy.
    // Give the creator of the game some love (1% of revenue) and leave my address uncommented.
    // TODO: Make this a constant
    address payable constant initFounder = 0x020132905D3149597969aAD0DB186e601F0A6302;
    // stakeholder is initialized to the founder address.
    // If you spin your own, remember to change this by calling setStakeholder()
    address payable constant initStakeholder = 0x020132905D3149597969aAD0DB186e601F0A6302;

    /*****************************
     * 		   MODIFIERS  		 *
     *****************************/

    modifier isContractUnlocked() {
        require(!config.contractLocked);
        _;
    }

    modifier doesMatchEntryPrice(uint256 amountPaid) {
        require(
            amountPaid == SMALL_VALUE ||
            amountPaid == MEDIUM_VALUE ||
            amountPaid == LARGE_VALUE,
            "The correct entry fee is 0.05, 0.2 or 1 ether."
        );
        _;
    }

    /*****************************
     * 		    EVENTS  		 *
     *****************************/

    event AdmissionPaid(
        address indexed _from,
        uint8 _weekNumber,
        uint _value
    );

    event PicksPosted(
        address indexed _from,
        uint8 _weekNumber,
        bytes32 _picks
    );

    /*****************************
     * 		  CONSTRUCTOR      	 *
     *****************************/

    constructor() public {
        setConfig(1, true, initStakeholder, initFounder);
        initWeeklyValues();
        initGameTypes();
    }

    /*****************************
     * 		ADMIN FUNCTIONS 	 *
     *****************************/

    function initWeeklyValues() public onlyOwner() {
        for (uint8 i = 1; i <= TOTAL_WEEKS; i++) {
            for (uint8 j = 0; j < GAME_TYPE_COUNT; j++) {
                entriesCount[i][j] = 0;
            }
        }
    }

    function initGameTypes() public onlyOwner() {
        // 3-Tiered Buy-in levels
        gameTypes[0] = GameType({
            name: GameTypeName.SmallBuyIn,
            value: SMALL_VALUE
        });
        gameTypes[1] = GameType({
            name: GameTypeName.MediumBuyIn,
            value: MEDIUM_VALUE
        });
        gameTypes[2] = GameType({
            name: GameTypeName.LargeBuyIn,
            value: LARGE_VALUE
        });
    }

	function setConfig(
        uint8 _weekNumber,
        bool _contractLocked,
        address payable _stakeholder,
        address payable _founder
    )
        public
        onlyOwner()
    {
        // Initially sets the stakeholder to the founder's address.
        // If you spin your own, remember to change this by calling setStakeholder()
        // TODO: remove founder param and hard-code into contract
		config = Config(_weekNumber, _contractLocked, owner(), _stakeholder, _founder);
	}

	function addWinningEntry(
        uint8 _weekNumber,
        uint8 _gameType,
        address payable _winner,
        bytes32 _winningEntry
    )
        public
        onlyOwner()
        returns(bool)
    {
        bytes32[] storage existingWinningEntries = winningEntries[_weekNumber][_gameType][_winner];
        existingWinningEntries.push(_winningEntry);
        winningEntries[_weekNumber][_gameType][_winner] = existingWinningEntries;

        // add to the winners mapping also for when we pay out
        address payable[] storage thisWeeksWinners = winners[_weekNumber][_gameType];
        thisWeeksWinners.push(_winner);
        winners[_weekNumber][_gameType] = thisWeeksWinners;
        return true;
	}

    function payoutWinnings(
		uint8 _weekNumber,
		uint8 _gameType
	)
		public
		payable
		onlyOwner()
		returns(bool)
	{
        uint256 thisGameTypePayout = winningsVault[_weekNumber][_gameType];

        require(thisGameTypePayout < address(this).balance);
        uint256 onePercentShare = thisGameTypePayout.div(100);
        uint256 fourPercentShare = onePercentShare.mul(4);
        uint256 ninetyFourPercentShare = onePercentShare.mul(94);

        // 4% to the stakeholder
		address payable stakeholder = config.stakeholder;
        stakeholder.transfer(fourPercentShare);
        // 1% to the founder
		address payable founder = config.founder;
        founder.transfer(onePercentShare);

        // Get the winners
        address payable[] storage thisWeeksWinners = winners[_weekNumber][_gameType];

        // Determine the payout based on the number of winners and disperse the winnings
        uint256 winnersCount = thisWeeksWinners.length;
        uint256 payout = ninetyFourPercentShare.div(winnersCount);
        for (uint256 i = 0; i < winnersCount; i++) {
			address payable thisWinner = thisWeeksWinners[i];
            thisWinner.transfer(payout);
        }

        // 1% stays in the contract to cover admin gas fees
		return true;
    }

	/*****************************
	 * 	   PUBLIC FUNCTIONS 	 *
	 *****************************/

	function() external payable isContractUnlocked() {
		admitAndPostPicks(config.weekNumber, 0);
	}

	function getConfig() public view returns(
        uint8 o_weekNumber,
        bool o_contractLocked,
        address o_admin,
        address o_stakeholder,
        address o_founder
    ) {
		o_weekNumber = config.weekNumber;
		o_contractLocked = config.contractLocked;
		o_admin = config.admin;
        o_stakeholder = config.stakeholder;
        o_founder = config.founder;
	}

	function getAdmissionStatus(address _player) public view returns(bool) {
		return isAdmitted[_player];
	}

	function admitAndPostPicks(uint8 _weekNumber, bytes32 _picks)
        public
        payable
        isContractUnlocked()
        doesMatchEntryPrice(msg.value)
    {
		require(_picks != 0, "You didn't send your picks!");

        address player = msg.sender;
        uint8 gameTypeIndex = getGameTypeIndex(msg.value);

        // add the buy-in to the vault ledger
        uint256 newValueValue = winningsVault[_weekNumber][gameTypeIndex] + msg.value;
        winningsVault[_weekNumber][gameTypeIndex] = newValueValue;

		isAdmitted[player] = true;
        postEntry(player, _weekNumber, gameTypeIndex, msg.value, _picks);
	}

    function getGameTypeIndex(uint256 amountPaid)
        internal
        pure
        doesMatchEntryPrice(amountPaid)
        returns(uint8)
    {
        // return GameType as individual properties:
        //   1. uint "name" casted to uint from GameTypeName
        //   2. uint256 "value"
        if (amountPaid == SMALL_VALUE) {
            return 0;
        } else if (amountPaid == MEDIUM_VALUE) {
            return 1;
        } else if (amountPaid == LARGE_VALUE) {
            return 2;
        }
    }

	function postEntry(
        address _player,
        uint8 _weekNumber,
        uint8 _gameTypeIndex,
        uint256 entryPrice,
        bytes32 _picks
    )
        internal
        doesMatchEntryPrice(entryPrice)
    {
		require(_weekNumber == config.weekNumber, "Our week number doesn't match up. Are you sure?");
        require(isAdmitted[_player] = true);

		entries[_weekNumber][_gameTypeIndex][_player].push(_picks);
		uint256 numPlayerEntries = entries[_weekNumber][_gameTypeIndex][_player].length;

		if (entries[_weekNumber][_gameTypeIndex][_player][numPlayerEntries - 1] == _picks) {
            // then picks are posted so set isAdmitted back to false
			// so they can't add more entries without buying in again
			isAdmitted[_player] = false;

            // Update the entriesCount for the week
            entriesCount[_weekNumber][_gameTypeIndex]++;
        }
	}

	function getWeeklyEntries(address _player, uint8 _weekNumber, uint8 _gameTypeIndex) public view returns(bytes32[] memory) {
		return entries[_weekNumber][_gameTypeIndex][_player];
	}
}
