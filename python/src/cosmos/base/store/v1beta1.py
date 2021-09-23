# Generated by the protocol buffer compiler.  DO NOT EDIT!
# sources: cosmos/base/store/v1beta1/commit_info.proto, cosmos/base/store/v1beta1/snapshot.proto, cosmos/base/store/v1beta1/listening.proto
# plugin: python-betterproto
from dataclasses import dataclass
from typing import List

import betterproto


@dataclass
class CommitInfo(betterproto.Message):
    """
    CommitInfo defines commit information used by the multi-store when
    committing a version/height.
    """

    version: int = betterproto.int64_field(1)
    store_infos: List["StoreInfo"] = betterproto.message_field(2)


@dataclass
class StoreInfo(betterproto.Message):
    """
    StoreInfo defines store-specific commit information. It contains a
    reference between a store name and the commit ID.
    """

    name: str = betterproto.string_field(1)
    commit_id: "CommitID" = betterproto.message_field(2)


@dataclass
class CommitID(betterproto.Message):
    """
    CommitID defines the committment information when a specific store is
    committed.
    """

    version: int = betterproto.int64_field(1)
    hash: bytes = betterproto.bytes_field(2)


@dataclass
class SnapshotItem(betterproto.Message):
    """SnapshotItem is an item contained in a rootmulti.Store snapshot."""

    store: "SnapshotStoreItem" = betterproto.message_field(1, group="item")
    iavl: "SnapshotIAVLItem" = betterproto.message_field(2, group="item")


@dataclass
class SnapshotStoreItem(betterproto.Message):
    """SnapshotStoreItem contains metadata about a snapshotted store."""

    name: str = betterproto.string_field(1)


@dataclass
class SnapshotIAVLItem(betterproto.Message):
    """SnapshotIAVLItem is an exported IAVL node."""

    key: bytes = betterproto.bytes_field(1)
    value: bytes = betterproto.bytes_field(2)
    version: int = betterproto.int64_field(3)
    height: int = betterproto.int32_field(4)


@dataclass
class StoreKVPair(betterproto.Message):
    """
    StoreKVPair is a KVStore KVPair used for listening to state changes (Sets
    and Deletes) It optionally includes the StoreKey for the originating
    KVStore and a Boolean flag to distinguish between Sets and Deletes
    """

    store_key: str = betterproto.string_field(1)
    delete: bool = betterproto.bool_field(2)
    key: bytes = betterproto.bytes_field(3)
    value: bytes = betterproto.bytes_field(4)
