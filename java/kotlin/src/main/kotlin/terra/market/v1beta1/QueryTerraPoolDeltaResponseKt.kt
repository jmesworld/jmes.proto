//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: jmes/market/v1beta1/query.proto

package jmes.market.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryJmesPoolDeltaResponse(block: jmes.market.v1beta1.QueryJmesPoolDeltaResponseKt.Dsl.() -> Unit): jmes.market.v1beta1.QueryOuterClass.QueryJmesPoolDeltaResponse =
  jmes.market.v1beta1.QueryJmesPoolDeltaResponseKt.Dsl._create(jmes.market.v1beta1.QueryOuterClass.QueryJmesPoolDeltaResponse.newBuilder()).apply { block() }._build()
object QueryJmesPoolDeltaResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: jmes.market.v1beta1.QueryOuterClass.QueryJmesPoolDeltaResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: jmes.market.v1beta1.QueryOuterClass.QueryJmesPoolDeltaResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): jmes.market.v1beta1.QueryOuterClass.QueryJmesPoolDeltaResponse = _builder.build()

    /**
     * <pre>
     * jmes_pool_delta defines the gap between the JmesPool and the JmesBasePool
     * </pre>
     *
     * <code>bytes jmes_pool_delta = 1 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec"];</code>
     */
    var jmesPoolDelta: com.google.protobuf.ByteString
      @JvmName("getJmesPoolDelta")
      get() = _builder.getJmesPoolDelta()
      @JvmName("setJmesPoolDelta")
      set(value) {
        _builder.setJmesPoolDelta(value)
      }
    /**
     * <pre>
     * jmes_pool_delta defines the gap between the JmesPool and the JmesBasePool
     * </pre>
     *
     * <code>bytes jmes_pool_delta = 1 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec"];</code>
     */
    fun clearJmesPoolDelta() {
      _builder.clearJmesPoolDelta()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun jmes.market.v1beta1.QueryOuterClass.QueryJmesPoolDeltaResponse.copy(block: jmes.market.v1beta1.QueryJmesPoolDeltaResponseKt.Dsl.() -> Unit): jmes.market.v1beta1.QueryOuterClass.QueryJmesPoolDeltaResponse =
  jmes.market.v1beta1.QueryJmesPoolDeltaResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
