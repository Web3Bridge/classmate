// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "../../../lib/openzeppelin-contracts.git/contracts/token/ERC1155/ERC1155.sol";

contract mentorsSpok is ERC1155 {
    string public name;
    string public symbol;
    address public admin;
    uint256 private nextTokenId = 0;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _initialUri,
        address _admin
    ) ERC1155(_initialUri) {
        name = _name;
        symbol = _symbol;
        admin = _admin;
    }

    modifier onlyOwner() {
        require(msg.sender == admin, "Caller is not the owner");
        _;
    }

    function mintToMentor(address _mentor, uint256 _amount) public onlyOwner {
        _mint(_mentor, nextTokenId, _amount, "");
        nextTokenId++;
    }

    function setTokenURI(string memory _tokenURI) public onlyOwner {
        _setURI(_tokenURI);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public override {
        revert("TOKEN IS SOUL BUND");
    }

    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public override {
        revert("TOKEN IS SOUL BUND");
    }
}
