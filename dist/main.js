(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./build/contracts/MetaCoin.json":
/*!***************************************!*\
  !*** ./build/contracts/MetaCoin.json ***!
  \***************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, networkType, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"contractName\":\"MetaCoin\",\"abi\":[{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"sendCoin\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"sufficient\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getBalanceInEth\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.5.16+commit.9c3226ce\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"inputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"constructor\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":true,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"_from\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"_to\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_value\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"Transfer\\\",\\\"type\\\":\\\"event\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"addr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"getBalance\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"addr\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"getBalanceInEth\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"receiver\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"amount\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"sendCoin\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"sufficient\\\",\\\"type\\\":\\\"bool\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"methods\\\":{}},\\\"userdoc\\\":{\\\"methods\\\":{}}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"/C/Users/dhull/Development/dappetizer/fiddy-three/fiddythree/contracts/MetaCoin.sol\\\":\\\"MetaCoin\\\"},\\\"evmVersion\\\":\\\"istanbul\\\",\\\"libraries\\\":{},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"/C/Users/dhull/Development/dappetizer/fiddy-three/fiddythree/contracts/ConvertLib.sol\\\":{\\\"keccak256\\\":\\\"0x9f8249ffc0dee02477303cf8203490724bb1b4fa95529f57f045b050224f9f3f\\\",\\\"urls\\\":[\\\"bzz-raw://b722aa57de643288538efde477ecf5b5faae0eb9d736e588a8900dfce346347a\\\",\\\"dweb:/ipfs/QmVy4eGhyRNMebHKNVyKxZv9Ev3FmvxvaEa1c9jgDk6g5S\\\"]},\\\"/C/Users/dhull/Development/dappetizer/fiddy-three/fiddythree/contracts/MetaCoin.sol\\\":{\\\"keccak256\\\":\\\"0x58a7063f80afdaa3eddf361e61b30df1d89db41906c152e665795080b0e45ff5\\\",\\\"urls\\\":[\\\"bzz-raw://390e062e4707fb607689f7fa3152ee76463919932bfba6ec387ebaad39c526dc\\\",\\\"dweb:/ipfs/QmbqBZ2V7AkHhhpfbvsLZP9oDDNKX871i3NwhEiwf2y8gp\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x608060405234801561001057600080fd5b506127106000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506103d6806100656000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80637bd703e81461004657806390b98a111461009e578063f8b2cb4f14610104575b600080fd5b6100886004803603602081101561005c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061015c565b6040518082815260200191505060405180910390f35b6100ea600480360360408110156100b457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610200565b604051808215151515815260200191505060405180910390f35b6101466004803603602081101561011a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610359565b6040518082815260200191505060405180910390f35b600073__ConvertLib____________________________6396e4ee3d61018184610359565b60026040518363ffffffff1660e01b8152600401808381526020018281526020019250505060206040518083038186803b1580156101be57600080fd5b505af41580156101d2573d6000803e3d6000fd5b505050506040513d60208110156101e857600080fd5b81019080805190602001909291905050509050919050565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156102515760009050610353565b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905091905056fea265627a7a723158200ad89dd761d0ce9b47bdc50275c410c400043fcecf8e1fbf42a6121fb70e55b064736f6c63430005100032\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b50600436106100415760003560e01c80637bd703e81461004657806390b98a111461009e578063f8b2cb4f14610104575b600080fd5b6100886004803603602081101561005c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061015c565b6040518082815260200191505060405180910390f35b6100ea600480360360408110156100b457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610200565b604051808215151515815260200191505060405180910390f35b6101466004803603602081101561011a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610359565b6040518082815260200191505060405180910390f35b600073__ConvertLib____________________________6396e4ee3d61018184610359565b60026040518363ffffffff1660e01b8152600401808381526020018281526020019250505060206040518083038186803b1580156101be57600080fd5b505af41580156101d2573d6000803e3d6000fd5b505050506040513d60208110156101e857600080fd5b81019080805190602001909291905050509050919050565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156102515760009050610353565b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905091905056fea265627a7a723158200ad89dd761d0ce9b47bdc50275c410c400043fcecf8e1fbf42a6121fb70e55b064736f6c63430005100032\",\"sourceMap\":\"315:674:1:-;;;452:56;8:9:-1;5:2;;;30:1;27;20:12;5:2;452:56:1;499:5;477:8;:19;486:9;477:19;;;;;;;;;;;;;;;:27;;;;315:674;;;;;;\",\"deployedSourceMap\":\"315:674:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;315:674:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;778:117;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;778:117:1;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;511:264;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;511:264:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;898:89;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;898:89:1;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;778:117;837:4;853:10;:18;872:16;883:4;872:10;:16::i;:::-;889:1;853:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;853:38:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;853:38:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;853:38:1;;;;;;;;;;;;;;;;846:45;;778:117;;;:::o;511:264::-;575:15;623:6;600:8;:20;609:10;600:20;;;;;;;;;;;;;;;;:29;596:47;;;638:5;631:12;;;;596:47;671:6;647:8;:20;656:10;647:20;;;;;;;;;;;;;;;;:30;;;;;;;;;;;703:6;681:8;:18;690:8;681:18;;;;;;;;;;;;;;;;:28;;;;;;;;;;;739:8;718:38;;727:10;718:38;;;749:6;718:38;;;;;;;;;;;;;;;;;;767:4;760:11;;511:264;;;;;:::o;898:89::-;952:4;969:8;:14;978:4;969:14;;;;;;;;;;;;;;;;962:21;;898:89;;;:::o\",\"source\":\"pragma solidity ^0.5.0;\\n\\nimport \\\"./ConvertLib.sol\\\";\\n\\n// This is just a simple example of a coin-like contract.\\n// It is not standards compatible and cannot be expected to talk to other\\n// coin/token contracts. If you want to create a standards-compliant\\n// token, see: https://github.com/ConsenSys/Tokens. Cheers!\\n\\ncontract MetaCoin {\\n\\tmapping (address => uint) balances;\\n\\n\\tevent Transfer(address indexed _from, address indexed _to, uint256 _value);\\n\\n\\tconstructor() public {\\n\\t\\tbalances[tx.origin] = 10000;\\n\\t}\\n\\n\\tfunction sendCoin(address receiver, uint amount) public returns(bool sufficient) {\\n\\t\\tif (balances[msg.sender] < amount) return false;\\n\\t\\tbalances[msg.sender] -= amount;\\n\\t\\tbalances[receiver] += amount;\\n\\t\\temit Transfer(msg.sender, receiver, amount);\\n\\t\\treturn true;\\n\\t}\\n\\n\\tfunction getBalanceInEth(address addr) public view returns(uint){\\n\\t\\treturn ConvertLib.convert(getBalance(addr),2);\\n\\t}\\n\\n\\tfunction getBalance(address addr) public view returns(uint) {\\n\\t\\treturn balances[addr];\\n\\t}\\n}\\n\",\"sourcePath\":\"C:/Users/dhull/Development/dappetizer/fiddy-three/fiddythree/contracts/MetaCoin.sol\",\"ast\":{\"absolutePath\":\"/C/Users/dhull/Development/dappetizer/fiddy-three/fiddythree/contracts/MetaCoin.sol\",\"exportedSymbols\":{\"MetaCoin\":[112]},\"id\":113,\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":18,\"literals\":[\"solidity\",\"^\",\"0.5\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:23:1\"},{\"absolutePath\":\"/C/Users/dhull/Development/dappetizer/fiddy-three/fiddythree/contracts/ConvertLib.sol\",\"file\":\"./ConvertLib.sol\",\"id\":19,\"nodeType\":\"ImportDirective\",\"scope\":113,\"sourceUnit\":17,\"src\":\"25:26:1\",\"symbolAliases\":[],\"unitAlias\":\"\"},{\"baseContracts\":[],\"contractDependencies\":[],\"contractKind\":\"contract\",\"documentation\":null,\"fullyImplemented\":true,\"id\":112,\"linearizedBaseContracts\":[112],\"name\":\"MetaCoin\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"constant\":false,\"id\":23,\"name\":\"balances\",\"nodeType\":\"VariableDeclaration\",\"scope\":112,\"src\":\"336:34:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"},\"typeName\":{\"id\":22,\"keyType\":{\"id\":20,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"345:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"336:25:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"},\"valueType\":{\"id\":21,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"356:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}},\"value\":null,\"visibility\":\"internal\"},{\"anonymous\":false,\"documentation\":null,\"id\":31,\"name\":\"Transfer\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":30,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":25,\"indexed\":true,\"name\":\"_from\",\"nodeType\":\"VariableDeclaration\",\"scope\":31,\"src\":\"389:21:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":24,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"389:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":27,\"indexed\":true,\"name\":\"_to\",\"nodeType\":\"VariableDeclaration\",\"scope\":31,\"src\":\"412:19:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":26,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"412:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":29,\"indexed\":false,\"name\":\"_value\",\"nodeType\":\"VariableDeclaration\",\"scope\":31,\"src\":\"433:14:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":28,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"433:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"388:60:1\"},\"src\":\"374:75:1\"},{\"body\":{\"id\":41,\"nodeType\":\"Block\",\"src\":\"473:35:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":39,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":34,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":23,\"src\":\"477:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":37,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":35,\"name\":\"tx\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":196,\"src\":\"486:2:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_transaction\",\"typeString\":\"tx\"}},\"id\":36,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"origin\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"486:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"477:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"hexValue\":\"3130303030\",\"id\":38,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"499:5:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_10000_by_1\",\"typeString\":\"int_const 10000\"},\"value\":\"10000\"},\"src\":\"477:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":40,\"nodeType\":\"ExpressionStatement\",\"src\":\"477:27:1\"}]},\"documentation\":null,\"id\":42,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":32,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"463:2:1\"},\"returnParameters\":{\"id\":33,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"473:0:1\"},\"scope\":112,\"src\":\"452:56:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":82,\"nodeType\":\"Block\",\"src\":\"592:183:1\",\"statements\":[{\"condition\":{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":56,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":51,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":23,\"src\":\"600:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":54,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":52,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":184,\"src\":\"609:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":53,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"609:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"600:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"argumentTypes\":null,\"id\":55,\"name\":\"amount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":46,\"src\":\"623:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"600:29:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"falseBody\":null,\"id\":59,\"nodeType\":\"IfStatement\",\"src\":\"596:47:1\",\"trueBody\":{\"expression\":{\"argumentTypes\":null,\"hexValue\":\"66616c7365\",\"id\":57,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"638:5:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"false\"},\"functionReturnParameters\":50,\"id\":58,\"nodeType\":\"Return\",\"src\":\"631:12:1\"}},{\"expression\":{\"argumentTypes\":null,\"id\":65,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":60,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":23,\"src\":\"647:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":63,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":61,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":184,\"src\":\"656:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":62,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"656:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"647:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"-=\",\"rightHandSide\":{\"argumentTypes\":null,\"id\":64,\"name\":\"amount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":46,\"src\":\"671:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"647:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":66,\"nodeType\":\"ExpressionStatement\",\"src\":\"647:30:1\"},{\"expression\":{\"argumentTypes\":null,\"id\":71,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":67,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":23,\"src\":\"681:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":69,\"indexExpression\":{\"argumentTypes\":null,\"id\":68,\"name\":\"receiver\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":44,\"src\":\"690:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"681:18:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"+=\",\"rightHandSide\":{\"argumentTypes\":null,\"id\":70,\"name\":\"amount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":46,\"src\":\"703:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"681:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":72,\"nodeType\":\"ExpressionStatement\",\"src\":\"681:28:1\"},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":74,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":184,\"src\":\"727:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":75,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"727:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},{\"argumentTypes\":null,\"id\":76,\"name\":\"receiver\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":44,\"src\":\"739:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},{\"argumentTypes\":null,\"id\":77,\"name\":\"amount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":46,\"src\":\"749:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":73,\"name\":\"Transfer\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":31,\"src\":\"718:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$\",\"typeString\":\"function (address,address,uint256)\"}},\"id\":78,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"718:38:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":79,\"nodeType\":\"EmitStatement\",\"src\":\"713:43:1\"},{\"expression\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":80,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"767:4:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"functionReturnParameters\":50,\"id\":81,\"nodeType\":\"Return\",\"src\":\"760:11:1\"}]},\"documentation\":null,\"id\":83,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"sendCoin\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":47,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":44,\"name\":\"receiver\",\"nodeType\":\"VariableDeclaration\",\"scope\":83,\"src\":\"529:16:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":43,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"529:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":46,\"name\":\"amount\",\"nodeType\":\"VariableDeclaration\",\"scope\":83,\"src\":\"547:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":45,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"547:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"528:31:1\"},\"returnParameters\":{\"id\":50,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":49,\"name\":\"sufficient\",\"nodeType\":\"VariableDeclaration\",\"scope\":83,\"src\":\"575:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":48,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"575:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"574:17:1\"},\"scope\":112,\"src\":\"511:264:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":98,\"nodeType\":\"Block\",\"src\":\"842:53:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":93,\"name\":\"addr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":85,\"src\":\"883:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"id\":92,\"name\":\"getBalance\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":111,\"src\":\"872:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_view$_t_address_$returns$_t_uint256_$\",\"typeString\":\"function (address) view returns (uint256)\"}},\"id\":94,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"872:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"argumentTypes\":null,\"hexValue\":\"32\",\"id\":95,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"889:1:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_2_by_1\",\"typeString\":\"int_const 2\"},\"value\":\"2\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_rational_2_by_1\",\"typeString\":\"int_const 2\"}],\"expression\":{\"argumentTypes\":null,\"id\":90,\"name\":\"ConvertLib\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":16,\"src\":\"853:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_contract$_ConvertLib_$16_$\",\"typeString\":\"type(library ConvertLib)\"}},\"id\":91,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"convert\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":15,\"src\":\"853:18:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_delegatecall_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$\",\"typeString\":\"function (uint256,uint256) pure returns (uint256)\"}},\"id\":96,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"853:38:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"functionReturnParameters\":89,\"id\":97,\"nodeType\":\"Return\",\"src\":\"846:45:1\"}]},\"documentation\":null,\"id\":99,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getBalanceInEth\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":86,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":85,\"name\":\"addr\",\"nodeType\":\"VariableDeclaration\",\"scope\":99,\"src\":\"803:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":84,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"803:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"802:14:1\"},\"returnParameters\":{\"id\":89,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":88,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":99,\"src\":\"837:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":87,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"837:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"836:6:1\"},\"scope\":112,\"src\":\"778:117:1\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":110,\"nodeType\":\"Block\",\"src\":\"958:29:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":106,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":23,\"src\":\"969:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":108,\"indexExpression\":{\"argumentTypes\":null,\"id\":107,\"name\":\"addr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":101,\"src\":\"978:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"969:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"functionReturnParameters\":105,\"id\":109,\"nodeType\":\"Return\",\"src\":\"962:21:1\"}]},\"documentation\":null,\"id\":111,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getBalance\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":102,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":101,\"name\":\"addr\",\"nodeType\":\"VariableDeclaration\",\"scope\":111,\"src\":\"918:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":100,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"918:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"917:14:1\"},\"returnParameters\":{\"id\":105,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":104,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":111,\"src\":\"952:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":103,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"952:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"951:6:1\"},\"scope\":112,\"src\":\"898:89:1\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"}],\"scope\":113,\"src\":\"315:674:1\"}],\"src\":\"0:990:1\"},\"legacyAST\":{\"absolutePath\":\"/C/Users/dhull/Development/dappetizer/fiddy-three/fiddythree/contracts/MetaCoin.sol\",\"exportedSymbols\":{\"MetaCoin\":[112]},\"id\":113,\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":18,\"literals\":[\"solidity\",\"^\",\"0.5\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:23:1\"},{\"absolutePath\":\"/C/Users/dhull/Development/dappetizer/fiddy-three/fiddythree/contracts/ConvertLib.sol\",\"file\":\"./ConvertLib.sol\",\"id\":19,\"nodeType\":\"ImportDirective\",\"scope\":113,\"sourceUnit\":17,\"src\":\"25:26:1\",\"symbolAliases\":[],\"unitAlias\":\"\"},{\"baseContracts\":[],\"contractDependencies\":[],\"contractKind\":\"contract\",\"documentation\":null,\"fullyImplemented\":true,\"id\":112,\"linearizedBaseContracts\":[112],\"name\":\"MetaCoin\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"constant\":false,\"id\":23,\"name\":\"balances\",\"nodeType\":\"VariableDeclaration\",\"scope\":112,\"src\":\"336:34:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"},\"typeName\":{\"id\":22,\"keyType\":{\"id\":20,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"345:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"336:25:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"},\"valueType\":{\"id\":21,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"356:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}},\"value\":null,\"visibility\":\"internal\"},{\"anonymous\":false,\"documentation\":null,\"id\":31,\"name\":\"Transfer\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":30,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":25,\"indexed\":true,\"name\":\"_from\",\"nodeType\":\"VariableDeclaration\",\"scope\":31,\"src\":\"389:21:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":24,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"389:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":27,\"indexed\":true,\"name\":\"_to\",\"nodeType\":\"VariableDeclaration\",\"scope\":31,\"src\":\"412:19:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":26,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"412:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":29,\"indexed\":false,\"name\":\"_value\",\"nodeType\":\"VariableDeclaration\",\"scope\":31,\"src\":\"433:14:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":28,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"433:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"388:60:1\"},\"src\":\"374:75:1\"},{\"body\":{\"id\":41,\"nodeType\":\"Block\",\"src\":\"473:35:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":39,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":34,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":23,\"src\":\"477:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":37,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":35,\"name\":\"tx\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":196,\"src\":\"486:2:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_transaction\",\"typeString\":\"tx\"}},\"id\":36,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"origin\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"486:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"477:19:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"hexValue\":\"3130303030\",\"id\":38,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"499:5:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_10000_by_1\",\"typeString\":\"int_const 10000\"},\"value\":\"10000\"},\"src\":\"477:27:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":40,\"nodeType\":\"ExpressionStatement\",\"src\":\"477:27:1\"}]},\"documentation\":null,\"id\":42,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":32,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"463:2:1\"},\"returnParameters\":{\"id\":33,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"473:0:1\"},\"scope\":112,\"src\":\"452:56:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":82,\"nodeType\":\"Block\",\"src\":\"592:183:1\",\"statements\":[{\"condition\":{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":56,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":51,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":23,\"src\":\"600:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":54,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":52,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":184,\"src\":\"609:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":53,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"609:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"600:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<\",\"rightExpression\":{\"argumentTypes\":null,\"id\":55,\"name\":\"amount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":46,\"src\":\"623:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"600:29:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"falseBody\":null,\"id\":59,\"nodeType\":\"IfStatement\",\"src\":\"596:47:1\",\"trueBody\":{\"expression\":{\"argumentTypes\":null,\"hexValue\":\"66616c7365\",\"id\":57,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"638:5:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"false\"},\"functionReturnParameters\":50,\"id\":58,\"nodeType\":\"Return\",\"src\":\"631:12:1\"}},{\"expression\":{\"argumentTypes\":null,\"id\":65,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":60,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":23,\"src\":\"647:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":63,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":61,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":184,\"src\":\"656:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":62,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"656:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"647:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"-=\",\"rightHandSide\":{\"argumentTypes\":null,\"id\":64,\"name\":\"amount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":46,\"src\":\"671:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"647:30:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":66,\"nodeType\":\"ExpressionStatement\",\"src\":\"647:30:1\"},{\"expression\":{\"argumentTypes\":null,\"id\":71,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":67,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":23,\"src\":\"681:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":69,\"indexExpression\":{\"argumentTypes\":null,\"id\":68,\"name\":\"receiver\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":44,\"src\":\"690:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"681:18:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"+=\",\"rightHandSide\":{\"argumentTypes\":null,\"id\":70,\"name\":\"amount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":46,\"src\":\"703:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"681:28:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":72,\"nodeType\":\"ExpressionStatement\",\"src\":\"681:28:1\"},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":74,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":184,\"src\":\"727:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":75,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"727:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},{\"argumentTypes\":null,\"id\":76,\"name\":\"receiver\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":44,\"src\":\"739:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},{\"argumentTypes\":null,\"id\":77,\"name\":\"amount\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":46,\"src\":\"749:6:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"},{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":73,\"name\":\"Transfer\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":31,\"src\":\"718:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$\",\"typeString\":\"function (address,address,uint256)\"}},\"id\":78,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"718:38:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":79,\"nodeType\":\"EmitStatement\",\"src\":\"713:43:1\"},{\"expression\":{\"argumentTypes\":null,\"hexValue\":\"74727565\",\"id\":80,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"767:4:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"functionReturnParameters\":50,\"id\":81,\"nodeType\":\"Return\",\"src\":\"760:11:1\"}]},\"documentation\":null,\"id\":83,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"sendCoin\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":47,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":44,\"name\":\"receiver\",\"nodeType\":\"VariableDeclaration\",\"scope\":83,\"src\":\"529:16:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":43,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"529:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":46,\"name\":\"amount\",\"nodeType\":\"VariableDeclaration\",\"scope\":83,\"src\":\"547:11:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":45,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"547:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"528:31:1\"},\"returnParameters\":{\"id\":50,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":49,\"name\":\"sufficient\",\"nodeType\":\"VariableDeclaration\",\"scope\":83,\"src\":\"575:15:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":48,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"575:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"574:17:1\"},\"scope\":112,\"src\":\"511:264:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":98,\"nodeType\":\"Block\",\"src\":\"842:53:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":93,\"name\":\"addr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":85,\"src\":\"883:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"id\":92,\"name\":\"getBalance\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":111,\"src\":\"872:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_view$_t_address_$returns$_t_uint256_$\",\"typeString\":\"function (address) view returns (uint256)\"}},\"id\":94,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"872:16:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"argumentTypes\":null,\"hexValue\":\"32\",\"id\":95,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"889:1:1\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_2_by_1\",\"typeString\":\"int_const 2\"},\"value\":\"2\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_rational_2_by_1\",\"typeString\":\"int_const 2\"}],\"expression\":{\"argumentTypes\":null,\"id\":90,\"name\":\"ConvertLib\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":16,\"src\":\"853:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_contract$_ConvertLib_$16_$\",\"typeString\":\"type(library ConvertLib)\"}},\"id\":91,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"convert\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":15,\"src\":\"853:18:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_delegatecall_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$\",\"typeString\":\"function (uint256,uint256) pure returns (uint256)\"}},\"id\":96,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"853:38:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"functionReturnParameters\":89,\"id\":97,\"nodeType\":\"Return\",\"src\":\"846:45:1\"}]},\"documentation\":null,\"id\":99,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getBalanceInEth\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":86,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":85,\"name\":\"addr\",\"nodeType\":\"VariableDeclaration\",\"scope\":99,\"src\":\"803:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":84,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"803:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"802:14:1\"},\"returnParameters\":{\"id\":89,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":88,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":99,\"src\":\"837:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":87,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"837:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"836:6:1\"},\"scope\":112,\"src\":\"778:117:1\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":110,\"nodeType\":\"Block\",\"src\":\"958:29:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":106,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":23,\"src\":\"969:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":108,\"indexExpression\":{\"argumentTypes\":null,\"id\":107,\"name\":\"addr\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":101,\"src\":\"978:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"969:14:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"functionReturnParameters\":105,\"id\":109,\"nodeType\":\"Return\",\"src\":\"962:21:1\"}]},\"documentation\":null,\"id\":111,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getBalance\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":102,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":101,\"name\":\"addr\",\"nodeType\":\"VariableDeclaration\",\"scope\":111,\"src\":\"918:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":100,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"918:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"917:14:1\"},\"returnParameters\":{\"id\":105,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":104,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":111,\"src\":\"952:4:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":103,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"952:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"951:6:1\"},\"scope\":112,\"src\":\"898:89:1\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"}],\"scope\":113,\"src\":\"315:674:1\"}],\"src\":\"0:990:1\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.5.16+commit.9c3226ce.Emscripten.clang\"},\"networks\":{\"5777\":{\"events\":{\"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef\":{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\",\"signature\":\"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef\"}},\"links\":{\"ConvertLib\":\"0x4a13B777F9A9ae0931C0AB63Fa0a91C4ac98Aede\"},\"address\":\"0x455b7F452Be6ccC86B8BC3EAA6BEF9986B214C32\",\"transactionHash\":\"0x79c890061cd63f88737ab741b17488860afcd3b5ca869dff5ef9255060c0c38a\"}},\"schemaVersion\":\"3.0.22\",\"updatedAt\":\"2020-01-25T17:00:46.983Z\",\"networkType\":\"ethereum\",\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}}");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">Angular Truffle Box</mat-toolbar>\r\n<app-meta-sender></app-meta-sender>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/meta/meta-sender/meta-sender.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/meta/meta-sender/meta-sender.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n  <mat-card-header>Balance</mat-card-header>\r\n  <mat-card-content>\r\n    <mat-form-field id=\"address-selector\" class=\"address-field\">\r\n      <mat-select name=\"account\" (selectionChange)=\"refreshBalance()\" [(value)]=\"model.account\" placeholder=\"Address\">\r\n        <mat-option *ngFor=\"let account of accounts\" [value]=\"account\">{{account}}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <p>You have <span id=\"balance\">{{model.balance}}</span> META</p>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card>\r\n  <mat-card-header>Send MetaCoin</mat-card-header>\r\n  <mat-card-content>\r\n    <mat-form-field>\r\n      <input type=\"text\" matInput id=\"amount\" placeholder=\"Amount\" (change)=\"setAmount($event)\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"address-field\">\r\n      <input type=\"text\" matInput id=\"receiver\" placeholder=\"Receiver Address\" (change)=\"setReceiver($event)\">\r\n    </mat-form-field>\r\n    <button mat-button id=\"send\" (click)=\"sendCoin()\">Send MetaCoin</button>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/web3-eth-accounts/src sync recursive":
/*!*************************************************!*\
  !*** ./node_modules/web3-eth-accounts/src sync ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/web3-eth-accounts/src sync recursive";

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _meta_meta_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meta/meta.module */ "./src/app/meta/meta.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _meta_meta_module__WEBPACK_IMPORTED_MODULE_6__["MetaModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/meta/meta-sender/meta-sender.component.css":
/*!************************************************************!*\
  !*** ./src/app/meta/meta-sender/meta-sender.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".address-field {\r\n  width: 400px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWV0YS9tZXRhLXNlbmRlci9tZXRhLXNlbmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbWV0YS9tZXRhLXNlbmRlci9tZXRhLXNlbmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZHJlc3MtZmllbGQge1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/meta/meta-sender/meta-sender.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/meta/meta-sender/meta-sender.component.ts ***!
  \***********************************************************/
/*! exports provided: MetaSenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaSenderComponent", function() { return MetaSenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/web3.service */ "./src/app/util/web3.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var metacoin_artifacts = __webpack_require__(/*! ../../../../build/contracts/MetaCoin.json */ "./build/contracts/MetaCoin.json");
var MetaSenderComponent = /** @class */ (function () {
    function MetaSenderComponent(web3Service, matSnackBar) {
        this.web3Service = web3Service;
        this.matSnackBar = matSnackBar;
        this.model = {
            amount: 5,
            receiver: '',
            balance: 0,
            account: ''
        };
        this.status = '';
        console.log('Constructor: ' + web3Service);
    }
    MetaSenderComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('OnInit: ' + this.web3Service);
        console.log(this);
        this.watchAccount();
        this.web3Service.artifactsToContract(metacoin_artifacts)
            .then(function (MetaCoinAbstraction) {
            _this.MetaCoin = MetaCoinAbstraction;
            _this.MetaCoin.deployed().then(function (deployed) {
                console.log(deployed);
                deployed.Transfer({}, function (err, ev) {
                    console.log('Transfer event came in, refreshing balance');
                    _this.refreshBalance();
                });
            });
        });
    };
    MetaSenderComponent.prototype.watchAccount = function () {
        var _this = this;
        this.web3Service.accountsObservable.subscribe(function (accounts) {
            _this.accounts = accounts;
            _this.model.account = accounts[0];
            _this.refreshBalance();
        });
    };
    MetaSenderComponent.prototype.setStatus = function (status) {
        this.matSnackBar.open(status, null, { duration: 3000 });
    };
    MetaSenderComponent.prototype.sendCoin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var amount, receiver, deployedMetaCoin, transaction, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.MetaCoin) {
                            this.setStatus('Metacoin is not loaded, unable to send transaction');
                            return [2 /*return*/];
                        }
                        amount = this.model.amount;
                        receiver = this.model.receiver;
                        console.log('Sending coins' + amount + ' to ' + receiver);
                        this.setStatus('Initiating transaction... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.MetaCoin.deployed()];
                    case 2:
                        deployedMetaCoin = _a.sent();
                        return [4 /*yield*/, deployedMetaCoin.sendCoin.sendTransaction(receiver, amount, { from: this.model.account })];
                    case 3:
                        transaction = _a.sent();
                        if (!transaction) {
                            this.setStatus('Transaction failed!');
                        }
                        else {
                            this.setStatus('Transaction complete!');
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.log(e_1);
                        this.setStatus('Error sending coin; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MetaSenderComponent.prototype.refreshBalance = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var deployedMetaCoin, metaCoinBalance, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Refreshing balance');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.MetaCoin.deployed()];
                    case 2:
                        deployedMetaCoin = _a.sent();
                        console.log(deployedMetaCoin);
                        console.log('Account', this.model.account);
                        return [4 /*yield*/, deployedMetaCoin.getBalance.call(this.model.account)];
                    case 3:
                        metaCoinBalance = _a.sent();
                        console.log('Found balance: ' + metaCoinBalance);
                        this.model.balance = metaCoinBalance;
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        console.log(e_2);
                        this.setStatus('Error getting balance; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MetaSenderComponent.prototype.setAmount = function (e) {
        console.log('Setting amount: ' + e.target.value);
        this.model.amount = e.target.value;
    };
    MetaSenderComponent.prototype.setReceiver = function (e) {
        console.log('Setting receiver: ' + e.target.value);
        this.model.receiver = e.target.value;
    };
    MetaSenderComponent.ctorParameters = function () { return [
        { type: _util_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
    ]; };
    MetaSenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meta-sender',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./meta-sender.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/meta/meta-sender/meta-sender.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./meta-sender.component.css */ "./src/app/meta/meta-sender/meta-sender.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], MetaSenderComponent);
    return MetaSenderComponent;
}());



/***/ }),

