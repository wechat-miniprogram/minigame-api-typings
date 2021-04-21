import { expectType } from 'tsd'

// Test case from `DownloadTask`
{
  const downloadTask = wx.downloadFile({
    url: 'http://example.com/audio/123', // 仅为示例，并非真实的资源
    success() {},
  })

  downloadTask.onProgressUpdate(res => {
    console.log('下载进度', res.progress)
    console.log('已经下载的数据长度', res.totalBytesWritten)
    console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
  })

  downloadTask.abort() // 取消下载任务
}

// Test case from `InnerAudioContext`
{
  const innerAudioContext = wx.createInnerAudioContext()
  innerAudioContext.autoplay = true
  innerAudioContext.src =
    'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
  innerAudioContext.onPlay(() => {
    console.log('开始播放')
  })
  innerAudioContext.onError(res => {
    // console.log(res.errMsg)
    console.log(res.errCode)
  })
}

// Test case from `RecorderManager`
{
  const recorderManager = wx.getRecorderManager()

  recorderManager.onStart(() => {
    console.log('recorder start')
  })
  recorderManager.onPause(() => {
    console.log('recorder pause')
  })
  recorderManager.onStop(res => {
    console.log('recorder stop', res)
    const { tempFilePath } = res
    expectType<string>(tempFilePath)
  })
  recorderManager.onFrameRecorded(res => {
    const { frameBuffer } = res
    console.log('frameBuffer.byteLength', frameBuffer.byteLength)
  })

  recorderManager.start({
    duration: 10000,
    sampleRate: 44100,
    numberOfChannels: 1,
    encodeBitRate: 192000,
    format: 'aac',
    frameSize: 50,
  })
}

// Test case from `RequestTask`
{
  const requestTask = wx.request({
    url: 'test.php', // 仅为示例，并非真实的接口地址
    data: {
      x: '',
      y: '',
    },
    header: {
      'content-type': 'application/json',
    },
    success(res) {
      console.log(res.data)
    },
  })
  requestTask.abort() // 取消请求任务
}

// Test case from `UpdateManager`
{
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
}

// Test case from `UploadTask`
{
  const uploadTask = wx.uploadFile({
    url: 'http://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
    filePath: '',
    name: 'file',
    formData: {
      user: 'test',
    },
    success(res) {
      const data = res.data
      expectType<string>(data)
    },
  })

  uploadTask.onProgressUpdate(res => {
    console.log('上传进度', res.progress)
    console.log('已经上传的数据长度', res.totalBytesSent)
    console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
  })

  uploadTask.abort() // 取消上传任务
}

// Test case from `Worker.postMessage`
{
  const worker = wx.createWorker('workers/request/index.js') // 文件名指定 worker 的入口文件路径，绝对路径
  worker.postMessage({
    msg: 'hello from worker',
  })
}

// Test case from `wx.createWorker`
{
  // 创建普通worker
  wx.createWorker('workers/index.js')
}

// Test case from `wx.createWorker`
{
  // 创建实验worker
  const worker = wx.createWorker('workers/index.js', {
    useExperimentalWorker: true,
  })

  // 监听worker被系统回收事件
  worker.onProcessKilled(() => {
    // 重新创建一个worker
    wx.createWorker('workers/index.js', {
      useExperimentalWorker: true,
    })
  })
}

// Test case from `Worker`
{
  const worker = wx.createWorker('workers/request/index.js') // 文件名指定 worker 的入口文件路径，绝对路径

  worker.onMessage(function(res) {
    console.log(res)
  })

  // 监听worker被系统回收事件
  worker.onProcessKilled(function () {
    console.log('worker has been killed')
    // 重新创建一个worker
    // wx.createWorker()
  })

  worker.postMessage({
    msg: 'hello worker',
  })

  worker.terminate()
}

// Test case from `wx.addCard`
{
  wx.addCard({
    cardList: [
      {
        cardId: '',
        cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}',
      },
      {
        cardId: '',
        cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}',
      },
    ],
    success(res) {
      console.log(res.cardList) // 卡券添加结果
    },
  })
}

// Test case from `wx.authorize`
{
  wx.getSetting({
    success(res) {
      if (!res.authSetting['scope.werun']) {
        wx.authorize({
          scope: 'scope.werun',
          success() {},
        })
      }
    },
  })
}

