pragma solidity ^0.6.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";
import "./TourHistory.sol";
import "./UEF.sol";

contract NEMOCHAIN is ERC721 {
    address private owner;
    string private password;
    uint private tokenCnt;
    uint private inf;
    mapping (uint => TourHistory) private _tokenURIs;
    mapping(address => bool) public bought;
    
    // UEFToken UEFContract;
    
    struct Wallet {
        uint value;
        TourHistory[] uri;
    }
    
    struct User {
        address pubKey;
        string username;
        string idenityCard;
        string DOB;
        string email;
        string userAddress;
        bool registered;
       // TourHistory[] history;
    }
    
    mapping(address => User) private users;
    Wallet private wallet;
    
    
    
    constructor () ERC721("TOURCHAIN TOKEN", "TRC") public {
        tokenCnt = 0;
        inf = 1e25;
        owner = msg.sender;
        // UEFContract = UEFToken(fromStringToAddress("0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8"));
    }
    
    modifier onlyFounder() {
        require(msg.sender == owner, "Your re not the founder");
        _;
    }
    
    
    modifier isValid(uint id) {
        super._isApprovedOrOwner(msg.sender, id);
        _;
    }
    function _setTokenURI(uint tokenId, string memory _tokenURI) internal override {}
    function _setTokenURI(uint tokenId, TourHistory contractAddress) internal {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        _tokenURIs[tokenId] = contractAddress;
    }
    
    function _getTokenURI(uint id) public view isValid(id) returns (TourHistory) {
        return _tokenURIs[id];
    }
    
    function _isRegistered(address user) public view returns (bool) {
        return users[user].registered;
    }
    
    function _createAccount(string memory username, string memory userAddress, string memory email, string memory idenityCard, string  memory DOB) public {
        require(!users[msg.sender].registered, "You have already registered");
        User memory newUser = User({
            pubKey: msg.sender,
            username: username, 
            idenityCard: idenityCard, 
            DOB: DOB, 
            email: email,
            userAddress: userAddress,
            registered: true
        });
        users[msg.sender] = newUser;
    }
    
    function _bookTour(address payable to, string memory place, uint price) public payable {
        require(msg.value >= price, "Not enought money");
        
        // calculate value
        uint payment = (msg.value*80)/100;
        to.transfer(payment);
        
        //mint token and create history
        _mint(msg.sender, ++tokenCnt);
        TourHistory newTour = new TourHistory(msg.sender, to, place, price);
        _setTokenURI(tokenCnt, newTour);
    }
    
    function _shareData(uint index) public isValid(tokenOfOwnerByIndex(msg.sender, index-1)) returns (uint) {
        uint cnt = 0;
        if(index != 0) {
            uint tokenId = tokenOfOwnerByIndex(msg.sender, index-1);
            cnt++;
            wallet.uri.push(_getTokenURI(tokenId));
            super._transfer(msg.sender, owner, tokenId);
        } else {
            for(uint i = 0; i < balanceOf(msg.sender); i++) {
                uint tokenId = tokenOfOwnerByIndex(msg.sender, i);
                cnt++;
                wallet.uri.push(_getTokenURI(tokenId));
                super._transfer(msg.sender, owner, tokenId);
            }
        }
        return cnt;
    }
    
    function _buyData(uint price) public payable {
        require(msg.value >= price, "No enough money");
        wallet.value += price * 8 / 10;
        bought[msg.sender] = true;
    }
    
    
    function _disable(address approver) public onlyFounder {
        super.setApprovalForAll(approver, false);
    }
    
    
    
}


