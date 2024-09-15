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

interface IFeatureCCTP {
    function tokenMessenger() external view returns (address);
    function usdc() external view returns (address);
    function circleDomain(uint _chainId) external view returns (uint32);
    function endpoints(uint _chainId) external view returns (address);
}

abstract contract FeatureCCTP is FeatureBase {
    address public usdc;

    ITokenMessenger public tokenMessenger;
    IFeatureCCTP public feature;

    function configure(IFeatureGateway _featureGateway) public onlyMessageOwner() {
        feature = IFeatureCCTP(_featureGateway.featureAddresses(uint32(9000000)));
        tokenMessenger = ITokenMessenger(feature.tokenMessenger());
        usdc = feature.usdc();
    }

    function _sendUSDC(uint _destChainId, address _recipient, uint _amount) internal {
        _sendUSDC(_destChainId, _recipient, _amount, '');
    }

    function _sendUSDC(uint _destChainId, address _recipient, uint _amount, bytes memory _data) internal {
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
    }

    function addressToBytes32(address _address) internal pure returns (bytes32) {
        return bytes32(uint256(uint160(_address)));
    }
}