//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: jmes/wasm/v1beta1/tx.proto

package jmes.wasm.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun msgUpdateContractAdminResponse(block: jmes.wasm.v1beta1.MsgUpdateContractAdminResponseKt.Dsl.() -> Unit): jmes.wasm.v1beta1.Tx.MsgUpdateContractAdminResponse =
  jmes.wasm.v1beta1.MsgUpdateContractAdminResponseKt.Dsl._create(jmes.wasm.v1beta1.Tx.MsgUpdateContractAdminResponse.newBuilder()).apply { block() }._build()
object MsgUpdateContractAdminResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: jmes.wasm.v1beta1.Tx.MsgUpdateContractAdminResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: jmes.wasm.v1beta1.Tx.MsgUpdateContractAdminResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): jmes.wasm.v1beta1.Tx.MsgUpdateContractAdminResponse = _builder.build()
  }
}
@kotlin.jvm.JvmSynthetic
inline fun jmes.wasm.v1beta1.Tx.MsgUpdateContractAdminResponse.copy(block: jmes.wasm.v1beta1.MsgUpdateContractAdminResponseKt.Dsl.() -> Unit): jmes.wasm.v1beta1.Tx.MsgUpdateContractAdminResponse =
  jmes.wasm.v1beta1.MsgUpdateContractAdminResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
