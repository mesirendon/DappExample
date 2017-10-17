pragma solidity ^0.4.15;

contract Person {

  string public name;
  address public owner;
  uint public balance;

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  function Person() {
    owner = msg.sender;
    balance = 1000;
  }

  function setName(string _name) onlyOwner {
    name = _name;
  }
}