// Test case from `wx.checkSession`
{
  wx.checkSession({
    success() {
      // session_key 未过期，并且在本生命周期一直有效
    },
    fail() {
      // session_key 已经失效，需要重新执行登录流程
      wx.login() // 重新登录
    },
  })
}

// Test case from `wx.clearStorageSync`
{
  wx.clearStorage()
}

// Test case from `wx.clearStorage`
{
  wx.clearStorage()
}

// Test case from `wx.closeSocket`
{
  wx.connectSocket({
    url: 'test.php',
  })

  // 注意这里有时序问题，
  // 如果 wx.connectSocket 还没回调 wx.onSocketOpen，而先调用 wx.closeSocket，那么就做不到关闭 WebSocket 的目的。
  // 必须在 WebSocket 打开期间调用 wx.closeSocket 才能关闭。
  wx.onSocketOpen(function() {
    wx.closeSocket()
  })

  wx.onSocketClose(function() {
    console.log('WebSocket 已关闭！')
  })
}

// Test case from `wx.connectSocket`
{
  wx.connectSocket({
    url: 'wss://example.qq.com',
    header: {
      'content-type': 'application/json',
    },
    protocols: ['protocol1'],
  })
}

// Test case from `wx.downloadFile`
{
  wx.downloadFile({
    url: 'https://example.com/audio/123', // 仅为示例，并非真实的资源
    success(res) {
      // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
      if (res.statusCode === 200) {
      }
    },
  })
}

// Test case from `wx.getClipboardData`
{
  wx.getClipboardData({
    success(res) {
      console.log(res.data)
    },
  })
}

// Test case from `wx.getLogManager`
{
  const logger = wx.getLogManager({ level: 1 })
  logger.log({ str: 'hello world' }, 'basic log', 100, [1, 2, 3])
  logger.info({ str: 'hello world' }, 'info log', 100, [1, 2, 3])
  logger.debug({ str: 'hello world' }, 'debug log', 100, [1, 2, 3])
  logger.warn({ str: 'hello world' }, 'warn log', 100, [1, 2, 3])
}

// Test case from `wx.getNetworkType`
{
  wx.getNetworkType({
    success(res) {
      expectType<'wifi' | '2g' | '3g' | '4g' | '5g' | 'unknown' | 'none'>(
        res.networkType,
      )
    },
  })
}

// Test case from `wx.getSetting`
{
  wx.getSetting({
    success(res) {
      console.log(res.authSetting)
      res.authSetting = {
        'scope.userInfo': true,
        'scope.userLocation': true,
      }
    },
  })
}

// Test case from `wx.getStorageInfoSync`
{
  wx.getStorageInfo({
    success(res) {
      console.log(res.keys)
      console.log(res.currentSize)
      console.log(res.limitSize)
    },
  })
}

// Test case from `wx.getStorageInfo`
{
  wx.getStorageInfo({
    success(res) {
      console.log(res.keys)
      console.log(res.currentSize)
      console.log(res.limitSize)
    },
  })
}

// Test case from `wx.getStorageSync`
{
  wx.getStorage({
    key: 'key',
    success(res) {
      console.log(res.data)
    },
  })
}

// Test case from `wx.getStorage`
{
  wx.getStorage({
    key: 'key',
    success(res) {
      console.log(res.data)
    },
  })
}

// Test case from `wx.getSystemInfoSync`
{
  wx.getSystemInfo({
    success(res) {
      console.log(res.model)
      console.log(res.pixelRatio)
      console.log(res.windowWidth)
      console.log(res.windowHeight)
      console.log(res.language)
      console.log(res.version)
      console.log(res.platform)
    },
  })
}

// Test case from `wx.getSystemInfo`
{
  wx.getSystemInfo({
    success(res) {
      expectType<string>(res.model)
      expectType<number>(res.pixelRatio)
      expectType<number>(res.windowWidth)
      expectType<number>(res.windowHeight)
      expectType<string>(res.language)
      expectType<string>(res.version)
      expectType<string>(res.platform)
    },
  })
}

// Test case from `wx.getSystemInfoAsync`
{
  wx.getSystemInfoAsync({
    success (res) {
      expectType<string>(res.model)
      expectType<number>(res.pixelRatio)
      expectType<number>(res.windowWidth)
      expectType<number>(res.windowHeight)
      expectType<string>(res.language)
      expectType<string>(res.version)
      expectType<string>(res.platform)
    }
  })
}

