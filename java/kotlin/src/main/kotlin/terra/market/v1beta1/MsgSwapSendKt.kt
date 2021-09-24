//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: terra/market/v1beta1/tx.proto

package terra.market.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun msgSwapSend(block: terra.market.v1beta1.MsgSwapSendKt.Dsl.() -> Unit): terra.market.v1beta1.Tx.MsgSwapSend =
  terra.market.v1beta1.MsgSwapSendKt.Dsl._create(terra.market.v1beta1.Tx.MsgSwapSend.newBuilder()).apply { block() }._build()
object MsgSwapSendKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: terra.market.v1beta1.Tx.MsgSwapSend.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: terra.market.v1beta1.Tx.MsgSwapSend.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): terra.market.v1beta1.Tx.MsgSwapSend = _builder.build()

    /**
     * <code>string from_address = 1 [(.gogoproto.moretags) = "yaml:&#92;"from_address&#92;""];</code>
     */
    var fromAddress: kotlin.String
      @JvmName("getFromAddress")
      get() = _builder.getFromAddress()
      @JvmName("setFromAddress")
      set(value) {
        _builder.setFromAddress(value)
      }
    /**
     * <code>string from_address = 1 [(.gogoproto.moretags) = "yaml:&#92;"from_address&#92;""];</code>
     */
    fun clearFromAddress() {
      _builder.clearFromAddress()
    }

    /**
     * <code>string to_address = 2 [(.gogoproto.moretags) = "yaml:&#92;"to_address&#92;""];</code>
     */
    var toAddress: kotlin.String
      @JvmName("getToAddress")
      get() = _builder.getToAddress()
      @JvmName("setToAddress")
      set(value) {
        _builder.setToAddress(value)
      }
    /**
     * <code>string to_address = 2 [(.gogoproto.moretags) = "yaml:&#92;"to_address&#92;""];</code>
     */
    fun clearToAddress() {
      _builder.clearToAddress()
    }

    /**
     * <code>.cosmos.base.v1beta1.Coin offer_coin = 3 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"offer_coin&#92;""];</code>
     */
    var offerCoin: cosmos.base.v1beta1.CoinOuterClass.Coin
      @JvmName("getOfferCoin")
      get() = _builder.getOfferCoin()
      @JvmName("setOfferCoin")
      set(value) {
        _builder.setOfferCoin(value)
      }
    /**
     * <code>.cosmos.base.v1beta1.Coin offer_coin = 3 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"offer_coin&#92;""];</code>
     */
    fun clearOfferCoin() {
      _builder.clearOfferCoin()
    }
    /**
     * <code>.cosmos.base.v1beta1.Coin offer_coin = 3 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"offer_coin&#92;""];</code>
     * @return Whether the offerCoin field is set.
     */
    fun hasOfferCoin(): kotlin.Boolean {
      return _builder.hasOfferCoin()
    }

    /**
     * <code>string ask_denom = 4 [(.gogoproto.moretags) = "yaml:&#92;"ask_denom&#92;""];</code>
     */
    var askDenom: kotlin.String
      @JvmName("getAskDenom")
      get() = _builder.getAskDenom()
      @JvmName("setAskDenom")
      set(value) {
        _builder.setAskDenom(value)
      }
    /**
     * <code>string ask_denom = 4 [(.gogoproto.moretags) = "yaml:&#92;"ask_denom&#92;""];</code>
     */
    fun clearAskDenom() {
      _builder.clearAskDenom()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun terra.market.v1beta1.Tx.MsgSwapSend.copy(block: terra.market.v1beta1.MsgSwapSendKt.Dsl.() -> Unit): terra.market.v1beta1.Tx.MsgSwapSend =
  terra.market.v1beta1.MsgSwapSendKt.Dsl._create(this.toBuilder()).apply { block() }._build()