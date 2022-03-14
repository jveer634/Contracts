// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Storage {
    uint256 public value;

    constructor(uint256 val) {
        value = val;
    }

    function update(uint256 val) external returns (bool) {
        value = val;
        return true;
    }
}