// Test case from `wx.getUserInfo`
{
  // 必须是在用户已经授权的情况下调用
  wx.getUserInfo({
    success(res) {
      const userInfo = res.userInfo
      expectType<string>(userInfo.nickName)
      expectType<string>(userInfo.avatarUrl)
      expectType<0 | 1 | 2>(userInfo.gender)
      expectType<string>(userInfo.province)
      expectType<string>(userInfo.city)
      expectType<string>(userInfo.country)
    },
  })
}

// Test case from `wx.getWeRunData`
{
  wx.getWeRunData({
    success(res) {
      // 拿 encryptedData 到开发者后台解密开放数据
      expectType<string>(res.encryptedData)
      // 或拿 cloudID 通过云调用直接获取开放数据
      expectType<string>(res.cloudID)
    },
  })
}

// Test case from `wx.hideShareMenu`
{
  wx.hideShareMenu()
}

// Test case from `wx.hideShareMenu`
{
  wx.hideShareMenu({
    menus: ['shareAppMessage', 'shareTimeline'],
  })
}

// Test case from `wx.login`
{
  wx.login({
    success(res) {
      if (res.code) {
        // 发起网络请求
        wx.request({
          url: 'https://test.com/onLogin',
          data: {
            code: res.code,
          },
        })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    },
  })
}

// Test case from `wx.navigateToMiniProgram`
{
  wx.navigateToMiniProgram({
    appId: '',
    path: 'page/index/index?id=123',
    extraData: {
      foo: 'bar',
    },
    envVersion: 'develop',
    success() {
      // 打开成功
    },
  })
}

// Test case from `wx.onAccelerometerChange`
{
  wx.onAccelerometerChange(function(res) {
    expectType<number>(res.x)
    expectType<number>(res.y)
    expectType<number>(res.z)
  })
}

// Test case from `wx.onNetworkStatusChange`
{
  wx.onNetworkStatusChange(function(res) {
    expectType<boolean>(res.isConnected)
    expectType<
      'wifi' | '2g' | '3g' | '4g' | 'unknown' | 'none'
    >(res.networkType)
  })
}

// Test case from `wx.onUserCaptureScreen`
{
  wx.onUserCaptureScreen(function() {
    console.log('用户截屏了')
  })
}

// Test case from `wx.openCard`
{
  wx.openCard({
    cardList: [
      {
        cardId: '',
        code: '',
      },
      {
        cardId: '',
        code: '',
      },
    ],
    success() {},
  })
}

// Test case from `wx.openSetting`
{
  wx.openSetting({
    success(res) {
      console.log(res.authSetting)
      // res.authSetting = {
      //   "scope.userInfo": true,
      //   "scope.userLocation": true
      // }
    },
  })
}

// Test case from `wx.previewImage`
{
  wx.previewImage({
    current: '', // 当前显示图片的http链接
    urls: [], // 需要预览的图片http链接列表
  })
}

// Test case from `wx.removeStorageSync`
{
  wx.removeStorage({
    key: 'key',
    success(res) {
      console.log(res)
    },
  })
}

// Test case from `wx.removeStorage`
{
  wx.removeStorage({
    key: 'key',
    success(res) {
      console.log(res)
    },
  })
}

// Test case from `wx.request`
{
  wx.request({
    url: 'test.php', // 仅为示例，并非真实的接口地址
    data: {
      x: '',
      y: '',
    },
    header: {
      'content-type': 'application/json', // 默认值
    },
    success(res) {
      console.log(res.data)
    },
  })
}

// Test case from `wx.saveImageToPhotosAlbum`
{
  wx.saveImageToPhotosAlbum({
    filePath: '',
    success() {},
  })
}

// Test case from `wx.sendSocketMessage`
{
  let socketOpen = false
  let socketMsgQueue: string[] = []
  wx.connectSocket({
    url: 'test.php',
  })

  wx.onSocketOpen(function() {
    socketOpen = true
    socketMsgQueue.forEach(socketMsg => {
      sendSocketMessage(socketMsg)
    })
    socketMsgQueue = []
  })

  const sendSocketMessage = (msg: string) => {
    if (socketOpen) {
      wx.sendSocketMessage({
        data: msg,
      })
    } else {
      socketMsgQueue.push(msg)
    }
  }
}

// Test case from `wx.setClipboardData`
{
  wx.setClipboardData({
    data: 'data',
    success() {
      wx.getClipboardData({
        success(res) {
          console.log(res.data) // data
        },
      })
    },
  })
}

// Test case from `wx.setKeepScreenOn`
{
  wx.setKeepScreenOn({
    keepScreenOn: true,
  })
}

// Test case from `wx.setStorageSync`
{
  wx.setStorage({
    key: 'key',
    data: 'value',
  })
}

// Test case from `wx.setStorage`
{
  wx.setStorage({
    key: 'key',
    data: 'value',
  })
}

// Test case from `wx.showActionSheet`
{
  wx.showActionSheet({
    itemList: ['A', 'B', 'C'],
    success(res) {
      console.log(res.tapIndex)
    },
    fail(res) {
      console.log(res.errMsg)
    },
  })
}

// Test case from `wx.showLoading`
{
  wx.showLoading({
    title: '加载中',
  })

  setTimeout(function() {
    wx.hideLoading()
  }, 2000)
}

// Test case from `wx.showModal`
{
  wx.showModal({
    title: '提示',
    content: '这是一个模态弹窗',
    success(res) {
      if (res.confirm) {
        console.log('用户点击确定')
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    },
  })
}

// Test case from `wx.showShareMenu`
{
  wx.showShareMenu({
    withShareTicket: true,
  })
}

// Test case from `wx.showShareMenu`
{
  wx.showShareMenu({
    withShareTicket: true,
    menus: ['shareAppMessage', 'shareTimeline'],
  })
}

// Test case from `wx.showToast`
{
  wx.showToast({
    title: '成功',
    icon: 'success',
    duration: 2000,
  })
}

// Test case from `wx.startAccelerometer`
{
  wx.startAccelerometer({
    interval: 'game',
  })
}

// Test case from `wx.startCompass`
{
  wx.startCompass()
}

// Test case from `wx.stopAccelerometer`
{
  wx.stopAccelerometer()
}

// Test case from `wx.stopCompass`
{
  wx.stopCompass()
}

// Test case from `wx.updateShareMenu`
{
  wx.updateShareMenu({
    withShareTicket: true,
    success() {},
  })
}

// Test case from `wx.uploadFile`
{
  wx.chooseImage({
    success(res) {
      const tempFilePaths = res.tempFilePaths
      wx.uploadFile({
        url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
        filePath: tempFilePaths[0],
        name: 'file',
        formData: {
          user: 'test',
        },
        success(res) {
          expectType<string>(res.data)
        },
      })
    },
  })
}

// Test case from `Worker.postMessage`
{
  const worker = wx.createWorker('workers/request/index.js')

  worker.postMessage({
    msg: 'hello from main',
  })
}

// Test case from `wx.clearStorageSync`
{
  try {
    wx.clearStorageSync()
  } catch (e) {
    // Do something when catch error
  }
}

// Test case from `wx.clearStorage`
{
  try {
    wx.clearStorageSync()
  } catch (e) {
    // Do something when catch error
  }
}

// Test case from `wx.getStorageInfoSync`
{
  try {
    const res = wx.getStorageInfoSync()
    console.log(res.keys)
    console.log(res.currentSize)
    console.log(res.limitSize)
  } catch (e) {
    // Do something when catch error
  }
}

// Test case from `wx.getStorageInfo`
{
  try {
    const res = wx.getStorageInfoSync()
    console.log(res.keys)
    console.log(res.currentSize)
    console.log(res.limitSize)
  } catch (e) {
    // Do something when catch error
  }
}

// Test case from `wx.getStorageSync`
{
  try {
    const value = wx.getStorageSync('key')
    if (value) {
      // Do something with return value
    }
  } catch (e) {
    // Do something when catch error
  }
}

// Test case from `wx.getStorage`
{
  try {
    const value = wx.getStorageSync('key')
    if (value) {
      // Do something with return value
    }
  } catch (e) {
    // Do something when catch error
  }
}

// Test case from `wx.getSystemInfoSync`
{
  try {
    const res = wx.getSystemInfoSync()
    expectType<string>(res.model)
    expectType<number>(res.pixelRatio)
    expectType<number>(res.windowWidth)
    expectType<number>(res.windowHeight)
    expectType<string>(res.language)
    expectType<string>(res.version)
    expectType<string>(res.platform)
  } catch (e) {
    // Do something when catch error
  }
}

// Test case from `wx.getSystemInfo`
{
  try {
    const res = wx.getSystemInfoSync()
    expectType<string>(res.model)
    expectType<number>(res.pixelRatio)
    expectType<number>(res.windowWidth)
    expectType<number>(res.windowHeight)
    expectType<string>(res.language)
    expectType<string>(res.version)
    expectType<string>(res.platform)
  } catch (e) {
    // Do something when catch error
  }
}

// Test case from `wx.removeStorageSync`
{
  try {
    wx.removeStorageSync('key')
  } catch (e) {
    // Do something when catch error
  }
}

// Test case from `wx.removeStorage`
{
  try {
    wx.removeStorageSync('key')
  } catch (e) {
    // Do something when catch error
  }
}

// Test case from `wx.setStorageSync`
{
  try {
    wx.setStorageSync('key', 'value')
  } catch (e) {}
}

// Test case from `wx.setStorage`
{
  try {
    wx.setStorageSync('key', 'value')
  } catch (e) {}
}

// Test case from `wx.setEnableDebug`
{
  // 打开调试
  wx.setEnableDebug({
    enableDebug: true,
  })

  // 关闭调试
  wx.setEnableDebug({
    enableDebug: false,
  })
}

// Test case from `WebGLRenderingContext.wxBindCanvasTexture`
{
  const canvas = wx.createCanvas()
  const gl = canvas.getContext('webgl')
  gl.wxBindCanvasTexture(gl.TEXTURE_2D, canvas)
}

// Test case from `WebGLRenderingContext.wxBindCanvasTexture`
{
  const canvas = wx.createCanvas()
  const gl = canvas.getContext('webgl')
  const texture = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_2D, texture)

  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas)
}

