var Person = artifacts.require("Person");
chai = require("chai");
chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

expect = chai.expect;

contract("Testing the Person contract", function(accounts) {
  describe("Deploying the contract", function() {
    it("Gets an instance of the Person contract", function() {
      return Person.new().then(function(instance) {
        personContract = instance;
      });
    });
  });


  describe("Testing Person contract variables", function() {
    describe("Variable: name", function() {
      it("Use setName to set the name of the account's beholder", function() {
        return personContract.setName("Maria").then(function(response) {
          expect(response).to.not.be.an("error");
        });
      });

      it("Checks the account's beholder was set properly", function() {
        return personContract.name().then(function(response) {
          expect(response.toString()).to.be.equal("Maria");
        });
      });

      it("Check the account's beholder name cannot be modified by another account", function() {
        return expect(personContract.setName("Pedro", {"from": accounts[1]})).to.be.eventually.rejected;
      });

      it("Checks the account's beholder is still Maria", function() {
        return personContract.name().then(function(response) {
          expect(response.toString()).to.be.equal("Maria");
        });
      });
    });

    describe("Variable: balance", function() {
      it("Should be 1000 by default", function() {
        return personContract.balance().then(function(response) {
          expect(response.toString()).to.be.equal("1000");
        });
      });
    });
  });
});
