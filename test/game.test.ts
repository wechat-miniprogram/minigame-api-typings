import { expectType } from 'tsd'

const canvas = wx.createCanvas()
const context = canvas.getContext('2d') // 创建一个 2d context
context.fillStyle = '#1aad19' // 矩形颜色
context.fillRect(0, 0, 100, 100) // 矩形左上角顶点为(0, 0)，右下角顶点为(100, 100)
context.fillRect(canvas.width / 2 - 50, 0, 100, 100)
function drawRect(x: number, y: number) {
  context.clearRect(x, y - 1, 100, 100)
  context.fillRect(x, y, 100, 100)
}
drawRect(canvas.width / 2 - 50, 0)
const rectX = canvas.width / 2 - 50
let rectY = 0
setInterval(function() {
  drawRect(rectX, rectY++)
}, 16)
const image = wx.createImage()
const imgX = canvas.width / 2 - 50
const imgY = 500
image.onload = function() {
  context.drawImage(image, imgX, imgY)
}
image.src = 'img/plane.png'

// 存储当前飞机左上角坐标
let touchX = imgX
let touchY = imgY
wx.onTouchMove(function(res) {
  context.clearRect(touchX, touchY, 100, 100) // 清除画布上原有的飞机
  touchX = res.changedTouches[0].clientX // 重新判断当前触摸点x坐标
  touchY = res.changedTouches[0].clientY // 重新判断当前触摸点x坐标
  context.drawImage(image, touchX, touchY)
  if (
    touchX >= rectX - 100 &&
    touchX <= rectX + 100 &&
    touchY >= rectY - 100 &&
    touchY <= rectY + 100
  ) {
    // 飞机与矩形发生碰撞
    wx.showModal({
      title: '提示',
      content: '发生碰撞，游戏结束！',
    })
  }
})

// common.js
function sayHello(name: string) {
  console.log(`Hello ${name} !`)
}
function sayGoodbye(name: string) {
  console.log(`Goodbye ${name} !`)
}

module.exports.sayHello = sayHello
exports.sayGoodbye = sayGoodbye

GameGlobal.globalData = 1

console.log(GameGlobal.globalData) // 输出 "1"

const updateManager = wx.getUpdateManager()

updateManager.onCheckForUpdate(function(res) {
  // 请求完新版本信息的回调
  console.log(res.hasUpdate)
})

updateManager.onUpdateReady(function() {
  wx.showModal({
    title: '更新提示',
    content: '新版本已经准备好，是否重启应用？',
    success(res) {
      if (res.confirm) {
        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        updateManager.applyUpdate()
      }
    },
  })
})

updateManager.onUpdateFailed(function() {
  // 新版本下载失败
})

const fs = wx.getFileSystemManager()
wx.chooseImage({
  success(res) {
    expectType<string[]>(res.tempFilePaths) // tempFilePaths 的每一项是一个本地临时文件路径
  },
})
fs.saveFile({
  tempFilePath: '', // 传入一个本地临时文件路径
  success(res) {
    console.log(res.savedFilePath) // res.savedFilePath 为一个本地缓存文件路径
  },
})
// 在本地用户文件目录下创建一个文件 hello.txt，写入内容 "hello, world"
fs.writeFileSync(`${wx.env.USER_DATA_PATH}/hello.txt`, 'hello, world', 'utf8')

const url = 'https://developers.weixin.qq.com'
const audio = wx.createInnerAudioContext()
audio.src = url // src 可以设置 http(s) 的路径，本地文件路径或者代码包文件路径
audio.play()
audio.obeyMuteSwitch = false

const bgm = wx.createInnerAudioContext()
bgm.autoplay = true
bgm.loop = true
bgm.src = url

wx.onShow(function() {
  bgm.play()
})

wx.onAudioInterruptionEnd(function() {
  bgm.play()
})

wx.onAudioInterruptionBegin(function() {
  // 暂停游戏
})

const src =
  'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'

const video = wx.createVideo({
  x: 10,
  y: 76,
  width: 300,
  height: 200,
  poster: '',
  // 显示默认的视频控件
  controls: true,
  // 传入
  src,
})

video.play()
video.pause()
video.seek(10)

video.onTimeUpdate(res => {
  expectType<number>(res.position) // 当前进度
  expectType<number>(res.duration) // 视频总时长
})

video.onEnded(() => {
  console.log('视频播放完了')
})