// Test case from `GameRecorder.on`
{
  const recorder = wx.getGameRecorder()
  recorder.on('stop', res => {
    expectType<any>(res.duration)
  })
}

// Test case from `wx.getExtConfig`
{
  if (wx.getExtConfig) {
    wx.getExtConfig({
      success(res) {
        console.log(res.extConfig)
      },
    })
  }
}

// Test case from `wx.getExtConfigSync`
{
  const extConfig = wx.getExtConfigSync ? wx.getExtConfigSync() : {}
  console.log(extConfig)
}

// Test case from `wx.chooseImage`
{
  wx.chooseImage({
    count: 1,
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    success(res) {
      // tempFilePath可以作为img标签的src属性显示图片
      expectType<string[]>(res.tempFilePaths)
    },
  })
}

// Test case from `wx.getUserInfo`
{
  wx.getSetting({
    success(res) {
      if (res.authSetting['scope.userInfo']) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称
        wx.getUserInfo({
          success(res) {
            console.log(res.userInfo)
          },
        })
      }
    },
  })
}

// Test case from `GameRecorder`
{
  // 可以监听 error 事件
  const recorder = wx.getGameRecorder()
  recorder.on('error', res => {
    expectType<any>(res.error.code)
  })

  // 也可以在接口的 Promise 中获取
  recorder.stop().catch(res => {
    expectType<any>(res.error.code)
  })
}

