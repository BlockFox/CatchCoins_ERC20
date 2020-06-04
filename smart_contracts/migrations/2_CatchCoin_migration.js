const CatchCoinToken = artifacts.require("CatchCoinToken");

module.exports = function(deployer) {
  deployer.deploy(CatchCoinToken, "CatchCoinToken", "CCT", 0);
};
