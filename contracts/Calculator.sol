//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Calculator {
    address private _owner;
    uint256 public result;

    event Calculated(uint256 result);

    constructor() {
        console.log("Deploying a Calcultator with owner %s", _owner);
        _owner = msg.sender;
    }

    function add(uint256 nb1, uint256 nb2) public returns (uint256) {
        console.log("Result is %s", result);
        return result = nb1 + nb2;
        emit Calculated(result);
    }

    function sub(uint256 nb1, uint256 nb2) public returns (uint256) {
        console.log("Result is %s", result);
        return result = nb1 - nb2;
        emit Calculated(result);
    }

    function mul(uint256 nb1, uint256 nb2) public returns (uint256) {
        console.log("Result is %s", result);
        return result = nb1 * nb2;
        emit Calculated(result);
    }

    function div(uint256 nb1, uint256 nb2) public returns (uint256) {
        console.log("Result is %s", result);
        require(nb2 != 0, "Calculator: cannot divide by zero");
        return result = nb1 / nb2;
        emit Calculated(result);
    }

    function mod(uint256 nb1, uint256 nb2) public returns (uint256) {
        console.log("Result is %s", result);
        return result = nb1 % nb2;
        emit Calculated(result);
    }
}
