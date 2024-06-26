// SPDX-License-Identifier: MIT
// (c)2021-2024 Atlas
// security-contact: atlas@vialabs.io

pragma solidity ^0.8.9;

import "./MessageClient.sol";

interface ISingleMessageDispatcher {
    event MessageDispatched(
        bytes32 indexed messageId,
        address indexed from,
        uint256 indexed toChainId,
        address to,
        bytes data
    );

    function dispatchMessage(uint256 toChainId, address to, bytes calldata data) external payable returns (bytes32 messageId);
    function getMessageExecutorAddress(uint256 toChainId) external returns (address);
}

interface ISingleMessageExecutor {
    error MessageIdAlreadyExecuted(bytes32 messageId);
    error MessageFailure(bytes32 messageId, bytes errorData);
    event MessageIdExecuted(uint256 indexed fromChainId, bytes32 indexed messageId);

    function executeMessage(
        address to,
        bytes calldata data,
        bytes32 messageId,
        uint256 fromChainId,
        address from
    ) external;
}

/**
 * @title ERC5164 implementation of MessageClient
 * @notice https://eips.ethereum.org/EIPS/eip-5164
 */
abstract contract ERC5164 is MessageClient, ISingleMessageDispatcher, ISingleMessageExecutor {
    // @dev: this must only be executed by the contract itself as msg.sender and only if it is configured for the message client: onlySelf(address(this), block.chainid)
    function executeMessage(address _to, bytes calldata _data, bytes32 _messageId, uint256 _fromChainId, address _from) public virtual onlySelf(address(this), block.chainid) {
    }

    function dispatchMessage(uint256 _toChainId, address _to, bytes calldata _data) external payable returns (bytes32 _messageId) {
        ChainData memory _chain = CHAINS[_toChainId];
        uint _txId = IMessageV3(MESSAGEv3).sendMessage(
            _to,
            _toChainId,
            _data,
            _chain.confirmations,
            false
        );

        _messageId = bytes32(abi.encodePacked(_txId));
        emit MessageDispatched(_messageId, address(this), _toChainId, _to, _data);        
    }
    
    function getMessageExecutorAddress(uint256 _toChainId) external view returns (address) {
        return CHAINS[_toChainId].endpoint;
    }
    
    function messageProcess(
        uint _txId,          // transaction id
        uint _sourceChainId, // source chain id
        address _sender,     // corresponding MessageClient address on source chain
        address,             // (optional source reference address)
        uint,                // (not used for messages, always 0)
        bytes calldata _data // encoded message from source chain
    ) external override onlySelf(_sender, _sourceChainId) {
        bytes32 _messageId = bytes32(abi.encodePacked(_txId));
        
        try this.executeMessage(address(this), _data, _messageId, _sourceChainId, _sender) {
            emit MessageIdExecuted(_sourceChainId, _messageId);
        } catch Error(string memory _reason) {
            revert MessageFailure(bytes32(_messageId), abi.encodePacked(_reason));
        }
    }
}