// Test case from `GameRecorder.on`
{
  const recorder = wx.getGameRecorder()
  recorder.on('timeUpdate', res => {
    console.log(res.currentTime)
  })
}

// Test case from `GameRecorder.on`
{
  const recorder = wx.getGameRecorder()
  recorder.on('error', res => {
    console.log('错误码', res.error.code)
    console.log('错误信息', res.error.message)
  })
}

// Test case from `wx.reportMonitor`
{
  wx.reportMonitor('1', 1)
}

// Test case from `wx.startBeaconDiscovery`
{
  wx.startBeaconDiscovery({
    uuids: [],
    success() {},
  })
}

// Test case from `wx.closeBLEConnection`
{
  wx.closeBLEConnection({
    deviceId: '',
    success(res) {
      console.log(res)
    },
  })
}

// Test case from `wx.closeBluetoothAdapter`
{
  wx.closeBluetoothAdapter({
    success(res) {
      console.log(res)
    },
  })
}

// Test case from `wx.createBLEConnection`
{
  wx.createBLEConnection({
    // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
    deviceId: '',
    success(res) {
      console.log(res)
    },
  })
}

// Test case from `wx.getBLEDeviceCharacteristics`
{
  wx.getBLEDeviceCharacteristics({
    // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
    deviceId: '',
    // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
    serviceId: '',
    success(res) {
      console.log('device getBLEDeviceCharacteristics:', res.characteristics)
    },
  })
}

// Test case from `wx.getBLEDeviceServices`
{
  wx.getBLEDeviceServices({
    // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
    deviceId: '',
    success(res) {
      console.log('device services:', res.services)
    },
  })
}

