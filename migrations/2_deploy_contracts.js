var FiddyFiddy = artifacts.require("./FiddyFiddy.sol");

module.exports = function(deployer) {
	deployer.deploy(FiddyFiddy);
};
