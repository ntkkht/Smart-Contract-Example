// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Certificate {
    address private owner;

    string[] certifiedList;

    event onAdd(string name, uint timeStamp);
    event onRemove(string name, uint timeStamp);

    constructor() {
        owner = msg.sender;
    }

    modifier isOwner() {
        require(owner == msg.sender, "You are not allowed to use");
        _;
    }

    function addCertified(
        string memory name
    ) public isOwner {
        certifiedList.push(name);
        emit onAdd(name, block.timestamp);
    }

    function removeCertified(
        uint index
    ) public isOwner {
        require(index < certifiedList.length, "Index is exceed array size");
        string memory removeCertifiedName = certifiedList[index];
        for (uint i = index; i < certifiedList.length - 1; i++){
            certifiedList[i] = certifiedList[i+1];
        }
        certifiedList.pop();
        emit onRemove(removeCertifiedName, block.timestamp);
    }

    function getCertified() public isOwner view returns(string[] memory) {
        return certifiedList;
    }
}