/***/ "./src/app/meta/meta.module.ts":
/*!*************************************!*\
  !*** ./src/app/meta/meta.module.ts ***!
  \*************************************/
/*! exports provided: MetaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaModule", function() { return MetaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _meta_sender_meta_sender_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meta-sender/meta-sender.component */ "./src/app/meta/meta-sender/meta-sender.component.ts");
/* harmony import */ var _util_util_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/util.module */ "./src/app/util/util.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");








var MetaModule = /** @class */ (function () {
    function MetaModule() {
    }
    MetaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _util_util_module__WEBPACK_IMPORTED_MODULE_4__["UtilModule"]
            ],
            declarations: [_meta_sender_meta_sender_component__WEBPACK_IMPORTED_MODULE_3__["MetaSenderComponent"]],
            exports: [_meta_sender_meta_sender_component__WEBPACK_IMPORTED_MODULE_3__["MetaSenderComponent"]]
        })
    ], MetaModule);
    return MetaModule;
}());



/***/ }),

/***/ "./src/app/util/util.module.ts":
/*!*************************************!*\
  !*** ./src/app/util/util.module.ts ***!
  \*************************************/
/*! exports provided: UtilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilModule", function() { return UtilModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _web3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web3.service */ "./src/app/util/web3.service.ts");




