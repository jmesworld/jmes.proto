//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: jmes/oracle/v1beta1/query.proto

package jmes.oracle.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryAggregatePrevoteResponse(block: jmes.oracle.v1beta1.QueryAggregatePrevoteResponseKt.Dsl.() -> Unit): jmes.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteResponse =
  jmes.oracle.v1beta1.QueryAggregatePrevoteResponseKt.Dsl._create(jmes.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteResponse.newBuilder()).apply { block() }._build()
object QueryAggregatePrevoteResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: jmes.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: jmes.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): jmes.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteResponse = _builder.build()

    /**
     * <pre>
     * aggregate_prevote defines oracle aggregate prevote submitted by a validator in the current vote period
     * </pre>
     *
     * <code>.jmes.oracle.v1beta1.AggregateExchangeRatePrevote aggregate_prevote = 1 [(.gogoproto.nullable) = false];</code>
     */
    var aggregatePrevote: jmes.oracle.v1beta1.Oracle.AggregateExchangeRatePrevote
      @JvmName("getAggregatePrevote")
      get() = _builder.getAggregatePrevote()
      @JvmName("setAggregatePrevote")
      set(value) {
        _builder.setAggregatePrevote(value)
      }
    /**
     * <pre>
     * aggregate_prevote defines oracle aggregate prevote submitted by a validator in the current vote period
     * </pre>
     *
     * <code>.jmes.oracle.v1beta1.AggregateExchangeRatePrevote aggregate_prevote = 1 [(.gogoproto.nullable) = false];</code>
     */
    fun clearAggregatePrevote() {
      _builder.clearAggregatePrevote()
    }
    /**
     * <pre>
     * aggregate_prevote defines oracle aggregate prevote submitted by a validator in the current vote period
     * </pre>
     *
     * <code>.jmes.oracle.v1beta1.AggregateExchangeRatePrevote aggregate_prevote = 1 [(.gogoproto.nullable) = false];</code>
     * @return Whether the aggregatePrevote field is set.
     */
    fun hasAggregatePrevote(): kotlin.Boolean {
      return _builder.hasAggregatePrevote()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun jmes.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteResponse.copy(block: jmes.oracle.v1beta1.QueryAggregatePrevoteResponseKt.Dsl.() -> Unit): jmes.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteResponse =
  jmes.oracle.v1beta1.QueryAggregatePrevoteResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
