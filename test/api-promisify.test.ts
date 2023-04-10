import { expectType } from 'tsd'

// call with callback
wx.requestMidasPayment({
  currencyType: 'CNY',
  mode: 'game',
  offerId: '',
  success(res) {
    expectType<WechatMinigame.GeneralCallbackResult>(res)
  },
})
wx.stopAccelerometer({
  fail(res) {
    expectType<WechatMinigame.GeneralCallbackResult>(res)
  },
})

wx.stopCompass({
  complete(res) {
    expectType<WechatMinigame.GeneralCallbackResult>(res)
  },
})

// call with Promise.prototype.then
wx.requestMidasPayment({
  currencyType: 'CNY',
  mode: 'game',
  offerId: '',
}).then(res => {
  expectType<WechatMinigame.GeneralCallbackResult>(res)
})
wx.stopAccelerometer().then(res => {
  expectType<WechatMinigame.GeneralCallbackResult>(res)
})
wx.stopCompass().then(res => {
  expectType<WechatMinigame.GeneralCallbackResult>(res)
})

// call with await
async () => {
  expectType<WechatMinigame.GeneralCallbackResult>(
    await wx.requestMidasPayment({
      currencyType: 'CNY',
      mode: 'game',
      offerId: '',
    }),
  )
  expectType<WechatMinigame.GeneralCallbackResult>(
    await wx.stopAccelerometer(),
  )
  expectType<WechatMinigame.GeneralCallbackResult>(await wx.stopCompass())
}
