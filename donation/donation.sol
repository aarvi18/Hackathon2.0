//SPDX-Licenses-Identifier: MIT
pragma solidity ^0.8.0;

contract Donating {
    mapping(address => uint256) public contributors;
    address public user;
    uint256 public Time;
    uint256 public amount;
    uint256 public raisedAmount;
    uint256 public noOfcontributors;

    constructor() public {
        Time = block.timestamp;
        user = msg.sender;
    }

    function sendEth() public payable {
        if(contributors[msg.sender] == 0) {
            noOfcontributors++;
        }

        contributors[msg.sender] += msg.value;
        raisedAmount += msg.value;
    }

    function getContractBalance() public view returns(uint256) {
        return address(this).balance;
    }

        
}
