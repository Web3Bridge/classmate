// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./SchoolCertificate.sol";
import "./SchoolsNFT.sol";

import "./schoolMentorsSpok.sol";

contract certificateFactory {
    address Admin;

    constructor() {
        Admin = msg.sender;
    }

    function createCertificateNft(
        string memory Name,
        string memory Symbol,
        address institution
    ) public returns (address) {
        Certificate newCertificateAdd = new Certificate(
            Name,
            Symbol,
            institution
        );
        return address(newCertificateAdd);
    }

    function createAttendanceNft(
        string memory Name,
        string memory Symbol,
        string memory Uri,
        address _Admin
    ) public returns (address) {
        SchoolsNFT newSchoolsNFT = new SchoolsNFT(Name, Symbol, Uri, _Admin);
        return address(newSchoolsNFT);
    }

    function createMentorsSpok(
        string memory _name,
        string memory _symbol,
        string memory _uri,
        address _admin
    ) external returns (address) {
        require(msg.sender == Admin, "Only admin can create Mentors SPOK");
        mentorsSpok newMentorsSpok = new mentorsSpok(
            _name,
            _symbol,
            _uri,
            _admin
        );
        return address(newMentorsSpok);
    }

    function completePackage(
        string memory Name,
        string memory Symbol,
        string memory Uri,
        address _Admin
    ) external returns (address newCertificateAdd, address newSchoolsNFT) {
        newCertificateAdd = createCertificateNft(Name, Symbol, _Admin);
        newSchoolsNFT = createAttendanceNft(Name, Symbol, Uri, _Admin);
        // newMentorsSpok = createMentorsSpok(Name, Symbol, Uri, _Admin);
    }
}
