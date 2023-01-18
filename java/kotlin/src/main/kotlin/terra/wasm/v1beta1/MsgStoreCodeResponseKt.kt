//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: jmes/wasm/v1beta1/tx.proto

package jmes.wasm.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun msgStoreCodeResponse(block: jmes.wasm.v1beta1.MsgStoreCodeResponseKt.Dsl.() -> Unit): jmes.wasm.v1beta1.Tx.MsgStoreCodeResponse =
  jmes.wasm.v1beta1.MsgStoreCodeResponseKt.Dsl._create(jmes.wasm.v1beta1.Tx.MsgStoreCodeResponse.newBuilder()).apply { block() }._build()
object MsgStoreCodeResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: jmes.wasm.v1beta1.Tx.MsgStoreCodeResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: jmes.wasm.v1beta1.Tx.MsgStoreCodeResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): jmes.wasm.v1beta1.Tx.MsgStoreCodeResponse = _builder.build()

    /**
     * <pre>
     * CodeID is the reference to the stored WASM code
     * </pre>
     *
     * <code>uint64 code_id = 1 [(.gogoproto.customname) = "CodeID", (.gogoproto.moretags) = "yaml:&#92;"code_id&#92;""];</code>
     */
    var codeId: kotlin.Long
      @JvmName("getCodeId")
      get() = _builder.getCodeId()
      @JvmName("setCodeId")
      set(value) {
        _builder.setCodeId(value)
      }
    /**
     * <pre>
     * CodeID is the reference to the stored WASM code
     * </pre>
     *
     * <code>uint64 code_id = 1 [(.gogoproto.customname) = "CodeID", (.gogoproto.moretags) = "yaml:&#92;"code_id&#92;""];</code>
     */
    fun clearCodeId() {
      _builder.clearCodeId()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun jmes.wasm.v1beta1.Tx.MsgStoreCodeResponse.copy(block: jmes.wasm.v1beta1.MsgStoreCodeResponseKt.Dsl.() -> Unit): jmes.wasm.v1beta1.Tx.MsgStoreCodeResponse =
  jmes.wasm.v1beta1.MsgStoreCodeResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
