//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: jmes/treasury/v1beta1/query.proto

package jmes.treasury.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryTaxCapResponse(block: jmes.treasury.v1beta1.QueryTaxCapResponseKt.Dsl.() -> Unit): jmes.treasury.v1beta1.QueryOuterClass.QueryTaxCapResponse =
  jmes.treasury.v1beta1.QueryTaxCapResponseKt.Dsl._create(jmes.treasury.v1beta1.QueryOuterClass.QueryTaxCapResponse.newBuilder()).apply { block() }._build()
object QueryTaxCapResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: jmes.treasury.v1beta1.QueryOuterClass.QueryTaxCapResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: jmes.treasury.v1beta1.QueryOuterClass.QueryTaxCapResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): jmes.treasury.v1beta1.QueryOuterClass.QueryTaxCapResponse = _builder.build()

    /**
     * <code>string tax_cap = 1 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int"];</code>
     */
    var taxCap: kotlin.String
      @JvmName("getTaxCap")
      get() = _builder.getTaxCap()
      @JvmName("setTaxCap")
      set(value) {
        _builder.setTaxCap(value)
      }
    /**
     * <code>string tax_cap = 1 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int"];</code>
     */
    fun clearTaxCap() {
      _builder.clearTaxCap()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun jmes.treasury.v1beta1.QueryOuterClass.QueryTaxCapResponse.copy(block: jmes.treasury.v1beta1.QueryTaxCapResponseKt.Dsl.() -> Unit): jmes.treasury.v1beta1.QueryOuterClass.QueryTaxCapResponse =
  jmes.treasury.v1beta1.QueryTaxCapResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
