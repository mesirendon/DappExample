var Person = artifacts.require("Person");

module.exports = function(deployer) {
  deployer.deploy(Person);
};
