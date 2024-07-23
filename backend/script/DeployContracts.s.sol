// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "../lib/forge-std/src/Script.sol";
import "../src/Contracts/organizations/organisationFactory.sol";
import "../src/Contracts/certificates/certificateFactory.sol";
import "../src/Interfaces/Ichild.sol";

contract DeployContracts is Script {
    organisationFactory _organisationFactory;
    certificateFactory _certificateFactory;

    individual student1;
    individual[] students;

    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        // uint256 deployerPrivateKey2 = vm.envUint("PRIVATE_KEY2");
        vm.startBroadcast(deployerPrivateKey);
        student1._address = address(0x7379ec8392c7684cecd0550A688D729717EBBB01);
        student1._name = "SAMUEL";
        students.push(student1);
        _certificateFactory = new certificateFactory();
        _organisationFactory = new organisationFactory(
            address(_certificateFactory)
        );
        (
            address Organisation,
            address OrganisationNft,
            address OrganisationMentorsSpok,
            address OrganizationCertNft
        ) = _organisationFactory.createorganisation(
                "WEB3BRIDGE",
                "COHORT XI",
                "http://test.org",
                "CHINONSO"
            );
        // ICHILD(Organisation).registerStudents(students);

        vm.stopBroadcast();
        writeAddressesToFile(
            address(_organisationFactory),
            "Organisation Factory"
        );
        writeAddressesToFile(Organisation, "Organisation Address");
        writeAddressesToFile(OrganisationNft, "Organisation NFTAddress");
    }

    function writeAddressesToFile(address addr, string memory text) public {
        string memory filename = "./deployed_contracts2.txt";

        vm.writeLine(
            filename,
            "-------------------------------------------------"
        );
        vm.writeLine(filename, text);
        vm.writeLine(filename, vm.toString(addr));
        vm.writeLine(
            filename,
            "-------------------------------------------------"
        );
    }
}
