//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: jmes/wasm/v1beta1/genesis.proto

package jmes.wasm.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun code(block: jmes.wasm.v1beta1.CodeKt.Dsl.() -> Unit): jmes.wasm.v1beta1.Genesis.Code =
  jmes.wasm.v1beta1.CodeKt.Dsl._create(jmes.wasm.v1beta1.Genesis.Code.newBuilder()).apply { block() }._build()
object CodeKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: jmes.wasm.v1beta1.Genesis.Code.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: jmes.wasm.v1beta1.Genesis.Code.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): jmes.wasm.v1beta1.Genesis.Code = _builder.build()

    /**
     * <code>.jmes.wasm.v1beta1.CodeInfo code_info = 1 [(.gogoproto.nullable) = false];</code>
     */
    var codeInfo: jmes.wasm.v1beta1.Wasm.CodeInfo
      @JvmName("getCodeInfo")
      get() = _builder.getCodeInfo()
      @JvmName("setCodeInfo")
      set(value) {
        _builder.setCodeInfo(value)
      }
    /**
     * <code>.jmes.wasm.v1beta1.CodeInfo code_info = 1 [(.gogoproto.nullable) = false];</code>
     */
    fun clearCodeInfo() {
      _builder.clearCodeInfo()
    }
    /**
     * <code>.jmes.wasm.v1beta1.CodeInfo code_info = 1 [(.gogoproto.nullable) = false];</code>
     * @return Whether the codeInfo field is set.
     */
    fun hasCodeInfo(): kotlin.Boolean {
      return _builder.hasCodeInfo()
    }

    /**
     * <code>bytes code_bytes = 2;</code>
     */
    var codeBytes: com.google.protobuf.ByteString
      @JvmName("getCodeBytes")
      get() = _builder.getCodeBytes()
      @JvmName("setCodeBytes")
      set(value) {
        _builder.setCodeBytes(value)
      }
    /**
     * <code>bytes code_bytes = 2;</code>
     */
    fun clearCodeBytes() {
      _builder.clearCodeBytes()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun jmes.wasm.v1beta1.Genesis.Code.copy(block: jmes.wasm.v1beta1.CodeKt.Dsl.() -> Unit): jmes.wasm.v1beta1.Genesis.Code =
  jmes.wasm.v1beta1.CodeKt.Dsl._create(this.toBuilder()).apply { block() }._build()
