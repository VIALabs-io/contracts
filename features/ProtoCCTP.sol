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
    function pathwayRootCircleDomain(uint _chainId) external view returns (uint32);
    function endpoints(uint _chainId) external view returns (address);
    function chainIdToPathwayAddress(uint _chainId) external view returns (address);
    function pathwayRootChainId(uint _chainId) external view returns (uint);
}

interface IBridgedTokenFiatManager {
    function bridge(address recipient, uint amount) external returns (uint256 txId);
    function bridge(address recipient, uint amount, bytes memory data) external returns (uint256 txId);
}

abstract contract ProtoCCTP is FeatureBase {
    address public usdc;

    ITokenMessenger public tokenMessenger;
    IProtoCCTP public feature;

    function configure(IFeatureGateway _featureGateway) public onlyMessageOwner() {
        feature = IProtoCCTP(_featureGateway.featureAddresses(uint32(9000000)));
        tokenMessenger = ITokenMessenger(feature.tokenMessenger());
        usdc = feature.usdc();
    }

    /**
     * Send USDC to destination chain/recipient without passing additonal message data.
     */
    function _sendUSDC(uint _destChainId, address _recipient, uint _amount) internal {
        _sendUSDC(_destChainId, _recipient, _amount, '');
    }

    /**
     * Send USDC to destination chain/recipient along with additional arbitrary message data.
     * USDC is sent to the destination _recipient which happens before the MessageV3.process() call.
     * This means funds will be delivered even if the calling destination is a contract that reverts.
     */
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
    }

    function addressToBytes32(address _address) internal pure returns (bytes32) {
        return bytes32(uint256(uint160(_address)));
    }
}