// Test case from `wx.getBluetoothAdapterState`
{
  wx.getBluetoothAdapterState({
    success(res) {
      console.log(res)
    },
  })
}

// Test case from `wx.getBluetoothDevices`
{
  wx.getBluetoothDevices({
    success(res) {
      console.log(res)
      if (res.devices[0]) {
        expectType<ArrayBuffer>(res.devices[0].advertisData)
      }
    },
  })
}

// Test case from `wx.getConnectedBluetoothDevices`
{
  wx.getConnectedBluetoothDevices({
    services: [],
    success(res) {
      expectType<WechatMinigame.BluetoothDeviceInfo[]>(res.devices)
    },
  })
}

// Test case from `wx.getFileInfo`
{
  wx.getFileInfo({
    filePath: '',
    success(res) {
      expectType<number>(res.size)
      expectType<string>(res.digest)
    },
  })
}

// Test case from `wx.notifyBLECharacteristicValueChange`
{
  wx.notifyBLECharacteristicValueChange({
    state: true, // 启用 notify 功能
    // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
    deviceId: '',
    // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
    serviceId: '',
    // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
    characteristicId: '',
    success(res) {
      console.log('notifyBLECharacteristicValueChange success', res.errMsg)
    },
  })
}

// Test case from `wx.onBLECharacteristicValueChange`
{
  wx.onBLECharacteristicValueChange(function(res) {
    console.log(
      `characteristic ${res.characteristicId} has changed, now is ${res.value}`,
    )
    expectType<ArrayBuffer>(res.value)
  })
}

// Test case from `wx.onBLEConnectionStateChange`
{
  wx.onBLEConnectionStateChange(function(res) {
    // 该方法回调中可以用于处理连接意外断开等异常情况
    console.log(
      `device ${res.deviceId} state has changed, connected: ${res.connected}`,
    )
  })
}

// Test case from `wx.onBluetoothAdapterStateChange`
{
  wx.onBluetoothAdapterStateChange(function(res) {
    console.log('adapterState changed, now is', res)
  })
}

// Test case from `wx.onBluetoothDeviceFound`
{
  wx.onBluetoothDeviceFound(function(res) {
    const devices = res.devices
    console.log('new device list has founded')
    expectType<ArrayBuffer>(devices[0].advertisData)
  })
}

// Test case from `wx.openBluetoothAdapter`
{
  wx.openBluetoothAdapter({
    success(res) {
      console.log(res)
    },
  })
}

// Test case from `wx.readBLECharacteristicValue`
{
  // 必须在这里的回调才能获取
  wx.onBLECharacteristicValueChange(function(characteristic) {
    console.log('characteristic value comed:', characteristic)
  })

  wx.readBLECharacteristicValue({
    // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
    deviceId: '',
    // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
    serviceId: '',
    // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
    characteristicId: '',
    success(res) {
      console.log('readBLECharacteristicValue:', res.errCode)
    },
  })
}

// Test case from `wx.startBluetoothDevicesDiscovery`
{
  // 以微信硬件平台的蓝牙智能灯为例，主服务的 UUID 是 FEE7。传入这个参数，只搜索主服务 UUID 为 FEE7 的设备
  wx.startBluetoothDevicesDiscovery({
    services: ['FEE7'],
    success(res) {
      console.log(res)
    },
  })
}

// Test case from `wx.stopBluetoothDevicesDiscovery`
{
  wx.stopBluetoothDevicesDiscovery({
    success(res) {
      console.log(res)
    },
  })
}

// Test case from `wx.writeBLECharacteristicValue`
{
  // 向蓝牙设备发送一个0x00的16进制数据
  const buffer = new ArrayBuffer(1)
  const dataView = new DataView(buffer)
  dataView.setUint8(0, 0)

  wx.writeBLECharacteristicValue({
    // 这里的 deviceId 需要在 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
    deviceId: '',
    // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
    serviceId: '',
    // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
    characteristicId: '',
    // 这里的value是ArrayBuffer类型
    value: buffer,
    success(res) {
      console.log('writeBLECharacteristicValue success', res.errMsg)
    },
  })
}

// Test case from `wx.requestSubscribeMessage`
{
  wx.requestSubscribeMessage({
    tmplIds: [''],
    success(res) {
      expectType<string>(res.TEMPLATE_ID)
    },
  })
}