{
  const callback = (res: WechatMinigame.OnTimeUpdateListenerResult) => {
    expectType<number>(res.position) // 当前进度
    expectType<number>(res.duration) // 视频总时长

    // 当播放到第 3 秒时，调用 off* 接口取消对该事件的监听，callback 函数将不再执行
    if (res.position >= 3) {
      // video.offTimeUpdate(callback)
    }
  }

  video.onTimeUpdate(callback)
}

video.onTimeUpdate(res => {
  expectType<number>(res.position) // 当前进度
  expectType<number>(res.duration) // 视频总时长
})

video.play()

video.destroy()

const loadTask = wx.loadSubpackage({
  name: 'stage1', // name 可以填 name 或者 root
  success() {
    // 分包加载成功后通过 success 回调
  },
  fail() {
    // 分包加载失败通过 fail 回调
  },
  complete() {},
})

loadTask.onProgressUpdate(res => {
  expectType<number>(res.progress) // 下载进度
  expectType<number>(res.totalBytesWritten) // 已经下载的数据长度
  expectType<number>(res.totalBytesExpectedToWrite) // 预期需要下载的数据总长度
})

const worker = wx.createWorker('workers/request/index.js') // 文件名指定 worker 的入口文件路径，绝对路径

worker.postMessage({
  msg: 'hello worker',
})

const bannerAd = wx.createBannerAd({
  adUnitId: 'xxxx',
  style: {
    left: 10,
    top: 76,
    width: 320,
    height: 0,
  },
  adIntervals: 30, // 自动刷新频率不能小于30秒
})
bannerAd.show()
bannerAd.hide()
bannerAd.onError(err => {
  console.log(err)
})
bannerAd.show().catch(err => console.log(err))
bannerAd.onLoad(() => {
  console.log('banner 广告加载成功')
})
bannerAd.show().then(() => console.log('banner 广告显示'))
bannerAd.style.width = 400
const { screenWidth } = wx.getSystemInfoSync()
expectType<number>(screenWidth)
bannerAd.onResize(res => {
  console.log(res.width, res.height)
  console.log(bannerAd.style.realWidth, bannerAd.style.realHeight)
})
bannerAd.onResize(res => {
  bannerAd.style.width = res.width + Math.random() * 10
})
bannerAd.destroy()

const video1 = wx.createRewardedVideoAd({ adUnitId: 'xxxx' })
const video2 = wx.createRewardedVideoAd({ adUnitId: 'xxxx' })
console.log(video1 === video2)

const rewardedVideoAd = wx.createRewardedVideoAd({ adUnitId: 'xxxx' })
rewardedVideoAd.onLoad(() => {
  console.log('激励视频 广告加载成功')
})

rewardedVideoAd.show().then(() => console.log('激励视频 广告显示'))

rewardedVideoAd.onError(err => {
  console.log(err)
})
rewardedVideoAd.show().catch(err => console.log(err))

rewardedVideoAd.show().catch(() => {
  rewardedVideoAd.load().then(() => rewardedVideoAd.show())
})

const interstitialAd = wx.createInterstitialAd({ adUnitId: 'xxxx' })

interstitialAd.show().catch(err => {
  console.error(err)
})
interstitialAd.onLoad(() => {
  console.log('插屏 广告加载成功')
})
interstitialAd.onError(err => {
  console.log(err)
})
interstitialAd.onClose(() => {
  console.log('插屏 广告关闭')
})

wx.onShareAppMessage(function() {
  // 用户点击了“转发”按钮
  return {
    title: '转发标题',
  }
})

wx.shareAppMessage({
  title: '转发标题',
})

wx.onShareAppMessage(function() {
  return {
    title: '转发标题',
    imageUrl: canvas.toTempFilePathSync({
      destWidth: 500,
      destHeight: 400,
    }),
  }
})

const id = ''
wx.shareAppMessage({
  imageUrlId: id, // 通过 MP 系统审核的图片编号
  imageUrl: url, // 通过 MP 系统审核的图片地址
})

wx.onShareAppMessage(function() {
  return {
    imageUrlId: id,
    imageUrl: url,
  }
})

// 设置 withShareTicket: true
wx.updateShareMenu({
  withShareTicket: true,
})

wx.updateShareMenu({
  withShareTicket: true,
  isUpdatableMessage: true,
  activityId: '', // 活动 ID
  templateInfo: {
    parameterList: [
      {
        name: 'member_count',
        value: '1',
      },
      {
        name: 'room_limit',
        value: '3',
      },
    ],
  },
})

const openDataContext = wx.getOpenDataContext()
openDataContext.postMessage({
  text: 'hello',
  year: new Date().getFullYear(),
})
