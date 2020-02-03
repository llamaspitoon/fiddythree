export enum GameType {
	Fun, Funner, Baller
}

export class GameTypeData {
	gameType: GameType;
	label: string;
	etherValue: string;

	constructor(gameType: GameType) {
		function getValueText(etherValue: string): string {
			return `(${etherValue} ETH)`;
		}

		switch (gameType) {
			case GameType.Fun:
				this.gameType = GameType.Fun;
				this.etherValue = '0.05';
				this.label = 'Fun ' + getValueText(this.etherValue);
				break;
			case GameType.Funner:
				this.gameType = GameType.Funner;
				this.etherValue = '0.2';
				this.label = 'Funner ' + getValueText(this.etherValue);
				break;
			case GameType.Baller:
				this.gameType = GameType.Baller;
				this.etherValue = '1';
				this.label = 'Baller ' + getValueText(this.etherValue);
				break;
			default:
				this.gameType = GameType.Fun;
				this.etherValue = '0.05';
				this.label = 'Fun ' + getValueText(this.etherValue);
		}
	}

}

export const getLabelFromType = (gameType: GameType): string => {
	const gameData = new GameTypeData(gameType);
	return gameData.label;
};
