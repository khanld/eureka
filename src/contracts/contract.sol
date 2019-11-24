pragma solidity ^0.5.11;

//Founder: 0x9113A1d7A8d600f69024550C276106bDCD52259A
//Issuer: 0x14a812669cC393290416Ab9613737B7958FF134c
//Student: 0x4dF231C38b4Bb27c3060F5817Cd831286C94A49C
//Company: 0x3A7f0D0b04FFc154f7650EA1b31368491D548a94

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721Full.sol";

contract Factory is ERC721Full {
    struct Issuer {
        bool registered;
        Certificate[] certificates;
    }
    
    struct Company {
        bool registered;
        mapping(address => bool) employees;
    }
    
    struct Experience {
        address[] prevCompanies;
        uint startTime;
        uint lastExperience;
    }

    
    address public founder;
    
    mapping(address => Issuer) public issuers;
    mapping(address => Company) public companies;
    
    mapping(uint256 => Certificate) private certAddresses;
    mapping(address => Experience) experience;
    
    constructor() public ERC721Full("Certificate", "CRT") {
        founder = msg.sender;
    }
    
    //modifier function
    modifier onlyFounder() {
        require(msg.sender == founder, "Only founder can call this function");
        _;
    }
    
    modifier onlyRegisteredIssuer() {
        require(issuers[msg.sender].registered, "Only registered issuer can call this function");
        _;
    }
    
    modifier onlyRegisteredCompany() {
        require(companies[msg.sender].registered, "Only registered company can call this function");
        _;
    }
    
    //Fix available code
    function transferFrom(address from, address to, uint256 tokenId) public {}
    function safeTransferFrom(address from, address to, uint256 tokenId) public {}
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory _data) public {}
    
    function getCertificateAddress(uint256 tokenId) public view returns (Certificate) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        require(
            ownerOf(tokenId) == msg.sender || getApproved(tokenId) == msg.sender, 
            "You are not allowed to call this function without the owner's permission"
        );
        
        return certAddresses[tokenId];
    }
    
    function setCertAddress(uint256 tokenId, Certificate certAdress) internal {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        certAddresses[tokenId] = certAdress;
    }
    
    
    //Collect issuer and create certificate
    function registerIssuer(address issuerAddress) public onlyFounder {
        require(!issuers[issuerAddress].registered, "This issuer has already registerd");
        
        Issuer memory issuer = Issuer({
            registered: true,
            certificates: new Certificate[](0)
        });
        
        issuers[issuerAddress] = issuer;
    }

    function registerCompany(address companyAddress) public onlyFounder {
        require(!companies[companyAddress].registered, "This issuer has already registerd");
        
        Company memory company = Company({
            registered: true
        });
        
        companies[companyAddress] = company;
    }


    function createCertificateToken(
            address to,
            string memory info
            
    ) public onlyRegisteredIssuer() {
        uint tokenId = totalSupply();
        
        //Mint certificate
        _mint(to, tokenId);
        
        //Create a certificate on blockchain
        Certificate newCertificate = new Certificate(info, to);
        
        //Set certificate URI
        setCertAddress(tokenId, newCertificate);
        
        issuers[msg.sender].certificates.push(newCertificate);
    }
    
    function getCertificateList() public view returns(Certificate[] memory) {
        return issuers[msg.sender].certificates;
    }
    
    //Calculcate the experience
    function startJob(address employee) public onlyRegisteredCompany {
        require(experience[employee].startTime == 0, "This employee have not quit his previous job yet ");
        
        experience[employee].startTime = now;
        experience[employee].prevCompanies.push(msg.sender);
        
        companies[msg.sender].employees[employee] = true;
    }
    
    function endJob(address employee) public onlyRegisteredCompany {
        require(companies[msg.sender].employees[employee], "This employee does not belong to your company");
        
        uint currentExperience = now - experience[employee].startTime;
        
        experience[employee].startTime = 0;
        experience[employee].lastExperience += currentExperience;
        
        delete companies[msg.sender].employees[employee];
    }
    
    function getEmployeeExperience(address employee) public view returns (uint) {
        if(experience[employee].lastExperience == 0)
            return now - experience[employee].startTime;
            
        return experience[employee].lastExperience;
    }
    
    function getEmployeePrevCompanies(address employee) public view returns (address[] memory) {
        return experience[employee].prevCompanies;
    }
    
    function setApproval(address to, uint256 tokenId, address certAdress) public {
        require(ownerOf(tokenId) == msg.sender, "You are not the owner of this token");
        
        Certificate certificate = Certificate(certAdress);
        certificate.setApproval(to);
        
        approve(to, tokenId);
    }
    
}

contract Certificate {
    address public owner;
    address public factory;
    address public issuer;
    string private certificate;
    mapping(address => bool) private approvers;
    
    constructor(string memory info, address ownerAddress) public {
        issuer = tx.origin;
        factory = msg.sender;
        owner = ownerAddress;
        certificate = info;
  
        approvers[issuer] = true;
    }
    
    
    modifier onlyOwner() {
        require(tx.origin == owner, "You are not owner of this certificate");
        _;
    }
    
    function setApproval(address approver) external onlyOwner {
        approvers[approver] = true;
    }
    
    function getCertificateInfo() public view returns (string memory) {
        require(approvers[msg.sender] || msg.sender == owner, "Only approvers can view the certificate");
        return certificate;
    }

}