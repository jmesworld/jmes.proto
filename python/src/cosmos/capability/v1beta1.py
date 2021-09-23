# Generated by the protocol buffer compiler.  DO NOT EDIT!
# sources: cosmos/capability/v1beta1/capability.proto, cosmos/capability/v1beta1/genesis.proto
# plugin: python-betterproto
from dataclasses import dataclass
from typing import List

import betterproto


@dataclass
class Capability(betterproto.Message):
    """
    Capability defines an implementation of an object capability. The index
    provided to a Capability must be globally unique.
    """

    index: int = betterproto.uint64_field(1)


@dataclass
class Owner(betterproto.Message):
    """
    Owner defines a single capability owner. An owner is defined by the name of
    capability and the module name.
    """

    module: str = betterproto.string_field(1)
    name: str = betterproto.string_field(2)


@dataclass
class CapabilityOwners(betterproto.Message):
    """
    CapabilityOwners defines a set of owners of a single Capability. The set of
    owners must be unique.
    """

    owners: List["Owner"] = betterproto.message_field(1)


@dataclass
class GenesisOwners(betterproto.Message):
    """
    GenesisOwners defines the capability owners with their corresponding index.
    """

    # index is the index of the capability owner.
    index: int = betterproto.uint64_field(1)
    # index_owners are the owners at the given index.
    index_owners: "CapabilityOwners" = betterproto.message_field(2)


@dataclass
class GenesisState(betterproto.Message):
    """GenesisState defines the capability module's genesis state."""

    # index is the capability global index.
    index: int = betterproto.uint64_field(1)
    # owners represents a map from index to owners of the capability index index
    # key is string to allow amino marshalling.
    owners: List["GenesisOwners"] = betterproto.message_field(2)
