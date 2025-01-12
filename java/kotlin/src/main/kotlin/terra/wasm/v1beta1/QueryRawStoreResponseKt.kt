//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: jmes/wasm/v1beta1/query.proto

package jmes.wasm.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryRawStoreResponse(block: jmes.wasm.v1beta1.QueryRawStoreResponseKt.Dsl.() -> Unit): jmes.wasm.v1beta1.QueryOuterClass.QueryRawStoreResponse =
  jmes.wasm.v1beta1.QueryRawStoreResponseKt.Dsl._create(jmes.wasm.v1beta1.QueryOuterClass.QueryRawStoreResponse.newBuilder()).apply { block() }._build()
object QueryRawStoreResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: jmes.wasm.v1beta1.QueryOuterClass.QueryRawStoreResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: jmes.wasm.v1beta1.QueryOuterClass.QueryRawStoreResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): jmes.wasm.v1beta1.QueryOuterClass.QueryRawStoreResponse = _builder.build()

    /**
     * <pre>
     * Data contains the raw store data
     * </pre>
     *
     * <code>bytes data = 1;</code>
     */
    var data: com.google.protobuf.ByteString
      @JvmName("getData")
      get() = _builder.getData()
      @JvmName("setData")
      set(value) {
        _builder.setData(value)
      }
    /**
     * <pre>
     * Data contains the raw store data
     * </pre>
     *
     * <code>bytes data = 1;</code>
     */
    fun clearData() {
      _builder.clearData()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun jmes.wasm.v1beta1.QueryOuterClass.QueryRawStoreResponse.copy(block: jmes.wasm.v1beta1.QueryRawStoreResponseKt.Dsl.() -> Unit): jmes.wasm.v1beta1.QueryOuterClass.QueryRawStoreResponse =
  jmes.wasm.v1beta1.QueryRawStoreResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