// Test case from `wx.requestSubscribeSystemMessage`
{
  wx.requestSubscribeSystemMessage({
    msgTypeList: ['SYS_MSG_TYPE_INTERACTIVE', 'SYS_MSG_TYPE_RANK'],
    success(res) {
      expectType<string>(res.errMsg)
    },
  })
}

// Test case from `wx.getSetting`
{
  wx.getSetting({
    success(res) {
      expectType<boolean | undefined>(res.authSetting['scope.userInfo'])
      expectType<boolean>(res.subscriptionsSetting.mainSwitch)
      expectType<Record<string, any> | undefined>(res.subscriptionsSetting.itemSettings)
    },
  })
}

// Test case from `SubscriptionsSetting`
{
  wx.getSetting({
    withSubscriptions: true,
    success(res) {
      expectType<undefined | boolean>(res.authSetting['scope.userInfo'])
      expectType<undefined | boolean>(res.authSetting['scope.userLocation'])
      expectType<boolean>(res.subscriptionsSetting.mainSwitch)
      if (res.subscriptionsSetting.itemSettings !== undefined) {
        expectType<any>(res.subscriptionsSetting.itemSettings.SYS_MSG_TYPE_INTERACTIVE)
      }
    },
  })
}

// Test case from `wx.reportPerformance`
{
  wx.reportPerformance(1101, 680)
}

// Test case from `wx.getAccountInfoSync`
{
  const accountInfo = wx.getAccountInfoSync()
  // 小程序 appId
  expectType<string>(accountInfo.miniProgram.appId)
  // 插件 appId
  expectType<string>(accountInfo.plugin.appId)
  // 插件版本号， 'a.b.c' 这样的形式
  expectType<string>(accountInfo.plugin.version)
}

// Test case from `wx.reportPerformance`
{
  wx.reportPerformance(1101, 680)
  wx.reportPerformance(1101, 680, 'custom')
}

// Test case from `wx.hideShareMenu`
{
  wx.hideShareMenu({
    menus: ['shareAppMessage', 'shareTimeline'],
  })
}

// Test case from `wx.showShareMenu`
{
  wx.showShareMenu({
    withShareTicket: true,
    menus: ['shareAppMessage', 'shareTimeline'],
  })
}

// Test case from `wx.getRealtimeLogManager`
{
  const logger = wx.getRealtimeLogManager()
  logger.info({ str: 'hello world' }, 'info log', 100, [1, 2, 3])
  logger.error({ str: 'hello world' }, 'error log', 100, [1, 2, 3])
  logger.warn({ str: 'hello world' }, 'warn log', 100, [1, 2, 3])
}

// Test case from `wx.getGroupEnterInfo`
{
  wx.getGroupEnterInfo({
    success(res) {
      expectType<string>(res.errMsg)
      expectType<string>(res.encryptedData)
      expectType<string>(res.iv)
    }
  })
}

// Test case from `wx.authPrivateMessage`
{
  wx.authPrivateMessage({
    shareTicket: 'xxxxxx',
    success(res) {
      expectType<boolean>(res.valid)
      expectType<string>(res.iv)
      expectType<string>(res.encryptedData)
    },
    fail(res) {
      expectType<string>(res.errMsg)
    },
  })
}

// Test case from `wx.createMediaAudioPlayer`
{
  // 创建视频解码器，具体参数见 createVideoDecoder 文档
  const videoDecoder = wx.createVideoDecoder()
  // 创建媒体音频播放器
  const mediaAudioPlayer = wx.createMediaAudioPlayer()
  // 启动视频解码器
  videoDecoder.start({
    source: ''
  })
  // 启动播放器
  mediaAudioPlayer.start().then(() => {
    // 添加播放器音频来源
    mediaAudioPlayer.addAudioSource(videoDecoder).then(res => {
      videoDecoder.getFrameData() // 建议在 requestAnimationFrame 里获取每一帧视频数据
      console.log(res)
    })

    // 移除播放器音频来源
    mediaAudioPlayer.removeAudioSource(videoDecoder).then()
    // 停止播放器
    mediaAudioPlayer.stop().then()
    // 销毁播放器
    mediaAudioPlayer.destroy().then()
    // 设置播放器音量
    mediaAudioPlayer.volume = 0.5
  })
}

// Test case from `FileSystemManager.close`
{
  const fs = wx.getFileSystemManager()
  // 打开文件
  fs.open({
    filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
    flag: 'a+',
    success(res) {
      // 关闭文件
      fs.close({
        fd: res.fd,
      })
    },
  })
}

