// SPDX-License-Identifier: MIT
// (c)2021-2024 Atlas
// security-contact: atlas@vialabs.io

pragma solidity ^0.8.9;
import "./FeatureBase.sol";

interface IMessageTransmitter {
    function receiveMessage(bytes calldata message, bytes calldata attestation) external returns (bool success);
}

interface ITokenMessenger {
    function depositForBurnWithCaller(uint256 amount, uint32 destinationDomain, bytes32 mintRecipient, address burnToken, bytes32 destinationCaller) external returns (uint64 nonce);
}

interface IProtoCCTP {
    function tokenMessenger() external view returns (address);
    function usdc() external view returns (address);
    function circleDomain(uint _chainId) external view returns (uint32);
    function endpoints(uint _chainId) external view returns (address);
}

abstract contract ProtoCCTP is FeatureBase {
    address public usdc;

    ITokenMessenger public tokenMessenger;
    IProtoCCTP public feature;

    event LogAddress(address);
    event LogBytes32(bytes32);

    function configure(IFeatureGateway _featureGateway) public onlyMessageOwner() {
        feature = IProtoCCTP(_featureGateway.featureAddresses(uint32(9000000)));
        tokenMessenger = ITokenMessenger(feature.tokenMessenger());
        usdc = feature.usdc();
    }

    function _sendUSDC(uint _destChainId, address _recipient, uint _amount) internal {
        _sendUSDC(_destChainId, _recipient, _amount, '');
    }

    function _sendUSDC(uint _destChainId, address _recipient, uint _amount, bytes memory _data) internal {
        IERC20cl(usdc).transferFrom(msg.sender, address(this), _amount);

        uint32 _destCircleDomain = feature.circleDomain(_destChainId);
        IERC20cl(usdc).approve(address(tokenMessenger), _amount);
        tokenMessenger.depositForBurnWithCaller(
            _amount, 
            _destCircleDomain, 
            addressToBytes32(_recipient), 
            usdc,
            addressToBytes32(feature.endpoints(_destChainId))
        );
        _sendMessageWithFeature(_destChainId, _data, uint32(9000000), '');
        emit LogAddress(feature.endpoints(_destChainId));
        emit LogBytes32(addressToBytes32(feature.endpoints(_destChainId)));
        emit LogAddress(_recipient);
        emit LogBytes32(addressToBytes32(_recipient));
    }

    function addressToBytes32(address _address) internal pure returns (bytes32) {
        return bytes32(uint256(uint160(_address)));
    }
}