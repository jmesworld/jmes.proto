//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: jmes/treasury/v1beta1/query.proto

package jmes.treasury.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun querySeigniorageProceedsResponse(block: jmes.treasury.v1beta1.QuerySeigniorageProceedsResponseKt.Dsl.() -> Unit): jmes.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse =
  jmes.treasury.v1beta1.QuerySeigniorageProceedsResponseKt.Dsl._create(jmes.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse.newBuilder()).apply { block() }._build()
object QuerySeigniorageProceedsResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: jmes.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: jmes.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): jmes.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse = _builder.build()

    /**
     * <code>string seigniorage_proceeds = 1 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int"];</code>
     */
    var seigniorageProceeds: kotlin.String
      @JvmName("getSeigniorageProceeds")
      get() = _builder.getSeigniorageProceeds()
      @JvmName("setSeigniorageProceeds")
      set(value) {
        _builder.setSeigniorageProceeds(value)
      }
    /**
     * <code>string seigniorage_proceeds = 1 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int"];</code>
     */
    fun clearSeigniorageProceeds() {
      _builder.clearSeigniorageProceeds()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun jmes.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse.copy(block: jmes.treasury.v1beta1.QuerySeigniorageProceedsResponseKt.Dsl.() -> Unit): jmes.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse =
  jmes.treasury.v1beta1.QuerySeigniorageProceedsResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
