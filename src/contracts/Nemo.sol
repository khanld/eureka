pragma solidity ^0.6.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract NemoToken is ERC20 {
    
    address private holder;
    uint private initSupply = 1e18;
    
    constructor () ERC20("Nemo Token", "Nemo") public {
        holder = msg.sender;
        _mint(holder, initSupply);
    }
    
    function compareStrings(string memory a, string memory b) private returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }
    
    modifier isValid() {
        require(msg.sender == holder, "Your re not the founder");
        _;
    }
    
}