var UtilModule = /** @class */ (function () {
    function UtilModule() {
    }
    UtilModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [
                _web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"]
            ],
            declarations: []
        })
    ], UtilModule);
    return UtilModule;
}());



/***/ }),

/***/ "./src/app/util/web3.service.ts":
/*!**************************************!*\
  !*** ./src/app/util/web3.service.ts ***!
  \**************************************/
/*! exports provided: Web3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3Service", function() { return Web3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
var contract = __webpack_require__(/*! @truffle/contract */ "./node_modules/@truffle/contract/index.js");
var Web3Service = /** @class */ (function () {
    function Web3Service() {
        var _this = this;
        this.ready = false;
        this.accountsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        window.addEventListener('load', function (event) {
            _this.bootstrapWeb3();
        });
    }
    Web3Service.prototype.bootstrapWeb3 = function () {
        var _this = this;
        // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof window.ethereum !== 'undefined') {
            // Use Mist/MetaMask's provider
            window.ethereum.enable().then(function () {
                _this.web3 = new Web3(window.ethereum);
            });
        }
        else {
            console.log('No web3? You should consider trying MetaMask!');
            // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
            Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
            // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
            this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        }
        setInterval(function () { return _this.refreshAccounts(); }, 100);
    };
    Web3Service.prototype.artifactsToContract = function (artifacts) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var delay, contractAbstraction;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.web3) return [3 /*break*/, 3];
                        delay = new Promise(function (resolve) { return setTimeout(resolve, 100); });
                        return [4 /*yield*/, delay];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.artifactsToContract(artifacts)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        contractAbstraction = contract(artifacts);
                        contractAbstraction.setProvider(this.web3.currentProvider);
                        return [2 /*return*/, contractAbstraction];
                }
            });
        });
    };
    Web3Service.prototype.refreshAccounts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var accs;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.web3.eth.getAccounts()];
                    case 1:
                        accs = _a.sent();
                        console.log('Refreshing accounts');
                        // Get the initial account balance so it can be displayed.
                        if (accs.length === 0) {
                            console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                            return [2 /*return*/];
                        }
                        if (!this.accounts || this.accounts.length !== accs.length || this.accounts[0] !== accs[0]) {
                            console.log('Observed new accounts');
                            this.accountsObservable.next(accs);
                            this.accounts = accs;
                        }
                        this.ready = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Web3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Web3Service);
    return Web3Service;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dhull\Development\dappetizer\fiddy-three\fiddythree\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map