// Test case from `FileSystemManager.closeSync`
{
  const fs = wx.getFileSystemManager()
  const fd = fs.openSync({
    filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
    flag: 'a+',
  })

  // 关闭文件
  fs.closeSync({ fd: fd })
}

// Test case from `FileSystemManager.fstat`
{
  const fs = wx.getFileSystemManager()
  // 打开文件
  fs.open({
    filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
    flag: 'a+',
    success(res) {
      // 获取文件的状态信息
      fs.fstat({
        fd: res.fd,
        success(res) {
          expectType<WechatMinigame.Stats>(res.stats)
        },
      })
    },
  })
}

// Test case from `FileSystemManager.fstatSync`
{
  const fs = wx.getFileSystemManager()
  const fd = fs.openSync({
    filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
    flag: 'a+',
  })
  const stats = fs.fstatSync({ fd: fd })
  expectType<WechatMinigame.Stats>(stats)
}

// Test case from `FileSystemManager.ftruncate`
{
  const fs = wx.getFileSystemManager()
  // 打开文件
  fs.open({
    filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
    flag: 'a+',
    success(res) {
      // 对文件内容进行截断操作
      fs.ftruncate({
        fd: res.fd,
        length: 10, // 从第10个字节开始截断文件
        success(res) {
          console.log(res)
        },
      })
    },
  })
}

// Test case from `FileSystemManager.ftruncateSync`
{
  const fs = wx.getFileSystemManager()
  const fd = fs.openSync({
    filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
    flag: 'a+',
  })
  fs.ftruncateSync({
    fd: fd,
    length: 10, // 从第10个字节开始截断文件
  })
}

// Test case from `FileSystemManager.open`
{
  const fs = wx.getFileSystemManager()
  fs.open({
    filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
    flag: 'a+',
    success(res) {
      expectType<string>(res.fd)
    },
  })
}

// Test case from `FileSystemManager.openSync`
{
  const fs = wx.getFileSystemManager()
  const fd = fs.openSync({
    filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
    flag: 'a+',
  })
  expectType<string>(fd)
}

// Test case from `FileSystemManager.read`
{
  const fs = wx.getFileSystemManager()
  const ab = new ArrayBuffer(1024)
  // 打开文件
  fs.open({
    filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
    flag: 'a+',
    success(res) {
      // 读取文件到 ArrayBuffer 中
      fs.read({
        fd: res.fd,
        arrayBuffer: ab,
        length: 10,
        success(res) {
          console.log(res)
        },
      })
    },
  })
}

// Test case from `FileSystemManager.readSync`
{
  const fs = wx.getFileSystemManager()
  const ab = new ArrayBuffer(1024)
  const fd = fs.openSync({
    filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
    flag: 'a+',
  })
  const res = fs.readSync({
    fd: fd,
    arrayBuffer: ab,
    length: 10,
  })
  console.log(res)
}

// Test case from `FileSystemManager.truncate`
{
  const fs = wx.getFileSystemManager()
  fs.truncate({
    filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
    length: 10, // 从第10个字节开始截断
    success(res) {
      console.log(res)
    },
  })
}

// Test case from `FileSystemManager.truncateSync`
{
  const fs = wx.getFileSystemManager()
  fs.truncateSync({
    filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
    length: 10, // 从第10个字节开始截断
  })
}

// Test case from `FileSystemManager.write`
{
  const fs = wx.getFileSystemManager()
  // 打开文件
  fs.open({
    filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
    flag: 'a+',
    success(res) {
      // 写入文件
      fs.write({
        fd: res.fd,
        data: 'some text',
        success(res) {
          expectType<number>(res.bytesWritten)
        },
      })
    },
  })
}

// Test case from `FileSystemManager.writeSync`
{
  const fs = wx.getFileSystemManager()
  const fd = fs.openSync({
    filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
    flag: 'a+',
  })
  const res = fs.writeSync({
    fd: fd,
    data: 'some text',
  })
  expectType<number>(res.bytesWritten)
}

// Test case from `Worker.getCameraFrameData`
{
  const worker = wx.createWorker('workers/index.js')

  const camera = wx.createCamera({
    success() {
      camera.listenFrameChange(worker)
    },
  })
}

// Test case from `Worker.getCameraFrameData`
{
  const worker = wx.createWorker('workers/index.js')

  const data = worker.getCameraFrameData()
  console.log(data)
}
