//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: jmes/oracle/v1beta1/tx.proto

package jmes.oracle.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun msgDelegateFeedConsentResponse(block: jmes.oracle.v1beta1.MsgDelegateFeedConsentResponseKt.Dsl.() -> Unit): jmes.oracle.v1beta1.Tx.MsgDelegateFeedConsentResponse =
  jmes.oracle.v1beta1.MsgDelegateFeedConsentResponseKt.Dsl._create(jmes.oracle.v1beta1.Tx.MsgDelegateFeedConsentResponse.newBuilder()).apply { block() }._build()
object MsgDelegateFeedConsentResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: jmes.oracle.v1beta1.Tx.MsgDelegateFeedConsentResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: jmes.oracle.v1beta1.Tx.MsgDelegateFeedConsentResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): jmes.oracle.v1beta1.Tx.MsgDelegateFeedConsentResponse = _builder.build()
  }
}
@kotlin.jvm.JvmSynthetic
inline fun jmes.oracle.v1beta1.Tx.MsgDelegateFeedConsentResponse.copy(block: jmes.oracle.v1beta1.MsgDelegateFeedConsentResponseKt.Dsl.() -> Unit): jmes.oracle.v1beta1.Tx.MsgDelegateFeedConsentResponse =
  jmes.oracle.v1beta1.MsgDelegateFeedConsentResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
