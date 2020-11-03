pragma solidity ^0.6.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";

contract TourHistory {
    address private owner;
    address public hotelPubkey;
    string public place;
    uint public price;
    bool isPublic;
    
    constructor (address ownerr, address hotelPubkeyy, string memory placee, uint pricee) public {
        owner = ownerr;
        hotelPubkey = hotelPubkeyy;
        place = placee;
        price = pricee;
    }
    
    
}


