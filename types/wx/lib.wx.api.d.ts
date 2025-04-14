/*! *****************************************************************************
Copyright (c) 2025 Tencent, Inc. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
***************************************************************************** */

declare namespace WechatMinigame {
    interface AccessOption {
        /** 要判断是否存在的文件/目录路径 (本地路径) */
        path: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AccessCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: AccessFailCallback
        /** 接口调用成功的回调函数 */
        success?: AccessSuccessCallback
    }
    /** 账号信息 */
    interface AccountInfo {
        /** 小程序账号信息 */
        miniProgram: MiniProgram
        /** 插件账号信息（仅在插件中调用时包含这一项） */
        plugin: Plugin
    }
    interface AddCardOption {
        /** 需要添加的卡券列表 */
        cardList: AddCardRequestInfo[]
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AddCardCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: AddCardFailCallback
        /** 接口调用成功的回调函数 */
        success?: AddCardSuccessCallback
    }
    /** 需要添加的卡券列表 */
    interface AddCardRequestInfo {
        /** 卡券的扩展参数。需将 CardExt 对象 JSON 序列化为**字符串**传入 */
        cardExt: string
        /** 卡券 ID */
        cardId: string
    }
    /** 卡券添加结果列表 */
    interface AddCardResponseInfo {
        /** 卡券的扩展参数，结构请参考下文 */
        cardExt: string
        /** 用户领取到卡券的 ID */
        cardId: string
        /** 加密 code，为用户领取到卡券的code加密后的字符串，解密请参照：[code 解码接口](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1499332673_Unm7V) */
        code: string
        /** 是否成功 */
        isSuccess: boolean
    }
    interface AddCardSuccessCallbackResult {
        /** 卡券添加结果列表 */
        cardList: AddCardResponseInfo[]
        errMsg: string
    }
    interface AddServiceOption {
        /** 描述service的Object */
        service: BLEPeripheralService
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AddServiceCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: AddServiceFailCallback
        /** 接口调用成功的回调函数 */
        success?: AddServiceSuccessCallback
    }
    /** 广播自定义参数 */
    interface AdvertiseReqObj {
        /** 需要基础库： `2.20.1`
         *
         * 以 beacon 设备形式广播的参数。 */
        beacon?: BeaconInfoObj
        /** 当前设备是否可连接 */
        connectable?: boolean
        /** 广播中 deviceName 字段，默认为空 */
        deviceName?: string
        /** 广播的制造商信息。仅安卓支持，iOS 因系统限制无法定制。 */
        manufacturerData?: ManufacturerData[]
        /** 要广播的服务 UUID 列表。使用 16/32 位 UUID 时请参考注意事项。 */
        serviceUuids?: string[]
    }
    interface AppAuthorizeSetting {
        /** 允许微信使用相册的开关（仅 iOS 有效） */
        albumAuthorized: 'authorized' | 'denied' | 'not determined'
        /** 允许微信使用蓝牙的开关（安卓基础库 3.5.0 以上有效） */
        bluetoothAuthorized: 'authorized' | 'denied' | 'not determined'
        /** 允许微信使用摄像头的开关 */
        cameraAuthorized: 'authorized' | 'denied' | 'not determined'
        /** 允许微信使用定位的开关 */
        locationAuthorized: 'authorized' | 'denied' | 'not determined'
        /** 定位准确度。true 表示模糊定位，false 表示精确定位（仅 iOS 有效） */
        locationReducedAccuracy: boolean
        /** 允许微信使用麦克风的开关 */
        microphoneAuthorized: 'authorized' | 'denied' | 'not determined'
        /** 允许微信通知带有提醒的开关（仅 iOS 有效） */
        notificationAlertAuthorized: 'authorized' | 'denied' | 'not determined'
        /** 允许微信通知的开关 */
        notificationAuthorized: 'authorized' | 'denied' | 'not determined'
        /** 允许微信通知带有标记的开关（仅 iOS 有效） */
        notificationBadgeAuthorized: 'authorized' | 'denied' | 'not determined'
        /** 允许微信通知带有声音的开关（仅 iOS 有效） */
        notificationSoundAuthorized: 'authorized' | 'denied' | 'not determined'
        /** 允许微信读写日历的开关 */
        phoneCalendarAuthorized: 'authorized' | 'denied' | 'not determined'
    }
    interface AppBaseInfo {
        /** 客户端基础库版本 */
        SDKVersion: string
        /** 是否已打开调试。可通过右上角菜单或 [wx.setEnableDebug](https://developers.weixin.qq.com/minigame/dev/api/base/debug/wx.setEnableDebug.html) 打开调试。 */
        enableDebug: boolean
        /** 微信字体大小缩放比例 */
        fontSizeScaleFactor: number
        /** 需要基础库： `2.23.4`
         *
         * 微信字体大小，单位px */
        fontSizeSetting: number
        /** 当前小程序运行的宿主环境 */
        host: AppBaseInfoHost
        /** 微信设置的语言 */
        language: string
        /** 微信版本号 */
        version: string
        /** 系统当前主题，取值为`light`或`dark`，全局配置`"darkmode":true`时才能获取，否则为 undefined （不支持小游戏）
         *
         * 可选值：
         * - 'dark': 深色主题;
         * - 'light': 浅色主题; */
        theme?: 'dark' | 'light'
    }
    /** 当前小程序运行的宿主环境 */
    interface AppBaseInfoHost {
        /** 宿主 app（第三方App） 对应的 appId （当小程序运行在第三方App环境时才返回） */
        appId: string
    }
    interface AppendFileOption {
        /** 要追加的文本或二进制数据 */
        data: string | ArrayBuffer
        /** 要追加内容的文件路径 (本地路径) */
        filePath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AppendFileCompleteCallback
        /** 指定写入文件的字符编码
         *
         * 可选值：
         * - 'ascii': ;
         * - 'base64': ;
         * - 'binary': ;
         * - 'hex': ;
         * - 'ucs2': 以小端序读取;
         * - 'ucs-2': 以小端序读取;
         * - 'utf16le': 以小端序读取;
         * - 'utf-16le': 以小端序读取;
         * - 'utf-8': ;
         * - 'utf8': ;
         * - 'latin1': ; */
        encoding?:
            | 'ascii'
            | 'base64'
            | 'binary'
            | 'hex'
            | 'ucs2'
            | 'ucs-2'
            | 'utf16le'
            | 'utf-16le'
            | 'utf-8'
            | 'utf8'
            | 'latin1'
        /** 接口调用失败的回调函数 */
        fail?: AppendFileFailCallback
        /** 接口调用成功的回调函数 */
        success?: AppendFileSuccessCallback
    }
    /** 需要基础库： `2.19.0`
     *
     * AudioBuffer接口表示存在内存里的一段短小的音频资源，利用[WebAudioContext.decodeAudioData](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.decodeAudioData.html)方法从一个音频文件构建，或者利用 [WebAudioContext.createBuffer](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createBuffer.html)从原始数据构建。把音频放入AudioBuffer后，可以传入到一个 AudioBufferSourceNode进行播放。 */
    interface AudioBuffer {
        /** 返回存储在缓存区的PCM数据的时长（单位为秒） */
        duration: number
        /** 返回存储在缓存区的PCM数据的采样帧率 */
        length: number
        /** 储存在缓存区的PCM数据的通道数 */
        numberOfChannels: number
        /** 存储在缓存区的PCM数据的采样率（单位为sample/s) */
        sampleRate: number
        /** [AudioBuffer.copyFromChannel()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/AudioBuffer.copyFromChannel.html)
         *
         * 从AudioBuffer的指定频道复制到数组终端。 */
        copyFromChannel(): void
        /** [AudioBuffer.copyToChannel(Float32Array source, number channelNumber, number startInChannel)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/AudioBuffer.copyToChannel.html)
         *
         * 从指定数组复制样本到audioBuffer的特定通道
         *
         * **示例代码**
         *
         * 示例代码参考AudioBuffer.copyFromChannel */
        copyToChannel(
            /** 需要复制的源数组 */
            source: Float32Array,
            /** 需要复制到的目的通道号 */
            channelNumber: number,
            /** 复制偏移数据量 */
            startInChannel: number
        ): void
        /** [Float32Array AudioBuffer.getChannelData(number channel)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/AudioBuffer.getChannelData.html)
         *
         * 返回一个 Float32Array，包含了带有频道的PCM数据，由频道参数定义（有0代表第一个频道） */
        getChannelData(
            /** 要获取特定通道数据的索引 */
            channel: number
        ): Float32Array
    }
    /** 空间音频监听器，代表在一个音频场景内唯一的位置和方向信息。 */
    interface AudioListener {
        /** 表示监听器的前向系统在同一笛卡尔坐标系中的水平位置，作为位置（位置x，位置和位置和位置）值。 */
        forwardX: number
        /** 表示听众的前向方向在同一笛卡尔坐标系中作为位置（位置x，位置和位置和位置）值的垂直位置。 */
        forwardY: number
        /** 表示与position (positionX、positionY和positionZ)值在同一笛卡尔坐标系下的听者前进方向的纵向(前后)位置。 */
        forwardZ: number
        /** 右手笛卡尔坐标系中X轴的位置。 */
        positionX: number
        /** 右手笛卡尔坐标系中Y轴的位置。 */
        positionY: number
        /** 右手笛卡尔坐标系中Z轴的位置。 */
        positionZ: number
        /** 设置监听器的方向 */
        setOrientation: (...args: any[]) => any
        /** 设置监听器的位置 */
        setPosition: (...args: any[]) => any
        /** 表示在与position (positionX、positionY和positionZ)值相同的笛卡尔坐标系中侦听器向前方向的水平位置。 */
        upX: number
        /** 表示在与position (positionX、positionY和positionZ)值相同的笛卡尔坐标系中侦听器向上方向的水平位置。 */
        upY: number
        /** 表示在与position (positionX、positionY和positionZ)值相同的笛卡尔坐标系中侦听器向后方向的水平位置。 */
        upZ: number
    }
    /** 需要基础库： `2.19.0`
     *
     * AudioParam 接口代表音频相关的参数，通常是 AudioNode（例如 GainNode.gain）的参数 */
    interface AudioParam {
        /** 代表被具体的 AudioNode 创建的 AudioParam 的属性的初始值（只读） */
        defaultValue: number
        /** 代表参数有效范围的最大可能值（只读） */
        maxValue: number
        /** 代表参数有效范围的最小可能值（只读） */
        minValue: number
        /** 当前属性的值（比如音量值或播放倍速值）（可读可写） */
        value: number
    }
    interface AuthPrivateMessageOption {
        /** shareTicket。可以从 wx.getEnterOptionsSync 中获取。详情 [shareTicket](#) */
        shareTicket: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AuthPrivateMessageCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: AuthPrivateMessageFailCallback
        /** 接口调用成功的回调函数 */
        success?: AuthPrivateMessageSuccessCallback
    }
    interface AuthPrivateMessageSuccessCallbackResult {
        /** 经过加密的activityId，解密后可得到原始的activityId。若解密后得到的activityId可以与开发者后台的活动id对应上则验证通过，否则表明valid字段不可靠（被篡改） 详细见[加密数据解密算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html) */
        encryptedData: string
        /** 错误信息 */
        errMsg: string
        /** 加密算法的初始向量，详细见[加密数据解密算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html) */
        iv: string
        /** 验证是否通过 */
        valid: boolean
    }
    /** 用户授权设置信息，详情参考[权限](#) */
    interface AuthSetting {
        /** 是否授权使用你的微信朋友信息，对应开放数据域内的 [wx.getFriendCloudStorage](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getFriendCloudStorage.html) 、[wx.getGroupCloudStorage](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupCloudStorage.html) 、[wx.getGroupInfo](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupInfo.html) 、[wx.getPotentialFriendList](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getPotentialFriendList.html) 、[wx.getUserCloudStorageKeys](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getUserCloudStorageKeys.html) 、[wx.getUserInfo](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/OpenDataContext-wx.getUserInfo.html)  、[GameServerManager.getFriendsStateData](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.getFriendsStateData.html) 接口，以及主域内的 [wx.getUserInteractiveStorage](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getUserInteractiveStorage.html) 接口。 */
        'scope.WxFriendInteraction'?: boolean
        /** 是否授权录音功能，对应接口 [wx.getRecorderManager](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/wx.getRecorderManager.html) */
        'scope.record'?: boolean
        /** 是否授权模糊地理位置，对应接口 [wx.getFuzzyLocation](https://developers.weixin.qq.com/minigame/dev/api/location/wx.getFuzzyLocation.html) */
        'scope.userFuzzyLocation'?: boolean
        /** 是否授权用户信息，对应接口 [wx.getUserInfo](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/wx.getUserInfo.html) */
        'scope.userInfo'?: boolean
        /** 是否授权精确地理位置，对应接口 [wx.getLocation](https://developers.weixin.qq.com/minigame/dev/api/location/wx.getLocation.html)。将废弃，请使用 scope.userFuzzyLocation 代替 */
        'scope.userLocation'?: boolean
        /** 是否授权微信运动步数，对应接口 [wx.getWeRunData](https://developers.weixin.qq.com/minigame/dev/api/open-api/werun/wx.getWeRunData.html) */
        'scope.werun'?: boolean
        /** 是否授权保存到相册，对应接口 [wx.saveImageToPhotosAlbum](https://developers.weixin.qq.com/minigame/dev/api/media/image/wx.saveImageToPhotosAlbum.html) */
        'scope.writePhotosAlbum'?: boolean
    }
    interface AuthorizeOption {
        /** 需要获取权限的 scope，详见 [scope 列表](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/authorize.html#scope-列表) */
        scope: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AuthorizeCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: AuthorizeFailCallback
        /** 接口调用成功的回调函数 */
        success?: AuthorizeSuccessCallback
    }
    /** 设备特征列表 */
    interface BLECharacteristic {
        /** 该特征支持的操作类型 */
        properties: BLECharacteristicProperties
        /** 蓝牙设备特征的 UUID */
        uuid: string
    }
    /** 该特征支持的操作类型 */
    interface BLECharacteristicProperties {
        /** 该特征是否支持 indicate 操作 */
        indicate: boolean
        /** 该特征是否支持 notify 操作 */
        notify: boolean
        /** 该特征是否支持 read 操作 */
        read: boolean
        /** 该特征是否支持 write 操作 */
        write: boolean
        /** 该特征是否支持有回复写操作 */
        writeDefault: boolean
        /** 该特征是否支持无回复写操作 */
        writeNoResponse: boolean
    }
    /** 描述service的Object */
    interface BLEPeripheralService {
        /** characteristics列表 */
        characteristics: Characteristic[]
        /** 蓝牙服务的 UUID */
        uuid: string
    }
    /** 设备服务列表 */
    interface BLEService {
        /** 该服务是否为主服务 */
        isPrimary: boolean
        /** 蓝牙设备服务的 UUID */
        uuid: string
    }
    /** banner 广告组件。banner 广告组件是一个原生组件，层级比普通组件高。banner 广告组件默认是隐藏的，需要调用 BannerAd.show() 将其显示。banner 广告会根据开发者设置的宽度进行等比缩放，缩放后的尺寸将通过 BannerAd.onResize() 事件中提供。 */
    interface BannerAd {
        /** banner 广告组件的样式。style 上的属性的值仅为开发者设置的值，banner 广告会根据开发者设置的宽度进行等比缩放，缩放后的真实尺寸需要通过 BannerAd.onResize() 事件获得。 */
        style: BannerAdStyle
        /** [BannerAd.destroy()](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.destroy.html)
         *
         * 销毁 banner 广告。 */
        destroy(): void
        /** [BannerAd.hide()](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.hide.html)
         *
         * 隐藏 banner 广告。 */
        hide(): void
        /** [BannerAd.offError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.offError.html)
*
* 移除 banner 广告错误事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

BannerAd.onError(listener)
BannerAd.offError(listener) // 需传入与监听时同一个的函数对象
``` */
        offError(
            /** onError 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: GridAdOffErrorCallback
        ): void
        /** [BannerAd.offLoad(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.offLoad.html)
*
* 移除 banner 广告加载事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

BannerAd.onLoad(listener)
BannerAd.offLoad(listener) // 需传入与监听时同一个的函数对象
``` */
        offLoad(
            /** onLoad 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffLoadCallback
        ): void
        /** [BannerAd.offResize(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.offResize.html)
*
* 移除 banner 广告尺寸变化事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

BannerAd.onResize(listener)
BannerAd.offResize(listener) // 需传入与监听时同一个的函数对象
``` */
        offResize(
            /** onResize 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffResizeCallback
        ): void
        /** [BannerAd.onError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.onError.html)
         *
         * 监听 banner 广告错误事件。
         *
         * **错误码信息与解决方案表**
         *
         *  错误码是通过onError获取到的错误信息。调试期间，可以通过异常返回来捕获信息。可以针对异常返回加上适当的监控信息辅助排查现网情况。
         *
         * | 代码 | 异常情况 | 理由 | 解决方案 |
         * | ------ | -------------- | --------------- | -------------------------- |
         * | 1000  | 后端错误调用失败  | 该项错误不是开发者的异常情况 | 一般情况下忽略一段时间即可恢复。 |
         * | 1001  | 参数错误    | 使用方法错误 | 可以前往developers.weixin.qq.com确认具体教程（小程序和小游戏分别有各自的教程，可以在顶部选项中，“设计”一栏的右侧进行切换。|
         * | 1002  | 广告单元无效    | 可能是拼写错误、或者误用了其他APP的广告ID | 请重新前往mp.weixin.qq.com确认广告位ID。 |
         * | 1003  | 内部错误    | 该项错误不是开发者的异常情况 | 一般情况下忽略一段时间即可恢复。|
         * | 1004  | 无适合的广告   | 广告不是每一次都会出现，这次没有出现可能是由于该用户不适合浏览广告 | 属于正常情况，且开发者需要针对这种情况做形态上的兼容。 |
         * | 1005  | 广告组件审核中  | 你的广告正在被审核，无法展现广告 | 请前往mp.weixin.qq.com确认审核状态，且开发者需要针对这种情况做形态上的兼容。|
         * | 1006  | 广告组件被驳回  | 你的广告审核失败，无法展现广告 | 请前往mp.weixin.qq.com确认审核状态，且开发者需要针对这种情况做形态上的兼容。|
         * | 1007  | 广告组件被封禁  | 你的广告能力已经被封禁，封禁期间无法展现广告 | 请前往mp.weixin.qq.com确认小程序广告封禁状态。 |
         * | 1008  | 广告单元已关闭  | 该广告位的广告能力已经被关闭 | 请前往mp.weixin.qq.com重新打开对应广告位的展现。| */
        onError(
            /** banner 广告错误事件的监听函数 */
            listener: GridAdOnErrorCallback
        ): void
        /** [BannerAd.onLoad(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.onLoad.html)
         *
         * 监听 banner 广告加载事件。 */
        onLoad(
            /** banner 广告加载事件的监听函数 */
            listener: OnLoadCallback
        ): void
        /** [BannerAd.onResize(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.onResize.html)
         *
         * 监听 banner 广告尺寸变化事件。 */
        onResize(
            /** banner 广告尺寸变化事件的监听函数 */
            listener: OnResizeCallback
        ): void
        /** [Promise BannerAd.show()](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.show.html)
         *
         * 显示 banner 广告。 */
        show(): Promise<any>
    }
    /** banner 广告组件的样式。style 上的属性的值仅为开发者设置的值，banner 广告会根据开发者设置的宽度进行等比缩放，缩放后的真实尺寸需要通过 BannerAd.onResize() 事件获得。 */
    interface BannerAdStyle {
        /** banner 广告组件的高度 */
        height: number
        /** banner 广告组件的左上角横坐标 */
        left: number
        /** banner 广告组件经过缩放后真实的高度 */
        realHeight: number
        /** banner 广告组件经过缩放后真实的宽度 */
        realWidth: number
        /** banner 广告组件的左上角纵坐标 */
        top: number
        /** banner 广告组件的宽度。最小 300，最大至 `屏幕宽度`（屏幕宽度可以通过 wx.getSystemInfoSync() 获取）。 */
        width: number
    }
    /** Beacon 设备 */
    interface BeaconInfo {
        /** Beacon 设备的距离，单位 m。iOS 上，proximity 为 0 时，accuracy 为 -1。 */
        accuracy: number
        /** Beacon 设备的主 ID */
        major: number
        /** Beacon 设备的次 ID */
        minor: number
        /** 表示设备距离的枚举值（仅iOS）
         *
         * 可选值：
         * - 0: 信号太弱不足以计算距离，或非 iOS 设备;
         * - 1: 十分近;
         * - 2: 比较近;
         * - 3: 远; */
        proximity: 0 | 1 | 2 | 3
        /** 表示设备的信号强度，单位 dBm */
        rssi: number
        /** Beacon 设备广播的 UUID */
        uuid: string
    }
    /** 需要基础库： `2.20.1`
     *
     * 以 beacon 设备形式广播的参数。 */
    interface BeaconInfoObj {
        /** Beacon 设备的主 ID */
        major: number
        /** Beacon 设备的次 ID */
        minor: number
        /** Beacon 设备广播的 UUID */
        uuid: string
        /** 用于判断距离设备 1 米时 RSSI 大小的参考值 */
        measuredPower?: number
    }
    interface BindWifiOption {
        /** 当前 wifi 网络的 BSSID ，可通过 wx.getConnectedWifi 获取 */
        BSSID: string
    }
    interface BlueToothDevice {
        /** 当前蓝牙设备的信号强度，单位 dBm */
        RSSI: number
        /** 当前蓝牙设备的广播数据段中的 ManufacturerData 数据段。 */
        advertisData: ArrayBuffer
        /** 当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段 */
        advertisServiceUUIDs: string[]
        /** 当前蓝牙设备是否可连接（ Android 8.0 以下不支持返回该值 ） */
        connectable: boolean
        /** 蓝牙设备 id */
        deviceId: string
        /** 当前蓝牙设备的广播数据段中的 LocalName 数据段 */
        localName: string
        /** 蓝牙设备名称，某些设备可能没有 */
        name: string
        /** 当前蓝牙设备的广播数据段中的 ServiceData 数据段 */
        serviceData: IAnyObject
    }
    /** 搜索到的设备列表 */
    interface BluetoothDeviceInfo {
        /** 用于区分设备的 id */
        deviceId: string
        /** 蓝牙设备名称，某些设备可能没有 */
        name: string
    }
    /** 需要基础库： `2.28.0`
     *
     * 人体检测配置。用法详情[指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/body.html)。 */
    interface BodyTrack {
        /** 需要基础库： `2.28.0`
         *
         * 人体检测模式
         *
         * 可选值：
         * - 1: 通过摄像头实时检测;
         * - 2: 静态图片检测; */
        mode: 1 | 2
    }
    interface BroadcastInRoomOption {
        /** 广播内容 */
        msg: string
        /** 给座位号为哪些的玩家发送信息，不填代表给房间所有人发送 */
        toPosNumList: number[]
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: BroadcastInRoomCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: BroadcastInRoomFailCallback
        /** 接口调用成功的回调函数 */
        success?: BroadcastInRoomSuccessCallback
    }
    /** 音频源节点，通过 [WebAudioContext.createBufferSource](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createBufferSource.html)方法获得。
*
* **示例代码**
*
* ```js
const source = audioCtx.createBufferSource()
source.buffer = AudioBuffer
source.connect(audioCtx.destination)
source.start()
``` */
    interface BufferSourceNode {
        /** [AudioBuffer](https://developers.weixin.qq.com/minigame/dev/api/media/audio/AudioBuffer.html)
         *
         * 是一个 AudioBuffer， 它定义了要播放的音频，当设置它的值为 0 时，它会定义一个静默的单通道。（可读可写） */
        buffer: AudioBuffer
        /** 定义音频是否循环播放（可读可写） */
        loop?: boolean
        /** 定义音频循环播放时，结束播放的位置。单位是秒，默认值是0（可读可写） */
        loopEnd?: number
        /** 定义音频循环播放时，开始播放的位置。单位是秒，默认值是0（可读可写） */
        loopStart?: number
        /** 定义音频播放结束事件回调函数（可读可写） */
        onended?: (...args: any[]) => any
        /** [AudioParam](https://developers.weixin.qq.com/minigame/dev/api/media/audio/AudioParam.html)
         *
         * 定义音频的播放倍速，数值越大速度越快，默认速度1.0，有效范围为 0 < playbackRate <= 2.0（可读可写） */
        playbackRate?: AudioParam
        /** [BufferSourceNode.connect(AudioNode|[AudioParam](https://developers.weixin.qq.com/minigame/dev/api/media/audio/AudioParam.html) destination)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/BufferSourceNode.connect.html)
         *
         * 连接到一个指定目标。这个指定的目标可能是另一个 AudioNode（从而将音频数据引导到下一个指定节点）或一个AudioParam, 以便上一个节点的输出数据随着时间流逝能自动地对下一个参数值进行改变 */
        connect(
            /** 要建立连接的目标节点 */
            destination: AudioNode | AudioParam
        ): void
        /** [BufferSourceNode.disconnect()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/BufferSourceNode.disconnect.html)
         *
         * 与已连接的目标节点断开连接 */
        disconnect(): void
        /** [BufferSourceNode.start(number when, number offset, number duration)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/BufferSourceNode.start.html)
         *
         * 音频源开始播放 */
        start(
            /** 延迟播放的时间，单位是秒。与 AudioContext 使用相同的时间坐标系统。如果 when 小于 AudioContext.currentTime, 或者是 0，声音立即被播放。 默认值是 0 */
            when?: number,
            /** 音频开始播放的位置，单位是秒。默认值是 0 */
            offset?: number,
            /** 音频播放的持续时间，单位是秒。如果这个参数没有被指定，声音播放到自然结束或者使用stop() 方法结束。使用这个参数的功能与调用 start(when, offset) 和调用 stop(when+duration)效果完全相同 */
            duration?: number
        ): void
        /** [BufferSourceNode.stop(number when)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/BufferSourceNode.stop.html)
         *
         * 停止播放 */
        stop(
            /** 延迟停止播放的时间，单位是秒。与 AudioContext 使用相同的时间坐标系统。省略此参数、指定值 0 或传递负值会使声音立即停止播放。 */
            when?: number
        ): void
    }
    /** 相机对象 */
    interface Camera {
        /** 摄像头朝向 */
        devicePosition: string
        /** 闪光灯，值为 auto, on, off */
        flash: string
        /** 相机的高度 */
        height: number
        /** 帧数据图像尺寸，值为 small, medium, large */
        size: string
        /** 相机的宽度 */
        width: number
        /** 相机的左上角横坐标 */
        x: number
        /** 相机的左上角纵坐标 */
        y: number
        /** [Camera.closeFrameChange()](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.closeFrameChange.html)
         *
         * 需要基础库： `2.9.0`
         *
         * 关闭监听帧数据 */
        closeFrameChange(): void
        /** [Camera.destroy()](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.destroy.html)
         *
         * 需要基础库： `2.9.0`
         *
         * 销毁相机 */
        destroy(): void
        /** [Camera.listenFrameChange([Worker](https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.html) worker)](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.listenFrameChange.html)
         *
         * 需要基础库： `2.9.0`
         *
         * 开启监听帧数据 */
        listenFrameChange(
            /** [Worker](https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.html)
             *
             * 需要基础库： `2.17.0`
             *
             * 可选参数。如果需要在 iOS ExperimentalWorker 内监听摄像头帧数据，则需要传入对应 Worker 对象，否则不需要传入任何参数。详情 [Worker.getCameraFrameData](https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.getCameraFrameData.html) */
            worker?: Worker
        ): void
        /** [Camera.onAuthCancel(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.onAuthCancel.html)
         *
         * 需要基础库： `2.9.0`
         *
         * 监听用户不允许授权使用摄像头的情况 */
        onAuthCancel(
            /** 事件发生时的回调函数 */
            callback: (...args: any[]) => any
        ): void
        /** [Camera.onCameraFrame(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.onCameraFrame.html)
         *
         * 需要基础库： `2.9.0`
         *
         * 监听摄像头实时帧数据 */
        onCameraFrame(
            /** 摄像头返回实时帧数据的回调函数 */
            callback: OnCameraFrameCallback
        ): void
        /** [Camera.onStop(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.onStop.html)
         *
         * 需要基础库： `2.9.0`
         *
         * 监听摄像头非正常终止事件，如退出后台等情况 */
        onStop(
            /** 事件发生时的回调函数 */
            callback: (...args: any[]) => any
        ): void
        /** [Promise Camera.startRecord()](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.startRecord.html)
         *
         * 需要基础库： `2.9.0`
         *
         * 开始录像 */
        startRecord(): Promise<any>
        /** [Promise Camera.stopRecord(boolean compressed)](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.stopRecord.html)
         *
         * 需要基础库： `2.9.0`
         *
         * 结束录像，成功则返回封面与视频 */
        stopRecord(
            /** 是否压缩录制视频 */
            compressed?: boolean
        ): Promise<any>
        /** [Promise Camera.takePhoto(string quality)](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.takePhoto.html)
         *
         * 需要基础库： `2.9.0`
         *
         * 拍照，可指定质量，成功则返回图片 */
        takePhoto(
            /** 拍照质量，值为 high, normal, low */
            quality?: string
        ): Promise<any>
    }
    interface CancelMatchOption {
        /** 需要取消匹配的matchId */
        matchId: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CancelMatchCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: CancelMatchFailCallback
        /** 接口调用成功的回调函数 */
        success?: CancelMatchSuccessCallback
    }
    /** 画布对象 */
    interface Canvas {
        /** 画布的高度 */
        height: number
        /** 画布的宽度 */
        width: number
        /** [Canvas.toTempFilePath(Object object)](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.toTempFilePath.html)
         *
         * 将当前 Canvas 保存为一个临时文件。**如果使用了开放数据域，则生成后的文件仅能被用于以下接口：`wx.saveImageToPhotosAlbum`、`wx.shareAppMessage`、`wx.onShareAppMessage`、`wx.previewImage`、`wx.previewMedia`、`wx.onShareTimeline`、`wx.showShareImageMenu`** */
        toTempFilePath(option: ToTempFilePathOption): void
        /** [[RenderingContext](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/RenderingContext.html) Canvas.getContext(string contextType, Object contextAttributes)](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.getContext.html)
         *
         * 获取画布对象的绘图上下文 */
        getContext(
            /** 上下文类型
             *
             * 参数 contextType 可选值：
             * - '2d': 2d 绘图上下文;
             * - 'webgl': webgl 绘图上下文;
             * - 'webgl2': webgl2 绘图上下文; */
            contextType: '2d' | 'webgl' | 'webgl2',
            /** webgl 上下文属性，仅当 contextType 为 webgl 时有效 */
            contextAttributes?: ContextAttributes
        ): any
        /** [string Canvas.toDataURL()](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.toDataURL.html)
         *
         * 把画布上的绘制内容以一个 data URI 的格式返回 */
        toDataURL(): string
        /** [string Canvas.toTempFilePathSync(Object object)](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.toTempFilePathSync.html)
         *
         * [Canvas.toTempFilePath](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.toTempFilePath.html) 的同步版本 */
        toTempFilePathSync(option: ToTempFilePathSyncOption): string
    }
    interface ChangeSeatOption {
        /** 座位号，从 0 开始 */
        posNum: number
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ChangeSeatCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ChangeSeatFailCallback
        /** 接口调用成功的回调函数 */
        success?: ChangeSeatSuccessCallback
    }
    /** characteristics列表 */
    interface Characteristic {
        /** characteristic 的 UUID */
        uuid: string
        /** 描述符数据 */
        descriptors?: Descriptor[]
        /** 特征权限 */
        permission?: CharacteristicPermission
        /** 特征支持的操作 */
        properties?: CharacteristicProperties
        /** 特征对应的二进制值 */
        value?: ArrayBuffer
    }
    /** 特征权限 */
    interface CharacteristicPermission {
        /** 加密读请求 */
        readEncryptionRequired?: boolean
        /** 可读 */
        readable?: boolean
        /** 加密写请求 */
        writeEncryptionRequired?: boolean
        /** 可写 */
        writeable?: boolean
    }
    /** 特征支持的操作 */
    interface CharacteristicProperties {
        /** 回包 */
        indicate?: boolean
        /** 订阅 */
        notify?: boolean
        /** 读 */
        read?: boolean
        /** 写 */
        write?: boolean
        /** 无回复写 */
        writeNoResponse?: boolean
    }
    interface CheckHandoffEnabledOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CheckHandoffEnabledCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: CheckHandoffEnabledFailCallback
        /** 接口调用成功的回调函数 */
        success?: CheckHandoffEnabledSuccessCallback
    }
    interface CheckHandoffEnabledSuccessCallbackResult {
        /** 错误码，0未知，1用户取消，2电脑未登录，3电脑版本过低，4暂未支持 */
        errCode: number
        /** 是否可以进行接力 */
        isEnabled: boolean
        errMsg: string
    }
    interface CheckIsAddedToMyMiniProgramOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CheckIsAddedToMyMiniProgramCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: CheckIsAddedToMyMiniProgramFailCallback
        /** 接口调用成功的回调函数 */
        success?: CheckIsAddedToMyMiniProgramSuccessCallback
    }
    interface CheckIsAddedToMyMiniProgramSuccessCallbackResult {
        /** 是否被添加至 「我的小程序」 */
        added: boolean
        errMsg: string
    }
    interface CheckSessionOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CheckSessionCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: CheckSessionFailCallback
        /** 接口调用成功的回调函数 */
        success?: CheckSessionSuccessCallback
    }
    /** 返回选择的文件的本地临时文件对象数组 */
    interface ChooseFile {
        /** 选择的文件名称 */
        name: string
        /** 本地临时文件路径 (本地路径) */
        path: string
        /** 本地临时文件大小，单位 B */
        size: number
        /** 选择的文件的会话发送时间，Unix时间戳，工具暂不支持此属性 */
        time: number
        /** 选择的文件类型
         *
         * 可选值：
         * - 'video': 选择了视频文件;
         * - 'image': 选择了图片文件;
         * - 'file': 选择了除图片和视频的文件; */
        type: 'video' | 'image' | 'file'
    }
    interface ChooseImageOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ChooseImageCompleteCallback
        /** 最多可以选择的图片张数 */
        count?: number
        /** 接口调用失败的回调函数 */
        fail?: ChooseImageFailCallback
        /** 所选的图片的尺寸
         *
         * 可选值：
         * - 'original': 原图;
         * - 'compressed': 压缩图; */
        sizeType?: Array<'original' | 'compressed'>
        /** 选择图片的来源
         *
         * 可选值：
         * - 'album': 从相册选图;
         * - 'camera': 使用相机; */
        sourceType?: Array<'album' | 'camera'>
        /** 接口调用成功的回调函数 */
        success?: ChooseImageSuccessCallback
    }
    interface ChooseImageSuccessCallbackResult {
        /** 图片的本地临时文件路径列表 (本地路径) */
        tempFilePaths: string[]
        /** 需要基础库： `1.2.0`
         *
         * 图片的本地临时文件列表 */
        tempFiles: ImageFile[]
        errMsg: string
    }
    interface ChooseMediaOption {
        /** 仅在 sourceType 为 camera 时生效，使用前置或后置摄像头
         *
         * 可选值：
         * - 'back': 使用后置摄像头;
         * - 'front': 使用前置摄像头; */
        camera?: 'back' | 'front'
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ChooseMediaCompleteCallback
        /** 最多可以选择的文件个数，基础库2.25.0前，最多可支持9个文件，2.25.0及以后最多可支持20个文件 */
        count?: number
        /** 接口调用失败的回调函数 */
        fail?: ChooseMediaFailCallback
        /** 拍摄视频最长拍摄时间，单位秒。时间范围为 3s 至 60s 之间。不限制相册。 */
        maxDuration?: number
        /** 文件类型
         *
         * 可选值：
         * - 'image': 只能拍摄图片或从相册选择图片;
         * - 'video': 只能拍摄视频或从相册选择视频;
         * - 'mix': 可同时选择图片和视频; */
        mediaType?: Array<'image' | 'video' | 'mix'>
        /** 是否压缩所选文件，基础库2.25.0前仅对 mediaType 为 image 时有效，2.25.0及以后对全量 mediaType 有效 */
        sizeType?: string[]
        /** 图片和视频选择的来源
         *
         * 可选值：
         * - 'album': 从相册选择;
         * - 'camera': 使用相机拍摄; */
        sourceType?: Array<'album' | 'camera'>
        /** 接口调用成功的回调函数 */
        success?: ChooseMediaSuccessCallback
    }
    interface ChooseMediaSuccessCallbackResult {
        /** 本地临时文件列表 */
        tempFiles: MediaFile[]
        /** 文件类型，有效值有 image 、video、mix */
        type: string
        errMsg: string
    }
    interface ChooseMessageFileOption {
        /** 最多可以选择的文件个数，可以 0～100 */
        count: number
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ChooseMessageFileCompleteCallback
        /** 需要基础库： `2.6.0`
         *
         * 根据文件拓展名过滤，仅 type==file 时有效。每一项都不能是空字符串。默认不过滤。 */
        extension?: string[]
        /** 接口调用失败的回调函数 */
        fail?: ChooseMessageFileFailCallback
        /** 接口调用成功的回调函数 */
        success?: ChooseMessageFileSuccessCallback
        /** 所选的文件的类型
         *
         * 可选值：
         * - 'all': 从所有文件选择;
         * - 'video': 只能选择视频文件;
         * - 'image': 只能选择图片文件;
         * - 'file': 可以选择除了图片和视频之外的其它的文件; */
        type?: 'all' | 'video' | 'image' | 'file'
    }
    interface ChooseMessageFileSuccessCallbackResult {
        /** 返回选择的文件的本地临时文件对象数组 */
        tempFiles: ChooseFile[]
        errMsg: string
    }
    interface ClearStorageOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ClearStorageCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ClearStorageFailCallback
        /** 接口调用成功的回调函数 */
        success?: ClearStorageSuccessCallback
    }
    /** 菜单按钮的布局位置信息 */
    interface ClientRect {
        /** 下边界坐标，单位：px */
        bottom: number
        /** 高度，单位：px */
        height: number
        /** 左边界坐标，单位：px */
        left: number
        /** 右边界坐标，单位：px */
        right: number
        /** 上边界坐标，单位：px */
        top: number
        /** 宽度，单位：px */
        width: number
    }
    interface CloseBLEConnectionOption {
        /** 蓝牙设备 id */
        deviceId: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CloseBLEConnectionCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: CloseBLEConnectionFailCallback
        /** 接口调用成功的回调函数 */
        success?: CloseBLEConnectionSuccessCallback
    }
    interface CloseBluetoothAdapterOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CloseBluetoothAdapterCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: CloseBluetoothAdapterFailCallback
        /** 接口调用成功的回调函数 */
        success?: CloseBluetoothAdapterSuccessCallback
    }
    interface CloseSocketOption {
        /** 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。 */
        code?: number
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CloseSocketCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: CloseSocketFailCallback
        /** 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。 */
        reason?: string
        /** 接口调用成功的回调函数 */
        success?: CloseSocketSuccessCallback
    }
    interface CloseSyncOption {
        /** 需要被关闭的文件描述符。fd 通过 [FileSystemManager.open](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.open.html) 或 [FileSystemManager.openSync](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.openSync.html) 接口获得 */
        fd: string
    }
    interface CompressImageOption {
        /** 图片路径，图片的路径，支持本地路径、代码包路径 */
        src: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CompressImageCompleteCallback
        /** 需要基础库： `2.26.0`
         *
         * 压缩后图片的高度，单位为px，若不填写则默认以compressedWidth为准等比缩放 */
        compressedHeight?: number
        /** 需要基础库： `2.26.0`
         *
         * 压缩后图片的宽度，单位为px，若不填写则默认以compressedHeight为准等比缩放。 */
        compressedWidth?: number
        /** 接口调用失败的回调函数 */
        fail?: CompressImageFailCallback
        /** 压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效）。 */
        quality?: number
        /** 接口调用成功的回调函数 */
        success?: CompressImageSuccessCallback
    }
    interface CompressImageSuccessCallbackResult {
        /** 压缩后图片的临时文件路径 (本地路径) */
        tempFilePath: string
        errMsg: string
    }
    interface ConnectSocketOption {
        /** 开发者服务器 wss 接口地址 */
        url: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ConnectSocketCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ConnectSocketFailCallback
        /** 需要基础库： `2.29.0`
         *
         * 强制使用蜂窝网络发送请求 */
        forceCellularNetwork?: boolean
        /** HTTP Header，Header 中不能设置 Referer */
        header?: IAnyObject
        /** 需要基础库： `2.8.0`
         *
         * 是否开启压缩扩展 */
        perMessageDeflate?: boolean
        /** 需要基础库： `1.4.0`
         *
         * 子协议数组 */
        protocols?: string[]
        /** 接口调用成功的回调函数 */
        success?: ConnectSocketSuccessCallback
        /** 需要基础库： `2.4.0`
         *
         * 建立 TCP 连接的时候的 TCP_NODELAY 设置 */
        tcpNoDelay?: boolean
        /** 需要基础库： `2.10.0`
         *
         * 超时时间，单位为毫秒 */
        timeout?: number
    }
    /** 一个字典对象，用于指定是否禁用规范化(默认启用规范化) */
    interface Constraints {
        /** 如果指定为true则禁用标准化，默认为false */
        disableNormalization?: boolean
    }
    /** webgl 上下文属性，仅当 contextType 为 webgl 时有效 */
    interface ContextAttributes {
        /** 需要基础库： `2.11.0`
         *
         * 是否开启透明通道，仅当 contextType 为 webgl 时有效。（开启后，配合wx.createVideo({underGameView: true}) 即可在video组件之上渲染主屏画布） */
        alpha?: number
        /** 表示是否抗锯齿 */
        antialias?: boolean
        /** 抗锯齿样本数。最小值为 2，最大不超过系统限制数量，仅 iOS 支持 */
        antialiasSamples?: number
        /** 表示是否绘图完成后是否保留绘图缓冲区 */
        preserveDrawingBuffer?: boolean
    }
    interface CopyFileOption {
        /** 目标文件路径，支持本地路径 */
        destPath: string
        /** 源文件路径，支持本地路径 */
        srcPath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CopyFileCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: CopyFileFailCallback
        /** 接口调用成功的回调函数 */
        success?: CopyFileSuccessCallback
    }
    interface CreateBLEConnectionOption {
        /** 蓝牙设备 id */
        deviceId: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CreateBLEConnectionCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: CreateBLEConnectionFailCallback
        /** 接口调用成功的回调函数 */
        success?: CreateBLEConnectionSuccessCallback
        /** 超时时间，单位 ms，不填表示不会超时 */
        timeout?: number
    }
    interface CreateBLEPeripheralServerOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CreateBLEPeripheralServerCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: CreateBLEPeripheralServerFailCallback
        /** 接口调用成功的回调函数 */
        success?: CreateBLEPeripheralServerSuccessCallback
    }
    interface CreateBLEPeripheralServerSuccessCallbackResult {
        /** [BLEPeripheralServer](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.html)
         *
         * 外围设备的服务端。 */
        server: BLEPeripheralServer
        errMsg: string
    }
    interface CreateBannerAdOption {
        /** 广告单元 id */
        adUnitId: string
        /** banner 广告组件的样式 */
        style: CreateBannerAdStyleOption
        /** 广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（该参数不传入时 Banner 广告不会自动刷新） */
        adIntervals?: number
    }
    /** banner 广告组件的样式 */
    interface CreateBannerAdStyleOption {
        /** banner 广告组件的高度 */
        height: number
        /** banner 广告组件的左上角横坐标 */
        left: number
        /** banner 广告组件的左上角纵坐标 */
        top: number
        /** banner 广告组件的宽度 */
        width: number
    }
    interface CreateCameraOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CreateCameraCompleteCallback
        /** 摄像头朝向，值为 front, back */
        devicePosition?: string
        /** 接口调用失败的回调函数 */
        fail?: CreateCameraFailCallback
        /** 闪光灯，值为 auto, on, off */
        flash?: string
        /** 相机的高度 */
        height?: number
        /** 帧数据图像尺寸，值为 small, medium, large */
        size?: string
        /** 接口调用成功的回调函数 */
        success?: CreateCameraSuccessCallback
        /** 相机的宽度 */
        width?: number
        /** 相机的左上角横坐标 */
        x?: number
        /** 相机的左上角纵坐标 */
        y?: number
    }
    interface CreateCustomAdOption {
        /** 广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（仅对支持自动刷新的模板生效） */
        adIntervals: number
        /** 广告单元 id */
        adUnitId: string
        /** 原生模板广告组件的样式 */
        style: CreateCustomAdStyleOption
    }
    /** 原生模板广告组件的样式 */
    interface CreateCustomAdStyleOption {
        /** (只对小程序适用) 原生模板广告组件是否固定屏幕位置（不跟随屏幕滚动） */
        fixed: boolean
        /** 原生模板广告组件的左上角横坐标 */
        left: number
        /** 原生模板广告组件的左上角纵坐标 */
        top: number
        /** 原生模板广告组件的宽度（仅在某些模板生效，如矩阵格子） */
        width: number
    }
    interface CreateGameClubButtonOption {
        /** 游戏圈按钮的图标，仅当 object.type 参数为 image 时有效。
         *
         * 可选值：
         * - 'green': 绿色的图标;
         * - 'white': 白色的图标;
         * - 'dark': 有黑色圆角背景的白色图标;
         * - 'light': 有白色圆角背景的绿色图标; */
        icon: 'green' | 'white' | 'dark' | 'light'
        /** 按钮的样式 */
        style: OptionStyle
        /** 按钮的类型。
         *
         * 可选值：
         * - 'text': 可以设置背景色和文本的按钮;
         * - 'image': 只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高; */
        type: 'text' | 'image'
        /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
        image?: string
        /** 需要基础库： `2.30.3`
         *
         * 当传递了openlink值时，此字段生效，决定创建的按钮是否需要拥有红点，默认为true */
        hasRedDot?: boolean
        /** 需要基础库： `2.30.3`
         *
         * 设置后可以跳到对应的活动页面，具体进入「MP后台-能力地图-游戏圈」-由帖子的"游戏内跳转ID"生成 */
        openlink?: string
        /** 按钮上的文本，仅当 type 为 `text` 时有效 */
        text?: string
    }
    interface CreateGameRecorderShareButtonOption {
        /** 对局回放的分享参数。 */
        share: ShareOption
        /** 按钮的样式 */
        style: CreateGameRecorderShareButtonStyleOption
        /** 图标的 url。支持 http/https 开头的网络资源和 wxfile:// 开头的本地资源。如果不设置则使用默认图标。 */
        icon?: string
        /** 按钮的背景图片的 url。支持 http/https 开头的网络资源和 wxfile:// 开头的本地资源。如果不设置则使用默认图标。 */
        image?: string
        /** 按钮的文本。 */
        text?: string
    }
    /** 按钮的样式 */
    interface CreateGameRecorderShareButtonStyleOption {
        /** 文本的颜色。 */
        color?: string
        /** 文本的字体大小。最小 17，最大 22。 */
        fontSize?: number
        /** 按钮的高度，最小 40 逻辑像素 */
        height?: number
        /** 图标和文本之间的距离，最小 8 逻辑像素 */
        iconMarginRight?: number
        /** 左上角横坐标，单位 逻辑像素 */
        left?: number
        /** 按钮的左内边距，最小 16 逻辑像素。 */
        paddingLeft?: number
        /** 按钮的右内边距，最小 16 逻辑像素。 */
        paddingRight?: number
        /** 左上角纵坐标，单位 逻辑像素 */
        top?: number
    }
    interface CreateGridAdOption {
        /** grid(格子) 广告广告组件的主题，提供 `white` `black` 两种主题选择。 */
        adTheme: string
        /** 广告单元 id */
        adUnitId: string
        /** grid(格子) 广告组件的格子个数，可设置爱5，8两种格子个数样式，默认值为5 */
        gridCount: number
        /** grid(格子) 广告组件的样式 */
        style: CreateGridAdStyleOption
        /** 广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（该参数不传入时 grid(格子) 广告不会自动刷新） */
        adIntervals?: number
    }
    /** grid(格子) 广告组件的样式 */
    interface CreateGridAdStyleOption {
        /** grid(格子) 广告组件的高度 */
        height: number
        /** grid(格子) 广告组件的左上角横坐标 */
        left: number
        /** grid(格子) 广告组件的左上角纵坐标 */
        top: number
        /** grid(格子) 广告组件的宽度 */
        width: number
    }
    interface CreateInferenceSessionOption {
        /** 模型文件路径，目前只执行后缀为.onnx格式(支持代码包路径，和本地文件系统路径） */
        model: string
        /** 是否使用NPU推理，仅对IOS有效 */
        allowNPU?: boolean
        /** 是否生成量化模型推理 */
        allowQuantize?: boolean
        /** 推理精度，有效值为 0 - 4。一般来说，使用的precisionLevel等级越低，推理速度越快，但可能会损失精度。推荐开发者在开发时，在效果满足需求时优先使用更低精度以提高推理速度，节约能耗。
         *
         * 可选值：
         * - 0: 使用fp16 存储浮点，fp16计算，Winograd 算法也采取fp16 计算，开启近似math计算;
         * - 1: 使用fp16 存储浮点，fp16计算，禁用 Winograd 算法，开启近似math计算;
         * - 2: 使用fp16 存储浮点，fp32计算，开启 Winograd，开启近似math计算;
         * - 3: 使用fp32 存储浮点，fp32计算，开启 Winograd，开启近似math计算;
         * - 4: 使用fp32 存储浮点，fp32计算，开启 Winograd，关闭近似math计算; */
        precisionLevel?: 0 | 1 | 2 | 3 | 4
        /** 输入典型分辨率 */
        typicalShape?: IAnyObject
    }
    interface CreateInnerAudioContextOption {
        /** 需要基础库： `2.19.0`
         *
         * 是否使用 WebAudio 作为底层音频驱动，默认关闭。对于短音频、播放频繁的音频建议开启此选项，开启后将获得更优的性能表现。由于开启此选项后也会带来一定的内存增长，因此对于长音频建议关闭此选项。 */
        useWebAudioImplement?: boolean
    }
    interface CreateInterstitialAdOption {
        /** 广告单元 id */
        adUnitId: string
    }
    interface CreateOpenSettingButtonOption {
        /** 按钮的样式 */
        style: OptionStyle
        /** 按钮的类型。
         *
         * 可选值：
         * - 'text': 可以设置背景色和文本的按钮;
         * - 'image': 只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高; */
        type: 'text' | 'image'
        /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
        image?: string
        /** 按钮上的文本，仅当 type 为 `text` 时有效 */
        text?: string
    }
    interface CreateRewardedVideoAdOption {
        /** 广告单元 id */
        adUnitId: string
        /** 需要基础库： `3.7.1`
         *
         * 是否禁用分享页，默认为false */
        disableFallbackSharePage?: boolean
        /** 需要基础库： `2.8.0`
         *
         * 是否启用多例模式，默认为false */
        multiton?: boolean
    }
    interface CreateRoomOption {
        /** 房间最大人数 */
        maxMemberNum: number
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CreateRoomCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: CreateRoomFailCallback
        /** 游戏对局时长，到达指定时长时游戏会结束，最大值 3600。 */
        gameLastTime?: number
        /** 游戏自定义的关于个人的扩展信息，其他人可在 `MemberInfo` 中读取到，最多 32 个字节 */
        memberExtInfo?: string
        /** 是否需要生成游戏随机种子，设置为 true，房间信息会携带 gameSeed 属性 */
        needGameSeed?: boolean
        /** 是否需要用户头像和昵称
         *
         * 可选值：
         * - 'true': 需要用户头像和昵称，则每个加入房间的人必须授权过用户信息，MemberInfo 中会有 headimage 和 nickname;
         * - 'false': 不需要用户头像和昵称，MemberInfo 中不会有 headimage 和 nickname; */
        needUserInfo?: 'true' | 'false'
        /** 游戏自定义的关于房间扩展信息，其他人可在 `RoomInfo` 中读取到最多 32 个字节 */
        roomExtInfo?: string
        /** 需要满足百分比的玩家都发送了开始指令才能启动游戏。有效范围 0~100，0 表示只要有一个人调用开始就启动，100 表示要求所有人都开始才能启动。 */
        startPercent?: number
        /** 接口调用成功的回调函数 */
        success?: CreateRoomSuccessCallback
    }
    interface CreateRoomSuccessCallbackDataResult {
        /** 房间唯一标识 */
        accessInfo: string
        /** 用户在房间内的唯一标识 */
        clientId: number
    }
    interface CreateRoomSuccessCallbackResult {
        data: CreateRoomSuccessCallbackDataResult
        /** 错误码 */
        errCode: number
        /** 错误信息 */
        errMsg: string
    }
    interface CreateTCPSocketOption {
        /** 需要基础库： `3.6.4`
         *
         * 套接字族，必须是 IPv4 或者 IPv6，默认是 IPv4
         *
         * 可选值：
         * - 'ipv4': IPv4;
         * - 'ipv6': IPv6; */
        type?: 'ipv4' | 'ipv6'
    }
    interface CreateUserInfoButtonOption {
        /** 按钮的样式 */
        style: OptionStyle
        /** 按钮的类型。
         *
         * 可选值：
         * - 'text': 可以设置背景色和文本的按钮;
         * - 'image': 只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高; */
        type: 'text' | 'image'
        /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
        image?: string
        /** 描述用户信息的语言
         *
         * 可选值：
         * - 'en': 英文;
         * - 'zh_CN': 简体中文;
         * - 'zh_TW': 繁体中文; */
        lang?: 'en' | 'zh_CN' | 'zh_TW'
        /** 是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。 */
        withCredentials?: boolean
        /** 按钮上的文本，仅当 type 为 `text` 时有效 */
        text?: string
    }
    interface CreateVideoOption {
        /** 视频的资源地址 */
        src: string
        /** 视频跳转后自动暂停播放 */
        autoPauseIfNavigate?: boolean
        /** 视频跳转原生页后自动暂停播放 */
        autoPauseIfOpenNative?: boolean
        /** 视频是否自动播放 */
        autoplay?: boolean
        /** 需要基础库： `2.12.0`
         *
         * 视频背景颜色 */
        backgroundColor?: string
        /** 视频是否显示控件 */
        controls?: boolean
        /** 是否开启双击播放的手势 */
        enablePlayGesture?: boolean
        /** 是否启用手势控制播放进度 */
        enableProgressGesture?: boolean
        /** 视频的高度 */
        height?: number
        /** 视频的初始播放位置，单位为 s 秒 */
        initialTime?: number
        /** 视频是否为直播 */
        live?: boolean
        /** 视频是否是否循环播放 */
        loop?: boolean
        /** 视频是否禁音播放 */
        muted?: boolean
        /** 需要基础库： `2.4.0`
         *
         * 视频是否遵循系统静音开关设置（仅iOS） */
        obeyMuteSwitch?: boolean
        /** 视频的缩放模式
         *
         * 可选值：
         * - 'fill': 填充，视频拉伸填满整个容器，不保证保持原有长宽比例;
         * - 'contain': 包含，保持原有长宽比例。保证视频尺寸一定可以在容器里面放得下。因此，可能会有部分空白;
         * - 'cover': 覆盖，保持原有长宽比例。保证视频尺寸一定大于容器尺寸，宽度和高度至少有一个和容器一致。因此，视频有部分会看不见; */
        objectFit?: 'fill' | 'contain' | 'cover'
        /** 视频的播放速率，有效值有 0.5、0.8、1.0、1.25、1.5 */
        playbackRate?: number
        /** 视频的封面 */
        poster?: string
        /** 是否显示视频中央的播放按钮 */
        showCenterPlayBtn?: boolean
        /** 需要基础库： `2.12.0`
         *
         * 是否显示视频底部进度条 */
        showProgress?: boolean
        /** 需要基础库： `2.12.0`
         *
         * 是否显示控制栏的进度条 */
        showProgressInControlMode?: boolean
        /** 需要基础库： `2.11.0`
         *
         * 视频是否显示在游戏画布之下（配合 Canvas.getContext('webgl', {alpha: true}) 使主屏canvas实现透明效果） */
        underGameView?: boolean
        /** 视频的宽度 */
        width?: number
        /** 视频的左上角横坐标 */
        x?: number
        /** 视频的左上角纵坐标 */
        y?: number
    }
    /** 可选参数 */
    interface CreateWorkerOption {
        /** 需要基础库： `2.13.0`
         *
         * 是否使用实验worker。在iOS下，实验worker的JS运行效率比非实验worker提升数倍，如需在worker内进行重度计算的建议开启此选项。同时，实验worker存在极小概率会在系统资源紧张时被系统回收，因此建议配合 worker.onProcessKilled 事件使用，在worker被回收后可重新创建一个。 */
        useExperimentalWorker?: boolean
    }
    /** 原生模板广告组件。原生模板广告组件是一个原生组件，层级比普通组件高。原生模板广告组件默认是隐藏的，需要调用 CustomAd.show() 将其显示。如果宽度可配置，原生模板广告会根据开发者设置的宽度进行等比缩放，部分模板缩放后的尺寸会通过 CustomAd.onResize() 事件中提供。 */
    interface CustomAd {
        /** 原生模板广告组件的样式 */
        style: CustomAdStyle
        /** [CustomAd.destroy()](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.destroy.html)
         *
         * 销毁原生模板广告。 */
        destroy(): void
        /** [CustomAd.offClose(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.offClose.html)
*
* 移除原生模板广告关闭事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

CustomAd.onClose(listener)
CustomAd.offClose(listener) // 需传入与监听时同一个的函数对象
``` */
        offClose(
            /** onClose 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: UDPSocketOffCloseCallback
        ): void
        /** [CustomAd.offError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.offError.html)
*
* 移除原生模板广告错误事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

CustomAd.onError(listener)
CustomAd.offError(listener) // 需传入与监听时同一个的函数对象
``` */
        offError(
            /** onError 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: CustomAdOffErrorCallback
        ): void
        /** [CustomAd.offHide(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.offHide.html)
*
* 需要基础库： `2.14.4`
*
* 移除原生模板广告隐藏事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

CustomAd.onHide(listener)
CustomAd.offHide(listener) // 需传入与监听时同一个的函数对象
``` */
        offHide(
            /** onHide 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffHideCallback
        ): void
        /** [CustomAd.offLoad(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.offLoad.html)
*
* 移除原生模板广告加载事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

CustomAd.onLoad(listener)
CustomAd.offLoad(listener) // 需传入与监听时同一个的函数对象
``` */
        offLoad(
            /** onLoad 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffLoadCallback
        ): void
        /** [CustomAd.offResize(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.offResize.html)
*
* 移除原生模板广告宽高回调事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

CustomAd.onResize(listener)
CustomAd.offResize(listener) // 需传入与监听时同一个的函数对象
``` */
        offResize(
            /** onResize 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffResizeCallback
        ): void
        /** [CustomAd.onClose(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.onClose.html)
         *
         * 监听原生模板广告关闭事件。 */
        onClose(
            /** 原生模板广告关闭事件的监听函数 */
            listener: UDPSocketOnCloseCallback
        ): void
        /** [CustomAd.onError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.onError.html)
         *
         * 监听原生模板广告错误事件。
         *
         * **错误码信息与解决方案表**
         *
         *  错误码是通过onError获取到的错误信息。调试期间，可以通过异常返回来捕获信息。可以针对异常返回加上适当的监控信息辅助排查现网情况。
         *
         * | 代码 | 异常情况 | 理由 | 解决方案 |
         * | ------ | -------------- | --------------- | -------------------------- |
         * | 1000  | 后端错误调用失败  | 该项错误不是开发者的异常情况 | 一般情况下忽略一段时间即可恢复。 |
         * | 1001  | 参数错误    | 使用方法错误 | 可以前往developers.weixin.qq.com确认具体教程（小程序和小游戏分别有各自的教程，可以在顶部选项中，“设计”一栏的右侧进行切换。|
         * | 1002  | 广告单元无效    | 可能是拼写错误、或者误用了其他APP的广告ID | 请重新前往mp.weixin.qq.com确认广告位ID。 |
         * | 1003  | 内部错误    | 该项错误不是开发者的异常情况 | 一般情况下忽略一段时间即可恢复。|
         * | 1004  | 无适合的广告   | 广告不是每一次都会出现，这次没有出现可能是由于该用户不适合浏览广告 | 属于正常情况，且开发者需要针对这种情况做形态上的兼容。 |
         * | 1005  | 广告组件审核中  | 你的广告正在被审核，无法展现广告 | 请前往mp.weixin.qq.com确认审核状态，且开发者需要针对这种情况做形态上的兼容。|
         * | 1006  | 广告组件被驳回  | 你的广告审核失败，无法展现广告 | 请前往mp.weixin.qq.com确认审核状态，且开发者需要针对这种情况做形态上的兼容。|
         * | 1007  | 广告组件被封禁  | 你的广告能力已经被封禁，封禁期间无法展现广告 | 请前往mp.weixin.qq.com确认小程序广告封禁状态。 |
         * | 1008  | 广告单元已关闭  | 该广告位的广告能力已经被关闭 | 请前往mp.weixin.qq.com重新打开对应广告位的展现。|
         * | 2001  | 模板渲染错误  | 渲染过程出现错误 | |
         * | 2002  | 模板为空  | 该广告位的广告能力已经被关闭 | |
         * | 2003  | 模板解析失败  | 该广告位的广告能力已经被关闭 | |
         * | 2004  | 触发频率限制  | 小程序启动一定时间内不允许展示原生模板广告 | |
         * | 2005  | 触发频率限制  | 距离小程序插屏广告或者激励视频广告上次播放时间间隔不足，不允许展示原生模板广告 | | */
        onError(
            /** 原生模板广告错误事件的监听函数 */
            listener: CustomAdOnErrorCallback
        ): void
        /** [CustomAd.onHide(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.onHide.html)
         *
         * 需要基础库： `2.14.4`
         *
         * 监听原生模板广告隐藏事件, 某些模板如矩阵格子模板用户点击关闭时也会触发该事件。 */
        onHide(
            /** 原生模板广告隐藏事件的监听函数 */
            listener: OnHideCallback
        ): void
        /** [CustomAd.onLoad(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.onLoad.html)
         *
         * 监听原生模板广告加载事件。 */
        onLoad(
            /** 原生模板广告加载事件的监听函数 */
            listener: OnLoadCallback
        ): void
        /** [CustomAd.onResize(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.onResize.html)
         *
         * 监听原生模板广告宽高回调事件（部分横幅模板支持）。 */
        onResize(
            /** 原生模板广告宽高回调事件的监听函数 */
            listener: OnResizeCallback
        ): void
        /** [Promise CustomAd.hide()](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.hide.html)
         *
         * 隐藏原生模板广告。（某些模板广告无法隐藏） */
        hide(): Promise<any>
        /** [Promise CustomAd.show()](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.show.html)
         *
         * 显示原生模板广告。 */
        show(): Promise<any>
        /** [boolean CustomAd.isShow()](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.isShow.html)
         *
         * 查询原生模板广告展示状态。 */
        isShow(): boolean
    }
    interface CustomAdOnErrorListenerResult {
        /** 需要基础库： `2.2.2`
         *
         * 错误码
         *
         * 可选值：
         * - 1000: 后端接口调用失败;
         * - 1001: 参数错误;
         * - 1002: 广告单元无效;
         * - 1003: 内部错误;
         * - 1004: 无合适的广告;
         * - 1005: 广告组件审核中;
         * - 1006: 广告组件被驳回;
         * - 1007: 广告组件被封禁;
         * - 1008: 广告单元已关闭;
         * - 2001: 模板渲染错误;
         * - 2002: 模板为空;
         * - 2003: 模板解析失败;
         * - 2004: 触发频率限制;
         * - 2005: 触发频率限制; */
        errCode:
            | 1000
            | 1001
            | 1002
            | 1003
            | 1004
            | 1005
            | 1006
            | 1007
            | 1008
            | 2001
            | 2002
            | 2003
            | 2004
            | 2005
        /** 错误信息 */
        errMsg: string
    }
    /** 原生模板广告组件的样式 */
    interface CustomAdStyle {
        /** (只对小程序适用) 原生模板广告组件是否固定屏幕位置（不跟随屏幕滚动） */
        fixed: boolean
        /** 原生模板广告组件的左上角横坐标 */
        left: number
        /** 原生模板广告组件的左上角纵坐标 */
        top: number
    }
    interface DataOption {
        /** 此时服务器的最大帧号。 */
        maxFrameId: any[]
    }
    /** 需要获取的数据指标的对象数组 */
    interface DataType {
        /** 见type表格说明 */
        type: number
        /** 部分type需要传，见type表格说明 */
        subKey?: string
    }
    interface DecodeOption {
        /** 要解码的 ArrayBuffer */
        data: ArrayBuffer
        /** 编码的格式
         *
         * 可选值：
         * - 'utf8': ;
         * - 'utf-8': ;
         * - 'ucs2': 以小端序读取;
         * - 'ucs-2': 以小端序读取;
         * - 'utf16le': 以小端序读取;
         * - 'utf-16le': 以小端序读取;
         * - 'latin1': ;
         * - 'gbk': ; */
        format?:
            | 'utf8'
            | 'utf-8'
            | 'ucs2'
            | 'ucs-2'
            | 'utf16le'
            | 'utf-16le'
            | 'latin1'
            | 'gbk'
    }
    /** 帧深度纹理buffer对象 */
    interface DepthBufferRes {
        /** 深度纹理buffer */
        DepthAddress: ArrayBuffer
        /** 深度纹理高 */
        height: number
        /** 深度纹理宽 */
        width: number
    }
    /** 需要基础库： `3.0.0`
     *
     * 深度识别配置。用法详情[指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/depth.html)。 */
    interface DepthTrack {
        /** 需要基础库： `3.0.0`
         *
         * 深度识别模式
         *
         * 可选值：
         * - 1: 通过摄像头实时检测;
         * - 2: 静态图片检测; */
        mode: 1 | 2
    }
    /** 描述符数据 */
    interface Descriptor {
        /** Descriptor 的 UUID */
        uuid: string
        /** 描述符的权限 */
        permission?: DescriptorPermission
        /** 描述符数据 */
        value?: ArrayBuffer
    }
    /** 描述符的权限 */
    interface DescriptorPermission {
        /** 读 */
        read?: boolean
        /** 写 */
        write?: boolean
    }
    interface DetectBodyOption {
        /** 人脸图像像素点数据，每四项表示一个像素点的 RGBA */
        frameBuffer: ArrayBuffer
        /** 图像高度 */
        height: number
        /** 图像宽度 */
        width: number
        /** 评分阈值。正常情况传入 0.8 即可。 */
        scoreThreshold?: number
        /** 图像源类型。正常情况传入 1 即可。当输入的图片是来自一个连续视频的每一帧图像时，sourceType 传入 0 会得到更优的效果
         *
         * 可选值：
         * - 1: 表示输入的图片是随机的图片;
         * - 0: 表示输入的图片是来自一个连续视频的每一帧图像; */
        sourceType?: 1 | 0
    }
    interface DetectDepthOption {
        /** 需要识别深度的图像像素点数据，每四项表示一个像素点的 RGBA */
        frameBuffer: ArrayBuffer
        /** 图像高度 */
        height: number
        /** 图像宽度 */
        width: number
    }
    interface DetectFaceOption {
        /** 人脸图像像素点数据，每四项表示一个像素点的 RGBA */
        frameBuffer: ArrayBuffer
        /** 图像高度 */
        height: number
        /** 图像宽度 */
        width: number
        /** 算法模型类型。正常情况传入 1 即可。0、1、2 分别表示小、中、大模型，模型越大识别准确率越高，但资源占用也越高。建议根据用户设备性能进行选择。
         *
         * 可选值：
         * - 0: 小模型;
         * - 1: 中模型;
         * - 2: 大模型; */
        modelModel?: 0 | 1 | 2
        /** 评分阈值。正常情况传入 0.8 即可。 */
        scoreThreshold?: number
        /** 图像源类型。正常情况传入 1 即可。当输入的图片是来自一个连续视频的每一帧图像时，sourceType 传入 0 会得到更优的效果
         *
         * 可选值：
         * - 1: 表示输入的图片是随机的图片;
         * - 0: 表示输入的图片是来自一个连续视频的每一帧图像; */
        sourceType?: 1 | 0
    }
    interface DetectHandOption {
        /** 人脸图像像素点数据，每四项表示一个像素点的 RGBA */
        frameBuffer: ArrayBuffer
        /** 图像高度 */
        height: number
        /** 图像宽度 */
        width: number
        /** 算法检测模式
         *
         * 可选值：
         * - 0: 检测模式，输出框和点;
         * - 1: 手势模式，输出框和手势分类;
         * - 2: 结合0和1模式，输出框、点、手势分类; */
        algoMode?: 0 | 1 | 2
        /** 评分阈值。正常情况传入 0.8 即可。 */
        scoreThreshold?: number
    }
    interface DeviceInfo {
        /** 应用（微信APP）二进制接口类型（仅 Android 支持） */
        abi: string
        /** 设备性能等级（仅 Android 支持）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50）<br> 注意：从基础库3.4.5开始，本返回值停止维护，请使用[wx.getDeviceBenchmarkInfo](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getDeviceBenchmarkInfo.html)获取设备性能等级 */
        benchmarkLevel: number
        /** 设备品牌 */
        brand: string
        /** 需要基础库： `2.29.0`
         *
         * 设备 CPU 型号（仅 Android 支持）（Tips: GPU 型号可通过 WebGLRenderingContext.getExtension('WEBGL_debug_renderer_info') 来获取） */
        cpuType: string
        /** 需要基础库： `2.25.1`
         *
         * 设备二进制接口类型（仅 Android 支持） */
        deviceAbi: string
        /** 需要基础库： `2.30.0`
         *
         * 设备内存大小，单位为 MB */
        memorySize: string
        /** 设备型号。新机型刚推出一段时间会显示unknown，微信会尽快进行适配。 */
        model: string
        /** 客户端平台 */
        platform: string
        /** 操作系统及版本 */
        system: string
    }
    interface DownloadFileOption {
        /** 下载资源的 url */
        url: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: DownloadFileCompleteCallback
        /** 需要基础库： `2.10.4`
         *
         * 是否开启 http2 */
        enableHttp2?: boolean
        /** 是否开启 profile，默认开启。开启后可在接口回调的 res.profile 中查看性能调试信息。 */
        enableProfile?: boolean
        /** 需要基础库： `2.10.4`
         *
         * 是否开启 Quic/h3 协议（iOS 微信目前使用 gQUIC-Q43；Android 微信在 v8.0.54 前使用 gQUIC-Q43，v8.0.54 开始使用 IETF QUIC，即 h3 协议；PC微信使用 IETF QUIC，即 h3 协议） */
        enableQuic?: boolean
        /** 接口调用失败的回调函数 */
        fail?: DownloadFileFailCallback
        /** 需要基础库： `1.8.0`
         *
         * 指定文件下载后存储的路径 (本地路径) */
        filePath?: string
        /** HTTP 请求的 Header，Header 中不能设置 Referer */
        header?: IAnyObject
        /** 接口调用成功的回调函数 */
        success?: DownloadFileSuccessCallback
        /** 需要基础库： `2.10.0`
         *
         * 超时时间，单位为毫秒，默认值为 60000 即一分钟。 */
        timeout?: number
        /** 需要基础库： `3.4.1`
         *
         * 使用高性能模式，暂仅支持 Android，默认关闭。该模式下有更优的网络性能表现。 */
        useHighPerformanceMode?: boolean
    }
    interface DownloadFileSuccessCallbackResult {
        /** 用户文件路径 (本地路径)。传入 filePath 时会返回，跟传入的 filePath 一致 */
        filePath: string
        /** 需要基础库： `2.10.4`
         *
         * 网络请求过程中一些调试信息，[查看详细说明](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/network.html) */
        profile: RequestProfile
        /** 开发者服务器返回的 HTTP 状态码 */
        statusCode: number
        /** 临时文件路径 (本地路径)。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件 */
        tempFilePath: string
        errMsg: string
    }
    interface DownloadTaskOnHeadersReceivedListenerResult {
        /** 开发者服务器返回的 HTTP Response Header */
        header: IAnyObject
    }
    interface DownloadTaskOnProgressUpdateListenerResult {
        /** 下载进度百分比 */
        progress: number
        /** 预期需要下载的数据总长度，单位 Bytes */
        totalBytesExpectedToWrite: number
        /** 已经下载的数据长度，单位 Bytes */
        totalBytesWritten: number
    }
    interface EncodeOption {
        /** 要编码的字符串 */
        data: string
        /** 编码的格式
         *
         * 可选值：
         * - 'utf8': ;
         * - 'utf-8': ;
         * - 'ucs2': 以小端序读取;
         * - 'ucs-2': 以小端序读取;
         * - 'utf16le': 以小端序读取;
         * - 'utf-16le': 以小端序读取;
         * - 'latin1': ;
         * - 'gbk': ; */
        format?:
            | 'utf8'
            | 'utf-8'
            | 'ucs2'
            | 'ucs-2'
            | 'utf16le'
            | 'utf-16le'
            | 'latin1'
            | 'gbk'
    }
    interface EndGameOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: EndGameCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: EndGameFailCallback
        /** 接口调用成功的回调函数 */
        success?: EndGameSuccessCallback
    }
    interface EndStateServiceOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: EndStateServiceCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: EndStateServiceFailCallback
        /** 接口调用成功的回调函数 */
        success?: EndStateServiceSuccessCallback
    }
    /** 启动参数 */
    interface EnterOptionsGame {
        /** 需要基础库： `2.20.0`
         *
         * API 类别
         *
         * 可选值：
         * - 'default': 默认类别;
         * - 'nativeFunctionalized': 原生功能化，视频号直播商品、商品橱窗等场景打开的小程序;
         * - 'browseOnly': 仅浏览，朋友圈快照页等场景打开的小程序;
         * - 'embedded': 内嵌，通过打开半屏小程序能力打开的小程序; */
        apiCategory:
            | 'default'
            | 'nativeFunctionalized'
            | 'browseOnly'
            | 'embedded'
        /** 启动小游戏的 query 参数 */
        query: Record<string, string>
        /** 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) */
        referrerInfo: EnterOptionsGameReferrerInfo
        /** 启动小游戏的[场景值](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/scene.html) */
        scene: number
        /** 从微信群聊/单聊打开小程序时，chatType 表示具体微信群聊/单聊类型
         *
         * 可选值：
         * - 1: 微信联系人单聊;
         * - 2: 企业微信联系人单聊;
         * - 3: 普通微信群聊;
         * - 4: 企业微信互通群聊; */
        chatType?: 1 | 2 | 3 | 4
        /** shareTicket，详见[获取更多转发信息](#) */
        shareTicket?: string
    }
    /** 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) */
    interface EnterOptionsGameReferrerInfo {
        /** 来源小程序、公众号或 App 的 appId */
        appId: string
        /** 来源小程序传过来的数据，scene=1037或1038时支持 */
        extraData: IAnyObject
    }
    /** 文件读取结果。res.entries 是一个对象，key是文件路径，value是一个对象 FileItem ，表示该文件的读取结果。每个 FileItem 包含 data （文件内容） 和 errMsg （错误信息） 属性。 */
    interface EntriesResult {
        /** 文件路径 */
        [path: string]: ZipFileItem
    }
    /** 要读取的压缩包内的文件列表（当传入"all" 时表示读取压缩包内所有文件） */
    interface EntryItem {
        /** 压缩包内文件路径 */
        path: string
        /** 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容
         *
         * 可选值：
         * - 'ascii': ;
         * - 'base64': ;
         * - 'binary': ;
         * - 'hex': ;
         * - 'ucs2': 以小端序读取;
         * - 'ucs-2': 以小端序读取;
         * - 'utf16le': 以小端序读取;
         * - 'utf-16le': 以小端序读取;
         * - 'utf-8': ;
         * - 'utf8': ;
         * - 'latin1': ; */
        encoding?:
            | 'ascii'
            | 'base64'
            | 'binary'
            | 'hex'
            | 'ucs2'
            | 'ucs-2'
            | 'utf16le'
            | 'utf-16le'
            | 'utf-8'
            | 'utf8'
            | 'latin1'
        /** 指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte */
        length?: number
        /** 从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：byte */
        position?: number
    }
    /** 错误 */
    interface Error {
        /** 错误 */
        message: string
        /** 错误调用堆栈 */
        stack: string
    }
    /** 需要基础库： `3.4.0`
     *
     * 网络请求过程中的一些异常信息（例如：TCPSocket.connect 传了 enableHttpDNS: true，但最终未使用 HttpDNS 时，exception 就会说明未使用 HttpDNS 的原因） */
    interface Exception {
        /** 需要基础库： `3.4.0`
         *
         * 异常信息 */
        reasons: TCPExceptionReason[]
    }
    /** 本次请求底层失败信息，所有失败信息均符合Errno错误码 */
    interface ExceptionReason {
        /** 错误原因 */
        errMsg: string
        /** 错误码 */
        errno: string
    }
    interface ExitMiniProgramOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ExitMiniProgramCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ExitMiniProgramFailCallback
        /** 接口调用成功的回调函数 */
        success?: ExitMiniProgramSuccessCallback
    }
    interface ExitVoIPChatOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ExitVoIPChatCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ExitVoIPChatFailCallback
        /** 接口调用成功的回调函数 */
        success?: ExitVoIPChatSuccessCallback
    }
    /** 客服信息 */
    interface ExtInfoOption {
        /** 客服链接 */
        url: string
    }
    /** 人脸角度信息，取值范围 [-1, 1]，数值越接近 0 表示越正对摄像头 */
    interface FaceAngel {
        /** 仰俯角（点头） */
        pitch: number
        /** 翻滚角（左右倾） */
        roll: number
        /** 偏航角（摇头） */
        yaw: number
    }
    /** 人脸置信度，取值范围 [0, 1]，数值越大置信度越高（遮挡越少） */
    interface FaceConf {
        /** 整体可信度 */
        global: number
        /** 左眼可信度 */
        leftEye: number
        /** 嘴巴可信度 */
        mouth: number
        /** 鼻子可信度 */
        nose: number
        /** 右眼可信度 */
        rightEye: number
    }
    interface FaceDetectOption {
        /** 图像像素点数据，每四项表示一个像素点的 RGBA */
        frameBuffer: ArrayBuffer
        /** 图像高度 */
        height: number
        /** 图像宽度 */
        width: number
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: FaceDetectCompleteCallback
        /** 是否返回当前图像的人脸角度信息 */
        enableAngle?: boolean
        /** 是否返回当前图像的人脸的置信度（可表示器官遮挡情况） */
        enableConf?: boolean
        /** 是否返回多张人脸的信息 */
        enableMultiFace?: boolean
        /** 是否返回当前图像的人脸（106 个点） */
        enablePoint?: boolean
        /** 接口调用失败的回调函数 */
        fail?: FaceDetectFailCallback
        /** 接口调用成功的回调函数 */
        success?: FaceDetectSuccessCallback
    }
    interface FaceDetectSuccessCallbackResult {
        /** 人脸角度信息，取值范围 [-1, 1]，数值越接近 0 表示越正对摄像头 */
        angleArray: FaceAngel
        /** 人脸置信度，取值范围 [0, 1]，数值越大置信度越高（遮挡越少） */
        confArray: FaceConf
        /** 脸部方框数值，对象包含 height, width, originX, originY 四个属性 (origin 为方框左上角坐标) */
        detectRect: IAnyObject
        /** 多人模式（enableMultiFace）下的人脸信息，每个对象包含上述其它属性 */
        faceInfo: IAnyObject[]
        /** 标记人脸轮廓的 106 个点位置数组，数组每个对象包含 x 和 y */
        pointArray: IAnyObject[]
        /** 脸部中心点横坐标，检测不到人脸则为 -1 */
        x: number
        /** 脸部中心点纵坐标，检测不到人脸则为 -1 */
        y: number
        errMsg: string
    }
    /** 需要基础库： `2.25.0`
     *
     * 人脸检测配置。用法详情[指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/face.html)。安卓微信8.0.25开始支持，iOS微信8.0.24开始支持。 */
    interface FaceTrack {
        /** 需要基础库： `2.25.0`
         *
         * 人脸检测模式
         *
         * 可选值：
         * - 1: 通过摄像头实时检测;
         * - 2: 静态图片检测; */
        mode: 1 | 2
    }
    /** 用户点击后打开意见反馈页面的按钮 */
    interface FeedbackButton {
        /** 按钮的样式 */
        style: OptionStyle
        /** 按钮的类型。
         *
         * 可选值：
         * - 'text': 可以设置背景色和文本的按钮;
         * - 'image': 只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高; */
        type: 'text' | 'image'
        /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
        image?: string
        /** 按钮上的文本，仅当 type 为 `text` 时有效 */
        text?: string
        /** [FeedbackButton.destroy()](https://developers.weixin.qq.com/minigame/dev/api/open-api/feedback/FeedbackButton.destroy.html)
         *
         * 销毁意见反馈按钮 */
        destroy(): void
        /** [FeedbackButton.hide()](https://developers.weixin.qq.com/minigame/dev/api/open-api/feedback/FeedbackButton.hide.html)
         *
         * 隐藏意见反馈按钮。 */
        hide(): void
        /** [FeedbackButton.offTap(function listener)](https://developers.weixin.qq.com/minigame/dev/api/open-api/feedback/FeedbackButton.offTap.html)
*
* 移除意见反馈按钮的点击事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

FeedbackButton.onTap(listener)
FeedbackButton.offTap(listener) // 需传入与监听时同一个的函数对象
``` */
        offTap(
            /** onTap 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: GameClubButtonOffTapCallback
        ): void
        /** [FeedbackButton.onTap(function listener)](https://developers.weixin.qq.com/minigame/dev/api/open-api/feedback/FeedbackButton.onTap.html)
         *
         * 监听意见反馈按钮的点击事件 */
        onTap(
            /** 意见反馈按钮的点击事件的监听函数 */
            listener: GameClubButtonOnTapCallback
        ): void
        /** [FeedbackButton.show()](https://developers.weixin.qq.com/minigame/dev/api/open-api/feedback/FeedbackButton.show.html)
         *
         * 显示意见反馈按钮 */
        show(): void
    }
    /** 文件数组 */
    interface FileItem {
        /** 文件保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数 */
        createTime: number
        /** 文件路径 (本地路径) */
        filePath: string
        /** 本地文件大小，以字节为单位 */
        size: number
    }
    /** 每个 FileStats 对象包含 path 和 Stats */
    interface FileStats {
        /** 文件/目录路径 */
        path: string
        /** [Stats](https://developers.weixin.qq.com/minigame/dev/api/file/Stats.html)
         *
         * Stats 对象，即描述文件状态的对象 */
        stats: Stats
    }
    interface FileSystemManagerCloseOption {
        /** 需要被关闭的文件描述符。fd 通过 [FileSystemManager.open](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.open.html) 或 [FileSystemManager.openSync](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.openSync.html) 接口获得 */
        fd: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: FileSystemManagerCloseCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: FileSystemManagerCloseFailCallback
        /** 接口调用成功的回调函数 */
        success?: FileSystemManagerCloseSuccessCallback
    }
    /** 视频帧数据，若取不到则返回 null。当缓冲区为空的时候可能暂停取不到数据。 */
    interface FrameDataOptions {
        /** 帧数据 */
        data: ArrayBuffer
        /** 帧数据高度 */
        height: number
        /** 帧原始 dts */
        pkDts: number
        /** 帧原始 pts */
        pkPts: number
        /** 帧数据宽度 */
        width: number
    }
    /** 用户信息 */
    interface FriendInfo {
        /** 用户的微信头像 url */
        avatarUrl: string
        /** 用户的微信昵称 */
        nickname: string
        /** 用户 openid */
        openid: string
    }
    interface FstatOption {
        /** 文件描述符。fd 通过 [FileSystemManager.open](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.open.html) 或 [FileSystemManager.openSync](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.openSync.html) 接口获得 */
        fd: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: FstatCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: FstatFailCallback
        /** 接口调用成功的回调函数 */
        success?: FstatSuccessCallback
    }
    interface FstatSuccessCallbackResult {
        /** [Stats](https://developers.weixin.qq.com/minigame/dev/api/file/Stats.html)
         *
         * Stats 对象，包含了文件的状态信息 */
        stats: Stats
        errMsg: string
    }
    interface FstatSyncOption {
        /** 文件描述符。fd 通过 [FileSystemManager.open](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.open.html) 或 [FileSystemManager.openSync](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.openSync.html) 接口获得 */
        fd: string
    }
    interface FtruncateOption {
        /** 文件描述符。fd 通过 [FileSystemManager.open](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.open.html) 或 [FileSystemManager.openSync](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.openSync.html) 接口获得 */
        fd: string
        /** 截断位置，默认0。如果 length 小于文件长度（单位：字节），则只有前面 length 个字节会保留在文件中，其余内容会被删除；如果 length 大于文件长度，则会对其进行扩展，并且扩展部分将填充空字节（'\0'） */
        length: number
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: FtruncateCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: FtruncateFailCallback
        /** 接口调用成功的回调函数 */
        success?: FtruncateSuccessCallback
    }
    interface FtruncateSyncOption {
        /** 文件描述符。fd 通过 [FileSystemManager.open](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.open.html) 或 [FileSystemManager.openSync](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.openSync.html) 接口获得 */
        fd: string
        /** 截断位置，默认0。如果 length 小于文件长度（单位：字节），则只有前面 length 个字节会保留在文件中，其余内容会被删除；如果 length 大于文件长度，则会对其进行扩展，并且扩展部分将填充空字节（'\0'） */
        length: number
    }
    /** 游戏圈按钮。游戏圈按钮被点击后会跳转到小游戏的游戏圈。更多关于游戏圈的信息见 [游戏圈使用指南](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/game-club.html) */
    interface GameClubButton {
        /** 游戏圈按钮的图标，仅当 type 参数为 image 时有效。
         *
         * 可选值：
         * - 'green': 绿色的图标;
         * - 'white': 白色的图标;
         * - 'dark': 有黑色圆角背景的白色图标;
         * - 'light': 有白色圆角背景的绿色图标; */
        icon: 'green' | 'white' | 'dark' | 'light'
        /** 按钮的样式 */
        style: OptionStyle
        /** 按钮的类型。
         *
         * 可选值：
         * - 'text': 可以设置背景色和文本的按钮;
         * - 'image': 只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高; */
        type: 'text' | 'image'
        /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
        image?: string
        /** 按钮上的文本，仅当 type 为 `text` 时有效 */
        text?: string
        /** [GameClubButton.destroy()](https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/GameClubButton.destroy.html)
         *
         * 销毁游戏圈按钮 */
        destroy(): void
        /** [GameClubButton.hide()](https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/GameClubButton.hide.html)
         *
         * 隐藏游戏圈按钮 */
        hide(): void
        /** [GameClubButton.offTap(function listener)](https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/GameClubButton.offTap.html)
*
* 移除游戏圈按钮的点击事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

GameClubButton.onTap(listener)
GameClubButton.offTap(listener) // 需传入与监听时同一个的函数对象
``` */
        offTap(
            /** onTap 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: GameClubButtonOffTapCallback
        ): void
        /** [GameClubButton.onTap(function listener)](https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/GameClubButton.onTap.html)
         *
         * 监听游戏圈按钮的点击事件 */
        onTap(
            /** 游戏圈按钮的点击事件的监听函数 */
            listener: GameClubButtonOnTapCallback
        ): void
        /** [GameClubButton.show()](https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/GameClubButton.show.html)
         *
         * 显示游戏圈按钮 */
        show(): void
    }
    /** 需要基础库： `2.8.0`
     *
     * 游戏对局回放分享按钮。按钮在被用户点击后会发起对最近一次录制完成的游戏对局回放的分享。 */
    interface GameRecorderShareButton {
        /** 对局回放的分享参数。 */
        share: Share
        /** 按钮的样式 */
        style: GameRecorderShareButtonStyle
        /** 图标的 url。支持 http/https 开头的网络资源和 wxfile:// 开头的本地资源。如果不设置则使用默认图标。icon尺寸固定，高16px，宽24px。 */
        icon?: string
        /** 按钮的背景图片的 url。支持 http/https 开头的网络资源和 wxfile:// 开头的本地资源。如果不设置则使用默认图标。 */
        image?: string
        /** 按钮的文本。 */
        text?: string
        /** [GameRecorderShareButton.hide()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorderShareButton.hide.html)
         *
         * 需要基础库： `2.8.0`
         *
         * 隐藏游戏对局回放分享按钮 */
        hide(): void
        /** [GameRecorderShareButton.offTap(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorderShareButton.offTap.html)
*
* 需要基础库： `2.8.0`
*
* 移除游戏对局回放分享按钮的点击事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

GameRecorderShareButton.onTap(listener)
GameRecorderShareButton.offTap(listener) // 需传入与监听时同一个的函数对象
``` */
        offTap(
            /** onTap 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: GameClubButtonOffTapCallback
        ): void
        /** [GameRecorderShareButton.onTap(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorderShareButton.onTap.html)
         *
         * 需要基础库： `2.8.0`
         *
         * 监听游戏对局回放分享按钮的点击事件。只有当分享由于非用户取消的原因失败时，该事件的回调函数才会执行。 */
        onTap(
            /** 游戏对局回放分享按钮的点击事件的监听函数 */
            listener: GameClubButtonOnTapCallback
        ): void
        /** [GameRecorderShareButton.show()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorderShareButton.show.html)
         *
         * 需要基础库： `2.8.0`
         *
         * 显示游戏对局回放分享按钮 */
        show(): void
    }
    /** 按钮的样式 */
    interface GameRecorderShareButtonStyle {
        /** 按钮背景颜色，十六进制颜色值，'transparent'为透明背景。 */
        backgroundColor?: string
        /** 按钮圆角大小，单位为逻辑像素。 */
        borderRadius?: number
        /** 文本的颜色。 */
        color?: string
        /** 文本的字体大小。最小 17，最大 22。 */
        fontSize?: number
        /** 按钮的高度，最小 40 逻辑像素 */
        height?: number
        /** 图标和文本之间的距离，最小 8 逻辑像素 */
        iconMarginRight?: number
        /** 左上角横坐标，单位 逻辑像素 */
        left?: number
        /** 按钮的左内边距，最小 16 逻辑像素。 */
        paddingLeft?: number
        /** 按钮的右内边距，最小 16 逻辑像素。 */
        paddingRight?: number
        /** 左上角纵坐标，单位 逻辑像素 */
        top?: number
    }
    interface GameRecorderStartOption {
        /** 视频比特率（kbps），默认值1000，最大值 3000，最小值 600 */
        bitrate?: number
        /** 视频的时长限制，单位为秒（s）。最大值 7200，最小值 5，到达指定时长后不会再录入。但还需要手动调用 [GameRecorder.stop()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.stop.html) 来结束录制。 */
        duration?: number
        /** 视频 fps */
        fps?: number
        /** 视频关键帧间隔 */
        gop?: number
        /** 需要基础库： `2.10.0`
         *
         * 是否录制游戏音效（仅iOS支持） */
        hookBgm?: boolean
    }
    interface GameServerManagerOnDisconnectListenerResult {
        res: OnDisconnectListenerResult
    }
    interface GameServerManagerOnMatchListenerResult {
        res: OnMatchListenerResult
    }
    interface GameServerManagerOnRoomInfoChangeListenerResult {
        res: OnRoomInfoChangeListenerResult
    }
    interface GameServerManagerOnStateUpdateListenerResult {
        res: OnStateUpdateListenerResult
    }
    /** 返回对象 object，包含 info、warn、error、debug 四个上报方法的对象。 */
    interface GameTaggedLogger {
        /** 上报 debug 级别的日志，仅支持传入日志内容。key 固定为 tag 传入的参数。 */
        debug: (...args: any[]) => any
        /** 上报 error 级别的日志，仅支持传入日志内容。key 固定为 tag 传入的参数。 */
        error: (...args: any[]) => any
        /** 上报 info 级别的日志，仅支持传入日志内容。key 固定为 tag 传入的参数。 */
        info: (...args: any[]) => any
        /** 上报 warn 级别的日志，仅支持传入日志内容。key 固定为 tag 传入的参数。 */
        warn: (...args: any[]) => any
    }
    /** 已连接的手柄信息数组，遵循浏览器标准。 */
    interface Gamepad {
        /** 一个表示控制器设备上存在的坐标轴的数组 (比如控制器摇杆)。 */
        axes: IAnyObject[]
        /** 设备上的按键的数组。 */
        buttons: IAnyObject[]
        /** 控制器是否仍然连接着系统. */
        connected: boolean
        /** 一个包含着控制器标识信息的 string */
        id: string
        /** 一个自增的整形数字，对于当前连接到系统的每一个设备是唯一的 */
        index: string
    }
    interface GeneralCallbackResult {
        /** 错误信息 */
        errMsg: string
    }
    interface GetAvailableAudioSourcesOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetAvailableAudioSourcesCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetAvailableAudioSourcesFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetAvailableAudioSourcesSuccessCallback
    }
    interface GetAvailableAudioSourcesSuccessCallbackResult {
        /** 支持的音频输入源列表，可在 [RecorderManager.start()](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.start.html) 接口中使用。返回值定义参考 https://developer.android.com/reference/kotlin/android/media/MediaRecorder.AudioSource
         *
         * 可选值：
         * - 'auto': 自动设置，默认使用手机麦克风，插上耳麦后自动切换使用耳机麦克风，所有平台适用;
         * - 'buildInMic': 手机麦克风，仅限 iOS;
         * - 'headsetMic': 耳机麦克风，仅限 iOS;
         * - 'mic': 麦克风（没插耳麦时是手机麦克风，插耳麦时是耳机麦克风），仅限 Android;
         * - 'camcorder': 同 mic，适用于录制音视频内容，仅限 Android;
         * - 'voice_communication': 同 mic，适用于实时沟通，仅限 Android;
         * - 'voice_recognition': 同 mic，适用于语音识别，仅限 Android; */
        audioSources: Array<
            | 'auto'
            | 'buildInMic'
            | 'headsetMic'
            | 'mic'
            | 'camcorder'
            | 'voice_communication'
            | 'voice_recognition'
        >
        errMsg: string
    }
    interface GetBLEDeviceCharacteristicsOption {
        /** 蓝牙设备 id。需要已经通过 [wx.createBLEConnection](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.createBLEConnection.html) 建立连接 */
        deviceId: string
        /** 蓝牙服务 UUID。需要先调用 [wx.getBLEDeviceServices](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.getBLEDeviceServices.html) 获取 */
        serviceId: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetBLEDeviceCharacteristicsCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetBLEDeviceCharacteristicsFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetBLEDeviceCharacteristicsSuccessCallback
    }
    interface GetBLEDeviceCharacteristicsSuccessCallbackResult {
        /** 设备特征列表 */
        characteristics: BLECharacteristic[]
        errMsg: string
    }
    interface GetBLEDeviceRSSIOption {
        /** 蓝牙设备 id */
        deviceId: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetBLEDeviceRSSICompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetBLEDeviceRSSIFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetBLEDeviceRSSISuccessCallback
    }
    interface GetBLEDeviceRSSISuccessCallbackResult {
        /** 信号强度，单位 dBm */
        RSSI: number
        errMsg: string
    }
    interface GetBLEDeviceServicesOption {
        /** 蓝牙设备 id。需要已经通过 [wx.createBLEConnection](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.createBLEConnection.html) 建立连接 */
        deviceId: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetBLEDeviceServicesCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetBLEDeviceServicesFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetBLEDeviceServicesSuccessCallback
    }
    interface GetBLEDeviceServicesSuccessCallbackResult {
        /** 设备服务列表 */
        services: BLEService[]
        errMsg: string
    }
    interface GetBLEMTUOption {
        /** 蓝牙设备 id */
        deviceId: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetBLEMTUCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetBLEMTUFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetBLEMTUSuccessCallback
        /** 写模式 （iOS 特有参数）
         *
         * 可选值：
         * - 'write': 有回复写;
         * - 'writeNoResponse': 无回复写; */
        writeType?: 'write' | 'writeNoResponse'
    }
    interface GetBLEMTUSuccessCallbackResult {
        /** 最大传输单元 */
        mtu: number
        errMsg: string
    }
    interface GetBackgroundFetchDataOption {
        /** 缓存数据类别，取值为 periodic 或 pre */
        fetchType: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetBackgroundFetchDataCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetBackgroundFetchDataFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetBackgroundFetchDataSuccessCallback
    }
    interface GetBackgroundFetchDataSuccessCallbackResult {
        /** 缓存数据 */
        fetchedData: string
        /** 小程序页面路径 */
        path: string
        /** 传给页面的 query 参数 */
        query: string
        /** 进入小程序的场景值 */
        scene: number
        /** 客户端拿到缓存数据的时间戳 ms。(iOS 时间戳存在异常，8.0.27 修复) */
        timeStamp: number
        errMsg: string
    }
    interface GetBackgroundFetchTokenOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetBackgroundFetchTokenCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetBackgroundFetchTokenFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetBackgroundFetchTokenSuccessCallback
    }
    interface GetBackgroundFetchTokenSuccessCallbackResult {
        /** 接口调用结果 */
        errMsg: string
        /** 自定义的登录态 */
        token: string
    }
    interface GetBatteryInfoOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetBatteryInfoCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetBatteryInfoFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetBatteryInfoSuccessCallback
    }
    interface GetBatteryInfoSuccessCallbackResult {
        /** 是否正在充电中 */
        isCharging: boolean
        /** 需要基础库： `3.5.0`
         *
         * 是否处于省电模式 */
        isLowPowerModeEnabled: boolean
        /** 设备电量，范围 1 - 100 */
        level: number
        errMsg: string
    }
    interface GetBatteryInfoSyncResult {
        /** 是否正在充电中 */
        isCharging: boolean
        /** 需要基础库： `3.5.0`
         *
         * 是否处于省电模式 */
        isLowPowerModeEnabled: boolean
        /** 设备电量，范围 1 - 100 */
        level: number
    }
    interface GetBeaconsOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetBeaconsCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetBeaconsFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetBeaconsSuccessCallback
    }
    interface GetBeaconsSuccessCallbackResult {
        /** Beacon 设备列表 */
        beacons: BeaconInfo[]
        errMsg: string
    }
    interface GetBluetoothAdapterStateOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetBluetoothAdapterStateCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetBluetoothAdapterStateFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetBluetoothAdapterStateSuccessCallback
    }
    interface GetBluetoothAdapterStateSuccessCallbackResult {
        /** 蓝牙适配器是否可用 */
        available: boolean
        /** 是否正在搜索设备 */
        discovering: boolean
        errMsg: string
    }
    interface GetBluetoothDevicesOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetBluetoothDevicesCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetBluetoothDevicesFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetBluetoothDevicesSuccessCallback
    }
    interface GetBluetoothDevicesSuccessCallbackResult {
        /** UUID 对应的已连接设备列表 */
        devices: BlueToothDevice[]
        errMsg: string
    }
    interface GetChannelsLiveInfoOption {
        /** 视频号 id，以“sph”开头的id，可在视频号助手获取 */
        finderUserName: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetChannelsLiveInfoCompleteCallback
        /** 需要基础库： `2.29.0`
         *
         * 结束时间，筛选指定时间段的直播。若上传了startTime，未上传endTime，则endTime默认取当前时间 */
        endTime?: number
        /** 接口调用失败的回调函数 */
        fail?: GetChannelsLiveInfoFailCallback
        /** 需要基础库： `2.29.0`
         *
         * 起始时间，筛选指定时间段的直播。若上传了endTime，未上传startTime，则startTime默认为0 */
        startTime?: number
        /** 接口调用成功的回调函数 */
        success?: GetChannelsLiveInfoSuccessCallback
    }
    interface GetChannelsLiveInfoSuccessCallbackResult {
        /** 直播主题 */
        description: string
        /** 直播 feedId */
        feedId: string
        /** 视频号头像 */
        headUrl: string
        /** 视频号昵称 */
        nickname: string
        /** 直播 nonceId */
        nonceId: string
        /** 需要基础库： `2.29.0`
         *
         * 除最近的一条直播外，其他的直播列表（注意：每次最多返回按时间戳增序排列的15个直播信息，其中时间最近的那个直播会在接口其他的返回参数中展示，其余的直播会在该字段中展示）。 */
        otherInfos: any[]
        /** 需要基础库： `2.29.0`
         *
         * 直播回放状态
         *
         * 可选值：
         * - 0: 未生成;
         * - 1: 已生成;
         * - 3: 生成中;
         * - 6: 已过期; */
        replayStatus: 0 | 1 | 3 | 6
        /** 直播状态
         *
         * 可选值：
         * - 1: 直播状态不存在（针对未开过直播的主播）;
         * - 2: 直播中;
         * - 3: 直播已结束;
         * - 4: 直播准备中（未开播）; */
        status: 1 | 2 | 3 | 4
        errMsg: string
    }
    interface GetChannelsLiveNoticeInfoOption {
        /** 视频号 id，以“sph”开头的id，可在视频号助手获取 */
        finderUserName: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetChannelsLiveNoticeInfoCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetChannelsLiveNoticeInfoFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetChannelsLiveNoticeInfoSuccessCallback
    }
    interface GetChannelsLiveNoticeInfoSuccessCallbackResult {
        /** 直播封面 */
        headUrl: string
        /** 视频号昵称 */
        nickname: string
        /** 预告 id */
        noticeId: string
        /** 需要基础库： `2.24.6`
         *
         * 除最近的一条预告信息外，其他的预告信息列表（注意：每次最多返回按时间戳增序排列的15个预告信息，其中时间最近的那个预告信息会在接口其他的返回参数中展示，其余的预告信息会在该字段中展示）。 */
        otherInfos: any[]
        /** 是否可预约 */
        reservable: boolean
        /** 开始时间 */
        startTime: string
        /** 预告状态：0可用 1取消 2已用 */
        status: number
        errMsg: string
    }
    interface GetClipboardDataOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetClipboardDataCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetClipboardDataFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetClipboardDataSuccessCallback
    }
    interface GetClipboardDataSuccessCallbackOption {
        /** 剪贴板的内容 */
        data: string
        errMsg: string
    }
    interface GetConnectedBluetoothDevicesOption {
        /** 蓝牙设备主服务的 UUID 列表（支持 16/32/128 位 UUID） */
        services: string[]
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetConnectedBluetoothDevicesCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetConnectedBluetoothDevicesFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetConnectedBluetoothDevicesSuccessCallback
    }
    interface GetConnectedBluetoothDevicesSuccessCallbackResult {
        /** 搜索到的设备列表 */
        devices: BluetoothDeviceInfo[]
        errMsg: string
    }
    interface GetDeviceBenchmarkInfoOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetDeviceBenchmarkInfoCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetDeviceBenchmarkInfoFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetDeviceBenchmarkInfoSuccessCallback
    }
    interface GetDeviceBenchmarkInfoSuccessCallbackResult {
        /** 需要基础库： `3.4.5`
         *
         * 设备性能等级。-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不超过50）<br> 注意：设备的benchmarkLevel值不会随着时间的推移而变化 */
        benchmarkLevel: number
        /** 需要基础库： `3.4.5`
         *
         * 设备机型档位。0（档位未知），1（高档机），2（中档机），3（低档机）<br> 注意：设备的机型档位会随着时间的推移而变化，因此在使用时请谨慎对待；若业务逻辑依赖于机型档位，但担心受到机型档位变化的影响，请参考[设备档位映射文档](https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-benchmarkLevel.html)自行判断机型档位 */
        modelLevel: number
        errMsg: string
    }
    interface GetExtConfigOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetExtConfigCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetExtConfigFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetExtConfigSuccessCallback
    }
    interface GetExtConfigSuccessCallbackResult {
        /** 第三方平台自定义的数据 */
        extConfig: IAnyObject
        errMsg: string
    }
    interface GetFileInfoOption {
        /** 要读取的文件路径 (本地路径) */
        filePath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetFileInfoCompleteCallback
        /** 计算文件摘要的算法
         *
         * 可选值：
         * - 'md5': md5 算法;
         * - 'sha1': sha1 算法;
         * - 'sha256': sha256 算法; */
        digestAlgorithm?: 'md5' | 'sha1' | 'sha256'
        /** 接口调用失败的回调函数 */
        fail?: GetFileInfoFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetFileInfoSuccessCallback
    }
    interface GetFileInfoSuccessCallbackResult {
        /** 按照传入的 digestAlgorithm 计算得出的的文件摘要 */
        digest: string
        /** 文件大小，以字节为单位 */
        size: number
        errMsg: string
    }
    interface GetFriendCloudStorageOption {
        /** 要拉取的 key 列表 */
        keyList: string[]
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetFriendCloudStorageCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetFriendCloudStorageFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetFriendCloudStorageSuccessCallback
    }
    interface GetFriendCloudStorageSuccessCallbackResult {
        /** 同玩好友的托管数据 */
        data: UserGameData[]
        errMsg: string
    }
    interface GetFriendsStateDataOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetFriendsStateDataCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetFriendsStateDataFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetFriendsStateDataSuccessCallback
    }
    interface GetFriendsStateDataSuccessCallbackResult {
        /** 好友状态信息列表 */
        list: StateData[]
        errMsg: string
    }
    interface GetFuzzyLocationOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetFuzzyLocationCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetFuzzyLocationFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetFuzzyLocationSuccessCallback
        /** 返回的坐标类型
         *
         * 可选值：
         * - 'wgs84': 返回 gps 坐标;
         * - 'gcj02': 返回 gcj02 坐标; */
        type?: 'wgs84' | 'gcj02'
    }
    interface GetFuzzyLocationSuccessCallbackResult {
        /** 纬度，范围为 -90~90，负数表示南纬 */
        latitude: number
        /** 经度，范围为 -180~180，负数表示西经 */
        longitude: number
        errMsg: string
    }
    interface GetGameClubDataOption {
        /** 需要获取的数据指标的对象数组 */
        dataTypeList: DataType[]
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetGameClubDataCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetGameClubDataFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetGameClubDataSuccessCallback
    }
    interface GetGameClubDataSuccessCallbackResult {
        /** 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过[云调用直接获取开放数据](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html) */
        cloudID: string
        /** 包括 GameClubData 在内的加密数据，详见[加密数据解密算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html) */
        encryptedData: string
        /** 加密算法的初始向量 */
        iv: string
        /** 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息 */
        signature: string
        errMsg: string
    }
    interface GetGameLogManagerParam {
        /** 自定义全局日志信息。该信息会包含在每条日志的基础信息中。数据类型为 object，且能够通过 JSON.stringify 序列化。 */
        commonInfo?: IAnyObject
        /** 初始化完成后的回调（成功、失败都会执行）。 */
        complete?: (...args: any[]) => any
        /** 是否开启调试模式，调试模式下每次上报成功都会在控制台输出上报内容。调试模式仅在开发版和体验版小游戏中生效。 */
        debug?: boolean
        /** 初始化失败后的回调。 */
        fail?: (...args: any[]) => any
        /** 初始化成功后的回调。 */
        success?: (...args: any[]) => any
    }
    interface GetGroupCloudStorageOption {
        /** 要拉取的 key 列表 */
        keyList: string[]
        /** 群分享对应的 shareTicket */
        shareTicket: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetGroupCloudStorageCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetGroupCloudStorageFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetGroupCloudStorageSuccessCallback
    }
    interface GetGroupCloudStorageSuccessCallbackResult {
        /** 群同玩成员的托管数据 */
        data: UserGameData[]
        errMsg: string
    }
    interface GetGroupEnterInfoOption {
        /** 需要基础库： `3.7.8`
         *
         * 开启后单聊下返回 open_single_roomid */
        allowSingleChat?: boolean
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetGroupEnterInfoCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetGroupEnterInfoFailCallback
        /** 需要基础库： `3.7.8`
         *
         * 开启后返回用户在群(含单聊)下的 group_openid */
        needGroupOpenID?: boolean
        /** 接口调用成功的回调函数 */
        success?: GetGroupEnterInfoSuccessCallback
    }
    interface GetGroupEnterInfoSuccessCallbackResult {
        /** 需要基础库： `2.7.0`
         *
         * 敏感数据对应的云 ID，开通[云开发](https://developers.weixin.qq.com/minigame/dev/wxcloud/basis/getting-started.html)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html#method-cloud) */
        cloudID: string
        /** 包括敏感数据在内的完整转发信息的加密数据，详细见[加密数据解密算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html) */
        encryptedData: string
        /** 错误信息 */
        errMsg: string
        /** 加密算法的初始向量，详细见[加密数据解密算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html) */
        iv: string
    }
    interface GetGroupInfoOption {
        /** 群 openGId，可通过 `wx.getGroupEnterInfo` 或 `wx.getShareInfo` 获取 */
        openGId: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetGroupInfoCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetGroupInfoFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetGroupInfoSuccessCallback
    }
    interface GetGroupInfoSuccessCallbackResult {
        /** 群名称 */
        name: string
        errMsg: string
    }
    interface GetInferenceEnvInfoOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetInferenceEnvInfoCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetInferenceEnvInfoFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetInferenceEnvInfoSuccessCallback
    }
    interface GetInferenceEnvInfoSuccessCallbackResult {
        /** AI推理引擎版本 */
        ver: string
        errMsg: string
    }
    interface GetLastRoomInfoOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetLastRoomInfoCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetLastRoomInfoFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetLastRoomInfoSuccessCallback
    }
    interface GetLastRoomInfoSuccessCallbackDataResult {
        /** 最近参与房间的 accessInfo */
        accessInfo: string
        /** 最近参与房间的详细信息 */
        roomInfo: RoomInfo
    }
    interface GetLastRoomInfoSuccessCallbackResult {
        data: GetLastRoomInfoSuccessCallbackDataResult
        errMsg: string
    }
    interface GetLatestUserKeyOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetLatestUserKeyCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetLatestUserKeyFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetLatestUserKeySuccessCallback
    }
    interface GetLatestUserKeySuccessCallbackResult {
        /** 用户加密密钥 */
        encryptKey: string
        /** 密钥过期时间 */
        expireTime: number
        /** 密钥初始向量 */
        iv: string
        /** 密钥版本 */
        version: number
        errMsg: string
    }
    interface GetLocalIPAddressOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetLocalIPAddressCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetLocalIPAddressFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetLocalIPAddressSuccessCallback
    }
    interface GetLocalIPAddressSuccessCallbackResult {
        /** 错误信息 */
        errMsg: string
        /** 本机局域网IP地址 */
        localip: string
        /** 本机局域网子网掩码，基础库 2.24.0 开始支持 */
        netmask: string
    }
    interface GetLocationOption {
        /** 需要基础库： `1.6.0`
         *
         * 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度 */
        altitude?: boolean
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetLocationCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetLocationFailCallback
        /** 需要基础库： `2.9.0`
         *
         * 高精度定位超时时间(ms)，指定时间内返回最高精度，该值3000ms以上高精度定位才有效果 */
        highAccuracyExpireTime?: number
        /** 需要基础库： `2.9.0`
         *
         * 开启高精度定位 */
        isHighAccuracy?: boolean
        /** 接口调用成功的回调函数 */
        success?: GetLocationSuccessCallback
        /** wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标 */
        type?: string
    }
    interface GetLocationSuccessCallbackResult {
        /** 位置的精确度，反应与真实位置之间的接近程度，可以理解成10即与真实位置相差10m，越小越精确 */
        accuracy: number
        /** 需要基础库： `1.2.0`
         *
         * 高度，单位 m */
        altitude: number
        /** 需要基础库： `1.2.0`
         *
         * 水平精度，单位 m */
        horizontalAccuracy: number
        /** 纬度，范围为 -90~90，负数表示南纬 */
        latitude: number
        /** 经度，范围为 -180~180，负数表示西经 */
        longitude: number
        /** 速度，单位 m/s */
        speed: number
        /** 需要基础库： `1.2.0`
         *
         * 垂直精度，单位 m（Android 无法获取，返回 0） */
        verticalAccuracy: number
        errMsg: string
    }
    interface GetLogManagerOption {
        /** 需要基础库： `2.3.2`
         *
         * 取值为0/1，取值为0表示会把 `App`、`Page` 的生命周期函数和 `wx` 命名空间下的函数调用写入日志，取值为1则不会。默认值是 0 */
        level?: number
    }
    interface GetLostFramesOption {
        /** 起始帧号。不填或非法值默认从第 1 帧开始补 */
        beginFrameId: number
        /** 结尾帧号。不填或非法值默认补到当前最新帧 */
        endFrameId: number
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetLostFramesCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetLostFramesFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetLostFramesSuccessCallback
    }
    interface GetLostFramesSuccessCallbackDataResult {
        /** 丢失的帧数组 */
        frameList: any[]
    }
    interface GetLostFramesSuccessCallbackResult {
        data: GetLostFramesSuccessCallbackDataResult
        errMsg: string
    }
    interface GetNetworkTypeOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetNetworkTypeCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetNetworkTypeFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetNetworkTypeSuccessCallback
    }
    interface GetNetworkTypeSuccessCallbackResult {
        /** 需要基础库： `2.22.1`
         *
         * 设备是否使用了网络代理 */
        hasSystemProxy: boolean
        /** 网络类型
         *
         * 可选值：
         * - 'wifi': wifi 网络;
         * - '2g': 2g 网络;
         * - '3g': 3g 网络;
         * - '4g': 4g 网络;
         * - '5g': 5g 网络;
         * - 'unknown': Android 下不常见的网络类型;
         * - 'none': 无网络; */
        networkType: 'wifi' | '2g' | '3g' | '4g' | '5g' | 'unknown' | 'none'
        /** 信号强弱，单位 dbm */
        signalStrength: number
        /** 需要基础库： `3.5.3`
         *
         * 是否处于弱网环境 */
        weakNet: boolean
        errMsg: string
    }
    interface GetOpenDataContextOption {
        /** 共享画布类型，有效值为 offscreenCanvas 和 screenCanvas，默认为 offscreenCanvas。区别： offscreenCanvas 模式下，sharedCanvas 绘制完后需要渲染到主屏；screenCanvas 模式下，sharedCanvas 为独立渲染，并且本身已经上屏。
         *
         * 可选值：
         * - 'offscreenCanvas': sharedCanvas 绘制完后需要渲染到主屏;
         * - 'screenCanvas': sharedCanvas 独立渲染，并且本身已经上屏; */
        sharedCanvasMode?: 'offscreenCanvas' | 'screenCanvas'
    }
    interface GetPhoneNumberOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetPhoneNumberCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetPhoneNumberFailCallback
        /** 手机号实时验证，向用户申请，并在用户同意后，快速填写和实时验证手机号 [具体说明](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/getRealtimePhoneNumber.html)。 */
        isRealtime?: boolean
        /** 当手机号快速验证或手机号实时验证额度用尽时，是否对用户展示“申请获取你的手机号，但该功能使用次数已达当前小程序上限，暂时无法使用”的提示，默认展示。 */
        phoneNumberNoQuotaToast?: boolean
        /** 接口调用成功的回调函数 */
        success?: GetPhoneNumberSuccessCallback
    }
    interface GetPhoneNumberSuccessCallbackResult {
        /** 动态令牌 */
        code: string
        /** 回调信息（成功失败都会返回） */
        errMsg: string
        /** 错误码（失败时返回） */
        errno: number
    }
    interface GetPotentialFriendListOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetPotentialFriendListCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetPotentialFriendListFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetPotentialFriendListSuccessCallback
    }
    interface GetPotentialFriendListSuccessCallbackResult {
        /** 可能对游戏感兴趣的未注册好友名单 */
        list: FriendInfo[]
        errMsg: string
    }
    interface GetPrivacySettingOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetPrivacySettingCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetPrivacySettingFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetPrivacySettingSuccessCallback
    }
    interface GetPrivacySettingSuccessCallbackResult {
        /** 是否需要用户授权隐私协议（如果开发者没有在「MP后台-设置-服务内容声明-用户隐私保护指引」中声明隐私收集类型则会返回false；如果开发者声明了隐私收集，且用户之前同意过隐私协议则会返回false；如果开发者声明了隐私收集，且用户还没同意过则返回true；如果用户之前同意过、但后来小程序又新增了隐私收集类型也会返回true） */
        needAuthorization: boolean
        /** 隐私授权协议的名称 */
        privacyContractName: string
        errMsg: string
    }
    interface GetRandomValuesOption {
        /** 整数，生成随机数的字节数，最大 1048576 */
        length: number
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetRandomValuesCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetRandomValuesFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetRandomValuesSuccessCallback
    }
    interface GetRandomValuesSuccessCallbackResult {
        /** 随机数内容，长度为传入的字节数 */
        randomValues: ArrayBuffer
        errMsg: string
    }
    interface GetRoomInfoOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetRoomInfoCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetRoomInfoFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetRoomInfoSuccessCallback
    }
    interface GetRoomInfoSuccessCallbackDataResult {
        roomInfo: RoomInfo
    }
    interface GetRoomInfoSuccessCallbackResult {
        data: GetRoomInfoSuccessCallbackDataResult
        errMsg: string
    }
    interface GetSavedFileListOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetSavedFileListCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetSavedFileListFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetSavedFileListSuccessCallback
    }
    interface GetSavedFileListSuccessCallbackResult {
        /** 文件数组 */
        fileList: FileItem[]
        errMsg: string
    }
    interface GetScreenBrightnessOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetScreenBrightnessCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetScreenBrightnessFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetScreenBrightnessSuccessCallback
    }
    interface GetScreenBrightnessSuccessCallbackOption {
        /** 屏幕亮度值，范围 0 ~ 1，0 最暗，1 最亮 */
        value: number
        errMsg: string
    }
    interface GetScreenRecordingStateOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetScreenRecordingStateCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetScreenRecordingStateFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetScreenRecordingStateSuccessCallback
    }
    interface GetScreenRecordingStateSuccessCallbackResult {
        /** 录屏状态
         *
         * 可选值：
         * - 'on': 开启;
         * - 'off': 关闭; */
        state: 'on' | 'off'
        errMsg: string
    }
    interface GetSettingOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetSettingCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetSettingFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetSettingSuccessCallback
        /** 需要基础库： `2.10.1`
         *
         * 是否同时获取用户订阅消息的订阅状态，默认不获取。注意：withSubscriptions 只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。 */
        withSubscriptions?: boolean
    }
    interface GetSettingSuccessCallbackResult {
        /** [AuthSetting](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/AuthSetting.html)
         *
         * 用户授权结果 */
        authSetting: AuthSetting
        /** [SubscriptionsSetting](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/SubscriptionsSetting.html)
         *
         * 需要基础库： `2.10.1`
         *
         * 用户订阅消息设置，接口参数`withSubscriptions`值为`true`时才会返回。 */
        subscriptionsSetting: SubscriptionsSetting
        /** [AuthSetting](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/AuthSetting.html)
         *
         * 在插件中调用时，当前宿主小程序的用户授权结果 */
        miniprogramAuthSetting?: AuthSetting
        errMsg: string
    }
    interface GetShareInfoOption {
        /** shareTicket，详见[获取更多转发信息](#) */
        shareTicket: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetShareInfoCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetShareInfoFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetShareInfoSuccessCallback
        /** 需要基础库： `1.9.90`
         *
         * 超时时间，单位 ms */
        timeout?: number
    }
    interface GetShowSplashAdStatusOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetShowSplashAdStatusCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetShowSplashAdStatusFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetShowSplashAdStatusSuccessCallback
    }
    interface GetShowSplashAdStatusSuccessCallbackResult {
        /** 封面广告组件展示状态码
         *
         * 可选值：
         * - -1: 初始值，状态未知;
         * - 1: 展示成功;
         * - 2: 主动拦截过滤，不展示广告;
         * - 3: 展示超时; */
        code: -1 | 1 | 2 | 3
        /** 封面广告组件展示状态
         *
         * 可选值：
         * - 'unknown': 初始值，状态未知;
         * - 'pending': 进行展示中;
         * - 'success': 展示成功;
         * - 'fail': 展示失败; */
        status: 'unknown' | 'pending' | 'success' | 'fail'
        errMsg: string
    }
    interface GetStorageInfoOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetStorageInfoCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetStorageInfoFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetStorageInfoSuccessCallback
    }
    interface GetStorageInfoSuccessCallbackOption {
        /** 当前占用的空间大小, 单位 KB */
        currentSize: number
        /** 当前 storage 中所有的 key */
        keys: string[]
        /** 限制的空间大小，单位 KB */
        limitSize: number
        errMsg: string
    }
    interface GetStorageInfoSyncOption {
        /** 当前占用的空间大小, 单位 KB */
        currentSize: number
        /** 当前 storage 中所有的 key */
        keys: string[]
        /** 限制的空间大小，单位 KB */
        limitSize: number
    }
    interface GetStorageOption<T = any> {
        /** 本地缓存中指定的 key */
        key: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetStorageCompleteCallback
        /** 需要基础库： `2.21.3`
         *
         * 是否开启加密存储。只有异步的 getStorage 接口支持开启加密存储。开启后，将会对 data 使用 AES128 解密，接口回调耗时将会增加。若开启加密存储，setStorage 和 getStorage 需要同时声明 encrypt 的值为 true */
        encrypt?: boolean
        /** 接口调用失败的回调函数 */
        fail?: GetStorageFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetStorageSuccessCallback<T>
    }
    interface GetStorageSuccessCallbackResult<T = any> {
        /** key对应的内容 */
        data: T
        errMsg: string
    }
    interface GetSystemInfoAsyncOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetSystemInfoAsyncCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetSystemInfoAsyncFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetSystemInfoAsyncSuccessCallback
    }
    interface GetSystemInfoOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetSystemInfoCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetSystemInfoFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetSystemInfoSuccessCallback
    }
    interface GetTextLineHeightOption {
        /** 字体名称 */
        fontFamily: string
        /** 文本的内容 */
        text: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetTextLineHeightCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetTextLineHeightFailCallback
        /** 字号 */
        fontSize?: number
        /** 字体样式
         *
         * 可选值：
         * - 'normal': 正常;
         * - 'italic': 斜体; */
        fontStyle?: 'normal' | 'italic'
        /** 字重
         *
         * 可选值：
         * - 'normal': 正常;
         * - 'bold': 粗体; */
        fontWeight?: 'normal' | 'bold'
        /** 接口调用成功的回调函数 */
        success?: GetTextLineHeightSuccessCallback
    }
    interface GetUserCloudStorageKeysOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetUserCloudStorageKeysCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetUserCloudStorageKeysFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetUserCloudStorageKeysSuccessCallback
    }
    interface GetUserCloudStorageKeysSuccessCallbackResult {
        /** 用户托管数据当中所有的 key 数组 */
        keys: string[]
        errMsg: string
    }
    interface GetUserCloudStorageOption {
        /** 要获取的 key 列表 */
        keyList: string[]
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetUserCloudStorageCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetUserCloudStorageFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetUserCloudStorageSuccessCallback
    }
    interface GetUserCloudStorageSuccessCallbackResult {
        /** 用户托管的 KV 数据列表 */
        KVDataList: KVData[]
        errMsg: string
    }
    interface GetUserInfoOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetUserInfoCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetUserInfoFailCallback
        /** 显示用户信息的语言
         *
         * 可选值：
         * - 'en': 英文;
         * - 'zh_CN': 简体中文;
         * - 'zh_TW': 繁体中文; */
        lang?: 'en' | 'zh_CN' | 'zh_TW'
        /** 接口调用成功的回调函数 */
        success?: GetUserInfoSuccessCallback
        /** 是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。 */
        withCredentials?: boolean
    }
    interface GetUserInfoSuccessCallbackResult {
        /** 需要基础库： `2.7.0`
         *
         * 敏感数据对应的云 ID，开通[云开发](https://developers.weixin.qq.com/minigame/dev/wxcloud/basis/getting-started.html)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html#method-cloud) */
        cloudID: string
        /** 包括敏感数据在内的完整用户信息的加密数据，详见 [用户数据的签名验证和加解密](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html#加密数据解密算法) */
        encryptedData: string
        /** 加密算法的初始向量，详见 [用户数据的签名验证和加解密](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html#加密数据解密算法) */
        iv: string
        /** 不包括敏感信息的原始数据字符串，用于计算签名 */
        rawData: string
        /** 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，详见 [用户数据的签名验证和加解密](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html) */
        signature: string
        /** [UserInfo](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/UserInfo.html)
         *
         * 用户信息对象，不包含 openid 等敏感信息 */
        userInfo: UserInfo
        errMsg: string
    }
    interface GetUserInteractiveStorageFailCallbackResult {
        /** 错误码
         *
         * 可选值：
         * - -17008: 非法的 key; */
        errCode: -17008
        /** 错误信息 */
        errMsg: string
    }
    interface GetUserInteractiveStorageOption {
        /** 要获取的 key 列表 */
        keyList: string[]
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetUserInteractiveStorageCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetUserInteractiveStorageFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetUserInteractiveStorageSuccessCallback
    }
    interface GetUserInteractiveStorageSuccessCallbackResult {
        /** 敏感数据对应的云 ID，开通[云开发](https://developers.weixin.qq.com/minigame/dev/wxcloud/basis/getting-started.html)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html#method-cloud) */
        cloudID: string
        /** 加密数据，包含互动型托管数据的值。解密后的结果为一个 `KVDataList`，每一项为一个 `KVData`。 [用户数据的签名验证和加解密](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html#加密数据解密算法) */
        encryptedData: string
        /** 加密算法的初始向量，详见 [用户数据的签名验证和加解密](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html#加密数据解密算法) */
        iv: string
        errMsg: string
    }
    interface GetWeRunDataOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetWeRunDataCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetWeRunDataFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetWeRunDataSuccessCallback
    }
    interface GetWeRunDataSuccessCallbackResult {
        /** 需要基础库： `2.7.0`
         *
         * 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html#method-cloud) */
        cloudID: string
        /** 包括敏感数据在内的完整用户信息的加密数据，详细见[加密数据解密算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html)。解密后得到的数据结构见后文 */
        encryptedData: string
        /** 加密算法的初始向量，详细见[加密数据解密算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html) */
        iv: string
        errMsg: string
    }
    /** @deprecated 基础库版本 [2.30.2](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃
     *
     * grid(格子) 广告组件。grid(格子) 广告组件是一个原生组件，层级比普通组件高。grid(格子) 广告组件默认是隐藏的，需要调用 GridAd.show() 将其显示。grid(格子) 广告会根据开发者设置的宽度进行等比缩放，缩放后的尺寸将通过 GridAd.onResize() 事件中提供。 */
    interface GridAd {
        /** grid(格子) 广告广告组件的主题，提供 `white` `black` 两种主题选择。 */
        adTheme: string
        /** grid(格子) 广告组件的格子个数，可设置爱5，8两种格子个数样式，默认值为5 */
        gridCount: number
        /** grid(格子) 广告广告组件的样式。style 上的属性的值仅为开发者设置的grid(格子) 广告) 广告会根据开发者设置的宽度进行等比缩放，缩放后的真实尺寸需要通过 GridAd.onResize() 事件获得。 */
        style: GridAdStyle
        /** [GridAd.destroy()](https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.destroy.html)
         *
         * @deprecated 基础库版本 [2.30.2](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃
         *
         * 销毁 grid(格子) 广告。 */
        destroy(): void
        /** [GridAd.hide()](https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.hide.html)
         *
         * @deprecated 基础库版本 [2.30.2](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃
         *
         * 隐藏 grid(格子) 广告。 */
        hide(): void
        /** [GridAd.offError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.offError.html)
*
* @deprecated 基础库版本 [2.30.2](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃
*
* 移除 grid(格子) 广告错误事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

GridAd.onError(listener)
GridAd.offError(listener) // 需传入与监听时同一个的函数对象
``` */
        offError(
            /** onError 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: GridAdOffErrorCallback
        ): void
        /** [GridAd.offLoad(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.offLoad.html)
*
* @deprecated 基础库版本 [2.30.2](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃
*
* 移除 grid(格子) 广告加载事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

GridAd.onLoad(listener)
GridAd.offLoad(listener) // 需传入与监听时同一个的函数对象
``` */
        offLoad(
            /** onLoad 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffLoadCallback
        ): void
        /** [GridAd.offResize(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.offResize.html)
*
* @deprecated 基础库版本 [2.30.2](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃
*
* 移除 grid(格子) 广告尺寸变化事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

GridAd.onResize(listener)
GridAd.offResize(listener) // 需传入与监听时同一个的函数对象
``` */
        offResize(
            /** onResize 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffResizeCallback
        ): void
        /** [GridAd.onError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.onError.html)
         *
         * @deprecated 基础库版本 [2.30.2](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃
         *
         * 监听 grid(格子) 广告错误事件。
         *
         * **错误码信息与解决方案表**
         *
         *  错误码是通过onError获取到的错误信息。调试期间，可以通过异常返回来捕获信息。可以针对异常返回加上适当的监控信息辅助排查现网情况。
         *
         * | 代码 | 异常情况 | 理由 | 解决方案 |
         * | ------ | -------------- | --------------- | -------------------------- |
         * | 1000  | 后端错误调用失败  | 该项错误不是开发者的异常情况 | 一般情况下忽略一段时间即可恢复。 |
         * | 1001  | 参数错误    | 使用方法错误 | 可以前往developers.weixin.qq.com确认具体教程（小程序和小游戏分别有各自的教程，可以在顶部选项中，“设计”一栏的右侧进行切换。|
         * | 1002  | 广告单元无效    | 可能是拼写错误、或者误用了其他APP的广告ID | 请重新前往mp.weixin.qq.com确认广告位ID。 |
         * | 1003  | 内部错误    | 该项错误不是开发者的异常情况 | 一般情况下忽略一段时间即可恢复。|
         * | 1004  | 无适合的广告   | 广告不是每一次都会出现，这次没有出现可能是由于该用户不适合浏览广告 | 属于正常情况，且开发者需要针对这种情况做形态上的兼容。 |
         * | 1005  | 广告组件审核中  | 你的广告正在被审核，无法展现广告 | 请前往mp.weixin.qq.com确认审核状态，且开发者需要针对这种情况做形态上的兼容。|
         * | 1006  | 广告组件被驳回  | 你的广告审核失败，无法展现广告 | 请前往mp.weixin.qq.com确认审核状态，且开发者需要针对这种情况做形态上的兼容。|
         * | 1007  | 广告组件被封禁  | 你的广告能力已经被封禁，封禁期间无法展现广告 | 请前往mp.weixin.qq.com确认小程序广告封禁状态。 |
         * | 1008  | 广告单元已关闭  | 该广告位的广告能力已经被关闭 | 请前往mp.weixin.qq.com重新打开对应广告位的展现。| */
        onError(
            /** grid(格子) 广告错误事件的监听函数 */
            listener: GridAdOnErrorCallback
        ): void
        /** [GridAd.onLoad(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.onLoad.html)
         *
         * @deprecated 基础库版本 [2.30.2](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃
         *
         * 监听 grid(格子) 广告加载事件。 */
        onLoad(
            /** grid(格子) 广告加载事件的监听函数 */
            listener: OnLoadCallback
        ): void
        /** [GridAd.onResize(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.onResize.html)
         *
         * @deprecated 基础库版本 [2.30.2](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃
         *
         * 监听 grid(格子) 广告尺寸变化事件。 */
        onResize(
            /** grid(格子) 广告尺寸变化事件的监听函数 */
            listener: OnResizeCallback
        ): void
        /** [Promise GridAd.show()](https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.show.html)
         *
         * @deprecated 基础库版本 [2.30.2](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃
         *
         * 显示 grid(格子) 广告。 */
        show(): Promise<any>
    }
    interface GridAdOnErrorListenerResult {
        /** 需要基础库： `2.2.2`
         *
         * 错误码
         *
         * 可选值：
         * - 1000: 后端接口调用失败;
         * - 1001: 参数错误;
         * - 1002: 广告单元无效;
         * - 1003: 内部错误;
         * - 1004: 无合适的广告;
         * - 1005: 广告组件审核中;
         * - 1006: 广告组件被驳回;
         * - 1007: 广告组件被封禁;
         * - 1008: 广告单元已关闭; */
        errCode: 1000 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008
        /** 错误信息 */
        errMsg: string
    }
    /** grid(格子) 广告广告组件的样式。style 上的属性的值仅为开发者设置的grid(格子) 广告) 广告会根据开发者设置的宽度进行等比缩放，缩放后的真实尺寸需要通过 GridAd.onResize() 事件获得。 */
    interface GridAdStyle {
        /** grid(格子) 广告组件的高度 */
        height: number
        /** grid(格子) 广告广告组件的左上角横坐标 */
        left: number
        /** grid(格子) 广告组件经过缩放后真实的高度 */
        realHeight: number
        /** grid(格子) 广告组件经过缩放后真实的宽度 */
        realWidth: number
        /** grid(格子) 广告组件的左上角纵坐标 */
        top: number
        /** grid(格子) 广告组件的宽度。最小 300，最大至 `屏幕宽度`（屏幕宽度可以通过 wx.getSystemInfoSync() 获取）。 */
        width: number
    }
    /** 需要基础库： `2.28.0`
     *
     * 手势检测配置。用法详情[指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/hand.html)。 */
    interface HandTrack {
        /** 需要基础库： `2.28.0`
         *
         * 手势检测模式
         *
         * 可选值：
         * - 1: 通过摄像头实时检测;
         * - 2: 静态图片检测; */
        mode: 1 | 2
    }
    interface HideKeyboardOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: HideKeyboardCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: HideKeyboardFailCallback
        /** 接口调用成功的回调函数 */
        success?: HideKeyboardSuccessCallback
    }
    interface HideLoadingOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: HideLoadingCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: HideLoadingFailCallback
        /** 需要基础库： `2.22.1`
         *
         * 目前 toast 和 loading 相关接口可以相互混用，此参数可用于取消混用特性 */
        noConflict?: boolean
        /** 接口调用成功的回调函数 */
        success?: HideLoadingSuccessCallback
    }
    interface HideShareMenuOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: HideShareMenuCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: HideShareMenuFailCallback
        /** 需要基础库： `2.11.3`
         *
         * 本接口为 Beta 版本，暂只在 Android 平台支持。需要隐藏的转发按钮名称列表，默认['shareAppMessage', 'shareTimeline']。按钮名称合法值包含 "shareAppMessage"、"shareTimeline" 两种 */
        menus?: string[]
        /** 接口调用成功的回调函数 */
        success?: HideShareMenuSuccessCallback
    }
    interface HideToastOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: HideToastCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: HideToastFailCallback
        /** 需要基础库： `2.22.1`
         *
         * 目前 toast 和 loading 相关接口可以相互混用，此参数可用于取消混用特性 */
        noConflict?: boolean
        /** 接口调用成功的回调函数 */
        success?: HideToastSuccessCallback
    }
    /** 检测结果 */
    interface HitTestRes {
        /** 包含位置、旋转、放缩信息的矩阵，以列为主序 */
        transform: Float32Array
    }
    /** 需要基础库： `3.3.0`
     *
     * 身份证检测配置。用法详情[指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/idcard.html)。 */
    interface IDCardTrack {
        /** 需要基础库： `3.3.0`
         *
         * 身份证检测模式
         *
         * 可选值：
         * - 2: 静态图片检测; */
        mode: 2
    }
    /** 图片对象 */
    interface Image {
        /** 图片的真实高度 */
        height: number
        /** 图片加载发生错误后触发的回调函数 */
        onerror: (...args: any[]) => any
        /** 图片加载完成后触发的回调函数 */
        onload: (...args: any[]) => any
        /** 图片的 URL */
        src: string
        /** 图片的真实宽度 */
        width: number
    }
    /** 需要基础库： `3.4.10`
     *
     * ImageData 对象。用于动态创建一个图片对象。 */
    interface ImageData {
        /** 一维数组，包含以 RGBA 顺序的数据，数据使用 0 至 255（包含）的整数表示 */
        data: Uint8ClampedArray
        /** 使用像素描述 ImageData 的实际高度 */
        height: number
        /** 使用像素描述 ImageData 的实际宽度 */
        width: number
    }
    /** 需要基础库： `1.2.0`
     *
     * 图片的本地临时文件列表 */
    interface ImageFile {
        /** 本地临时文件路径 (本地路径) */
        path: string
        /** 本地临时文件大小，单位 B */
        size: number
    }
    interface InitFaceDetectOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: InitFaceDetectCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: InitFaceDetectFailCallback
        /** 接口调用成功的回调函数 */
        success?: InitFaceDetectSuccessCallback
    }
    /** InnerAudioContext 实例，可通过 [wx.createInnerAudioContext](https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.createInnerAudioContext.html) 接口获取实例。注意，音频播放过程中，可能被系统中断，可通过 [wx.onAudioInterruptionBegin](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.onAudioInterruptionBegin.html)、[wx.onAudioInterruptionEnd](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.onAudioInterruptionEnd.html)事件来处理这种情况。
*
* **支持格式**
*
* | 格式 | iOS  | Android |
* | ---- | ---- | ------- |
* | flac | x    | √       |
* | m4a  | √    | √       |
* | ogg  | x    | √       |
* | ape  | x    | √       |
* | amr  | x    | √       |
* | wma  | x    | √       |
* | wav  | √    | √       |
* | mp3  | √    | √       |
* | mp4  | x    | √       |
* | aac  | √    | √       |
* | aiff | √    | x       |
* | caf  | √    | x       |
*
* **示例代码**
*
* ```js
const innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.autoplay = true
innerAudioContext.src = 'https://wx_test.mp3'
innerAudioContext.onPlay(() => {
  console.log('开始播放')
})
innerAudioContext.onError((res) => {
  console.log(res.errMsg)
  console.log(res.errCode)
})
``` */
    interface InnerAudioContext {
        /** 是否自动开始播放，默认为 `false` */
        autoplay: boolean
        /** 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲（只读） */
        buffered: number
        /** 当前音频的播放位置（单位 s）。只有在当前有合法的 src 时返回，时间保留小数点后 6 位（currentTime 属性在基础库 2.26.2 之前只读，基础库 2.26.2 开始可读可写，改变 currentTime 值等同于调用 seek） */
        currentTime: number
        /** 当前音频的长度（单位 s）。只有在当前有合法的 src 时返回（只读） */
        duration: number
        /** 是否循环播放，默认为 `false` */
        loop: boolean
        /** 是否遵循系统静音开关，默认为 `true`。当此参数为 `false` 时，即使用户打开了静音开关，也能继续发出声音。从 2.3.0 版本开始此参数不生效，使用 [wx.setInnerAudioOption](https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.setInnerAudioOption.html) 接口统一设置。 */
        obeyMuteSwitch: boolean
        /** 当前是是否暂停或停止状态（只读） */
        paused: boolean
        /** 需要基础库： `2.11.0`
         *
         * 播放速度。范围 0.5-2.0，默认为 1。（Android 需要 6 及以上版本） */
        playbackRate: number
        /** 需要基础库： `2.13.0`
         *
         * `origin`: 发送完整的referrer; `no-referrer`: 不发送。格式固定为 `https://servicewechat.com/{appid}/{version}/page-frame.html`，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本； */
        referrerPolicy: string
        /** 音频资源的地址，用于直接播放。[2.2.3](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 开始支持云文件ID */
        src: string
        /** 开始播放的位置（单位：s），默认为 0 */
        startTime: number
        /** 需要基础库： `1.9.90`
         *
         * 音量。范围 0~1。默认为 1 */
        volume: number
        /** [InnerAudioContext.destroy()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.destroy.html)
         *
         * 销毁当前实例 */
        destroy(): void
        /** [InnerAudioContext.offCanplay(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offCanplay.html)
*
* 需要基础库： `1.9.0`
*
* 移除音频进入可以播放状态的事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

InnerAudioContext.onCanplay(listener)
InnerAudioContext.offCanplay(listener) // 需传入与监听时同一个的函数对象
``` */
        offCanplay(
            /** onCanplay 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffCanplayCallback
        ): void
        /** [InnerAudioContext.offEnded(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offEnded.html)
*
* 需要基础库： `1.9.0`
*
* 移除音频自然播放至结束的事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

InnerAudioContext.onEnded(listener)
InnerAudioContext.offEnded(listener) // 需传入与监听时同一个的函数对象
``` */
        offEnded(
            /** onEnded 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffEndedCallback
        ): void
        /** [InnerAudioContext.offError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offError.html)
*
* 需要基础库： `1.9.0`
*
* 移除音频播放错误事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

InnerAudioContext.onError(listener)
InnerAudioContext.offError(listener) // 需传入与监听时同一个的函数对象
``` */
        offError(
            /** onError 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: InnerAudioContextOffErrorCallback
        ): void
        /** [InnerAudioContext.offPause(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offPause.html)
*
* 需要基础库： `1.9.0`
*
* 移除音频暂停事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

InnerAudioContext.onPause(listener)
InnerAudioContext.offPause(listener) // 需传入与监听时同一个的函数对象
``` */
        offPause(
            /** onPause 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffPauseCallback
        ): void
        /** [InnerAudioContext.offPlay(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offPlay.html)
*
* 需要基础库： `1.9.0`
*
* 移除音频播放事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

InnerAudioContext.onPlay(listener)
InnerAudioContext.offPlay(listener) // 需传入与监听时同一个的函数对象
``` */
        offPlay(
            /** onPlay 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffPlayCallback
        ): void
        /** [InnerAudioContext.offSeeked(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offSeeked.html)
*
* 需要基础库： `1.9.0`
*
* 移除音频完成跳转操作的事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

InnerAudioContext.onSeeked(listener)
InnerAudioContext.offSeeked(listener) // 需传入与监听时同一个的函数对象
``` */
        offSeeked(
            /** onSeeked 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffSeekedCallback
        ): void
        /** [InnerAudioContext.offSeeking(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offSeeking.html)
*
* 需要基础库： `1.9.0`
*
* 移除音频进行跳转操作的事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

InnerAudioContext.onSeeking(listener)
InnerAudioContext.offSeeking(listener) // 需传入与监听时同一个的函数对象
``` */
        offSeeking(
            /** onSeeking 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffSeekingCallback
        ): void
        /** [InnerAudioContext.offStop(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offStop.html)
*
* 需要基础库： `1.9.0`
*
* 移除音频停止事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

InnerAudioContext.onStop(listener)
InnerAudioContext.offStop(listener) // 需传入与监听时同一个的函数对象
``` */
        offStop(
            /** onStop 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffStopCallback
        ): void
        /** [InnerAudioContext.offTimeUpdate(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offTimeUpdate.html)
*
* 需要基础库： `1.9.0`
*
* 移除音频播放进度更新事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

InnerAudioContext.onTimeUpdate(listener)
InnerAudioContext.offTimeUpdate(listener) // 需传入与监听时同一个的函数对象
``` */
        offTimeUpdate(
            /** onTimeUpdate 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: InnerAudioContextOffTimeUpdateCallback
        ): void
        /** [InnerAudioContext.offWaiting(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offWaiting.html)
*
* 需要基础库： `1.9.0`
*
* 移除音频加载中事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

InnerAudioContext.onWaiting(listener)
InnerAudioContext.offWaiting(listener) // 需传入与监听时同一个的函数对象
``` */
        offWaiting(
            /** onWaiting 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffWaitingCallback
        ): void
        /** [InnerAudioContext.onCanplay(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onCanplay.html)
         *
         * 监听音频进入可以播放状态的事件。但不保证后面可以流畅播放 */
        onCanplay(
            /** 音频进入可以播放状态的事件的监听函数 */
            listener: OnCanplayCallback
        ): void
        /** [InnerAudioContext.onEnded(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onEnded.html)
         *
         * 监听音频自然播放至结束的事件 */
        onEnded(
            /** 音频自然播放至结束的事件的监听函数 */
            listener: OnEndedCallback
        ): void
        /** [InnerAudioContext.onError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onError.html)
         *
         * 监听音频播放错误事件
         *
         * **Tips**
         *
         * 1. errCode=100001 时，如若 errMsg 中有 INNERCODE -11828 ，请先检查 response header 是否缺少 Content-Length
         * 2. errCode=100001 时，如若 errMsg 中有 systemErrCode:200333420，请检查文件编码格式和 fileExtension 是否一致 */
        onError(
            /** 音频播放错误事件的监听函数 */
            listener: InnerAudioContextOnErrorCallback
        ): void
        /** [InnerAudioContext.onPause(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onPause.html)
         *
         * 监听音频暂停事件 */
        onPause(
            /** 音频暂停事件的监听函数 */
            listener: OnPauseCallback
        ): void
        /** [InnerAudioContext.onPlay(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onPlay.html)
         *
         * 监听音频播放事件 */
        onPlay(
            /** 音频播放事件的监听函数 */
            listener: OnPlayCallback
        ): void
        /** [InnerAudioContext.onSeeked(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onSeeked.html)
         *
         * 监听音频完成跳转操作的事件 */
        onSeeked(
            /** 音频完成跳转操作的事件的监听函数 */
            listener: OnSeekedCallback
        ): void
        /** [InnerAudioContext.onSeeking(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onSeeking.html)
         *
         * 监听音频进行跳转操作的事件 */
        onSeeking(
            /** 音频进行跳转操作的事件的监听函数 */
            listener: OnSeekingCallback
        ): void
        /** [InnerAudioContext.onStop(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onStop.html)
         *
         * 监听音频停止事件 */
        onStop(
            /** 音频停止事件的监听函数 */
            listener: InnerAudioContextOnStopCallback
        ): void
        /** [InnerAudioContext.onTimeUpdate(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onTimeUpdate.html)
         *
         * 监听音频播放进度更新事件 */
        onTimeUpdate(
            /** 音频播放进度更新事件的监听函数 */
            listener: InnerAudioContextOnTimeUpdateCallback
        ): void
        /** [InnerAudioContext.onWaiting(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onWaiting.html)
         *
         * 监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发 */
        onWaiting(
            /** 音频加载中事件的监听函数 */
            listener: OnWaitingCallback
        ): void
        /** [InnerAudioContext.pause()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.pause.html)
         *
         * 暂停。暂停后的音频再播放会从暂停处开始播放 */
        pause(): void
        /** [InnerAudioContext.play()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.play.html)
         *
         * 播放 */
        play(): void
        /** [InnerAudioContext.seek(number position)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.seek.html)
         *
         * 跳转到指定位置 */
        seek(
            /** 跳转的时间，单位 s。精确到小数点后 3 位，即支持 ms 级别精确度 */
            position: number
        ): void
        /** [InnerAudioContext.stop()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.stop.html)
         *
         * 停止。停止后的音频再播放会从头开始播放。 */
        stop(): void
    }
    interface InnerAudioContextOnErrorListenerResult {
        /** 可选值：
         * - 10001: 系统错误;
         * - 10002: 网络错误;
         * - 10003: 文件错误;
         * - 10004: 格式错误;
         * - -1: 未知错误; */
        errCode: 10001 | 10002 | 10003 | 10004 | -1
        errMsg: string
    }
    interface InterstitialAdOnErrorListenerResult {
        /** 错误码
         *
         * 可选值：
         * - 1000: 后端接口调用失败;
         * - 1001: 参数错误;
         * - 1002: 广告单元无效;
         * - 1003: 内部错误;
         * - 1004: 无合适的广告;
         * - 1005: 广告组件审核中;
         * - 1006: 广告组件被驳回;
         * - 1007: 广告组件被封禁;
         * - 1008: 广告单元已关闭; */
        errCode: 1000 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008
        /** 错误信息 */
        errMsg: string
    }
    interface InviteFriendOption {
        /** 被邀请玩家的 openId */
        openId: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: InviteFriendCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: InviteFriendFailCallback
        /** 接口调用成功的回调函数 */
        success?: InviteFriendSuccessCallback
    }
    interface IsBluetoothDevicePairedOption {
        /** 蓝牙设备 id */
        deviceId: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: IsBluetoothDevicePairedCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: IsBluetoothDevicePairedFailCallback
        /** 接口调用成功的回调函数 */
        success?: IsBluetoothDevicePairedSuccessCallback
    }
    interface JoinRoomOption {
        /** 游戏房间访问凭证 */
        accessInfo: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: JoinRoomCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: JoinRoomFailCallback
        /** 游戏自定义的关于个人的扩展信息，其他人可在 `MemberInfo` 中读取到，最多 32 个字节 */
        memberExtInfo?: string
        /** 接口调用成功的回调函数 */
        success?: JoinRoomSuccessCallback
    }
    interface JoinRoomSuccessCallbackDataResult {
        /** 用户在房间内的唯一标识 */
        clientId: number
        /** 加入房间后被分配的座位号 */
        myPos: number
    }
    interface JoinRoomSuccessCallbackResult {
        data: JoinRoomSuccessCallbackDataResult
        errMsg: string
    }
    interface JoinVoIPChatOption {
        /** 小游戏内此房间/群聊的 ID。同一时刻传入相同 groupId 的用户会进入到同个实时语音房间。 */
        groupId: string
        /** 验证所需的随机字符串 */
        nonceStr: string
        /** 签名，用于验证小游戏的身份 */
        signature: string
        /** 验证所需的时间戳 */
        timeStamp: number
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: JoinVoIPChatCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: JoinVoIPChatFailCallback
        /** 需要基础库： `2.29.0`
         *
         * 开启后，joinVoIPChat 会同时走 Wi-Fi 和蜂窝网络2种网络模式，保证实时通话体验。 */
        forceCellularNetwork?: boolean
        /** 静音设置 */
        muteConfig?: MuteConfig
        /** 房间类型
         *
         * 可选值：
         * - 'voice': 音频房间，用于语音通话;
         * - 'video': 视频房间，结合 [voip-room](#) 组件可显示成员画面; */
        roomType?: 'voice' | 'video'
        /** 接口调用成功的回调函数 */
        success?: JoinVoIPChatSuccessCallback
    }
    interface JoinVoIPChatSuccessCallbackResult {
        /** 错误码 */
        errCode: number
        /** 调用结果 */
        errMsg: string
        /** 在此通话中的成员 openId 名单 */
        openIdList: string[]
    }
    /** 托管的 KV 数据
*
* **将排行榜显示在小游戏中心**
*
* 若开发者希望把游戏的排行榜显示于小游戏中心，则需要把排行榜数据存储到对应的key/value中，一个排行榜数据对应一个key，多个排行榜则多个key。同时在mp.weixin.qq.com的小游戏管理后台“设置-游戏-排行榜设置”下配置对应的key以及相关排行榜属性。且value的内容必须是JSON Object格式序列化的字符串，该JSON Object顶层必须包含 `wxgame` 字段，定义如下：
*
* |   属性名    |  类型  | 必填 |               说明               |
* |-------------|--------|------|----------------------------------|
* | score       | Int32  | 是   | 该榜单对应分数值                 |
* | update_time | Int64  | 是   | 该分数最后更新时间，Unix时间戳   |
*
* 注意： `wxgame`下开发者不可自定义其他字段， `wxgame`同级开发者可自由定义，比如定义一个`detail` 字段，用于存储取得该分数的中间状态。
*
* ### 举例
*
* 比如某小游戏有一个分数排行榜，分数排行榜需要记录分数以及获得分数的耗时（游戏内的排行榜需要展示耗时），可以在`wxgame`同级别定义一个`cost_ms`字段，存储耗时的毫秒数。
* 分配一个不和已定义的托管数据的key相冲突的key作为分数排行榜的key，如 "score"。
*
* 在玩家耗时36500ms后，获得本周最高分16分，则需要更新分数，假设当前时间戳为1513080573， 则完整 value在序列化之前的内容如下：
* ```json
{
  "wxgame": {
        "score":16,
        "update_time": 1513080573
  },
  "cost_ms":36500
}
```
*
* 最终序列化为string后，value为`{\"wxgame\":{\"score\":16,\"update_time\": 1513080573},\"cost_ms\":36500}`。 */
    interface KVData {
        /** 数据的 key */
        key: string
        /** 数据的 value */
        value: string
    }
    interface KickoutMemberOption {
        /** 欲踢除的玩家的座位号 */
        kickoutPos: number
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: KickoutMemberCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: KickoutMemberFailCallback
        /** 接口调用成功的回调函数 */
        success?: KickoutMemberSuccessCallback
    }
    /** 启动参数 */
    interface LaunchOptionsGame {
        /** 启动小游戏的 query 参数 */
        query: Record<string, string>
        /** 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) */
        referrerInfo: EnterOptionsGameReferrerInfo
        /** 启动小游戏的[场景值](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/scene.html) */
        scene: number
        /** 从微信群聊/单聊打开小程序时，chatType 表示具体微信群聊/单聊类型
         *
         * 可选值：
         * - 1: 微信联系人单聊;
         * - 2: 企业微信联系人单聊;
         * - 3: 普通微信群聊;
         * - 4: 企业微信互通群聊; */
        chatType?: 1 | 2 | 3 | 4
        /** shareTicket，详见[获取更多转发信息](#) */
        shareTicket?: string
    }
    /** 帧深度纹理buffer对象，width * height 大小的 深度值（float32） */
    interface LegSegmentBufferRes {
        /** 腿部分割纹理buffer，width * height 大小的 裁剪值（0 为不是脚，越靠近 255 越接近腿部区域）（uint8） */
        DepthAddress: ArrayBuffer
        /** 腿部分割纹理高 */
        height: number
        /** 腿部分割纹理宽 */
        width: number
    }
    interface LoadOption {
        /** 从不同渠道获得的OPENLINK字符串 */
        openlink: string
        /** 选填，部分活动、功能允许接收自定义query参数，请参阅渠道说明，默认可不填 */
        query?: IAnyObject
    }
    interface LoadSubpackageOption {
        /** 分包加载结束回调事件(加载成功、失败都会执行） */
        complete: (...args: any[]) => any
        /** 分包加载失败回调事件 */
        fail: (...args: any[]) => any
        /** 分包的名字，可以填 name 或者 root。在独立分包内，填 \_\_GAME\_\_ 表示加载主包，详见 [小游戏独立分包指南](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/independent-sub-packages.html) */
        name: string
        /** 分包加载成功回调事件 */
        success: (...args: any[]) => any
    }
    interface LoadSubpackageTaskOnProgressUpdateListenerResult {
        /** 分包下载进度百分比 */
        progress: number
        /** 预期需要下载的数据总长度，单位 Bytes */
        totalBytesExpectedToWrite: number
        /** 已经下载的数据长度，单位 Bytes */
        totalBytesWritten: number
    }
    /** 日志上报的参数对象。 */
    interface LogParam {
        /** 日志标签，用于日志分类（如 登录、战斗……）。key 只能是 string 类型，且能够通过 JSON.stringify 序列化。若不传入 key 参数，上报使用默认 key 'default'。 */
        key: string
        /** 日志等级，用于标识日志的级别和重要性。只能是'info'、'warn'、'error'、'debug'中的一种。 */
        level: string
        /** 日志内容。value 可以是 string/number/boolean/array/object 类型，且能够通过 JSON.stringify 序列化。 */
        value: IAnyObject | any[] | number | string | boolean
        /** 上报完成后的回调，成功、失败都会执行。 */
        complete?: (...args: any[]) => any
        /** 上报失败后的回调。 */
        fail?: (...args: any[]) => any
        /** 上报成功后的回调。 */
        success?: (...args: any[]) => any
    }
    interface LoginOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: LoginCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: LoginFailCallback
        /** 接口调用成功的回调函数 */
        success?: LoginSuccessCallback
        /** 需要基础库： `1.9.90`
         *
         * 超时时间，单位ms */
        timeout?: number
    }
    interface LoginSuccessCallbackResult {
        /** 用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 [code2Session](https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/code2Session.html)，使用 code 换取 openid、unionid、session_key 等信息 */
        code: string
        errMsg: string
    }
    interface MakeBluetoothPairOption {
        /** 蓝牙设备 id */
        deviceId: string
        /** pin 码，Base64 格式。 */
        pin: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: MakeBluetoothPairCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: MakeBluetoothPairFailCallback
        /** 接口调用成功的回调函数 */
        success?: MakeBluetoothPairSuccessCallback
        /** 超时时间，单位 ms */
        timeout?: number
    }
    /** 广播的制造商信息。仅安卓支持，iOS 因系统限制无法定制。 */
    interface ManufacturerData {
        /** 制造商ID，0x 开头的十六进制 */
        manufacturerId: string
        /** 制造商信息 */
        manufacturerSpecificData?: ArrayBuffer
    }
    /** 匹配到的队伍信息 */
    interface MatchGroupInfo {
        /** 队伍的序号 */
        groupIndex: number
        /** 队伍中成员信息 */
        memberInfoList: MatchMemberInfo[]
    }
    /** 队伍中成员信息 */
    interface MatchMemberInfo {
        /** 队伍中成员的头像 */
        avatarUrl: string
        /** 成员的序号 */
        memberIndex: number
        /** 队伍中成员的昵称 */
        nickName: string
        /** 队伍中成员的openid */
        openId: string
    }
    /** MediaAudioPlayer 实例，可通过 [wx.createMediaAudioPlayer](https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.createMediaAudioPlayer.html) 接口获取实例。 */
    interface MediaAudioPlayer {
        /** 音量。范围 0~1。默认为 1 */
        volume: number
        /** [Promise MediaAudioPlayer.addAudioSource([VideoDecoder](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.html) source)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/MediaAudioPlayer.addAudioSource.html)
         *
         * 添加音频源 */
        addAudioSource(
            /** [VideoDecoder](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.html)
             *
             * 视频解码器实例。作为音频源添加到音频播放器中 */
            source: VideoDecoder
        ): Promise<any>
        /** [Promise MediaAudioPlayer.destroy()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/MediaAudioPlayer.destroy.html)
         *
         * 销毁播放器 */
        destroy(): Promise<any>
        /** [Promise MediaAudioPlayer.removeAudioSource([VideoDecoder](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.html) source)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/MediaAudioPlayer.removeAudioSource.html)
         *
         * 移除音频源 */
        removeAudioSource(
            /** [VideoDecoder](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.html)
             *
             * 视频解码器实例 */
            source: VideoDecoder
        ): Promise<any>
        /** [Promise MediaAudioPlayer.start()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/MediaAudioPlayer.start.html)
         *
         * 启动播放器 */
        start(): Promise<any>
        /** [Promise MediaAudioPlayer.stop()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/MediaAudioPlayer.stop.html)
         *
         * 停止播放器 */
        stop(): Promise<any>
    }
    /** 本地临时文件列表 */
    interface MediaFile {
        /** 视频的时间长度 */
        duration: number
        /** 文件类型
         *
         * 可选值：
         * - 'image': 图片;
         * - 'video': 视频; */
        fileType: 'image' | 'video'
        /** 视频的高度 */
        height: number
        /** 本地临时文件大小，单位 B */
        size: number
        /** 本地临时文件路径 (本地路径) */
        tempFilePath: string
        /** 视频缩略图临时文件路径 */
        thumbTempFilePath: string
        /** 视频的宽度 */
        width: number
    }
    /** 需要预览的资源列表 */
    interface MediaSource {
        /** 图片或视频的地址 */
        url: string
        /** 视频的封面图片 */
        poster?: string
        /** 资源的类型，默认为图片
         *
         * 可选值：
         * - 'image': 图片;
         * - 'video': 视频; */
        type?: 'image' | 'video'
    }
    interface MemberLeaveRoomOption {
        /** 游戏房间访问凭证 */
        accessInfo: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: MemberLeaveRoomCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: MemberLeaveRoomFailCallback
        /** 接口调用成功的回调函数 */
        success?: MemberLeaveRoomSuccessCallback
    }
    /** 小程序账号信息 */
    interface MiniProgram {
        /** 小程序 appId */
        appId: string
        /** 需要基础库： `2.10.0`
         *
         * 小程序版本
         *
         * 可选值：
         * - 'develop': 开发版;
         * - 'trial': 体验版;
         * - 'release': 正式版; */
        envVersion: 'develop' | 'trial' | 'release'
        /** 需要基础库： `2.10.2`
         *
         * 线上小程序版本号 */
        version: string
    }
    interface MkdirOption {
        /** 创建的目录路径 (本地路径) */
        dirPath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: MkdirCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: MkdirFailCallback
        /** 需要基础库： `2.3.0`
         *
         * 是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。 */
        recursive?: boolean
        /** 接口调用成功的回调函数 */
        success?: MkdirSuccessCallback
    }
    interface ModifyFriendInteractiveStorageFailCallbackResult {
        /** 错误码
         *
         * 可选值：
         * - -17006: 非好友关系;
         * - -17007: 非法的 toUser openId;
         * - -17008: 非法的 key;
         * - -17009: 非法的 operation;
         * - -17010: 非法的操作数;
         * - -17011: JSServer 校验写操作失败; */
        errCode: -17006 | -17007 | -17008 | -17009 | -17010 | -17011
        /** 错误信息 */
        errMsg: string
    }
    interface ModifyFriendInteractiveStorageOption {
        /** 需要修改的数据的 key，目前可以为 '1' - '50' */
        key: string
        /** 需要修改的数值，目前只能为 1 */
        opNum: number
        /** 修改类型
         *
         * 可选值：
         * - 'add': 加; */
        operation: 'add'
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ModifyFriendInteractiveStorageCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ModifyFriendInteractiveStorageFailCallback
        /** 需要基础库： `2.9.0`
         *
         * 分享图片地址，详见 wx.shareMessageToFriend 同名参数（需要配置模板规则） */
        imageUrl?: string
        /** 需要基础库： `2.9.0`
         *
         * 分享图片编号，详见 wx.shareMessageToFriend 同名参数（需要配置模板规则） */
        imageUrlId?: string
        /** 需要基础库： `2.9.0`
         *
         * 是否静默修改（不弹框）。当进入场景是好友 [定向分享](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.shareMessageToFriend.html) 的卡片时有效，代表分享反馈操作，此时 `toUser` 默认为原分享者的 openId */
        quiet?: boolean
        /** 接口调用成功的回调函数 */
        success?: ModifyFriendInteractiveStorageSuccessCallback
        /** 需要基础库： `2.9.0`
         *
         * 分享标题，如果设置了这个值，则在交互成功后自动询问用户是否分享给好友（需要配置模板规则） */
        title?: string
        /** 目标好友的 openId */
        toUser?: string
    }
    /** 静音设置 */
    interface MuteConfig {
        /** 是否静音耳机 */
        muteEarphone?: boolean
        /** 是否静音麦克风 */
        muteMicrophone?: boolean
    }
    interface NavigateBackMiniProgramOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: NavigateBackMiniProgramCompleteCallback
        /** 需要返回给上一个小程序的数据，上一个小程序可在 `App.onShow` 中获取到这份数据。 [详情](#)。 */
        extraData?: IAnyObject
        /** 接口调用失败的回调函数 */
        fail?: NavigateBackMiniProgramFailCallback
        /** 接口调用成功的回调函数 */
        success?: NavigateBackMiniProgramSuccessCallback
    }
    interface NavigateToMiniProgramOption {
        /** 要打开的小程序 appId */
        appId?: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: NavigateToMiniProgramCompleteCallback
        /** 要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。
         *
         * 可选值：
         * - 'develop': 开发版;
         * - 'trial': 体验版;
         * - 'release': 正式版; */
        envVersion?: 'develop' | 'trial' | 'release'
        /** 需要传递给目标小程序的数据，目标小程序可在 `App.onLaunch`，`App.onShow` 中获取到这份数据。如果跳转的是小游戏，可以在 [wx.onShow](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.onShow.html)、[wx.getLaunchOptionsSync](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html) 中可以获取到这份数据数据。 */
        extraData?: IAnyObject
        /** 接口调用失败的回调函数 */
        fail?: NavigateToMiniProgramFailCallback
        /** 需要基础库： `2.24.0`
         *
         * 不reLaunch目标小程序，直接打开目标跳转的小程序退后台时的页面，需满足以下条件：1. 目标跳转的小程序生命周期未被销毁；2. 且目标当次启动的path、query与上次启动相同，apiCategory以wx.getApiCategory接口的返回结果为准。 */
        noRelaunchIfPathUnchanged?: boolean
        /** 打开的页面路径，如果为空则打开首页。path 中 ? 后面的部分会成为 query，在小程序的 `App.onLaunch`、`App.onShow` 和 `Page.onLoad` 的回调函数或小游戏的 [wx.onShow](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.onShow.html) 回调函数、[wx.getLaunchOptionsSync](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html) 中可以获取到 query 数据。对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"。 */
        path?: string
        /** 需要基础库： `2.18.1`
         *
         * 小程序链接，当传递该参数后，可以不传 appId 和 path。链接可以通过【小程序菜单】->【复制链接】获取。 */
        shortLink?: string
        /** 接口调用成功的回调函数 */
        success?: NavigateToMiniProgramSuccessCallback
    }
    interface NotifyBLECharacteristicValueChangeOption {
        /** 蓝牙特征的 UUID */
        characteristicId: string
        /** 蓝牙设备 id */
        deviceId: string
        /** 蓝牙特征对应服务的 UUID */
        serviceId: string
        /** 是否启用 notify */
        state: boolean
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: NotifyBLECharacteristicValueChangeCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: NotifyBLECharacteristicValueChangeFailCallback
        /** 接口调用成功的回调函数 */
        success?: NotifyBLECharacteristicValueChangeSuccessCallback
        /** 需要基础库： `2.4.0`
         *
         * 设置特征订阅类型，有效值有 `notification` 和 `indication` */
        type?: string
    }
    /** 需要基础库： `2.27.0`
     *
     * OCR检测配置。用法详情[指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/ocr.html)。 */
    interface OCRTrack {
        /** 需要基础库： `2.27.0`
         *
         * OCR检测模式
         *
         * 可选值：
         * - 1: 通过摄像头实时检测;
         * - 2: 静态图片检测; */
        mode: 1 | 2
    }
    interface OnAccelerometerChangeListenerResult {
        /** X 轴 */
        x: number
        /** Y 轴 */
        y: number
        /** Z 轴 */
        z: number
    }
    interface OnAddToFavoritesListenerResult {
        /** 禁止收藏后长按转发，默认 false */
        disableForward: boolean
        /** 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4 */
        imageUrl: string
        /** 查询字符串，必须是 key1=val1&key2=val2 的格式。从收藏进入后，可通过 wx.getLaunchOptionsSync() 或 wx.onShow() 获取启动参数中的 query。 */
        query: string
        /** 收藏标题，不传则默认使用当前小游戏的昵称。 */
        title: string
    }
    interface OnBLECharacteristicValueChangeListenerResult {
        /** 蓝牙特征的 UUID */
        characteristicId: string
        /** 蓝牙设备 id */
        deviceId: string
        /** 蓝牙特征对应服务的 UUID */
        serviceId: string
        /** 特征最新的值 */
        value: ArrayBuffer
    }
    interface OnBLEConnectionStateChangeListenerResult {
        /** 是否处于已连接状态 */
        connected: boolean
        /** 蓝牙设备 id */
        deviceId: string
    }
    interface OnBLEMTUChangeListenerResult {
        /** 蓝牙设备 id */
        deviceId: string
        /** 最大传输单元 */
        mtu: number
    }
    interface OnBLEPeripheralConnectionStateChangedListenerResult {
        /** 连接目前状态 */
        connected: boolean
        /** 连接状态变化的设备 id */
        deviceId: string
        /** server 的 UUID */
        serverId: string
    }
    interface OnBackgroundFetchDataListenerResult {
        /** 缓存数据类别，取值为 periodic 或 pre */
        fetchType: string
        /** 缓存数据 */
        fetchedData: string
        /** 小游戏页面路径（一般不需要传，除非使用到小游戏独立分包） */
        path: string
        /** 传给页面的 query 参数 */
        query: string
        /** 进入小游戏的场景值 */
        scene: number
        /** 客户端拿到缓存数据的时间戳 */
        timeStamp: number
    }
    interface OnBeKickedOutListenerResult {
        res: IAnyObject
    }
    interface OnBeaconServiceChangeListenerResult {
        /** 服务目前是否可用 */
        available: boolean
        /** 目前是否处于搜索状态 */
        discovering: boolean
    }
    interface OnBeaconUpdateListenerResult {
        /** 当前搜寻到的所有 Beacon 设备列表 */
        beacons: BeaconInfo[]
    }
    interface OnBluetoothAdapterStateChangeListenerResult {
        /** 蓝牙适配器是否可用 */
        available: boolean
        /** 蓝牙适配器是否处于搜索状态 */
        discovering: boolean
    }
    interface OnBluetoothDeviceFoundListenerResult {
        /** 新搜索到的设备列表 */
        devices: BlueToothDevice[]
    }
    interface OnBroadcastListenerResult {
        /** 广播消息 */
        msg: string
    }
    interface OnCameraFrameCallbackResult {
        /** 图像像素点数据，一维数组，每四项表示一个像素点的 rgba */
        data: ArrayBuffer
        /** 图像数据矩形的高度 */
        height: number
        /** 图像数据矩形的宽度 */
        width: number
    }
    interface OnCharacteristicReadRequestListenerResult {
        /** 唯一标识码，调用 [writeCharacteristicValue](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.writeCharacteristicValue.html) 时使用 */
        callbackId: number
        /** 蓝牙特征的 UUID */
        characteristicId: string
        /** 蓝牙特征对应服务的 UUID */
        serviceId: string
    }
    interface OnCharacteristicSubscribedListenerResult {
        /** 蓝牙特征的 UUID */
        characteristicId: string
        /** 蓝牙特征对应服务的 UUID */
        serviceId: string
    }
    interface OnCharacteristicWriteRequestListenerResult {
        /** 唯一标识码，调用 [writeCharacteristicValue](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.writeCharacteristicValue.html) 时使用 */
        callbackId: number
        /** 蓝牙特征的 UUID */
        characteristicId: string
        /** 蓝牙特征对应服务的 UUID */
        serviceId: string
        /** 请求写入特征的二进制数据值 */
        value: ArrayBuffer
    }
    interface OnCheckForUpdateListenerResult {
        /** 是否有新版本 */
        hasUpdate: boolean
    }
    interface OnChunkReceivedListenerResult {
        /** 返回的chunk buffer */
        data: ArrayBuffer
    }
    interface OnCompassChangeListenerResult {
        /** 需要基础库： `2.4.0`
         *
         * 精度 */
        accuracy: number | string
        /** 面对的方向度数 */
        direction: number
    }
    interface OnConnectListenerResult {
        /** 需要基础库： `3.4.0`
         *
         * 网络请求过程中的一些异常信息（例如：TCPSocket.connect 传了 enableHttpDNS: true，但最终未使用 HttpDNS 时，exception 就会说明未使用 HttpDNS 的原因） */
        exception: Exception
        /** 需要基础库： `3.4.1`
         *
         * 接收端地址信息（目前仅iOS和Android端支持） */
        localInfo: OnConnectListenerResultLocalInfo
        /** 需要基础库： `3.4.1`
         *
         * 发送端地址信息（目前仅iOS和Android端支持） */
        remoteInfo: OnConnectListenerResultRemoteInfo
        /** 需要基础库： `3.4.0`
         *
         * 本次连接是否使用了 HttpDNS */
        useHttpDNS: boolean
    }
    /** 需要基础库： `3.4.1`
     *
     * 接收端地址信息（目前仅iOS和Android端支持） */
    interface OnConnectListenerResultLocalInfo {
        /** 需要基础库： `3.4.1`
         *
         * 接收消息的 socket 的地址 */
        address: string
        /** 需要基础库： `3.4.1`
         *
         * 使用的协议族，为 IPv4 或者 IPv6 */
        family: string
        /** 需要基础库： `3.4.1`
         *
         * 端口号 */
        port: number
    }
    /** 需要基础库： `3.4.1`
     *
     * 发送端地址信息（目前仅iOS和Android端支持） */
    interface OnConnectListenerResultRemoteInfo {
        /** 需要基础库： `3.4.1`
         *
         * 发送消息的 socket 的地址 */
        address: string
        /** 需要基础库： `3.4.1`
         *
         * 使用的协议族，为 IPv4 或者 IPv6 */
        family: string
        /** 需要基础库： `3.4.1`
         *
         * 端口号 */
        port: number
    }
    interface OnCopyUrlListenerResult {
        /** 用短链打开小程序时当前页面携带的查询字符串。小程序中使用时，应在进入页面时调用 `wx.onCopyUrl` 自定义 `query`，退出页面时调用 `wx.offCopyUrl`，防止影响其它页面。 */
        query: string
    }
    interface OnDeviceMotionChangeListenerResult {
        /** 当 手机坐标 X/Y 和 地球 X/Y 重合时，绕着 Z 轴转动的夹角为 alpha，范围值为 [0, 2*PI)。逆时针转动为正。 */
        alpha: number
        /** 当手机坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 beta。范围值为 [-1*PI, PI) 。顶部朝着地球表面转动为正。也有可能朝着用户为正。 */
        beta: number
        /** 当手机 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 gamma。范围值为 [-1*PI/2, PI/2)。右边朝着地球表面转动为正。 */
        gamma: number
    }
    interface OnDeviceOrientationChangeListenerResult {
        /** 切换后的屏幕方向。
         *
         * 可选值：
         * - 'landscape': 横屏正方向，以 HOME 键在屏幕右侧为正方向;
         * - 'landscapeReverse': 横屏反方向，以 HOME 键在屏幕左侧为反方向; */
        value: 'landscape' | 'landscapeReverse'
    }
    interface OnDisconnectListenerResult {
        /** 可选值：
         * - 'room': 房间服务断开连接，只有在进入房间后有机会收到。房间服务断开连接后，将无法进行房间相关的操作，以及无法收到房间信息变化事件。;
         * - 'game': 游戏服务断开连接，只有在游戏开始后有机会收到。游戏服务断开连接后，将无法收发帧。; */
        type: 'room' | 'game'
    }
    interface OnFrameRecordedListenerResult {
        /** 录音分片数据 */
        frameBuffer: ArrayBuffer
        /** 当前帧是否正常录音结束前的最后一帧 */
        isLastFrame: boolean
    }
    interface OnGameEndListenerResult {
        /** 游戏唯一标识，用于后台接口拉取对局记录 */
        gameAccessInfo: string
    }
    interface OnGamepadConnectedListenerResult {
        /** 本次连接到的 Gamepad 实例。 */
        gamepad: string
    }
    interface OnGamepadDisconnectedListenerResult {
        /** 本次断开的 Gamepad 实例。 */
        gamepad: string
    }
    interface OnGyroscopeChangeListenerResult {
        /** x 轴的角速度 */
        x: number
        /** y 轴的角速度 */
        y: number
        /** z 轴的角速度 */
        z: number
    }
    interface OnHandoffListenerResult {
        /** 需要传递给接力客户端的 query */
        query: string
    }
    interface OnInviteListenerResult {
        /** 邀请者附带的额外信息 */
        data: string
        /** 邀请者的 openId */
        openId: string
        res: IAnyObject
    }
    interface OnKeyDownListenerResult {
        /** 同 Web 规范 KeyEvent code 属性 */
        code: string
        /** 同 Web 规范 KeyEvent key 属性 */
        key: string
        /** 事件触发时的时间戳 */
        timeStamp: number
    }
    interface OnKeyboardHeightChangeListenerResult {
        /** 键盘高度 */
        height: number
    }
    interface OnKeyboardInputListenerResult {
        /** 键盘输入的当前值 */
        value: string
    }
    interface OnLockStepErrorListenerResult {
        /** 错误码 */
        errCode: number
        /** 错误原因 */
        errMsg: string
    }
    interface OnMatchListenerResult {
        /** 匹配到的队伍信息 */
        groupInfoList: MatchGroupInfo[]
        /** 与 startMatch 一致的 matchId */
        matchId: string
        /** 自己的 openId */
        openId: string
        /** 唯一的本次对局id */
        raceId: string
        /** 房间服务的accessinfo，如果matchid中指定需要匹配完成时创建房间服务，则会携带下来，后续调用房间服务相关接口加入房间即可 */
        roomServiceAccessInfo: string
    }
    interface OnMemoryWarningListenerResult {
        /** 内存告警等级，只有 Android 才有，对应系统宏定义
         *
         * 可选值：
         * - 5: TRIM_MEMORY_RUNNING_MODERATE;
         * - 10: TRIM_MEMORY_RUNNING_LOW;
         * - 15: TRIM_MEMORY_RUNNING_CRITICAL; */
        level: 5 | 10 | 15
    }
    interface OnMessageListenerResultLocalInfo {
        /** 接收消息的 socket 的地址 */
        address: string
        /** 使用的协议族，为 IPv4 或者 IPv6 */
        family: string
        /** 端口号 */
        port: number
    }
    interface OnMouseDownListenerResult {
        /** 按键类型，0左键，1中键，2右键 */
        button: number
        /** 事件触发时的时间戳 */
        timeStamp: number
        /** 事件触发时鼠标所在的位置横坐标 */
        x: number
        /** 事件触发时鼠标所在的位置纵坐标 */
        y: number
    }
    interface OnMouseMoveListenerResult {
        /** 鼠标横坐标偏移量 */
        movementX: number
        /** 鼠标纵坐标偏移量 */
        movementY: number
        /** 事件触发时的时间戳 */
        timeStamp: number
        /** 事件触发时鼠标所在的位置横坐标 */
        x: number
        /** 事件触发时鼠标所在的位置纵坐标 */
        y: number
    }
    interface OnNetworkStatusChangeListenerResult {
        /** 当前是否有网络连接 */
        isConnected: boolean
        /** 网络类型
         *
         * 可选值：
         * - 'wifi': wifi 网络;
         * - '2g': 2g 网络;
         * - '3g': 3g 网络;
         * - '4g': 4g 网络;
         * - '5g': 5g 网络;
         * - 'unknown': Android 下不常见的网络类型;
         * - 'none': 无网络; */
        networkType: 'wifi' | '2g' | '3g' | '4g' | '5g' | 'unknown' | 'none'
    }
    interface OnNetworkWeakChangeListenerResult {
        /** 当前网络类型 */
        networkType: string
        /** 当前是否处于弱网状态 */
        weakNet: boolean
    }
    interface OnOpenListenerResult {
        /** 需要基础库： `2.0.0`
         *
         * 连接成功的 HTTP 响应 Header */
        header: IAnyObject
        /** 需要基础库： `2.10.4`
         *
         * 网络请求过程中一些调试信息 */
        profile: SocketProfile
    }
    interface OnProgressListenerResult {
        /** 当前的缓冲进度，缓冲进度区间为 (0~100]，100表示缓冲完成 */
        buffered: number
        /** 视频的总时长，单位为秒 */
        duration: number
    }
    interface OnResizeListenerResult {
        /** 缩放后的高度 */
        height: number
        /** 缩放后的宽度 */
        width: number
    }
    interface OnRoomInfoChangeListenerResult {
        /** 小游戏 appId */
        appId: string
        /** 创建时间 */
        createTimestamp: number
        /** 游戏对局时长，单位 s */
        gameLastTime: number
        /** 游戏下发帧的时间间隔，单位 ms */
        gameTick: number
        /** 房间最多可容纳人数 */
        maxMemberNum: number
        /** 成员列表 */
        memberList: RoomMemberInfo[]
        /** 游戏自定义的关于房间的扩展信息 */
        roomExtInfo: string
        /** 房间 ID */
        roomIdStr: number
        /** 房间状态
         *
         * 可选值：
         * - 1: 组队中;
         * - 2: 该房间的对局游戏已开始;
         * - 3: 该房间的对局游戏已结束;
         * - 4: 房间已销毁;
         * - 5: 房间连接已建立，等待对战连接建立; */
        roomState: 1 | 2 | 3 | 4 | 5
        /** 游戏随机种子 */
        seed: string
        /** 需要满足百分比的玩家都发送了开始指令才能启动游戏。有效范围 0~100，0 表示只要有一个人调用开始就启动，100 表示要求所有人都开始才能启动。 */
        startPercent: number
        /** UDP可靠性策略， 0：全冗余 N：固定冗余N帧 */
        udpReliabilityStrategy: number
        /** 最近更新时间 */
        updateTimestamp: number
    }
    interface OnScreenRecordingStateChangedListenerResult {
        /** 录屏状态
         *
         * 可选值：
         * - 'start': 开始录屏;
         * - 'stop': 结束录屏; */
        state: 'start' | 'stop'
    }
    interface OnShareAppMessageListenerResult {
        /** 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4 */
        imageUrl: string
        /** 查询字符串，必须是 key1=val1&key2=val2 的格式。从这条转发消息进入后，可通过 wx.getLaunchOptionsSync() 或 wx.onShow() 获取启动参数中的 query。 */
        query: string
        /** 转发标题，不传则默认使用当前小游戏的昵称。 */
        title: string
        /** 需要基础库： `2.4.3`
         *
         * 审核通过的图片编号，详见 [使用审核通过的转发图片](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/share/share.html#使用审核通过的转发图片) */
        imageUrlId?: string
        /** 需要基础库： `2.12.2`
         *
         * 独立分包路径。详见 [小游戏独立分包指南](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/independent-sub-packages.html) */
        path?: string
        /** 需要基础库： `2.12.0`
         *
         * 如果该参数存在，则其它的参数将会以 resolve 结果为准，如果三秒内不 resolve，分享会使用上面传入的默认参数 */
        promise?: Promise<any>
        /** 需要基础库： `2.12.2`
         *
         * 是否转发到当前群。该参数只对从群工具栏打开的场景下生效，默认转发到当前群，填入false时可转发到其他会话。 */
        toCurrentGroup?: boolean
    }
    interface OnShareMessageToFriendListenerResult {
        /** 错误信息 */
        errMsg: string
        /** 是否成功 */
        success: boolean
    }
    interface OnShareTimelineListenerResult {
        /** 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。（该图片用于分享到朋友圈的卡片以及从朋友圈转发到会话消息的卡片展示） */
        imageUrl: string
        /** 需要基础库： `2.14.3`
         *
         * 朋友圈预览图链接，不传则默认使用当前游戏画面截图 */
        imagePreviewUrl?: string
        /** 需要基础库： `2.14.3`
         *
         * 审核通过的朋友圈预览图图片编号，详见 [使用审核通过的转发图片](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/share/share.html#使用审核通过的转发图片) */
        imagePreviewUrlId?: string
        /** 审核通过的图片编号，详见 [使用审核通过的转发图片](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/share/share.html#使用审核通过的转发图片) */
        imageUrlId?: string
        /** 需要基础库： `2.12.2`
         *
         * 独立分包路径。详见 [小游戏独立分包指南](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/independent-sub-packages.html) */
        path?: string
        /** 查询字符串，必须是 key1=val1&key2=val2 的格式。从这条转发消息进入后，可通过 wx.getLaunchOptionsSync() 或 wx.onShow() 获取启动参数中的 query。不传则默认使用当前页面query。 */
        query?: string
        /** 转发标题，不传则默认使用当前小游戏的昵称。 */
        title?: string
    }
    interface OnShowListenerResult {
        /** 查询参数 */
        query: Record<string, string>
        /** 当场景为由从另一个小程序或公众号或App打开时，返回此字段 */
        referrerInfo: ResultReferrerInfo
        /** 场景值 */
        scene: number
        /** 从微信群聊/单聊打开小程序时，chatType 表示具体微信群聊/单聊类型
         *
         * 可选值：
         * - 1: 微信联系人单聊;
         * - 2: 企业微信联系人单聊;
         * - 3: 普通微信群聊;
         * - 4: 企业微信互通群聊; */
        chatType?: 1 | 2 | 3 | 4
        /** shareTicket */
        shareTicket?: string
    }
    interface OnSocketOpenListenerResult {
        /** 需要基础库： `2.0.0`
         *
         * 连接成功的 HTTP 响应 Header */
        header: IAnyObject
    }
    interface OnStateUpdateListenerResult {
        /** 好友 openId */
        openId: string
        /** 系统状态，0 掉线 1 在线 */
        sysState: number
        /** 该玩家的自定义状态信息 */
        userState: string
    }
    interface OnStopListenerResult {
        /** 录音总时长，单位：ms */
        duration: number
        /** 录音文件大小，单位：Byte */
        fileSize: number
        /** 录音文件的临时路径 (本地路径) */
        tempFilePath: string
    }
    interface OnSyncFrameListenerResult {
        /** 帧数据列表，如果为空则说明该帧是空帧，每一项的类型与配置项 `lockStepOption.dataType` 一致 */
        actionList: string[] | ArrayBuffer[]
        /** 帧号，从 1 开始递增 */
        frameId: number
    }
    interface OnTapListenerResult {
        /** 需要基础库： `2.7.0`
         *
         * 敏感数据对应的云 ID，开通[云开发](../../wxcloud/basis/getting-started.md)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html#method-cloud) */
        cloudID: string
        /** 包括敏感数据在内的完整用户信息的加密数据，详细见[加密数据解密算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html) */
        encryptedData: string
        /** 调用结果（错误原因） */
        errMsg: string
        /** 加密算法的初始向量，详细见[加密数据解密算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html) */
        iv: string
        /** 不包括敏感信息的原始数据字符串，用于计算签名 */
        rawData: string
        /** 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，参考文档[signature](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html) */
        signature: string
        /** [UserInfo](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/UserInfo.html)
         *
         * 用户信息对象，不包含 openid 等敏感信息 */
        userInfo: UserInfo
    }
    interface OnTimeUpdateListenerResult {
        /** 视频的总时长，单位为秒 */
        duration: number
        /** 当前的播放位置，单位为秒 */
        position: number
    }
    interface OnTouchStartListenerResult {
        /** 触发此次事件的触摸点列表 */
        changedTouches: Touch[]
        /** 事件触发时的时间戳 */
        timeStamp: number
        /** 当前所有触摸点的列表 */
        touches: Touch[]
    }
    interface OnUnhandledRejectionListenerResult {
        /** 被拒绝的 promise 对象 */
        promise: string
        /** 拒绝原因，一般是一个 Error 对象 */
        reason: string
    }
    interface OnUserCaptureScreenListenerResult {
        /** 需要基础库： `3.3.0`
         *
         * 如果该参数存在，则其它的参数将会以 resolve 结果为准，如果一秒内不 resolve，分享会使用上面传入的默认参数 */
        promise?: Promise<any>
        /** 需要基础库： `3.3.0`
         *
         * 支持开发者自定义一键打开小程序时的 query */
        query?: string
    }
    interface OnVoIPChatInterruptedListenerResult {
        /** 错误码 */
        errCode: number
        /** 调用结果（错误原因） */
        errMsg: string
    }
    interface OnVoIPChatMembersChangedListenerResult {
        /** 错误码 */
        errCode: number
        /** 调用结果 */
        errMsg: string
        /** 还在实时语音通话中的成员 openId 名单 */
        openIdList: string[]
    }
    interface OnVoIPChatSpeakersChangedListenerResult {
        /** 错误码 */
        errCode: number
        /** 调用结果（错误原因） */
        errMsg: string
        /** 还在实时语音通话中的成员 openId 名单 */
        openIdList: string[]
    }
    interface OnVoIPChatStateChangedListenerResult {
        /** 事件码 */
        code: number
        /** 附加信息 */
        data: IAnyObject
        /** 错误码 */
        errCode: number
        /** 调用结果 */
        errMsg: string
    }
    interface OnWheelListenerResult {
        /** 滚轮 x 轴方向滚动量 */
        deltaX: number
        /** 滚轮 y 轴方向滚动量 */
        deltaY: number
        /** 滚轮 z 轴方向滚动量 */
        deltaZ: number
        /** 事件触发时的时间戳 */
        timeStamp: number
        /** 事件触发时鼠标所在的位置横坐标 */
        x: number
        /** 事件触发时鼠标所在的位置纵坐标 */
        y: number
    }
    interface OnWindowResizeListenerResult {
        /** 变化后的窗口高度，单位 px */
        windowHeight: number
        /** 变化后的窗口宽度，单位 px */
        windowWidth: number
    }
    interface OpenAppAuthorizeSettingOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenAppAuthorizeSettingCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: OpenAppAuthorizeSettingFailCallback
        /** 接口调用成功的回调函数 */
        success?: OpenAppAuthorizeSettingSuccessCallback
    }
    interface OpenBluetoothAdapterOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenBluetoothAdapterCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: OpenBluetoothAdapterFailCallback
        /** 需要基础库： `2.10.0`
         *
         * 蓝牙模式，可作为主/从设备，仅 iOS 需要。
         *
         * 可选值：
         * - 'central': 主机模式;
         * - 'peripheral': 从机（外围设备）模式; */
        mode?: 'central' | 'peripheral'
        /** 接口调用成功的回调函数 */
        success?: OpenBluetoothAdapterSuccessCallback
    }
    interface OpenCardOption {
        /** 需要打开的卡券列表 */
        cardList: OpenCardRequestInfo[]
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenCardCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: OpenCardFailCallback
        /** 接口调用成功的回调函数 */
        success?: OpenCardSuccessCallback
    }
    /** 需要打开的卡券列表 */
    interface OpenCardRequestInfo {
        /** 卡券 ID */
        cardId: string
        /** 由 [wx.addCard](https://developers.weixin.qq.com/minigame/dev/api/open-api/card/wx.addCard.html) 的返回对象中的加密 code 通过解密后得到，解密请参照：[code 解码接口](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1499332673_Unm7V) */
        code: string
    }
    interface OpenChannelsActivityOption {
        /** 视频 feedId */
        feedId: string
        /** 视频号 id，以“sph”开头的id，可在视频号助手获取 */
        finderUserName: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenChannelsActivityCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: OpenChannelsActivityFailCallback
        /** 接口调用成功的回调函数 */
        success?: OpenChannelsActivitySuccessCallback
    }
    interface OpenChannelsEventOption {
        /** 活动 id */
        eventId: string
        /** 视频号 id，以“sph”开头的id，可在视频号助手获取 */
        finderUserName: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenChannelsEventCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: OpenChannelsEventFailCallback
        /** 接口调用成功的回调函数 */
        success?: OpenChannelsEventSuccessCallback
    }
    interface OpenChannelsLiveOption {
        /** 视频号 id，以“sph”开头的id，可在视频号助手获取 */
        finderUserName: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenChannelsLiveCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: OpenChannelsLiveFailCallback
        /** 直播 feedId，通过 getChannelsLiveInfo 接口获取（基础库 v2.19.2 之前的版本需要填写） */
        feedId?: string
        /** 直播 nonceId，通过 getChannelsLiveInfo 接口获取（基础库 v2.19.2 之前的版本需要填写） */
        nonceId?: string
        /** 接口调用成功的回调函数 */
        success?: OpenChannelsLiveSuccessCallback
    }
    interface OpenChannelsUserProfileOption {
        /** 视频号 id */
        finderUserName: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenChannelsUserProfileCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: OpenChannelsUserProfileFailCallback
        /** 接口调用成功的回调函数 */
        success?: OpenChannelsUserProfileSuccessCallback
    }
    interface OpenCustomerServiceChatOption {
        /** 企业ID */
        corpId: string
        /** 客服信息 */
        extInfo: ExtInfoOption
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenCustomerServiceChatCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: OpenCustomerServiceChatFailCallback
        /** 气泡消息图片 */
        sendMessageImg?: string
        /** 气泡消息小程序路径 */
        sendMessagePath?: string
        /** 气泡消息标题 */
        sendMessageTitle?: string
        /** 是否发送小程序气泡消息 */
        showMessageCard?: boolean
        /** 接口调用成功的回调函数 */
        success?: OpenCustomerServiceChatSuccessCallback
    }
    interface OpenCustomerServiceConversationOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenCustomerServiceConversationCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: OpenCustomerServiceConversationFailCallback
        /** 会话内消息卡片图片路径 */
        sendMessageImg?: string
        /** 会话内消息卡片路径 */
        sendMessagePath?: string
        /** 会话内消息卡片标题 */
        sendMessageTitle?: string
        /** 会话来源。该字段会在进入客服会话时透传给开发者配置好的后台服务。该字段（utf-8编码）最长不得超过 1000 个字节（不是字符串长度），超过将被截断。 */
        sessionFrom?: string
        /** 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息 */
        showMessageCard?: boolean
        /** 接口调用成功的回调函数 */
        success?: OpenCustomerServiceConversationSuccessCallback
    }
    interface OpenCustomerServiceConversationSuccessCallbackResult {
        /** 在客服会话内点击小程序消息卡片进入小程序时，所带的小程序打开路径 */
        path: string
        /** 在客服会话内点击小程序消息卡片进入小程序时，所带的小程序打开参数 */
        query: IAnyObject
        errMsg: string
    }
    /** 开放数据域对象 */
    interface OpenDataContext {
        /** [Canvas](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.html)
         *
         * 开放数据域和主域共享的 sharedCanvas */
        canvas: Canvas
        /** [OpenDataContext.postMessage(Object message)](https://developers.weixin.qq.com/minigame/dev/api/open-api/context/OpenDataContext.postMessage.html)
         *
         * 向开放数据域发送消息 */
        postMessage(
            /** 要发送的消息，message 中及嵌套对象中 key 的 value 只能是 primitive value。即 number、string、boolean、null、undefined。 */
            message: IAnyObject
        ): void
    }
    interface OpenOption {
        /** 文件路径 (本地路径) */
        filePath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: OpenFailCallback
        /** 文件系统标志，默认值: 'r'
         *
         * 可选值：
         * - 'a': 打开文件用于追加。 如果文件不存在，则创建该文件;
         * - 'ax': 类似于 'a'，但如果路径存在，则失败;
         * - 'a+': 打开文件用于读取和追加。 如果文件不存在，则创建该文件;
         * - 'ax+': 类似于 'a+'，但如果路径存在，则失败;
         * - 'as': 打开文件用于追加（在同步模式中）。 如果文件不存在，则创建该文件;
         * - 'as+': 打开文件用于读取和追加（在同步模式中）。 如果文件不存在，则创建该文件;
         * - 'r': 打开文件用于读取。 如果文件不存在，则会发生异常;
         * - 'r+': 打开文件用于读取和写入。 如果文件不存在，则会发生异常;
         * - 'w': 打开文件用于写入。 如果文件不存在则创建文件，如果文件存在则截断文件;
         * - 'wx': 类似于 'w'，但如果路径存在，则失败;
         * - 'w+': 打开文件用于读取和写入。 如果文件不存在则创建文件，如果文件存在则截断文件;
         * - 'wx+': 类似于 'w+'，但如果路径存在，则失败; */
        flag?:
            | 'a'
            | 'ax'
            | 'a+'
            | 'ax+'
            | 'as'
            | 'as+'
            | 'r'
            | 'r+'
            | 'w'
            | 'wx'
            | 'w+'
            | 'wx+'
        /** 接口调用成功的回调函数 */
        success?: OpenSuccessCallback
    }
    interface OpenPrivacyContractOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenPrivacyContractCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: OpenPrivacyContractFailCallback
        /** 接口调用成功的回调函数 */
        success?: OpenPrivacyContractSuccessCallback
    }
    /** 用户点击后打开设置页面的按钮 */
    interface OpenSettingButton {
        /** 按钮的样式 */
        style: OptionStyle
        /** 按钮的类型。
         *
         * 可选值：
         * - 'text': 可以设置背景色和文本的按钮;
         * - 'image': 只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高; */
        type: 'text' | 'image'
        /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
        image?: string
        /** 按钮上的文本，仅当 type 为 `text` 时有效 */
        text?: string
        /** [OpenSettingButton.destroy()](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/OpenSettingButton.destroy.html)
         *
         * 销毁打开设置页面按钮 */
        destroy(): void
        /** [OpenSettingButton.hide()](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/OpenSettingButton.hide.html)
         *
         * 隐藏打开设置页面按钮。 */
        hide(): void
        /** [OpenSettingButton.offTap(function listener)](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/OpenSettingButton.offTap.html)
*
* 移除设置页面按钮的点击事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

OpenSettingButton.onTap(listener)
OpenSettingButton.offTap(listener) // 需传入与监听时同一个的函数对象
``` */
        offTap(
            /** onTap 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: GameClubButtonOffTapCallback
        ): void
        /** [OpenSettingButton.onTap(function listener)](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/OpenSettingButton.onTap.html)
         *
         * 监听设置页面按钮的点击事件 */
        onTap(
            /** 设置页面按钮的点击事件的监听函数 */
            listener: GameClubButtonOnTapCallback
        ): void
        /** [OpenSettingButton.show()](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/OpenSettingButton.show.html)
         *
         * 显示打开设置页面按钮 */
        show(): void
    }
    interface OpenSettingOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenSettingCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: OpenSettingFailCallback
        /** 接口调用成功的回调函数 */
        success?: OpenSettingSuccessCallback
        /** 需要基础库： `2.10.3`
         *
         * 是否同时获取用户订阅消息的订阅状态，默认不获取。注意：withSubscriptions 只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。 */
        withSubscriptions?: boolean
    }
    interface OpenSettingSuccessCallbackResult {
        /** [AuthSetting](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/AuthSetting.html)
         *
         * 用户授权结果 */
        authSetting: AuthSetting
        /** [SubscriptionsSetting](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/SubscriptionsSetting.html)
         *
         * 需要基础库： `2.10.3`
         *
         * 用户订阅消息设置，接口参数`withSubscriptions`值为`true`时才会返回。 */
        subscriptionsSetting: SubscriptionsSetting
        errMsg: string
    }
    interface OpenSuccessCallbackResult {
        /** 文件描述符 */
        fd: string
        errMsg: string
    }
    interface OpenSyncOption {
        /** 文件路径 (本地路径) */
        filePath: string
        /** 文件系统标志，默认值: 'r'
         *
         * 可选值：
         * - 'a': 打开文件用于追加。 如果文件不存在，则创建该文件;
         * - 'ax': 类似于 'a'，但如果路径存在，则失败;
         * - 'a+': 打开文件用于读取和追加。 如果文件不存在，则创建该文件;
         * - 'ax+': 类似于 'a+'，但如果路径存在，则失败;
         * - 'as': 打开文件用于追加（在同步模式中）。 如果文件不存在，则创建该文件;
         * - 'as+': 打开文件用于读取和追加（在同步模式中）。 如果文件不存在，则创建该文件;
         * - 'r': 打开文件用于读取。 如果文件不存在，则会发生异常;
         * - 'r+': 打开文件用于读取和写入。 如果文件不存在，则会发生异常;
         * - 'w': 打开文件用于写入。 如果文件不存在则创建文件，如果文件存在则截断文件;
         * - 'wx': 类似于 'w'，但如果路径存在，则失败;
         * - 'w+': 打开文件用于读取和写入。 如果文件不存在则创建文件，如果文件存在则截断文件;
         * - 'wx+': 类似于 'w+'，但如果路径存在，则失败; */
        flag?:
            | 'a'
            | 'ax'
            | 'a+'
            | 'ax+'
            | 'as'
            | 'as+'
            | 'r'
            | 'r+'
            | 'w'
            | 'wx'
            | 'w+'
            | 'wx+'
    }
    interface OpenSystemBluetoothSettingOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenSystemBluetoothSettingCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: OpenSystemBluetoothSettingFailCallback
        /** 接口调用成功的回调函数 */
        success?: OpenSystemBluetoothSettingSuccessCallback
    }
    interface OperateGameRecorderVideoOption {
        /** 对局回放的播放速率，只能设置以下几个值: 0.3, 0.5, 1, 1.5, 2, 2.5, 3.其中1表示元素播放，小于1表示减速播放，大于1表示加速播放 */
        atempo?: number
        /** 如果原始视频文件中有音频，是否与新传入的bgm混音，默认为false，表示不混音，只保留一个音轨，值为true时表示原始音频与传入的bgm混音 */
        audioMix?: boolean
        /** 对局回放背景音乐的地址 */
        bgm?: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OperateGameRecorderVideoCompleteCallback
        /** 分享的对局回放打开后的描述内容 */
        desc?: string
        /** 接口调用失败的回调函数 */
        fail?: OperateGameRecorderVideoFailCallback
        /** 分享的对局回放打开后跳转小游戏的 path （独立分包路径） */
        path?: string
        /** 分享的对局回放打开后跳转小游戏的 query */
        query?: string
        /** 接口调用成功的回调函数 */
        success?: OperateGameRecorderVideoSuccessCallback
        /** 对局回放的剪辑区间，是一个二维数组，单位 ms（毫秒）。[[1000, 3000], [4000, 5000]] 表示剪辑已录制对局回放的 1-3 秒和 4-5 秒最终合成为一个 3 秒的对局回放。对局回放剪辑后的总时长最多 60 秒，即 1 分钟 */
        timeRange?: number[][]
        /** 分享的对局回放打开后的标题内容 */
        title?: string
        /** 对局回放的音量大小，最小0，最大1 */
        volume?: number
    }
    /** 按钮的样式 */
    interface OptionStyle {
        /** 背景颜色 */
        backgroundColor: string
        /** 高度 */
        height: number
        /** 左上角横坐标 */
        left: number
        /** 左上角纵坐标 */
        top: number
        /** 宽度 */
        width: number
        /** 边框颜色 */
        borderColor?: string
        /** 边框圆角 */
        borderRadius?: number
        /** 边框宽度 */
        borderWidth?: number
        /** 文本的颜色。格式为 6 位 16 进制数。 */
        color?: string
        /** 字号 */
        fontSize?: number
        /** 文本的行高 */
        lineHeight?: number
        /** 文本的水平居中方式
         *
         * 可选值：
         * - 'left': 居左;
         * - 'center': 居中;
         * - 'right': 居右; */
        textAlign?: 'left' | 'center' | 'right'
    }
    interface OwnerLeaveRoomOption {
        /** 游戏房间访问凭证 */
        accessInfo: string
        /** 指定座位号的玩家接任房主角色，优先级高于 assignToMinPosNum */
        assignOwnerToPosNum?: boolean
        /** 自动指定最小座位号玩家作为新房主 */
        assignToMinPosNum?: boolean
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OwnerLeaveRoomCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: OwnerLeaveRoomFailCallback
        /** 接口调用成功的回调函数 */
        success?: OwnerLeaveRoomSuccessCallback
    }
    /** 需要基础库： `2.24.6`
     *
     * Canvas 2D API 的接口 Path2D 用来声明路径，此路径稍后会被 CanvasRenderingContext2D 对象使用。允许你在 canvas 中根据需要创建可以保留并重用的路径。 */
    interface Path2D {}
    /** 平面跟踪配置 */
    interface PlaneTrack {
        /** 平面跟踪配置模式
         *
         * 可选值：
         * - 1: 检测横向平面;
         * - 2: 检测纵向平面，只有 v2 版本支持;
         * - 3: 检测横向和纵向平面，只有 v2 版本支持; */
        mode: 1 | 2 | 3
        /** 需要基础库： `3.6.5`
         *
         * 是否开启强制使用V2的模式，只有 v2 版本支持 */
        force?: boolean
    }
    /** 插件账号信息（仅在插件中调用时包含这一项） */
    interface Plugin {
        /** 插件 appId */
        appId: string
        /** 插件版本号 */
        version: string
    }
    interface PreDownloadSubpackageOption {
        /** 分包加载结束回调事件(加载成功、失败都会执行） */
        complete: (...args: any[]) => any
        /** 分包加载失败回调事件 */
        fail: (...args: any[]) => any
        /** 分包的名字，可以填分包配置中的 name 或者 root 字段的值。仅在 packageType="normal" 时生效。在独立分包内，填 __GAME__ 表示加载主包，详见 [小游戏独立分包指南](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/independent-sub-packages.html), [3.4.9](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)及以上版本支持 */
        name: string
        /** 分包加载成功回调事件 */
        success: (...args: any[]) => any
        /** 分包的类型
         *
         * 可选值：
         * - 'workers': worker 分包;
         * - 'normal': 普通分包, [3.4.9](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)及以上版本支持。下载普通分包，必须再传入 name 参数。; */
        packageType?: 'workers' | 'normal'
    }
    interface PreviewImageOption {
        /** 需要预览的图片链接列表。[2.2.3](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起支持云文件ID。 */
        urls: string[]
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: PreviewImageCompleteCallback
        /** 当前显示图片的链接 */
        current?: string
        /** 接口调用失败的回调函数 */
        fail?: PreviewImageFailCallback
        /** 需要基础库： `2.13.0`
         *
         * `origin`: 发送完整的referrer; `no-referrer`: 不发送。格式固定为 `https://servicewechat.com/{appid}/{version}/page-frame.html`，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本； */
        referrerPolicy?: string
        /** 需要基础库： `2.13.0`
         *
         * 是否显示长按菜单。 */
        showmenu?: boolean
        /** 接口调用成功的回调函数 */
        success?: PreviewImageSuccessCallback
    }
    interface PreviewMediaOption {
        /** 需要预览的资源列表 */
        sources: MediaSource[]
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: PreviewMediaCompleteCallback
        /** 当前显示的资源序号 */
        current?: number
        /** 接口调用失败的回调函数 */
        fail?: PreviewMediaFailCallback
        /** 需要基础库： `2.13.0`
         *
         * `origin`: 发送完整的referrer; `no-referrer`: 不发送。格式固定为 `https://servicewechat.com/{appid}/{version}/page-frame.html`，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本； */
        referrerPolicy?: string
        /** 需要基础库： `2.13.0`
         *
         * 是否显示长按菜单。 */
        showmenu?: boolean
        /** 接口调用成功的回调函数 */
        success?: PreviewMediaSuccessCallback
    }
    interface ReadBLECharacteristicValueOption {
        /** 蓝牙特征的 UUID */
        characteristicId: string
        /** 蓝牙设备 id */
        deviceId: string
        /** 蓝牙特征对应服务的 UUID */
        serviceId: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ReadBLECharacteristicValueCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ReadBLECharacteristicValueFailCallback
        /** 接口调用成功的回调函数 */
        success?: ReadBLECharacteristicValueSuccessCallback
    }
    interface ReadCompressedFileOption {
        /** 文件压缩类型，目前仅支持 'br'。
         *
         * 可选值：
         * - 'br': brotli压缩文件; */
        compressionAlgorithm: 'br'
        /** 要读取的文件的路径 (本地用户文件或代码包文件) */
        filePath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ReadCompressedFileCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ReadCompressedFileFailCallback
        /** 接口调用成功的回调函数 */
        success?: ReadCompressedFileSuccessCallback
    }
    interface ReadCompressedFileSuccessCallbackResult {
        /** 文件内容 */
        data: ArrayBuffer
        errMsg: string
    }
    interface ReadCompressedFileSyncOption {
        /** 文件压缩类型，目前仅支持 'br'。
         *
         * 可选值：
         * - 'br': brotli压缩文件; */
        compressionAlgorithm: 'br'
        /** 要读取的文件的路径 (本地用户文件或代码包文件) */
        filePath: string
    }
    interface ReadFileOption {
        /** 要读取的文件的路径 (本地路径) */
        filePath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ReadFileCompleteCallback
        /** 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容
         *
         * 可选值：
         * - 'ascii': ;
         * - 'base64': ;
         * - 'binary': ;
         * - 'hex': ;
         * - 'ucs2': 以小端序读取;
         * - 'ucs-2': 以小端序读取;
         * - 'utf16le': 以小端序读取;
         * - 'utf-16le': 以小端序读取;
         * - 'utf-8': ;
         * - 'utf8': ;
         * - 'latin1': ; */
        encoding?:
            | 'ascii'
            | 'base64'
            | 'binary'
            | 'hex'
            | 'ucs2'
            | 'ucs-2'
            | 'utf16le'
            | 'utf-16le'
            | 'utf-8'
            | 'utf8'
            | 'latin1'
        /** 接口调用失败的回调函数 */
        fail?: ReadFileFailCallback
        /** 需要基础库： `2.10.0`
         *
         * 指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte */
        length?: number
        /** 需要基础库： `2.10.0`
         *
         * 从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：byte */
        position?: number
        /** 接口调用成功的回调函数 */
        success?: ReadFileSuccessCallback
    }
    interface ReadFileSuccessCallbackResult {
        /** 文件内容 */
        data: string | ArrayBuffer
        errMsg: string
    }
    interface ReadOption {
        /** 数据写入的缓冲区，必须是 ArrayBuffer 实例 */
        arrayBuffer: ArrayBuffer
        /** 文件描述符。fd 通过 [FileSystemManager.open](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.open.html) 或 [FileSystemManager.openSync](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.openSync.html) 接口获得 */
        fd: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ReadCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ReadFailCallback
        /** 要从文件中读取的字节数，默认0 */
        length?: number
        /** 缓冲区中的写入偏移量，默认0 */
        offset?: number
        /** 文件读取的起始位置，如不传或传 null，则会从当前文件指针的位置读取。如果 position 是正整数，则文件指针位置会保持不变并从 position 读取文件。 */
        position?: number
        /** 接口调用成功的回调函数 */
        success?: ReadSuccessCallback
    }
    /** 文件读取结果。 通过 [FileSystemManager.readSync](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.readSync.html) 接口返回 */
    interface ReadResult {
        /** 被写入的缓存区的对象，即接口入参的 arrayBuffer */
        arrayBuffer: ArrayBuffer
        /** 实际读取的字节数 */
        bytesRead: number
    }
    interface ReadSuccessCallbackResult {
        /** 被写入的缓存区的对象，即接口入参的 arrayBuffer */
        arrayBuffer: ArrayBuffer
        /** 实际读取的字节数 */
        bytesRead: number
        errMsg: string
    }
    interface ReadSyncOption {
        /** 数据写入的缓冲区，必须是 ArrayBuffer 实例 */
        arrayBuffer: ArrayBuffer
        /** 文件描述符。fd 通过 [FileSystemManager.open](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.open.html) 或 [FileSystemManager.openSync](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.openSync.html) 接口获得 */
        fd: string
        /** 要从文件中读取的字节数，默认0 */
        length?: number
        /** 缓冲区中的写入偏移量，默认0 */
        offset?: number
        /** 文件读取的起始位置，如不传或传 null，则会从当前文件指针的位置读取。如果 position 是正整数，则文件指针位置会保持不变并从 position 读取文件。 */
        position?: number
    }
    interface ReadZipEntryOption {
        /** 要读取的压缩包内的文件列表（当传入"all" 时表示读取压缩包内所有文件） */
        entries: EntryItem[] | 'all'
        /** 要读取的压缩包的路径 (本地路径) */
        filePath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ReadZipEntryCompleteCallback
        /** 统一指定读取文件的字符编码，只在 entries 值为"all"时有效。如果 entries 值为"all"且不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容
         *
         * 可选值：
         * - 'ascii': ;
         * - 'base64': ;
         * - 'binary': ;
         * - 'hex': ;
         * - 'ucs2': 以小端序读取;
         * - 'ucs-2': 以小端序读取;
         * - 'utf16le': 以小端序读取;
         * - 'utf-16le': 以小端序读取;
         * - 'utf-8': ;
         * - 'utf8': ;
         * - 'latin1': ; */
        encoding?:
            | 'ascii'
            | 'base64'
            | 'binary'
            | 'hex'
            | 'ucs2'
            | 'ucs-2'
            | 'utf16le'
            | 'utf-16le'
            | 'utf-8'
            | 'utf8'
            | 'latin1'
        /** 接口调用失败的回调函数 */
        fail?: ReadZipEntryFailCallback
        /** 接口调用成功的回调函数 */
        success?: ReadZipEntrySuccessCallback
    }
    interface ReadZipEntrySuccessCallbackResult {
        /** 文件读取结果。res.entries 是一个对象，key是文件路径，value是一个对象 FileItem ，表示该文件的读取结果。每个 FileItem 包含 data （文件内容） 和 errMsg （错误信息） 属性。 */
        entries: EntriesResult
        errMsg: string
    }
    interface ReaddirOption {
        /** 要读取的目录路径 (本地路径) */
        dirPath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ReaddirCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ReaddirFailCallback
        /** 接口调用成功的回调函数 */
        success?: ReaddirSuccessCallback
    }
    interface ReaddirSuccessCallbackResult {
        /** 指定目录下的文件名数组。 */
        files: string[]
        errMsg: string
    }
    interface ReconnectOption {
        /** 需要重连的对局房间唯一标识 */
        accessInfo: string
    }
    /** GameServerManager.reconnect 接口 resolve 后的返回值 */
    interface ReconnectSuccessRes {
        object: ReconnectSuccessResOption
    }
    interface ReconnectSuccessResOption {
        data: DataOption
    }
    interface RecorderManagerStartOption {
        /** 需要基础库： `2.1.0`
         *
         * 指定录音的音频输入源，可通过 [wx.getAvailableAudioSources()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.getAvailableAudioSources.html) 获取当前可用的音频源
         *
         * 可选值：
         * - 'auto': 自动设置，默认使用手机麦克风，插上耳麦后自动切换使用耳机麦克风，所有平台适用;
         * - 'buildInMic': 手机麦克风，仅限 iOS;
         * - 'headsetMic': 有线耳机麦克风，仅限 iOS;
         * - 'mic': 麦克风（没插耳麦时是手机麦克风，插耳麦时是耳机麦克风），仅限 Android;
         * - 'camcorder': 同 mic，适用于录制音视频内容，仅限 Android;
         * - 'voice_communication': 同 mic，适用于实时沟通，仅限 Android;
         * - 'voice_recognition': 同 mic，适用于语音识别，仅限 Android; */
        audioSource?:
            | 'auto'
            | 'buildInMic'
            | 'headsetMic'
            | 'mic'
            | 'camcorder'
            | 'voice_communication'
            | 'voice_recognition'
        /** 录音的时长，单位 ms，最大值 600000（10 分钟） */
        duration?: number
        /** 编码码率，有效值见下表格 */
        encodeBitRate?: number
        /** 音频格式
         *
         * 可选值：
         * - 'mp3': mp3 格式;
         * - 'aac': aac 格式;
         * - 'wav': wav 格式;
         * - 'PCM': pcm 格式; */
        format?: 'mp3' | 'aac' | 'wav' | 'PCM'
        /** 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3、pcm 格式。 */
        frameSize?: number
        /** 录音通道数
         *
         * 可选值：
         * - 1: 1 个通道;
         * - 2: 2 个通道; */
        numberOfChannels?: 1 | 2
        /** 采样率（pc不支持）
         *
         * 可选值：
         * - 8000: 8000 采样率;
         * - 11025: 11025 采样率;
         * - 12000: 12000 采样率;
         * - 16000: 16000 采样率;
         * - 22050: 22050 采样率;
         * - 24000: 24000 采样率;
         * - 32000: 32000 采样率;
         * - 44100: 44100 采样率;
         * - 48000: 48000 采样率; */
        sampleRate?:
            | 8000
            | 11025
            | 12000
            | 16000
            | 22050
            | 24000
            | 32000
            | 44100
            | 48000
    }
    interface RemoveSavedFileOption {
        /** 需要删除的文件路径 (本地路径) */
        filePath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RemoveSavedFileCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: RemoveSavedFileFailCallback
        /** 接口调用成功的回调函数 */
        success?: RemoveSavedFileSuccessCallback
    }
    interface RemoveServiceOption {
        /** service 的 UUID */
        serviceId: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RemoveServiceCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: RemoveServiceFailCallback
        /** 接口调用成功的回调函数 */
        success?: RemoveServiceSuccessCallback
    }
    interface RemoveStorageOption {
        /** 本地缓存中指定的 key */
        key: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RemoveStorageCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: RemoveStorageFailCallback
        /** 接口调用成功的回调函数 */
        success?: RemoveStorageSuccessCallback
    }
    interface RemoveUserCloudStorageOption {
        /** 要删除掉 key 列表 */
        keyList: string[]
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RemoveUserCloudStorageCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: RemoveUserCloudStorageFailCallback
        /** 接口调用成功的回调函数 */
        success?: RemoveUserCloudStorageSuccessCallback
    }
    interface RenameOption {
        /** 新文件路径，支持本地路径 */
        newPath: string
        /** 源文件路径，支持本地路径 */
        oldPath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RenameCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: RenameFailCallback
        /** 接口调用成功的回调函数 */
        success?: RenameSuccessCallback
    }
    /** 画布对象的绘图上下文。
     *
     * - 通过 Canvas.getContext('2d') 接口可以获取 CanvasRenderingContext2D 对象，实现了 [HTML Canvas 2D Context](https://www.w3.org/TR/2dcontext/) 定义的大部分属性、方法。
     * - 通过 Canvas.getContext('webgl') 接口可以获取 WebGLRenderingContext 对象，实现了 [WebGL 1.0](https://www.khronos.org/registry/webgl/specs/latest/1.0/) 定义的所有属性、方法、常量。
     *
     * **2d 接口支持情况**
     *
     * iOS/Android 不支持的 2d 属性和接口
     *
     * - globalCompositeOperation 不支持以下值： source-in source-out destination-atop lighter copy。如果使用，不会报错，但是将得到与预期不符的结果。
     * - isPointInPath
     *
     * **WebGL 接口支持情况**
     *
     * 压缩纹理的支持
     * - iOS 支持 pvr 格式
     * - Android 支持 etc1 格式 */
    interface RenderingContext {}
    interface ReportSceneFailCallbackErr {
        /** 需要基础库： `2.28.1`
         *
         * 开发者上报的原始数据 */
        data: IAnyObject
        /** 需要基础库： `2.28.1`
         *
         * 错误信息 */
        errMsg: string
    }
    interface ReportSceneOption {
        /** 场景ID，在「小程序管理后台」获取 */
        sceneId: number
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ReportSceneCompleteCallback
        /** 此场景的耗时，单位 ms */
        costTime?: number
        /** 自定义维度数据，key在「小程序管理后台」获取。只支持能够通过JSON.stringify序列化的对象，且序列化后长度不超过1024个字符 */
        dimension?: IAnyObject
        /** 接口调用失败的回调函数 */
        fail?: ReportSceneFailCallback
        /** 自定义指标数据，key在「小程序管理后台」获取。只支持能够通过JSON.stringify序列化的对象，且序列化后长度不超过1024个字符 */
        metric?: IAnyObject
        /** 接口调用成功的回调函数 */
        success?: ReportSceneSuccessCallback
    }
    interface ReportSceneSuccessCallbackResult {
        /** 需要基础库： `2.28.1`
         *
         * 开发者上报的原始数据 */
        data: IAnyObject
        errMsg: string
    }
    interface ReportUserBehaviorBranchAnalyticsOption {
        /** 分支ID，在「小程序管理后台」获取 */
        branchId: string
        /** 事件类型，1：曝光； 2：点击 */
        eventType: number
        /** 自定义维度，基础库 v2.14.0 开始支持可选 */
        branchDim?: string
    }
    /** 需要基础库： `3.0.0`
     *
     * 网络请求过程中的一些异常信息，例如httpdns重试等 */
    interface RequestException {
        /** 本次请求底层失败信息，所有失败信息均符合Errno错误码 */
        reasons: ExceptionReason[]
        /** 本次请求底层重试次数 */
        retryCount: number
    }
    interface RequestFailCallbackErr {
        /** 错误信息 */
        errMsg: string
        /** 需要基础库： `2.24.0`
         *
         * errno 错误码，错误码的详细说明参考 [Errno错误码](https://developers.weixin.qq.com/minigame/dev/guide/runtime/debug/PublicErrno.html) */
        errno: number
    }
    interface RequestMidasFriendPaymentOption {
        /** 购买数量。mode=game 时必填。购买数量。详见 [buyQuantity 限制说明](#buyQuantity限制说明)。 */
        buyQuantity: number
        /** 币种
         *
         * 可选值：
         * - 'CNY': 人民币; */
        currencyType: 'CNY'
        /** 环境配置
         *
         * 可选值：
         * - 0: 米大师正式环境;
         * - 1: 米大师沙箱环境; */
        env: 0 | 1
        /** 支付的类型，不同的支付类型有各自额外要传的附加参数
         *
         * 可选值：
         * - 'game': 购买游戏币; */
        mode: 'game'
        /** 随机字符串，长度应小于 128 */
        nonceStr: string
        /** 在米大师侧申请的应用 id */
        offerId: string
        /** 开发者业务订单号，每个订单号只能使用一次，重复使用会失败。要求32个字符内，只能是数字、大小写字母、符号 `_-|*@` */
        outTradeNo: string
        /** 申请接入时的平台，platform 与应用id有关。
         *
         * 可选值：
         * - 'android': Android平台; */
        platform: 'android'
        /** 签名 */
        signature: string
        /** 生成这个随机字符串的 UNIX 时间戳（精确到秒） */
        timeStamp: number
        /** 分区 ID */
        zoneId: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RequestMidasFriendPaymentCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: RequestMidasFriendPaymentFailCallback
        /** 接口调用成功的回调函数 */
        success?: RequestMidasFriendPaymentSuccessCallback
    }
    interface RequestMidasFriendPaymentSuccessCallbackResult {
        /** 敏感数据对应的云 ID，开通[云开发](https://developers.weixin.qq.com/minigame/dev/wxcloud/basis/getting-started.html)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html#method-cloud) */
        cloudID: string
        /** 包括敏感数据在内的完整转发信息的加密数据，详细见[加密数据解密算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html) */
        encryptedData: string
        /** 错误信息 */
        errMsg: string
        /** 加密算法的初始向量，详细见[加密数据解密算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html) */
        iv: string
    }
    interface RequestMidasPaymentFailCallbackErr {
        /** 错误码 */
        errCode: number
        /** 错误信息 */
        errMsg: string
        /** 错误码 */
        errno: number
    }
    interface RequestMidasPaymentGameItemOption {
        /** <b>支付签名</b>
         *
         * pay_sig参数的签名算法，使用<b>“mp-支付基础配置”</b>中的<b>AppKey</b>对支付的请求进行签名，代表请求经过开发者服务端的支付模块发起。签名算法伪代码为：
         *
         * paySig = to_hex(hmac_sha256(appKey,'requestMidasPaymentGameItem' + '&' + signData))
         *
         * 具体可见代码示例中的支付签名代码实现 */
        paySig: string
        /** <b>支付原串</b>
         *
         * 具体支付参数见下面的signData，需要将数据以json格式传递
         *
         * signData例子:
         *
         * '{"mode":"goods","offerId":"123","buyQuantity":1,"env":0,"currencyType":"CNY","platform":"android","zoneId":"1","productId":"testproductId","goodsPrice":10,"outTradeNo":"xxxxxx","attach":"testdata"}' */
        signData: SignData1
        /** <b>用户态签名</b>
         *
         * signature参数签名算法参考[用户态签名](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html#%E7%94%A8%E6%88%B7%E7%99%BB%E5%BD%95%E6%80%81%E7%AD%BE%E5%90%8D)
         *
         * 可参考[calc_signature](https://docs.qq.com/doc/DVUN0QWJja0J5c2x4) */
        signature: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RequestMidasPaymentGameItemCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: RequestMidasPaymentGameItemFailCallback
        /** 接口调用成功的回调函数 */
        success?: RequestMidasPaymentGameItemSuccessCallback
    }
    interface RequestMidasPaymentOption {
        /** 币种
         *
         * 可选值：
         * - 'CNY': 人民币; */
        currencyType: 'CNY'
        /** 支付的类型，不同的支付类型有各自额外要传的附加参数。
         *
         * 可选值：
         * - 'game': 购买游戏币; */
        mode: 'game'
        /** 在米大师侧申请的应用 id */
        offerId: string
        /** 业务订单号，每个订单号只能使用一次，重复使用会失败。开发者需要确保该订单号在对应游戏下的唯一性，平台会尽可能校验该唯一性约束，但极端情况下可能会跳过对该约束的校验。要求32个字符内，只能是数字、大小写字母、符号_-|*组成，不能以下划线（)开头。建议每次调用wx.requestMidasPayment都换新的outTradeNo。若没有传入，则平台会自动填充一个，并以下划线开头 */
        outTradeNo: string
        /** 购买数量。mode=game 时必填。购买数量。详见 [buyQuantity 限制说明](#buyquantity-限制说明)。 */
        buyQuantity?: number
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RequestMidasPaymentCompleteCallback
        /** 环境配置
         *
         * 可选值：
         * - 0: 米大师正式环境;
         * - 1: 米大师沙箱环境; */
        env?: 0 | 1
        /** 接口调用失败的回调函数 */
        fail?: RequestMidasPaymentFailCallback
        /** 申请接入时的平台，platform 与应用id有关。
         *
         * 可选值：
         * - 'android': android; */
        platform?: 'android'
        /** 接口调用成功的回调函数 */
        success?: RequestMidasPaymentSuccessCallback
        /** 分区 ID */
        zoneId?: string
    }
    interface RequestMidasPaymentSuccessCallbackResult {
        /** 调用成功信息 */
        errMsg: string
    }
    interface RequestOption<
        T extends string | IAnyObject | ArrayBuffer =
            | string
            | IAnyObject
            | ArrayBuffer
    > {
        /** 开发者服务器接口地址 */
        url: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RequestCompleteCallback
        /** 请求的参数 */
        data?: string | IAnyObject | ArrayBuffer
        /** 返回的数据格式
         *
         * 可选值：
         * - 'json': 返回的数据为 JSON，返回后会对返回的数据进行一次 JSON.parse;
         * - '其他': 不对返回的内容进行 JSON.parse; */
        dataType?: 'json' | '其他'
        /** 需要基础库： `2.10.4`
         *
         * 开启 Http 缓存 */
        enableCache?: boolean
        /** 需要基础库： `2.20.2`
         *
         * 开启 transfer-encoding chunked。 */
        enableChunked?: boolean
        /** 需要基础库： `2.10.4`
         *
         * 开启 http2 */
        enableHttp2?: boolean
        /** 需要基础库： `2.19.1`
         *
         * 是否开启 HttpDNS 服务。如开启，需要同时填入 httpDNSServiceId 。 HttpDNS 用法详见 [移动解析HttpDNS](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/HTTPDNS.html) */
        enableHttpDNS?: boolean
        /** 是否开启 profile，默认开启。开启后可在接口回调的 res.profile 中查看性能调试信息。 */
        enableProfile?: boolean
        /** 需要基础库： `2.10.4`
         *
         * 是否开启 Quic/h3 协议（iOS 微信目前使用 gQUIC-Q43；Android 微信在 v8.0.54 前使用 gQUIC-Q43，v8.0.54 开始使用 IETF QUIC，即 h3 协议；PC微信使用 IETF QUIC，即 h3 协议） */
        enableQuic?: boolean
        /** 接口调用失败的回调函数 */
        fail?: RequestFailCallback
        /** 需要基础库： `2.21.0`
         *
         * 强制使用蜂窝网络发送请求 */
        forceCellularNetwork?: boolean
        /** 设置请求的 header，header 中不能设置 Referer。
         *
         * `content-type` 默认为 `application/json` */
        header?: IAnyObject
        /** 需要基础库： `2.19.1`
         *
         * HttpDNS 服务商 Id。 HttpDNS 用法详见 [移动解析HttpDNS](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/HTTPDNS.html) */
        httpDNSServiceId?: string
        /** HTTP 请求方法
         *
         * 可选值：
         * - 'OPTIONS': HTTP 请求 OPTIONS;
         * - 'GET': HTTP 请求 GET;
         * - 'HEAD': HTTP 请求 HEAD;
         * - 'POST': HTTP 请求 POST;
         * - 'PUT': HTTP 请求 PUT;
         * - 'DELETE': HTTP 请求 DELETE;
         * - 'TRACE': HTTP 请求 TRACE;
         * - 'CONNECT': HTTP 请求 CONNECT; */
        method?:
            | 'OPTIONS'
            | 'GET'
            | 'HEAD'
            | 'POST'
            | 'PUT'
            | 'DELETE'
            | 'TRACE'
            | 'CONNECT'
        /** 需要基础库： `3.2.2`
         *
         * 重定向拦截策略。（目前安卓、iOS、开发者工具已支持，PC端将在后续支持）
         *
         * 可选值：
         * - 'follow': 不拦截重定向，即客户端自动处理重定向;
         * - 'manual': 拦截重定向。开启后，当 http 状态码为 3xx 时客户端不再自动重定向，而是触发 onHeadersReceived 回调，并结束本次 request 请求。可通过 onHeadersReceived 回调中的 header.Location 获取重定向的 url; */
        redirect?: 'follow' | 'manual'
        /** 需要基础库： `1.7.0`
         *
         * 响应的数据类型
         *
         * 可选值：
         * - 'text': 响应的数据为文本;
         * - 'arraybuffer': 响应的数据为 ArrayBuffer; */
        responseType?: 'text' | 'arraybuffer'
        /** 接口调用成功的回调函数 */
        success?: RequestSuccessCallback<T>
        /** 需要基础库： `2.10.0`
         *
         * 超时时间，单位为毫秒。默认值为 60000 */
        timeout?: number
        /** 需要基础库： `3.3.3`
         *
         * 使用高性能模式，暂仅支持 Android，默认关闭。该模式下有更优的网络性能表现，更多信息请查看下方说明。 */
        useHighPerformanceMode?: boolean
    }
    /** 需要基础库： `2.10.4`
     *
     * 网络请求过程中一些调试信息，[查看详细说明](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/network.html) */
    interface RequestProfile {
        /** SSL建立完成的时间,如果不是安全连接,则值为 0 */
        SSLconnectionEnd: number
        /** SSL建立连接的时间,如果不是安全连接,则值为 0 */
        SSLconnectionStart: number
        /** HTTP（TCP） 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间。注意这里握手结束，包括安全连接建立完成、SOCKS 授权通过 */
        connectEnd: number
        /** HTTP（TCP） 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间 */
        connectStart: number
        /** DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
        domainLookUpEnd: number
        /** DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
        domainLookUpStart: number
        /** 评估当前网络下载的kbps */
        downstreamThroughputKbpsEstimate: number
        /** 评估的网络状态 unknown, offline, slow 2g, 2g, 3g, 4g, last/0, 1, 2, 3, 4, 5, 6 */
        estimate_nettype: number
        /** 组件准备好使用 HTTP 请求抓取资源的时间，这发生在检查本地缓存之前 */
        fetchStart: number
        /** 协议层根据多个请求评估当前网络的 rtt（仅供参考） */
        httpRttEstimate: number
        /** 当前请求的IP */
        peerIP: string
        /** 当前请求的端口 */
        port: number
        /** 使用协议类型，有效值：http1.1, h2, quic, unknown */
        protocol: string
        /** 收到字节数 */
        receivedBytedCount: number
        /** 最后一个 HTTP 重定向完成时的时间。有跳转且是同域名内部的重定向才算，否则值为 0 */
        redirectEnd: number
        /** 第一个 HTTP 重定向发生时的时间。有跳转且是同域名内的重定向才算，否则值为 0 */
        redirectStart: number
        /** HTTP请求读取真实文档结束的时间 */
        requestEnd: number
        /** HTTP请求读取真实文档开始的时间（完成建立连接），包括从本地读取缓存。连接错误重连时，这里显示的也是新建立连接的时间 */
        requestStart: number
        /** HTTP 响应全部接收完成的时间（获取到最后一个字节），包括从本地读取缓存 */
        responseEnd: number
        /** HTTP 开始接收响应的时间（获取到第一个字节），包括从本地读取缓存 */
        responseStart: number
        /** 当次请求连接过程中实时 rtt */
        rtt: number
        /** 发送的字节数 */
        sendBytesCount: number
        /** 是否复用连接 */
        socketReused: boolean
        /** 当前网络的实际下载kbps */
        throughputKbps: number
        /** 传输层根据多个请求评估的当前网络的 rtt（仅供参考） */
        transportRttEstimate: number
        /** 是否走到了高性能模式。基础库 v3.3.4 起支持。 */
        usingHighPerformanceMode: boolean
    }
    interface RequestSubscribeMessageFailCallbackResult {
        /** 接口调用失败错误码 */
        errCode: number
        /** 接口调用失败错误信息 */
        errMsg: string
    }
    interface RequestSubscribeMessageOption {
        /** 需要订阅的消息模板的id的集合，一次调用最多可订阅3条消息（注意：iOS客户端7.0.6版本、Android客户端7.0.7版本之后的一次性订阅/长期订阅才支持多个模板消息，iOS客户端7.0.5版本、Android客户端7.0.6版本之前的一次订阅只支持一个模板消息）消息模板id在[微信公众平台(mp.weixin.qq.com)-功能-订阅消息]中配置。每个tmplId对应的模板标题需要不相同，否则会被过滤。 */
        tmplIds: any[]
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RequestSubscribeMessageCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: RequestSubscribeMessageFailCallback
        /** 接口调用成功的回调函数 */
        success?: RequestSubscribeMessageSuccessCallback
    }
    interface RequestSubscribeMessageSuccessCallbackResult {
        /** [TEMPLATE_ID]是动态的键，即模板id，值包括'accept'、'reject'、'ban'、'filter'。'accept'表示用户同意订阅该条id对应的模板消息，'reject'表示用户拒绝订阅该条id对应的模板消息，'ban'表示已被后台封禁，'filter'表示该模板因为模板标题同名被后台过滤。例如 { errMsg: "requestSubscribeMessage:ok", zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE: "accept"} 表示用户同意订阅zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE这条消息 */
        [TEMPLATE_ID: string]: string
        /** 接口调用成功时errMsg值为'requestSubscribeMessage:ok' */
        errMsg: string
    }
    interface RequestSubscribeSystemMessageOption {
        /** 系统订阅消息类型列表，一次调用最多可订阅3种类型的消息，目前支持："SYS_MSG_TYPE_INTERACTIVE"（好友互动提醒）、"SYS_MSG_TYPE_RANK"（排行榜超越提醒）、"SYS_MSG_TYPE_WHATS_NEW"（游戏更新提醒） */
        msgTypeList: string[]
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RequestSubscribeSystemMessageCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: RequestSubscribeSystemMessageFailCallback
        /** 接口调用成功的回调函数 */
        success?: RequestSubscribeSystemMessageSuccessCallback
    }
    interface RequestSubscribeSystemMessageSuccessCallbackResult {
        /** [MSG_TYPE]是动态的键，即系统订阅消息类型，值为'accept'、'reject'、'ban'，'accept'表示用户同意订阅该类型对应的模板消息，'reject'表示用户拒绝订阅该类型对应的模板消息，'ban'表示已被后台封禁。例如 { errMsg: "requestSubscribeSystemMessage:ok", SYS_MSG_TYPE_INTERACTIVE: "accept" } 表示用户同意订阅'SYS_MSG_TYPE_INTERACTIVE'这条消息 */
        MSG_TYPE: string
        /** 接口调用成功时errMsg值为'requestSubscribeSystemMessage:ok' */
        errMsg: string
    }
    interface RequestSuccessCallbackResult<
        T extends string | IAnyObject | ArrayBuffer =
            | string
            | IAnyObject
            | ArrayBuffer
    > {
        /** 需要基础库： `2.10.0`
         *
         * 开发者服务器返回的 cookies，格式为字符串数组 */
        cookies: string[]
        /** 开发者服务器返回的数据 */
        data: T
        /** 需要基础库： `3.0.0`
         *
         * 网络请求过程中的一些异常信息，例如httpdns重试等 */
        exception: RequestException
        /** 需要基础库： `1.2.0`
         *
         * 开发者服务器返回的 HTTP Response Header */
        header: IAnyObject
        /** 需要基础库： `2.10.4`
         *
         * 网络请求过程中一些调试信息，[查看详细说明](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/network.html) */
        profile: RequestProfile
        /** 开发者服务器返回的 HTTP 状态码 */
        statusCode: number
        /** 需要基础库： `3.4.10`
         *
         * 最终请求是否使用了HttpDNS（仅当enableHttpDNS传true时返回此字段） */
        useHttpDNS: boolean
        errMsg: string
    }
    interface RequestTaskOnHeadersReceivedListenerResult {
        /** 开发者服务器返回的 cookies，格式为字符串数组 */
        cookies: string[]
        /** 开发者服务器返回的 HTTP Response Header */
        header: IAnyObject
        /** 开发者服务器返回的 HTTP 状态码 （目前开发者工具上不会返回 statusCode 字段，可用真机查看该字段，后续将会支持） */
        statusCode: number
    }
    interface RequirePrivacyAuthorizeOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RequirePrivacyAuthorizeCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: RequirePrivacyAuthorizeFailCallback
        /** 接口调用成功的回调函数 */
        success?: RequirePrivacyAuthorizeSuccessCallback
    }
    interface ReserveChannelsLiveOption {
        /** 预告 id，通过 getChannelsLiveNoticeInfo 接口获取 */
        noticeId: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ReserveChannelsLiveCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ReserveChannelsLiveFailCallback
        /** 接口调用成功的回调函数 */
        success?: ReserveChannelsLiveSuccessCallback
    }
    interface RestartMiniProgramOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RestartMiniProgramCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: RestartMiniProgramFailCallback
        /** 打开的页面路径，path 中 ? 后面的部分会成为 query */
        path?: string
        /** 接口调用成功的回调函数 */
        success?: RestartMiniProgramSuccessCallback
    }
    interface RestartOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RestartCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: RestartFailCallback
        /** 接口调用成功的回调函数 */
        success?: RestartSuccessCallback
    }
    /** 当场景为由从另一个小程序或公众号或App打开时，返回此字段 */
    interface ResultReferrerInfo {
        /** 来源小程序或公众号或App的 appId */
        appId: string
        /** 来源小程序传过来的数据，scene=1037或1038时支持 */
        extraData: IAnyObject
    }
    interface RewardedVideoAdOnCloseListenerResult {
        /** 需要基础库： `2.1.0`
         *
         * 视频是否是在用户完整观看的情况下被关闭的 */
        isEnded: boolean
    }
    interface RmdirOption {
        /** 要删除的目录路径 (本地路径) */
        dirPath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RmdirCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: RmdirFailCallback
        /** 需要基础库： `2.3.0`
         *
         * 是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。 */
        recursive?: boolean
        /** 接口调用成功的回调函数 */
        success?: RmdirSuccessCallback
    }
    interface RoomInfo {
        /** 小游戏 appId */
        appId: string
        /** 创建时间 */
        createTimestamp: number
        /** 游戏对局时长，单位 s */
        gameLastTime: number
        /** 游戏下发帧的时间间隔，单位 ms */
        gameTick: number
        /** 房间最多可容纳人数 */
        maxMemberNum: number
        /** 成员列表 */
        memberList: RoomMemberInfo[]
        /** 游戏自定义的关于房间的扩展信息 */
        roomExtInfo: string
        /** 房间 ID */
        roomIdStr: number
        /** 房间状态
         *
         * 可选值：
         * - 1: 组队中;
         * - 2: 该房间的对局游戏已开始;
         * - 3: 该房间的对局游戏已结束;
         * - 4: 房间已销毁;
         * - 5: 房间连接已建立，等待对战连接建立; */
        roomState: 1 | 2 | 3 | 4 | 5
        /** 游戏随机种子 */
        seed: string
        /** 需要满足百分比的玩家都发送了开始指令才能启动游戏。有效范围 0~100，0 表示只要有一个人调用开始就启动，100 表示要求所有人都开始才能启动。 */
        startPercent: number
        /** UDP可靠性策略， 0：全冗余 N：固定冗余N帧 */
        udpReliabilityStrategy: number
        /** 最近更新时间 */
        updateTimestamp: number
    }
    /** 成员列表 */
    interface RoomMemberInfo {
        /** 用户在房间内的唯一标识 */
        clientId: number
        /** 是否已做好游戏开始准备（调用过 startGame） */
        enableToStart: boolean
        /** 头像 URL（房间 needUserInfo 为 true 时才会有） */
        headimg: string
        /** 玩家准备状态 */
        isReady: boolean
        /** 游戏自定义的关于成员的扩展信息 */
        memberExtInfo: string
        /** 用户昵称（房间 needUserInfo 为 true 时才会有） */
        nickname: string
        /** 座位号，从 0 开始 */
        posNum: number
        /** 角色
         *
         * 可选值：
         * - 0: 普通成员;
         * - 1: 房主; */
        role: 0 | 1
    }
    interface RunOCROption {
        /** 待识别图像的像素点数据，每四项表示一个像素点的 RGBA */
        frameBuffer: ArrayBuffer
        /** 图像高度 */
        height: number
        /** 图像宽度 */
        width: number
    }
    interface SafeArea {
        /** 安全区域右下角纵坐标 */
        bottom: number
        /** 安全区域的高度，单位逻辑像素 */
        height: number
        /** 安全区域左上角横坐标 */
        left: number
        /** 安全区域右下角横坐标 */
        right: number
        /** 安全区域左上角纵坐标 */
        top: number
        /** 安全区域的宽度，单位逻辑像素 */
        width: number
    }
    interface SaveFileOption {
        /** 临时存储文件路径 (本地路径) */
        tempFilePath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SaveFileCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: SaveFileFailCallback
        /** 要存储的文件路径 (本地路径) */
        filePath?: string
        /** 接口调用成功的回调函数 */
        success?: SaveFileSuccessCallback
    }
    interface SaveFileSuccessCallbackResult {
        /** 存储后的文件路径 (本地路径) */
        savedFilePath: string
        errMsg: string
    }
    interface SaveFileToDiskOption {
        /** 待保存文件路径 */
        filePath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SaveFileToDiskCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: SaveFileToDiskFailCallback
        /** 接口调用成功的回调函数 */
        success?: SaveFileToDiskSuccessCallback
    }
    interface SaveImageToPhotosAlbumOption {
        /** 图片文件路径，可以是临时文件路径或永久文件路径 (本地路径) ，不支持网络路径 */
        filePath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SaveImageToPhotosAlbumCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: SaveImageToPhotosAlbumFailCallback
        /** 接口调用成功的回调函数 */
        success?: SaveImageToPhotosAlbumSuccessCallback
    }
    interface ScanCodeOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ScanCodeCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ScanCodeFailCallback
        /** 需要基础库： `1.2.0`
         *
         * 是否只能从相机扫码，不允许从相册选择图片 */
        onlyFromCamera?: boolean
        /** 需要基础库： `1.7.0`
         *
         * 扫码类型
         *
         * 可选值：
         * - 'barCode': 一维码;
         * - 'qrCode': 二维码;
         * - 'wxCode': 小程序码;
         * - 'datamatrix': Data Matrix 码;
         * - 'pdf417': PDF417 条码; */
        scanType?: Array<
            'barCode' | 'qrCode' | 'wxCode' | 'datamatrix' | 'pdf417'
        >
        /** 接口调用成功的回调函数 */
        success?: ScanCodeSuccessCallback
    }
    interface ScanCodeSuccessCallbackResult {
        /** 所扫码的字符集 */
        charSet: string
        /** 当所扫的码为当前小程序二维码时，会返回此字段，内容为二维码携带的 path */
        path: string
        /** 原始数据，base64编码 */
        rawData: string
        /** 所扫码的内容 */
        result: string
        /** 所扫码的类型
         *
         * 可选值：
         * - 'QR_CODE': 二维码;
         * - 'AZTEC': 一维码;
         * - 'CODABAR': 一维码;
         * - 'CODE_39': 一维码;
         * - 'CODE_93': 一维码;
         * - 'CODE_128': 一维码;
         * - 'DATA_MATRIX': 二维码;
         * - 'EAN_8': 一维码;
         * - 'EAN_13': 一维码;
         * - 'ITF': 一维码;
         * - 'MAXICODE': 一维码;
         * - 'PDF_417': 二维码;
         * - 'RSS_14': 一维码;
         * - 'RSS_EXPANDED': 一维码;
         * - 'UPC_A': 一维码;
         * - 'UPC_E': 一维码;
         * - 'UPC_EAN_EXTENSION': 一维码;
         * - 'WX_CODE': 二维码;
         * - 'CODE_25': 一维码; */
        scanType:
            | 'QR_CODE'
            | 'AZTEC'
            | 'CODABAR'
            | 'CODE_39'
            | 'CODE_93'
            | 'CODE_128'
            | 'DATA_MATRIX'
            | 'EAN_8'
            | 'EAN_13'
            | 'ITF'
            | 'MAXICODE'
            | 'PDF_417'
            | 'RSS_14'
            | 'RSS_EXPANDED'
            | 'UPC_A'
            | 'UPC_E'
            | 'UPC_EAN_EXTENSION'
            | 'WX_CODE'
            | 'CODE_25'
        errMsg: string
    }
    interface SendSocketMessageOption {
        /** 需要发送的内容 */
        data: string | ArrayBuffer
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SendSocketMessageCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: SendSocketMessageFailCallback
        /** 接口调用成功的回调函数 */
        success?: SendSocketMessageSuccessCallback
    }
    interface SetBLEMTUFailCallbackResult {
        /** 最终协商的 MTU 值。如果协商失败则无此参数。安卓客户端 8.0.9 开始支持。 */
        mtu: number
    }
    interface SetBLEMTUOption {
        /** 蓝牙设备 id */
        deviceId: string
        /** 最大传输单元。设置范围为 (22,512) 区间内，单位 bytes */
        mtu: number
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetBLEMTUCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: SetBLEMTUFailCallback
        /** 接口调用成功的回调函数 */
        success?: SetBLEMTUSuccessCallback
    }
    interface SetBLEMTUSuccessCallbackResult {
        /** 最终协商的 MTU 值，与传入参数一致。安卓客户端 8.0.9 开始支持。 */
        mtu: number
        errMsg: string
    }
    interface SetBackgroundFetchTokenOption {
        /** 自定义的登录态 */
        token: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetBackgroundFetchTokenCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: SetBackgroundFetchTokenFailCallback
        /** 接口调用成功的回调函数 */
        success?: SetBackgroundFetchTokenSuccessCallback
    }
    interface SetClipboardDataOption {
        /** 剪贴板的内容 */
        data: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetClipboardDataCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: SetClipboardDataFailCallback
        /** 接口调用成功的回调函数 */
        success?: SetClipboardDataSuccessCallback
    }
    interface SetDeviceOrientationOption {
        /** 表示切换为横屏还是竖屏
         *
         * 可选值：
         * - 'landscape': 横屏;
         * - 'portrait': 竖屏; */
        value: 'landscape' | 'portrait'
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetDeviceOrientationCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: SetDeviceOrientationFailCallback
        /** 接口调用成功的回调函数 */
        success?: SetDeviceOrientationSuccessCallback
    }
    interface SetEnableDebugOption {
        /** 是否打开调试 */
        enableDebug: boolean
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetEnableDebugCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: SetEnableDebugFailCallback
        /** 接口调用成功的回调函数 */
        success?: SetEnableDebugSuccessCallback
    }
    interface SetInnerAudioOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetInnerAudioOptionCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: SetInnerAudioOptionFailCallback
        /** 是否与其他音频混播，设置为 true 之后，不会终止其他应用或微信内的音乐 */
        mixWithOther?: boolean
        /** （仅在 iOS 生效）是否遵循静音开关，设置为 false 之后，即使是在静音模式下，也能播放声音 */
        obeyMuteSwitch?: boolean
        /** true 代表用扬声器播放，false 代表听筒播放，默认值为 true。 */
        speakerOn?: boolean
        /** 接口调用成功的回调函数 */
        success?: SetInnerAudioOptionSuccessCallback
    }
    interface SetKeepScreenOnOption {
        /** 是否保持屏幕常亮 */
        keepScreenOn: boolean
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetKeepScreenOnCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: SetKeepScreenOnFailCallback
        /** 接口调用成功的回调函数 */
        success?: SetKeepScreenOnSuccessCallback
    }
    interface SetMenuStyleOption {
        /** 样式风格
         *
         * 可选值：
         * - 'light': 浅色;
         * - 'dark': 深色; */
        style: 'light' | 'dark'
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetMenuStyleCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: SetMenuStyleFailCallback
        /** 接口调用成功的回调函数 */
        success?: SetMenuStyleSuccessCallback
    }
    interface SetMessageToFriendQueryOption {
        /** 需要传递的字符串数据，长度需要在 128 之内 */
        query: string
        /** 需要传递的代表场景的数字，需要在 0 - 50 之间 */
        shareMessageToFriendScene: number
    }
    interface SetScreenBrightnessOption {
        /** 屏幕亮度值，范围 0 ~ 1，0 最暗，1 最亮。在安卓端支持传入特殊值 -1，表示屏幕亮度跟随系统变化 */
        value: number
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetScreenBrightnessCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: SetScreenBrightnessFailCallback
        /** 接口调用成功的回调函数 */
        success?: SetScreenBrightnessSuccessCallback
    }
    interface SetStateOption {
        /** 该玩家的自定义状态信息，长度限制为 256 个字符 */
        userState: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetStateCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: SetStateFailCallback
        /** 接口调用成功的回调函数 */
        success?: SetStateSuccessCallback
    }
    interface SetStatusBarStyleOption {
        /** 样式风格
         *
         * 可选值：
         * - 'white': 白色;
         * - 'black': 浅色; */
        style: 'white' | 'black'
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetStatusBarStyleCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: SetStatusBarStyleFailCallback
        /** 接口调用成功的回调函数 */
        success?: SetStatusBarStyleSuccessCallback
    }
    interface SetStorageOption<T = any> {
        /** 需要存储的内容。只支持原生类型、Date、及能够通过`JSON.stringify`序列化的对象。 */
        data: T
        /** 本地缓存中指定的 key */
        key: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetStorageCompleteCallback
        /** 需要基础库： `2.21.3`
         *
         * 是否开启加密存储。只有异步的 setStorage 接口支持开启加密存储。开启后，将会对 data 使用 AES128 加密，接口回调耗时将会增加。若开启加密存储，setStorage 和 getStorage 需要同时声明 encrypt 的值为 true。此外，由于加密后的数据会比原始数据膨胀1.4倍，因此开启 encrypt 的情况下，单个 key 允许存储的最大数据长度为 0.7MB，所有数据存储上限为 7.1MB */
        encrypt?: boolean
        /** 接口调用失败的回调函数 */
        fail?: SetStorageFailCallback
        /** 接口调用成功的回调函数 */
        success?: SetStorageSuccessCallback
    }
    interface SetUserCloudStorageOption {
        /** 要修改的 KV 数据列表 */
        KVDataList: KVData[]
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetUserCloudStorageCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: SetUserCloudStorageFailCallback
        /** 接口调用成功的回调函数 */
        success?: SetUserCloudStorageSuccessCallback
    }
    interface SetVisualEffectOnCaptureOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetVisualEffectOnCaptureCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: SetVisualEffectOnCaptureFailCallback
        /** 接口调用成功的回调函数 */
        success?: SetVisualEffectOnCaptureSuccessCallback
        /** 截屏/录屏时的表现，仅支持 none / hidden，传入 hidden 则表示在截屏/录屏时隐藏屏幕 */
        visualEffect?: string
    }
    interface SetWindowSizeOption {
        /** 窗口高度，以像素为单位 */
        height: number
        /** 窗口宽度，以像素为单位 */
        width: number
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetWindowSizeCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: SetWindowSizeFailCallback
        /** 接口调用成功的回调函数 */
        success?: SetWindowSizeSuccessCallback
    }
    /** 对局回放的分享参数。 */
    interface Share {
        /** 对局回放的剪辑区间，是一个二维数组，单位 ms（毫秒）。[[1000, 3000], [4000, 5000]] 表示剪辑已录制对局回放的 1-3 秒和 4-5 秒最终合成为一个 3 秒的对局回放。对局回放剪辑后的总时长最多 60 秒，即 1 分钟。 */
        timeRange: number[][]
        /** 需要基础库： `2.9.2`
         *
         * 对局回放的播放速率，只能设置以下几个值：0.3，0.5，1，1.5，2，2.5，3。其中1表示原速播放，小于1表示减速播放，大于1表示加速播放。 */
        atempo?: number
        /** 需要基础库： `2.10.0`
         *
         * 如果原始视频文件中有音频，是否与新传入的bgm混音，默认为false，表示不混音，只保留一个音轨，值为true时表示原始音频与传入的bgm混音。 */
        audioMix?: boolean
        /** 对局回放背景音乐的地址。必须是一个代码包文件路径或者 wxfile:// 文件路径，不支持 http/https 开头的 url。 */
        bgm?: string
        /** 需要基础库： `2.13.2`
         *
         * 分享的对局回放打开后跳转小游戏的 path （独立分包路径）。详见 [小游戏独立分包指南](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/independent-sub-packages.html) */
        path?: string
        /** 分享的对局回放打开后跳转小游戏的 query。 */
        query?: string
        /** 需要基础库： `2.9.2`
         *
         * 对局回放的音量大小，最小 0，最大 1。 */
        volume?: number
    }
    interface ShareAppMessageOption {
        /** 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4 */
        imageUrl?: string
        /** 需要基础库： `2.4.3`
         *
         * 审核通过的图片编号，详见 [使用审核通过的转发图片](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/share/share.html#使用审核通过的转发图片) */
        imageUrlId?: string
        /** 需要基础库： `2.12.2`
         *
         * 独立分包路径。详见 [小游戏独立分包指南](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/independent-sub-packages.html) */
        path?: string
        /** 查询字符串，从这条转发消息进入后，可通过 wx.getLaunchOptionsSync() 或 wx.onShow() 获取启动参数中的 query。必须是 key1=val1&key2=val2 的格式。 */
        query?: string
        /** 转发标题，不传则默认使用当前小游戏的昵称。 */
        title?: string
        /** 需要基础库： `2.12.2`
         *
         * 是否转发到当前群。该参数只对从群工具栏打开的场景下生效，默认转发到当前群，填入false时可转发到其他会话。 */
        toCurrentGroup?: boolean
    }
    interface ShareMessageToFriendOption {
        /** 发送对象的 openId */
        openId: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShareMessageToFriendCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ShareMessageToFriendFailCallback
        /** 转发显示图片的链接，可使用本地图片文件路径或相对代码包根目录的图片文件路径，不可使用网络图片。如需使用网络图片，可先在游戏域调用 wx.downloadFile 下载到本地后，调用 OpenDataContext.postMessage 发送本地图片路径到开放数据域使用。显示图片长宽比是 5:4 */
        imageUrl?: string
        /** 审核通过的图片编号，详见 [使用审核通过的转发图片](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/share/share.html#使用审核通过的转发图片) */
        imageUrlId?: string
        /** 接口调用成功的回调函数 */
        success?: ShareMessageToFriendSuccessCallback
        /** 转发标题，不传则默认使用当前小游戏的昵称。 */
        title?: string
    }
    /** 对局回放的分享参数。 */
    interface ShareOption {
        /** 对局回放背景音乐的地址。必须是一个代码包文件路径或者 wxfile:// 文件路径，不支持 http/https 开头的 url。 */
        bgm: string
        /** 对局回放的剪辑区间，是一个二维数组，单位 ms（毫秒）。[[1000, 3000], [4000, 5000]] 表示剪辑已录制对局回放的 1-3 秒和 4-5 秒最终合成为一个 3 秒的对局回放。对局回放剪辑后的总时长最多 60 秒，即 1 分钟。 */
        timeRange: number[][]
        /** 需要基础库： `2.9.2`
         *
         * 对局回放的播放速率，只能设置以下几个值：0.3，0.5，1，1.5，2，2.5，3。其中1表示原速播放，小于1表示减速播放，大于1表示加速播放。 */
        atempo?: number
        /** 需要基础库： `2.10.0`
         *
         * 如果原始视频文件中有音频，是否与新传入的bgm混音，默认为false，表示不混音，只保留一个音轨，值为true时表示原始音频与传入的bgm混音。 */
        audioMix?: boolean
        /** 需要基础库： `2.13.2`
         *
         * 分享的对局回放打开后跳转小游戏的 path （独立分包路径）。详见 [小游戏独立分包指南](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/independent-sub-packages.html) */
        path?: string
        /** 分享的对局回放打开后跳转小游戏的 query。 */
        query?: string
        /** 需要基础库： `2.9.2`
         *
         * 对局回放的音量大小，最小 0，最大 1。 */
        volume?: number
    }
    /** 需要基础库： `3.2.1`
     *
     * 鞋部检测配置。用法详情[指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/shoe.html)。 */
    interface ShoeTrack {
        /** 需要基础库： `3.2.1`
         *
         * 鞋部检测模式
         *
         * 可选值：
         * - 1: 通过摄像头实时检测; */
        mode: 1
    }
    interface ShowActionSheetOption {
        /** 按钮的文字数组，数组长度最大为 6 */
        itemList: string[]
        /** 需要基础库： `2.14.0`
         *
         * 警示文案 */
        alertText?: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShowActionSheetCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ShowActionSheetFailCallback
        /** 按钮的文字颜色 */
        itemColor?: string
        /** 接口调用成功的回调函数 */
        success?: ShowActionSheetSuccessCallback
    }
    interface ShowActionSheetSuccessCallbackResult {
        /** 用户点击的按钮序号，从上到下的顺序，从0开始 */
        tapIndex: number
        errMsg: string
    }
    interface ShowKeyboardOption {
        /** 当点击完成时键盘是否保持显示 */
        confirmHold: boolean
        /** 键盘右下角 confirm 按钮的类型，只影响按钮的文本内容
         *
         * 可选值：
         * - 'done': 完成;
         * - 'next': 下一个;
         * - 'search': 搜索;
         * - 'go': 前往;
         * - 'send': 发送; */
        confirmType: 'done' | 'next' | 'search' | 'go' | 'send'
        /** 键盘输入框显示的默认值 */
        defaultValue: string
        /** 键盘中文本的最大长度 */
        maxLength: number
        /** 是否为多行输入 */
        multiple: boolean
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShowKeyboardCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ShowKeyboardFailCallback
        /** 接口调用成功的回调函数 */
        success?: ShowKeyboardSuccessCallback
    }
    interface ShowLoadingOption {
        /** 提示的内容 */
        title: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShowLoadingCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ShowLoadingFailCallback
        /** 是否显示透明蒙层，防止触摸穿透 */
        mask?: boolean
        /** 接口调用成功的回调函数 */
        success?: ShowLoadingSuccessCallback
    }
    interface ShowModalOption {
        /** 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串 */
        cancelColor?: string
        /** 取消按钮的文字，最多 4 个字符 */
        cancelText?: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShowModalCompleteCallback
        /** 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串 */
        confirmColor?: string
        /** 确认按钮的文字，最多 4 个字符 */
        confirmText?: string
        /** 提示的内容 */
        content?: string
        /** 需要基础库： `2.17.1`
         *
         * 是否显示输入框 */
        editable?: boolean
        /** 接口调用失败的回调函数 */
        fail?: ShowModalFailCallback
        /** 需要基础库： `2.17.1`
         *
         * 显示输入框时的提示文本 */
        placeholderText?: string
        /** 是否显示取消按钮 */
        showCancel?: boolean
        /** 接口调用成功的回调函数 */
        success?: ShowModalSuccessCallback
        /** 提示的标题 */
        title?: string
    }
    interface ShowModalSuccessCallbackResult {
        /** 需要基础库： `1.1.0`
         *
         * 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭） */
        cancel: boolean
        /** 为 true 时，表示用户点击了确定按钮 */
        confirm: boolean
        /** editable 为 true 时，用户输入的文本 */
        content: string
        errMsg: string
    }
    /** 选填，如果已经执行 `.load({ ... })` 无需填写，也允许使用 `.show({ ... })` 连贯执行 */
    interface ShowOption {
        /** 从不同渠道获得的OPENLINK字符串 */
        openlink?: string
        /** 选填，部分活动、功能允许接收自定义query参数，请参阅渠道说明，默认可不填 */
        query?: IAnyObject
    }
    interface ShowShareImageMenuOption {
        /** 要分享的图片地址，必须为本地路径或临时路径 */
        path: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShowShareImageMenuCompleteCallback
        /** 需要基础库： `3.2.0`
         *
         * 从消息小程序入口打开小程序的路径，如果当前页面允许分享给朋友，则默认为当前页面路径，否则默认为小程序首页 */
        entrancePath?: string
        /** 接口调用失败的回调函数 */
        fail?: ShowShareImageMenuFailCallback
        /** 需要基础库： `3.2.0`
         *
         * 分享的图片消息是否要带小程序入口 (仅部分小程序类目可用) */
        needShowEntrance?: boolean
        /** 接口调用成功的回调函数 */
        success?: ShowShareImageMenuSuccessCallback
    }
    interface ShowShareMenuOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShowShareMenuCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ShowShareMenuFailCallback
        /** 需要基础库： `2.11.3`
         *
         * 本接口为 Beta 版本，暂只在 Android 平台支持。需要显示的转发按钮名称列表，默认['shareAppMessage']。按钮名称合法值包含 "shareAppMessage"、"shareTimeline" 两种 */
        menus?: string[]
        /** 接口调用成功的回调函数 */
        success?: ShowShareMenuSuccessCallback
        /** 是否使用带 shareTicket 的转发[详情](#) */
        withShareTicket?: boolean
    }
    interface ShowToastOption {
        /** 提示的内容 */
        title: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShowToastCompleteCallback
        /** 提示的延迟时间 */
        duration?: number
        /** 接口调用失败的回调函数 */
        fail?: ShowToastFailCallback
        /** 图标
         *
         * 可选值：
         * - 'success': 显示成功图标，此时 title 文本最多显示 7 个汉字长度;
         * - 'error': 显示失败图标，此时 title 文本最多显示 7 个汉字长度;
         * - 'loading': 显示加载图标，此时 title 文本最多显示 7 个汉字长度;
         * - 'none': 不显示图标，此时 title 文本最多可显示两行，[1.9.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)及以上版本支持; */
        icon?: 'success' | 'error' | 'loading' | 'none'
        /** 需要基础库： `1.1.0`
         *
         * 自定义图标的本地路径，image 的优先级高于 icon */
        image?: string
        /** 是否显示透明蒙层，防止触摸穿透 */
        mask?: boolean
        /** 接口调用成功的回调函数 */
        success?: ShowToastSuccessCallback
    }
    /** <b>支付原串</b>
     *
     * 具体支付参数见下面的signData，需要将数据以json格式传递
     *
     * signData例子:
     *
     * '{"mode":"goods","offerId":"123","buyQuantity":1,"env":0,"currencyType":"CNY","platform":"android","zoneId":"1","productId":"testproductId","goodsPrice":10,"outTradeNo":"xxxxxx","attach":"testdata"}' */
    interface SignData1 {
        /** <b>购买数量</b> */
        buyQuantity: number
        /** <b>币种</b>
         *
         * 可选值：
         * - 'CNY': 人民币; */
        currencyType: 'CNY'
        /** <b>道具单价（分）</b>
         *
         * 用来校验价格与后台道具价格是否一致，避免用户在业务商城页看到的价格与实际价格不一致导致投诉 */
        goodsPrice: number
        /** <b>支付的类型</b>
         *
         * 不同的支付类型有各自额外要传的附加参数 */
        mode: string
        /** <b>在米大师侧申请的应用id</b>
         *
         * mp-支付基础配置中的offerid */
        offerId: string
        /** <b>业务订单号</b>
         *
         * 每个订单号只能使用一次，重复使用会失败（极端情况不保证唯一，不建议业务强依赖唯一性）。
         *
         * 要求32个字符内，只能是数字、大小写字母、符号 _-|*@组成，不能以下划线(_)开头。
         *
         * 若没有传入，则平台会自动填充一个，并以下划线开头。 */
        outTradeNo: string
        /** <b>道具ID</b> */
        productId: string
        /** <b>透传数据</b>
         *
         * 发货通知时会透传给开发者 */
        attach?: string
        /** <b>环境配置</b>
         *
         * 可选值：
         * - 0: 米大师正式环境;
         * - 1: 米大师沙箱环境; */
        env?: 0 | 1
        /** <b>平台</b>
         *
         * 可选值：
         * - 'android': 安卓; */
        platform?: 'android'
        /** <b>分区ID</b> */
        zoneId?: string
    }
    /** 需要基础库： `2.10.4`
     *
     * 网络请求过程中一些调试信息 */
    interface SocketProfile {
        /** 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间。注意这里握手结束，包括安全连接建立完成、SOCKS 授权通过 */
        connectEnd: number
        /** 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间 */
        connectStart: number
        /** 上层请求到返回的耗时 */
        cost: number
        /** DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
        domainLookUpEnd: number
        /** DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
        domainLookUpStart: number
        /** 组件准备好使用 SOCKET 建立请求的时间，这发生在检查本地缓存之前 */
        fetchStart: number
        /** 握手耗时 */
        handshakeCost: number
        /** 单次连接的耗时，包括 connect ，tls */
        rtt: number
    }
    interface SocketTaskCloseOption {
        /** 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。 */
        code?: number
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SocketTaskCloseCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: SocketTaskCloseFailCallback
        /** 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。 */
        reason?: string
        /** 接口调用成功的回调函数 */
        success?: SocketTaskCloseSuccessCallback
    }
    interface SocketTaskOnCloseListenerResult {
        /** 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。 */
        code: number
        /** 一个可读的字符串，表示连接被关闭的原因。 */
        reason: string
    }
    interface SocketTaskOnMessageListenerResult {
        /** 服务器返回的消息 */
        data: string | ArrayBuffer
    }
    interface SocketTaskSendOption {
        /** 需要发送的内容 */
        data: string | ArrayBuffer
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SendCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: SendFailCallback
        /** 接口调用成功的回调函数 */
        success?: SendSuccessCallback
    }
    interface StartAccelerometerOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartAccelerometerCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StartAccelerometerFailCallback
        /** 需要基础库： `2.1.0`
         *
         * 监听加速度数据回调函数的执行频率
         *
         * 可选值：
         * - 'game': 适用于更新游戏的回调频率，在 20ms/次 左右;
         * - 'ui': 适用于更新 UI 的回调频率，在 60ms/次 左右;
         * - 'normal': 普通的回调频率，在 200ms/次 左右; */
        interval?: 'game' | 'ui' | 'normal'
        /** 接口调用成功的回调函数 */
        success?: StartAccelerometerSuccessCallback
    }
    interface StartAdvertisingObject {
        /** 广播自定义参数 */
        advertiseRequest: AdvertiseReqObj
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartAdvertisingCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StartAdvertisingFailCallback
        /** 广播功率
         *
         * 可选值：
         * - 'low': 功率低;
         * - 'medium': 功率适中;
         * - 'high': 功率高; */
        powerLevel?: 'low' | 'medium' | 'high'
        /** 接口调用成功的回调函数 */
        success?: StartAdvertisingSuccessCallback
    }
    interface StartBeaconDiscoveryOption {
        /** Beacon 设备广播的 UUID 列表 */
        uuids: string[]
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartBeaconDiscoveryCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StartBeaconDiscoveryFailCallback
        /** 是否校验蓝牙开关，仅在 iOS 下有效。iOS 11 起，控制面板里关掉蓝牙，还是能继续使用 Beacon 服务。 */
        ignoreBluetoothAvailable?: boolean
        /** 接口调用成功的回调函数 */
        success?: StartBeaconDiscoverySuccessCallback
    }
    interface StartBluetoothDevicesDiscoveryOption {
        /** 是否允许重复上报同一设备。如果允许重复上报，则 [wx.onBlueToothDeviceFound](#) 方法会多次上报同一设备，但是 RSSI 值会有不同。 */
        allowDuplicatesKey?: boolean
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartBluetoothDevicesDiscoveryCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StartBluetoothDevicesDiscoveryFailCallback
        /** 上报设备的间隔，单位 ms。0 表示找到新设备立即上报，其他数值根据传入的间隔上报。 */
        interval?: number
        /** 扫描模式，越高扫描越快，也越耗电。仅安卓微信客户端 7.0.12 及以上支持。
         *
         * 可选值：
         * - 'low': 低;
         * - 'medium': 中;
         * - 'high': 高; */
        powerLevel?: 'low' | 'medium' | 'high'
        /** 要搜索的蓝牙设备主服务的 UUID 列表（支持 16/32/128 位 UUID）。某些蓝牙设备会广播自己的主 service 的 UUID。如果设置此参数，则只搜索广播包有对应 UUID 的主服务的蓝牙设备。建议通过该参数过滤掉周边不需要处理的其他蓝牙设备。 */
        services?: string[]
        /** 接口调用成功的回调函数 */
        success?: StartBluetoothDevicesDiscoverySuccessCallback
    }
    interface StartCompassOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartCompassCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StartCompassFailCallback
        /** 接口调用成功的回调函数 */
        success?: StartCompassSuccessCallback
    }
    interface StartDeviceMotionListeningOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartDeviceMotionListeningCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StartDeviceMotionListeningFailCallback
        /** 监听设备方向的变化回调函数的执行频率
         *
         * 可选值：
         * - 'game': 适用于更新游戏的回调频率，在 20ms/次 左右;
         * - 'ui': 适用于更新 UI 的回调频率，在 60ms/次 左右;
         * - 'normal': 普通的回调频率，在 200ms/次 左右; */
        interval?: 'game' | 'ui' | 'normal'
        /** 接口调用成功的回调函数 */
        success?: StartDeviceMotionListeningSuccessCallback
    }
    interface StartGameOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartGameCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StartGameFailCallback
        /** 接口调用成功的回调函数 */
        success?: StartGameSuccessCallback
    }
    interface StartGyroscopeOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartGyroscopeCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StartGyroscopeFailCallback
        /** 监听陀螺仪数据回调函数的执行频率
         *
         * 可选值：
         * - 'game': 适用于更新游戏的回调频率，在 20ms/次 左右;
         * - 'ui': 适用于更新 UI 的回调频率，在 60ms/次 左右;
         * - 'normal': 普通的回调频率，在 200ms/次 左右; */
        interval?: 'game' | 'ui' | 'normal'
        /** 接口调用成功的回调函数 */
        success?: StartGyroscopeSuccessCallback
    }
    interface StartHandoffOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartHandoffCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StartHandoffFailCallback
        /** 接口调用成功的回调函数 */
        success?: StartHandoffSuccessCallback
    }
    interface StartMatchOption {
        /** 通过后台接口申请的matchId */
        matchId: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartMatchCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StartMatchFailCallback
        /** 补充类型，0:自动补充队友 1:不补充队友 */
        fillType?: number
        /** 接口调用成功的回调函数 */
        success?: StartMatchSuccessCallback
    }
    interface StartStateServiceOption {
        /** 该玩家的自定义状态信息，长度限制为 256 个字符 */
        userState: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartStateServiceCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StartStateServiceFailCallback
        /** 接口调用成功的回调函数 */
        success?: StartStateServiceSuccessCallback
    }
    interface StatOption {
        /** 文件/目录路径 (本地路径) */
        path: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StatCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StatFailCallback
        /** 需要基础库： `2.3.0`
         *
         * 是否递归获取目录下的每个文件的 Stats 信息 */
        recursive?: boolean
        /** 接口调用成功的回调函数 */
        success?: StatSuccessCallback
    }
    interface StatSuccessCallbackResult {
        /** [Stats](https://developers.weixin.qq.com/minigame/dev/api/file/Stats.html)|Array.&lt;[FileStats](https://developers.weixin.qq.com/minigame/dev/api/file/FileStats.html)&gt;
         *
         * 当 recursive 为 false 时，res.stats 是一个 Stats 对象。当 recursive 为 true 且 path 是一个目录的路径时，res.stats 是一个 Array，数组的每一项是一个对象，每个对象包含 path 和 stats。 */
        stats: Stats | FileStats[]
        errMsg: string
    }
    /** 好友状态信息列表 */
    interface StateData {
        /** 好友头像 */
        avatarUrl: string
        /** 好友性别 0未设置 1男 2女 */
        gender: number
        /** 好友昵称 */
        nickName: string
        /** 好友 openId */
        openId: string
        /** 系统状态，0 掉线 1 在线 */
        sysState: number
        /** 该玩家的自定义状态信息，通过 `GameServerManager.setState` 接口设置 */
        userState: string
    }
    /** 描述文件状态的对象 */
    interface Stats {
        /** 文件最近一次被存取或被执行的时间，UNIX 时间戳，对应 POSIX stat.st_atime */
        lastAccessedTime: number
        /** 文件最后一次被修改的时间，UNIX 时间戳，对应 POSIX stat.st_mtime */
        lastModifiedTime: number
        /** 文件的类型和存取的权限，对应 POSIX stat.st_mode */
        mode: number
        /** 文件大小，单位：B，对应 POSIX stat.st_size */
        size: number
        /** [boolean Stats.isDirectory()](https://developers.weixin.qq.com/minigame/dev/api/file/Stats.isDirectory.html)
         *
         * 判断当前文件是否一个目录 */
        isDirectory(): boolean
        /** [boolean Stats.isFile()](https://developers.weixin.qq.com/minigame/dev/api/file/Stats.isFile.html)
         *
         * 判断当前文件是否一个普通文件 */
        isFile(): boolean
    }
    interface StopAccelerometerOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopAccelerometerCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StopAccelerometerFailCallback
        /** 接口调用成功的回调函数 */
        success?: StopAccelerometerSuccessCallback
    }
    interface StopAdvertisingOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopAdvertisingCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StopAdvertisingFailCallback
        /** 接口调用成功的回调函数 */
        success?: StopAdvertisingSuccessCallback
    }
    interface StopBeaconDiscoveryOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopBeaconDiscoveryCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StopBeaconDiscoveryFailCallback
        /** 接口调用成功的回调函数 */
        success?: StopBeaconDiscoverySuccessCallback
    }
    interface StopBluetoothDevicesDiscoveryOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopBluetoothDevicesDiscoveryCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StopBluetoothDevicesDiscoveryFailCallback
        /** 接口调用成功的回调函数 */
        success?: StopBluetoothDevicesDiscoverySuccessCallback
    }
    interface StopCompassOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopCompassCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StopCompassFailCallback
        /** 接口调用成功的回调函数 */
        success?: StopCompassSuccessCallback
    }
    interface StopDeviceMotionListeningOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopDeviceMotionListeningCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StopDeviceMotionListeningFailCallback
        /** 接口调用成功的回调函数 */
        success?: StopDeviceMotionListeningSuccessCallback
    }
    interface StopFaceDetectOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopFaceDetectCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StopFaceDetectFailCallback
        /** 接口调用成功的回调函数 */
        success?: StopFaceDetectSuccessCallback
    }
    interface StopGyroscopeOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopGyroscopeCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StopGyroscopeFailCallback
        /** 接口调用成功的回调函数 */
        success?: StopGyroscopeSuccessCallback
    }
    /** 订阅消息设置
*
* **示例代码**
*
* ```javascript
wx.getSetting({
  withSubscriptions: true,
  success (res) {
    console.log(res.authSetting)
    // res.authSetting = {
    //   "scope.userInfo": true,
    //   "scope.userLocation": true
    // }
    console.log(res.subscriptionsSetting)
    // res.subscriptionsSetting = {
    //   mainSwitch: true, // 订阅消息总开关
    //   itemSettings: {   // 每一项开关
    //     SYS_MSG_TYPE_INTERACTIVE: 'accept', // 小游戏系统订阅消息
    //     SYS_MSG_TYPE_RANK: 'accept'
    //     zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE: 'reject', // 普通一次性订阅消息
    //     ke_OZC_66gZxALLcsuI7ilCJSP2OJ2vWo2ooUPpkWrw: 'ban',
    //   }
    // }
  }
})
``` */
    interface SubscriptionsSetting {
        /** 订阅消息总开关，true为开启，false为关闭 */
        mainSwitch: boolean
        /** 每一项订阅消息的订阅状态。itemSettings对象的键为**一次性订阅消息的模板id**或**系统订阅消息的类型**，值为'accept'、'reject'、'ban'中的其中一种。'accept'表示用户同意订阅这条消息，'reject'表示用户拒绝订阅这条消息，'ban'表示已被后台封禁。一次性订阅消息使用方法详见 [wx.requestSubscribeMessage](https://developers.weixin.qq.com/minigame/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html)，永久订阅消息（仅小游戏可用）使用方法详见[wx.requestSubscribeSystemMessage](https://developers.weixin.qq.com/minigame/dev/api/open-api/subscribe-message/wx.requestSubscribeSystemMessage.html)
         * ## 注意事项
         *  - itemSettings 只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。 */
        itemSettings?: IAnyObject
    }
    interface SystemInfo {
        /** 需要基础库： `1.1.0`
         *
         * 客户端基础库版本 */
        SDKVersion: string
        /** 需要基础库： `2.6.0`
         *
         * 允许微信使用相册的开关（仅 iOS 有效） */
        albumAuthorized: boolean
        /** 需要基础库： `1.8.0`
         *
         * 设备性能等级（仅 Android）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好）<br> 注意：性能等级当前仅反馈真机机型，暂不支持 IDE 模拟器机型 */
        benchmarkLevel: number
        /** 需要基础库： `2.6.0`
         *
         * 蓝牙的系统开关 */
        bluetoothEnabled: boolean
        /** 需要基础库： `1.5.0`
         *
         * 设备品牌 */
        brand: string
        /** 需要基础库： `2.6.0`
         *
         * 允许微信使用摄像头的开关 */
        cameraAuthorized: boolean
        /** 设备方向（注意：IOS客户端横屏游戏获取deviceOrientation可能不准，建议以屏幕宽高为准）
         *
         * 可选值：
         * - 'portrait': 竖屏;
         * - 'landscape': 横屏; */
        deviceOrientation: 'portrait' | 'landscape'
        /** 需要基础库： `2.15.0`
         *
         * 是否已打开调试。可通过右上角菜单或 [wx.setEnableDebug](https://developers.weixin.qq.com/minigame/dev/api/base/debug/wx.setEnableDebug.html) 打开调试。 */
        enableDebug: boolean
        /** 需要基础库： `1.5.0`
         *
         * 用户字体大小（单位px）。以微信客户端「我-设置-通用-字体大小」中的设置为准 */
        fontSizeSetting: number
        /** 需要基础库： `2.12.3`
         *
         * 当前小程序运行的宿主环境 */
        host: SystemInfoHost
        /** 微信设置的语言 */
        language: string
        /** 需要基础库： `2.6.0`
         *
         * 允许微信使用定位的开关 */
        locationAuthorized: boolean
        /** 需要基础库： `2.6.0`
         *
         * 地理位置的系统开关 */
        locationEnabled: boolean
        /** `true` 表示模糊定位，`false` 表示精确定位，仅 iOS 支持 */
        locationReducedAccuracy: boolean
        /** 需要基础库： `2.6.0`
         *
         * 允许微信使用麦克风的开关 */
        microphoneAuthorized: boolean
        /** 设备型号。新机型刚推出一段时间会显示unknown，微信会尽快进行适配。 */
        model: string
        /** 需要基础库： `2.6.0`
         *
         * 允许微信通知带有提醒的开关（仅 iOS 有效） */
        notificationAlertAuthorized: boolean
        /** 需要基础库： `2.6.0`
         *
         * 允许微信通知的开关 */
        notificationAuthorized: boolean
        /** 需要基础库： `2.6.0`
         *
         * 允许微信通知带有标记的开关（仅 iOS 有效） */
        notificationBadgeAuthorized: boolean
        /** 需要基础库： `2.6.0`
         *
         * 允许微信通知带有声音的开关（仅 iOS 有效） */
        notificationSoundAuthorized: boolean
        /** 需要基础库： `2.19.3`
         *
         * 允许微信使用日历的开关 */
        phoneCalendarAuthorized: boolean
        /** 设备像素比 */
        pixelRatio: number
        /** 客户端平台
         *
         * 可选值：
         * - 'ios': iOS微信（包含 iPhone、iPad）;
         * - 'android': Android微信;
         * - 'ohos': HarmonyOS微信;
         * - 'windows': Windows微信;
         * - 'mac': macOS微信;
         * - 'devtools': 微信开发者工具; */
        platform: 'ios' | 'android' | 'ohos' | 'windows' | 'mac' | 'devtools'
        /** 需要基础库： `2.7.0`
         *
         * 在竖屏正方向下的安全区域。部分机型没有安全区域概念，也不会返回 safeArea 字段，开发者需自行兼容。 */
        safeArea: SafeArea
        /** 需要基础库： `1.1.0`
         *
         * 屏幕高度，单位px */
        screenHeight: number
        /** 需要基础库： `1.1.0`
         *
         * 屏幕宽度，单位px */
        screenWidth: number
        /** 需要基础库： `1.9.0`
         *
         * 状态栏的高度，单位px */
        statusBarHeight: number
        /** 操作系统及版本 */
        system: string
        /** 微信版本号 */
        version: string
        /** 需要基础库： `2.6.0`
         *
         * Wi-Fi 的系统开关 */
        wifiEnabled: boolean
        /** 可使用窗口高度，单位px */
        windowHeight: number
        /** 可使用窗口宽度，单位px */
        windowWidth: number
        /** 需要基础库： `2.11.0`
         *
         * 系统当前主题，取值为`light`或`dark`，全局配置`"darkmode":true`时才能获取，否则为 undefined （不支持小游戏）
         *
         * 可选值：
         * - 'dark': 深色主题;
         * - 'light': 浅色主题; */
        theme?: 'dark' | 'light'
    }
    /** 需要基础库： `2.12.3`
     *
     * 当前小程序运行的宿主环境 */
    interface SystemInfoHost {
        /** 宿主 app 对应的 appId */
        appId: string
    }
    interface SystemSetting {
        /** 蓝牙的系统开关 */
        bluetoothEnabled: boolean
        /** 设备方向（注意：IOS客户端横屏游戏获取deviceOrientation可能不准，建议以屏幕宽高为准）
         *
         * 可选值：
         * - 'portrait': 竖屏;
         * - 'landscape': 横屏; */
        deviceOrientation: 'portrait' | 'landscape'
        /** 地理位置的系统开关 */
        locationEnabled: boolean
        /** Wi-Fi 的系统开关 */
        wifiEnabled: boolean
    }
    /** 需要基础库： `3.4.0`
     *
     * 异常信息 */
    interface TCPExceptionReason {
        /** 错误原因 */
        errMsg: string
        /** 错误码 */
        errno: string
    }
    interface TCPSocketConnectOption {
        /** 套接字要连接的地址 */
        address: string
        /** 套接字要连接的端口 */
        port: number
        /** 需要基础库： `3.4.0`
         *
         * 是否开启 HttpDNS 服务。如开启，需要同时填入 httpDNSServiceId 。 HttpDNS 用法详见 [移动解析HttpDNS](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/HTTPDNS.html) */
        enableHttpDNS?: boolean
        /** 需要基础库： `3.4.0`
         *
         * HttpDNS 服务商 Id。 HttpDNS 用法详见 [移动解析HttpDNS](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/HTTPDNS.html) */
        httpDNSServiceId?: string
        /** 套接字要连接的超时时间，默认为 2s */
        timeout?: number
    }
    interface TCPSocketOnMessageListenerResult {
        /** 接收端地址信息 */
        localInfo: OnMessageListenerResultLocalInfo
        /** 收到的消息 */
        message: ArrayBuffer
        /** 发送端地址信息 */
        remoteInfo: TCPSocketOnMessageListenerResultRemoteInfo
    }
    /** 发送端地址信息 */
    interface TCPSocketOnMessageListenerResultRemoteInfo {
        /** 发送消息的 socket 的地址 */
        address: string
        /** 使用的协议族，为 IPv4 或者 IPv6 */
        family: string
        /** 端口号 */
        port: number
    }
    /** 需要基础库： `2.30.0`
*
* Tensor
*
* ****
*
* ```js
session.run({
  input1: {
    type: 'float32',
    data: new Float32Array(3 * 224 * 224).buffer,
    shape: [1, 3, 224, 224] // NCHW 顺序
  },
  input2: {
    type: 'uint8',
    data: new Uint8Array(224 * 224).buffer,
    shape: [1, 1, 224, 224]
  },
}).then(res => {
  console.log(res.output0)
  // output0 结构如下：
  // {
  //   type: 'uint8',
  //   data: new Uint8Array(224 * 224).buffer,
  //   shape: [1, 1, 224, 224]
  // }
})
``` */
    interface Tensor {
        /** Tensor 值，一段 ArrayBuffer */
        data: ArrayBuffer
        /** Tensor shape （Tensor 形状，例如 `[1, 3, 224, 224]` 即表示一个4唯Tensor，每个维度的长度分别为1, 3, 224, 224） */
        shape: number[]
        /** ArrayBuffer 值的类型，合法值有 `uint8`, `int8`, `uint32`, `int32`, `float32` */
        type: string
    }
    /** 需要基础库： `2.30.0`
*
* Tensors 是 key-value 形式的对象，对象的 key 会作为 input/output name，对象的 value 则是 Tensor。 Tensor 结构如下。
*
* ****
*
* ```js
session.run({
  input1: {
    type: 'float32',
    data: new Float32Array(3 * 224 * 224).buffer,
    shape: [1, 3, 224, 224] // NCHW 顺序
  },
  input2: {
    type: 'uint8',
    data: new Uint8Array(224 * 224).buffer,
    shape: [1, 1, 224, 224]
  },
}).then(res => {
  console.log(res.output0)
  // output0 结构如下：
  // {
  //   type: 'uint8',
  //   data: new Uint8Array(224 * 224).buffer,
  //   shape: [1, 1, 224, 224]
  // }
})
``` */
    interface Tensors {
        /** [Tensor](https://developers.weixin.qq.com/minigame/dev/api/ai/inference/Tensor.html)
         *
         * Tensor，每个 Tensor 包含 shape、data、type 字段。 */
        [key: string]: Tensor
    }
    interface ToTempFilePathOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ToTempFilePathCompleteCallback
        /** 目标文件的高度，会将截取的部分拉伸或压缩至该数值 */
        destHeight?: number
        /** 目标文件的宽度，会将截取的部分拉伸或压缩至该数值 */
        destWidth?: number
        /** 接口调用失败的回调函数 */
        fail?: ToTempFilePathFailCallback
        /** 目标文件的类型
         *
         * 可选值：
         * - 'jpg': jpg 文件;
         * - 'png': png 文件; */
        fileType?: 'jpg' | 'png'
        /** 截取 canvas 的高度 */
        height?: number
        /** jpg图片的质量，仅当 fileType 为 jpg 时有效。取值范围为 0.0（最低）- 1.0（最高），不含 0。不在范围内时当作 1.0 */
        quality?: number
        /** 接口调用成功的回调函数 */
        success?: ToTempFilePathSuccessCallback
        /** 截取 canvas 的宽度 */
        width?: number
        /** 截取 canvas 的左上角横坐标 */
        x?: number
        /** 截取 canvas 的左上角纵坐标 */
        y?: number
    }
    interface ToTempFilePathSuccessCallbackResult {
        /** canvas 生成的临时文件路径 (本地路径) */
        tempFilePath: string
        errMsg: string
    }
    interface ToTempFilePathSyncOption {
        /** 目标文件的高度，会将截取的部分拉伸或压缩至该数值 */
        destHeight?: number
        /** 目标文件的宽度，会将截取的部分拉伸或压缩至该数值 */
        destWidth?: number
        /** 目标文件的类型
         *
         * 可选值：
         * - 'jpg': jpg 文件;
         * - 'png': png 文件; */
        fileType?: 'jpg' | 'png'
        /** 截取 canvas 的高度 */
        height?: number
        /** jpg图片的质量，仅当 fileType 为 jpg 时有效。取值范围为 0.0（最低）- 1.0（最高），不含 0。不在范围内时当作 1.0 */
        quality?: number
        /** 截取 canvas 的宽度 */
        width?: number
        /** 截取 canvas 的左上角横坐标 */
        x?: number
        /** 截取 canvas 的左上角纵坐标 */
        y?: number
    }
    /** 在触控设备上的触摸点。通常是指手指或者触控笔在触屏设备或者触摸板上的操作。 */
    interface Touch {
        /** 触点相对于可见视区左边沿的 X 坐标。 */
        clientX: number
        /** 触点相对于可见视区上边沿的 Y 坐标。 */
        clientY: number
        /** 手指挤压触摸平面的压力大小, 从0.0(没有压力)到1.0(最大压力)的浮点数（仅在支持 force touch 的设备返回） */
        force: number
        /** Touch 对象的唯一标识符，只读属性。一次触摸动作(我们值的是手指的触摸)在平面上移动的整个过程中, 该标识符不变。可以根据它来判断跟踪的是否是同一次触摸过程。 */
        identifier: number
        /** 触点相对于页面左边沿的 X 坐标。 */
        pageX: number
        /** 触点相对于页面上边沿的 Y 坐标。 */
        pageY: number
    }
    /** 跟踪能力配置，目前不同的跟踪能力之间是互斥的，默认使用平面跟踪能力。需要注意目前 track 中不同的跟踪配置存在互斥关系（比如 marker 跟踪配置和 OSD 跟踪配置不能同时存在），请按需配置。 */
    interface Track {
        /** 平面跟踪配置 */
        plane: PlaneTrack
        /** 需要基础库： `3.3.0`
         *
         * 身份证检测配置。用法详情[指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/idcard.html)。 */
        IDCard?: IDCardTrack
        /** 需要基础库： `2.27.0`
         *
         * OCR检测配置。用法详情[指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/ocr.html)。 */
        OCR?: OCRTrack
        /** 需要基础库： `2.24.5`
         *
         * OSD 跟踪配置 */
        OSD?: boolean
        /** 需要基础库： `2.28.0`
         *
         * 人体检测配置。用法详情[指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/body.html)。 */
        body?: BodyTrack
        /** 需要基础库： `3.0.0`
         *
         * 深度识别配置。用法详情[指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/depth.html)。 */
        depth?: DepthTrack
        /** 需要基础库： `2.25.0`
         *
         * 人脸检测配置。用法详情[指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/face.html)。安卓微信8.0.25开始支持，iOS微信8.0.24开始支持。 */
        face?: FaceTrack
        /** 需要基础库： `2.28.0`
         *
         * 手势检测配置。用法详情[指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/hand.html)。 */
        hand?: HandTrack
        /** 需要基础库： `2.24.5`
         *
         * marker 跟踪配置，基础库(3.0.0)开始允许同时支持v2的水平面检测能力 */
        marker?: boolean
        /** 需要基础库： `3.2.1`
         *
         * 鞋部检测配置。用法详情[指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/shoe.html)。 */
        shoe?: ShoeTrack
        /** 需要基础库： `2.28.0`
         *
         * 提供基础AR功能，输出相机旋转的3个自由度的位姿，利用手机陀螺仪传感器，实现快速稳定的AR定位能力，适用于简单AR场景。 */
        threeDof?: boolean
    }
    interface TruncateOption {
        /** 要截断的文件路径 (本地路径) */
        filePath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: TruncateCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: TruncateFailCallback
        /** 截断位置，默认0。如果 length 小于文件长度（字节），则只有前面 length 个字节会保留在文件中，其余内容会被删除；如果 length 大于文件长度，则会对其进行扩展，并且扩展部分将填充空字节（'\0'） */
        length?: number
        /** 接口调用成功的回调函数 */
        success?: TruncateSuccessCallback
    }
    interface TruncateSyncOption {
        /** 要截断的文件路径 (本地路径) */
        filePath: string
        /** 截断位置，默认0。如果 length 小于文件长度（字节），则只有前面 length 个字节会保留在文件中，其余内容会被删除；如果 length 大于文件长度，则会对其进行扩展，并且扩展部分将填充空字节（'\0'） */
        length?: number
    }
    interface UDPSocketConnectOption {
        /** 要发消息的地址 */
        address: string
        /** 要发送消息的端口号 */
        port: number
    }
    interface UDPSocketOnMessageListenerResult {
        /** 接收端地址信息，2.18.0 起支持 */
        localInfo: OnMessageListenerResultLocalInfo
        /** 收到的消息。消息长度需要小于4096。 */
        message: ArrayBuffer
        /** 发送端地址信息 */
        remoteInfo: UDPSocketOnMessageListenerResultRemoteInfo
    }
    /** 发送端地址信息 */
    interface UDPSocketOnMessageListenerResultRemoteInfo {
        /** 发送消息的 socket 的地址 */
        address: string
        /** 使用的协议族，为 IPv4 或者 IPv6 */
        family: string
        /** 端口号 */
        port: number
        /** message 的大小，单位：字节 */
        size: number
    }
    interface UDPSocketSendOption {
        /** 要发消息的地址。在基础库 <= 2.9.3 版本必须是和本机同网段的 IP 地址，或安全域名列表内的域名地址；之后版本可以是任意 IP 和域名 */
        address: string
        /** 要发送的数据 */
        message: string | ArrayBuffer
        /** 要发送消息的端口号 */
        port: number
        /** 发送数据的长度，仅当 message 为 ArrayBuffer 类型时有效 */
        length?: number
        /** 发送数据的偏移量，仅当 message 为 ArrayBuffer 类型时有效 */
        offset?: number
        /** 向指定地址发消息时，是否要开启广播，基础库 2.24.0 开始支持 */
        setBroadcast?: boolean
    }
    interface UnlinkOption {
        /** 要删除的文件路径 (本地路径) */
        filePath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: UnlinkCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: UnlinkFailCallback
        /** 接口调用成功的回调函数 */
        success?: UnlinkSuccessCallback
    }
    interface UnzipOption {
        /** 目标目录路径, 支持本地路径 */
        targetPath: string
        /** 源文件路径，支持本地路径, 只可以是 zip 压缩文件 */
        zipFilePath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: UnzipCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: UnzipFailCallback
        /** 接口调用成功的回调函数 */
        success?: UnzipSuccessCallback
    }
    /** 参数列表 */
    interface UpdatableMessageFrontEndParameter {
        /** 参数名 */
        name: string
        /** 参数值 */
        value: string
    }
    /** 需要基础库： `2.4.0`
     *
     * 动态消息的模板信息 */
    interface UpdatableMessageFrontEndTemplateInfo {
        /** 参数列表 */
        parameterList: UpdatableMessageFrontEndParameter[]
        /** 模板ID */
        templateId: string
    }
    interface Update3DModeOption {
        /** 是否开启三维识别 */
        open3d: boolean
    }
    interface UpdateKeyboardOption {
        /** 键盘输入框的当前值 */
        value: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: UpdateKeyboardCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: UpdateKeyboardFailCallback
        /** 接口调用成功的回调函数 */
        success?: UpdateKeyboardSuccessCallback
    }
    interface UpdateMaskModeOption {
        /** 设置是否开启试鞋，返回腿部遮挡纹理 */
        useMask: boolean
    }
    interface UpdateReadyStatusOption {
        /** 游戏房间访问凭证 */
        accessInfo: string
        /** 是否准备完成 */
        isReady: boolean
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: UpdateReadyStatusCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: UpdateReadyStatusFailCallback
        /** 接口调用成功的回调函数 */
        success?: UpdateReadyStatusSuccessCallback
    }
    interface UpdateShareMenuOption {
        /** 需要基础库： `2.4.0`
         *
         * 动态消息的 activityId。通过 [updatableMessage.createActivityId](https://developers.weixin.qq.com/minigame/dev/api-backend/open-api/updatable-message/updatableMessage.createActivityId.html) 接口获取 */
        activityId?: string
        /** 需要基础库： `3.7.8`
         *
         * 指定成员的方式 */
        chooseType?: number
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: UpdateShareMenuCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: UpdateShareMenuFailCallback
        /** 需要基础库： `2.13.0`
         *
         * 是否是私密消息。详见 [小程序私密消息](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/share/private-message.html) */
        isPrivateMessage?: boolean
        /** 需要基础库： `2.4.0`
         *
         * 是否是动态消息，详见[动态消息](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/share/updatable-message.html) */
        isUpdatableMessage?: boolean
        /** 参与用户此聊天室下的 group_openid 列表 */
        participant?: string[]
        /** 接口调用成功的回调函数 */
        success?: UpdateShareMenuSuccessCallback
        /** 需要基础库： `2.4.0`
         *
         * 动态消息的模板信息 */
        templateInfo?: UpdatableMessageFrontEndTemplateInfo
        /** 需要基础库： `2.11.0`
         *
         * 群待办消息的id，通过toDoActivityId可以把多个群待办消息聚合为同一个。通过 [updatableMessage.createActivityId](https://developers.weixin.qq.com/minigame/dev/api-backend/open-api/updatable-message/updatableMessage.createActivityId.html) 接口获取。详见[群待办消息](#) */
        toDoActivityId?: string
        /** 需要基础库： `3.7.8`
         *
         * 聊天工具模式特殊动态消息 */
        useForChatTool?: boolean
        /** 是否使用带 shareTicket 的转发[详情](#) */
        withShareTicket?: boolean
    }
    interface UpdateVoIPChatMuteConfigOption {
        /** 静音设置 */
        muteConfig: MuteConfig
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: UpdateVoIPChatMuteConfigCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: UpdateVoIPChatMuteConfigFailCallback
        /** 接口调用成功的回调函数 */
        success?: UpdateVoIPChatMuteConfigSuccessCallback
    }
    interface UpdateWeChatAppOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: UpdateWeChatAppCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: UpdateWeChatAppFailCallback
        /** 接口调用成功的回调函数 */
        success?: UpdateWeChatAppSuccessCallback
    }
    interface UploadFileOption {
        /** 要上传文件资源的路径 (本地路径) */
        filePath: string
        /** 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 */
        name: string
        /** 开发者服务器地址 */
        url: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: UploadFileCompleteCallback
        /** 需要基础库： `2.10.4`
         *
         * 是否开启 http2 */
        enableHttp2?: boolean
        /** 是否开启 profile，默认开启。开启后可在接口回调的 res.profile 中查看性能调试信息。目前仅 iOS 端支持。 */
        enableProfile?: boolean
        /** 需要基础库： `2.10.4`
         *
         * 是否开启 Quic/h3 协议（iOS 微信目前使用 gQUIC-Q43；Android 微信在 v8.0.54 前使用 gQUIC-Q43，v8.0.54 开始使用 IETF QUIC，即 h3 协议；PC微信使用 IETF QUIC，即 h3 协议） */
        enableQuic?: boolean
        /** 接口调用失败的回调函数 */
        fail?: UploadFileFailCallback
        /** HTTP 请求中其他额外的 form data */
        formData?: IAnyObject
        /** HTTP 请求 Header，Header 中不能设置 Referer */
        header?: IAnyObject
        /** 接口调用成功的回调函数 */
        success?: UploadFileSuccessCallback
        /** 需要基础库： `2.10.0`
         *
         * 超时时间，单位为毫秒 */
        timeout?: number
        /** 需要基础库： `3.4.1`
         *
         * 使用高性能模式，暂仅支持 Android，默认关闭。该模式下有更优的网络性能表现。 */
        useHighPerformanceMode?: boolean
    }
    interface UploadFileSuccessCallbackResult {
        /** 开发者服务器返回的数据 */
        data: string
        /** 开发者服务器返回的 HTTP 状态码 */
        statusCode: number
        errMsg: string
    }
    interface UploadFrameOption {
        /** 指令数组，每一项的类型必须与配置项 `lockStepOption.dataType` 一致 */
        actionList: string[] | ArrayBuffer[]
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: UploadFrameCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: UploadFrameFailCallback
        /** 接口调用成功的回调函数 */
        success?: UploadFrameSuccessCallback
    }
    interface UploadTaskOnProgressUpdateListenerResult {
        /** 上传进度百分比 */
        progress: number
        /** 预期需要上传的数据总长度，单位 Bytes */
        totalBytesExpectedToSend: number
        /** 已经上传的数据长度，单位 Bytes */
        totalBytesSent: number
    }
    /** 托管数据 */
    interface UserGameData {
        /** 用户的托管 KV 数据列表 */
        KVDataList: KVData[]
        /** 用户的微信头像 url */
        avatarUrl: string
        /** 用户的微信昵称 */
        nickname: string
        /** 用户的 openid */
        openid: string
    }
    /** @warning **用户头像昵称获取规则已调整，参考 [用户信息接口调整说明](https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801)、[小程序用户头像昵称获取规则调整公告](https://developers.weixin.qq.com/community/develop/doc/00022c683e8a80b29bed2142b56c01)**
     *
     * 用户信息 */
    interface UserInfo {
        /** 用户头像图片的 URL。URL 最后一个数值代表正方形头像大小（有 0、46、64、96、132 数值可选，0 代表 640x640 的正方形头像，46 表示 46x46 的正方形头像，剩余数值以此类推。默认132），用户没有头像时该项为空。若用户更换头像，原有头像 URL 将失效。 */
        avatarUrl: string
        /** 用户所在城市。不再返回，参考 [相关公告](https://developers.weixin.qq.com/community/develop/doc/00028edbe3c58081e7cc834705b801) */
        city: string
        /** 用户所在国家。不再返回，参考 [相关公告](https://developers.weixin.qq.com/community/develop/doc/00028edbe3c58081e7cc834705b801) */
        country: string
        /** 用户性别。不再返回，参考 [相关公告](https://developers.weixin.qq.com/community/develop/doc/00028edbe3c58081e7cc834705b801)
         *
         * 可选值：
         * - 0: 未知;
         * - 1: 男性;
         * - 2: 女性; */
        gender: 0 | 1 | 2
        /** 显示 country，province，city 所用的语言。强制返回 “zh_CN”，参考 [相关公告](https://developers.weixin.qq.com/community/develop/doc/00028edbe3c58081e7cc834705b801)
         *
         * 可选值：
         * - 'en': 英文;
         * - 'zh_CN': 简体中文;
         * - 'zh_TW': 繁体中文; */
        language: 'en' | 'zh_CN' | 'zh_TW'
        /** 用户昵称 */
        nickName: string
        /** 用户所在省份。不再返回，参考 [相关公告](https://developers.weixin.qq.com/community/develop/doc/00028edbe3c58081e7cc834705b801) */
        province: string
    }
    /** 用户信息按钮 */
    interface UserInfoButton {
        /** 按钮的样式 */
        style: OptionStyle
        /** 按钮的类型。
         *
         * 可选值：
         * - 'text': 可以设置背景色和文本的按钮;
         * - 'image': 只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高; */
        type: 'text' | 'image'
        /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
        image?: string
        /** 按钮上的文本，仅当 type 为 `text` 时有效 */
        text?: string
        /** [UserInfoButton.destroy()](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/UserInfoButton.destroy.html)
         *
         * 销毁用户信息按钮 */
        destroy(): void
        /** [UserInfoButton.hide()](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/UserInfoButton.hide.html)
         *
         * 隐藏用户信息按钮。 */
        hide(): void
        /** [UserInfoButton.offTap(function listener)](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/UserInfoButton.offTap.html)
*
* 移除用户信息按钮的点击事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

UserInfoButton.onTap(listener)
UserInfoButton.offTap(listener) // 需传入与监听时同一个的函数对象
``` */
        offTap(
            /** onTap 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: UserInfoButtonOffTapCallback
        ): void
        /** [UserInfoButton.onTap(function listener)](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/UserInfoButton.onTap.html)
         *
         * 监听用户信息按钮的点击事件 */
        onTap(
            /** 用户信息按钮的点击事件的监听函数 */
            listener: UserInfoButtonOnTapCallback
        ): void
        /** [UserInfoButton.show()](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/UserInfoButton.show.html)
         *
         * 显示用户信息按钮 */
        show(): void
    }
    /** 需要基础库： `2.32.1`
     *
     * 人体 anchor
     *
     * **示例代码**
     *
     * [静态图像body检测能力使用参考](https://github.com/wechat-miniprogram/miniprogram-demo/tree/master/miniprogram/packageAPI/pages/ar/photo-body-detect)
     *
     * [实时摄像头body检测能力使用参考](https://github.com/wechat-miniprogram/miniprogram-demo/tree/master/miniprogram/packageAPI/pages/ar/body-detect) */
    interface VKBodyAnchor {
        /** 关键点的置信度 */
        confidence: number[]
        /** 识别序号 */
        detectId: number
        /** 唯一标识 */
        id: number
        /** 相对视窗的位置信息，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 */
        origin: VKOrigin
        /** 关键点 */
        points: VKOrigin[]
        /** 总体置信值 */
        score: number
        /** 相对视窗的尺寸，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 */
        size: VKSize
        /** 类型
         *
         * 可选值：
         * - 5: 人体; */
        type: 5
    }
    /** 需要基础库： `2.32.1`
     *
     * 相机对象 */
    interface VKCamera {
        /** 需要基础库： `2.22.0`
         *
         * 相机内参，只有 v2 版本支持 */
        intrinsics: Float32Array
        /** 相机原始的Pose矩阵 */
        transform: Float32Array
        /** 视图矩阵 */
        viewMatrix: Float32Array
        /** [Float32Array VKCamera.getProjectionMatrix(number near, number far)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKCamera.getProjectionMatrix.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 获取投影矩阵 */
        getProjectionMatrix(
            /** 近视点 */
            near: number,
            /** 远视点 */
            far: number
        ): Float32Array
    }
    interface VKConfig {
        /** 跟踪能力配置，目前不同的跟踪能力之间是互斥的，默认使用平面跟踪能力。需要注意目前 track 中不同的跟踪配置存在互斥关系（比如 marker 跟踪配置和 OSD 跟踪配置不能同时存在），请按需配置。 */
        track: Track
        /** 需要基础库： `2.23.0`
         *
         * 绑定的 WebGLRenderingContext 对象 */
        gl?: WebGLRenderingContext
        /** 需要基础库： `2.22.0`
         *
         * vision kit 版本。
         *
         * 可选值：
         * - 'v1': v1适用于用户在平面场景下，例如桌面，地面，泛平面场景，放置虚拟物体，不提供真实世界距离。用户放置物体时，手机相机倾斜向下对着目标平面点击即可，具有广泛的机型支持;
         * - 'v2': v2提供真实物理距离的 ar 定位功能，提供平面识别功能，用户在平面范围点击放置虚拟物体的功能，具有[有限的机型支持](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/plane.html#%E9%99%84%E5%BD%95)。iOS 设备在基础库 2.22.0 开始支持v2。安卓设备在基础库 2.25.1 开始支持v2，另外，安卓v2不支持竖直平面。**使用v2算法需要初始化，移动手机进行左右平移初始化效果最佳。**; */
        version?: 'v1' | 'v2'
    }
    /** 需要基础库： `2.32.1`
     *
     * depth anchor
     *
     * **示例代码**
     *
     * [深度估计能力使用参考](https://github.com/wechat-miniprogram/miniprogram-demo/tree/master/miniprogram/packageAPI/pages/ar/depth-detect) */
    interface VKDepthAnchor {
        /** 包含深度信息的数组 */
        depthArray: number[]
        /** 唯一标识 */
        id: number
        /** 相对视窗的尺寸，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 */
        size: VKSize
        /** 类型
         *
         * 可选值：
         * - 8: DEPTH; */
        type: 8
    }
    /** 需要基础库： `2.32.1`
     *
     * 人脸 anchor
     *
     * **示例代码**
     *
     * [静态图像人脸检测能力使用参考](https://github.com/wechat-miniprogram/miniprogram-demo/tree/master/miniprogram/packageAPI/pages/ar/photo-face-detect)
     *
     * [实时摄像头人脸检测能力使用参考](https://github.com/wechat-miniprogram/miniprogram-demo/tree/master/miniprogram/packageAPI/pages/ar/face-detect) */
    interface VKFaceAnchor {
        /** 人脸角度信息 */
        angle: number[]
        /** 关键点的置信度 */
        confidence: number[]
        /** 识别序号 */
        detectId: number
        /** 唯一标识 */
        id: number
        /** 相对视窗的位置信息，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 */
        origin: VKOrigin
        /** 人脸 106 个关键点的坐标 */
        points: VKPoint[]
        /** 相对视窗的尺寸，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 */
        size: VKSize
        /** 类型
         *
         * 可选值：
         * - 3: 人脸; */
        type: 3
    }
    /** 需要基础库： `2.32.1`
     *
     * vision kit 会话对象。 */
    interface VKFrame {
        /** [VKCamera](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKCamera.html)
         *
         * 相机对象 */
        camera: VKCamera
        /** 生成时间，单位:纳秒(ns) */
        timestamp: number
        /** [ArrayBuffer VKFrame.getCameraBuffer(number width, number height)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKFrame.getCameraBuffer.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 获取当前帧 rgba buffer。iOS 端微信在 v8.0.20 开始支持，安卓端微信在 v8.0.30 开始支持。按 aspect-fill 规则裁剪，此接口要求在创建 VKSession 对象时必须传入 gl 参数。此接口仅建议拿来做帧分析使用，上屏请使用 getCameraTexture 来代替。 */
        getCameraBuffer(
            /** 宽度，受系统限制，必须是 16 的整数倍 */
            width: number,
            /** 高度 */
            height: number
        ): ArrayBuffer
        /** [ArrayBuffer VKFrame.getCameraJpgBuffer(number width, number height, number quality)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKFrame.getCameraJpgBuffer.html)
         *
         * 需要基础库： `3.0.0`
         *
         * 获取当前帧的 jpg 信息Buffer。安卓微信 8.0.49 开始支持，iOS微信 8.0.49 开始支持。 */
        getCameraJpgBuffer(
            /** 宽度 */
            width: number,
            /** 高度 */
            height: number,
            /** 获取纹理质量，(0 - 100) */
            quality: number
        ): ArrayBuffer
        /** [Float32Array VKFrame.getDisplayTransform()](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKFrame.getDisplayTransform.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 获取纹理调整矩阵。默认获取到的纹理是未经裁剪调整的纹理，此矩阵可用于在着色器中根据帧对象尺寸对纹理进行裁剪。 */
        getDisplayTransform(): Float32Array
        /** [Object VKFrame.getCameraTexture(WebGLRenderingContext gl)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKFrame.getCameraTexture.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 获取当前帧纹理，目前只支持 YUV 纹理。 */
        getCameraTexture(
            /** 画布 */
            gl: WebGLRenderingContext
        ): YUVTextureRes
        /** [Object VKFrame.getDepthBuffer()](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKFrame.getDepthBuffer.html)
         *
         * 需要基础库： `3.0.0`
         *
         * 获取每帧的深度图信息Buffer。安卓微信 8.0.38 开始支持，iOS微信 8.0.39 开始支持。 */
        getDepthBuffer(): DepthBufferRes
        /** [Object VKFrame.getLegSegmentBuffer()](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKFrame.getLegSegmentBuffer.html)
         *
         * 需要基础库： `3.2.1`
         *
         * 获取每帧的腿部分割信息Buffer，安卓微信 8.0.43，iOS微信 8.0.43 开始支持。 */
        getLegSegmentBuffer(): LegSegmentBufferRes
    }
    /** 需要基础库： `2.32.1`
     *
     * 手势 anchor
     *
     * **示例代码**
     *
     * [静态图像hand检测能力使用参考](https://github.com/wechat-miniprogram/miniprogram-demo/tree/master/miniprogram/packageAPI/pages/ar/photo-hand-detect)
     *
     * [实时摄像头hand检测能力使用参考](https://github.com/wechat-miniprogram/miniprogram-demo/tree/master/miniprogram/packageAPI/pages/ar/hand-detect) */
    interface VKHandAnchor {
        /** 关键点的置信度 */
        confidence: number[]
        /** 识别序号 */
        detectId: number
        /** 手势分类, 返回整数-1到18, -1表示无效手势
         *
         * 可选值：
         * - 0: 单手比心;
         * - 1: 布（数字5）;
         * - 2: 剪刀（数字2）;
         * - 3: 握拳;
         * - 4: 数字1;
         * - 5: 热爱;
         * - 6: 点赞;
         * - 7: 数字3;
         * - 8: 摇滚;
         * - 9: 数字6;
         * - 10: 数字8;
         * - 11: 双手抱拳（恭喜发财）;
         * - 12: 数字4;
         * - 13: 比ok;
         * - 14: 不喜欢（踩）;
         * - 15: 双手比心;
         * - 16: 祈祷（双手合十）;
         * - 17: 双手抱拳;
         * - 18: 无手势动作;
         * - -1: 无效手势; */
        gesture:
            | 0
            | 1
            | 2
            | 3
            | 4
            | 5
            | 6
            | 7
            | 8
            | 9
            | 10
            | 11
            | 12
            | 13
            | 14
            | 15
            | 16
            | 17
            | 18
            | -1
        /** 唯一标识 */
        id: number
        /** 相对视窗的位置信息，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 */
        origin: VKOrigin
        /** 关键点 */
        points: VKOrigin[]
        /** 总体置信值 */
        score: number
        /** 相对视窗的尺寸，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 */
        size: VKSize
        /** 类型
         *
         * 可选值：
         * - 7: 手势; */
        type: 7
    }
    interface VKMarker {
        /** marker id */
        markerId: number
        /** 图片路径 */
        path: string
    }
    /** 需要基础库： `2.32.1`
     *
     * marker anchor
     *
     * **示例代码**
     *
     * [2D Marker能力使用参考](https://github.com/wechat-miniprogram/miniprogram-demo/tree/master/miniprogram/packageAPI/pages/ar/2dmarker-ar) */
    interface VKMarkerAnchor {
        /** 唯一标识 */
        id: number
        /** marker id */
        markerId: number
        /** 图片路径 */
        path: string
        /** 包含位置、旋转、放缩信息的矩阵，以列为主序 */
        transform: Float32Array
        /** 类型
         *
         * 可选值：
         * - 1: marker; */
        type: 1
    }
    /** 需要基础库： `2.32.1`
     *
     * OCR anchor
     *
     * **示例代码**
     *
     * [静态图像OCR检测能力使用参考](https://github.com/wechat-miniprogram/miniprogram-demo/tree/master/miniprogram/packageAPI/pages/ar/photo-ocr-detect)
     *
     * [实时摄像头OCR检测能力使用参考](https://github.com/wechat-miniprogram/miniprogram-demo/tree/master/miniprogram/packageAPI/pages/ar/ocr-detect) */
    interface VKOCRAnchor {
        /** 唯一标识 */
        id: number
        /** 识别的文字结果 */
        text: string
        /** 类型
         *
         * 可选值：
         * - 6: OCR; */
        type: 6
    }
    /** 需要基础库： `2.32.1`
     *
     * OSD anchor
     *
     * **示例代码**
     *
     * [单样本检测(OSD)能力使用参考](https://github.com/wechat-miniprogram/miniprogram-demo/tree/master/miniprogram/packageAPI/pages/ar/osd-ar) */
    interface VKOSDAnchor {
        /** 唯一标识 */
        id: number
        /** marker id */
        markerId: number
        /** 相对视窗的位置信息，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 */
        origin: VKOrigin
        /** 图片路径 */
        path: string
        /** 相对视窗的尺寸，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 */
        size: VKSize
        /** 类型
         *
         * 可选值：
         * - 2: OSD; */
        type: 2
    }
    interface VKOrigin {
        /** 横坐标 */
        x: number
        /** 纵坐标 */
        y: number
    }
    /** 需要基础库： `2.32.1`
     *
     * 平面 anchor，只有 v2 版本支持
     *
     * **示例代码**
     *
     * v1 版本：[水平面AR能力使用参考](https://github.com/wechat-miniprogram/miniprogram-demo/tree/master/miniprogram/packageAPI/pages/ar/plane-ar)
     * v2 版本：[水平面AR能力v2使用参考](https://github.com/wechat-miniprogram/miniprogram-demo/tree/master/miniprogram/packageAPI/pages/ar/plane-ar-v2) */
    interface VKPlaneAnchor {
        /** 方向 */
        alignment: number
        /** 唯一标识 */
        id: number
        /** 尺寸 */
        size: VKSize
        /** 包含位置、旋转、放缩信息的矩阵，以列为主序 */
        transform: Float32Array
        /** 类型
         *
         * 可选值：
         * - 0: 平面; */
        type: 0
    }
    /** 人脸 106 个关键点的坐标 */
    interface VKPoint {
        /** 横坐标 */
        x: number
        /** 纵坐标 */
        y: number
    }
    /** 需要基础库： `2.32.1`
     *
     * vision kit 会话对象。 */
    interface VKSession {
        /** 相机尺寸 */
        cameraSize: VKSize
        /** 会话配置 */
        config: VKConfig
        /** 会话状态
         *
         * 可选值：
         * - 0: 不可用;
         * - 1: 运行中;
         * - 2: 暂停中;
         * - 3: 初始化中; */
        state: 0 | 1 | 2 | 3
        /** [Array.&lt;Object&gt; VKSession.getAllMarker()](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.getAllMarker.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 获取所有 marker，要求调 [wx.createVKSession](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/wx.createVKSession.html) 时传入的 track.marker 为 true */
        getAllMarker(): VKMarker[]
        /** [Array.&lt;Object&gt; VKSession.getAllOSDMarker()](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.getAllOSDMarker.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 获取所有 OSD marker，要求调 [wx.createVKSession](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/wx.createVKSession.html) 时传入的 track.OSD 为 true */
        getAllOSDMarker(): VKMarker[]
        /** [Array.&lt;Object&gt; VKSession.hitTest(number x, number y, Object reset)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.hitTest.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 触摸检测，v1 版本只支持单平面（即 hitTest 生成一次平面后，后续 hitTest 均不会再生成平面，而是以之前生成的平面为基础进行检测）。如果需要重新识别其他平面，可以在调用此方法时将 reset 参数置为 true。 */
        hitTest(
            /** 相对视窗的横坐标，取值范围为 [0, 1]，0 为左边缘，1 为右边缘 */
            x: number,
            /** 相对视窗的纵坐标，取值范围为 [0, 1]，0 为上边缘，1 为下边缘 */
            y: number,
            /** 是否需要重新识别其他平面，v2 版本不再需要此参数 */
            reset: IAnyObject
        ): HitTestRes[]
        /** [VKSession.cancelAnimationFrame(number requestID)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.cancelAnimationFrame.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 取消由 requestAnimationFrame 添加到计划中的动画帧请求。 */
        cancelAnimationFrame(requestID: number): void
        /** [VKSession.destroy()](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.destroy.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 销毁会话。 */
        destroy(): void
        /** [VKSession.detectBody(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.detectBody.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 静态图像人体关键点检测。当 wx.createVKSession 参数传入 {track: {body: {mode: 2} } } 时可用。用法详情[指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/body.html)。 */
        detectBody(option: DetectBodyOption): void
        /** [VKSession.detectDepth(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.detectDepth.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 深度识别。当 wx.createVKSession 参数传入 {track: {depth: {mode: 2} } } 时可用。用法详情[指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/depth.html)。 */
        detectDepth(option: DetectDepthOption): void
        /** [VKSession.detectFace(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.detectFace.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 静态图像人脸关键点检测。当 wx.createVKSession 参数传入 {track: {face: {mode: 2} } } 时可用。用法详情[指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/face.html)。安卓微信8.0.25开始支持，iOS微信8.0.24开始支持。
         *
         * ****
         *
         * ### 特别说明
         * 若小程序人脸识别功能涉及采集、存储用户生物特征（如人脸照片或视频、身份证和手持身份证、身份证照和免冠照等），此类型服务需使用[微信原生人脸识别接口](https://developers.weixin.qq.com/community/develop/doc/000442d352c1202bd498ecb105c00d?highline=%E4%BA%BA%E8%84%B8%E6%A0%B8%E8%BA%AB)。 */
        detectFace(option: DetectFaceOption): void
        /** [VKSession.detectHand(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.detectHand.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 静态图像手势关键点检测。当 wx.createVKSession 参数传入 {track: {hand: {mode: 2} } } 时可用。用法详情[指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/hand.html)。 */
        detectHand(option: DetectHandOption): void
        /** [VKSession.off(string eventName, function fn)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.off.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 取消监听会话事件。 */
        off(
            /** 事件名称 */
            eventName: string,
            /** 事件监听函数 */
            fn: (...args: any[]) => any
        ): void
        /** [VKSession.on(string eventName, function fn)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.on.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 监听会话事件。 */
        on(
            /** 事件名称
             *
             * 参数 eventName 可选值：
             * - 'resize': 相机尺寸变化事件，回调参数为相机尺寸;
             * - 'addAnchors': 增加 anchor 事件，回调参数为 [VKPlaneAnchor](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKPlaneAnchor.html)/[VKMarkerAnchor](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKMarkerAnchor.html)/[VKOSDAnchor](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKOSDAnchor.html) 列表（只有v2版本支持）;
             * - 'updateAnchors': 更新 anchor 事件，回调参数为 [VKPlaneAnchor](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKPlaneAnchor.html)/[VKMarkerAnchor](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKMarkerAnchor.html)/[VKOSDAnchor](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKOSDAnchor.html) 列表（只有v2版本支持） 或 [VKFaceAnchor](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKFaceAnchor.html)/[VKOCRAnchor](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKOCRAnchor.html)/[VKHandAnchor](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKHandAnchor.html)/[VKBodyAnchor](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKBodyAnchor.html)列表（v1、v2都支持）;
             * - 'removeAnchors': 删除 anchor 事件，回调参数为 [VKPlaneAnchor](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKPlaneAnchor.html)/[VKMarkerAnchor](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKMarkerAnchor.html)/[VKOSDAnchor](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKOSDAnchor.html) 列表（只有v2版本支持） 或 [VKFaceAnchor](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKFaceAnchor.html)/[VKOCRAnchor](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKOCRAnchor.html)/[VKHandAnchor](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKHandAnchor.html)/[VKBodyAnchor](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKBodyAnchor.html) 列表（v1、v2都支持）; */
            eventName:
                | 'resize'
                | 'addAnchors'
                | 'updateAnchors'
                | 'removeAnchors',
            /** 事件监听函数 */
            fn: (...args: any[]) => any
        ): void
        /** [VKSession.removeMarker(number markerId)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.removeMarker.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 删除一个 marker，要求调 [wx.createVKSession](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/wx.createVKSession.html) 时传入的 track.marker 为 true */
        removeMarker(
            /** marker id */
            markerId: number
        ): void
        /** [VKSession.removeOSDMarker(number markerId)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.removeOSDMarker.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 删除一个 OSD marker，要求调 [wx.createVKSession](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/wx.createVKSession.html) 时传入的 track.OSD 为 true */
        removeOSDMarker(
            /** marker id */
            markerId: number
        ): void
        /** [VKSession.runOCR(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.runOCR.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 静态图像OCR检测。当 wx.createVKSession 参数传入 {track: {OCR: {mode: 2} } } 时可用。用法详情[指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/ocr.html)。 */
        runOCR(option: RunOCROption): void
        /** [VKSession.setDepthOccRange(number threshold)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.setDepthOccRange.html)
         *
         * 需要基础库： `3.0.0`
         *
         * 更新 深度遮挡 Occ范围，要求调 [wx.createVKSession](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/wx.createVKSession.html) 时传入 {track: {depth: {mode: 2} } } */
        setDepthOccRange(
            /** 阈值 */
            threshold: number
        ): void
        /** [VKSession.start(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.start.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 开启会话。 */
        start(
            /** 开启会话回调 */
            callback: VKSessionStartCallback
        ): void
        /** [VKSession.stop()](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.stop.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 停止会话。 */
        stop(): void
        /** [VKSession.update3DMode(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.update3DMode.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 更新三维识别相关配置，要求调 [wx.createVKSession](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/wx.createVKSession.html) 时使用 face / hand / body。 */
        update3DMode(option: Update3DModeOption): void
        /** [VKSession.updateMaskMode(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.updateMaskMode.html)
         *
         * 需要基础库： `3.2.1`
         *
         * 设置裁剪相关配置，要求调 [wx.createVKSession](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/wx.createVKSession.html) 时使用 shoe。 */
        updateMaskMode(option: UpdateMaskModeOption): void
        /** [VKSession.updateOSDThreshold(number threshold)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.updateOSDThreshold.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 更新 OSD 识别精确度，要求调 [wx.createVKSession](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/wx.createVKSession.html) 时传入的 track.OSD 为 true */
        updateOSDThreshold(
            /** 阈值 */
            threshold: number
        ): void
        /** [[VKFrame](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKFrame.html) VKSession.getVKFrame(number width, number height)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.getVKFrame.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 获取帧对象，每调用一次都会触发一次帧分析过程。目前 VKSession 相机的最大帧数是 30 fps，因此调用 getVKFrame 的频率也可以限制在 30 fps，以减少渲染开销。 */
        getVKFrame(
            /** 宽度 */
            width: number,
            /** 高度 */
            height: number
        ): VKFrame
        /** [number VKSession.addMarker(string path)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.addMarker.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 添加一个 marker，要求调 [wx.createVKSession](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/wx.createVKSession.html) 时传入的 track.marker 为 true
         *
         * **使用提示**
         *
         * 注意事项：
         * 1. 使用 addMarker 接口之前，需要在 createVKSession 的时候声明开启 marker 跟踪。即 wx.createVKSession({ track: { marker: true } })
         * 2. 可以添加多个 marker 图片，但不能重复添加相同的 marker 图片。
         * 3. 在v2模式下同时支持水平面检测与marker检测，同时可输出多个2d/3d marker位姿（需要基础库版本不低于 [2.33.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)
         *
         * ### 2Dmarker
         * 对传入的图片有如下要求：
         * 1. 格式：jpg/png 格式三通道彩图或者 1 通道灰度图
         * 2. 分辨率：尺寸在 480x480 ~ 1920x1920 之间，建议为 1080 分辨率
         * 3. 宽高比：在 1:1 ~ 16:9 之间，要求尽量方正，避免狭长的图片
         * 4. 质量：目标图像为平面模型，需要占画面主体，避免大面积留白，建议用扫描件
         *
         * 示例：
         *
         * <img width="500px" src="https://res.wx.qq.com/op_res/sJPS5gttY4yQq-CmG9crrtaOpjb6Yc6mDhJKdUmrIpmtbWBMfAUAFavtKT6-tEZIh-8zT8tfBJBtvH048ge5Vw" alt="image.png" />
         *
         * 建议：
         *
         * 1. 图片具有丰富的细节
         * 2. 避免重复单一的纹理，例如：
         *
         * <img width="500px" src="https://res.wx.qq.com/op_res/VfNcS-M6nPWWXq_CJ483Dq3iLsNXMvLiM6Wb5ZHOrVVGR2u5ixbQlbiSSuNHzVcMQQY5V0dvnlyOGihUIbyTvA" alt="image.png" />
         * <br>
         * <img width="500px" src="https://res.wx.qq.com/op_res/VfNcS-M6nPWWXq_CJ483Dq-_lR2j4eOi23IOJ2LHFQY_PWufbx3s3uROgLi_flJMHQA8DNvlebs9UwumozPlXg" alt="image.png" />
         * <br>
         * <img width="500px" src="https://res.wx.qq.com/op_res/VfNcS-M6nPWWXq_CJ483Dr9IaSPF18UPnz4KrbAhGW9pIb8oWxzHgmClGIRZK59N4gUnJh69yoQW1TFGqce8ew" alt="image.png" />
         * <br>
         *
         * 3. 避免使用柔和平滑边缘的纹理及大量渐变图像，例如：
         *
         * <img width="500px" src="https://res.wx.qq.com/op_res/rg0BkiSl-LPBybgJtcQCq6DPj88qSVwHFZiumbE0IMq9ibzbnhjewzUSa-n5_VgF_lF9g07FFHHYyrY14KTSfA" alt="image.png" />
         *
         * 4. 避免模糊，建议采用高清、高对比度图像作为识别对象
         * 5. 建议图像有均匀的特征（角点）分布，正确示例：
         *
         * <img width="500px" src="https://res.wx.qq.com/op_res/sJPS5gttY4yQq-CmG9crrrBRWB_Cw2aFXAn1KY0YtfjnQ7WNt854gA8H2zfmZUztlFcJbdEHouBGs63hUO4Mxg" alt="image.png" />
         *
         * 避免角点较少、中间大量空白、没有特征及角点的图像，错误示例：
         *
         * <img width="500px" src="https://res.wx.qq.com/op_res/rg0BkiSl-LPBybgJtcQCqzjY2LY-ylRjFS7TVD-cZsEE8TTB-xzR2YiWKhWyWg1bgpbRqQq-4l6OWPDii4S3Xg" alt="image.png" />
         *
         * ### 3Dmarker
         * 现小程序demo支持通过上传视频, 生成对应模型的3dmarker识别文件,后缀名为.map
         *
         * 对传入的视频有如下要求：
         * 1.视频长宽比为16:9或4:3; 短边大于480px
         * 2.目标物体易于和背景物体区分出来，同时目标物体放置与背景物体一定距离，放置底面与物体易于区分，底面可以放置一张白纸，例如：
         *
         * <img width="500px" src="https://res.wx.qq.com/op_res/a0ooLtlHHfpfb37tq3AxZWPrfqINIs2MvJnZxQeTLzkpbgAGn6m8CaWAoy_osmlVDVhWm16e-yBDXjIY0dhCEQ" alt="image.png" />
         *
         * 3.目标物体最好为刚体，本身不会发生较大形变， 容易变形的物体不适合用作识别对象
         * 4.视频匀速移动，避免模糊，对目标识别面环绕物体拍摄，需要保证相机有足够的平移移动
         * 5.marker物体要求与2d图像要求类似，具有丰富细节，避免重复单一纹理，不反光，无高光
         * 6.拍摄视频中特征纹理丰富，如果marker本身问题较弱，可以在背景中适当添加纹理物体
         * 服务耗时：当前版本30s视频耗时约20分钟，请静待算法返回模型
         *
         * 建议：
         *
         * 1.视频格式：视频帧率30fps，分辨率建议1080p
         * 2.视频时长：视频建议时长在20s~30s，超过30s会被截断，时长过短会导致marker效果欠佳 */
        addMarker(
            /** 图片路径，目前只支持本地用户图片 */
            path: string
        ): number
        /** [number VKSession.addOSDMarker(string path)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.addOSDMarker.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 添加一个 OSD marker（one-shot detection marker），要求调 [wx.createVKSession](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/wx.createVKSession.html) 时传入的 track.OSD 为 true
         *
         * **使用提示**
         *
         * 注意事项：
         * 1. 使用 addOSDMarker 接口之前，需要在 createVKSession 的时候声明开启 OSD 跟踪。即 wx.createVKSession({ track: { OSD: true } })
         * 2. 可以添加多个 OSDMarker 图片，但不能重复添加相同的 OSDMarker 图片。
         *
         * 对传入的图片有如下要求：
         * 1. 格式：jpg 格式彩色图片
         * 2. 分辨率：尺寸不低于 240x240
         * 3. 宽高比：在 1:1 ~ 16:9 之间，要求尽量方正，避免狭长的图片
         * 4. 质量：目标物体需要占画面主体，避免大面积留白，避免大面积文字，不能含其他物体。
         *
         * 示例：
         *
         * <img width="500px" src="https://res.wx.qq.com/op_res/rg0BkiSl-LPBybgJtcQCq_Mq0ReXEA5nOzDIvnYYPttmwxn0V1e_yI6UUgkNT6K6aOQj2QRba5IHQglHULkrKg" alt="image.png" />
         * <br>
         * <img width="500px" src="https://res.wx.qq.com/op_res/rg0BkiSl-LPBybgJtcQCqwiRcyGk9oenkCpd3vAHWSTSZPPJcgIrPzcpwnSpmk_9bMiCqUdS8Ds789Rjhy0CtA" alt="image.png" />
         * <br>
         * <img width="500px" src="https://res.wx.qq.com/op_res/rg0BkiSl-LPBybgJtcQCqx8fYUYypBmFmB1_zX-APH06j1oMZDz7K0CE2To_982NDOB5fmM4Y2Rrr1uQF6J4gg" alt="image.png" />
         * <br>
         *
         * 建议：
         *
         * 1. 具有丰富的细节，避免纯色且形状特点不鲜明的物体，例如：
         *
         * <img width="500px" src="https://res.wx.qq.com/op_res/rg0BkiSl-LPBybgJtcQCq-6WwSZKlNbN-if0NCag-Dm6AmNJeBFi5dvR-bRZINlZmuA9G1e4wpngvhlr2z6CXQ" alt="image.png" />
         *
         * 2. 避免模糊，最好采用高清图片 */
        addOSDMarker(
            /** 图片路径，目前只支持本地用户图片 */
            path: string
        ): number
        /** [number VKSession.requestAnimationFrame(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.requestAnimationFrame.html)
         *
         * 需要基础库： `2.32.1`
         *
         * 在下次进行重绘时执行。 */
        requestAnimationFrame(
            /** 执行的 callback */
            callback: (...args: any[]) => any
        ): number
    }
    interface VKSize {
        /** 高度 */
        height: number
        /** 宽度 */
        width: number
    }
    interface VibrateLongOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: VibrateLongCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: VibrateLongFailCallback
        /** 接口调用成功的回调函数 */
        success?: VibrateLongSuccessCallback
    }
    interface VibrateShortFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'style is not support': 当前设备不支持设置震动等级; */
        errMsg: string
    }
    interface VibrateShortOption {
        /** 需要基础库： `2.13.0`
         *
         * 震动强度类型，有效值为：heavy、medium、light */
        type: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: VibrateShortCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: VibrateShortFailCallback
        /** 接口调用成功的回调函数 */
        success?: VibrateShortSuccessCallback
    }
    /** 视频对象 */
    interface Video {
        /** 视频是否自动播放 */
        autoplay: boolean
        /** 需要基础库： `2.12.0`
         *
         * 视频背景颜色 */
        backgroundColor: string
        /** 视频是否显示控件 */
        controls: boolean
        /** 是否启用手势控制播放进度 */
        enablePlayGesture: boolean
        /** 是否启用手势控制播放进度 */
        enableProgressGesture: boolean
        /** 视频的高度 */
        height: number
        /** 视频的初始播放位置，单位为 s 秒 */
        initialTime: number
        /** 视频是否为直播 */
        live: boolean
        /** 视频是否是否循环播放 */
        loop: boolean
        /** 视频是否禁音播放 */
        muted: boolean
        /** 需要基础库： `2.4.0`
         *
         * 视频是否遵从系统静音开关设置（仅iOS） */
        obeyMuteSwitch: boolean
        /** 视频的缩放模式 */
        objectFit: string
        /** 视频播放到末尾时触发的回调函数 */
        onended: (...args: any[]) => any
        /** 视频发生错误时触发的回调函数 */
        onerror: (...args: any[]) => any
        /** 视频暂停时触发的回调函数 */
        onpause: (...args: any[]) => any
        /** 视频开始播放时触发的回调函数 */
        onplay: (...args: any[]) => any
        /** 视频下载（缓冲）时周期性触发的回调函数 */
        onprogress: (...args: any[]) => any
        /** 每当视频播放进度更新时触发的回调函数 */
        ontimeupdate: (...args: any[]) => any
        /** 视频由于需要缓冲下一帧而停止时触发的回调函数 */
        onwaiting: (...args: any[]) => any
        /** 视频的播放速率，有效值有 0.5、0.8、1.0、1.25、1.5 */
        playbackRate: number
        /** 视频的封面 */
        poster: string
        /** 是否显示视频中央的播放按钮 */
        showCenterPlayBtn: boolean
        /** 需要基础库： `2.12.0`
         *
         * 是否显示视频底部进度条，controls为true时才生效 */
        showProgress: boolean
        /** 需要基础库： `2.12.0`
         *
         * 是否显示视频控制栏进度条，controls为true时才生效 */
        showProgressInControlMode: boolean
        /** 视频的资源地址 */
        src: string
        /** 视频的宽度 */
        width: number
        /** 视频的左上角横坐标 */
        x: number
        /** 视频的左上角纵坐标 */
        y: number
        /** [Promise Video.exitFullScreen()](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.exitFullScreen.html)
         *
         * 视频退出全屏 */
        exitFullScreen(): Promise<any>
        /** [Promise Video.pause()](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.pause.html)
         *
         * 暂停视频 */
        pause(): Promise<any>
        /** [Promise Video.play()](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.play.html)
         *
         * 播放视频 */
        play(): Promise<any>
        /** [Promise Video.requestFullScreen(number direction)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.requestFullScreen.html)
         *
         * 视频全屏 */
        requestFullScreen(
            /** 设置全屏时视频的方向
             *
             * 参数 direction 可选值：
             * - 0: 正常竖向;
             * - 90: 屏幕逆时针90度;
             * - -90: 屏幕顺时针90度; */
            direction: 0 | 90 | -90
        ): Promise<any>
        /** [Promise Video.seek(number time)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.seek.html)
         *
         * 视频跳转 */
        seek(
            /** 视频跳转到指定位置，单位为 s 秒 */
            time: number
        ): Promise<any>
        /** [Promise Video.stop()](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.stop.html)
         *
         * 停止视频 */
        stop(): Promise<any>
        /** [Video.destroy()](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.destroy.html)
         *
         * 销毁视频 */
        destroy(): void
        /** [Video.offEnded(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offEnded.html)
*
* 移除视频播放到末尾事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

Video.onEnded(listener)
Video.offEnded(listener) // 需传入与监听时同一个的函数对象
``` */
        offEnded(
            /** onEnded 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffEndedCallback
        ): void
        /** [Video.offError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offError.html)
*
* 移除视频错误事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

Video.onError(listener)
Video.offError(listener) // 需传入与监听时同一个的函数对象
``` */
        offError(
            /** onError 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: VideoOffErrorCallback
        ): void
        /** [Video.offPause(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offPause.html)
*
* 移除视频暂停事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

Video.onPause(listener)
Video.offPause(listener) // 需传入与监听时同一个的函数对象
``` */
        offPause(
            /** onPause 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffPauseCallback
        ): void
        /** [Video.offPlay(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offPlay.html)
*
* 移除视频播放事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

Video.onPlay(listener)
Video.offPlay(listener) // 需传入与监听时同一个的函数对象
``` */
        offPlay(
            /** onPlay 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffPlayCallback
        ): void
        /** [Video.offProgress(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offProgress.html)
*
* 移除视频下载（缓冲）事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

Video.onProgress(listener)
Video.offProgress(listener) // 需传入与监听时同一个的函数对象
``` */
        offProgress(
            /** onProgress 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffProgressCallback
        ): void
        /** [Video.offTimeUpdate(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offTimeUpdate.html)
*
* 移除视频播放进度更新事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

Video.onTimeUpdate(listener)
Video.offTimeUpdate(listener) // 需传入与监听时同一个的函数对象
``` */
        offTimeUpdate(
            /** onTimeUpdate 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: VideoOffTimeUpdateCallback
        ): void
        /** [Video.offWaiting(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offWaiting.html)
*
* 移除视频由于需要缓冲下一帧而停止时触发的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

Video.onWaiting(listener)
Video.offWaiting(listener) // 需传入与监听时同一个的函数对象
``` */
        offWaiting(
            /** onWaiting 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffWaitingCallback
        ): void
        /** [Video.onEnded(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.onEnded.html)
         *
         * 监听视频播放到末尾事件 */
        onEnded(
            /** 视频播放到末尾事件的监听函数 */
            listener: OnEndedCallback
        ): void
        /** [Video.onError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.onError.html)
         *
         * 监听视频错误事件 */
        onError(
            /** 视频错误事件的监听函数 */
            listener: VideoOnErrorCallback
        ): void
        /** [Video.onPause(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.onPause.html)
         *
         * 监听视频暂停事件 */
        onPause(
            /** 视频暂停事件的监听函数 */
            listener: OnPauseCallback
        ): void
        /** [Video.onPlay(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.onPlay.html)
         *
         * 监听视频播放事件 */
        onPlay(
            /** 视频播放事件的监听函数 */
            listener: OnPlayCallback
        ): void
        /** [Video.onProgress(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.onProgress.html)
         *
         * 监听视频下载（缓冲）事件 */
        onProgress(
            /** 视频下载（缓冲）事件的监听函数 */
            listener: OnProgressCallback
        ): void
        /** [Video.onTimeUpdate(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.onTimeUpdate.html)
         *
         * 监听视频播放进度更新事件 */
        onTimeUpdate(
            /** 视频播放进度更新事件的监听函数 */
            listener: VideoOnTimeUpdateCallback
        ): void
        /** [Video.onWaiting(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.onWaiting.html)
         *
         * 监听视频由于需要缓冲下一帧而停止时触发 */
        onWaiting(
            /** 的监听函数 */
            listener: OnWaitingCallback
        ): void
    }
    interface VideoDecoderStartOption {
        /** 需要解码的视频源文件。基础库 2.13.0 以下的版本只支持本地路径。 2.13.0 开始支持 http:// 和 https:// 协议的远程路径。 */
        source: string
        /** 需要基础库： `2.15.0`
         *
         * 是否不需要音频轨道 */
        abortAudio?: boolean
        /** 需要基础库： `2.15.0`
         *
         * 是否不需要视频轨道 */
        abortVideo?: boolean
        /** 解码模式。0：按 pts 解码；1：以最快速度解码 */
        mode?: number
    }
    interface VideoOnErrorListenerResult {
        /** 错误信息
         *
         * 可选值：
         * - 'MEDIA_ERR_NETWORK': 当下载时发生错误;
         * - 'MEDIA_ERR_DECODE': 当解码时发生错误;
         * - 'MEDIA_ERR_SRC_NOT_SUPPORTED': video 的 src 属性是不支持的资源类型; */
        errMsg: string
    }
    /** 需要基础库： `2.19.0`
*
* WebAudioContext 实例，通过[wx.createWebAudioContext](https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.createWebAudioContext.html) 接口获取该实例。
*
* **示例代码**
*
* ```js
// 监听状态
const audioCtx = wx.createWebAudioContext()
audioCtx.onstatechange = () => {
  console.log(ctx.state)
}
setTimeout(audioCtx.suspend, 1000)
setTimeout(audioCtx.resume, 2000)
``` */
    interface WebAudioContext {
        /** 获取当前上下文的时间戳。 */
        currentTime: number
        /** [WebAudioContextNode](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContextNode.html)
         *
         * 当前上下文的最终目标节点，一般是音频渲染设备。 */
        destination: WebAudioContextNode
        /** [AudioListener](https://developers.weixin.qq.com/minigame/dev/api/media/audio/AudioListener.html)
         *
         * 空间音频监听器。 */
        listener: AudioListener
        /** 可写属性，开发者可以对该属性设置一个监听函数，当WebAudio状态改变的时候，会触发开发者设置的监听函数。 */
        onstatechange: (...args: any[]) => any
        /** 采样率，通常在8000-96000之间，通常44100hz的采样率最为常见。 */
        sampleRate: number
        /** 当前WebAudio上下文的状态。可能的值如下：suspended（暂停）、running（正在运行）、closed（已关闭）。需要注意的是，不要在 audioContext close后再访问state属性 */
        state: string
        /** [AnalyserNode WebAudioContext.createAnalyser()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createAnalyser.html)
         *
         * 需要基础库： `2.22.0`
         *
         * 创建一个 AnalyserNode 。可以用来获取音频时间和频率数据，以及实现数据可视化。 */
        createAnalyser(): AnalyserNode
        /** [BiquadFilterNode WebAudioContext.createBiquadFilter()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createBiquadFilter.html)
         *
         * 创建一个BiquadFilterNode */
        createBiquadFilter(): BiquadFilterNode
        /** [ChannelMergerNode WebAudioContext.createChannelMerger(number numberOfInputs)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createChannelMerger.html)
         *
         * 创建一个ChannelMergerNode */
        createChannelMerger(
            /** 输出流中需要保持的输入流的个数 */
            numberOfInputs: number
        ): ChannelMergerNode
        /** [ChannelSplitterNode WebAudioContext.createChannelSplitter(number numberOfOutputs)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createChannelSplitter.html)
         *
         * 创建一个ChannelSplitterNode */
        createChannelSplitter(
            /** 要分别输出的输入音频流中的通道数 */
            numberOfOutputs: number
        ): ChannelSplitterNode
        /** [ConstantSourceNode WebAudioContext.createConstantSource()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createConstantSource.html)
         *
         * 创建一个ConstantSourceNode */
        createConstantSource(): ConstantSourceNode
        /** [DelayNode WebAudioContext.createDelay(number maxDelayTime)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createDelay.html)
         *
         * 创建一个DelayNode */
        createDelay(
            /** 最大延迟时间 */
            maxDelayTime: number
        ): DelayNode
        /** [DynamicsCompressorNode WebAudioContext.createDynamicsCompressor()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createDynamicsCompressor.html)
         *
         * 创建一个DynamicsCompressorNode */
        createDynamicsCompressor(): DynamicsCompressorNode
        /** [GainNode WebAudioContext.createGain()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createGain.html)
         *
         * 创建一个GainNode */
        createGain(): GainNode
        /** [IIRFilterNode WebAudioContext.createIIRFilter(Array.&lt;number&gt; feedforward, Array.&lt;number&gt; feedback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createIIRFilter.html)
         *
         * 创建一个IIRFilterNode */
        createIIRFilter(
            /** 一个浮点值数组，指定IIR滤波器传递函数的前馈(分子)系数。 */
            feedforward: number[],
            /** 一个浮点值数组，指定IIR滤波器传递函数的反馈(分母)系数。 */
            feedback: number[]
        ): IIRFilterNode
        /** [OscillatorNode WebAudioContext.createOscillator()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createOscillator.html)
         *
         * 创建一个OscillatorNode */
        createOscillator(): OscillatorNode
        /** [PannerNode WebAudioContext.createPanner()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createPanner.html)
         *
         * 创建一个PannerNode */
        createPanner(): PannerNode
        /** [PeriodicWaveNode WebAudioContext.createPeriodicWave(Float32Array real, Float32Array imag, object constraints)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createPeriodicWave.html)
*
* 创建一个PeriodicWaveNode
*
* **注意**
*
* `real`和`imag`数组必须拥有一样的长度，否则抛出错误
* ```js
const real = new Float32Array(2)
const imag = new Float32Array(2)
real[0] = 0
imag[0] = 0
real[1] = 1
imag[1] = 0

const waveNode = audioContext.createPeriodicWave(real, imag, {disableNormalization: true})
``` */
        createPeriodicWave(
            /** 一系列余弦术语(传统上的A项) */
            real: Float32Array,
            /** 一系列正弦项(传统上的B项) */
            imag: Float32Array,
            /** 一个字典对象，用于指定是否禁用规范化(默认启用规范化) */
            constraints: Constraints
        ): PeriodicWaveNode
        /** [Promise WebAudioContext.close()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.close.html)
*
* 关闭WebAudioContext
*
* **注意事项**
*
* 同步关闭对应的WebAudio上下文。close后会立即释放当前上下文的资源，<b>不要在close后再次访问state属性。</b>
* ```js
const audioCtx = wx.createWebAudioContext()
audioCtx.close().then(() => {
  console.log(audioCtx.state) // bad case：不应该在close后再访问state
})
``` */
        close(): Promise<any>
        /** [Promise WebAudioContext.resume()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.resume.html)
         *
         * 同步恢复已经被暂停的WebAudioContext上下文 */
        resume(): Promise<any>
        /** [Promise WebAudioContext.suspend()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.suspend.html)
         *
         * 同步暂停WebAudioContext上下文 */
        suspend(): Promise<any>
        /** [ScriptProcessorNode WebAudioContext.createScriptProcessor(number bufferSize, number numberOfInputChannels, number numberOfOutputChannels)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createScriptProcessor.html)
         *
         * 创建一个ScriptProcessorNode */
        createScriptProcessor(
            /** 缓冲区大小，以样本帧为单位 */
            bufferSize: number,
            /** 用于指定输入node的声道的数量 */
            numberOfInputChannels: number,
            /** 用于指定输出node的声道的数量 */
            numberOfOutputChannels: number
        ): ScriptProcessorNode
        /** [WaveShaperNode WebAudioContext.createWaveShaper()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createWaveShaper.html)
         *
         * 创建一个WaveShaperNode */
        createWaveShaper(): WaveShaperNode
        /** [[AudioBuffer](https://developers.weixin.qq.com/minigame/dev/api/media/audio/AudioBuffer.html) WebAudioContext.createBuffer(number numOfChannels, number length, number sampleRate)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createBuffer.html)
         *
         * 创建一个AudioBuffer，代表着一段驻留在内存中的短音频 */
        createBuffer(
            /** 定义了 buffer 中包含的声频通道数量的整数 */
            numOfChannels: number,
            /** 代表 buffer 中的样本帧数的整数 */
            length: number,
            /** 线性音频样本的采样率，即每一秒包含的关键帧的个数 */
            sampleRate: number
        ): AudioBuffer
        /** [[AudioBuffer](https://developers.weixin.qq.com/minigame/dev/api/media/audio/AudioBuffer.html) WebAudioContext.decodeAudioData(ArrayBuffer audioData, function successCallback, function errorCallback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.decodeAudioData.html)
         *
         * 异步解码一段资源为AudioBuffer。 */
        decodeAudioData(
            /** 一个包含音频文件数据的 ArrayBuffer */
            audioData: ArrayBuffer,
            /** 在音频数据解码成功时被调用，参数为解码后的AudioBuffer */
            successCallback: (...args: any[]) => any,
            /** 在音频数据解码失败时被调用 */
            errorCallback: (...args: any[]) => any
        ): AudioBuffer
        /** [[BufferSourceNode](https://developers.weixin.qq.com/minigame/dev/api/media/audio/BufferSourceNode.html) WebAudioContext.createBufferSource()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createBufferSource.html)
         *
         * 创建一个BufferSourceNode实例，通过AudioBuffer对象来播放音频数据。 */
        createBufferSource(): BufferSourceNode
    }
    /** 一类音频处理模块，不同的Node具备不同的功能，如GainNode(音量调整)等。一个WebAudioContextNode可以通过上下文来创建。
     * 目前已经支持以下Node：
     * IIRFilterNode
     * WaveShaperNode
     * ConstantSourceNode
     * ChannelMergerNode
     * OscillatorNode
     * GainNode
     * BiquadFilterNode
     * PeriodicWaveNode
     * BufferSourceNode
     * ChannelSplitterNode
     * ChannelMergerNode
     * DelayNode
     * DynamicsCompressorNode
     * ScriptProcessorNode
     * PannerNode
     * AnalyserNode */
    interface WebAudioContextNode {}
    interface WindowInfo {
        /** 设备像素比 */
        pixelRatio: number
        /** 在竖屏正方向下的安全区域。部分机型没有安全区域概念，也不会返回 safeArea 字段，开发者需自行兼容。 */
        safeArea: SafeArea
        /** 屏幕高度，单位px */
        screenHeight: number
        /** 窗口上边缘的y值 */
        screenTop: number
        /** 屏幕宽度，单位px */
        screenWidth: number
        /** 状态栏的高度，单位px */
        statusBarHeight: number
        /** 可使用窗口高度，单位px */
        windowHeight: number
        /** 可使用窗口宽度，单位px */
        windowWidth: number
    }
    /** Worker 实例，主线程中可通过 [wx.createWorker](https://developers.weixin.qq.com/minigame/dev/api/worker/wx.createWorker.html) 接口获取，worker 线程中可通过全局变量 `worker` 获取。
*
* **示例代码**
*
* 运行以下代码需先进行基础配置，详细请查阅 [多线程 Worker](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/workers.html) 文档了解基础知识和配置方法。
*
* ```js
const worker = wx.createWorker('workers/request/index.js') // 文件名指定 worker 的入口文件路径，绝对路径

worker.onMessage(function (res) {
  console.log(res)
})
// 监听worker被系统回收事件
worker.onProcessKilled(function () {
  console.log('worker has been killed')
  // 重新创建一个worker
  // wx.createWorker()
})

worker.postMessage({
  msg: 'hello worker'
})

worker.terminate()
``` */
    interface Worker {
        /** worker内的环境变量 */
        env: WorkerEnv
        /** [ArrayBuffer Worker.getCameraFrameData()](https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.getCameraFrameData.html)
*
* 需要基础库： `2.17.0`
*
* 获取摄像头当前帧图像，返回ArrayBuffer数据。仅限在 worker 线程中使用。
*
* **示例代码**
*
* ```js
// game.js
const worker = wx.createWorker('workers/index.js', {
  useExperimentalWorker: true
})

const camera = wx.createCamera({
  success() {
    camera.listenFrameChange(worker)
  }
})
```
*
* ```js
// workers/index.js
const data = worker.getCameraFrameData()
console.log(data)
``` */
        getCameraFrameData(): ArrayBuffer
        /** [Worker.onMessage(function listener)](https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.onMessage.html)
         *
         * 监听主线程/Worker 线程向当前线程发送的消息的事件。 */
        onMessage(
            /** 主线程/Worker 线程向当前线程发送的消息的事件的监听函数 */
            listener: WorkerOnMessageCallback
        ): void
        /** [Worker.onProcessKilled(function listener)](https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.onProcessKilled.html)
         *
         * 监听 worker线程被系统回收事件（开启 useExperimentalWorker 后，当iOS系统资源紧张时，ExperimentalWorker 线程存在被系统回收的可能，开发者可监听此事件并重新创建一个worker）。仅限在主线程 worker 对象上调用。 */
        onProcessKilled(
            /** worker线程被系统回收事件的监听函数 */
            listener: OnProcessKilledCallback
        ): void
        /** [Worker.postMessage(Object message)](https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.postMessage.html)
*
* 向主线程/Worker 线程发送的消息。
*
* **示例代码**
*
* worker 线程中
* ```js
worker.postMessage({
  msg: 'hello from worker'
})
```
*
* 主线程中
* ```js
const worker = wx.createWorker('workers/request/index.js')

worker.postMessage({
  msg: 'hello from main'
})
```
*
* **提醒**
*
* 在基础库版本2.20.2之前，postMessage仅支持传递可序列化的key-value对象。
* 在基础库2.20.2之后，postMessage支持传递任意类型的数据。 */
        postMessage(
            /** 需要发送的消息。 */
            message: IAnyObject
        ): void
        /** [Worker.terminate()](https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.terminate.html)
         *
         * 结束当前 Worker 线程。仅限在主线程 worker 对象上调用。 */
        terminate(): void
        /** [Worker.testOnProcessKilled()](https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.testOnProcessKilled.html)
*
* 需要基础库： `2.27.1`
*
* 用于模拟 iOS ExperimentalWorker 线程被系统回收事件，以便于调试。接口仅在 worker 线程内可用。参考 [Worker.onProcessKilled](https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.onProcessKilled.html)
*
* **示例代码**
*
* ```js
// game.js
const worker = wx.createWorker('workers/index.js', {
  useExperimentalWorker: true
})

// 监听 ExperimentalWorker 被系统回收事件
worker.onProcessKilled(function () {
  console.log('worker has been killed')
  // 重新创建一个worker
  // wx.createWorker()
})
```
*
* ```js
// workers/index.js
setTimeout(() => {
  // 模拟 ExperimentalWorker 线程被系统回收事件
  worker.testOnProcessKilled()
}, 2000)
``` */
        testOnProcessKilled(): void
    }
    /** worker内的环境变量 */
    interface WorkerEnv {
        /** 文件系统中的用户目录路径 (本地路径) */
        USER_DATA_PATH: string
    }
    interface WorkerOnMessageListenerResult {
        /** 主线程/Worker 线程向当前线程发送的消息 */
        message: IAnyObject
    }
    interface WriteBLECharacteristicValueOption {
        /** 蓝牙特征的 UUID */
        characteristicId: string
        /** 蓝牙设备 id */
        deviceId: string
        /** 蓝牙特征对应服务的 UUID */
        serviceId: string
        /** 蓝牙设备特征对应的二进制值 */
        value: ArrayBuffer
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: WriteBLECharacteristicValueCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: WriteBLECharacteristicValueFailCallback
        /** 接口调用成功的回调函数 */
        success?: WriteBLECharacteristicValueSuccessCallback
        /** 蓝牙特征值的写模式设置，有两种模式，iOS 优先 write，安卓优先 writeNoResponse 。（基础库 2.22.0 开始支持）
         *
         * 可选值：
         * - 'write': 强制回复写，不支持时报错;
         * - 'writeNoResponse': 强制无回复写，不支持时报错; */
        writeType?: 'write' | 'writeNoResponse'
    }
    interface WriteCharacteristicValueObject {
        /** 蓝牙特征的 UUID */
        characteristicId: string
        /** 是否需要通知主机 value 已更新 */
        needNotify: boolean
        /** 蓝牙特征对应服务的 UUID */
        serviceId: string
        /** characteristic 对应的二进制值 */
        value: ArrayBuffer
        /** 可选，处理回包时使用 */
        callbackId?: number
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: WriteCharacteristicValueCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: WriteCharacteristicValueFailCallback
        /** 接口调用成功的回调函数 */
        success?: WriteCharacteristicValueSuccessCallback
    }
    interface WriteFileOption {
        /** 要写入的文本或二进制数据 */
        data: string | ArrayBuffer
        /** 要写入的文件路径 (本地路径) */
        filePath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: WriteFileCompleteCallback
        /** 指定写入文件的字符编码
         *
         * 可选值：
         * - 'ascii': ;
         * - 'base64': （注意，选择 base64 编码，data 只需要传 base64 内容本身，不要传 Data URI 前缀，否则会报 fail base64 encode error 错误。例如，传 aGVsbG8= 而不是传 data:image/png;base64,aGVsbG8= ）;
         * - 'binary': ;
         * - 'hex': ;
         * - 'ucs2': 以小端序读取;
         * - 'ucs-2': 以小端序读取;
         * - 'utf16le': 以小端序读取;
         * - 'utf-16le': 以小端序读取;
         * - 'utf-8': ;
         * - 'utf8': ;
         * - 'latin1': ; */
        encoding?:
            | 'ascii'
            | 'base64'
            | 'binary'
            | 'hex'
            | 'ucs2'
            | 'ucs-2'
            | 'utf16le'
            | 'utf-16le'
            | 'utf-8'
            | 'utf8'
            | 'latin1'
        /** 接口调用失败的回调函数 */
        fail?: WriteFileFailCallback
        /** 接口调用成功的回调函数 */
        success?: WriteFileSuccessCallback
    }
    interface WriteOption {
        /** 写入的内容，类型为 String 或 ArrayBuffer */
        data: string | ArrayBuffer
        /** 文件描述符。fd 通过 [FileSystemManager.open](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.open.html) 或 [FileSystemManager.openSync](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.openSync.html) 接口获得 */
        fd: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: WriteCompleteCallback
        /** 只在 data 类型是 String 时有效，指定写入文件的字符编码，默认为 utf8
         *
         * 可选值：
         * - 'ascii': ;
         * - 'base64': ;
         * - 'binary': ;
         * - 'hex': ;
         * - 'ucs2': 以小端序读取;
         * - 'ucs-2': 以小端序读取;
         * - 'utf16le': 以小端序读取;
         * - 'utf-16le': 以小端序读取;
         * - 'utf-8': ;
         * - 'utf8': ;
         * - 'latin1': ; */
        encoding?:
            | 'ascii'
            | 'base64'
            | 'binary'
            | 'hex'
            | 'ucs2'
            | 'ucs-2'
            | 'utf16le'
            | 'utf-16le'
            | 'utf-8'
            | 'utf8'
            | 'latin1'
        /** 接口调用失败的回调函数 */
        fail?: WriteFailCallback
        /** 只在 data 类型是 ArrayBuffer 时有效，指定要写入的字节数，默认为 ArrayBuffer 从0开始偏移 offset 个字节后剩余的字节数 */
        length?: number
        /** 只在 data 类型是 ArrayBuffer 时有效，决定 ArrayBuffer 中要被写入的部位，即 ArrayBuffer 中的索引，默认0 */
        offset?: number
        /** 指定文件开头的偏移量，即数据要被写入的位置。当 position 不传或者传入非 Number 类型的值时，数据会被写入当前指针所在位置。 */
        position?: number
        /** 接口调用成功的回调函数 */
        success?: WriteSuccessCallback
    }
    /** 文件写入结果。 通过 [FileSystemManager.writeSync](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.writeSync.html) 接口返回 */
    interface WriteResult {
        /** 实际被写入到文件中的字节数（注意，被写入的字节数不一定与被写入的字符串字符数相同） */
        bytesWritten: number
    }
    interface WriteSuccessCallbackResult {
        /** 实际被写入到文件中的字节数（注意，被写入的字节数不一定与被写入的字符串字符数相同） */
        bytesWritten: number
        errMsg: string
    }
    interface WriteSyncOption {
        /** 写入的内容，类型为 String 或 ArrayBuffer */
        data: string | ArrayBuffer
        /** 文件描述符。fd 通过 [FileSystemManager.open](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.open.html) 或 [FileSystemManager.openSync](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.openSync.html) 接口获得 */
        fd: string
        /** 只在 data 类型是 String 时有效，指定写入文件的字符编码，默认为 utf8
         *
         * 可选值：
         * - 'ascii': ;
         * - 'base64': ;
         * - 'binary': ;
         * - 'hex': ;
         * - 'ucs2': 以小端序读取;
         * - 'ucs-2': 以小端序读取;
         * - 'utf16le': 以小端序读取;
         * - 'utf-16le': 以小端序读取;
         * - 'utf-8': ;
         * - 'utf8': ;
         * - 'latin1': ; */
        encoding?:
            | 'ascii'
            | 'base64'
            | 'binary'
            | 'hex'
            | 'ucs2'
            | 'ucs-2'
            | 'utf16le'
            | 'utf-16le'
            | 'utf-8'
            | 'utf8'
            | 'latin1'
        /** 只在 data 类型是 ArrayBuffer 时有效，指定要写入的字节数，默认为 ArrayBuffer 从0开始偏移 offset 个字节后剩余的字节数 */
        length?: number
        /** 只在 data 类型是 ArrayBuffer 时有效，决定 ArrayBuffer 中要被写入的部位，即 ArrayBuffer 中的索引，默认0 */
        offset?: number
        /** 指定文件开头的偏移量，即数据要被写入的位置。当 position 不传或者传入非 Number 类型的值时，数据会被写入当前指针所在位置。 */
        position?: number
    }
    /** 帧纹理对象 */
    interface YUVTextureRes {
        /** UV 分量纹理 */
        uvTexture: WebGLTexture
        /** Y 分量纹理 */
        yTexture: WebGLTexture
    }
    /** 文件路径 */
    interface ZipFileItem {
        /** 文件内容 */
        data: string | ArrayBuffer
        /** 错误信息 */
        errMsg: string
    }
    interface BLEPeripheralServer {
        /** [BLEPeripheralServer.addService(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.addService.html)
         *
         * 需要基础库： `2.10.3`
         *
         * 添加服务。 */
        addService(option: AddServiceOption): void
        /** [BLEPeripheralServer.offCharacteristicReadRequest(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.offCharacteristicReadRequest.html)
*
* 需要基础库： `2.10.3`
*
* 移除已连接的设备请求读当前外围设备的特征值事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

BLEPeripheralServer.onCharacteristicReadRequest(listener)
BLEPeripheralServer.offCharacteristicReadRequest(listener) // 需传入与监听时同一个的函数对象
``` */
        offCharacteristicReadRequest(
            /** onCharacteristicReadRequest 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffCharacteristicReadRequestCallback
        ): void
        /** [BLEPeripheralServer.offCharacteristicSubscribed(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.offCharacteristicSubscribed.html)
*
* 需要基础库： `2.13.0`
*
* 移除特征订阅事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

BLEPeripheralServer.onCharacteristicSubscribed(listener)
BLEPeripheralServer.offCharacteristicSubscribed(listener) // 需传入与监听时同一个的函数对象
``` */
        offCharacteristicSubscribed(
            /** onCharacteristicSubscribed 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffCharacteristicSubscribedCallback
        ): void
        /** [BLEPeripheralServer.offCharacteristicUnsubscribed(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.offCharacteristicUnsubscribed.html)
*
* 需要基础库： `2.13.0`
*
* 移除取消特征订阅事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

BLEPeripheralServer.onCharacteristicUnsubscribed(listener)
BLEPeripheralServer.offCharacteristicUnsubscribed(listener) // 需传入与监听时同一个的函数对象
``` */
        offCharacteristicUnsubscribed(
            /** onCharacteristicUnsubscribed 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffCharacteristicUnsubscribedCallback
        ): void
        /** [BLEPeripheralServer.offCharacteristicWriteRequest(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.offCharacteristicWriteRequest.html)
*
* 需要基础库： `2.10.3`
*
* 移除已连接的设备请求写当前外围设备的特征值事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

BLEPeripheralServer.onCharacteristicWriteRequest(listener)
BLEPeripheralServer.offCharacteristicWriteRequest(listener) // 需传入与监听时同一个的函数对象
``` */
        offCharacteristicWriteRequest(
            /** onCharacteristicWriteRequest 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffCharacteristicWriteRequestCallback
        ): void
        /** [BLEPeripheralServer.onCharacteristicReadRequest(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.onCharacteristicReadRequest.html)
         *
         * 需要基础库： `2.10.3`
         *
         * 监听已连接的设备请求读当前外围设备的特征值事件。收到该消息后需要立刻调用 [writeCharacteristicValue](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.writeCharacteristicValue.html) 写回数据，否则主机不会收到响应。 */
        onCharacteristicReadRequest(
            /** 已连接的设备请求读当前外围设备的特征值事件的监听函数 */
            listener: OnCharacteristicReadRequestCallback
        ): void
        /** [BLEPeripheralServer.onCharacteristicSubscribed(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.onCharacteristicSubscribed.html)
         *
         * 需要基础库： `2.13.0`
         *
         * 监听特征订阅事件，仅 iOS 支持。 */
        onCharacteristicSubscribed(
            /** 特征订阅事件的监听函数 */
            listener: OnCharacteristicSubscribedCallback
        ): void
        /** [BLEPeripheralServer.onCharacteristicUnsubscribed(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.onCharacteristicUnsubscribed.html)
         *
         * 需要基础库： `2.13.0`
         *
         * 监听取消特征订阅事件，仅 iOS 支持。 */
        onCharacteristicUnsubscribed(
            /** 取消特征订阅事件的监听函数 */
            listener: OnCharacteristicUnsubscribedCallback
        ): void
        /** [BLEPeripheralServer.onCharacteristicWriteRequest(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.onCharacteristicWriteRequest.html)
         *
         * 需要基础库： `2.10.3`
         *
         * 监听已连接的设备请求写当前外围设备的特征值事件。收到该消息后需要立刻调用 [writeCharacteristicValue](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.writeCharacteristicValue.html) 写回数据，否则主机不会收到响应。 */
        onCharacteristicWriteRequest(
            /** 已连接的设备请求写当前外围设备的特征值事件的监听函数 */
            listener: OnCharacteristicWriteRequestCallback
        ): void
        /** [BLEPeripheralServer.removeService(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.removeService.html)
         *
         * 需要基础库： `2.10.3`
         *
         * 移除服务。 */
        removeService(option: RemoveServiceOption): void
        /** [BLEPeripheralServer.startAdvertising(Object Object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.startAdvertising.html)
         *
         * 需要基础库： `2.10.3`
         *
         * 开始广播本地创建的外围设备。
         *
         * **注意**
         *
         * - Android 8.0.9 开始，支持直接使用 16/32/128 位 UUID；
         * - Android 8.0.9 以下版本只支持 128 位 UUID，使用 16/32 位的 UUID 时需要进行补位（系统会自动识别是否属于预分配区间），可以参考[蓝牙指南](https://developers.weixin.qq.com/minigame/dev/guide/device/ble.html)；
         * - iOS 必须直接使用 16 位的 UUID，不能补位到 128 位，否则系统组包时仍会按照 128 位传输。iOS 暂不支持 32 位 UUID。
         * - iOS 同时只能发起一个广播，安卓支持同时发起多个广播。
         * - 传 beacon 参数时，不能同时传入 deviceName，serviceUuids，manufacturerData 参数。 */
        startAdvertising(Object: StartAdvertisingObject): void
        /** [BLEPeripheralServer.stopAdvertising(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.stopAdvertising.html)
         *
         * 需要基础库： `2.10.3`
         *
         * 停止广播。 */
        stopAdvertising(option?: StopAdvertisingOption): void
        /** [BLEPeripheralServer.writeCharacteristicValue(Object Object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.writeCharacteristicValue.html)
         *
         * 需要基础库： `2.10.3`
         *
         * 往指定特征写入二进制数据值，并通知已连接的主机，从机的特征值已发生变化，该接口会处理是走回包还是走订阅。 */
        writeCharacteristicValue(Object: WriteCharacteristicValueObject): void
    }
    interface BeaconError {
        /** 错误信息
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 0 | ok | 正常 |
         * | 11000 | unsupport | 系统或设备不支持 |
         * | 11001 | bluetooth service unavailable | 蓝牙服务不可用 |
         * | 11002 | location service unavailable | 位置服务不可用 |
         * | 11003 | already start | 已经开始搜索 |
         * | 11004 | not startBeaconDiscovery | 还未开始搜索 |
         * | 11005 | system error | 系统错误 |
         * | 11006 | invalid data | 参数不正确 | */ errMsg: string
        /** 错误码
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 0 | ok | 正常 |
         * | 11000 | unsupport | 系统或设备不支持 |
         * | 11001 | bluetooth service unavailable | 蓝牙服务不可用 |
         * | 11002 | location service unavailable | 位置服务不可用 |
         * | 11003 | already start | 已经开始搜索 |
         * | 11004 | not startBeaconDiscovery | 还未开始搜索 |
         * | 11005 | system error | 系统错误 |
         * | 11006 | invalid data | 参数不正确 | */ errCode: number
    }
    interface BluetoothError {
        /** 错误信息
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 0 | ok | 正常 |
         * | -1 | already connect | 已连接 |
         * | 10000 | not init | 未初始化蓝牙适配器 |
         * | 10001 | not available | 当前蓝牙适配器不可用 |
         * | 10002 | no device | 没有找到指定设备 |
         * | 10003 | connection fail | 连接失败 |
         * | 10004 | no service | 没有找到指定服务 |
         * | 10005 | no characteristic | 没有找到指定特征 |
         * | 10006 | no connection | 当前连接已断开 |
         * | 10007 | property not support | 当前特征不支持此操作 |
         * | 10008 | system error | 其余所有系统上报的异常 |
         * | 10009 | system not support | Android 系统特有，系统版本低于 4.3 不支持 BLE |
         * | 10012 | operate time out | 连接超时 |
         * | 10013 | invalid_data | 连接 deviceId 为空或者是格式不正确 | */ errMsg: string
        /** 错误码
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 0 | ok | 正常 |
         * | -1 | already connect | 已连接 |
         * | 10000 | not init | 未初始化蓝牙适配器 |
         * | 10001 | not available | 当前蓝牙适配器不可用 |
         * | 10002 | no device | 没有找到指定设备 |
         * | 10003 | connection fail | 连接失败 |
         * | 10004 | no service | 没有找到指定服务 |
         * | 10005 | no characteristic | 没有找到指定特征 |
         * | 10006 | no connection | 当前连接已断开 |
         * | 10007 | property not support | 当前特征不支持此操作 |
         * | 10008 | system error | 其余所有系统上报的异常 |
         * | 10009 | system not support | Android 系统特有，系统版本低于 4.3 不支持 BLE |
         * | 10012 | operate time out | 连接超时 |
         * | 10013 | invalid_data | 连接 deviceId 为空或者是格式不正确 | */ errCode: number
    }
    interface Console {
        /** [console.debug()](https://developers.weixin.qq.com/minigame/dev/api/base/debug/console.debug.html)
         *
         * 向调试面板中打印 debug 日志 */
        debug(
            /** 日志内容，可以有任意多个。 */
            ...args: any[]
        ): void
        /** [console.error()](https://developers.weixin.qq.com/minigame/dev/api/base/debug/console.error.html)
         *
         * 向调试面板中打印 error 日志 */
        error(
            /** 日志内容，可以有任意多个。 */
            ...args: any[]
        ): void
        /** [console.group(string label)](https://developers.weixin.qq.com/minigame/dev/api/base/debug/console.group.html)
         *
         * 在调试面板中创建一个新的分组。随后输出的内容都会被添加一个缩进，表示该内容属于当前分组。调用 [console.groupEnd](https://developers.weixin.qq.com/minigame/dev/api/base/debug/console.groupEnd.html)之后分组结束。
         *
         * **注意**
         *
         * 仅在工具中有效，在 vConsole 中为空函数实现。 */
        group(
            /** 分组标记，可选。 */
            label?: string
        ): void
        /** [console.groupEnd()](https://developers.weixin.qq.com/minigame/dev/api/base/debug/console.groupEnd.html)
         *
         * 结束由 [console.group](https://developers.weixin.qq.com/minigame/dev/api/base/debug/console.group.html) 创建的分组
         *
         * **注意**
         *
         * 仅在工具中有效，在 vConsole 中为空函数实现。 */
        groupEnd(): void
        /** [console.info()](https://developers.weixin.qq.com/minigame/dev/api/base/debug/console.info.html)
         *
         * 向调试面板中打印 info 日志 */
        info(
            /** 日志内容，可以有任意多个。 */
            ...args: any[]
        ): void
        /** [console.log()](https://developers.weixin.qq.com/minigame/dev/api/base/debug/console.log.html)
         *
         * 向调试面板中打印 log 日志 */
        log(
            /** 日志内容，可以有任意多个。 */
            ...args: any[]
        ): void
        /** [console.warn()](https://developers.weixin.qq.com/minigame/dev/api/base/debug/console.warn.html)
         *
         * 向调试面板中打印 warn 日志 */
        warn(
            /** 日志内容，可以有任意多个。 */
            ...args: any[]
        ): void
    }
    interface DownloadTask {
        /** [DownloadTask.abort()](https://developers.weixin.qq.com/minigame/dev/api/network/download/DownloadTask.abort.html)
         *
         * 需要基础库： `1.4.0`
         *
         * 中断下载任务 */
        abort(): void
        /** [DownloadTask.offHeadersReceived(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/download/DownloadTask.offHeadersReceived.html)
*
* 需要基础库： `2.1.0`
*
* 移除 HTTP Response Header 事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

DownloadTask.onHeadersReceived(listener)
DownloadTask.offHeadersReceived(listener) // 需传入与监听时同一个的函数对象
``` */
        offHeadersReceived(
            /** onHeadersReceived 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: DownloadTaskOffHeadersReceivedCallback
        ): void
        /** [DownloadTask.offProgressUpdate(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/download/DownloadTask.offProgressUpdate.html)
*
* 需要基础库： `2.1.0`
*
* 移除下载进度变化事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

DownloadTask.onProgressUpdate(listener)
DownloadTask.offProgressUpdate(listener) // 需传入与监听时同一个的函数对象
``` */
        offProgressUpdate(
            /** onProgressUpdate 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: DownloadTaskOffProgressUpdateCallback
        ): void
        /** [DownloadTask.onHeadersReceived(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/download/DownloadTask.onHeadersReceived.html)
         *
         * 需要基础库： `2.1.0`
         *
         * 监听 HTTP Response Header 事件。会比请求完成事件更早 */
        onHeadersReceived(
            /** HTTP Response Header 事件的监听函数 */
            listener: DownloadTaskOnHeadersReceivedCallback
        ): void
        /** [DownloadTask.onProgressUpdate(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/download/DownloadTask.onProgressUpdate.html)
         *
         * 需要基础库： `1.4.0`
         *
         * 监听下载进度变化事件 */
        onProgressUpdate(
            /** 下载进度变化事件的监听函数 */
            listener: DownloadTaskOnProgressUpdateCallback
        ): void
    }
    interface FileError {
        /** 错误信息
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 1300001 | operation not permitted | 操作不被允许（例如，filePath 预期传入一个文件而实际传入一个目录） |
         * | 1300002 | no such file or directory ${path} | 文件/目录不存在，或者目标文件路径的上层目录不存在 |
         * | 1300005 | Input/output error | 输入输出流不可用 |
         * | 1300009 | bad file descriptor | 无效的文件描述符 |
         * | 1300013 | permission denied | 权限错误，文件是只读或只写 |
         * | 1300014 | Path permission denied | 传入的路径没有权限 |
         * | 1300020 | not a directory | dirPath 指定路径不是目录，常见于指定的写入路径的上级路径为一个文件的情况 |
         * | 1300021 | Is a directory | 指定路径是一个目录 |
         * | 1300022 | Invalid argument | 无效参数，可以检查length或offset是否越界 |
         * | 1300036 | File name too long | 文件名过长 |
         * | 1300066 | directory not empty | 目录不为空 |
         * | 1300201 | system error | 系统接口调用失败 |
         * | 1300202 | the maximum size of the file storage limit is exceeded | 存储空间不足，或文件大小超出上限（上限100M） |
         * | 1300203 | base64 encode error | 字符编码转换失败（例如 base64 格式错误） |
         * | 1300300 | sdcard not mounted | android sdcard 挂载失败 |
         * | 1300301 | unable to open as fileType | 无法以fileType打开文件 |
         * | 1301000 | permission denied, cannot access file path | 目标路径无访问权限（usr目录） |
         * | 1301002 | data to write is empty | 写入数据为空 |
         * | 1301003 | illegal operation on a directory | 不可对目录进行此操作（例如，指定的 filePath 是一个已经存在的目录） |
         * | 1301004 | illegal operation on a package directory | 不可对代码包目录进行此操作 |
         * | 1301005 | file already exists ${dirPath} | 已有同名文件或目录 |
         * | 1301006 | value of length is out of range | 传入的 length 不合法 |
         * | 1301007 | value of offset is out of range | 传入的 offset 不合法 |
         * | 1301009 | value of position is out of range | position值越界 |
         * | 1301100 | store directory is empty | store目录为空 |
         * | 1301102 | unzip open file fail | 压缩文件打开失败 |
         * | 1301103 | unzip entry fail | 解压单个文件失败 |
         * | 1301104 | unzip fail | 解压失败 |
         * | 1301111 | brotli decompress fail | brotli解压失败（例如，指定的 compressionAlgorithm 与文件实际压缩格式不符） |
         * | 1301112 | tempFilePath file not exist | 指定的 tempFilePath 找不到文件 |
         * | 1302001 | fail permission denied | 指定的 fd 路径没有读权限/没有写权限 |
         * | 1302002 | excced max concurrent fd limit | fd数量已达上限 |
         * | 1302003 | invalid flag | 无效的flag |
         * | 1302004 | permission denied when open using flag | 无法使用flag标志打开文件 |
         * | 1302005 | array buffer does not exist | 未传入arrayBuffer |
         * | 1302100 | array buffer is readonly | arrayBuffer只读 | */ errMsg: string
        /** 错误码
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 1300001 | operation not permitted | 操作不被允许（例如，filePath 预期传入一个文件而实际传入一个目录） |
         * | 1300002 | no such file or directory ${path} | 文件/目录不存在，或者目标文件路径的上层目录不存在 |
         * | 1300005 | Input/output error | 输入输出流不可用 |
         * | 1300009 | bad file descriptor | 无效的文件描述符 |
         * | 1300013 | permission denied | 权限错误，文件是只读或只写 |
         * | 1300014 | Path permission denied | 传入的路径没有权限 |
         * | 1300020 | not a directory | dirPath 指定路径不是目录，常见于指定的写入路径的上级路径为一个文件的情况 |
         * | 1300021 | Is a directory | 指定路径是一个目录 |
         * | 1300022 | Invalid argument | 无效参数，可以检查length或offset是否越界 |
         * | 1300036 | File name too long | 文件名过长 |
         * | 1300066 | directory not empty | 目录不为空 |
         * | 1300201 | system error | 系统接口调用失败 |
         * | 1300202 | the maximum size of the file storage limit is exceeded | 存储空间不足，或文件大小超出上限（上限100M） |
         * | 1300203 | base64 encode error | 字符编码转换失败（例如 base64 格式错误） |
         * | 1300300 | sdcard not mounted | android sdcard 挂载失败 |
         * | 1300301 | unable to open as fileType | 无法以fileType打开文件 |
         * | 1301000 | permission denied, cannot access file path | 目标路径无访问权限（usr目录） |
         * | 1301002 | data to write is empty | 写入数据为空 |
         * | 1301003 | illegal operation on a directory | 不可对目录进行此操作（例如，指定的 filePath 是一个已经存在的目录） |
         * | 1301004 | illegal operation on a package directory | 不可对代码包目录进行此操作 |
         * | 1301005 | file already exists ${dirPath} | 已有同名文件或目录 |
         * | 1301006 | value of length is out of range | 传入的 length 不合法 |
         * | 1301007 | value of offset is out of range | 传入的 offset 不合法 |
         * | 1301009 | value of position is out of range | position值越界 |
         * | 1301100 | store directory is empty | store目录为空 |
         * | 1301102 | unzip open file fail | 压缩文件打开失败 |
         * | 1301103 | unzip entry fail | 解压单个文件失败 |
         * | 1301104 | unzip fail | 解压失败 |
         * | 1301111 | brotli decompress fail | brotli解压失败（例如，指定的 compressionAlgorithm 与文件实际压缩格式不符） |
         * | 1301112 | tempFilePath file not exist | 指定的 tempFilePath 找不到文件 |
         * | 1302001 | fail permission denied | 指定的 fd 路径没有读权限/没有写权限 |
         * | 1302002 | excced max concurrent fd limit | fd数量已达上限 |
         * | 1302003 | invalid flag | 无效的flag |
         * | 1302004 | permission denied when open using flag | 无法使用flag标志打开文件 |
         * | 1302005 | array buffer does not exist | 未传入arrayBuffer |
         * | 1302100 | array buffer is readonly | arrayBuffer只读 | */ errCode: number
    }
    interface FileSystemManager {
        /** [Array.&lt;string&gt; FileSystemManager.readdirSync(string dirPath)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.readdirSync.html)
*
* [FileSystemManager.readdir](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.readdir.html) 的同步版本
*
* **注意事项**
*
* - readdir接口无法访问文件系统根路径(wxfile://)。
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
fs.readdir({
  dirPath: `${wx.env.USER_DATA_PATH}/example`,
  success(res) {
    console.log(res.files)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.readdirSync(`${wx.env.USER_DATA_PATH}/example`)
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        readdirSync(
            /** 要读取的目录路径 (本地路径) */
            dirPath: string
        ): string[]
        /** [ArrayBuffer FileSystemManager.readCompressedFileSync(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.readCompressedFileSync.html)
*
* 需要基础库： `2.21.1`
*
* 同步读取指定压缩类型的本地文件内容
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()

// 异步接口
fs.readCompressedFile({
  filePath: '${wx.env.USER_DATA_PATH}/hello.br',
  compressionAlgorithm: 'br',
  success(res) {
    console.log(res.data)
  },
  fail(res) {
    console.log('readCompressedFile fail', res)
  }
})

// 同步接口
try {
  const data = fs.readCompressedFileSync({
    filePath: '${wx.env.USER_DATA_PATH}/hello.br',
    compressionAlgorithm: 'br',
  })
  console.log(data)
} catch (err) {
  console.log(err)
}
``` */
        readCompressedFileSync(
            option: ReadCompressedFileSyncOption
        ): ArrayBuffer
        /** [FileSystemManager.access(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.access.html)
*
* 判断文件/目录是否存在
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
// 判断文件/目录是否存在
fs.access({
  path: `${wx.env.USER_DATA_PATH}/hello.txt`,
  success(res) {
    // 文件存在
    console.log(res)
  },
  fail(res) {
    // 文件不存在或其他错误
    console.error(res)
  }
})

// 同步接口
try {
  fs.accessSync(`${wx.env.USER_DATA_PATH}/hello.txt`)
} catch(e) {
  console.error(e)
}
``` */
        access(option: AccessOption): void
        /** [FileSystemManager.accessSync(string path)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.accessSync.html)
*
* [FileSystemManager.access](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.access.html) 的同步版本
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
// 判断文件/目录是否存在
fs.access({
  path: `${wx.env.USER_DATA_PATH}/hello.txt`,
  success(res) {
    // 文件存在
    console.log(res)
  },
  fail(res) {
    // 文件不存在或其他错误
    console.error(res)
  }
})

// 同步接口
try {
  fs.accessSync(`${wx.env.USER_DATA_PATH}/hello.txt`)
} catch(e) {
  console.error(e)
}
``` */
        accessSync(
            /** 要判断是否存在的文件/目录路径 (本地路径) */
            path: string
        ): void
        /** [FileSystemManager.appendFile(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.appendFile.html)
*
* 需要基础库： `2.1.0`
*
* 在文件结尾追加内容
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()

fs.appendFile({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  data: 'some text',
  encoding: 'utf8',
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  fs.appendFileSync(`${wx.env.USER_DATA_PATH}/hello.txt`, 'some text', 'utf8')
} catch(e) {
  console.error(e)
}
``` */
        appendFile(option: AppendFileOption): void
        /** [FileSystemManager.appendFileSync(string filePath, string|ArrayBuffer data, string encoding)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.appendFileSync.html)
*
* 需要基础库： `2.1.0`
*
* [FileSystemManager.appendFile](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.appendFile.html) 的同步版本
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()

fs.appendFile({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  data: 'some text',
  encoding: 'utf8',
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  fs.appendFileSync(`${wx.env.USER_DATA_PATH}/hello.txt`, 'some text', 'utf8')
} catch(e) {
  console.error(e)
}
``` */
        appendFileSync(
            /** 要追加内容的文件路径 (本地路径) */
            filePath: string,
            /** 要追加的文本或二进制数据 */
            data: string | ArrayBuffer,
            /** 指定写入文件的字符编码
             *
             * 参数 encoding 可选值：
             * - 'ascii': ;
             * - 'base64': ;
             * - 'binary': ;
             * - 'hex': ;
             * - 'ucs2': 以小端序读取;
             * - 'ucs-2': 以小端序读取;
             * - 'utf16le': 以小端序读取;
             * - 'utf-16le': 以小端序读取;
             * - 'utf-8': ;
             * - 'utf8': ;
             * - 'latin1': ; */
            encoding?:
                | 'ascii'
                | 'base64'
                | 'binary'
                | 'hex'
                | 'ucs2'
                | 'ucs-2'
                | 'utf16le'
                | 'utf-16le'
                | 'utf-8'
                | 'utf8'
                | 'latin1'
        ): void
        /** [FileSystemManager.close(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.close.html)
*
* 需要基础库： `2.16.1`
*
* 关闭文件
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
// 打开文件
fs.open({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  flag: 'a+',
  success(res) {
    // 关闭文件
    fs.close({
      fd: res.fd
    })
  }
})
``` */
        close(option: FileSystemManagerCloseOption): void
        /** [FileSystemManager.copyFile(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.copyFile.html)
*
* 复制文件
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
fs.copyFile({
  srcPath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  destPath: `${wx.env.USER_DATA_PATH}/hello_copy.txt`
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  fs.copyFileSync(
    `${wx.env.USER_DATA_PATH}/hello.txt`,
    `${wx.env.USER_DATA_PATH}/hello_copy.txt`
  )
} catch(e) {
  console.error(e)
}
``` */
        copyFile(option: CopyFileOption): void
        /** [FileSystemManager.copyFileSync(string srcPath, string destPath)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.copyFileSync.html)
*
* [FileSystemManager.copyFile](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.copyFile.html) 的同步版本
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
fs.copyFile({
  srcPath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  destPath: `${wx.env.USER_DATA_PATH}/hello_copy.txt`
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  fs.copyFileSync(
    `${wx.env.USER_DATA_PATH}/hello.txt`,
    `${wx.env.USER_DATA_PATH}/hello_copy.txt`
  )
} catch(e) {
  console.error(e)
}
``` */
        copyFileSync(
            /** 源文件路径，支持本地路径 */
            srcPath: string,
            /** 目标文件路径，支持本地路径 */
            destPath: string
        ): void
        /** [FileSystemManager.fstat(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.fstat.html)
*
* 需要基础库： `2.16.1`
*
* 获取文件的状态信息
*
* **示例代码**
*
* ```js
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
        console.log(res.stats)
      }
    })
  }
})
``` */
        fstat(option: FstatOption): void
        /** [FileSystemManager.ftruncate(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.ftruncate.html)
*
* 需要基础库： `2.16.1`
*
* 对文件内容进行截断操作
*
* **示例代码**
*
* ```js
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
      }
    })
  }
})
``` */
        ftruncate(option: FtruncateOption): void
        /** [FileSystemManager.getFileInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.getFileInfo.html)
         *
         * 获取该小程序下的 本地临时文件 或 本地缓存文件 信息 */
        getFileInfo(option: GetFileInfoOption): void
        /** [FileSystemManager.getSavedFileList(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.getSavedFileList.html)
         *
         * 获取该小程序下已保存的本地缓存文件列表 */
        getSavedFileList(option?: GetSavedFileListOption): void
        /** [FileSystemManager.mkdir(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.mkdir.html)
*
* 创建目录
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
fs.mkdir({
  dirPath: `${wx.env.USER_DATA_PATH}/example`,
  recursive: false,
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  fs.mkdirSync(`${wx.env.USER_DATA_PATH}/example`, false)
} catch(e) {
  console.error(e)
}
``` */
        mkdir(option: MkdirOption): void
        /** [FileSystemManager.mkdirSync(string dirPath, boolean recursive)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.mkdirSync.html)
*
* [FileSystemManager.mkdir](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.mkdir.html) 的同步版本
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
fs.mkdir({
  dirPath: `${wx.env.USER_DATA_PATH}/example`,
  recursive: false,
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  fs.mkdirSync(`${wx.env.USER_DATA_PATH}/example`, false)
} catch(e) {
  console.error(e)
}
``` */
        mkdirSync(
            /** 创建的目录路径 (本地路径) */
            dirPath: string,
            /** 需要基础库： `2.3.0`
             *
             * 是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。 */
            recursive?: boolean
        ): void
        /** [FileSystemManager.open(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.open.html)
*
* 需要基础库： `2.16.1`
*
* 打开文件，返回文件描述符
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
fs.open({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  flag: 'a+',
  success(res) {
    console.log(res.fd)
  }
})
``` */
        open(option: OpenOption): void
        /** [FileSystemManager.read(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.read.html)
*
* 需要基础库： `2.16.1`
*
* 读文件
*
* **示例代码**
*
* ```js
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
      }
    })
  }
})
```
* ## 注意事项
* - 小游戏 iOS 高性能模式（iOSHighPerformance）暂不支持 FileSystemManager.read 接口，请使用 FileSystemManager.readFile 接口代替 */
        read(option: ReadOption): void
        /** [FileSystemManager.readCompressedFile(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.readCompressedFile.html)
*
* 需要基础库： `2.21.1`
*
* 读取指定压缩类型的本地文件内容
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()

// 异步接口
fs.readCompressedFile({
  filePath: '${wx.env.USER_DATA_PATH}/hello.br',
  compressionAlgorithm: 'br',
  success(res) {
    console.log(res.data)
  },
  fail(res) {
    console.log('readCompressedFile fail', res)
  }
})

// 同步接口
const data = fs.readCompressedFileSync({
  filePath: '${wx.env.USER_DATA_PATH}/hello.br',
  compressionAlgorithm: 'br',
})
console.log(data)
``` */
        readCompressedFile(option: ReadCompressedFileOption): void
        /** [FileSystemManager.readFile(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.readFile.html)
*
* 读取本地文件内容。单个文件大小上限为100M。
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
fs.readFile({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  encoding: 'utf8',
  position: 0,
  success(res) {
    console.log(res.data)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.readFileSync(`${wx.env.USER_DATA_PATH}/hello.txt`, 'utf8', 0)
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        readFile(option: ReadFileOption): void
        /** [FileSystemManager.readZipEntry(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.readZipEntry.html)
*
* 需要基础库： `2.17.3`
*
* 读取压缩包内的文件
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
// 读取zip内某个或多个文件
fs.readZipEntry({
  filePath: 'wxfile://from/to.zip',
  entries: [{
    path: 'some_folder/my_file.txt', // zip内文件路径
    encoding: 'utf-8', // 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容
    position: 0, // 从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：byte
    length: 10000, // 指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte
  }, {
    path: 'other_folder/orther_file.txt', // zip内文件路径
  }],
  success(res) {
    console.log(res.entries)
    // res.entries === {
    //     'some_folder/my_file.txt': {
    //         errMsg: 'readZipEntry:ok',
    //         data: 'xxxxxx'
    //     },
    //     'other_folder/orther_file.txt': {
    //         data: (ArrayBuffer)
    //     }
    // }
  },
  fail(res) {
    console.log(res.errMsg)
  },
})

// 读取zip内所有文件。允许指定统一的encoding。position、length则不再允许指定，分别默认为0和文件长度
fs.readZipEntry({
  filePath: 'wxfile://from/to.zip',
  entries: 'all'
  encoding: 'utf-8', // 统一指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容
  success(res) {
    console.log(res.entries)
    // res.entries === {
    //     'some_folder/my_file.txt': {
    //         errMsg: 'readZipEntry:ok',
    //         data: 'xxxxxx'
    //     },
    //     'other_folder/orther_file.txt': {
    //         errMsg: 'readZipEntry:ok',
    //         data: 'xxxxxx'
    //     }
    //  }
  },
  fail(res) {
    console.log(res.errMsg)
  },
})
``` */
        readZipEntry(option: ReadZipEntryOption): void
        /** [FileSystemManager.readdir(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.readdir.html)
*
* 读取目录内文件列表
*
* **注意事项**
*
* - readdir接口无法访问文件系统根路径(wxfile://)。
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
fs.readdir({
  dirPath: `${wx.env.USER_DATA_PATH}/example`,
  success(res) {
    console.log(res.files)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.readdirSync(`${wx.env.USER_DATA_PATH}/example`)
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        readdir(option: ReaddirOption): void
        /** [FileSystemManager.removeSavedFile(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.removeSavedFile.html)
         *
         * 删除该小程序下已保存的本地缓存文件 */
        removeSavedFile(option: RemoveSavedFileOption): void
        /** [FileSystemManager.rename(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.rename.html)
*
* 重命名文件。可以把文件从 oldPath 移动到 newPath
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
fs.rename({
  oldPath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  newPath: `${wx.env.USER_DATA_PATH}/hello_new.txt`,
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.renameSync(
    `${wx.env.USER_DATA_PATH}/hello.txt`,
    `${wx.env.USER_DATA_PATH}/hello_new.txt`
  )
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        rename(option: RenameOption): void
        /** [FileSystemManager.renameSync(string oldPath, string newPath)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.renameSync.html)
*
* [FileSystemManager.rename](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.rename.html) 的同步版本
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
fs.rename({
  oldPath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  newPath: `${wx.env.USER_DATA_PATH}/hello_new.txt`,
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.renameSync(
    `${wx.env.USER_DATA_PATH}/hello.txt`,
    `${wx.env.USER_DATA_PATH}/hello_new.txt`
  )
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        renameSync(
            /** 源文件路径，支持本地路径 */
            oldPath: string,
            /** 新文件路径，支持本地路径 */
            newPath: string
        ): void
        /** [FileSystemManager.rmdir(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.rmdir.html)
*
* 删除目录
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
fs.rmdir({
  dirPath: `${wx.env.USER_DATA_PATH}/example`,
  recursive: false,
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.rmdirSync(`${wx.env.USER_DATA_PATH}/example`, false)
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        rmdir(option: RmdirOption): void
        /** [FileSystemManager.rmdirSync(string dirPath, boolean recursive)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.rmdirSync.html)
*
* [FileSystemManager.rmdir](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.rmdir.html) 的同步版本
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
fs.rmdir({
  dirPath: `${wx.env.USER_DATA_PATH}/example`,
  recursive: false,
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.rmdirSync(`${wx.env.USER_DATA_PATH}/example`, false)
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        rmdirSync(
            /** 要删除的目录路径 (本地路径) */
            dirPath: string,
            /** 需要基础库： `2.3.0`
             *
             * 是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。 */
            recursive?: boolean
        ): void
        /** [FileSystemManager.saveFile(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.saveFile.html)
         *
         * 保存临时文件到本地。此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用。 */
        saveFile(option: SaveFileOption): void
        /** [FileSystemManager.stat(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.stat.html)
         *
         * 获取文件 Stats 对象 */
        stat(option: StatOption): void
        /** [FileSystemManager.truncate(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.truncate.html)
*
* 需要基础库： `2.16.1`
*
* 对文件内容进行截断操作
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
fs.truncate({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  length: 10, // 从第10个字节开始截断
  success(res) {
    console.log(res)
  }
})
``` */
        truncate(option: TruncateOption): void
        /** [FileSystemManager.unlink(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.unlink.html)
*
* 删除文件
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
fs.unlink({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.unlinkSync(`${wx.env.USER_DATA_PATH}/hello.txt`)
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        unlink(option: UnlinkOption): void
        /** [FileSystemManager.unlinkSync(string filePath)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.unlinkSync.html)
*
* [FileSystemManager.unlink](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.unlink.html) 的同步版本
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
fs.unlink({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.unlinkSync(`${wx.env.USER_DATA_PATH}/hello.txt`)
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        unlinkSync(
            /** 要删除的文件路径 (本地路径) */
            filePath: string
        ): void
        /** [FileSystemManager.unzip(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.unzip.html)
*
* 解压文件
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
fs.unzip({
  zipFilePath: `${wx.env.USER_DATA_PATH}/example.zip`,
  targetPath: '${wx.env.USER_DATA_PATH}/example',
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})
``` */
        unzip(option: UnzipOption): void
        /** [FileSystemManager.write(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.write.html)
*
* 需要基础库： `2.16.1`
*
* 写入文件
*
* **示例代码**
*
* ```js
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
        console.log(res.bytesWritten)
      }
    })
  }
})
``` */
        write(option: WriteOption): void
        /** [FileSystemManager.writeFile(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.writeFile.html)
*
* 写文件
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
fs.writeFile({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  data: 'some text or arrayBuffer',
  encoding: 'utf8',
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.writeFileSync(
    `${wx.env.USER_DATA_PATH}/hello.txt`,
    'some text or arrayBuffer',
    'utf8'
  )
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        writeFile(option: WriteFileOption): void
        /** [FileSystemManager.writeFileSync(string filePath, string|ArrayBuffer data, string encoding)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.writeFileSync.html)
*
* [FileSystemManager.writeFile](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.writeFile.html) 的同步版本
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
fs.writeFile({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  data: 'some text or arrayBuffer',
  encoding: 'utf8',
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.writeFileSync(
    `${wx.env.USER_DATA_PATH}/hello.txt`,
    'some text or arrayBuffer',
    'utf8'
  )
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        writeFileSync(
            /** 要写入的文件路径 (本地路径) */
            filePath: string,
            /** 要写入的文本或二进制数据 */
            data: string | ArrayBuffer,
            /** 指定写入文件的字符编码
             *
             * 参数 encoding 可选值：
             * - 'ascii': ;
             * - 'base64': （注意，选择 base64 编码，data 只需要传 base64 内容本身，不要传 Data URI 前缀，否则会报 fail base64 encode error 错误。例如，传 aGVsbG8= 而不是传 data:image/png;base64,aGVsbG8= ）;
             * - 'binary': ;
             * - 'hex': ;
             * - 'ucs2': 以小端序读取;
             * - 'ucs-2': 以小端序读取;
             * - 'utf16le': 以小端序读取;
             * - 'utf-16le': 以小端序读取;
             * - 'utf-8': ;
             * - 'utf8': ;
             * - 'latin1': ; */
            encoding?:
                | 'ascii'
                | 'base64'
                | 'binary'
                | 'hex'
                | 'ucs2'
                | 'ucs-2'
                | 'utf16le'
                | 'utf-16le'
                | 'utf-8'
                | 'utf8'
                | 'latin1'
        ): void
        /** [[ReadResult](https://developers.weixin.qq.com/minigame/dev/api/file/ReadResult.html) FileSystemManager.readSync(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.readSync.html)
*
* 需要基础库： `2.16.1`
*
* 读文件
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
const ab = new ArrayBuffer(1024)
const fd = fs.openSync({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  flag: 'a+'
})
const res = fs.readSync({
  fd: fd,
  arrayBuffer: ab,
  length: 10
})
console.log(res)
```
* ## 注意事项
* - 小游戏 iOS 高性能模式（iOSHighPerformance）暂不支持 FileSystemManager.readSync 接口，请使用 FileSystemManager.readFileSync 接口代替 */
        readSync(option: ReadSyncOption): ReadResult
        /** [[Stats](https://developers.weixin.qq.com/minigame/dev/api/file/Stats.html) FileSystemManager.fstatSync(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.fstatSync.html)
*
* 需要基础库： `2.16.1`
*
* 同步获取文件的状态信息
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
const fd = fs.openSync({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  flag: 'a+'
})
const stats = fs.fstatSync({fd: fd})
console.log(stats)
``` */
        fstatSync(option: FstatSyncOption): Stats
        /** [[Stats](https://developers.weixin.qq.com/minigame/dev/api/file/Stats.html)|Array.&lt;[FileStats](https://developers.weixin.qq.com/minigame/dev/api/file/FileStats.html)&gt; FileSystemManager.statSync(string path, boolean recursive)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.statSync.html)
         *
         * [FileSystemManager.stat](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.stat.html) 的同步版本 */
        statSync(
            /** 文件/目录路径 (本地路径) */
            path: string,
            /** 需要基础库： `2.3.0`
             *
             * 是否递归获取目录下的每个文件的 Stats 信息 */
            recursive?: boolean
        ): Stats | FileStats[]
        /** [[WriteResult](https://developers.weixin.qq.com/minigame/dev/api/file/WriteResult.html) FileSystemManager.writeSync(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.writeSync.html)
*
* 需要基础库： `2.16.1`
*
* 同步写入文件
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
const fd = fs.openSync({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  flag: 'a+'
})
const res = fs.writeSync({
  fd: fd,
  data: 'some text'
})
console.log(res.bytesWritten)
``` */
        writeSync(option: WriteSyncOption): WriteResult
        /** [string FileSystemManager.openSync(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.openSync.html)
*
* 需要基础库： `2.16.1`
*
* 同步打开文件，返回文件描述符
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
const fd = fs.openSync({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  flag: 'a+'
})
console.log(fd)
``` */
        openSync(option: OpenSyncOption): string
        /** [string FileSystemManager.saveFileSync(string tempFilePath, string filePath)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.saveFileSync.html)
         *
         * [FileSystemManager.saveFile](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.saveFile.html) 的同步版本 */
        saveFileSync(
            /** 临时存储文件路径 (本地路径) */
            tempFilePath: string,
            /** 要存储的文件路径 (本地路径) */
            filePath?: string
        ): string
        /** [string|ArrayBuffer FileSystemManager.readFileSync(string filePath, string encoding, number position, number length)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.readFileSync.html)
*
* [FileSystemManager.readFile](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.readFile.html) 的同步版本
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
fs.readFile({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  encoding: 'utf8',
  position: 0,
  success(res) {
    console.log(res.data)
  },
  fail(res) {
    console.error(res)
  }
})

// 同步接口
try {
  const res = fs.readFileSync(`${wx.env.USER_DATA_PATH}/hello.txt`, 'utf8', 0)
  console.log(res)
} catch(e) {
  console.error(e)
}
``` */
        readFileSync(
            /** 要读取的文件的路径 (本地路径) */
            filePath: string,
            /** 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容
             *
             * 参数 encoding 可选值：
             * - 'ascii': ;
             * - 'base64': ;
             * - 'binary': ;
             * - 'hex': ;
             * - 'ucs2': 以小端序读取;
             * - 'ucs-2': 以小端序读取;
             * - 'utf16le': 以小端序读取;
             * - 'utf-16le': 以小端序读取;
             * - 'utf-8': ;
             * - 'utf8': ;
             * - 'latin1': ; */
            encoding?:
                | 'ascii'
                | 'base64'
                | 'binary'
                | 'hex'
                | 'ucs2'
                | 'ucs-2'
                | 'utf16le'
                | 'utf-16le'
                | 'utf-8'
                | 'utf8'
                | 'latin1',
            /** 需要基础库： `2.10.0`
             *
             * 从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：byte */
            position?: number,
            /** 需要基础库： `2.10.0`
             *
             * 指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte */
            length?: number
        ): string | ArrayBuffer
        /** [undefined FileSystemManager.closeSync(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.closeSync.html)
*
* 需要基础库： `2.16.1`
*
* 同步关闭文件
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
const fd = fs.openSync({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  flag: 'a+'
})

// 关闭文件
fs.closeSync({fd: fd})
``` */
        closeSync(option: CloseSyncOption): undefined
        /** [undefined FileSystemManager.ftruncateSync(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.ftruncateSync.html)
*
* 需要基础库： `2.16.1`
*
* 对文件内容进行截断操作
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
const fd = fs.openSync({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  flag: 'a+'
})
fs.ftruncateSync({
  fd: fd,
  length: 10 // 从第10个字节开始截断文件
})
``` */
        ftruncateSync(option: FtruncateSyncOption): undefined
        /** [undefined FileSystemManager.truncateSync(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.truncateSync.html)
*
* 需要基础库： `2.16.1`
*
* 对文件内容进行截断操作 (truncate 的同步版本)
*
* **示例代码**
*
* ```js
const fs = wx.getFileSystemManager()
fs.truncateSync({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  length: 10, // 从第10个字节开始截断
})
``` */
        truncateSync(option: TruncateSyncOption): undefined
    }
    interface GameLogManager {
        /** [GameLogManager.log(Object param)](https://developers.weixin.qq.com/minigame/dev/api/data-analysis/GameLogManager.log.html)
*
* 需要基础库： `3.7.4`
*
* 上报日志。log 方法支持在上报时传入日志等级、日志标签和日志内容。可设置上报后的回调函数。
*
* **示例代码**
*
* ```js
const logger = wx.getGameLogManager({
  commonInfo: { version: '1.0.0' },
})
logger.log({
  level: 'info',
  key: 'login',
  value: { loginTime: '1731915939' },
})
``` */
        log(
            /** 日志上报的参数对象。 */
            param: LogParam
        ): void
        /** [GameLogManager.updateCommonInfo(Object newCommonInfo)](https://developers.weixin.qq.com/minigame/dev/api/data-analysis/GameLogManager.updateCommonInfo.html)
*
* 需要基础库： `3.7.4`
*
* 该方法接受一个对象，并将其与当前logger的全局 commonInfo 对象进行合并。合并操作仅限于第一层属性，嵌套的属性将保持不变。如果合并的对象中存在与当前 commonInfo 相同的属性，则新属性将覆盖旧属性。
*
* **示例代码**
*
* ```js
const logger = wx.getGameLogManager({
  commonInfo: { env: 'dev' }
})
logger.setCommonInfo({ version: '1.0.0' })
logger.getCommonInfo()  // { env: 'dev', version: '1.0.0' }

logger.setCommonInfo({ env: 'production' })
logger.getCommonInfo()  // { env: 'production', version: '1.0.0' }
``` */
        updateCommonInfo(
            /** 新的 commonInfo 对象。数据类型为 object，且能够通过 JSON.stringify 序列化。 */
            newCommonInfo?: IAnyObject
        ): void
        /** [Object GameLogManager.getCommonInfo()](https://developers.weixin.qq.com/minigame/dev/api/data-analysis/GameLogManager.getCommonInfo.html)
*
* 需要基础库： `3.7.4`
*
* 读取当前 logger 的全局 commonInfo 对象。
*
* **示例代码**
*
* ```js
const logger = wx.getGameLogManager({
  commonInfo: { env: 'production' }
})
logger.getCommonInfo() // { env: 'production' }
``` */
        getCommonInfo(): IAnyObject
        /** [Object GameLogManager.tag(string key)](https://developers.weixin.qq.com/minigame/dev/api/data-analysis/GameLogManager.tag.html)
*
* 需要基础库： `3.7.4`
*
* tag 方法接受一个字符串参数，作为上报日志的 key 。同时返回 info、warn、error、debug 四个上报方法。若不传入 key 参数，上报使用默认 key 'default'。与使用 log 方法上报不同，使用 tag 返回的方法上报日志，不需要重复设置日志等级、日志标签，简化了上报操作。
*
* **示例代码**
*
* ```js
const logger = wx.getGameLogManager({
  commonInfo: { version: '1.0.0' },
})

const newUserLogger = logger.tag('newUser') // 用于登录相关日志上报
newUserLogger.info('userName', false) // 上报 info 级别的日志

const cacheLogger = logger.tag('cache') // 用于缓存相关日志上报
cacheLogger.warn('cache not found', { key: 'tableCache' }) // 上报 warn 级别的日志

const navigationLogger = logger.tag('navigation')
navigationLogger.error({ reason: 'no permission' })
``` */
        tag(
            /** 日志标签，用于日志分类（如 登录、战斗……）。key 只能是 string 类型，且能够通过 JSON.stringify 序列化。若不传入 key 参数，上报使用默认 key 'default'。 */
            key?: string
        ): GameTaggedLogger
    }
    interface GameRecorder {
        /** [GameRecorder.off(string event, function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.off.html)
         *
         * 需要基础库： `2.8.0`
         *
         * 取消监听录制事件。当对应事件触发时，该回调函数不再执行。 */
        off(
            /** 事件名
             *
             * 参数 event 可选值：
             * - 'start': 录制开始事件。当调用 [GameRecorder.start()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.start.html) 且客户端真正开始了对游戏画面录制时触发该事件。;
             * - 'stop': 录制结束事件。当调用 [GameRecorder.stop()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.stop.html) 且客户端真正停止了对游戏画面录制时触发该事件。;
             * - 'pause': 录制暂停事件。当调用 [GameRecorder.pause()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.pause.html) 且客户端真正暂停了对游戏画面录制时触发该事件。;
             * - 'resume': 录制恢复事件。当调用 [GameRecorder.resume()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.resume.html) 且客户端真正恢复了对游戏画面录制时触发该事件。;
             * - 'abort': 录制取消事件。当调用 [GameRecorder.abort()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.abort.html) 且客户端真正取消了对游戏画面录制时触发该事件。;
             * - 'timeUpdate': 录制时间更新事件。在录制过程中触发该事件。;
             * - 'error': 错误事件。当录制和分享过程中发生错误时触发该事件。录制是指当调用 [GameRecorder](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.html) 的接口进行录制；分享是指用户点击 [GameRecorderShareButton](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorderShareButton.html) 发起编辑界面并进行分享的过程。; */
            event:
                | 'start'
                | 'stop'
                | 'pause'
                | 'resume'
                | 'abort'
                | 'timeUpdate'
                | 'error',
            /** 事件触发时不再执行的回调函数 */
            callback: (...args: any[]) => any
        ): void
        /** [GameRecorder.on(string event, function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.on.html)
*
* 需要基础库： `2.8.0`
*
* 注册监听录制事件的回调函数。当对应事件触发时，回调函数会被执行。
*
* **事件参数**
*
* 除了 timeUpdate error stop 事件外，其他事件都是无参的
*
* __timeUpdate__
*
* | 属性 | 类型 | 说明 |
* | -- | --- | --- |
* | currentTime | number | 当前视频录制到第几秒 |
*
* ```javascript
const recorder = wx.getGameRecorder()
recorder.on('timeUpdate', res => {
  console.log(res.currentTime)
})
```
*
* __error__
*
* | 属性 | 类型 | 说明 |
* | -- | --- | --- |
* | code | number | 错误码 |
* | message | string | 错误信息 |
*
* ```javascript
const recorder = wx.getGameRecorder()
recorder.on('error', res => {
  console.log('错误码', res.error.code)
  console.log('错误信息', res.error.message)

  // 对错误码进行判断
  if (res.error.code === wx.error.GameRecorder_StartWhileAlreadyStartRecording) {

  }
})
```
*
* __stop__
*
* | 属性 | 类型 | 说明 |
* | -- | --- | --- |
* | duration | number | 视频的时长，单位 ms 毫秒 |
*
* ```javascript
const recorder = wx.getGameRecorder()
recorder.on('stop', res => {
  console.log('视频时长'), res.duration)
})
``` */
        on(
            /** 事件名
             *
             * 参数 event 可选值：
             * - 'start': 录制开始事件。当调用 [GameRecorder.start()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.start.html) 且客户端真正开始了对游戏画面录制时触发该事件。;
             * - 'stop': 录制结束事件。当调用 [GameRecorder.stop()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.stop.html) 且客户端真正停止了对游戏画面录制时触发该事件。;
             * - 'pause': 录制暂停事件。当调用 [GameRecorder.pause()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.pause.html) 且客户端真正暂停了对游戏画面录制时触发该事件。;
             * - 'resume': 录制恢复事件。当调用 [GameRecorder.resume()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.resume.html) 且客户端真正恢复了对游戏画面录制时触发该事件。;
             * - 'abort': 录制取消事件。当调用 [GameRecorder.abort()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.abort.html) 且客户端真正取消了对游戏画面录制时触发该事件。;
             * - 'timeUpdate': 录制时间更新事件。在录制过程中触发该事件。;
             * - 'error': 错误事件。当录制和分享过程中发生错误时触发该事件。录制是指当调用 [GameRecorder](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.html) 的接口进行录制；分享是指用户点击 [GameRecorderShareButton](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorderShareButton.html) 发起编辑界面并进行分享的过程。; */
            event:
                | 'start'
                | 'stop'
                | 'pause'
                | 'resume'
                | 'abort'
                | 'timeUpdate'
                | 'error',
            /** 事件触发时执行的回调函数 */
            callback: (...args: any[]) => any
        ): void
        /** [GameRecorder.start(Object object)](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.start.html)
         *
         * 需要基础库： `2.8.0`
         *
         * 开始录制游戏画面 */
        start(option: GameRecorderStartOption): void
        /** [Promise GameRecorder.abort()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.abort.html)
         *
         * 需要基础库： `2.8.0`
         *
         * 放弃录制游戏画面。此时已经录制的内容会被丢弃。 */
        abort(): Promise<any>
        /** [Promise GameRecorder.pause()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.pause.html)
         *
         * 需要基础库： `2.8.0`
         *
         * 暂停录制游戏画面。 */
        pause(): Promise<any>
        /** [Promise GameRecorder.resume()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.resume.html)
         *
         * 需要基础库： `2.8.0`
         *
         * 恢复录制游戏画面。 */
        resume(): Promise<any>
        /** [Promise GameRecorder.stop()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.stop.html)
         *
         * 需要基础库： `2.8.0`
         *
         * 结束录制游戏画面。结束录制后可以发起分享。 */
        stop(): Promise<any>
        /** [boolean GameRecorder.isAtempoSupported()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.isAtempoSupported.html)
         *
         * 需要基础库： `2.10.0`
         *
         * 获取是否支持调节录制视频的播放速率 */
        isAtempoSupported(): boolean
        /** [boolean GameRecorder.isFrameSupported()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.isFrameSupported.html)
         *
         * 需要基础库： `2.8.0`
         *
         * 获取是否支持录制游戏画面 */
        isFrameSupported(): boolean
        /** [boolean GameRecorder.isSoundSupported()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.isSoundSupported.html)
         *
         * 需要基础库： `2.8.0`
         *
         * 获取是否在录制游戏画面的同时支持录制游戏音频的信息 */
        isSoundSupported(): boolean
        /** [boolean GameRecorder.isVolumeSupported()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.isVolumeSupported.html)
         *
         * 需要基础库： `2.10.0`
         *
         * 获取是否支持调节录制视频的音量 */
        isVolumeSupported(): boolean
    }
    interface GameRecorderError {
        /** 错误信息
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 22002 | unknown error | 未知错误，没有被归纳到的错误 |
         * | 22012 | internal failed | 游戏画面录制 SDK 内部错误 |
         * | 22022 | frame not supported | 当前设备不支持录制游戏画面 |
         * | 22103 | duration invalid | duration 参数不合法 |
         * | 22113 | bitrate invalid | bitrate 参数不合法 |
         * | 22123 | fps invalid | fps 参数不合法 |
         * | 22133 | gop invalid | gop 参数不合法 |
         * | 22143 | start while already start recording | 在已经开始录制的情况下调用 start |
         * | 22153 | start while already paused | 在已经暂停录制的情况下调用 start，此时只能调用 resume 恢复录制 |
         * | 22203 | pause while not start recording | 在还没有开始录制的情况下调用 pause |
         * | 22213 | pause while already paused | 在已经暂停录制的情况下调用 pause |
         * | 22303 | resume while not start recording | 在还没有开始录制的情况下调用 resume |
         * | 22313 | resume while recording | 在录制中调用 resume，调用 resume 只能在暂停状态下 |
         * | 22403 | abort while not start recording | 在还没有开始录制的情况下调用 abort |
         * | 22503 | stop while not start recording | 在还没有开始录制的情况下调用 stop |
         * | 22603 | no recorded video | 在还没有一个录制好的对局回放的情况下发起分享 |
         * | 22613 | bgm not found | share.bgm 指定的额背景音乐不存在 |
         * | 22623 | time range invalid | share.timeRange 不合法 |
         * | 22633 | duration out of limit | share.timeRange 的所有片段的总和超出上限 |
         * | 22643 | time range too short.It should be longer than 2s | share.timeRange 太短 | */ errMsg: string
        /** 错误码
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 22002 | unknown error | 未知错误，没有被归纳到的错误 |
         * | 22012 | internal failed | 游戏画面录制 SDK 内部错误 |
         * | 22022 | frame not supported | 当前设备不支持录制游戏画面 |
         * | 22103 | duration invalid | duration 参数不合法 |
         * | 22113 | bitrate invalid | bitrate 参数不合法 |
         * | 22123 | fps invalid | fps 参数不合法 |
         * | 22133 | gop invalid | gop 参数不合法 |
         * | 22143 | start while already start recording | 在已经开始录制的情况下调用 start |
         * | 22153 | start while already paused | 在已经暂停录制的情况下调用 start，此时只能调用 resume 恢复录制 |
         * | 22203 | pause while not start recording | 在还没有开始录制的情况下调用 pause |
         * | 22213 | pause while already paused | 在已经暂停录制的情况下调用 pause |
         * | 22303 | resume while not start recording | 在还没有开始录制的情况下调用 resume |
         * | 22313 | resume while recording | 在录制中调用 resume，调用 resume 只能在暂停状态下 |
         * | 22403 | abort while not start recording | 在还没有开始录制的情况下调用 abort |
         * | 22503 | stop while not start recording | 在还没有开始录制的情况下调用 stop |
         * | 22603 | no recorded video | 在还没有一个录制好的对局回放的情况下发起分享 |
         * | 22613 | bgm not found | share.bgm 指定的额背景音乐不存在 |
         * | 22623 | time range invalid | share.timeRange 不合法 |
         * | 22633 | duration out of limit | share.timeRange 的所有片段的总和超出上限 |
         * | 22643 | time range too short.It should be longer than 2s | share.timeRange 太短 | */ errCode: number
    }
    interface GameServerManager {
        /** [GameServerManager.getFriendsStateData(Object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.getFriendsStateData.html)
         *
         * 需要基础库： `2.9.4`
         *
         * 获取所有好友的在线状态及信息。该接口需要用户授权，且只在开放数据域下可用。 */
        getFriendsStateData(option?: GetFriendsStateDataOption): void
        /** [GameServerManager.inviteFriend(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.inviteFriend.html)
         *
         * 需要基础库： `2.9.4`
         *
         * 邀请好友，该好友的系统状态必须为在线（该接口需要在开放数据域使用）该接口没有回调也没有返回值 */
        inviteFriend(option: InviteFriendOption): void
        /** [GameServerManager.offBeKickedOut(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offBeKickedOut.html)
*
* 移除自己被踢出当前房间的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

GameServerManager.onBeKickedOut(listener)
GameServerManager.offBeKickedOut(listener) // 需传入与监听时同一个的函数对象
``` */
        offBeKickedOut(
            /** onBeKickedOut 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffBeKickedOutCallback
        ): void
        /** [GameServerManager.offBroadcast(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offBroadcast.html)
*
* 移除收到同个房间内的广播消息的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

GameServerManager.onBroadcast(listener)
GameServerManager.offBroadcast(listener) // 需传入与监听时同一个的函数对象
``` */
        offBroadcast(
            /** onBroadcast 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffBroadcastCallback
        ): void
        /** [GameServerManager.offDisconnect(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offDisconnect.html)
*
* 移除断开连接，收到此事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

GameServerManager.onDisconnect(listener)
GameServerManager.offDisconnect(listener) // 需传入与监听时同一个的函数对象
``` */
        offDisconnect(
            /** onDisconnect 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffDisconnectCallback
        ): void
        /** [GameServerManager.offGameEnd(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offGameEnd.html)
*
* 移除帧同步游戏结束的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

GameServerManager.onGameEnd(listener)
GameServerManager.offGameEnd(listener) // 需传入与监听时同一个的函数对象
``` */
        offGameEnd(
            /** onGameEnd 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffGameEndCallback
        ): void
        /** [GameServerManager.offGameStart(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offGameStart.html)
*
* 移除帧同步游戏开始的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

GameServerManager.onGameStart(listener)
GameServerManager.offGameStart(listener) // 需传入与监听时同一个的函数对象
``` */
        offGameStart(
            /** onGameStart 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffGameStartCallback
        ): void
        /** [GameServerManager.offInvite(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offInvite.html)
*
* 需要基础库： `2.9.4`
*
* 移除接收邀请，当用户确认邀请之后会收到此事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

GameServerManager.onInvite(listener)
GameServerManager.offInvite(listener) // 需传入与监听时同一个的函数对象
``` */
        offInvite(
            /** onInvite 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffInviteCallback
        ): void
        /** [GameServerManager.offLockStepError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offLockStepError.html)
*
* 需要基础库： `2.11.2`
*
* 移除帧同步出错的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

GameServerManager.onLockStepError(listener)
GameServerManager.offLockStepError(listener) // 需传入与监听时同一个的函数对象
``` */
        offLockStepError(
            /** onLockStepError 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffLockStepErrorCallback
        ): void
        /** [GameServerManager.offLogout(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offLogout.html)
*
* 移除用户登出游戏服务事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

GameServerManager.onLogout(listener)
GameServerManager.offLogout(listener) // 需传入与监听时同一个的函数对象
``` */
        offLogout(
            /** onLogout 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffLogoutCallback
        ): void
        /** [GameServerManager.offMatch(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offMatch.html)
*
* 需要基础库： `2.14.4`
*
* 移除游戏匹配成功的事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

GameServerManager.onMatch(listener)
GameServerManager.offMatch(listener) // 需传入与监听时同一个的函数对象
``` */
        offMatch(
            /** onMatch 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffMatchCallback
        ): void
        /** [GameServerManager.offRoomInfoChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offRoomInfoChange.html)
*
* 移除房间信息更新的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

GameServerManager.onRoomInfoChange(listener)
GameServerManager.offRoomInfoChange(listener) // 需传入与监听时同一个的函数对象
``` */
        offRoomInfoChange(
            /** onRoomInfoChange 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffRoomInfoChangeCallback
        ): void
        /** [GameServerManager.offStateUpdate(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offStateUpdate.html)
*
* 需要基础库： `2.9.4`
*
* 移除好友在线状态变更（该接口需要在开放数据域使用）的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

GameServerManager.onStateUpdate(listener)
GameServerManager.offStateUpdate(listener) // 需传入与监听时同一个的函数对象
``` */
        offStateUpdate(
            /** onStateUpdate 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffStateUpdateCallback
        ): void
        /** [GameServerManager.offSyncFrame(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offSyncFrame.html)
*
* 移除收到同个房间的帧同步消息的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

GameServerManager.onSyncFrame(listener)
GameServerManager.offSyncFrame(listener) // 需传入与监听时同一个的函数对象
``` */
        offSyncFrame(
            /** onSyncFrame 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffSyncFrameCallback
        ): void
        /** [GameServerManager.onBeKickedOut(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onBeKickedOut.html)
         *
         * 监听自己被踢出当前房间 */
        onBeKickedOut(
            /** 的监听函数 */
            listener: OnBeKickedOutCallback
        ): void
        /** [GameServerManager.onBroadcast(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onBroadcast.html)
         *
         * 监听收到同个房间内的广播消息 */
        onBroadcast(
            /** 的监听函数 */
            listener: OnBroadcastCallback
        ): void
        /** [GameServerManager.onDisconnect(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onDisconnect.html)
         *
         * 监听断开连接，收到此事件后，需要调用 `GameServerManager.reconnect` 进行重连 */
        onDisconnect(
            /** 断开连接，收到此事件的监听函数 */
            listener: OnDisconnectCallback
        ): void
        /** [GameServerManager.onGameEnd(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onGameEnd.html)
         *
         * 监听帧同步游戏结束 */
        onGameEnd(
            /** 的监听函数 */
            listener: OnGameEndCallback
        ): void
        /** [GameServerManager.onGameStart(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onGameStart.html)
         *
         * 监听帧同步游戏开始 */
        onGameStart(
            /** 的监听函数 */
            listener: OnGameStartCallback
        ): void
        /** [GameServerManager.onInvite(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onInvite.html)
         *
         * 需要基础库： `2.9.4`
         *
         * 监听接收邀请，当用户确认邀请之后会收到此事件 */
        onInvite(
            /** 接收邀请，当用户确认邀请之后会收到此事件的监听函数 */
            listener: OnInviteCallback
        ): void
        /** [GameServerManager.onLockStepError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onLockStepError.html)
         *
         * 需要基础库： `2.11.2`
         *
         * 监听帧同步出错 */
        onLockStepError(
            /** 的监听函数 */
            listener: OnLockStepErrorCallback
        ): void
        /** [GameServerManager.onLogout(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onLogout.html)
         *
         * 监听用户登出游戏服务事件，可能是主动登出也可能是其他原因被动登出 */
        onLogout(
            /** 用户登出游戏服务事件的监听函数 */
            listener: OnLogoutCallback
        ): void
        /** [GameServerManager.onMatch(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onMatch.html)
         *
         * 需要基础库： `2.14.4`
         *
         * 监听游戏匹配成功的事件 */
        onMatch(
            /** 游戏匹配成功的事件的监听函数 */
            listener: OnMatchCallback
        ): void
        /** [GameServerManager.onRoomInfoChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onRoomInfoChange.html)
         *
         * 监听房间信息更新 */
        onRoomInfoChange(
            /** 的监听函数 */
            listener: OnRoomInfoChangeCallback
        ): void
        /** [GameServerManager.onStateUpdate(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onStateUpdate.html)
         *
         * 需要基础库： `2.9.4`
         *
         * 监听好友在线状态变更（该接口需要在开放数据域使用） */
        onStateUpdate(
            /** 的监听函数 */
            listener: OnStateUpdateCallback
        ): void
        /** [GameServerManager.onSyncFrame(function listener)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onSyncFrame.html)
         *
         * 监听收到同个房间的帧同步消息 */
        onSyncFrame(
            /** 的监听函数 */
            listener: OnSyncFrameCallback
        ): void
        /** [GameServerManager.startGame(Object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.startGame.html)
         *
         * 启动帧同步 */
        startGame(option?: StartGameOption): void
        /** [Promise GameServerManager.broadcastInRoom(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.broadcastInRoom.html)
         *
         * 在房间内广播 */
        broadcastInRoom(option: BroadcastInRoomOption): Promise<any>
        /** [Promise GameServerManager.cancelMatch(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.cancelMatch.html)
         *
         * 需要基础库： `2.14.4`
         *
         * 取消游戏匹配 */
        cancelMatch(option: CancelMatchOption): Promise<any>
        /** [Promise GameServerManager.changeSeat(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.changeSeat.html)
         *
         * 玩家换座位 */
        changeSeat(option: ChangeSeatOption): Promise<any>
        /** [Promise GameServerManager.createRoom(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.createRoom.html)
         *
         * 创建游戏房间 */
        createRoom(option: CreateRoomOption): Promise<any>
        /** [Promise GameServerManager.endGame(Object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.endGame.html)
         *
         * 结束帧同步 */
        endGame(option?: EndGameOption): Promise<any>
        /** [Promise GameServerManager.endStateService(Object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.endStateService.html)
         *
         * 结束游戏状态同步服务 */
        endStateService(option?: EndStateServiceOption): Promise<any>
        /** [Promise GameServerManager.getLastRoomInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.getLastRoomInfo.html)
         *
         * 获取最近参与房间的 accessInfo */
        getLastRoomInfo(option?: GetLastRoomInfoOption): Promise<any>
        /** [Promise GameServerManager.getLostFrames(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.getLostFrames.html)
         *
         * 补帧，补帧区间为 [beginFrameId, endFrameId)，即左闭右合。 */
        getLostFrames(option: GetLostFramesOption): Promise<any>
        /** [Promise GameServerManager.getRoomInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.getRoomInfo.html)
         *
         * 获取房间详情 */
        getRoomInfo(option?: GetRoomInfoOption): Promise<any>
        /** [Promise GameServerManager.joinRoom(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.joinRoom.html)
         *
         * 加入游戏房间 */
        joinRoom(option: JoinRoomOption): Promise<any>
        /** [Promise GameServerManager.kickoutMember(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.kickoutMember.html)
         *
         * 把一名玩家踢出房间（仅房主有权限） */
        kickoutMember(option: KickoutMemberOption): Promise<any>
        /** [Promise GameServerManager.login()](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.login.html)
         *
         * 登录游戏服务 */
        login(): Promise<any>
        /** [Promise GameServerManager.logout()](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.logout.html)
         *
         * 登出游戏服务 */
        logout(): Promise<any>
        /** [Promise GameServerManager.memberLeaveRoom(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.memberLeaveRoom.html)
         *
         * 普通成员退出房间 */
        memberLeaveRoom(option: MemberLeaveRoomOption): Promise<any>
        /** [Promise GameServerManager.ownerLeaveRoom(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.ownerLeaveRoom.html)
         *
         * 房主退出房间，`assign_owner_to_pos_num` 参数被优先处理，其次是 `assign_to_min_pos_num`，如果二者都没有被设置，则房主退出且房间销毁。 */
        ownerLeaveRoom(option: OwnerLeaveRoomOption): Promise<any>
        /** [Promise GameServerManager.restart(Object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.restart.html)
         *
         * 重启游戏并进入"组队中"的状态。如果当前房间游戏已结束，调用可进入"组队中"状态并重置所有玩家的准备状态；如果当前房间已经在"组队中"状态，调用不改变状态；如果当前房间游戏进行中，调用失败。 */
        restart(option?: RestartOption): Promise<any>
        /** [Promise GameServerManager.setState(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.setState.html)
         *
         * 需要基础库： `2.9.4`
         *
         * 更新玩家状态信息 */
        setState(option: SetStateOption): Promise<any>
        /** [Promise GameServerManager.startMatch(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.startMatch.html)
         *
         * 需要基础库： `2.14.4`
         *
         * 开始游戏匹配。在调用 startMatch 之前，需要先调用后台接口 [gamematch.setMatchIdOpenState
         * ](https://developers.weixin.qq.com/minigame/dev/api-backend/open-api/gamematch/gamematch.setMatchIdOpenState.html) 把 matchId 设置为打开状态。 */
        startMatch(option: StartMatchOption): Promise<any>
        /** [Promise GameServerManager.startStateService(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.startStateService.html)
         *
         * 需要基础库： `2.9.4`
         *
         * 开启状态管理服务，只有开启状态管理服务，才能获取在线好友列表以及接收好友邀请 */
        startStateService(option: StartStateServiceOption): Promise<any>
        /** [Promise GameServerManager.updateReadyStatus(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.updateReadyStatus.html)
         *
         * 更新玩家准备信息 */
        updateReadyStatus(option: UpdateReadyStatusOption): Promise<any>
        /** [Promise GameServerManager.uploadFrame(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.uploadFrame.html)
         *
         * 上传游戏帧 */
        uploadFrame(option: UploadFrameOption): Promise<any>
        /** [Promise<[ReconnectSuccessRes](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/ReconnectSuccessRes.html)> GameServerManager.reconnect(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.reconnect.html)
         *
         * 重连游戏服务。如果此时连接并未断开或游戏未开始，会直接成功；如果游戏已开始并且连接已断开，会进行重连，并返回此时服务器的最大帧号。 */
        reconnect(option: ReconnectOption): Promise<ReconnectSuccessRes>
        /** [boolean GameServerManager.setInviteData(string data)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.setInviteData.html)
         *
         * 需要基础库： `2.9.4`
         *
         * 设置邀请好友附带的数据 */
        setInviteData(
            /** 需要设置的字符串数据 */
            data: string
        ): boolean
    }
    interface GameServerManagerError {
        /** 错误信息
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 1001 | has not logged in to server | 未登录到服务器就调用接口 |
         * | 2100 |  | 登录帧同步服务器超时 |
         * | 2101 |  | 重连帧同步服务器超时 |
         * | 2200 |  | 登录帧同步服务器错误或失败导致的disconnect |
         * | 2201 |  | 长期未收到帧导致的disconnect |
         * | 2202 |  | 长期未收到心跳导致的disconnect |
         * | 2203 |  | 断线过久，无法重连导致的disconnect |
         * | 2204 |  | UDPconnectionfail导致的disconnect |
         * | 2300 |  | UDPsocketerror |
         * | 2301 |  | UDPsystemerror |
         * | 2303 |  | UDPaddresserror |
         * | 2304 |  | UDPporterror |
         * | 2305 |  | UDPsenderror |
         * | 2401 |  | 登录帧同步服务器成功之前发送帧 |
         * | 2402 |  | frame长度超过MTU |
         * | 4001 | system error | 系统错误 |
         * | 4002 | record not exist | 访问记录不存在 |
         * | 4003 | invalid req | 非法请求 |
         * | 4005 | invalid room state | 房间状态异常 |
         * | 4006 | reach room member limit | 房间到达人数上限，无法加入 |
         * | 4009 | headimg and nickname is not authorized by the user | 该房间需要用户头像昵称，但用户未授权 |
         * | 4010 | fail to start game | 启动游戏失败 |
         * | 4011 | fail to broadcast | 广播消息失败 |
         * | 4013 | buffer overflow | 自定义 buffer 超过指定大小（matchInfo 和 extInfo） |
         * | 200000 |  | 无效的请求参数 |
         * | 200006 |  | matchid此时为未打开状态 |
         * | 500001 |  | 用户已经在匹配队列中 |
         * | 500003 |  | 用户未在匹配队列中 |
         * | 500005 |  | 无效的match_id |
         * | 500009 |  | 路由到错误的服务器 | */ errMsg: string
        /** 错误码
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 1001 | has not logged in to server | 未登录到服务器就调用接口 |
         * | 2100 |  | 登录帧同步服务器超时 |
         * | 2101 |  | 重连帧同步服务器超时 |
         * | 2200 |  | 登录帧同步服务器错误或失败导致的disconnect |
         * | 2201 |  | 长期未收到帧导致的disconnect |
         * | 2202 |  | 长期未收到心跳导致的disconnect |
         * | 2203 |  | 断线过久，无法重连导致的disconnect |
         * | 2204 |  | UDPconnectionfail导致的disconnect |
         * | 2300 |  | UDPsocketerror |
         * | 2301 |  | UDPsystemerror |
         * | 2303 |  | UDPaddresserror |
         * | 2304 |  | UDPporterror |
         * | 2305 |  | UDPsenderror |
         * | 2401 |  | 登录帧同步服务器成功之前发送帧 |
         * | 2402 |  | frame长度超过MTU |
         * | 4001 | system error | 系统错误 |
         * | 4002 | record not exist | 访问记录不存在 |
         * | 4003 | invalid req | 非法请求 |
         * | 4005 | invalid room state | 房间状态异常 |
         * | 4006 | reach room member limit | 房间到达人数上限，无法加入 |
         * | 4009 | headimg and nickname is not authorized by the user | 该房间需要用户头像昵称，但用户未授权 |
         * | 4010 | fail to start game | 启动游戏失败 |
         * | 4011 | fail to broadcast | 广播消息失败 |
         * | 4013 | buffer overflow | 自定义 buffer 超过指定大小（matchInfo 和 extInfo） |
         * | 200000 |  | 无效的请求参数 |
         * | 200006 |  | matchid此时为未打开状态 |
         * | 500001 |  | 用户已经在匹配队列中 |
         * | 500003 |  | 用户未在匹配队列中 |
         * | 500005 |  | 无效的match_id |
         * | 500009 |  | 路由到错误的服务器 | */ errCode: number
    }
    interface GetGroupEnterInfoError {
        /** 错误信息
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 40097 |  | 场景错误 |
         * | 65206 |  | 用户已不在该群内 | */ errMsg: string
        /** 错误码
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 40097 |  | 场景错误 |
         * | 65206 |  | 用户已不在该群内 | */ errCode: number
    }
    interface InferenceSession {
        /** [InferenceSession.destroy()](https://developers.weixin.qq.com/minigame/dev/api/ai/inference/InferenceSession.destroy.html)
*
* 需要基础库： `2.30.0`
*
* 销毁 InferenceSession 实例
*
* **示例代码**
*
* ```js
// 销毁会话
session.destroy()
``` */
        destroy(): void
        /** [InferenceSession.offError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ai/inference/InferenceSession.offError.html)
         *
         * 需要基础库： `2.30.0`
         *
         * 取消监听模型加载失败事件 */
        offError(
            /** 模型加载失败回调函数。传入指定回调函数则只取消指定回调，不传则取消所有回调 */
            callback: (...args: any[]) => any
        ): void
        /** [InferenceSession.offLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ai/inference/InferenceSession.offLoad.html)
         *
         * 需要基础库： `2.30.0`
         *
         * 取消监听模型加载完成事件 */
        offLoad(
            /** 模型加载完成回调函数。传入指定回调函数则只取消指定回调，不传则取消所有回调 */
            callback: (...args: any[]) => any
        ): void
        /** [InferenceSession.onError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ai/inference/InferenceSession.onError.html)
*
* 需要基础库： `2.30.0`
*
* 监听模型加载失败事件
*
* **示例代码**
*
* ```js
// 创建会话，加载模型
const session = wx.createInferenceSession({
  model: `${wx.env.USER_DATA_PATH}/MNIST.onnx`,
  precisionLevel: 4,
  typicalShape:{input1:[1, 3, 224, 224], input2:[1, 1, 224, 224]},  //除非使用动态轴，一般不用显式指定
  allowNPU: false,
  allowQuantize: false
})

// 监听error事件
session.onError(err => {
  console.error(err)
})
``` */
        onError(
            /** 模型加载失败回调函数 */
            callback: (...args: any[]) => any
        ): void
        /** [InferenceSession.onLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ai/inference/InferenceSession.onLoad.html)
*
* 需要基础库： `2.30.0`
*
* 监听模型加载完成事件
*
* **示例代码**
*
* ```js
// 创建会话，加载模型
const session = wx.createInferenceSession({
  model: `${wx.env.USER_DATA_PATH}/MNIST.onnx`,
  precisionLevel: 4,
  typicalShape:{input1:[1, 3, 224, 224], input2:[1, 1, 224, 224]},  //除非使用动态轴，一般不用显式指定
  allowNPU: false,
  allowQuantize: false
})

// 监听模型加载完成事件
session.onLoad(() => {
  // 运行推理
  // 其中input1, input2, output0 必须与使用的onnx模型中实际的输入输出名字完全一致，不可随意填写。
  // 模型输入输出信息可以通过Netron 打开onnx模型看到
  session.run({
    input1: {
      type: 'float32',
      data: new Float32Array(3 * 224 * 224).buffer,
      shape: [1, 3, 224, 224] // NCHW 顺序
    },
    // 多个input的添加方法，假设第二个input需要数据类型为uint8
    input2: {
      type: 'uint8',
      data: new Uint8Array(224 * 224).buffer,
      shape: [1, 1, 224, 224]
    },
  }).then(res => {
    console.log(res.output0)
  })
})
``` */
        onLoad(
            /** 模型加载完成回调函数 */
            callback: (...args: any[]) => any
        ): void
        /** [Promise<[Tensors](https://developers.weixin.qq.com/minigame/dev/api/ai/inference/Tensors.html)> InferenceSession.run([Tensors](https://developers.weixin.qq.com/minigame/dev/api/ai/inference/Tensors.html) tensors)](https://developers.weixin.qq.com/minigame/dev/api/ai/inference/InferenceSession.run.html)
*
* 需要基础库： `2.30.0`
*
* 运行推断。需要在 session.onLoad 回调后使用。接口参数为 Tensors 对象，返回 Promise。一个 InferenceSession 被创建完成后可以重复多次调用 InferenceSession.run(), 直到调用 session.destroy() 进行销毁。
*
* **示例代码**
*
* ```js
// 创建会话，加载模型
const session = wx.createInferenceSession({
  model: `${wx.env.USER_DATA_PATH}/MNIST.onnx`,
  precisionLevel: 4,
  typicalShape:{input1:[1, 3, 224, 224], input2:[1, 1, 224, 224]},  //除非使用动态轴，一般不用显式指定
  allowNPU: false,
  allowQuantize: false
})

// 监听模型加载完成事件
session.onLoad(() => {
  // 运行推理
  // 其中input1, input2, output0 必须与使用的onnx模型中实际的输入输出名字完全一致，不可随意填写。
  // 模型输入输出信息可以通过Netron 打开onnx模型看到
  session.run({
    input1: {
      type: 'float32',
      data: new Float32Array(3 * 224 * 224).buffer,
      shape: [1, 3, 224, 224] // NCHW 顺序
    },
    // 多个input的添加方法，假设第二个input需要数据类型为uint8
    input2: {
      type: 'uint8',
      data: new Uint8Array(224 * 224).buffer,
      shape: [1, 1, 224, 224]
    },
  }).then(res => {
    console.log(res.output0)
  })
})
``` */
        run(
            /** [Tensors](https://developers.weixin.qq.com/minigame/dev/api/ai/inference/Tensors.html)
             *
             * key-value 形式的对象，对象的 key 会作为 input name，对象的 value 则是 Tensor。 Tensor 结构如下。 */
            tensors: Tensors
        ): Promise<Tensors>
    }
    interface InterstitialAd {
        /** [InterstitialAd.destroy()](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.destroy.html)
         *
         * 需要基础库： `2.8.0`
         *
         * 销毁插屏广告实例。 */
        destroy(): void
        /** [InterstitialAd.offClose(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.offClose.html)
*
* 移除插屏广告关闭事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

InterstitialAd.onClose(listener)
InterstitialAd.offClose(listener) // 需传入与监听时同一个的函数对象
``` */
        offClose(
            /** onClose 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: UDPSocketOffCloseCallback
        ): void
        /** [InterstitialAd.offError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.offError.html)
*
* 移除插屏错误事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

InterstitialAd.onError(listener)
InterstitialAd.offError(listener) // 需传入与监听时同一个的函数对象
``` */
        offError(
            /** onError 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: InterstitialAdOffErrorCallback
        ): void
        /** [InterstitialAd.offLoad(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.offLoad.html)
*
* 移除插屏广告加载事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

InterstitialAd.onLoad(listener)
InterstitialAd.offLoad(listener) // 需传入与监听时同一个的函数对象
``` */
        offLoad(
            /** onLoad 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffLoadCallback
        ): void
        /** [InterstitialAd.onClose(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.onClose.html)
         *
         * 监听插屏广告关闭事件。 */
        onClose(
            /** 插屏广告关闭事件的监听函数 */
            listener: UDPSocketOnCloseCallback
        ): void
        /** [InterstitialAd.onError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.onError.html)
         *
         * 监听插屏错误事件。
         *
         * **错误码信息与解决方案表**
         *
         *  错误码是通过onError获取到的错误信息。调试期间，可以通过异常返回来捕获信息。可以针对异常返回加上适当的监控信息辅助排查现网情况。
         *
         * | 代码 | 异常情况 | 理由 | 解决方案 |
         * | ------ | -------------- | --------------- | -------------------------- |
         * | 1000  | 后端错误调用失败  | 该项错误不是开发者的异常情况 | 一般情况下忽略一段时间即可恢复。 |
         * | 1001  | 参数错误    | 使用方法错误 | 可以前往developers.weixin.qq.com确认具体教程（小程序和小游戏分别有各自的教程，可以在顶部选项中，“设计”一栏的右侧进行切换。|
         * | 1002  | 广告单元无效    | 可能是拼写错误、或者误用了其他APP的广告ID | 请重新前往mp.weixin.qq.com确认广告位ID。 |
         * | 1003  | 内部错误    | 该项错误不是开发者的异常情况 | 一般情况下忽略一段时间即可恢复。|
         * | 1004  | 无适合的广告   | 广告不是每一次都会出现，这次没有出现可能是由于该用户不适合浏览广告 | 属于正常情况，且开发者需要针对这种情况做形态上的兼容。 |
         * | 1005  | 广告组件审核中  | 你的广告正在被审核，无法展现广告 | 请前往mp.weixin.qq.com确认审核状态，且开发者需要针对这种情况做形态上的兼容。|
         * | 1006  | 广告组件被驳回  | 你的广告审核失败，无法展现广告 | 请前往mp.weixin.qq.com确认审核状态，且开发者需要针对这种情况做形态上的兼容。|
         * | 1007  | 广告组件被封禁  | 你的广告能力已经被封禁，封禁期间无法展现广告 | 请前往mp.weixin.qq.com确认小程序广告封禁状态。 |
         * | 1008  | 广告单元已关闭  | 该广告位的广告能力已经被关闭 | 请前往mp.weixin.qq.com重新打开对应广告位的展现。| */
        onError(
            /** 插屏错误事件的监听函数 */
            listener: InterstitialAdOnErrorCallback
        ): void
        /** [InterstitialAd.onLoad(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.onLoad.html)
         *
         * 监听插屏广告加载事件。 */
        onLoad(
            /** 插屏广告加载事件的监听函数 */
            listener: OnLoadCallback
        ): void
        /** [Promise InterstitialAd.load()](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.load.html)
         *
         * 需要基础库： `2.8.0`
         *
         * 加载插屏广告。 */
        load(): Promise<any>
        /** [Promise InterstitialAd.show()](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.show.html)
         *
         * 显示插屏广告。
         *
         * **错误码信息表**
         *
         *  如果插屏广告显示失败，InterstitialAd.show() 方法会返回一个rejected Promise，开发者可以获取到错误码及对应的错误信息。
         *
         * | 代码 | 异常情况 | 理由 |
         * | ------ | -------------- | -------------------------- |
         * | 2001  | 触发频率限制  | 小程序启动一定时间内不允许展示插屏广告 |
         * | 2002  | 触发频率限制  | 距离小程序插屏广告或者激励视频广告上次播放时间间隔不足，不允许展示插屏广告 |
         * | 2003  | 触发频率限制  | 当前正在播放激励视频广告或者插屏广告，不允许再次展示插屏广告 |
         * | 2004  | 广告渲染失败  | 该项错误不是开发者的异常情况，或因小程序页面切换导致广告渲染失败 |
         * | 2005  | 广告调用异常  | 插屏广告实例不允许跨页面调用 | */
        show(): Promise<any>
    }
    interface JoinVoIPChatError {
        /** 错误信息
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | -1 | 当前已在房间内 |  |
         * | -2 | 录音设备被占用，可能是当前正在使用微信内语音通话或系统通话 |  |
         * | -3 | 加入会话期间退出（可能是用户主动退出，或者退后台、来电等原因），因此加入失败 |  |
         * | -1000 | 系统错误 |  | */ errMsg: string
        /** 错误码
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | -1 | 当前已在房间内 |  |
         * | -2 | 录音设备被占用，可能是当前正在使用微信内语音通话或系统通话 |  |
         * | -3 | 加入会话期间退出（可能是用户主动退出，或者退后台、来电等原因），因此加入失败 |  |
         * | -1000 | 系统错误 |  | */ errCode: number
    }
    interface LoadSubpackageTask {
        /** [LoadSubpackageTask.onProgressUpdate(function listener)](https://developers.weixin.qq.com/minigame/dev/api/base/subpackage/LoadSubpackageTask.onProgressUpdate.html)
         *
         * 需要基础库： `2.1.0`
         *
         * 监听分包加载进度变化事件 */
        onProgressUpdate(
            /** 分包加载进度变化事件的监听函数 */
            listener: LoadSubpackageTaskOnProgressUpdateCallback
        ): void
    }
    interface LogManager {
        /** [LogManager.debug()](https://developers.weixin.qq.com/minigame/dev/api/base/debug/LogManager.debug.html)
         *
         * 写 debug 日志 */
        debug(
            /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb */
            ...args: any[]
        ): void
        /** [LogManager.info()](https://developers.weixin.qq.com/minigame/dev/api/base/debug/LogManager.info.html)
         *
         * 写 info 日志 */
        info(
            /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb */
            ...args: any[]
        ): void
        /** [LogManager.log()](https://developers.weixin.qq.com/minigame/dev/api/base/debug/LogManager.log.html)
         *
         * 写 log 日志 */
        log(
            /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb */
            ...args: any[]
        ): void
        /** [LogManager.warn()](https://developers.weixin.qq.com/minigame/dev/api/base/debug/LogManager.warn.html)
         *
         * 写 warn 日志 */
        warn(
            /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb */
            ...args: any[]
        ): void
    }
    interface MidasFriendPaymentError {
        /** 错误信息
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 1000 |  | mode错误 |
         * | -15005 |  | 索要权限被封禁（索要功能不可用） |
         * | -10073011 |  | 参数错误（具体错误见errMsg） |
         * | -10073003 |  | outTradeNo业务单号重复 |
         * | -10073012 |  | 索要单已支付 |
         * | -10073013 |  | 索要单已超时 |
         * | -10073014 |  | 签名错误 |
         * | -10073015 |  | 索要功能不可用 | */ errMsg: string
        /** 错误码
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 1000 |  | mode错误 |
         * | -15005 |  | 索要权限被封禁（索要功能不可用） |
         * | -10073011 |  | 参数错误（具体错误见errMsg） |
         * | -10073003 |  | outTradeNo业务单号重复 |
         * | -10073012 |  | 索要单已支付 |
         * | -10073013 |  | 索要单已超时 |
         * | -10073014 |  | 签名错误 |
         * | -10073015 |  | 索要功能不可用 | */ errCode: number
    }
    interface MidasPaymentError {
        /** 错误信息
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | -1 |  | 系统失败 |
         * | -2 |  | 支付取消 |
         * | -6 |  | 下单参数类型不对 |
         * | -15001 |  | 虚拟支付接口错误码，缺少参数 |
         * | -15002 |  | 虚拟支付接口错误码，参数不合法 |
         * | -15003 |  | 虚拟支付接口错误码，订单重复 |
         * | -15004 |  | 虚拟支付接口错误码，后台错误 |
         * | -15005 |  | 虚拟支付接口错误码，appId权限被封禁 |
         * | -15006 |  | 虚拟支付接口错误码，货币类型不支持 |
         * | -15007 |  | 虚拟支付接口错误码，订单已支付 |
         * | -15009 |  | 虚拟支付接口错误码，由于健康系统限制，本次支付已超过限额（这种错误情况会有默认弹窗提示） |
         * | -15010 |  | 虚拟支付接口错误码，正式版小游戏不允许在沙箱环境支付 |
         * | -15011 |  | 请求的数据类型错误 |
         * | -15012 |  | SIGNATURE错误 |
         * | -15013 |  | 代币未发布 |
         * | -15014 |  | paysig错误 |
         * | -15015 |  | sessionkey过期 |
         * | -15016 |  | 道具价格错误 |
         * | -15017 |  | 订单已关闭 |
         * | 1 |  | 虚拟支付接口错误码，用户取消支付 |
         * | 2 |  | 虚拟支付接口错误码，客户端错误,判断到小程序在用户处于支付中时,又发起了一笔支付请求 |
         * | 3 |  | 虚拟支付接口错误码，Android独有错误：用户使用GooglePlay支付，而手机未安装GooglePlay |
         * | 4 |  | 虚拟支付接口错误码，用户操作系统支付状态异常 |
         * | 5 |  | 虚拟支付接口错误码，操作系统错误 |
         * | 6 |  | 虚拟支付接口错误码，其他错误 |
         * | 7 |  | 虚拟支付接口错误码，支付取消 |
         * | 1000 |  | 参数错误 |
         * | 1001 |  | 分区未发布 |
         * | 1003 |  | 代币/分区未发布或者对应商户号被封禁或者米大师Portal错误,请先确保虚拟支付2.0代币和分区已发布，然后自查商户号封禁情况https://kf.qq.com/faq/190523Mb6VRJ190523RV363E.html，对应的商户号可以在mp-虚拟支付2.0-基础配置-微信支付账号信息中查询 |
         * | 3017/-15012 |  | 道具id非法 |
         * | 701001 |  | ios禁止支付 | */ errMsg: string
        /** 错误码
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | -1 |  | 系统失败 |
         * | -2 |  | 支付取消 |
         * | -6 |  | 下单参数类型不对 |
         * | -15001 |  | 虚拟支付接口错误码，缺少参数 |
         * | -15002 |  | 虚拟支付接口错误码，参数不合法 |
         * | -15003 |  | 虚拟支付接口错误码，订单重复 |
         * | -15004 |  | 虚拟支付接口错误码，后台错误 |
         * | -15005 |  | 虚拟支付接口错误码，appId权限被封禁 |
         * | -15006 |  | 虚拟支付接口错误码，货币类型不支持 |
         * | -15007 |  | 虚拟支付接口错误码，订单已支付 |
         * | -15009 |  | 虚拟支付接口错误码，由于健康系统限制，本次支付已超过限额（这种错误情况会有默认弹窗提示） |
         * | -15010 |  | 虚拟支付接口错误码，正式版小游戏不允许在沙箱环境支付 |
         * | -15011 |  | 请求的数据类型错误 |
         * | -15012 |  | SIGNATURE错误 |
         * | -15013 |  | 代币未发布 |
         * | -15014 |  | paysig错误 |
         * | -15015 |  | sessionkey过期 |
         * | -15016 |  | 道具价格错误 |
         * | -15017 |  | 订单已关闭 |
         * | 1 |  | 虚拟支付接口错误码，用户取消支付 |
         * | 2 |  | 虚拟支付接口错误码，客户端错误,判断到小程序在用户处于支付中时,又发起了一笔支付请求 |
         * | 3 |  | 虚拟支付接口错误码，Android独有错误：用户使用GooglePlay支付，而手机未安装GooglePlay |
         * | 4 |  | 虚拟支付接口错误码，用户操作系统支付状态异常 |
         * | 5 |  | 虚拟支付接口错误码，操作系统错误 |
         * | 6 |  | 虚拟支付接口错误码，其他错误 |
         * | 7 |  | 虚拟支付接口错误码，支付取消 |
         * | 1000 |  | 参数错误 |
         * | 1001 |  | 分区未发布 |
         * | 1003 |  | 代币/分区未发布或者对应商户号被封禁或者米大师Portal错误,请先确保虚拟支付2.0代币和分区已发布，然后自查商户号封禁情况https://kf.qq.com/faq/190523Mb6VRJ190523RV363E.html，对应的商户号可以在mp-虚拟支付2.0-基础配置-微信支付账号信息中查询 |
         * | 3017/-15012 |  | 道具id非法 |
         * | 701001 |  | ios禁止支付 | */ errCode: number
    }
    interface PageManager {
        /** [PageManager.destroy()](https://developers.weixin.qq.com/minigame/dev/api/open-api/openlink/PageManager.destroy.html)
         *
         * 需要基础库： `3.6.7`
         *
         * 销毁开放页面实例。 */
        destroy(): void
        /** [PageManager.off(string eventName, function callback)](https://developers.weixin.qq.com/minigame/dev/api/open-api/openlink/PageManager.off.html)
         *
         * 需要基础库： `3.6.7`
         *
         * 取消监听来自活动、功能向开发者产生的某些事件。 */
        off(
            /** 取消的事件名称，如果仅填写事件名称则注销该名称下所有的监听 */
            eventName: string,
            /** 取消的事件名称及其对应的回调函数指针，可缺省，若填写则仅注销该事件名称下的单个回调函数 */
            callback?: (...args: any[]) => any
        ): void
        /** [PageManager.on(string eventName, function callback)](https://developers.weixin.qq.com/minigame/dev/api/open-api/openlink/PageManager.on.html)
         *
         * 需要基础库： `3.6.7`
         *
         * 监听来自活动、功能向开发者产生的某些事件。 */
        on(
            /** 事件名称，由渠道获得需要监听的事件名称 */
            eventName: string,
            /** 发生某种事件时的回调函数指针 */
            callback: (...args: any[]) => any
        ): void
        /** [Promise PageManager.load(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/openlink/PageManager.load.html)
         *
         * 需要基础库： `3.6.7`
         *
         * 提供OPENLINK加载活动、功能信息。 */
        load(option: LoadOption): Promise<any>
        /** [Promise PageManager.show(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/openlink/PageManager.show.html)
         *
         * 需要基础库： `3.6.7`
         *
         * 显示已经成功加载信息的开放页面活动、功能。如果调用前未执行 `.load({ ... })` 将自动调用1次并返回加载信息结果。 */
        show(
            /** 选填，如果已经执行 `.load({ ... })` 无需填写，也允许使用 `.show({ ... })` 连贯执行 */
            option?: ShowOption
        ): Promise<any>
    }
    interface Performance {
        /** [number Performance.now()](https://developers.weixin.qq.com/minigame/dev/api/base/performance/Performance.now.html)
         *
         * 可以获取当前时间以微秒为单位的时间戳 */
        now(): number
    }
    interface PreDownloadSubpackageTask {
        /** [PreDownloadSubpackageTask.onProgressUpdate(function listener)](https://developers.weixin.qq.com/minigame/dev/api/base/subpackage/PreDownloadSubpackageTask.onProgressUpdate.html)
         *
         * 需要基础库： `2.27.3`
         *
         * 监听分包加载进度变化事件 */
        onProgressUpdate(
            /** 分包加载进度变化事件的监听函数 */
            listener: LoadSubpackageTaskOnProgressUpdateCallback
        ): void
    }
    interface RealtimeLogManager {
        /** [RealtimeLogManager.addFilterMsg(string msg)](https://developers.weixin.qq.com/minigame/dev/api/base/debug/RealtimeLogManager.addFilterMsg.html)
         *
         * 需要基础库： `2.14.4`
         *
         * 添加过滤关键字，暂不支持在插件使用 */
        addFilterMsg(
            /** 是setFilterMsg的添加接口。用于设置多个过滤关键字。 */
            msg: string
        ): void
        /** [RealtimeLogManager.error()](https://developers.weixin.qq.com/minigame/dev/api/base/debug/RealtimeLogManager.error.html)
         *
         * 需要基础库： `2.14.4`
         *
         * 写 error 日志，暂不支持在插件使用 */
        error(
            /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过5Kb */
            ...args: any[]
        ): void
        /** [RealtimeLogManager.info()](https://developers.weixin.qq.com/minigame/dev/api/base/debug/RealtimeLogManager.info.html)
         *
         * 需要基础库： `2.14.4`
         *
         * 写 info 日志，暂不支持在插件使用 */
        info(
            /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过5Kb */
            ...args: any[]
        ): void
        /** [RealtimeLogManager.setFilterMsg(string msg)](https://developers.weixin.qq.com/minigame/dev/api/base/debug/RealtimeLogManager.setFilterMsg.html)
         *
         * 需要基础库： `2.14.4`
         *
         * 设置过滤关键字，暂不支持在插件使用 */
        setFilterMsg(
            /** 过滤关键字，最多不超过1Kb，可以在小程序管理后台根据设置的内容搜索得到对应的日志。 */
            msg: string
        ): void
        /** [RealtimeLogManager.warn()](https://developers.weixin.qq.com/minigame/dev/api/base/debug/RealtimeLogManager.warn.html)
         *
         * 需要基础库： `2.14.4`
         *
         * 写 warn 日志，暂不支持在插件使用 */
        warn(
            /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过5Kb */
            ...args: any[]
        ): void
    }
    interface RecorderManager {
        /** [RecorderManager.onError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onError.html)
         *
         * 监听录音错误事件 */
        onError(
            /** 录音错误事件的监听函数 */
            listener: UDPSocketOnErrorCallback
        ): void
        /** [RecorderManager.onFrameRecorded(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onFrameRecorded.html)
         *
         * 监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。 */
        onFrameRecorded(
            /** 已录制完指定帧大小的文件事件的监听函数 */
            listener: OnFrameRecordedCallback
        ): void
        /** [RecorderManager.onInterruptionBegin(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onInterruptionBegin.html)
         *
         * 需要基础库： `2.3.0`
         *
         * 监听录音因为受到系统占用而被中断开始事件。以下场景会触发此事件：微信语音聊天、微信视频聊天。此事件触发后，录音会被暂停。pause 事件在此事件后触发 */
        onInterruptionBegin(
            /** 录音因为受到系统占用而被中断开始事件的监听函数 */
            listener: OnInterruptionBeginCallback
        ): void
        /** [RecorderManager.onInterruptionEnd(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onInterruptionEnd.html)
         *
         * 需要基础库： `2.3.0`
         *
         * 监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功。 */
        onInterruptionEnd(
            /** 录音中断结束事件的监听函数 */
            listener: OnInterruptionEndCallback
        ): void
        /** [RecorderManager.onPause(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onPause.html)
         *
         * 监听录音暂停事件 */
        onPause(
            /** 录音暂停事件的监听函数 */
            listener: OnPauseCallback
        ): void
        /** [RecorderManager.onResume(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onResume.html)
         *
         * 监听录音继续事件 */
        onResume(
            /** 录音继续事件的监听函数 */
            listener: OnResumeCallback
        ): void
        /** [RecorderManager.onStart(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onStart.html)
         *
         * 监听录音开始事件 */
        onStart(
            /** 录音开始事件的监听函数 */
            listener: OnStartCallback
        ): void
        /** [RecorderManager.onStop(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onStop.html)
         *
         * 监听录音结束事件 */
        onStop(
            /** 录音结束事件的监听函数 */
            listener: RecorderManagerOnStopCallback
        ): void
        /** [RecorderManager.pause()](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.pause.html)
         *
         * 暂停录音 */
        pause(): void
        /** [RecorderManager.resume()](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.resume.html)
         *
         * 继续录音 */
        resume(): void
        /** [RecorderManager.start(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.start.html)
         *
         * 开始录音
         *
         * **采样率与编码码率限制**
         *
         *  每种采样率有对应的编码码率范围有效值，设置不合法的采样率或编码码率会导致录音失败，具体对应关系如下表。
         *
         * | 采样率 | 编码码率       |
         * | ------ | -------------- |
         * | 8000   | 16000 ~ 48000  |
         * | 11025  | 16000 ~ 48000  |
         * | 12000  | 24000 ~ 64000  |
         * | 16000  | 24000 ~ 96000  |
         * | 22050  | 32000 ~ 128000 |
         * | 24000  | 32000 ~ 128000 |
         * | 32000  | 48000 ~ 192000 |
         * | 44100  | 64000 ~ 320000 |
         * | 48000  | 64000 ~ 320000 | */
        start(option: RecorderManagerStartOption): void
        /** [RecorderManager.stop()](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.stop.html)
         *
         * 停止录音 */
        stop(): void
    }
    interface ReportSceneError {
        /** 错误信息
         *
         * | 错误信息 | 说明 |
         * | - | - |
         * | ${paramName} should be ${expectType} instead of ${paramType} | 参数的类型需为指定的数据类型 |
         * | parameter.${paramName} should greater than or equal to zero | 参数的值需要大于等于0 |
         * | parameter.${paramName}.${key} needs to be a string type and a non-empty string | value仅支持传入非空字符串 |
         * | parameter.${paramName}.${key} needs to be a numeric value of type string | value仅支持传入纯数值组成的字符串（如：'25'） |
         * | failed to serialize parameter.${paramName} by JSON.stringify | 参数对象序列化失败 |
         * | parameter.${paramName} cannot exceed 1024 characters | 参数序列化后，字符串长度不可超过1024个字符 |
         * | report sceneId:${sceneId} repeatedly | 单次启动流程里，场景ID不可重复上报 | */ errMsg: string
        /** 错误码
         *
         * | 错误信息 | 说明 |
         * | - | - |
         * | ${paramName} should be ${expectType} instead of ${paramType} | 参数的类型需为指定的数据类型 |
         * | parameter.${paramName} should greater than or equal to zero | 参数的值需要大于等于0 |
         * | parameter.${paramName}.${key} needs to be a string type and a non-empty string | value仅支持传入非空字符串 |
         * | parameter.${paramName}.${key} needs to be a numeric value of type string | value仅支持传入纯数值组成的字符串（如：'25'） |
         * | failed to serialize parameter.${paramName} by JSON.stringify | 参数对象序列化失败 |
         * | parameter.${paramName} cannot exceed 1024 characters | 参数序列化后，字符串长度不可超过1024个字符 |
         * | report sceneId:${sceneId} repeatedly | 单次启动流程里，场景ID不可重复上报 | */ errCode: number
    }
    interface RequestTask {
        /** [RequestTask.abort()](https://developers.weixin.qq.com/minigame/dev/api/network/request/RequestTask.abort.html)
         *
         * 需要基础库： `1.4.0`
         *
         * 中断请求任务 */
        abort(): void
        /** [RequestTask.offChunkReceived(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/request/RequestTask.offChunkReceived.html)
*
* 需要基础库： `2.20.1`
*
* 移除 Transfer-Encoding Chunk Received 事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

RequestTask.onChunkReceived(listener)
RequestTask.offChunkReceived(listener) // 需传入与监听时同一个的函数对象
``` */
        offChunkReceived(
            /** onChunkReceived 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffChunkReceivedCallback
        ): void
        /** [RequestTask.offHeadersReceived(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/request/RequestTask.offHeadersReceived.html)
*
* 需要基础库： `2.1.0`
*
* 移除 HTTP Response Header 事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

RequestTask.onHeadersReceived(listener)
RequestTask.offHeadersReceived(listener) // 需传入与监听时同一个的函数对象
``` */
        offHeadersReceived(
            /** onHeadersReceived 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: RequestTaskOffHeadersReceivedCallback
        ): void
        /** [RequestTask.onChunkReceived(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/request/RequestTask.onChunkReceived.html)
         *
         * 需要基础库： `2.20.1`
         *
         * 监听 Transfer-Encoding Chunk Received 事件。当接收到新的chunk时触发。 */
        onChunkReceived(
            /** Transfer-Encoding Chunk Received 事件的监听函数 */
            listener: OnChunkReceivedCallback
        ): void
        /** [RequestTask.onHeadersReceived(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/request/RequestTask.onHeadersReceived.html)
         *
         * 需要基础库： `2.1.0`
         *
         * 监听 HTTP Response Header 事件。会比请求完成事件更早 */
        onHeadersReceived(
            /** HTTP Response Header 事件的监听函数 */
            listener: RequestTaskOnHeadersReceivedCallback
        ): void
    }
    interface RewardedVideoAd {
        /** [Promise RewardedVideoAd.load()](https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.load.html)
         *
         * 加载激励视频广告。 */
        load(): Promise<any>
        /** [Promise RewardedVideoAd.show()](https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.show.html)
         *
         * 显示激励视频广告。激励视频广告将从屏幕下方推入。 */
        show(): Promise<any>
        /** [RewardedVideoAd.destroy()](https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.destroy.html)
         *
         * 需要基础库： `2.8.0`
         *
         * 销毁激励视频广告实例。 */
        destroy(): void
        /** [RewardedVideoAd.offClose(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.offClose.html)
*
* 移除用户点击 `关闭广告` 按钮的事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

RewardedVideoAd.onClose(listener)
RewardedVideoAd.offClose(listener) // 需传入与监听时同一个的函数对象
``` */
        offClose(
            /** onClose 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: RewardedVideoAdOffCloseCallback
        ): void
        /** [RewardedVideoAd.offError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.offError.html)
*
* 移除激励视频错误事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

RewardedVideoAd.onError(listener)
RewardedVideoAd.offError(listener) // 需传入与监听时同一个的函数对象
``` */
        offError(
            /** onError 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: GridAdOffErrorCallback
        ): void
        /** [RewardedVideoAd.offLoad(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.offLoad.html)
*
* 移除激励视频广告加载事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

RewardedVideoAd.onLoad(listener)
RewardedVideoAd.offLoad(listener) // 需传入与监听时同一个的函数对象
``` */
        offLoad(
            /** onLoad 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffLoadCallback
        ): void
        /** [RewardedVideoAd.onClose(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.onClose.html)
         *
         * 监听用户点击 `关闭广告` 按钮的事件。 */
        onClose(
            /** 用户点击 `关闭广告` 按钮的事件的监听函数 */
            listener: RewardedVideoAdOnCloseCallback
        ): void
        /** [RewardedVideoAd.onError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.onError.html)
         *
         * 监听激励视频错误事件。
         *
         * **错误码信息与解决方案表**
         *
         *  错误码是通过onError获取到的错误信息。调试期间，可以通过异常返回来捕获信息。可以针对异常返回加上适当的监控信息辅助排查现网情况。
         *
         * | 代码 | 异常情况 | 理由 | 解决方案 |
         * | ------ | -------------- | --------------- | -------------------------- |
         * | 1000  | 后端错误调用失败  | 该项错误不是开发者的异常情况 | 一般情况下忽略一段时间即可恢复。 |
         * | 1001  | 参数错误    | 使用方法错误 | 可以前往developers.weixin.qq.com确认具体教程（小程序和小游戏分别有各自的教程，可以在顶部选项中，“设计”一栏的右侧进行切换。|
         * | 1002  | 广告单元无效    | 可能是拼写错误、或者误用了其他APP的广告ID | 请重新前往mp.weixin.qq.com确认广告位ID。 |
         * | 1003  | 内部错误    | 该项错误不是开发者的异常情况 | 一般情况下忽略一段时间即可恢复。|
         * | 1004  | 无适合的广告   | 广告不是每一次都会出现，这次没有出现可能是由于该用户不适合浏览广告 | 属于正常情况，且开发者需要针对这种情况做形态上的兼容。 |
         * | 1005  | 广告组件审核中  | 你的广告正在被审核，无法展现广告 | 请前往mp.weixin.qq.com确认审核状态，且开发者需要针对这种情况做形态上的兼容。|
         * | 1006  | 广告组件被驳回  | 你的广告审核失败，无法展现广告 | 请前往mp.weixin.qq.com确认审核状态，且开发者需要针对这种情况做形态上的兼容。|
         * | 1007  | 广告组件被封禁  | 你的广告能力已经被封禁，封禁期间无法展现广告 | 请前往mp.weixin.qq.com确认小程序广告封禁状态。 |
         * | 1008  | 广告单元已关闭  | 该广告位的广告能力已经被关闭 | 请前往mp.weixin.qq.com重新打开对应广告位的展现。| */
        onError(
            /** 激励视频错误事件的监听函数 */
            listener: GridAdOnErrorCallback
        ): void
        /** [RewardedVideoAd.onLoad(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.onLoad.html)
         *
         * 监听激励视频广告加载事件。 */
        onLoad(
            /** 激励视频广告加载事件的监听函数 */
            listener: OnLoadCallback
        ): void
    }
    interface SocketTask {
        /** [SocketTask.close(Object object)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.close.html)
         *
         * 关闭 WebSocket 连接 */
        close(option: SocketTaskCloseOption): void
        /** [SocketTask.onClose(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.onClose.html)
         *
         * 监听 WebSocket 连接关闭事件 */
        onClose(
            /** WebSocket 连接关闭事件的监听函数 */
            listener: SocketTaskOnCloseCallback
        ): void
        /** [SocketTask.onError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.onError.html)
         *
         * 监听 WebSocket 错误事件 */
        onError(
            /** WebSocket 错误事件的监听函数 */
            listener: UDPSocketOnErrorCallback
        ): void
        /** [SocketTask.onMessage(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.onMessage.html)
         *
         * 监听 WebSocket 接收到服务器的消息事件 */
        onMessage(
            /** WebSocket 接收到服务器的消息事件的监听函数 */
            listener: SocketTaskOnMessageCallback
        ): void
        /** [SocketTask.onOpen(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.onOpen.html)
         *
         * 监听 WebSocket 连接打开事件 */
        onOpen(
            /** WebSocket 连接打开事件的监听函数 */
            listener: OnOpenCallback
        ): void
        /** [SocketTask.send(Object object)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.send.html)
         *
         * 通过 WebSocket 连接发送数据 */
        send(option: SocketTaskSendOption): void
    }
    interface TCPSocket {
        /** [TCPSocket.bindWifi(Object options)](https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.bindWifi.html)
         *
         * 需要基础库： `3.1.1`
         *
         * 将 TCP Socket 绑定到当前 wifi 网络，成功后会触发 onBindWifi 事件（仅安卓支持） */
        bindWifi(options: BindWifiOption): void
        /** [TCPSocket.close()](https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.close.html)
         *
         * 关闭连接 */
        close(): void
        /** [TCPSocket.connect(Object options)](https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.connect.html)
         *
         * 在给定的套接字上启动连接 */
        connect(options: TCPSocketConnectOption): void
        /** [TCPSocket.offBindWifi(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.offBindWifi.html)
*
* 需要基础库： `3.1.1`
*
* 移除当一个 socket 绑定当前 wifi 网络成功时触发该事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

TCPSocket.onBindWifi(listener)
TCPSocket.offBindWifi(listener) // 需传入与监听时同一个的函数对象
``` */
        offBindWifi(
            /** onBindWifi 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffBindWifiCallback
        ): void
        /** [TCPSocket.offClose(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.offClose.html)
*
* 移除一旦 socket 完全关闭就发出该事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

TCPSocket.onClose(listener)
TCPSocket.offClose(listener) // 需传入与监听时同一个的函数对象
``` */
        offClose(
            /** onClose 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: UDPSocketOffCloseCallback
        ): void
        /** [TCPSocket.offConnect(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.offConnect.html)
*
* 移除当一个 socket 连接成功建立的时候触发该事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

TCPSocket.onConnect(listener)
TCPSocket.offConnect(listener) // 需传入与监听时同一个的函数对象
``` */
        offConnect(
            /** onConnect 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffConnectCallback
        ): void
        /** [TCPSocket.offError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.offError.html)
*
* 移除当错误发生时触发的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

TCPSocket.onError(listener)
TCPSocket.offError(listener) // 需传入与监听时同一个的函数对象
``` */
        offError(
            /** onError 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: UDPSocketOffErrorCallback
        ): void
        /** [TCPSocket.offMessage(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.offMessage.html)
*
* 移除当接收到数据的时触发该事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

TCPSocket.onMessage(listener)
TCPSocket.offMessage(listener) // 需传入与监听时同一个的函数对象
``` */
        offMessage(
            /** onMessage 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: TCPSocketOffMessageCallback
        ): void
        /** [TCPSocket.onBindWifi(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.onBindWifi.html)
         *
         * 需要基础库： `3.1.1`
         *
         * 监听当一个 socket 绑定当前 wifi 网络成功时触发该事件 */
        onBindWifi(
            /** 当一个 socket 绑定当前 wifi 网络成功时触发该事件的监听函数 */
            listener: OnBindWifiCallback
        ): void
        /** [TCPSocket.onClose(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.onClose.html)
         *
         * 监听一旦 socket 完全关闭就发出该事件 */
        onClose(
            /** 一旦 socket 完全关闭就发出该事件的监听函数 */
            listener: UDPSocketOnCloseCallback
        ): void
        /** [TCPSocket.onConnect(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.onConnect.html)
         *
         * 监听当一个 socket 连接成功建立的时候触发该事件 */
        onConnect(
            /** 当一个 socket 连接成功建立的时候触发该事件的监听函数 */
            listener: OnConnectCallback
        ): void
        /** [TCPSocket.onError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.onError.html)
         *
         * 监听当错误发生时触发 */
        onError(
            /** 的监听函数 */
            listener: UDPSocketOnErrorCallback
        ): void
        /** [TCPSocket.onMessage(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.onMessage.html)
         *
         * 监听当接收到数据的时触发该事件 */
        onMessage(
            /** 当接收到数据的时触发该事件的监听函数 */
            listener: TCPSocketOnMessageCallback
        ): void
        /** [TCPSocket.write(string|ArrayBuffer data)](https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.write.html)
         *
         * 在 socket 上发送数据 */
        write(
            /** 要发送的数据 */
            data: string | ArrayBuffer
        ): void
    }
    interface UDPSocket {
        /** [UDPSocket.close()](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.close.html)
         *
         * 关闭 UDP Socket 实例，相当于销毁。 在关闭之后，UDP Socket 实例不能再发送消息，每次调用 `UDPSocket.send` 将会触发错误事件，并且 message 事件回调函数也不会再也执行。在 `UDPSocket` 实例被创建后将被 Native 强引用，保证其不被 GC。在 `UDPSocket.close` 后将解除对其的强引用，让 UDPSocket 实例遵从 GC。 */
        close(): void
        /** [UDPSocket.connect(Object object)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.connect.html)
         *
         * 需要基础库： `2.15.0`
         *
         * 预先连接到指定的 IP 和 port，需要配合 write 方法一起使用 */
        connect(option: UDPSocketConnectOption): void
        /** [UDPSocket.offClose(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.offClose.html)
*
* 移除关闭事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

UDPSocket.onClose(listener)
UDPSocket.offClose(listener) // 需传入与监听时同一个的函数对象
``` */
        offClose(
            /** onClose 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: UDPSocketOffCloseCallback
        ): void
        /** [UDPSocket.offError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.offError.html)
*
* 移除错误事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

UDPSocket.onError(listener)
UDPSocket.offError(listener) // 需传入与监听时同一个的函数对象
``` */
        offError(
            /** onError 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: UDPSocketOffErrorCallback
        ): void
        /** [UDPSocket.offListening(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.offListening.html)
*
* 移除开始监听数据包消息的事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

UDPSocket.onListening(listener)
UDPSocket.offListening(listener) // 需传入与监听时同一个的函数对象
``` */
        offListening(
            /** onListening 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffListeningCallback
        ): void
        /** [UDPSocket.offMessage(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.offMessage.html)
*
* 移除收到消息的事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

UDPSocket.onMessage(listener)
UDPSocket.offMessage(listener) // 需传入与监听时同一个的函数对象
``` */
        offMessage(
            /** onMessage 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: UDPSocketOffMessageCallback
        ): void
        /** [UDPSocket.onClose(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.onClose.html)
         *
         * 监听关闭事件 */
        onClose(
            /** 关闭事件的监听函数 */
            listener: UDPSocketOnCloseCallback
        ): void
        /** [UDPSocket.onError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.onError.html)
         *
         * 监听错误事件 */
        onError(
            /** 错误事件的监听函数 */
            listener: UDPSocketOnErrorCallback
        ): void
        /** [UDPSocket.onListening(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.onListening.html)
         *
         * 监听开始监听数据包消息的事件 */
        onListening(
            /** 开始监听数据包消息的事件的监听函数 */
            listener: OnListeningCallback
        ): void
        /** [UDPSocket.onMessage(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.onMessage.html)
         *
         * 监听收到消息的事件 */
        onMessage(
            /** 收到消息的事件的监听函数 */
            listener: UDPSocketOnMessageCallback
        ): void
        /** [UDPSocket.send(Object object)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.send.html)
         *
         * 向指定的 IP 和 port 发送消息。基础库 2.9.0 起支持广播 (指定地址为 255.255.255.255)。 */
        send(option: UDPSocketSendOption): void
        /** [UDPSocket.setTTL(number ttl)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.setTTL.html)
         *
         * 需要基础库： `2.18.0`
         *
         * 设置 IP_TTL 套接字选项，用于设置一个 IP 数据包传输时允许的最大跳步数 */
        setTTL(
            /** ttl 参数可以是 0 到 255 之间 */
            ttl: number
        ): void
        /** [UDPSocket.write(Object object)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.write.html)
         *
         * 需要基础库： `2.15.0`
         *
         * 用法与 send 方法相同，如果没有预先调用 connect 则与 send 无差异（注意即使调用了 connect 也需要在本接口填入地址和端口参数） */
        write(option: UDPSocketSendOption): void
        /** [number UDPSocket.bind(number port)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.bind.html)
         *
         * 绑定一个系统随机分配的可用端口，或绑定一个指定的端口号 */
        bind(
            /** 需要基础库： `2.9.0`
             *
             * 指定要绑定的端口号，不传则返回系统随机分配的可用端口 */
            port?: number
        ): number
    }
    interface UpdateManager {
        /** [UpdateManager.applyUpdate()](https://developers.weixin.qq.com/minigame/dev/api/base/update/UpdateManager.applyUpdate.html)
         *
         * 强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 `onUpdateReady` 回调）调用。
         *
         * **示例代码**
         *
         * [示例代码](https://developers.weixin.qq.com/minigame/dev/api/base/update/UpdateManager.html#示例代码) */
        applyUpdate(): void
        /** [UpdateManager.onCheckForUpdate(function listener)](https://developers.weixin.qq.com/minigame/dev/api/base/update/UpdateManager.onCheckForUpdate.html)
         *
         * 监听向微信后台请求检查更新结果事件。微信在小程序每次启动（包括热启动）时自动检查更新，不需由开发者主动触发。
         *
         * **示例代码**
         *
         * [示例代码](https://developers.weixin.qq.com/minigame/dev/api/base/update/UpdateManager.html#示例代码) */
        onCheckForUpdate(
            /** 向微信后台请求检查更新结果事件的监听函数 */
            listener: OnCheckForUpdateCallback
        ): void
        /** [UpdateManager.onUpdateFailed(function listener)](https://developers.weixin.qq.com/minigame/dev/api/base/update/UpdateManager.onUpdateFailed.html)
         *
         * 监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调
         *
         * **示例代码**
         *
         * [示例代码](https://developers.weixin.qq.com/minigame/dev/api/base/update/UpdateManager.html#示例代码) */
        onUpdateFailed(
            /** 小程序更新失败事件的监听函数 */
            listener: OnUpdateFailedCallback
        ): void
        /** [UpdateManager.onUpdateReady(function listener)](https://developers.weixin.qq.com/minigame/dev/api/base/update/UpdateManager.onUpdateReady.html)
         *
         * 监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调
         *
         * **示例代码**
         *
         * [示例代码](https://developers.weixin.qq.com/minigame/dev/api/base/update/UpdateManager.html#示例代码) */
        onUpdateReady(
            /** 小程序有版本更新事件的监听函数 */
            listener: OnUpdateReadyCallback
        ): void
    }
    interface UploadTask {
        /** [UploadTask.abort()](https://developers.weixin.qq.com/minigame/dev/api/network/upload/UploadTask.abort.html)
         *
         * 需要基础库： `1.4.0`
         *
         * 中断上传任务 */
        abort(): void
        /** [UploadTask.offHeadersReceived(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/upload/UploadTask.offHeadersReceived.html)
*
* 需要基础库： `2.1.0`
*
* 移除 HTTP Response Header 事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

UploadTask.onHeadersReceived(listener)
UploadTask.offHeadersReceived(listener) // 需传入与监听时同一个的函数对象
``` */
        offHeadersReceived(
            /** onHeadersReceived 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: DownloadTaskOffHeadersReceivedCallback
        ): void
        /** [UploadTask.offProgressUpdate(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/upload/UploadTask.offProgressUpdate.html)
*
* 需要基础库： `2.1.0`
*
* 移除上传进度变化事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

UploadTask.onProgressUpdate(listener)
UploadTask.offProgressUpdate(listener) // 需传入与监听时同一个的函数对象
``` */
        offProgressUpdate(
            /** onProgressUpdate 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: UploadTaskOffProgressUpdateCallback
        ): void
        /** [UploadTask.onHeadersReceived(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/upload/UploadTask.onHeadersReceived.html)
         *
         * 需要基础库： `2.1.0`
         *
         * 监听 HTTP Response Header 事件。会比请求完成事件更早 */
        onHeadersReceived(
            /** HTTP Response Header 事件的监听函数 */
            listener: DownloadTaskOnHeadersReceivedCallback
        ): void
        /** [UploadTask.onProgressUpdate(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/upload/UploadTask.onProgressUpdate.html)
         *
         * 需要基础库： `1.4.0`
         *
         * 监听上传进度变化事件 */
        onProgressUpdate(
            /** 上传进度变化事件的监听函数 */
            listener: UploadTaskOnProgressUpdateCallback
        ): void
    }
    interface UserCryptoManager {
        /** [UserCryptoManager.getLatestUserKey(Object object)](https://developers.weixin.qq.com/minigame/dev/api/base/crypto/UserCryptoManager.getLatestUserKey.html)
*
* 需要基础库： `2.17.3`
*
* 获取最新的用户加密密钥
*
* **示例代码**
*
* ```js
const userCryptoManager = wx.getUserCryptoManager()
userCryptoManager.getLatestUserKey({
  success: res => {
    const {encryptKey, iv, version, expireTime} = res
    console.log(encryptKey, iv, version, expireTime)
  }
})
``` */
        getLatestUserKey(option?: GetLatestUserKeyOption): void
        /** [UserCryptoManager.getRandomValues(Object object)](https://developers.weixin.qq.com/minigame/dev/api/base/crypto/UserCryptoManager.getRandomValues.html)
*
* 需要基础库： `2.17.3`
*
* 获取密码学安全随机数
*
* **示例代码**
*
* ```js
const userCryptoManager = wx.getUserCryptoManager()
userCryptoManager.getRandomValues({
  length: 6 // 生成 6 个字节长度的随机数,
  success: res => {
    // 转成 base64 字符串伪代码 arrayBufferToBase64(res.randomValues)
  }
})
``` */
        getRandomValues(option: GetRandomValuesOption): void
    }
    interface VideoDecoder {
        /** [Object VideoDecoder.getFrameData()](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.getFrameData.html)
         *
         * 需要基础库： `2.11.1`
         *
         * 获取下一帧的解码数据 */
        getFrameData(): FrameDataOptions
        /** [Promise VideoDecoder.remove()](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.remove.html)
         *
         * 需要基础库： `2.11.1`
         *
         * 移除解码器 */
        remove(): Promise<any>
        /** [Promise VideoDecoder.seek(number position)](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.seek.html)
         *
         * 需要基础库： `2.11.1`
         *
         * 跳到某个时间点解码 */
        seek(
            /** 跳转的解码位置，单位 ms */
            position: number
        ): Promise<any>
        /** [Promise VideoDecoder.start(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.start.html)
         *
         * 需要基础库： `2.11.1`
         *
         * 开始解码 */
        start(option: VideoDecoderStartOption): Promise<any>
        /** [Promise VideoDecoder.stop()](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.stop.html)
         *
         * 需要基础库： `2.11.1`
         *
         * 停止解码 */
        stop(): Promise<any>
        /** [VideoDecoder.off(string eventName, function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.off.html)
         *
         * 需要基础库： `2.11.1`
         *
         * 取消监听录制事件。当对应事件触发时，该回调函数不再执行 */
        off(
            /** 事件名 */
            eventName: string,
            /** 事件触发时执行的回调函数 */
            callback: (...args: any[]) => any
        ): void
        /** [VideoDecoder.on(string eventName, function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.on.html)
         *
         * 需要基础库： `2.11.1`
         *
         * 注册监听录制事件的回调函数。当对应事件触发时，回调函数会被执行 */
        on(
            /** 事件名
             *
             * 参数 eventName 可选值：
             * - 'start': 开始事件。返回 {width, height};
             * - 'stop': 结束事件。;
             * - 'seek': seek 完成事件。;
             * - 'bufferchange': 缓冲区变化事件。;
             * - 'ended': 解码结束事件。; */
            eventName: 'start' | 'stop' | 'seek' | 'bufferchange' | 'ended',
            /** 事件触发时执行的回调函数 */
            callback: (...args: any[]) => any
        ): void
    }
    interface WebGLRenderingContext {
        /** [WebGLRenderingContext.wxBindCanvasTexture(number texture, [Canvas](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.html) canvas)](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/WebGLRenderingContext.wxBindCanvasTexture.html)
*
* 需要基础库： `2.0.0`
*
* 将一个 Canvas 对应的 Texture 绑定到 WebGL 上下文。
* - 仅 iOS 支持 wxBindCanvasTexture 接口，其他平台可使用示例代码中的替代方法
*
* **示例代码**
*
* 使用 wxBindCanvasTexture
*
* ```javascript
gl.wxBindCanvasTexture(gl.TEXTURE_2D, canvas)
```
* 等同于
*
* ```javascript
const texture = gl.createTexture()
gl.bindTexture(gl.TEXTURE_2D, texture)
// ......
gl.texImage2D(target, level, internalformat, format, type, canvas)
``` */
        wxBindCanvasTexture(
            /** WebGL 的纹理类型枚举值 */
            texture: number,
            /** [Canvas](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.html)
             *
             * 需要绑定为 Texture 的 Canvas */
            canvas: Canvas
        ): void
    }
    interface Wx {
        /** [Array.&lt;Object&gt; wx.getGamepads()](https://developers.weixin.qq.com/minigame/dev/api/device/gamepad/wx.getGamepads.html)
*
* 需要基础库： `3.6.4`
*
* 获取已连接的游戏手柄信息，仅在 PC 平台支持。
*
* **示例代码**
*
* ```js
const gamepads = wx.getGamepads();
console.log(gamepads);
```
*
* **示例代码片段**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/6al1r2m17oV6) */
        getGamepads(): Gamepad[]
        /** [ArrayBuffer wx.encode(Object object)](https://developers.weixin.qq.com/minigame/dev/api/util/wx.encode.html)
         *
         * 将字符串按照指定的编码格式编码成 ArrayBuffer */
        encode(option: EncodeOption): ArrayBuffer
        /** [Boolean wx.setHandoffQuery(String query)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.setHandoffQuery.html)
         *
         * 需要基础库： `2.14.4`
         *
         * 设置接力参数，该接口需要在游戏域调用 */
        setHandoffQuery(
            /** 需要传递给接力设备的参数，格式 为querystring */
            query: string
        ): boolean
        /** [Object wx.getAccountInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/open-api/account-info/wx.getAccountInfoSync.html)
*
* 需要基础库： `2.11.2`
*
* 获取当前账号信息。线上小程序版本号仅支持在正式版小程序中获取，开发版和体验版中无法获取。
*
* **示例代码**
*
* ```js
const accountInfo = wx.getAccountInfoSync();
console.log(accountInfo.miniProgram.appId) // 小程序 appId
console.log(accountInfo.plugin.appId) // 插件 appId
console.log(accountInfo.plugin.version) // 插件版本号， 'a.b.c' 这样的形式
``` */
        getAccountInfoSync(): AccountInfo
        /** [Object wx.getAppAuthorizeSetting()](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getAppAuthorizeSetting.html)
*
* 需要基础库： `2.25.3`
*
* 获取微信APP授权设置
*
* **示例代码**
*
* ```js
const appAuthorizeSetting = wx.getAppAuthorizeSetting()

console.log(appAuthorizeSetting.albumAuthorized)
console.log(appAuthorizeSetting.bluetoothAuthorized)
console.log(appAuthorizeSetting.cameraAuthorized)
console.log(appAuthorizeSetting.locationAuthorized)
console.log(appAuthorizeSetting.locationReducedAccuracy)
console.log(appAuthorizeSetting.microphoneAuthorized)
console.log(appAuthorizeSetting.notificationAlertAuthorized)
console.log(appAuthorizeSetting.notificationAuthorized)
console.log(appAuthorizeSetting.notificationBadgeAuthorized)
console.log(appAuthorizeSetting.notificationSoundAuthorized)
console.log(appAuthorizeSetting.phoneCalendarAuthorized)
```
*
* **返回值说明**
*
* `'authorized'` 表示已经获得授权，无需再次请求授权；
* `'denied'` 表示请求授权被拒绝，无法再次请求授权；（此情况需要引导用户[打开系统设置](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.openAppAuthorizeSetting.html)，在设置页中打开权限）
* `'non determined'` 表示尚未请求授权，会在微信下一次调用系统相应权限时请求；（仅 iOS 会出现。此种情况下引导用户打开系统设置，不展示开关） */
        getAppAuthorizeSetting(): AppAuthorizeSetting
        /** [Object wx.getAppBaseInfo()](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getAppBaseInfo.html)
*
* 需要基础库： `2.25.3`
*
* 获取微信APP基础信息
*
* **示例代码**
*
* ```js
const appBaseInfo = wx.getAppBaseInfo()

console.log(appBaseInfo.SDKVersion)
console.log(appBaseInfo.enableDebug)
console.log(appBaseInfo.host)
console.log(appBaseInfo.language)
console.log(appBaseInfo.version)
console.log(appBaseInfo.theme)
``` */
        getAppBaseInfo(): AppBaseInfo
        /** [Object wx.getBatteryInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/device/battery/wx.getBatteryInfoSync.html)
         *
         * [wx.getBatteryInfo](https://developers.weixin.qq.com/minigame/dev/api/device/battery/wx.getBatteryInfo.html) 的同步版本 */
        getBatteryInfoSync(): GetBatteryInfoSyncResult
        /** [Object wx.getDeviceInfo()](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getDeviceInfo.html)
*
* 需要基础库： `2.25.3`
*
* 获取设备基础信息
*
* **示例代码**
*
* ```js
const deviceInfo = wx.getDeviceInfo()

console.log(deviceInfo.abi)
console.log(deviceInfo.benchmarkLevel)
console.log(deviceInfo.brand)
console.log(deviceInfo.model)
console.log(deviceInfo.platform)
console.log(deviceInfo.system)
``` */
        getDeviceInfo(): DeviceInfo
        /** [Object wx.getEnterOptionsSync()](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.getEnterOptionsSync.html)
         *
         * 需要基础库： `2.13.2`
         *
         * 获取小游戏打开的参数（包括冷启动和热启动）
         *
         * **返回有效 referrerInfo 的场景**
         *
         * | 场景值 | 场景                            | appId含义  |
         * | ------ | ------------------------------- | ---------- |
         * | 1020   | 公众号 profile 页相关小程序列表 | 来源公众号 |
         * | 1035   | 公众号自定义菜单                | 来源公众号 |
         * | 1036   | App 分享消息卡片                | 来源App    |
         * | 1037   | 小程序打开小程序                | 来源小程序 |
         * | 1038   | 从另一个小程序返回              | 来源小程序 |
         * | 1043   | 公众号模板消息                  | 来源公众号 |
         *
         * **不同 apiCategory 场景下的 API 限制**
         *
         * `X` 表示 API 被限制无法使用；不在表格中的 API 不限制。
         *
         * |                                       | default | nativeFunctionalized | browseOnly | embedded |
         * |-|-|-|-|-|
         * |navigateToMiniProgram                  |         | `X`                  | `X`        |          |
         * |openSetting                            |         |                      | `X`        |          |
         * |&lt;button open-type="share"&gt;       |         | `X`                  | `X`        | `X`      |
         * |&lt;button open-type="feedback"&gt;    |         |                      | `X`        |          |
         * |&lt;button open-type="open-setting"&gt;|         |                      | `X`        |          |
         * |openEmbeddedMiniProgram                |         | `X`                  | `X`        | `X`      |
         *
         * **注意**
         *
         * 部分版本在无`referrerInfo`的时候会返回 `undefined`，建议使用 `options.referrerInfo && options.referrerInfo.appId` 进行判断。 */
        getEnterOptionsSync(): EnterOptionsGame
        /** [Object wx.getExptInfoSync(Array.&lt;string&gt; keys)](https://developers.weixin.qq.com/minigame/dev/api/data-analysis/wx.getExptInfoSync.html)
         *
         * 需要基础库： `2.17.0`
         *
         * 给定实验参数数组，获取对应的实验参数值
         *
         * **提示**
         *
         * 假设实验参数有 `color`, `size`
         * 调用 wx.getExptInfoSync() 会返回 `{color:'#fff',size:20}` 类似的结果
         * 而 wx.getExptInfoSync(['color']) 则只会返回 `{color:'#fff'}` */
        getExptInfoSync(
            /** 实验参数数组，不填则获取所有实验参数 */
            keys?: string[]
        ): IAnyObject
        /** [Object wx.getExtConfigSync()](https://developers.weixin.qq.com/minigame/dev/api/ext/wx.getExtConfigSync.html)
*
* 需要基础库： `2.8.3`
*
* [wx.getExtConfig](https://developers.weixin.qq.com/minigame/dev/api/ext/wx.getExtConfig.html) 的同步版本。
*
* **Tips**
*
* 1. 本接口暂时无法通过 [wx.canIUse](#) 判断是否兼容，开发者需要自行判断 [wx.getExtConfigSync](https://developers.weixin.qq.com/minigame/dev/api/ext/wx.getExtConfigSync.html) 是否存在来兼容
*
* ****
*
* ```js
let extConfig = wx.getExtConfigSync? wx.getExtConfigSync(): {}
console.log(extConfig)
``` */
        getExtConfigSync(): IAnyObject
        /** [Object wx.getLaunchOptionsSync()](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html)
         *
         * 获取小游戏冷启动时的参数。热启动参数通过 [wx.onShow](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.onShow.html) 或 [wx.getEnterOptionsSync](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.getEnterOptionsSync.html) 接口获取。
         *
         * **返回有效 referrerInfo 的场景**
         *
         * | 场景值 | 场景                            | appId含义  |
         * | ------ | ------------------------------- | ---------- |
         * | 1020   | 公众号 profile 页相关小程序列表 | 来源公众号 |
         * | 1035   | 公众号自定义菜单                | 来源公众号 |
         * | 1036   | App 分享消息卡片                | 来源App    |
         * | 1037   | 小程序打开小程序                | 来源小程序 |
         * | 1038   | 从另一个小程序返回              | 来源小程序 |
         * | 1043   | 公众号模板消息                  | 来源公众号 |
         *
         * **注意**
         *
         * 部分版本在无`referrerInfo`的时候会返回 `undefined`，
         * 建议使用 `options.referrerInfo && options.referrerInfo.appId` 进行判断。 */
        getLaunchOptionsSync(): LaunchOptionsGame
        /** [Object wx.getMenuButtonBoundingClientRect()](https://developers.weixin.qq.com/minigame/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html)
*
* 需要基础库： `2.1.0`
*
* 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
*
* **示例代码**
*
* ```js
const res = wx.getMenuButtonBoundingClientRect()

console.log(res.width)
console.log(res.height)
console.log(res.top)
console.log(res.right)
console.log(res.bottom)
console.log(res.left)
``` */
        getMenuButtonBoundingClientRect(): ClientRect
        /** [Object wx.getStorageInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.getStorageInfoSync.html)
*
* [wx.getStorageInfo](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.getStorageInfo.html) 的同步版本
*
* **示例代码**
*
* ```js
wx.getStorageInfo({
  success (res) {
    console.log(res.keys)
    console.log(res.currentSize)
    console.log(res.limitSize)
  }
})
```
*
* ```js
try {
  const res = wx.getStorageInfoSync()
  console.log(res.keys)
  console.log(res.currentSize)
  console.log(res.limitSize)
} catch (e) {
  // Do something when catch error
}
``` */
        getStorageInfoSync(): GetStorageInfoSyncOption
        /** [Object wx.getSystemInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemInfoSync.html)
*
* @deprecated 基础库版本 [2.20.1](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [wx.getSystemSetting](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemSetting.html)、[wx.getAppAuthorizeSetting](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getAppAuthorizeSetting.html)、[wx.getDeviceInfo](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getDeviceInfo.html)、[wx.getWindowInfo](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getWindowInfo.html)、[wx.getAppBaseInfo](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getAppBaseInfo.html) 替换
*
* [wx.getSystemInfo](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemInfo.html) 的同步版本
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/WkUCgXmS7mqO)
*
* ```js
wx.getSystemInfo({
  success (res) {
    console.log(res.model)
    console.log(res.pixelRatio)
    console.log(res.windowWidth)
    console.log(res.windowHeight)
    console.log(res.language)
    console.log(res.version)
    console.log(res.platform)
  }
})
```
*
* ```js
try {
  const res = wx.getSystemInfoSync()
  console.log(res.model)
  console.log(res.pixelRatio)
  console.log(res.windowWidth)
  console.log(res.windowHeight)
  console.log(res.language)
  console.log(res.version)
  console.log(res.platform)
} catch (e) {
  // Do something when catch error
}
```
*
* ****
*
* ## 注意事项
* - 当 wx.getSystemInfoSync() 接口发生错误时可能会返回空对象
* - wx.getSystemInfo 接口由于会获取系统权限，可能触发授权弹窗，请使用 [wx.getSystemSetting](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemSetting.html)、[wx.getAppAuthorizeSetting](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getAppAuthorizeSetting.html)、[wx.getDeviceInfo](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getDeviceInfo.html)、[wx.getWindowInfo](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getWindowInfo.html)、[wx.getAppBaseInfo](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getAppBaseInfo.html) 替代 */
        getSystemInfoSync(): SystemInfo
        /** [Object wx.getSystemSetting()](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemSetting.html)
*
* 需要基础库： `2.25.3`
*
* 获取设备设置
*
* **示例代码**
*
* ```js
const systemSetting = wx.getSystemSetting()

console.log(systemSetting.bluetoothEnabled)
console.log(systemSetting.deviceOrientation)
console.log(systemSetting.locationEnabled)
console.log(systemSetting.wifiEnabled)
``` */
        getSystemSetting(): SystemSetting
        /** [Object wx.getWindowInfo()](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getWindowInfo.html)
*
* 需要基础库： `2.25.3`
*
* 获取窗口信息
*
* **示例代码**
*
* ```js
const windowInfo = wx.getWindowInfo()

console.log(windowInfo.pixelRatio)
console.log(windowInfo.screenWidth)
console.log(windowInfo.screenHeight)
console.log(windowInfo.windowWidth)
console.log(windowInfo.windowHeight)
console.log(windowInfo.statusBarHeight)
console.log(windowInfo.safeArea)
console.log(windowInfo.screenTop)
``` */
        getWindowInfo(): WindowInfo
        /** [[BannerAd](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.html) wx.createBannerAd(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ad/wx.createBannerAd.html)
         *
         * 需要基础库： `2.0.4`
         * @deprecated 基础库版本 [3.5.5](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [wx.createCustomAd](https://developers.weixin.qq.com/minigame/dev/api/ad/wx.createCustomAd.html) 替换
         *
         * 创建 banner 广告组件。请通过 [wx.getSystemInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemInfoSync.html) 返回对象的 SDKVersion 判断基础库版本号 >= 2.0.4 后再使用该 API。每次调用该方法创建 banner 广告都会返回一个全新的实例。 */
        createBannerAd(option: CreateBannerAdOption): BannerAd
        /** [[Camera](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.html) wx.createCamera(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/camera/wx.createCamera.html)
         *
         * 需要基础库： `2.9.0`
         *
         * 创建相机 */
        createCamera(option: CreateCameraOption): Camera
        /** [[Canvas](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.html) wx.createCanvas()](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/wx.createCanvas.html)
         *
         * 创建一个画布对象。首次调用创建的是显示在屏幕上的画布，之后调用创建的都是离屏画布。 */
        createCanvas(): Canvas
        /** [[Canvas](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.html) wx.getSharedCanvas()](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getSharedCanvas.html)
         *
         * 获取主域和开放数据域共享的 sharedCanvas。**只有开放数据域能调用。** */
        getSharedCanvas(): Canvas
        /** [[CustomAd](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.html) wx.createCustomAd(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ad/wx.createCustomAd.html)
         *
         * 需要基础库： `2.11.1`
         *
         * 创建原生模板广告组件。请通过 [wx.getSystemInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemInfoSync.html) 返回对象的 SDKVersion 判断基础库版本号 >= 2.11.1 后再使用该 API。每次调用该方法创建原生模板广告都会返回一个全新的实例。 */
        createCustomAd(option: CreateCustomAdOption): CustomAd
        /** [[DownloadTask](https://developers.weixin.qq.com/minigame/dev/api/network/download/DownloadTask.html) wx.downloadFile(Object object)](https://developers.weixin.qq.com/minigame/dev/api/network/download/wx.downloadFile.html)
*
* 下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径 (本地路径)，单次下载允许的最大文件为 200MB。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/network.html)。
*
* 注意：请在服务端响应的 header 中指定合理的 `Content-Type` 字段，以保证客户端正确处理文件类型。
*
* **示例代码**
*
* ```js
wx.downloadFile({
  url: 'https://example.com/audio/123', //仅为示例，并非真实的资源
  success (res) {
    // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
    if (res.statusCode === 200) {
      wx.playVoice({
        filePath: res.tempFilePath
      })
    }
  }
})
``` */
        downloadFile(option: DownloadFileOption): DownloadTask
        /** [[FeedbackButton](https://developers.weixin.qq.com/minigame/dev/api/open-api/feedback/FeedbackButton.html) wx.createFeedbackButton(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/feedback/wx.createFeedbackButton.html)
         *
         * 需要基础库： `2.1.2`
         *
         * 创建打开意见反馈页面的按钮 */
        createFeedbackButton(
            option: CreateOpenSettingButtonOption
        ): FeedbackButton
        /** [[FileSystemManager](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.html) wx.getFileSystemManager()](https://developers.weixin.qq.com/minigame/dev/api/file/wx.getFileSystemManager.html)
         *
         * 获取全局唯一的文件管理器 */
        getFileSystemManager(): FileSystemManager
        /** [[GameClubButton](https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/GameClubButton.html) wx.createGameClubButton(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/wx.createGameClubButton.html)
         *
         * 需要基础库： `2.0.3`
         *
         * 创建游戏圈按钮。游戏圈按钮被点击后会跳转到小游戏的游戏圈。更多关于游戏圈的信息见 [游戏圈使用指南](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/game-club.html)。从基础库2.30.3开始，新增传递openlink的特性，支持打开单帖子、话题页、活动页。 */
        createGameClubButton(option: CreateGameClubButtonOption): GameClubButton
        /** [[GameLogManager](https://developers.weixin.qq.com/minigame/dev/api/data-analysis/GameLogManager.html) wx.getGameLogManager(Object param)](https://developers.weixin.qq.com/minigame/dev/api/data-analysis/wx.getGameLogManager.html)
*
* 需要基础库： `3.7.4`
*
* 初始化并返回一个游戏日志管理器实例，用于记录和管理游戏日志。
*
* **上报限制**
*
* 单次游戏生命周期内，上报日志的条数最大为999条。
* 单条日志体积最大为16KB。
* 超出上报限制，日志将无法上报成功。
*
* **示例代码**
*
* 1、调用 wx.getGameLogManager 获取游戏日志管理器实例，为了兼容旧的基础库版本，在使用游戏日志上报相关功能时，建议使用如下代码封装一下，例如将相关兼容代码封装在本地的`gamelog.js`中：
* ```js
let logger = null;
if (wx.getGameLogManager) {
  logger = wx.getGameLogManager({
    commonInfo: {
      version: "1.0.0",
      env: "prod"
    }
  });
}
export const gameLogAdaptor = {
  log() {
    if (!logger) console.log.apply(logger, arguments); // 防止低版本基础库调用报错
    logger.log.apply(logger, arguments);
  },
  tag() {
    if (!logger) return console;
    return logger.tag.apply(logger, arguments);
  },
  getCommonInfo() {
    if (!logger) return {};
    return logger.getCommonInfo.apply(logger, arguments);
  },
  updateCommonInfo() {
    if (!logger) console.log.apply(logger, arguments);
    logger.updateCommonInfo.apply(logger, arguments);
  }
};
```
* 2、在游戏逻辑合适的位置打印相关的日志
* ```js
import { gameLogAdaptor } from "./gamelog.js"; // 引用上面的gamelog.js文件，具体路径以游戏实现为准

// 使用tag后的上报方法上报日志
const cacheLogger = gameLogAdaptor.tag("cache"); // 用于缓存相关日志上报
cacheLogger.warn("cache not found", { key: "tableCache" }); // 上报 warn 级别的日志

// 直接使用log方法上报日志
gameLogAdaptor.log({
  level: "info",
  key: "login",
  value: { loginTime: "1731915939" }
});
``` */
        getGameLogManager(param: GetGameLogManagerParam): GameLogManager
        /** [[GameRecorderShareButton](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorderShareButton.html) wx.createGameRecorderShareButton(Object object)](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/wx.createGameRecorderShareButton.html)
         *
         * 需要基础库： `2.8.0`
         *
         * 创建游戏对局回放分享按钮，返回一个单例对象。按钮在被用户点击后会发起对最近一次录制完成的游戏对局回放的分享。 */
        createGameRecorderShareButton(
            option: CreateGameRecorderShareButtonOption
        ): GameRecorderShareButton
        /** [[GameRecorder](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.html) wx.getGameRecorder()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/wx.getGameRecorder.html)
         *
         * 需要基础库： `2.8.0`
         *
         * 获取全局唯一的游戏画面录制对象 */
        getGameRecorder(): GameRecorder
        /** [[GameServerManager](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.html) wx.getGameServerManager()](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/wx.getGameServerManager.html)
         *
         * 需要基础库： `2.8.0`
         *
         * 获取 **全局唯一** 的游戏服务管理器。注意：`GameServerManager.inviteFriend`、`GameServerManager.onStateUpdate`、`GameServerManager.offStateUpdate`、`GameServerManager.getFriendsStateData` 这几个接口只允许在开放数据域内使用，其他接口则只允许在游戏域内使用。 */
        getGameServerManager(): GameServerManager
        /** [[GridAd](https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.html) wx.createGridAd(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ad/wx.createGridAd.html)
         *
         * 需要基础库： `2.9.2`
         * @deprecated 基础库版本 [2.30.2](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃
         *
         * 创建 grid(格子) 。每次调用该方法创建 grid(格子) 广告都会返回一个全新的实例。 */
        createGridAd(option: CreateGridAdOption): GridAd
        /** [[ImageData](https://developers.weixin.qq.com/minigame/dev/api/render/image/ImageData.html) wx.createImageData(number width, number height)](https://developers.weixin.qq.com/minigame/dev/api/render/image/wx.createImageData.html)
*
* 需要基础库： `3.4.10`
*
* 这里有两种使用方法, 一种是指定ImageData的宽和高, 另外一种是使用ImageData, 通过它本身的宽高尺寸来构建新的对象。
*
* **示例代码**
*
* ```js
const imageData1 =  wx.createImageData(100, 100)
const imageData2 =  wx.createImageData(imageData1)
``` */
        createImageData(
            /** 使用像素描述 ImageData 的实际宽度 */
            width: number,
            /** 使用像素描述 ImageData 的实际高度 */
            height: number
        ): ImageData
        /** [[Image](https://developers.weixin.qq.com/minigame/dev/api/render/image/Image.html) wx.createImage()](https://developers.weixin.qq.com/minigame/dev/api/render/image/wx.createImage.html)
         *
         * 创建一个图片对象 */
        createImage(): Image
        /** [[InferenceSession](https://developers.weixin.qq.com/minigame/dev/api/ai/inference/InferenceSession.html) wx.createInferenceSession(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ai/inference/wx.createInferenceSession.html)
*
* 需要基础库： `2.30.0`
*
* 创建 AI 推理 Session。使用前可参考[AI指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/inference/tutorial.html)
*
* **示例代码**
*
* ```js
// 创建会话，加载模型
const session = wx.createInferenceSession({
  model: `${wx.env.USER_DATA_PATH}/MNIST.onnx`,
  precisionLevel: 4,
  typicalShape:{input1:[1, 3, 224, 224], input2:[1, 1, 224, 224]},  //除非使用动态轴，一般不用显式指定
  allowNPU: false,
  allowQuantize: false
})

// 监听error事件
session.onError(err => {
  console.error(err)
})

// 监听模型加载完成事件
session.onLoad(() => {
  // 运行推理
  // 其中input1, input2, output0 必须与使用的onnx模型中实际的输入输出名字完全一致，不可随意填写。
  // 模型输入输出信息可以通过Netron 打开onnx模型看到
  session.run({
    input1: {
      type: 'float32',
      data: new Float32Array(3 * 224 * 224).buffer,
      shape: [1, 3, 224, 224] // NCHW 顺序
    },
    // 多个input的添加方法，假设第二个input需要数据类型为uint8
    input2: {
      type: 'uint8',
      data: new Uint8Array(224 * 224).buffer,
      shape: [1, 1, 224, 224]
    },
  }).then(res => {
    console.log(res.output0)
  })
})

// 销毁Session
// session完成创建后可以多次调用run进行推理，直到调用`session.destroy()`释放相关内存。

// 销毁会话
session.destroy()
``` */
        createInferenceSession(
            option: CreateInferenceSessionOption
        ): InferenceSession
        /** [[InnerAudioContext](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.html) wx.createInnerAudioContext(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.createInnerAudioContext.html)
*
* 需要基础库： `1.6.0`
*
* 创建内部 [audio](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/audio.html) 上下文 [InnerAudioContext](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.html) 对象。
*
* **示例代码**
*
* ```js
const innerAudioContext = wx.createInnerAudioContext({
  useWebAudioImplement: false // 是否使用 WebAudio 作为底层音频驱动，默认关闭。对于短音频、播放频繁的音频建议开启此选项，开启后将获得更优的性能表现。由于开启此选项后也会带来一定的内存增长，因此对于长音频建议关闭此选项
})
innerAudioContext.src = 'https://wx_test.mp3'

innerAudioContext.play() // 播放

innerAudioContext.pause() // 暂停

innerAudioContext.stop() // 停止

innerAudioContext.destroy() // 释放音频资源
``` */
        createInnerAudioContext(
            option?: CreateInnerAudioContextOption
        ): InnerAudioContext
        /** [[InterstitialAd](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.html) wx.createInterstitialAd(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ad/wx.createInterstitialAd.html)
         *
         * 需要基础库： `2.6.0`
         *
         * 创建插屏广告组件。请通过 [wx.getSystemInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemInfoSync.html) 返回对象的 SDKVersion 判断基础库版本号后再使用该 API。每次调用该方法创建插屏广告都会返回一个全新的实例（小程序端的插屏广告实例不允许跨页面使用）。 */
        createInterstitialAd(option: CreateInterstitialAdOption): InterstitialAd
        /** [[LoadSubpackageTask](https://developers.weixin.qq.com/minigame/dev/api/base/subpackage/LoadSubpackageTask.html) wx.loadSubpackage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/base/subpackage/wx.loadSubpackage.html)
         *
         * 需要基础库： `2.1.0`
         *
         * 触发分包加载，详见 [分包加载](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/subPackage/useSubPackage.html) */
        loadSubpackage(option: LoadSubpackageOption): LoadSubpackageTask
        /** [[LogManager](https://developers.weixin.qq.com/minigame/dev/api/base/debug/LogManager.html) wx.getLogManager(Object object)](https://developers.weixin.qq.com/minigame/dev/api/base/debug/wx.getLogManager.html)
*
* 需要基础库： `2.1.0`
*
* 获取日志管理器对象。
*
* **示例代码**
*
* ```js
const logger = wx.getLogManager({level: 1})
logger.log({str: 'hello world'}, 'basic log', 100, [1, 2, 3])
logger.info({str: 'hello world'}, 'info log', 100, [1, 2, 3])
logger.debug({str: 'hello world'}, 'debug log', 100, [1, 2, 3])
logger.warn({str: 'hello world'}, 'warn log', 100, [1, 2, 3])
``` */
        getLogManager(option: GetLogManagerOption): LogManager
        /** [[MediaAudioPlayer](https://developers.weixin.qq.com/minigame/dev/api/media/audio/MediaAudioPlayer.html) wx.createMediaAudioPlayer()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.createMediaAudioPlayer.html)
*
* 需要基础库： `2.13.0`
*
* 创建媒体音频播放器对象 [MediaAudioPlayer](https://developers.weixin.qq.com/minigame/dev/api/media/audio/MediaAudioPlayer.html) 对象，可用于播放视频解码器 [VideoDecoder](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.html) 输出的音频。
*
* **示例代码**
*
* ```js
  // 创建视频解码器，具体参数见 createVideoDecoder 文档
  const videoDecoder = wx.createVideoDecoder()
  // 创建媒体音频播放器
  const mediaAudioPlayer = wx.createMediaAudioPlayer()
  // 启动视频解码器
  videoDecoder.start()
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
```
*
* **完整demo（小游戏）**
*
* - https://developers.weixin.qq.com/s/SF2duHmb7MjI */
        createMediaAudioPlayer(): MediaAudioPlayer
        /** [[OpenDataContext](https://developers.weixin.qq.com/minigame/dev/api/open-api/context/OpenDataContext.html) wx.getOpenDataContext(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/context/wx.getOpenDataContext.html)
         *
         * 需要基础库： `1.9.92`
         *
         * 获取开放数据域 */
        getOpenDataContext(option?: GetOpenDataContextOption): OpenDataContext
        /** [[OpenSettingButton](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/OpenSettingButton.html) wx.createOpenSettingButton(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/wx.createOpenSettingButton.html)
         *
         * 需要基础库： `2.0.7`
         * @deprecated 基础库版本 [3.0.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [wx.openSetting](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/wx.openSetting.html) 替换
         *
         * 创建打开设置页面的按钮 */
        createOpenSettingButton(
            option: CreateOpenSettingButtonOption
        ): OpenSettingButton
        /** [[PageManager](https://developers.weixin.qq.com/minigame/dev/api/open-api/openlink/PageManager.html) wx.createPageManager()](https://developers.weixin.qq.com/minigame/dev/api/open-api/openlink/wx.createPageManager.html)
*
* 需要基础库： `3.6.7`
*
* 小游戏开放页面管理器，用于启动微信内置的各种小游戏活动、功能页面。具体OPENLINK值由不同的能力渠道获得。
*
* **示例代码**
*
* ```js
const pageManager = wx.createPageManager();

pageManager.load({
  openlink: 'xxxxxxx-xxxxxx', // 由不同渠道获得的OPENLINK值
}).then((res) => {
  // 加载成功，res 可能携带不同活动、功能返回的特殊回包信息（具体请参阅渠道说明）
  console.log(res);

  // 加载成功后按需显示
  pageManager.show();

}).catch((err) => {
  // 加载失败，请查阅 err 给出的错误信息
  console.error(err);
})

``` */
        createPageManager(): PageManager
        /** [[Path2D](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Path2D.html) wx.createPath2D()](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/wx.createPath2D.html)
         *
         * 需要基础库： `2.24.6`
         *
         * 创建一个 Path2D 路径对象 */
        createPath2D(): Path2D
        /** [[Performance](https://developers.weixin.qq.com/minigame/dev/api/base/performance/Performance.html) wx.getPerformance()](https://developers.weixin.qq.com/minigame/dev/api/base/performance/wx.getPerformance.html)
         *
         * 获取性能管理器 */
        getPerformance(): Performance
        /** [[PreDownloadSubpackageTask](https://developers.weixin.qq.com/minigame/dev/api/base/subpackage/PreDownloadSubpackageTask.html) wx.preDownloadSubpackage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/base/subpackage/wx.preDownloadSubpackage.html)
*
* 需要基础库： `2.27.3`
*
* 触发分包预下载。
*
* **worker 分包示例代码**
*
* ```js
// 首先要在 app.json / game.json 中配置workers作为分包
{
  "workers": {
    "path": "myWorkersFolder",
    "isSubpackage": true  // true 表示把 worker 打包为分包。默认 false。填 false 时等同于 { "workers": "myWorkersFolder" }
  }
}
```
* ```js
// 然后调用 wx.preDownloadSubpackage 下载 worker 分包，下载成功后才可以创建 worker
var task = wx.preDownloadSubpackage({
  packageType: "workers",
  success(res) {
    console.log("load worker success", res)
    wx.createWorker("myWorkersFolder/request/index.js")   // 创建 worker。 如果 worker 分包没下载完就调 createWorker 的话将报错
  },
  fail(res) {
    console.log("load worker fail", res)
  }
})

task.onProgressUpdate(res => {
  console.log(res.progress) // 可通过 onProgressUpdate 接口监听下载进度
  console.log(res.totalBytesWritten)
  console.log(res.totalBytesExpectedToWrite)
})
```
*
* **普通分包示例代码**
*
* ```js
// 首先要在 app.json / game.json 中配置分包
{
    "subPackages": [
      {
        "name": "ModuleA",
        "root": "/ModuleA/"
      }
    ]
}
```
* ```js
var task = wx.preDownloadSubpackage({
  name: "ModuleA",
  success(res) {
    console.log("load subpackage success", res)
    // 执行分包代码
    wx.loadSubpackage({
      name: "ModuleA",
      success(res) {
        console.log(res)
      },
    })
  },
  fail(res) {
    console.log("load subpackage fail", res)
  }
})

task.onProgressUpdate(res => {
  console.log(res.progress) // 可通过 onProgressUpdate 接口监听下载进度
  console.log(res.totalBytesWritten)
  console.log(res.totalBytesExpectedToWrite)
})
``` */
        preDownloadSubpackage(
            option: PreDownloadSubpackageOption
        ): PreDownloadSubpackageTask
        /** [[RealtimeLogManager](https://developers.weixin.qq.com/minigame/dev/api/base/debug/RealtimeLogManager.html) wx.getRealtimeLogManager()](https://developers.weixin.qq.com/minigame/dev/api/base/debug/wx.getRealtimeLogManager.html)
*
* 需要基础库： `2.14.4`
*
* 获取实时日志管理器对象。
*
* **示例代码**
*
* ```js
// 小程序端
const logger = wx.getRealtimeLogManager()
logger.info({str: 'hello world'}, 'info log', 100, [1, 2, 3])
logger.error({str: 'hello world'}, 'error log', 100, [1, 2, 3])
logger.warn({str: 'hello world'}, 'warn log', 100, [1, 2, 3])

// 插件端，基础库 2.16.0 版本后支持，只允许采用 key-value 的新格式上报
const logManager = wx.getRealtimeLogManager()
const logger = logManager.tag('plugin-log1')
logger.info('key1', 'value1')
logger.error('key2', {str: 'value2'})
logger.warn('key3', 'value3')
``` */
        getRealtimeLogManager(): RealtimeLogManager
        /** [[RecorderManager](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.html) wx.getRecorderManager()](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/wx.getRecorderManager.html)
         *
         * 需要基础库： `1.6.0`
         *
         * 获取**全局唯一**的录音管理器 RecorderManager */
        getRecorderManager(): RecorderManager
        /** [[RequestTask](https://developers.weixin.qq.com/minigame/dev/api/network/request/RequestTask.html) wx.request(Object object)](https://developers.weixin.qq.com/minigame/dev/api/network/request/wx.request.html)
*
* 发起 HTTPS 网络请求。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/network.html)。
*
* **data 参数说明**
*
* 最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下：
* - 对于 `GET` 方法的数据，会将数据转换成 query string（`encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...`）
* - 对于 `POST` 方法且 `header['content-type']` 为 `application/json` 的数据，会对数据进行 JSON 序列化
* - 对于 `POST` 方法且 `header['content-type']` 为 `application/x-www-form-urlencoded` 的数据，会将数据转换成 query string `（encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）`
*
* **useHighPerformanceMode 高性能模式说明**
*
* 在该模式下，框架将会采用全新的网络请求模块，默认支持 HTTP3，可以提升小程序的网络请求性能。有以下注意事项：
* - 除声明了 `enableChunked` 后会走 HTTP1 以外，均会自动开启 HTTP2/HTTP3 等优化能力，`enableQuic`、`enableHttp2` 参数将会强制开启。建议开发者在后台服务也开启对应能力以获得更好的效果。
* - 暂仅支持 Android，iOS/PC 端设置该参数后会使用原 request 模块。iOS 会在后续支持该参数。
* - 暂不支持 HttpDNS 能力。
* - 开启 `enableProfile` 后，返回的 profile 字段部分信息缺失，会被缺省值代替。缺失部分包括 redirectStart、redirectEnd、rtt、estimate_nettype、httpRttEstimate、transportRttEstimate、downstreamThroughputKbpsEstimate、throughputKbps、peerIP、port。
*
* **示例代码**
*
* ```js
wx.request({
  url: 'example.php', //仅为示例，并非真实的接口地址
  data: {
    x: '',
    y: ''
  },
  header: {
    'content-type': 'application/json' // 默认值
  },
  success (res) {
    console.log(res.data)
  }
})
``` */
        request<
            T extends string | IAnyObject | ArrayBuffer =
                | string
                | IAnyObject
                | ArrayBuffer
        >(
            option: RequestOption<T>
        ): RequestTask
        /** [[RewardedVideoAd](https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.html) wx.createRewardedVideoAd(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ad/wx.createRewardedVideoAd.html)
         *
         * 需要基础库： `2.0.4`
         *
         * 创建激励视频广告组件。请通过 [wx.getSystemInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemInfoSync.html) 返回对象的 SDKVersion 判断基础库版本号后再使用该 API（小游戏端要求 >= 2.0.4， 小程序端要求 >= 2.6.0）。调用该方法创建的激励视频广告是一个单例（小游戏端是全局单例，小程序端是页面内单例，在小程序端的单例对象不允许跨页面使用）。 */
        createRewardedVideoAd(
            option: CreateRewardedVideoAdOption
        ): RewardedVideoAd
        /** [[SocketTask](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.html) wx.connectSocket(Object object)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.connectSocket.html)
*
* @warning **推荐使用 [SocketTask](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.html) 的方式去管理 webSocket 链接，每一条链路的生命周期都更加可控，同时存在多个 webSocket 的链接的情况下使用 wx 前缀的方法可能会带来一些和预期不一致的情况。**
*
* 创建一个 WebSocket 连接。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/network.html)。
*
* **并发数**
*
* - 1.7.0 及以上版本，最多可以同时存在 5 个 WebSocket 连接。
* - 1.7.0 以下版本，一个小程序同时只能有一个 WebSocket 连接，如果当前已存在一个 WebSocket 连接，会自动关闭该连接，并重新创建一个 WebSocket 连接。
*
* **示例代码**
*
* ```js
wx.connectSocket({
  url: 'wss://example.qq.com',
  header:{
    'content-type': 'application/json'
  }
})
``` */
        connectSocket(option: ConnectSocketOption): SocketTask
        /** [[TCPSocket](https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.html) wx.createTCPSocket(Object object)](https://developers.weixin.qq.com/minigame/dev/api/network/tcp/wx.createTCPSocket.html)
         *
         * 需要基础库： `3.1.1`
         *
         * 创建一个 TCP Socket 实例。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/network.html)。
         *
         * **连接限制**
         *
         * - 允许与局域网内的非本机 IP 通信
         * - 允许与配置过的服务器域名通信，详见[相关说明](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/network.html)
         * - 禁止与以下端口号连接：`1024 以下` `1099` `1433` `1521` `1719` `1720` `1723` `2049` `2375` `3128` `3306` `3389` `3659` `4045` `5060` `5061` `5432` `5984` `6379` `6000` `6566` `7001` `7002` `8000-8100` `8443` `8888` `9200` `9300` `10051` `10080` `11211` `27017` `27018` `27019`
         * - 每 5 分钟内最多创建 20 个 TCPSocket */
        createTCPSocket(option?: CreateTCPSocketOption): TCPSocket
        /** [[UDPSocket](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.html) wx.createUDPSocket(string type)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/wx.createUDPSocket.html)
         *
         * 需要基础库： `2.7.0`
         *
         * 创建一个 UDP Socket 实例。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/network.html)。 */
        createUDPSocket(
            /** 需要基础库： `2.18.0`
             *
             * 套接字族，必须是 udp4 或 udp6，默认是 udp4 */
            type?: string
        ): UDPSocket
        /** [[UpdateManager](https://developers.weixin.qq.com/minigame/dev/api/base/update/UpdateManager.html) wx.getUpdateManager()](https://developers.weixin.qq.com/minigame/dev/api/base/update/wx.getUpdateManager.html)
         *
         * 需要基础库： `1.9.90`
         *
         * 获取**全局唯一**的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看[运行机制](https://developers.weixin.qq.com/minigame/dev/guide/runtime/operating-mechanism.html)文档。
         *
         * **示例代码**
         *
         * [示例代码](https://developers.weixin.qq.com/minigame/dev/api/base/update/UpdateManager.html#示例代码) */
        getUpdateManager(): UpdateManager
        /** [[UploadTask](https://developers.weixin.qq.com/minigame/dev/api/network/upload/UploadTask.html) wx.uploadFile(Object object)](https://developers.weixin.qq.com/minigame/dev/api/network/upload/wx.uploadFile.html)
*
* 将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 `content-type` 为 `multipart/form-data`。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/network.html)。
*
* **示例代码**
*
* ```js
wx.chooseImage({
  success (res) {
    const tempFilePaths = res.tempFilePaths
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
      filePath: tempFilePaths[0],
      name: 'file',
      formData: {
        'user': 'test'
      },
      success (res){
        const data = res.data
        //do something
      }
    })
  }
})
``` */
        uploadFile(option: UploadFileOption): UploadTask
        /** [[UserCryptoManager](https://developers.weixin.qq.com/minigame/dev/api/base/crypto/UserCryptoManager.html) wx.getUserCryptoManager()](https://developers.weixin.qq.com/minigame/dev/api/base/crypto/wx.getUserCryptoManager.html)
         *
         * 需要基础库： `2.17.3`
         *
         * 获取用户加密模块 */
        getUserCryptoManager(): UserCryptoManager
        /** [[UserInfoButton](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/UserInfoButton.html) wx.createUserInfoButton(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/wx.createUserInfoButton.html)
         *
         * 需要基础库： `2.0.1`
         *
         * 创建用户信息按钮。使用前请参考 [用户信息获取](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/user-info.html) */
        createUserInfoButton(option: CreateUserInfoButtonOption): UserInfoButton
        /** [[VKSession](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKSession.html) wx.createVKSession(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/wx.createVKSession.html)
*
* 需要基础库： `2.32.1`
*
* 创建 vision kit 会话对象。详见[指南](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/base.html)
*
* **示例代码**
*
* v1 版本：[VisionKit基础能力使用参考](https://github.com/wechat-miniprogram/miniprogram-demo/tree/master/miniprogram/packageAPI/pages/ar/visionkit-basic)
* v2 版本：[VisionKit-v2基础能力使用参考](https://github.com/wechat-miniprogram/miniprogram-demo/tree/master/miniprogram/packageAPI/pages/ar/visionkit-basic-v2)
* ```js
// 以下 demo 以 v2 为例
// 创建 session 对象
const ssession = wx.createVKSession({
  track: {
    plane: {mode: 3},
  },
  version: 'v2',
  gl, // WebGLRenderingContext
})

// 逐帧分析
const onFrame = timestamp => {
  // 开发者可以自己控制帧率
  const frame = session.getVKFrame(canvasWidth, canvasHeight)
    if (frame) {
      // 分析完毕，可以拿到帧对象
      doRender(frame)
    }

  session.requestAnimationFrame(onFrame)
}
session.start(err => {
  if (!err) session.requestAnimationFrame(onFrame)
})

// 渲染函数
const doRender = frame => {
  // ...
}
``` */
        createVKSession(option: VKConfig): VKSession
        /** [[VideoDecoder](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.html) wx.createVideoDecoder()](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/wx.createVideoDecoder.html)
         *
         * 需要基础库： `2.11.1`
         *
         * 创建视频解码器，可逐帧获取解码后的数据 */
        createVideoDecoder(): VideoDecoder
        /** [[Video](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.html) wx.createVideo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/video/wx.createVideo.html)
         *
         * 创建视频 */
        createVideo(option: CreateVideoOption): Video
        /** [[WebAudioContext](https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.html) wx.createWebAudioContext()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.createWebAudioContext.html)
         *
         * 需要基础库： `2.19.0`
         *
         * 创建 WebAudio 上下文。 */
        createWebAudioContext(): WebAudioContext
        /** [[Worker](https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.html) wx.createWorker(string scriptPath, object options)](https://developers.weixin.qq.com/minigame/dev/api/worker/wx.createWorker.html)
*
* 需要基础库： `1.9.90`
*
* 创建一个 Worker 线程
*
* **示例代码**
*
* ```js
// 创建普通worker
wx.createWorker('workers/index.js')
```
* ```js
function createNewWorker() {
  const worker = wx.createWorker('workers/index.js', {
    useExperimentalWorker: true
  })
  // 监听worker被系统回收事件
  worker.onProcessKilled(() => {
    // 重新创建一个worker
    createNewWorker()
  })
}
// 创建实验worker
createNewWorker()
``` */
        createWorker(
            /** worker 入口文件的**绝对路径** */
            scriptPath: string,
            /** 可选参数 */
            options?: CreateWorkerOption
        ): Worker
        /** [any wx.getStorageSync(string key)](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.getStorageSync.html)
*
* 从本地缓存中同步获取指定 key 的内容。
*
* **注意**
*
* storage 应只用来进行数据的持久化存储，不应用于运行时的数据传递或全局状态管理。启动过程中过多的同步读写存储，会显著影响启动耗时。
*
* **示例代码**
*
* ```js
try {
  var value = wx.getStorageSync('key')
  if (value) {
    // Do something with return value
  }
} catch (e) {
  // Do something when catch error
}
``` */
        getStorageSync<T = any>(
            /** 本地缓存中指定的 key */
            key: string
        ): T
        /** [boolean wx.isPointerLocked()](https://developers.weixin.qq.com/minigame/dev/api/render/cursor/wx.isPointerLocked.html)
         *
         * 需要基础库： `3.2.0`
         *
         * 检查鼠标指针是否被锁定。此接口仅在 Windows、Mac 端支持。 */
        isPointerLocked(): boolean
        /** [boolean wx.isVKSupport(string version)](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/wx.isVKSupport.html)
*
* 需要基础库： `2.22.0`
*
* 判断支持版本
*
* **示例代码**
*
* ```js
const isSupportV2 = wx.isVKSupport('v2')
``` */
        isVKSupport(
            /** 参数 version 可选值：
             * - 'v1': 旧版本;
             * - 'v2': v2 版本，目前只有 iOS 基础库 2.22.0 以上支持; */
            version: 'v1' | 'v2'
        ): boolean
        /** [boolean wx.setCursor(string path, number x, number y)](https://developers.weixin.qq.com/minigame/dev/api/render/cursor/wx.setCursor.html)
         *
         * 需要基础库： `2.10.1`
         *
         * 加载自定义光标，仅支持 PC 平台
         *
         * **注意**
         *
         * - 传入图片太大可能会导致设置无效，推荐图标大小 32x32
         * - 基础库 v2.16.0 后，支持更多图片格式以及关键字种类（参考 CSS 标准） */
        setCursor(
            /** 代码包或本地路径，支持 ico 和 cur 格式，传入 'default' 代表恢复系统默认 */
            path: string,
            /** 需要基础库： `2.19.0`
             *
             * 横向偏移量 */
            x?: number,
            /** 需要基础库： `2.19.0`
             *
             * 纵向偏移量 */
            y?: number
        ): boolean
        /** [boolean wx.setMessageToFriendQuery(Object object)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.setMessageToFriendQuery.html)
*
* 设置 wx.shareMessageToFriend 接口 query 字段的值
*
* **提示**
*
* 1. 此处的 query 参数与 wx.onShow 取到的启动查询参数 query 不是同一个概念，仅仅是启动查询参数会增加一个字段为 query。
* 2. query 参数如涉及 "?"和"&" 等特殊符号，需自行进行 encodeURIComponent 和 decodeURIComponent 等操作。
*
* **示例代码**
*
* ```js
// 发送方
wx.setMessageToFriendQuery({
 shareMessageToFriendScene: 1,
 query: 'testquery'
})
// 预期接收方可以通过以下方式拿到设置
wx.getEnterOptionsSync().query.shareMessageToFriendScene // 1
wx.getEnterOptionsSync().query.query // 'testquery'
```
*
* **示例代码-特殊字符query**
*
* ```js
// 发送方
wx.setMessageToFriendQuery({
 query: encodeURIComponent('foo=1&bar=2') // 如果 query 涉及特殊符号，需要自行 encodeURIComponent
})

// 接收方
// 预期可以通过以下方式拿到设置
wx.getEnterOptionsSync().query.query // 此处拿到的是 'foo%3D1%26bar%3D2'，需要 decodeURIComponent
decodeURIComponent(wx.getEnterOptionsSync().query.query) // 'foo=1&bar=2'
``` */
        setMessageToFriendQuery(option: SetMessageToFriendQueryOption): boolean
        /** [number wx.getTextLineHeight(Object object)](https://developers.weixin.qq.com/minigame/dev/api/render/font/wx.getTextLineHeight.html)
         *
         * 获取一行文本的行高 */
        getTextLineHeight(option: GetTextLineHeightOption): number
        /** [string wx.createBufferURL(ArrayBuffer|TypedArray buffer)](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.createBufferURL.html)
         *
         * 需要基础库： `2.14.0`
         *
         * 根据传入的 buffer 创建一个唯一的 URL 存在内存中 */
        createBufferURL(
            /** 需要存入内存的二进制数据 */
            buffer:
                | ArrayBuffer
                | Int8Array
                | Uint8Array
                | Uint8ClampedArray
                | Int16Array
                | Uint16Array
                | Int32Array
                | Uint32Array
                | Float32Array
                | Float64Array
        ): string
        /** [string wx.decode(Object object)](https://developers.weixin.qq.com/minigame/dev/api/util/wx.decode.html)
         *
         * 将 ArrayBuffer 按照指定的编码格式解码成字符串 */
        decode(option: DecodeOption): string
        /** [string wx.loadFont(string path)](https://developers.weixin.qq.com/minigame/dev/api/render/font/wx.loadFont.html)
         *
         * 加载自定义字体文件 */
        loadFont(
            /** 字体文件路径。支持本地路径、代码包路径。 */
            path: string
        ): string
        /** [wx.addCard(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/card/wx.addCard.html)
*
* 需要基础库： `2.5.0`
*
* 批量添加卡券。只有通过 [认证](https://developers.weixin.qq.com/miniprogram/product/renzheng.html) 的小程序或文化互动类目的小游戏才能使用。更多文档请参考 [微信卡券接口文档](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1490190158&version=1&lang=zh_CN&platform=2)。
*
* **cardExt 说明**
*
* cardExt 是卡券的扩展参数，其值是一个 JSON 字符串。
*
* **示例代码**
*
* ```js
wx.addCard({
  cardList: [
    {
      cardId: '',
      cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
    }, {
      cardId: '',
      cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
    }
  ],
  success (res) {
    console.log(res.cardList) // 卡券添加结果
  }
})
``` */
        addCard<T extends AddCardOption = AddCardOption>(
            option: T
        ): PromisifySuccessResult<T, AddCardOption>
        /** [wx.authPrivateMessage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.authPrivateMessage.html)
*
* 需要基础库： `2.13.0`
*
* 验证私密消息。用法详情见 [小程序私密消息使用指南](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/share/private-message.html)
*
* **示例代码**
*
* ```js
wx.authPrivateMessage({
  shareTicket: 'xxxxxx',
  success(res) {
    console.log('authPrivateMessage success', res)
    // res
    // {
    //   errMsg: 'authPrivateMessage:ok'
    //   valid: true
    //   iv: 'xxxx',
    //   encryptedData: 'xxxxxx'
    // }
  },
  fail(res) {
    console.log('authPrivateMessage fail', res)
  }
})
``` */
        authPrivateMessage(option?: AuthPrivateMessageOption): void
        /** [wx.authorize(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/authorize/wx.authorize.html)
*
* 需要基础库： `1.2.0`
*
* 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。更多用法详见 [用户授权](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/authorize.html)。
*
* **注意事项**
*
* - 小游戏内使用 `wx.authorize({scope: "scope.userInfo"})`，不会弹出授权窗口，请使用 [wx.createUserInfoButton](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/wx.createUserInfoButton.html)
* - 需要授权 `scope.userFuzzyLocation` 时必须[配置地理位置用途说明](https://developers.weixin.qq.com/minigame/dev/reference/configuration/app.html#permission)。
*
* **示例代码**
*
* ```js
// 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.writePhotosAlbum" 这个 scope
wx.getSetting({
  success(res) {
    if (!res.authSetting['scope.writePhotosAlbum']) {
      wx.authorize({
        scope: 'scope.writePhotosAlbum',
        success () {
          // 用户已经同意保存到相册功能，后续调用 wx.saveImageToPhotosAlbum 接口不会弹窗询问
          wx.saveImageToPhotosAlbum()
        }
      })
    }
  }
})
``` */
        authorize<T extends AuthorizeOption = AuthorizeOption>(
            option: T
        ): PromisifySuccessResult<T, AuthorizeOption>
        /** [wx.checkHandoffEnabled(Object object)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.checkHandoffEnabled.html)
         *
         * 需要基础库： `2.14.4`
         *
         * 检查是否可以进行接力，该接口需要在开放数据域调用 */
        checkHandoffEnabled(option?: CheckHandoffEnabledOption): void
        /** [wx.checkIsAddedToMyMiniProgram(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/my-miniprogram/wx.checkIsAddedToMyMiniProgram.html)
         *
         * 需要基础库： `2.30.3`
         *
         * 检查小程序是否被添加至 「我的小程序」 */
        checkIsAddedToMyMiniProgram(
            option: CheckIsAddedToMyMiniProgramOption
        ): void
        /** [wx.checkSession(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/login/wx.checkSession.html)
*
* 检查登录态 session_key 是否过期。
*
* session_key 具有唯一性，在使用小程序时，同一用户在同一时刻仅有一个有效的 session_key。
*
* 通过 wx.login 接口获得的用户登录态拥有一定的时效性。用户越久未使用小程序，用户登录态越有可能过期。反之如果用户一直在使用小程序，则用户登录态一直保持有效。具体时效逻辑由微信维护，对开发者透明。除了过期失效外，触发获取临时登录凭证 code 的操作（[小程序登录](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/login.html) 和 [数据预拉取](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/pre-fetch.html)）可能会生成新的登录态session_key，从而使旧的 session_key 被顶替而失效。
*
* 开发者可以调用 wx.checkSession 接口检测用户登录态是否过期。**注意，wx.checkSession 的校验对象是最后一次获取 code 操作对应的登录态 session_key**，调用成功说明该 session_key 未过期，调用失败说明 session_key 已过期。如果要校验指定的 session_key 是否有效，可以在开发者服务器后台调用 [checkSessionKey](#)。
*
* 登录态失效后开发者可以再调用 wx.login 获取新的用户登录态。
*
* **示例代码**
*
* ```js
wx.checkSession({
  success () {
    //session_key 未过期，并且在本生命周期一直有效
  },
  fail () {
    // session_key 已经失效，需要重新执行登录流程
    wx.login() //重新登录
  }
})
``` */
        checkSession<T extends CheckSessionOption = CheckSessionOption>(
            option?: T
        ): PromisifySuccessResult<T, CheckSessionOption>
        /** [wx.chooseImage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/image/wx.chooseImage.html)
*
* @deprecated 基础库版本 [2.21.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [wx.chooseMedia](https://developers.weixin.qq.com/minigame/dev/api/media/video/wx.chooseMedia.html) 替换
*
* 从本地相册选择图片或使用相机拍照。
*
* ****
*
* ```js
wx.chooseImage({
  count: 1,
  sizeType: ['original', 'compressed'],
  sourceType: ['album', 'camera'],
  success (res) {
    // tempFilePath可以作为img标签的src属性显示图片
    const tempFilePaths = res.tempFilePaths
  }
})
``` */
        chooseImage<T extends ChooseImageOption = ChooseImageOption>(
            option?: T
        ): PromisifySuccessResult<T, ChooseImageOption>
        /** [wx.chooseMedia(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/video/wx.chooseMedia.html)
*
* 需要基础库： `2.23.0`
*
* 拍摄或从手机相册中选择图片或视频。
*
* **示例代码**
*
* ```js
wx.chooseMedia({
  count: 9,
  mediaType: ['image','video'],
  sourceType: ['album', 'camera'],
  maxDuration: 30,
  camera: 'back',
  success(res) {
    console.log(res.tempFiles[0].tempFilePath)
    console.log(res.tempFiles[0].size)
  }
})
``` */
        chooseMedia<T extends ChooseMediaOption = ChooseMediaOption>(
            option: T
        ): PromisifySuccessResult<T, ChooseMediaOption>
        /** [wx.chooseMessageFile(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/image/wx.chooseMessageFile.html)
*
* 需要基础库： `2.23.0`
*
* 从客户端会话选择文件。
*
* ****
*
* ```js
wx.chooseMessageFile({
  count: 10,
  type: 'image',
  success (res) {
    // tempFilePath可以作为img标签的src属性显示图片
    const tempFilePaths = res.tempFiles
  }
})
``` */
        chooseMessageFile<
            T extends ChooseMessageFileOption = ChooseMessageFileOption
        >(
            option: T
        ): PromisifySuccessResult<T, ChooseMessageFileOption>
        /** [wx.clearStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.clearStorage.html)
*
* 清理本地数据缓存。
*
* **示例代码**
*
* ```js
wx.clearStorage()
```
*
* ```js
try {
  wx.clearStorageSync()
} catch(e) {
  // Do something when catch error
}
``` */
        clearStorage<T extends ClearStorageOption = ClearStorageOption>(
            option?: T
        ): PromisifySuccessResult<T, ClearStorageOption>
        /** [wx.clearStorageSync()](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.clearStorageSync.html)
*
* [wx.clearStorage](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.clearStorage.html) 的同步版本
*
* **示例代码**
*
* ```js
wx.clearStorage()
```
*
* ```js
try {
  wx.clearStorageSync()
} catch(e) {
  // Do something when catch error
}
``` */
        clearStorageSync(): void
        /** [wx.closeBLEConnection(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.closeBLEConnection.html)
*
* 需要基础库： `2.9.2`
*
* 断开与蓝牙低功耗设备的连接。
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.closeBLEConnection({
  deviceId,
  success (res) {
    console.log(res)
  }
})
``` */
        closeBLEConnection<
            T extends CloseBLEConnectionOption = CloseBLEConnectionOption
        >(
            option: T
        ): PromisifySuccessResult<T, CloseBLEConnectionOption>
        /** [wx.closeBluetoothAdapter(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.closeBluetoothAdapter.html)
*
* 需要基础库： `2.9.2`
*
* 关闭蓝牙模块。调用该方法将断开所有已建立的连接并释放系统资源。建议在使用蓝牙流程后，与 [wx.openBluetoothAdapter](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.openBluetoothAdapter.html) 成对调用。
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.closeBluetoothAdapter({
  success (res) {
    console.log(res)
  }
})
``` */
        closeBluetoothAdapter<
            T extends CloseBluetoothAdapterOption = CloseBluetoothAdapterOption
        >(
            option?: T
        ): PromisifySuccessResult<T, CloseBluetoothAdapterOption>
        /** [wx.closeSocket(Object object)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.closeSocket.html)
*
* @warning **推荐使用 [SocketTask](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.html) 的方式去管理 webSocket 链接，每一条链路的生命周期都更加可控，同时存在多个 webSocket 的链接的情况下使用 wx 前缀的方法可能会带来一些和预期不一致的情况。**
*
* 关闭 WebSocket 连接。
*
* **示例代码**
*
* ```js
wx.connectSocket({
  url: 'test.php'
})

//注意这里有时序问题，
//如果 wx.connectSocket 还没回调 wx.onSocketOpen，而先调用 wx.closeSocket，那么就做不到关闭 WebSocket 的目的。
//必须在 WebSocket 打开期间调用 wx.closeSocket 才能关闭。
wx.onSocketOpen(function() {
  wx.closeSocket()
})

wx.onSocketClose(function(res) {
  console.log('WebSocket 已关闭！')
})
``` */
        closeSocket<T extends CloseSocketOption = CloseSocketOption>(
            option?: T
        ): PromisifySuccessResult<T, CloseSocketOption>
        /** [wx.compressImage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/image/wx.compressImage.html)
*
* 需要基础库： `3.0.1`
*
* 压缩图片接口，可选压缩质量。iOS 仅支持压缩 JPG 格式图片。
*
* **示例代码**
*
* ```js
wx.compressImage({
  src: '', // 图片路径
  quality: 80 // 压缩质量
})
``` */
        compressImage<T extends CompressImageOption = CompressImageOption>(
            option: T
        ): PromisifySuccessResult<T, CompressImageOption>
        /** [wx.createBLEConnection(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.createBLEConnection.html)
*
* 需要基础库： `2.9.2`
*
* 连接蓝牙低功耗设备。
*
* 若小程序在之前已有搜索过某个蓝牙设备，并成功建立连接，可直接传入之前搜索获取的 deviceId 直接尝试连接该设备，无需再次进行搜索操作。
*
* **注意**
*
* - 请保证尽量成对的调用 [wx.createBLEConnection](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.createBLEConnection.html) 和 [wx.closeBLEConnection](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.closeBLEConnection.html) 接口。安卓如果重复调用 [wx.createBLEConnection](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.createBLEConnection.html) 创建连接，有可能导致系统持有同一设备多个连接的实例，导致调用 `closeBLEConnection` 的时候并不能真正的断开与设备的连接。
* - 蓝牙连接随时可能断开，建议监听 [wx.onBLEConnectionStateChange](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.onBLEConnectionStateChange.html) 回调事件，当蓝牙设备断开时按需执行重连操作
* - 若对未连接的设备或已断开连接的设备调用数据读写操作的接口，会返回 10006 错误，建议进行重连操作。
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.createBLEConnection({
  deviceId,
  success (res) {
    console.log(res)
  }
})
``` */
        createBLEConnection<
            T extends CreateBLEConnectionOption = CreateBLEConnectionOption
        >(
            option: T
        ): PromisifySuccessResult<T, CreateBLEConnectionOption>
        /** [wx.createBLEPeripheralServer(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/wx.createBLEPeripheralServer.html)
         *
         * 需要基础库： `2.10.3`
         *
         * 建立本地作为蓝牙低功耗外围设备的服务端，可创建多个。 */
        createBLEPeripheralServer<
            T extends CreateBLEPeripheralServerOption = CreateBLEPeripheralServerOption
        >(
            option?: T
        ): PromisifySuccessResult<T, CreateBLEPeripheralServerOption>
        /** [wx.exitMiniProgram(Object object)](https://developers.weixin.qq.com/minigame/dev/api/navigate/wx.exitMiniProgram.html)
         *
         * 需要基础库： `2.17.3`
         *
         * 退出当前小程序 */
        exitMiniProgram<
            T extends ExitMiniProgramOption = ExitMiniProgramOption
        >(
            option?: T
        ): PromisifySuccessResult<T, ExitMiniProgramOption>
        /** [wx.exitPointerLock()](https://developers.weixin.qq.com/minigame/dev/api/render/cursor/wx.exitPointerLock.html)
         *
         * 需要基础库： `3.2.0`
         *
         * 解除锁定鼠标指针。此接口仅在 Windows、Mac 端支持。 */
        exitPointerLock(): void
        /** [wx.exitVoIPChat(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.exitVoIPChat.html)
         *
         * 需要基础库： `2.7.0`
         *
         * 退出（销毁）实时语音通话 */
        exitVoIPChat<T extends ExitVoIPChatOption = ExitVoIPChatOption>(
            option?: T
        ): PromisifySuccessResult<T, ExitVoIPChatOption>
        /** [wx.faceDetect(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ai/face/wx.faceDetect.html)
         *
         * 需要基础库： `2.18.0`
         *
         * @warning **该接口已停止维护，推荐使用 [wx.createVKSession](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/wx.createVKSession.html) 代替**
         *
         * 人脸检测，使用前需要通过 wx.initFaceDetect 进行一次初始化，推荐使用相机接口返回的帧数据。本接口不再维护，请使用 [wx.createVKSession](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/wx.createVKSession.html) 接口代替。详情参考[人脸检测指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/face.html)
         *
         * ****
         *
         * ### 特别说明
         * 若小程序人脸识别功能涉及采集、存储用户生物特征（如人脸照片或视频、身份证和手持身份证、身份证照和免冠照等），此类型服务需使用[微信原生人脸识别接口](https://developers.weixin.qq.com/community/develop/doc/000442d352c1202bd498ecb105c00d?highline=%E4%BA%BA%E8%84%B8%E6%A0%B8%E8%BA%AB)。 */
        faceDetect(option: FaceDetectOption): void
        /** [wx.getAvailableAudioSources(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.getAvailableAudioSources.html)
         *
         * 需要基础库： `2.1.0`
         *
         * 获取当前支持的音频输入源 */
        getAvailableAudioSources<
            T extends GetAvailableAudioSourcesOption = GetAvailableAudioSourcesOption
        >(
            option?: T
        ): PromisifySuccessResult<T, GetAvailableAudioSourcesOption>
        /** [wx.getBLEDeviceCharacteristics(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.getBLEDeviceCharacteristics.html)
*
* 需要基础库： `2.9.2`
*
* 获取蓝牙低功耗设备某个服务中所有特征 (characteristic)。
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.getBLEDeviceCharacteristics({
  // 这里的 deviceId 需要已经通过 wx.createBLEConnection 与对应设备建立链接
  deviceId,
  // 这里的 serviceId 需要在 wx.getBLEDeviceServices 接口中获取
  serviceId,
  success (res) {
    console.log('device getBLEDeviceCharacteristics:', res.characteristics)
  }
})
``` */
        getBLEDeviceCharacteristics<
            T extends GetBLEDeviceCharacteristicsOption = GetBLEDeviceCharacteristicsOption
        >(
            option: T
        ): PromisifySuccessResult<T, GetBLEDeviceCharacteristicsOption>
        /** [wx.getBLEDeviceRSSI(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.getBLEDeviceRSSI.html)
         *
         * 需要基础库： `2.11.0`
         *
         * 获取蓝牙低功耗设备的信号强度 (Received Signal Strength Indication, RSSI)。 */
        getBLEDeviceRSSI<
            T extends GetBLEDeviceRSSIOption = GetBLEDeviceRSSIOption
        >(
            option: T
        ): PromisifySuccessResult<T, GetBLEDeviceRSSIOption>
        /** [wx.getBLEDeviceServices(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.getBLEDeviceServices.html)
*
* 需要基础库： `2.9.2`
*
* 获取蓝牙低功耗设备所有服务 (service)。
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.getBLEDeviceServices({
  // 这里的 deviceId 需要已经通过 wx.createBLEConnection 与对应设备建立连接
  deviceId,
  success (res) {
    console.log('device services:', res.services)
  }
})
``` */
        getBLEDeviceServices<
            T extends GetBLEDeviceServicesOption = GetBLEDeviceServicesOption
        >(
            option: T
        ): PromisifySuccessResult<T, GetBLEDeviceServicesOption>
        /** [wx.getBLEMTU(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.getBLEMTU.html)
*
* 需要基础库： `2.20.1`
*
* 获取蓝牙低功耗的最大传输单元。需在 [wx.createBLEConnection](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.createBLEConnection.html) 调用成功后调用。
*
* **注意**
*
* - 小程序中 MTU 为 ATT_MTU，包含 Op-Code 和 Attribute Handle 的长度，实际可以传输的数据长度为 `ATT_MTU - 3`
* - iOS 系统中 MTU 为固定值；安卓系统中，MTU 会在系统协商成功之后发生改变，建议使用 [wx.onBLEMTUChange](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.onBLEMTUChange.html) 监听。
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.getBLEMTU({
  deviceId: '',
  writeType: 'write',
  success (res) {
    console.log(res)
  }
})
``` */
        getBLEMTU<T extends GetBLEMTUOption = GetBLEMTUOption>(
            option: T
        ): PromisifySuccessResult<T, GetBLEMTUOption>
        /** [wx.getBackgroundFetchData(object object)](https://developers.weixin.qq.com/minigame/dev/api/storage/background-fetch/wx.getBackgroundFetchData.html)
         *
         * 需要基础库： `3.0.1`
         *
         * 拉取 backgroundFetch 客户端缓存数据。
         * 当调用接口时，若当次请求未结束，会先返回本地的旧数据（之前打开小程序时请求的），如果本地没有旧数据，安卓上会返回fail，不会等待请求完成，iOS上会返回success但fetchedData为空，也不会等待请求完成。建议和 [wx.onBackgroundFetchData](https://developers.weixin.qq.com/minigame/dev/api/storage/background-fetch/wx.onBackgroundFetchData.html) 配合使用 */
        getBackgroundFetchData<
            T extends GetBackgroundFetchDataOption = GetBackgroundFetchDataOption
        >(
            option: T
        ): PromisifySuccessResult<T, GetBackgroundFetchDataOption>
        /** [wx.getBackgroundFetchToken(Object object)](https://developers.weixin.qq.com/minigame/dev/api/storage/background-fetch/wx.getBackgroundFetchToken.html)
         *
         * 需要基础库： `3.0.1`
         *
         * 获取设置过的自定义登录态。若无，则返回 fail。 */
        getBackgroundFetchToken<
            T extends GetBackgroundFetchTokenOption = GetBackgroundFetchTokenOption
        >(
            option?: T
        ): PromisifySuccessResult<T, GetBackgroundFetchTokenOption>
        /** [wx.getBatteryInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/battery/wx.getBatteryInfo.html)
         *
         * 获取设备电池信息。同步 API [wx.getBatteryInfoSync](https://developers.weixin.qq.com/minigame/dev/api/device/battery/wx.getBatteryInfoSync.html) 在 iOS 上不可用。 */
        getBatteryInfo<T extends GetBatteryInfoOption = GetBatteryInfoOption>(
            option?: T
        ): PromisifySuccessResult<T, GetBatteryInfoOption>
        /** [wx.getBeacons(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.getBeacons.html)
         *
         * 需要基础库： `2.9.2`
         *
         * 获取所有已搜索到的 Beacon 设备 */
        getBeacons<T extends GetBeaconsOption = GetBeaconsOption>(
            option?: T
        ): PromisifySuccessResult<T, GetBeaconsOption>
        /** [wx.getBluetoothAdapterState(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.getBluetoothAdapterState.html)
*
* 需要基础库： `2.9.2`
*
* 获取本机蓝牙适配器状态。
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.getBluetoothAdapterState({
  success (res) {
    console.log(res)
  }
})
``` */
        getBluetoothAdapterState<
            T extends GetBluetoothAdapterStateOption = GetBluetoothAdapterStateOption
        >(
            option?: T
        ): PromisifySuccessResult<T, GetBluetoothAdapterStateOption>
        /** [wx.getBluetoothDevices(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.getBluetoothDevices.html)
*
* 需要基础库： `2.9.2`
*
* 获取在蓝牙模块生效期间所有搜索到的蓝牙设备。包括已经和本机处于连接状态的设备。
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
*
* ```js
// ArrayBuffer转16进度字符串示例
function ab2hex(buffer) {
  var hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function(bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('');
}
wx.getBluetoothDevices({
  success: function (res) {
    console.log(res)
    if (res.devices[0]) {
      console.log(ab2hex(res.devices[0].advertisData))
    }
  }
})
```
*
* **注意**
*
* - 该接口获取到的设备列表为**蓝牙模块生效期间所有搜索到的蓝牙设备**，若在蓝牙模块使用流程结束后未及时调用 [wx.closeBluetoothAdapter](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.closeBluetoothAdapter.html) 释放资源，会存在调用该接口会返回之前的蓝牙使用流程中搜索到的蓝牙设备，可能设备已经不在用户身边，无法连接。 */
        getBluetoothDevices<
            T extends GetBluetoothDevicesOption = GetBluetoothDevicesOption
        >(
            option?: T
        ): PromisifySuccessResult<T, GetBluetoothDevicesOption>
        /** [wx.getChannelsLiveInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/channels/wx.getChannelsLiveInfo.html)
         *
         * 需要基础库： `2.15.0`
         *
         * 获取视频号直播信息
         *
         * **常见错误码说明**
         *
         * 100008  视频号需要认证
         * 40097 入参异常
         * 1416104  视频号获取到的数据为空
         * 1416100  非法的视频号id */
        getChannelsLiveInfo(option: GetChannelsLiveInfoOption): void
        /** [wx.getChannelsLiveNoticeInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/channels/wx.getChannelsLiveNoticeInfo.html)
         *
         * 需要基础库： `2.19.0`
         *
         * 获取视频号直播预告信息 */
        getChannelsLiveNoticeInfo(option: GetChannelsLiveNoticeInfoOption): void
        /** [wx.getClipboardData(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/clipboard/wx.getClipboardData.html)
*
* 需要基础库： `1.1.0`
*
* 获取系统剪贴板的内容
*
* **示例代码**
*
* ```js
wx.getClipboardData({
  success (res){
    console.log(res.data)
  }
})
``` */
        getClipboardData<
            T extends GetClipboardDataOption = GetClipboardDataOption
        >(
            option?: T
        ): PromisifySuccessResult<T, GetClipboardDataOption>
        /** [wx.getConnectedBluetoothDevices(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.getConnectedBluetoothDevices.html)
*
* 需要基础库： `2.9.2`
*
* 根据主服务 UUID 获取已连接的蓝牙设备。
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.getConnectedBluetoothDevices({
  services: ['FEE7'],
  success (res) {
    console.log(res)
  }
})
``` */
        getConnectedBluetoothDevices<
            T extends GetConnectedBluetoothDevicesOption = GetConnectedBluetoothDevicesOption
        >(
            option: T
        ): PromisifySuccessResult<T, GetConnectedBluetoothDevicesOption>
        /** [wx.getDeviceBenchmarkInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getDeviceBenchmarkInfo.html)
*
* 需要基础库： `3.4.5`
*
* 获取设备性能得分和机型档位数据
*
* **示例代码**
*
* ```js
wx.getDeviceBenchmarkInfo({
  success (res) {
    console.log(res.benchmarkLevel)
    console.log(res.modelLevel)
  }
})
``` */
        getDeviceBenchmarkInfo(option?: GetDeviceBenchmarkInfoOption): void
        /** [wx.getExtConfig(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ext/wx.getExtConfig.html)
*
* 需要基础库： `2.8.3`
*
* 获取[第三方平台](https://developers.weixin.qq.com/minigame/dev/devtools/ext.html)自定义的数据字段。
*
* **Tips**
*
* 1. 本接口暂时无法通过 [wx.canIUse](#) 判断是否兼容，开发者需要自行判断 [wx.getExtConfig](https://developers.weixin.qq.com/minigame/dev/api/ext/wx.getExtConfig.html) 是否存在来兼容
*
* ****
*
* ```js
if (wx.getExtConfig) {
  wx.getExtConfig({
    success (res) {
      console.log(res.extConfig)
    }
  })
}
``` */
        getExtConfig<T extends GetExtConfigOption = GetExtConfigOption>(
            option?: T
        ): PromisifySuccessResult<T, GetExtConfigOption>
        /** [wx.getFriendCloudStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getFriendCloudStorage.html)
         *
         * 需要基础库： `1.9.92`
         *
         * 拉取当前用户所有同玩好友的托管数据。该接口需要用户授权，且只在开放数据域下可用。需要注意，添加新微信好友后的2小时内，getFriendCloudStorage 可能获取不到该新好友的数据。 */
        getFriendCloudStorage(option: GetFriendCloudStorageOption): void
        /** [wx.getFuzzyLocation(Object object)](https://developers.weixin.qq.com/minigame/dev/api/location/wx.getFuzzyLocation.html)
*
* 需要基础库： `2.25.0`
*
* 获取当前的模糊地理位置。
*
* **示例代码**
*
*  ```js
 wx.getFuzzyLocation({
  type: 'wgs84',
  success (res) {
    const latitude = res.latitude
    const longitude = res.longitude
  }
})
 ``` */
        getFuzzyLocation(option: GetFuzzyLocationOption): void
        /** [wx.getGameClubData(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/wx.getGameClubData.html)
         *
         * 需要基础库： `2.25.4`
         *
         * 获取游戏圈数据。
         *
         * **type说明**
         *
         * | type取值 | 说明                                   | subKey  | GameClubDataByType.value |
         * | ------- | -------------------------------------- | -------- | -------- |
         * | 1   | 加入该游戏圈时间                            | 无需传入 | 秒级Unix时间戳 |
         * | 3   | 用户禁言状态                                | 无需传入  | 0：正常 1：禁言  |
         * | 4   | 当天(自然日)点赞贴子数                       | 无需传入  |  |
         * | 5   | 当天(自然日)评论贴子数                        | 无需传入  |  |
         * | 6   | 当天(自然日)发表贴子数                       | 无需传入  |  |
         * | 7   | 当天(自然日)发表视频贴子数                    | 无需传入  |  |
         * | 8   | 当天(自然日)赞官方贴子数                      | 无需传入  |  |
         * | 9   | 当天(自然日)评论官方贴子数                     | 无需传入  |  |
         * | 10   | 当天(自然日)发表到本圈子话题的贴子数           | 传入话题id，从mp-游戏圈话题管理处获取  |  |
         *
         * **encryptedData 解密后得到的 GameClubData 的结构**
         *
         * | 属性 | 类型 | 说明                                   |
         * | ------- | ------- | -------------------------------------- |
         * |  dataList   | Array\<GameClubDataByType\> | 游戏圈相关数据的对象数组           |
         *
         * **GameClubDataByType 的结构**
         *
         * | 属性 | 类型 | 说明                                   |
         * | ------- |------- |  -------------------------------------- |
         * |  dataType   | number | 与输入的 dataType 一致          |
         * |  value   | number | 不同type返回的value含义不同，见type表格说明           | */
        getGameClubData(option: GetGameClubDataOption): void
        /** [wx.getGroupCloudStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupCloudStorage.html)
         *
         * 需要基础库： `1.9.92`
         *
         * 获取群同玩成员的游戏数据。小游戏通过群分享卡片打开的情况下才可以调用。该接口需要用户授权，且只在开放数据域下可用。 */
        getGroupCloudStorage(option: GetGroupCloudStorageOption): void
        /** [wx.getGroupEnterInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/group/wx.getGroupEnterInfo.html)
*
* 需要基础库： `2.10.4`
*
* 获取微信群聊场景下的小程序启动信息。群聊场景包括群聊小程序消息卡片、群待办、群工具。可用于获取当前群的 opengid。
* ## 注意事项
*  - 基础库 v2.10.4 开始支持获取群工具小程序启动信息
*  - 基础库 v2.17.3 开始支持获取群聊小程序消息卡片、群待办小程序启动信息
*  - 基础库 v3.7.8 支持获取单聊群启动信息，获取的群(含单聊)唯一标识，可用于[聊天工具模式](https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.openChatTool.html)。
*
* **示例代码**
*
* ```js
wx.getGroupEnterInfo({
  success(res) {
    // res
    {
      errMsg: 'getGroupEnterInfo:ok',
      encryptedData: '',
      iv: ''
    }
  },
  fail() {

  }
})
```
*
* 敏感数据有两种获取方式，一是使用 [加密数据解密算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html#加密数据解密算法) 。
* 获取得到的开放数据为以下 json 结构（其中 opengid 为当前群的唯一标识）：
*
* ```json
{
 "opengid": "OPENGID",       // 多聊群下返回的群唯一标识
 "open_single_roomid": "",   // 单聊群下返回的群唯一标识
 "group_openid": "",         // 用户在当前群的唯一标识
 "chat_type": 3,             // 聊天室类型
}
```
*
* **Tips**
*
* - 如需要展示群名称，小程序可以使用[开放数据组件](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/open-data.html)
* - 小游戏可以通过 `wx.getGroupInfo` 接口获取群名称 */
        getGroupEnterInfo(option: GetGroupEnterInfoOption): void
        /** [wx.getGroupInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupInfo.html)
         *
         * 需要基础库： `2.10.1`
         *
         * 获取群信息。小游戏通过群分享卡片打开的情况下才可以调用。该接口需要用户授权，且只在开放数据域下可用。 */
        getGroupInfo(option: GetGroupInfoOption): void
        /** [wx.getInferenceEnvInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ai/inference/wx.getInferenceEnvInfo.html)
*
* 需要基础库： `2.30.1`
*
* 获取通用AI推理引擎版本。使用前可参考[AI指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/inference/tutorial.html)
*
* **示例代码**
*
* ```js
// 获取通用AI推理引擎版本
wx.getInferenceEnvInfo({
      complete: (res) => {
        console.log(res.ver)
        console.log(res.errMsg)
      },
})
``` */
        getInferenceEnvInfo(option?: GetInferenceEnvInfoOption): void
        /** [wx.getLocalIPAddress(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/network/wx.getLocalIPAddress.html)
*
* 需要基础库： `2.20.1`
*
* 获取局域网IP地址
*
* **示例代码**
*
* ```js
wx.getLocalIPAddress({
  success (res) {
    const localip = res.localip
  }
})
``` */
        getLocalIPAddress(option: GetLocalIPAddressOption): void
        /** [wx.getLocation(Object object)](https://developers.weixin.qq.com/minigame/dev/api/location/wx.getLocation.html)
*
* @deprecated 基础库版本 [3.0.1](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [wx.getFuzzyLocation](https://developers.weixin.qq.com/minigame/dev/api/location/wx.getFuzzyLocation.html) 替换
*
* 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。开启高精度定位，接口耗时会增加，可指定 highAccuracyExpireTime 作为超时时间。地图相关使用的坐标格式应为 gcj02。
*  基础库 `2.17.0` 版本起 `wx.getLocation` 增加调用频率限制，[相关公告](https://developers.weixin.qq.com/community/develop/doc/000aee91a98d206bc6dbe722b51801)。
*
* **示例代码**
*
*  ```js
 wx.getLocation({
  type: 'wgs84',
  success (res) {
    const latitude = res.latitude
    const longitude = res.longitude
    const speed = res.speed
    const accuracy = res.accuracy
  }
})
 ```
*
* **注意**
*
* - `2.17.0 起 `wx.getLocation` 增加调用频率限制，[相关公告](https://developers.weixin.qq.com/community/develop/doc/000aee91a98d206bc6dbe722b51801)
* - 工具中定位模拟使用IP定位，可能会有一定误差。且工具目前仅支持 gcj02 坐标。
* - 使用第三方服务进行逆地址解析时，请确认第三方服务默认的坐标系，正确进行坐标转换。 */
        getLocation<T extends GetLocationOption = GetLocationOption>(
            option: T
        ): PromisifySuccessResult<T, GetLocationOption>
        /** [wx.getNetworkType(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/network/wx.getNetworkType.html)
*
* 获取网络类型
*
* **示例代码**
*
* ```js
wx.getNetworkType({
  success (res) {
    const networkType = res.networkType
    const weakNet = res.weakNet
  }
})
``` */
        getNetworkType<T extends GetNetworkTypeOption = GetNetworkTypeOption>(
            option?: T
        ): PromisifySuccessResult<T, GetNetworkTypeOption>
        /** [wx.getPhoneNumber(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/wx.getPhoneNumber.html)
         *
         * 手机号快速验证，向用户申请，并在用户同意后，快速填写和验证手机 [具体说明](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/getPhoneNumber.html) */
        getPhoneNumber(option: GetPhoneNumberOption): void
        /** [wx.getPotentialFriendList(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getPotentialFriendList.html)
         *
         * 需要基础库： `2.9.0`
         *
         * 获取可能对游戏感兴趣的未注册的好友名单。每次调用最多可获得 5 个好友。该接口需要用户授权，且只在开放数据域下可用。 */
        getPotentialFriendList(option?: GetPotentialFriendListOption): void
        /** [wx.getPrivacySetting(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/privacy/wx.getPrivacySetting.html)
*
* 需要基础库： `2.32.3`
*
* 查询隐私授权情况。隐私合规开发指南详情可见[《小游戏隐私合规开发指南》](https://developers.weixin.qq.com/community/develop/doc/000aa25cf1c8a0e64310ac3ef66401?highLine=%25E9%259A%2590%25E7%25A7%2581)
*
* ****
*
* ## 具体说明：
*
* 1. 一定要调用 wx.getPrivacySetting 接口吗？
*
*   - 不是，wx.getPrivacySetting 只是一个辅助接口，可以根据实际情况选择使用。
*
* **示例代码**
*
* ```js
wx.getPrivacySetting({
  success: res => {
    console.log(res)
    // 返回结果为: res = { needAuthorization: true/false, privacyContractName: '《xxx隐私保护指引》' }
  },
  fail: () => {},
  complete: () => {}
})
``` */
        getPrivacySetting(option: GetPrivacySettingOption): void
        /** [wx.getScreenBrightness(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/screen/wx.getScreenBrightness.html)
         *
         * 需要基础库： `1.2.0`
         *
         * 获取屏幕亮度
         *
         * **说明**
         *
         * - 若安卓系统设置中开启了自动调节亮度功能，则屏幕亮度会根据光线自动调整，该接口仅能获取自动调节亮度之前的值，而非实时的亮度值。 */
        getScreenBrightness<
            T extends GetScreenBrightnessOption = GetScreenBrightnessOption
        >(
            option?: T
        ): PromisifySuccessResult<T, GetScreenBrightnessOption>
        /** [wx.getScreenRecordingState(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/screen/wx.getScreenRecordingState.html)
*
* 需要基础库： `3.1.4`
*
* 查询用户是否在录屏。
*
* **示例代码**
*
* ```js
wx.getScreenRecordingState({
  success: function (res) {
    console.log(res.state)
  },
})
``` */
        getScreenRecordingState(option?: GetScreenRecordingStateOption): void
        /** [wx.getSetting(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/wx.getSetting.html)
*
* 需要基础库： `1.2.0`
*
* 获取用户的当前设置。**返回值中只会出现小程序已经向用户请求过的[权限](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/authorize.html)**。
*
* **示例代码**
*
* ```js
wx.getSetting({
  success (res) {
    console.log(res.authSetting)
    // res.authSetting = {
    //   "scope.userInfo": true,
    //   "scope.userLocation": true
    // }
  }
})
```
*
* ```js
wx.getSetting({
  withSubscriptions: true,
  success (res) {
    console.log(res.authSetting)
    // res.authSetting = {
    //   "scope.userInfo": true,
    //   "scope.userLocation": true
    // }
    console.log(res.subscriptionsSetting)
    // res.subscriptionsSetting = {
    //   mainSwitch: true, // 订阅消息总开关
    //   itemSettings: {   // 每一项开关
    //     SYS_MSG_TYPE_INTERACTIVE: 'accept', // 小游戏系统订阅消息
    //     SYS_MSG_TYPE_RANK: 'accept'
    //     zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE: 'reject', // 普通一次性订阅消息
    //     ke_OZC_66gZxALLcsuI7ilCJSP2OJ2vWo2ooUPpkWrw: 'ban',
    //   }
    // }
  }
})
``` */
        getSetting<T extends GetSettingOption = GetSettingOption>(
            option?: T
        ): PromisifySuccessResult<T, GetSettingOption>
        /** [wx.getShareInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.getShareInfo.html)
*
* 需要基础库： `1.1.0`
*
* 获取转发详细信息（主要是获取群ID）。 从群聊内的小程序消息卡片打开小程序时，调用此接口才有效。从基础库 v2.17.3 开始，推荐用 [wx.getGroupEnterInfo](https://developers.weixin.qq.com/minigame/dev/api/open-api/group/wx.getGroupEnterInfo.html) 替代此接口。
*
* **示例代码**
*
* 敏感数据获取方式 [加密数据解密算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html#加密数据解密算法) 。
* 获取得到的开放数据为以下 json 结构（其中 openGId 为当前群的唯一标识）：
*
* ```json
{
 "openGId": "OPENGID"
}
```
*
* **Tips**
*
* - 如需要展示群名称，小程序可以使用 [开放数据组件](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/open-data.html)
* - 小游戏可以通过 [`wx.getGroupInfo`](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupInfo.html) 接口获取群名称 */
        getShareInfo<T extends GetShareInfoOption = GetShareInfoOption>(
            option: T
        ): PromisifySuccessResult<T, GetShareInfoOption>
        /** [wx.getShowSplashAdStatus(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ad/wx.getShowSplashAdStatus.html)
*
* 需要基础库： `3.7.8`
*
* 获取封面广告组件展示状态。请通过 [wx.getSystemInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemInfoSync.html) 返回对象的 SDKVersion 判断基础库版本号后再使用该 API（小游戏端要求 >= 3.7.8， 小程序端要求 >= 3.7.8）。
*
* **示例代码**
*
* ```js
// 获取封面广告展示状态
wx.getShowSplashAdStatus({
  success: res => {
    console.log('getShowSplashAdStatus res', res.status, res.code)
  },
})
``` */
        getShowSplashAdStatus(option?: GetShowSplashAdStatusOption): void
        /** [wx.getStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.getStorage.html)
*
* 从本地缓存中异步获取指定 key 的内容。
*
* **示例代码**
*
* ```js
wx.getStorage({
  key: 'key',
  success (res) {
    console.log(res.data)
  }
})
```
*
* ```js
// 开启加密存储
wx.setStorage({
  key: "key",
  data: "value",
  encrypt: true, // 若开启加密存储，setStorage 和 getStorage 需要同时声明 encrypt 的值为 true
  success() {
    wx.getStorage({
      key: "key",
      encrypt: true, // 若开启加密存储，setStorage 和 getStorage 需要同时声明 encrypt 的值为 true
      success(res) {
        console.log(res.data)
      }
    })
  }
})
``` */
        getStorage<
            T = any,
            U extends GetStorageOption<T> = GetStorageOption<T>
        >(
            option: U
        ): PromisifySuccessResult<U, GetStorageOption<T>>
        /** [wx.getStorageInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.getStorageInfo.html)
*
* 异步获取当前storage的相关信息。
*
* **示例代码**
*
* ```js
wx.getStorageInfo({
  success (res) {
    console.log(res.keys)
    console.log(res.currentSize)
    console.log(res.limitSize)
  }
})
```
*
* ```js
try {
  const res = wx.getStorageInfoSync()
  console.log(res.keys)
  console.log(res.currentSize)
  console.log(res.limitSize)
} catch (e) {
  // Do something when catch error
}
``` */
        getStorageInfo<T extends GetStorageInfoOption = GetStorageInfoOption>(
            option?: T
        ): PromisifySuccessResult<T, GetStorageInfoOption>
        /** [wx.getSystemInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemInfo.html)
*
* @deprecated 基础库版本 [2.20.1](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [wx.getSystemSetting](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemSetting.html)、[wx.getAppAuthorizeSetting](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getAppAuthorizeSetting.html)、[wx.getDeviceInfo](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getDeviceInfo.html)、[wx.getWindowInfo](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getWindowInfo.html)、[wx.getAppBaseInfo](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getAppBaseInfo.html) 替换
*
* 获取系统信息。**由于历史原因，wx.getSystemInfo 是异步的调用格式，但是是同步返回，需要异步获取系统信息请使用 [wx.getSystemInfoAsync](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemInfoAsync.html)。**
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/WkUCgXmS7mqO)
*
* ```js
wx.getSystemInfo({
  success (res) {
    console.log(res.model)
    console.log(res.pixelRatio)
    console.log(res.windowWidth)
    console.log(res.windowHeight)
    console.log(res.language)
    console.log(res.version)
    console.log(res.platform)
  }
})
```
*
* ```js
try {
  const res = wx.getSystemInfoSync()
  console.log(res.model)
  console.log(res.pixelRatio)
  console.log(res.windowWidth)
  console.log(res.windowHeight)
  console.log(res.language)
  console.log(res.version)
  console.log(res.platform)
} catch (e) {
  // Do something when catch error
}
```
*
* ****
*
* ## 注意事项
* - 当 wx.getSystemInfoSync() 接口发生错误时可能会返回空对象
* - wx.getSystemInfo 接口由于会获取系统权限，可能触发授权弹窗，请使用 [wx.getSystemSetting](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemSetting.html)、[wx.getAppAuthorizeSetting](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getAppAuthorizeSetting.html)、[wx.getDeviceInfo](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getDeviceInfo.html)、[wx.getWindowInfo](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getWindowInfo.html)、[wx.getAppBaseInfo](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getAppBaseInfo.html) 替代 */
        getSystemInfo<T extends GetSystemInfoOption = GetSystemInfoOption>(
            option?: T
        ): PromisifySuccessResult<T, GetSystemInfoOption>
        /** [wx.getSystemInfoAsync(Object object)](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemInfoAsync.html)
*
* 需要基础库： `2.25.3`
* @deprecated 基础库版本 [2.20.1](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [wx.getSystemSetting](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemSetting.html)、[wx.getAppAuthorizeSetting](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getAppAuthorizeSetting.html)、[wx.getDeviceInfo](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getDeviceInfo.html)、[wx.getWindowInfo](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getWindowInfo.html)、[wx.getAppBaseInfo](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getAppBaseInfo.html) 替换
*
* 异步获取系统信息。需要一定的微信客户端版本支持，在不支持的客户端上，会使用同步实现来返回。
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/WkUCgXmS7mqO)
*
* ```js
wx.getSystemInfoAsync({
  success (res) {
    console.log(res.model)
    console.log(res.pixelRatio)
    console.log(res.windowWidth)
    console.log(res.windowHeight)
    console.log(res.language)
    console.log(res.version)
    console.log(res.platform)
  }
})
``` */
        getSystemInfoAsync(option?: GetSystemInfoAsyncOption): void
        /** [wx.getUserCloudStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getUserCloudStorage.html)
         *
         * 需要基础库： `1.9.92`
         *
         * 获取当前用户托管数据当中对应 key 的数据。该接口只可在开放数据域下使用 */
        getUserCloudStorage(option: GetUserCloudStorageOption): void
        /** [wx.getUserCloudStorageKeys(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getUserCloudStorageKeys.html)
         *
         * 需要基础库： `2.16.1`
         *
         * 获取当前用户托管数据当中所有的 key。该接口需要用户授权，且只在开放数据域下可用。 */
        getUserCloudStorageKeys(option?: GetUserCloudStorageKeysOption): void
        /** [wx.getUserInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/wx.getUserInfo.html)
*
* 获取用户信息。详情参考 [用户信息获取](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/user-info.html)
*
* **示例代码**
*
* ```js
// 必须是在用户已经授权的情况下调用
wx.getUserInfo({
  success: function(res) {
    var userInfo = res.userInfo
    var nickName = userInfo.nickName
    var avatarUrl = userInfo.avatarUrl
    var gender = userInfo.gender //性别 0：未知、1：男、2：女
    var province = userInfo.province
    var city = userInfo.city
    var country = userInfo.country
  }
})
```
*
* 敏感数据有两种获取方式：
* 1. 使用 [加密数据解密算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html#加密数据解密算法)
* 2. 使用 [云调用直接获取开放数据](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html#云调用直接获取开放数据)
* 获取得到的开放数据为以下 json 结构：
*
* ```json
{
  "openId": "OPENID",
  "nickName": "NICKNAME",
  "gender": GENDER,
  "city": "CITY",
  "province": "PROVINCE",
  "country": "COUNTRY",
  "avatarUrl": "AVATARURL",
  "unionId": "UNIONID",
  "watermark": {
    "appid":"APPID",
    "timestamp":TIMESTAMP
  }
}
```
*
* **最佳用法**
*
* ```js
// 通过 wx.getSetting 查询用户是否已授权头像昵称信息
wx.getSetting({
  success (res){
    if (res.authSetting['scope.userInfo']) {
      // 已经授权，可以直接调用 getUserInfo 获取头像昵称
      wx.getUserInfo({
        success: function(res) {
          console.log(res.userInfo)
        }
      })
    } else {
      // 否则，先通过 wx.createUserInfoButton 接口发起授权
      let button = wx.createUserInfoButton({
        type: 'text',
        text: '获取用户信息',
        style: {
          left: 10,
          top: 76,
          width: 200,
          height: 40,
          lineHeight: 40,
          backgroundColor: '#ff0000',
          color: '#ffffff',
          textAlign: 'center',
          fontSize: 16,
          borderRadius: 4
        }
      })
      button.onTap((res) => {
        // 用户同意授权后回调，通过回调可获取用户头像昵称信息
        console.log(res)
      })
    }
  }
})
``` */
        getUserInfo<T extends GetUserInfoOption = GetUserInfoOption>(
            option: T
        ): PromisifySuccessResult<T, GetUserInfoOption>
        /** [wx.getUserInteractiveStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getUserInteractiveStorage.html)
         *
         * 需要基础库： `2.7.7`
         *
         * 获取当前用户互动型托管数据对应 key 的数据。该接口需要用户授权。 */
        getUserInteractiveStorage<
            T extends GetUserInteractiveStorageOption = GetUserInteractiveStorageOption
        >(
            option: T
        ): PromisifySuccessResult<T, GetUserInteractiveStorageOption>
        /** [wx.getWeRunData(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/werun/wx.getWeRunData.html)
*
* 需要基础库： `1.2.0`
*
* 获取用户过去三十一天微信运动步数。需要先调用 [wx.login](https://developers.weixin.qq.com/minigame/dev/api/open-api/login/wx.login.html) 接口。步数信息会在用户主动进入小程序时更新。
*
* **示例代码**
*
* ```js
wx.getWeRunData({
  success (res) {
    // 拿 encryptedData 到开发者后台解密开放数据
    const encryptedData = res.encryptedData
    // 或拿 cloudID 通过云调用直接获取开放数据
    const cloudID = res.cloudID
  }
})
```
*
* **开放数据 JSON 结构**
*
* 敏感数据有两种获取方式，一是使用 [加密数据解密算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html#加密数据解密算法) 。
* 获取得到的开放数据为以下 json 结构：
*
* ```json
{
  "stepInfoList": [
    {
      "timestamp": 1445866601,
      "step": 100
    },
    {
      "timestamp": 1445876601,
      "step": 120
    }
  ]
}
```
*
* stepInfoList 中，每一项结构如下：
*
* | 属性 | 类型 | 说明 |
* | --- | ---- | --- |
* | timestamp | number | 时间戳，表示数据对应的时间 |
* | step | number | 微信运动步数 | */
        getWeRunData<T extends GetWeRunDataOption = GetWeRunDataOption>(
            option?: T
        ): PromisifySuccessResult<T, GetWeRunDataOption>
        /** [wx.hideKeyboard(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.hideKeyboard.html)
         *
         * 隐藏键盘 */
        hideKeyboard<T extends HideKeyboardOption = HideKeyboardOption>(
            option?: T
        ): PromisifySuccessResult<T, HideKeyboardOption>
        /** [wx.hideLoading(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.hideLoading.html)
         *
         * 需要基础库： `1.1.0`
         *
         * 隐藏 loading 提示框 */
        hideLoading<T extends HideLoadingOption = HideLoadingOption>(
            option?: T
        ): PromisifySuccessResult<T, HideLoadingOption>
        /** [wx.hideShareMenu(Object object)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.hideShareMenu.html)
*
* 需要基础库： `1.1.0`
*
* 隐藏当前页面的转发按钮
*
* ****
*
* ## 注意事项
*  - "shareAppMessage"表示“发送给朋友”按钮，"shareTimeline"表示“分享到朋友圈”按钮
*  - 隐藏“发送给朋友”按钮时必须同时隐藏“分享到朋友圈”按钮，隐藏“分享到朋友圈”按钮时则允许不隐藏“发送给朋友”按钮
*
* **示例代码**
*
* ```js
wx.hideShareMenu({
  menus: ['shareAppMessage', 'shareTimeline']
})
``` */
        hideShareMenu<T extends HideShareMenuOption = HideShareMenuOption>(
            option?: T
        ): PromisifySuccessResult<T, HideShareMenuOption>
        /** [wx.hideToast(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.hideToast.html)
         *
         * 隐藏消息提示框 */
        hideToast<T extends HideToastOption = HideToastOption>(
            option?: T
        ): PromisifySuccessResult<T, HideToastOption>
        /** [wx.initFaceDetect(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ai/face/wx.initFaceDetect.html)
         *
         * 需要基础库： `2.18.0`
         *
         * @warning **该接口已停止维护，推荐使用 [wx.createVKSession](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/wx.createVKSession.html) 代替**
         *
         * 初始化人脸检测。本接口不再维护，请使用 [wx.createVKSession](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/wx.createVKSession.html) 接口代替。详情参考[人脸检测指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/face.html)
         *
         * ****
         *
         * ### 特别说明
         * 若小程序人脸识别功能涉及采集、存储用户生物特征（如人脸照片或视频、身份证和手持身份证、身份证照和免冠照等），此类型服务需使用[微信原生人脸识别接口](https://developers.weixin.qq.com/community/develop/doc/000442d352c1202bd498ecb105c00d?highline=%E4%BA%BA%E8%84%B8%E6%A0%B8%E8%BA%AB)。 */
        initFaceDetect(option?: InitFaceDetectOption): void
        /** [wx.isBluetoothDevicePaired(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.isBluetoothDevicePaired.html)
         *
         * 需要基础库： `2.20.1`
         *
         * 查询蓝牙设备是否配对，仅安卓支持。 */
        isBluetoothDevicePaired<
            T extends IsBluetoothDevicePairedOption = IsBluetoothDevicePairedOption
        >(
            option: T
        ): PromisifySuccessResult<T, IsBluetoothDevicePairedOption>
        /** [wx.joinVoIPChat(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.joinVoIPChat.html)
         *
         * 需要基础库： `2.7.0`
         *
         * 加入 (创建) 实时语音通话，更多信息可见 [实时语音指南](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/voip-chat.html)。调用前需要用户授权 `scope.record`，若房间类型为视频房间需要用户授权 `scope.camera`。 */
        joinVoIPChat<T extends JoinVoIPChatOption = JoinVoIPChatOption>(
            option: T
        ): PromisifySuccessResult<T, JoinVoIPChatOption>
        /** [wx.login(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/login/wx.login.html)
*
* 调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户在当前小程序的唯一标识（openid）、微信开放平台账号下的唯一标识（unionid，若当前小程序已绑定到微信开放平台账号）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。
*
* **示例代码**
*
* ```js
wx.login({
  success (res) {
    if (res.code) {
      //发起网络请求
      wx.request({
        url: 'https://example.com/onLogin',
        data: {
          code: res.code
        }
      })
    } else {
      console.log('登录失败！' + res.errMsg)
    }
  }
})
``` */
        login<T extends LoginOption = LoginOption>(
            option?: T
        ): PromisifySuccessResult<T, LoginOption>
        /** [wx.makeBluetoothPair(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.makeBluetoothPair.html)
         *
         * 需要基础库： `2.12.0`
         *
         * 蓝牙配对接口，仅安卓支持。
         *
         * 通常情况下（需要指定 `pin` 码或者密码时）系统会接管配对流程，直接调用 [wx.createBLEConnection](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.createBLEConnection.html) 即可。该接口只应当在开发者不想让用户手动输入 `pin` 码且真机验证确认可以正常生效情况下用。 */
        makeBluetoothPair<
            T extends MakeBluetoothPairOption = MakeBluetoothPairOption
        >(
            option: T
        ): PromisifySuccessResult<T, MakeBluetoothPairOption>
        /** [wx.modifyFriendInteractiveStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.modifyFriendInteractiveStorage.html)
*
* 需要基础库： `2.7.7`
*
* 修改好友的互动型托管数据，该接口只可在开放数据域下使用。
*
* **赠送动作的校验**
*
* 调用该接口需要上传 JSServer 函数 "checkInteractiveData"，该函数可用于执行赠送动作的校验逻辑，校验通过后返回结果表示本次赠送是否合法。只有 checkInteractiveData 返回了 `{ret: true}`，此次修改才会成功。
*
* **使用模板规则进行交互**
*
* 每次调用该接口会弹窗询问用户是否确认执行该操作，2.9.0 之后版本，需要在 game.json 中设置 `modifyFriendInteractiveStorageTemplates` 来定制交互的文案。
* `modifyFriendInteractiveStorageTemplates` 是一个模板数组，每一个模板需要有 key, action, object 参数，还有一个可选参数 ratio，详细说明见示例配置：
* ```json
{
  "modifyFriendInteractiveStorageTemplates": [
    {
      "key": "1", // 这个 key 与接口中同名参数相对应，不同的 key 对应不同的模板
      "action": "赠送", // 互动行为
      "object": "金币", // 互动物品
      "ratio": 10 // 物品比率，opNum * ratio 代表物品个数
    }
  ]
}
```
* 最后生成的文案为 "确认 ${action} ${nickname} ${object}？"，或者 "确认 ${action} ${nickname} ${object} x ${opNum * ratio}？"
*
* **使用自定义文案进行交互**
*
* 2.7.7 之后，2.9.0 之前的版本，文案通过 game.json 的 `modifyFriendInteractiveStorageConfirmWording` 字段配置。
* 配置内容可包含 nickname 变量，用 ${nickname} 表示，实际调用时会被替换成好友的昵称。示例配置：
* ```json
{
  "modifyFriendInteractiveStorageConfirmWording": "确认送给${nickname}一个体力？"
}
```
* 2.9.0 之后，在 `modifyFriendInteractiveStorageTemplates` 和 `modifyFriendInteractiveStorageConfirmWording` 都存在的情况下，会优先使用前者。 */
        modifyFriendInteractiveStorage(
            option: ModifyFriendInteractiveStorageOption
        ): void
        /** [wx.navigateBackMiniProgram(Object object)](https://developers.weixin.qq.com/minigame/dev/api/navigate/wx.navigateBackMiniProgram.html)
*
* 需要基础库： `3.5.6`
*
* 返回到上一个小程序。只有在当前小程序是被其他小程序打开时可以调用成功。
*
* 注意：**微信客户端 iOS 6.5.9，Android 6.5.10 及以上版本支持**
*
* **示例代码**
*
* ```js
wx.navigateBackMiniProgram({
  extraData: {
    foo: 'bar'
  },
  success(res) {
    // 返回成功
  }
})
``` */
        navigateBackMiniProgram<
            T extends NavigateBackMiniProgramOption = NavigateBackMiniProgramOption
        >(
            option: T
        ): PromisifySuccessResult<T, NavigateBackMiniProgramOption>
        /** [wx.navigateToMiniProgram(Object object)](https://developers.weixin.qq.com/minigame/dev/api/navigate/wx.navigateToMiniProgram.html)
*
* 需要基础库： `2.2.0`
*
* 打开另一个小程序
*
* **使用限制**
*
*  ##### 需要用户触发跳转
*  从 2.3.0 版本开始，若用户未点击小程序页面任意位置，则开发者将无法调用此接口自动跳转至其他小程序。
*  ##### 需要用户确认跳转
*  从 2.3.0 版本开始，在跳转至其他小程序前，将统一增加弹窗，询问是否跳转，用户确认后才可以跳转其他小程序。如果用户点击取消，则回调 `fail cancel`。
*  ##### 无需声明跳转名单，不限跳转数量（众测中）
* 1. 从2020年4月24日起，使用跳转其他小程序功能将无需在全局配置中声明跳转名单，调用此接口时将不再校验所跳转的 AppID 是否在 navigateToMiniProgramAppIdList 中。
* 2. 从2020年4月24日起，跳转其他小程序将不再受数量限制，使用此功能时请注意遵守运营规范。
*
* **运营规范**
*
* 平台将坚决打击小程序盒子等互推行为，使用此功能时请严格遵守[《微信小程序平台运营规范》](https://developers.weixin.qq.com/miniprogram/product/#_5-10-%E4%BA%92%E6%8E%A8%E8%A1%8C%E4%B8%BA)，若发现小程序违反运营规范将被下架处理。
*
* **关于调试**
*
* - 在开发者工具上调用此 API 并不会真实的跳转到另外的小程序，但是开发者工具会校验本次调用跳转是否成功。[详情](https://developers.weixin.qq.com/miniprogram/dev/devtools/different.html#跳转小程序调试支持)
* - 开发者工具上支持被跳转的小程序处理接收参数的调试。[详情](https://developers.weixin.qq.com/miniprogram/dev/devtools/different.html#跳转小程序调试支持)
*
* **示例代码**
*
* ```js
wx.navigateToMiniProgram({
  appId: '',
  path: 'page/index/index?id=123',
  extraData: {
    foo: 'bar'
  },
  envVersion: 'develop',
  success(res) {
    // 打开成功
  }
})
``` */
        navigateToMiniProgram<
            T extends NavigateToMiniProgramOption = NavigateToMiniProgramOption
        >(
            option: T
        ): PromisifySuccessResult<T, NavigateToMiniProgramOption>
        /** [wx.notifyBLECharacteristicValueChange(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.notifyBLECharacteristicValueChange.html)
*
* 需要基础库： `2.9.2`
*
* 启用蓝牙低功耗设备特征值变化时的 notify 功能，订阅特征。注意：必须设备的特征支持 notify 或者 indicate 才可以成功调用。
*
* 另外，必须先启用 [wx.notifyBLECharacteristicValueChange](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.notifyBLECharacteristicValueChange.html) 才能监听到设备 `characteristicValueChange` 事件
*
* **注意**
*
* - 订阅操作成功后需要设备主动更新特征的 value，才会触发 [wx.onBLECharacteristicValueChange](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.onBLECharacteristicValueChange.html) 回调。
* - 安卓平台上，在本接口调用成功后立即调用 [wx.writeBLECharacteristicValue](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.writeBLECharacteristicValue.html) 接口，在部分机型上会发生 10008 系统错误
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.notifyBLECharacteristicValueChange({
  state: true, // 启用 notify 功能
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  deviceId,
  // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
  serviceId,
  // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
  characteristicId,
  success (res) {
    console.log('notifyBLECharacteristicValueChange success', res.errMsg)
  }
})
``` */
        notifyBLECharacteristicValueChange<
            T extends NotifyBLECharacteristicValueChangeOption = NotifyBLECharacteristicValueChangeOption
        >(
            option: T
        ): PromisifySuccessResult<T, NotifyBLECharacteristicValueChangeOption>
        /** [wx.offAccelerometerChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/accelerometer/wx.offAccelerometerChange.html)
*
* 需要基础库： `2.9.3`
*
* 移除加速度数据事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onAccelerometerChange(listener)
wx.offAccelerometerChange(listener) // 需传入与监听时同一个的函数对象
``` */
        offAccelerometerChange(
            /** onAccelerometerChange 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffAccelerometerChangeCallback
        ): void
        /** [wx.offAddToFavorites()](https://developers.weixin.qq.com/minigame/dev/api/share/wx.offAddToFavorites.html)
         *
         * 需要基础库： `2.10.3`
         *
         * 移除用户点击菜单「收藏」按钮时触发的事件的全部监听函数 */
        offAddToFavorites(): void
        /** [wx.offAudioInterruptionBegin(function listener)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.offAudioInterruptionBegin.html)
*
* 需要基础库： `1.8.0`
*
* 移除音频因为受到系统占用而被中断开始事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onAudioInterruptionBegin(listener)
wx.offAudioInterruptionBegin(listener) // 需传入与监听时同一个的函数对象
``` */
        offAudioInterruptionBegin(
            /** onAudioInterruptionBegin 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffAudioInterruptionBeginCallback
        ): void
        /** [wx.offAudioInterruptionEnd(function listener)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.offAudioInterruptionEnd.html)
*
* 需要基础库： `1.8.0`
*
* 移除音频中断结束事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onAudioInterruptionEnd(listener)
wx.offAudioInterruptionEnd(listener) // 需传入与监听时同一个的函数对象
``` */
        offAudioInterruptionEnd(
            /** onAudioInterruptionEnd 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffAudioInterruptionEndCallback
        ): void
        /** [wx.offBLECharacteristicValueChange()](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.offBLECharacteristicValueChange.html)
*
* 需要基础库： `2.9.2`
*
* 移除蓝牙低功耗设备的特征值变化事件的全部监听函数
*
* **示例代码**
*
* ```js
wx.offBLECharacteristicValueChange()
``` */
        offBLECharacteristicValueChange(): void
        /** [wx.offBLEConnectionStateChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.offBLEConnectionStateChange.html)
*
* 需要基础库： `2.9.2`
*
* 移除蓝牙低功耗连接状态改变事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onBLEConnectionStateChange(listener)
wx.offBLEConnectionStateChange(listener) // 需传入与监听时同一个的函数对象
``` */
        offBLEConnectionStateChange(
            /** onBLEConnectionStateChange 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffBLEConnectionStateChangeCallback
        ): void
        /** [wx.offBLEMTUChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.offBLEMTUChange.html)
*
* 需要基础库： `2.20.1`
*
* 移除蓝牙低功耗的最大传输单元变化事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onBLEMTUChange(listener)
wx.offBLEMTUChange(listener) // 需传入与监听时同一个的函数对象
``` */
        offBLEMTUChange(
            /** onBLEMTUChange 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffBLEMTUChangeCallback
        ): void
        /** [wx.offBLEPeripheralConnectionStateChanged(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/wx.offBLEPeripheralConnectionStateChanged.html)
*
* 需要基础库： `2.10.3`
*
* 移除当前外围设备被连接或断开连接事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onBLEPeripheralConnectionStateChanged(listener)
wx.offBLEPeripheralConnectionStateChanged(listener) // 需传入与监听时同一个的函数对象
``` */
        offBLEPeripheralConnectionStateChanged(
            /** onBLEPeripheralConnectionStateChanged 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffBLEPeripheralConnectionStateChangedCallback
        ): void
        /** [wx.offBeaconServiceChange()](https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.offBeaconServiceChange.html)
*
* 需要基础库： `2.9.2`
*
* 移除 Beacon 服务状态变化事件的全部监听函数
*
* **示例代码**
*
* ```js
wx.offBeaconServiceChange()
``` */
        offBeaconServiceChange(): void
        /** [wx.offBeaconUpdate()](https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.offBeaconUpdate.html)
*
* 需要基础库： `2.9.2`
*
* 移除 Beacon 设备更新事件的全部监听函数
*
* **示例代码**
*
* ```js
wx.offBeaconUpdate()
``` */
        offBeaconUpdate(): void
        /** [wx.offBluetoothAdapterStateChange()](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.offBluetoothAdapterStateChange.html)
*
* 需要基础库： `2.9.2`
*
* 移除蓝牙适配器状态变化事件的全部监听函数
*
* **示例代码**
*
* ```js
wx.offBluetoothAdapterStateChange()
``` */
        offBluetoothAdapterStateChange(): void
        /** [wx.offBluetoothDeviceFound()](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.offBluetoothDeviceFound.html)
*
* 需要基础库： `2.9.2`
*
* 移除搜索到新设备的事件的全部监听函数
*
* **示例代码**
*
* ```js
wx.offBluetoothDeviceFound()
``` */
        offBluetoothDeviceFound(): void
        /** [wx.offCompassChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/compass/wx.offCompassChange.html)
*
* 需要基础库： `2.9.3`
*
* 移除罗盘数据变化事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onCompassChange(listener)
wx.offCompassChange(listener) // 需传入与监听时同一个的函数对象
``` */
        offCompassChange(
            /** onCompassChange 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffCompassChangeCallback
        ): void
        /** [wx.offCopyUrl()](https://developers.weixin.qq.com/minigame/dev/api/share/wx.offCopyUrl.html)
         *
         * 需要基础库： `2.14.3`
         *
         * 移除用户点击右上角菜单的「复制链接」按钮时触发的事件的全部监听函数 */
        offCopyUrl(): void
        /** [wx.offDeviceMotionChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/motion/wx.offDeviceMotionChange.html)
*
* 需要基础库： `2.9.3`
*
* 移除设备方向变化事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onDeviceMotionChange(listener)
wx.offDeviceMotionChange(listener) // 需传入与监听时同一个的函数对象
``` */
        offDeviceMotionChange(
            /** onDeviceMotionChange 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffDeviceMotionChangeCallback
        ): void
        /** [wx.offDeviceOrientationChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/orientation/wx.offDeviceOrientationChange.html)
*
* 需要基础库： `2.1.0`
*
* 移除屏幕转向切换事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onDeviceOrientationChange(listener)
wx.offDeviceOrientationChange(listener) // 需传入与监听时同一个的函数对象
``` */
        offDeviceOrientationChange(
            /** onDeviceOrientationChange 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffDeviceOrientationChangeCallback
        ): void
        /** [wx.offError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.offError.html)
*
* 移除全局错误事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onError(listener)
wx.offError(listener) // 需传入与监听时同一个的函数对象
``` */
        offError(
            /** onError 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: WxOffErrorCallback
        ): void
        /** [wx.offGyroscopeChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/gyroscope/wx.offGyroscopeChange.html)
*
* 需要基础库： `2.9.3`
*
* 移除陀螺仪数据变化事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onGyroscopeChange(listener)
wx.offGyroscopeChange(listener) // 需传入与监听时同一个的函数对象
``` */
        offGyroscopeChange(
            /** onGyroscopeChange 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffGyroscopeChangeCallback
        ): void
        /** [wx.offHandoff()](https://developers.weixin.qq.com/minigame/dev/api/share/wx.offHandoff.html)
         *
         * 需要基础库： `2.14.4`
         *
         * 移除用户点击菜单「在电脑上打开」按钮时触发的事件的全部监听函数 */
        offHandoff(): void
        /** [wx.offHide(function listener)](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.offHide.html)
*
* 移除小游戏隐藏到后台事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onHide(listener)
wx.offHide(listener) // 需传入与监听时同一个的函数对象
``` */
        offHide(
            /** onHide 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffHideCallback
        ): void
        /** [wx.offInteractiveStorageModified(function callback)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.offInteractiveStorageModified.html)
         *
         * 需要基础库： `2.14.4`
         *
         * 取消监听成功修改好友的互动型托管数据事件，该接口在游戏主域使用 */
        offInteractiveStorageModified(
            /** 事件发生的回调函数，留空则清除所有回调 */
            callback?: (...args: any[]) => any
        ): void
        /** [wx.offKeyDown(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.offKeyDown.html)
*
* 需要基础库： `2.10.1`
*
* 移除键盘按键按下事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onKeyDown(listener)
wx.offKeyDown(listener) // 需传入与监听时同一个的函数对象
``` */
        offKeyDown(
            /** onKeyDown 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffKeyDownCallback
        ): void
        /** [wx.offKeyUp(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.offKeyUp.html)
*
* 需要基础库： `2.10.1`
*
* 移除键盘按键弹起事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onKeyUp(listener)
wx.offKeyUp(listener) // 需传入与监听时同一个的函数对象
``` */
        offKeyUp(
            /** onKeyUp 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffKeyUpCallback
        ): void
        /** [wx.offKeyboardComplete(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.offKeyboardComplete.html)
*
* 移除键盘收起的事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onKeyboardComplete(listener)
wx.offKeyboardComplete(listener) // 需传入与监听时同一个的函数对象
``` */
        offKeyboardComplete(
            /** onKeyboardComplete 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffKeyboardCompleteCallback
        ): void
        /** [wx.offKeyboardConfirm(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.offKeyboardConfirm.html)
*
* 移除用户点击键盘 Confirm 按钮时的事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onKeyboardConfirm(listener)
wx.offKeyboardConfirm(listener) // 需传入与监听时同一个的函数对象
``` */
        offKeyboardConfirm(
            /** onKeyboardConfirm 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffKeyboardConfirmCallback
        ): void
        /** [wx.offKeyboardHeightChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.offKeyboardHeightChange.html)
*
* 需要基础库： `2.21.3`
*
* 移除键盘高度变化事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onKeyboardHeightChange(listener)
wx.offKeyboardHeightChange(listener) // 需传入与监听时同一个的函数对象
``` */
        offKeyboardHeightChange(
            /** onKeyboardHeightChange 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffKeyboardHeightChangeCallback
        ): void
        /** [wx.offKeyboardInput(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.offKeyboardInput.html)
*
* 移除键盘输入事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onKeyboardInput(listener)
wx.offKeyboardInput(listener) // 需传入与监听时同一个的函数对象
``` */
        offKeyboardInput(
            /** onKeyboardInput 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffKeyboardInputCallback
        ): void
        /** [wx.offMemoryWarning(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/memory/wx.offMemoryWarning.html)
*
* 需要基础库： `2.9.0`
*
* 移除内存不足告警事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onMemoryWarning(listener)
wx.offMemoryWarning(listener) // 需传入与监听时同一个的函数对象
``` */
        offMemoryWarning(
            /** onMemoryWarning 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffMemoryWarningCallback
        ): void
        /** [wx.offMouseDown(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/mouse-event/wx.offMouseDown.html)
*
* 移除鼠标按键按下事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onMouseDown(listener)
wx.offMouseDown(listener) // 需传入与监听时同一个的函数对象
``` */
        offMouseDown(
            /** onMouseDown 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffMouseDownCallback
        ): void
        /** [wx.offMouseMove(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/mouse-event/wx.offMouseMove.html)
*
* 移除鼠标移动事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onMouseMove(listener)
wx.offMouseMove(listener) // 需传入与监听时同一个的函数对象
``` */
        offMouseMove(
            /** onMouseMove 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffMouseMoveCallback
        ): void
        /** [wx.offMouseUp(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/mouse-event/wx.offMouseUp.html)
*
* 移除鼠标按键弹起事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onMouseUp(listener)
wx.offMouseUp(listener) // 需传入与监听时同一个的函数对象
``` */
        offMouseUp(
            /** onMouseUp 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffMouseUpCallback
        ): void
        /** [wx.offNetworkStatusChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/network/wx.offNetworkStatusChange.html)
*
* 需要基础库： `2.9.3`
*
* 移除网络状态变化事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onNetworkStatusChange(listener)
wx.offNetworkStatusChange(listener) // 需传入与监听时同一个的函数对象
``` */
        offNetworkStatusChange(
            /** onNetworkStatusChange 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffNetworkStatusChangeCallback
        ): void
        /** [wx.offNetworkWeakChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/network/wx.offNetworkWeakChange.html)
*
* 需要基础库： `2.21.0`
*
* 移除弱网状态变化事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onNetworkWeakChange(listener)
wx.offNetworkWeakChange(listener) // 需传入与监听时同一个的函数对象
``` */
        offNetworkWeakChange(
            /** onNetworkWeakChange 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffNetworkWeakChangeCallback
        ): void
        /** [wx.offScreenRecordingStateChanged(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/screen/wx.offScreenRecordingStateChanged.html)
*
* 需要基础库： `3.1.4`
*
* 移除用户录屏事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onScreenRecordingStateChanged(listener)
wx.offScreenRecordingStateChanged(listener) // 需传入与监听时同一个的函数对象
``` */
        offScreenRecordingStateChanged(
            /** onScreenRecordingStateChanged 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffScreenRecordingStateChangedCallback
        ): void
        /** [wx.offShareAppMessage(function listener)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.offShareAppMessage.html)
*
* 移除用户点击右上角菜单的「转发」按钮时触发的事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onShareAppMessage(listener)
wx.offShareAppMessage(listener) // 需传入与监听时同一个的函数对象
``` */
        offShareAppMessage(
            /** onShareAppMessage 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffShareAppMessageCallback
        ): void
        /** [wx.offShareMessageToFriend(function listener)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.offShareMessageToFriend.html)
*
* 需要基础库： `2.9.4`
*
* 移除主域接收`wx.shareMessageToFriend`接口的成功失败通知事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onShareMessageToFriend(listener)
wx.offShareMessageToFriend(listener) // 需传入与监听时同一个的函数对象
``` */
        offShareMessageToFriend(
            /** onShareMessageToFriend 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffShareMessageToFriendCallback
        ): void
        /** [wx.offShareTimeline(function listener)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.offShareTimeline.html)
*
* 需要基础库： `2.11.3`
*
* 移除用户点击右上角菜单的「分享到朋友圈」按钮时触发的事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onShareTimeline(listener)
wx.offShareTimeline(listener) // 需传入与监听时同一个的函数对象
``` */
        offShareTimeline(
            /** onShareTimeline 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffShareTimelineCallback
        ): void
        /** [wx.offShow(function listener)](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.offShow.html)
*
* 移除小游戏回到前台的事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onShow(listener)
wx.offShow(listener) // 需传入与监听时同一个的函数对象
``` */
        offShow(
            /** onShow 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffShowCallback
        ): void
        /** [wx.offTouchCancel(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.offTouchCancel.html)
*
* 移除触点失效事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onTouchCancel(listener)
wx.offTouchCancel(listener) // 需传入与监听时同一个的函数对象
``` */
        offTouchCancel(
            /** onTouchCancel 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffTouchCancelCallback
        ): void
        /** [wx.offTouchEnd(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.offTouchEnd.html)
*
* 移除触摸结束事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onTouchEnd(listener)
wx.offTouchEnd(listener) // 需传入与监听时同一个的函数对象
``` */
        offTouchEnd(
            /** onTouchEnd 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffTouchEndCallback
        ): void
        /** [wx.offTouchMove(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.offTouchMove.html)
*
* 移除触点移动事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onTouchMove(listener)
wx.offTouchMove(listener) // 需传入与监听时同一个的函数对象
``` */
        offTouchMove(
            /** onTouchMove 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffTouchMoveCallback
        ): void
        /** [wx.offTouchStart(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.offTouchStart.html)
*
* 移除开始触摸事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onTouchStart(listener)
wx.offTouchStart(listener) // 需传入与监听时同一个的函数对象
``` */
        offTouchStart(
            /** onTouchStart 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffTouchStartCallback
        ): void
        /** [wx.offUnhandledRejection(function listener)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.offUnhandledRejection.html)
*
* 需要基础库： `2.10.0`
*
* 移除未处理的 Promise 拒绝事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onUnhandledRejection(listener)
wx.offUnhandledRejection(listener) // 需传入与监听时同一个的函数对象
``` */
        offUnhandledRejection(
            /** onUnhandledRejection 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffUnhandledRejectionCallback
        ): void
        /** [wx.offUserCaptureScreen(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/screen/wx.offUserCaptureScreen.html)
         *
         * 需要基础库： `2.9.3`
         *
         * 用户主动截屏事件。取消事件监听。 */
        offUserCaptureScreen(
            /** 用户主动截屏事件的回调函数 */
            callback?: (...args: any[]) => any
        ): void
        /** [wx.offVoIPChatInterrupted(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.offVoIPChatInterrupted.html)
*
* 需要基础库： `2.9.0`
*
* 移除被动断开实时语音通话事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onVoIPChatInterrupted(listener)
wx.offVoIPChatInterrupted(listener) // 需传入与监听时同一个的函数对象
``` */
        offVoIPChatInterrupted(
            /** onVoIPChatInterrupted 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffVoIPChatInterruptedCallback
        ): void
        /** [wx.offVoIPChatMembersChanged(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.offVoIPChatMembersChanged.html)
*
* 需要基础库： `2.9.0`
*
* 移除实时语音通话成员在线状态变化事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onVoIPChatMembersChanged(listener)
wx.offVoIPChatMembersChanged(listener) // 需传入与监听时同一个的函数对象
``` */
        offVoIPChatMembersChanged(
            /** onVoIPChatMembersChanged 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffVoIPChatMembersChangedCallback
        ): void
        /** [wx.offVoIPChatSpeakersChanged(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.offVoIPChatSpeakersChanged.html)
*
* 需要基础库： `2.9.0`
*
* 移除实时语音通话成员通话状态变化事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onVoIPChatSpeakersChanged(listener)
wx.offVoIPChatSpeakersChanged(listener) // 需传入与监听时同一个的函数对象
``` */
        offVoIPChatSpeakersChanged(
            /** onVoIPChatSpeakersChanged 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffVoIPChatSpeakersChangedCallback
        ): void
        /** [wx.offVoIPChatStateChanged(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.offVoIPChatStateChanged.html)
*
* 需要基础库： `2.16.0`
*
* 移除房间状态变化事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onVoIPChatStateChanged(listener)
wx.offVoIPChatStateChanged(listener) // 需传入与监听时同一个的函数对象
``` */
        offVoIPChatStateChanged(
            /** onVoIPChatStateChanged 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffVoIPChatStateChangedCallback
        ): void
        /** [wx.offWheel(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/wheel-event/wx.offWheel.html)
*
* 移除鼠标滚轮事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onWheel(listener)
wx.offWheel(listener) // 需传入与监听时同一个的函数对象
``` */
        offWheel(
            /** onWheel 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffWheelCallback
        ): void
        /** [wx.offWindowResize(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ui/window/wx.offWindowResize.html)
*
* 移除窗口尺寸变化事件的监听函数
*
* **示例代码**
*
* ```js
const listener = function (res) { console.log(res) }

wx.onWindowResize(listener)
wx.offWindowResize(listener) // 需传入与监听时同一个的函数对象
``` */
        offWindowResize(
            /** onWindowResize 传入的监听函数。不传此参数则移除所有监听函数。 */
            listener?: OffWindowResizeCallback
        ): void
        /** [wx.onAccelerometerChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/accelerometer/wx.onAccelerometerChange.html)
*
* 监听加速度数据事件。频率根据 [wx.startAccelerometer()](https://developers.weixin.qq.com/minigame/dev/api/device/accelerometer/wx.startAccelerometer.html) 的 interval 参数, 接口调用后会自动开始监听。
*
* **示例代码**
*
* ```js
wx.onAccelerometerChange(callback)
``` */
        onAccelerometerChange(
            /** 加速度数据事件的监听函数 */
            listener: OnAccelerometerChangeCallback
        ): void
        /** [wx.onAddToFavorites(function listener)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.onAddToFavorites.html)
         *
         * 需要基础库： `2.10.3`
         *
         * 监听用户点击菜单「收藏」按钮时触发的事件（安卓7.0.15起支持，iOS 暂不支持） */
        onAddToFavorites(
            /** 用户点击菜单「收藏」按钮时触发的事件的监听函数 */
            listener: OnAddToFavoritesCallback
        ): void
        /** [wx.onAudioInterruptionBegin(function listener)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.onAudioInterruptionBegin.html)
         *
         * 需要基础库： `1.8.0`
         *
         * 监听音频因为受到系统占用而被中断开始事件。以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天、有声广告开始播放、实名认证页面弹出等。此事件触发后，小程序内所有音频会暂停。 */
        onAudioInterruptionBegin(
            /** 音频因为受到系统占用而被中断开始事件的监听函数 */
            listener: OnAudioInterruptionBeginCallback
        ): void
        /** [wx.onAudioInterruptionEnd(function listener)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.onAudioInterruptionEnd.html)
         *
         * 需要基础库： `1.8.0`
         *
         * 监听音频中断结束事件。在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功 */
        onAudioInterruptionEnd(
            /** 音频中断结束事件的监听函数 */
            listener: OnAudioInterruptionEndCallback
        ): void
        /** [wx.onBLECharacteristicValueChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.onBLECharacteristicValueChange.html)
*
* 需要基础库： `2.9.2`
*
* 监听蓝牙低功耗设备的特征值变化事件。必须先调用 [wx.notifyBLECharacteristicValueChange](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.notifyBLECharacteristicValueChange.html) 接口才能接收到设备推送的 notification。
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
*
* ```js
// ArrayBuffer转16进制字符串示例
function ab2hex(buffer) {
  let hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function(bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('');
}
wx.onBLECharacteristicValueChange(function(res) {
  console.log(`characteristic ${res.characteristicId} has changed, now is ${res.value}`)
  console.log(ab2hex(res.value))
})
``` */
        onBLECharacteristicValueChange(
            /** 蓝牙低功耗设备的特征值变化事件的监听函数 */
            listener: OnBLECharacteristicValueChangeCallback
        ): void
        /** [wx.onBLEConnectionStateChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.onBLEConnectionStateChange.html)
*
* 需要基础库： `2.9.2`
*
* 监听蓝牙低功耗连接状态改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.onBLEConnectionStateChange(function(res) {
  // 该方法回调中可以用于处理连接意外断开等异常情况
  console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)
})
``` */
        onBLEConnectionStateChange(
            /** 蓝牙低功耗连接状态改变事件的监听函数 */
            listener: OnBLEConnectionStateChangeCallback
        ): void
        /** [wx.onBLEMTUChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.onBLEMTUChange.html)
*
* 需要基础库： `2.20.1`
*
* 监听蓝牙低功耗的最大传输单元变化事件（仅安卓触发）。
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.onBLEMTUChange(function (res) {
  console.log('bluetooth mtu is', res.mtu)
})
``` */
        onBLEMTUChange(
            /** 蓝牙低功耗的最大传输单元变化事件的监听函数 */
            listener: OnBLEMTUChangeCallback
        ): void
        /** [wx.onBLEPeripheralConnectionStateChanged(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/wx.onBLEPeripheralConnectionStateChanged.html)
         *
         * 需要基础库： `2.10.3`
         *
         * 监听当前外围设备被连接或断开连接事件 */
        onBLEPeripheralConnectionStateChanged(
            /** 当前外围设备被连接或断开连接事件的监听函数 */
            listener: OnBLEPeripheralConnectionStateChangedCallback
        ): void
        /** [wx.onBackgroundFetchData(function listener)](https://developers.weixin.qq.com/minigame/dev/api/storage/background-fetch/wx.onBackgroundFetchData.html)
         *
         * 需要基础库： `3.0.1`
         *
         * 监听收到 backgroundFetch 数据事件。如果监听时请求已经完成，则事件不会触发。建议和 [wx.getBackgroundFetchData](https://developers.weixin.qq.com/minigame/dev/api/storage/background-fetch/wx.getBackgroundFetchData.html) 配合使用 */
        onBackgroundFetchData(
            /** 收到 backgroundFetch 数据事件的监听函数 */
            listener: OnBackgroundFetchDataCallback
        ): void
        /** [wx.onBeaconServiceChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.onBeaconServiceChange.html)
*
* 需要基础库： `2.9.2`
*
* 监听 Beacon 服务状态变化事件，仅能注册一个监听
*
* **示例代码**
*
* ```js
wx.onBeaconServiceChange(res => {
   console.log(res.available, res.discovering)
})
``` */
        onBeaconServiceChange(
            /** Beacon 服务状态变化事件的监听函数 */
            listener: OnBeaconServiceChangeCallback
        ): void
        /** [wx.onBeaconUpdate(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.onBeaconUpdate.html)
*
* 需要基础库： `2.9.2`
*
* 监听 Beacon 设备更新事件，仅能注册一个监听
*
* **示例代码**
*
* ```js
wx.onBeaconUpdate(res => {
   console.log(res.beacons)
})
``` */
        onBeaconUpdate(
            /** Beacon 设备更新事件的监听函数 */
            listener: OnBeaconUpdateCallback
        ): void
        /** [wx.onBluetoothAdapterStateChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.onBluetoothAdapterStateChange.html)
*
* 需要基础库： `2.9.2`
*
* 监听蓝牙适配器状态变化事件
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.onBluetoothAdapterStateChange(function (res) {
  console.log('adapterState changed, now is', res)
})
``` */
        onBluetoothAdapterStateChange(
            /** 蓝牙适配器状态变化事件的监听函数 */
            listener: OnBluetoothAdapterStateChangeCallback
        ): void
        /** [wx.onBluetoothDeviceFound(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.onBluetoothDeviceFound.html)
*
* 需要基础库： `2.9.2`
*
* 监听搜索到新设备的事件
*
* **注意**
*
* - 若在 [wx.onBluetoothDeviceFound](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.onBluetoothDeviceFound.html) 回调了某个设备，则此设备会添加到 [wx.getBluetoothDevices](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.getBluetoothDevices.html) 接口获取到的数组中。
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
*
* ```js
// ArrayBuffer转16进度字符串示例
function ab2hex(buffer) {
  var hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function(bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('');
}
wx.onBluetoothDeviceFound(function(res) {
  var devices = res.devices;
  console.log('new device list has founded')
  console.dir(devices)
  console.log(ab2hex(devices[0].advertisData))
})
```
*
* **注意**
*
* - 蓝牙设备在被搜索到时，系统返回的 `name` 字段一般为广播包中的 `LocalName` 字段中的设备名称，而如果与蓝牙设备建立连接，系统返回的 `name` 字段会改为从蓝牙设备上获取到的 `GattName`。若需要动态改变设备名称并展示，建议使用 `localName` 字段。
* - 安卓下部分机型需要有位置权限才能搜索到设备，需留意是否开启了位置权限 */
        onBluetoothDeviceFound(
            /** 搜索到新设备的事件的监听函数 */
            listener: OnBluetoothDeviceFoundCallback
        ): void
        /** [wx.onCompassChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/compass/wx.onCompassChange.html)
         *
         * 监听罗盘数据变化事件。频率：5 次/秒，接口调用后会自动开始监听，可使用 wx.stopCompass 停止监听。
         *
         * **accuracy 在 iOS/Android 的差异**
         *
         * 由于平台差异，accuracy 在 iOS/Android 的值不同。
         *
         * - iOS：accuracy 是一个 number 类型的值，表示相对于磁北极的偏差。0 表示设备指向磁北，90 表示指向东，180 表示指向南，依此类推。
         * - Android：accuracy 是一个 string 类型的枚举值。
         *
         * | 值              | 说明                                                                                   |
         * | --------------- | -------------------------------------------------------------------------------------- |
         * | high            | 高精度                                                                                 |
         * | medium          | 中等精度                                                                               |
         * | low             | 低精度                                                                                 |
         * | no-contact      | 不可信，传感器失去连接                                                                 |
         * | unreliable      | 不可信，原因未知                                                                       |
         * | unknow ${value} | 未知的精度枚举值，即该 Android 系统此时返回的表示精度的 value 不是一个标准的精度枚举值 | */
        onCompassChange(
            /** 罗盘数据变化事件的监听函数 */
            listener: OnCompassChangeCallback
        ): void
        /** [wx.onCopyUrl(function listener)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.onCopyUrl.html)
         *
         * 需要基础库： `2.14.3`
         *
         * 监听用户点击右上角菜单的「复制链接」按钮时触发的事件。本接口为 Beta 版本，暂只在 Android 平台支持。 */
        onCopyUrl(
            /** 用户点击右上角菜单的「复制链接」按钮时触发的事件的监听函数 */
            listener: OnCopyUrlCallback
        ): void
        /** [wx.onDeviceMotionChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/motion/wx.onDeviceMotionChange.html)
         *
         * 需要基础库： `2.3.0`
         *
         * 监听设备方向变化事件。频率根据 [wx.startDeviceMotionListening()](https://developers.weixin.qq.com/minigame/dev/api/device/motion/wx.startDeviceMotionListening.html) 的 interval 参数。可以使用 [wx.stopDeviceMotionListening()](https://developers.weixin.qq.com/minigame/dev/api/device/motion/wx.stopDeviceMotionListening.html) 停止监听。 */
        onDeviceMotionChange(
            /** 设备方向变化事件的监听函数 */
            listener: OnDeviceMotionChangeCallback
        ): void
        /** [wx.onDeviceOrientationChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/orientation/wx.onDeviceOrientationChange.html)
         *
         * 需要基础库： `2.1.0`
         *
         * 监听屏幕转向切换事件
         *
         * ****
         *
         * ## 注意事项
         * - 在基础库 v2.26.0 之前，wx.onDeviceOrientationChange 只监听左横屏和右横屏之间切换的事件，且仅在 game.json 中配置 deviceOrientation 的值为 landscape 时生效。
         * - 从基础库 v2.26.0 开始，wx.onDeviceOrientationChange 会同时监听通过 wx.setDeviceOrientation 接口切换横竖屏的事件。 */
        onDeviceOrientationChange(
            /** 屏幕转向切换事件的监听函数 */
            listener: OnDeviceOrientationChangeCallback
        ): void
        /** [wx.onError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.onError.html)
         *
         * 监听全局错误事件 */
        onError(
            /** 全局错误事件的监听函数 */
            listener: WxOnErrorCallback
        ): void
        /** [wx.onGamepadConnected(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/gamepad/wx.onGamepadConnected.html)
         *
         * 需要基础库： `3.6.4`
         *
         * 监听用户已连接游戏手柄的事件。 */
        onGamepadConnected(
            /** 用户已连接游戏手柄的事件的监听函数 */
            listener: OnGamepadConnectedCallback
        ): void
        /** [wx.onGamepadDisconnected(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/gamepad/wx.onGamepadDisconnected.html)
         *
         * 需要基础库： `3.6.4`
         *
         * 监听用户断开游戏手柄的事件。 */
        onGamepadDisconnected(
            /** 用户断开游戏手柄的事件的监听函数 */
            listener: OnGamepadDisconnectedCallback
        ): void
        /** [wx.onGyroscopeChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/gyroscope/wx.onGyroscopeChange.html)
         *
         * 需要基础库： `2.3.0`
         *
         * 监听陀螺仪数据变化事件。频率根据 [wx.startGyroscope()](https://developers.weixin.qq.com/minigame/dev/api/device/gyroscope/wx.startGyroscope.html) 的 interval 参数。可以使用 [wx.stopGyroscope()](https://developers.weixin.qq.com/minigame/dev/api/device/gyroscope/wx.stopGyroscope.html) 停止监听。 */
        onGyroscopeChange(
            /** 陀螺仪数据变化事件的监听函数 */
            listener: OnGyroscopeChangeCallback
        ): void
        /** [wx.onHandoff(function listener)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.onHandoff.html)
         *
         * 需要基础库： `2.14.4`
         *
         * 监听用户点击菜单「在电脑上打开」按钮时触发的事件 */
        onHandoff(
            /** 用户点击菜单「在电脑上打开」按钮时触发的事件的监听函数 */
            listener: OnHandoffCallback
        ): void
        /** [wx.onHide(function listener)](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.onHide.html)
         *
         * 监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面、显示在聊天顶部等操作会触发此事件。 */
        onHide(
            /** 小游戏隐藏到后台事件的监听函数 */
            listener: OnHideCallback
        ): void
        /** [wx.onInteractiveStorageModified(function callback)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.onInteractiveStorageModified.html)
         *
         * 需要基础库： `2.9.0`
         *
         * 监听成功修改好友的互动型托管数据事件，该接口在游戏主域使用 */
        onInteractiveStorageModified(
            /** 事件发生的回调函数，只有一个参数为 `wx.modifyFriendInteractiveStorage` 传入的 key */
            callback: (...args: any[]) => any
        ): void
        /** [wx.onKeyDown(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.onKeyDown.html)
         *
         * 需要基础库： `2.10.1`
         *
         * 监听键盘按键按下事件，仅适用于 PC 平台 */
        onKeyDown(
            /** 键盘按键按下事件的监听函数 */
            listener: OnKeyDownCallback
        ): void
        /** [wx.onKeyUp(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.onKeyUp.html)
         *
         * 需要基础库： `2.10.1`
         *
         * 监听键盘按键弹起事件，仅适用于 PC 平台 */
        onKeyUp(
            /** 键盘按键弹起事件的监听函数 */
            listener: OnKeyUpCallback
        ): void
        /** [wx.onKeyboardComplete(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.onKeyboardComplete.html)
         *
         * 监听键盘收起的事件 */
        onKeyboardComplete(
            /** 键盘收起的事件的监听函数 */
            listener: OnKeyboardCompleteCallback
        ): void
        /** [wx.onKeyboardConfirm(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.onKeyboardConfirm.html)
         *
         * 监听用户点击键盘 Confirm 按钮时的事件 */
        onKeyboardConfirm(
            /** 用户点击键盘 Confirm 按钮时的事件的监听函数 */
            listener: OnKeyboardConfirmCallback
        ): void
        /** [wx.onKeyboardHeightChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.onKeyboardHeightChange.html)
*
* 需要基础库： `2.21.3`
*
* 监听键盘高度变化事件
*
* **示例代码**
*
* ```js
wx.onKeyboardHeightChange(res => {
  console.log(res.height)
})
``` */
        onKeyboardHeightChange(
            /** 键盘高度变化事件的监听函数 */
            listener: OnKeyboardHeightChangeCallback
        ): void
        /** [wx.onKeyboardInput(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.onKeyboardInput.html)
         *
         * 监听键盘输入事件 */
        onKeyboardInput(
            /** 键盘输入事件的监听函数 */
            listener: OnKeyboardInputCallback
        ): void
        /** [wx.onMemoryWarning(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/memory/wx.onMemoryWarning.html)
*
* 需要基础库： `2.0.2`
*
* 监听内存不足告警事件。
*
* 当 iOS/Android 向小程序进程发出内存警告时，触发该事件。触发该事件不意味小程序被杀，大部分情况下仅仅是告警，开发者可在收到通知后回收一些不必要资源避免进一步加剧内存紧张。
*
* **示例代码**
*
* ```js
wx.onMemoryWarning(function () {
  console.log('onMemoryWarningReceive')
})
``` */
        onMemoryWarning(
            /** 内存不足告警事件的监听函数 */
            listener: OnMemoryWarningCallback
        ): void
        /** [wx.onMessage(function callback)](https://developers.weixin.qq.com/minigame/dev/api/open-api/context/wx.onMessage.html)
         *
         * 监听主域发送的消息 */
        onMessage(
            /** 监听事件的回调函数 */
            callback: (...args: any[]) => any
        ): void
        /** [wx.onMouseDown(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/mouse-event/wx.onMouseDown.html)
         *
         * 监听鼠标按键按下事件 */
        onMouseDown(
            /** 鼠标按键按下事件的监听函数 */
            listener: OnMouseDownCallback
        ): void
        /** [wx.onMouseMove(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/mouse-event/wx.onMouseMove.html)
         *
         * 监听鼠标移动事件 */
        onMouseMove(
            /** 鼠标移动事件的监听函数 */
            listener: OnMouseMoveCallback
        ): void
        /** [wx.onMouseUp(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/mouse-event/wx.onMouseUp.html)
         *
         * 监听鼠标按键弹起事件 */
        onMouseUp(
            /** 鼠标按键弹起事件的监听函数 */
            listener: OnMouseUpCallback
        ): void
        /** [wx.onNeedPrivacyAuthorization(function listener)](https://developers.weixin.qq.com/minigame/dev/api/open-api/privacy/wx.onNeedPrivacyAuthorization.html)
*
* 需要基础库： `2.32.3`
*
* 监听隐私接口需要用户授权事件。小游戏注册该事件监听后，会启用自定义隐私授权弹窗模式，当需要用户进行隐私授权时会触发该事件。触发该事件时，开发者需要弹出隐私协议说明，并在用户同意或拒绝授权后调用回调接口 resolve 触发原隐私接口继续执行。隐私合规开发指南详情可见[《小游戏隐私合规开发指南》](https://developers.weixin.qq.com/community/develop/doc/000aa25cf1c8a0e64310ac3ef66401?highLine=%25E9%259A%2590%25E7%25A7%2581)
*
* ****
*
* ## 回调参数
*
* ### function resolve
*
* resolve 是 onNeedPrivacyAuthorization 的首个回调参数，是一个接口函数。
*
* 当触发 onNeedPrivacyAuthorization 事件时，触发该事件的隐私接口会处于 pending 状态。
*
* 如果调用 resolve({ event:'agree' })，则触发当前 onNeedPrivacyAuthorization 事件的原隐私接口会继续执行。
*
* 如果调用 resolve({ event: 'disagree' })，则触发当前 onNeedPrivacyAuthorization 事件的原隐私接口会失败并返回 `API:fail privacy permission is not authorized` 的错误信息。
*
* 在调用 resolve({ event: 'agree'/'disagree' }) 之前，开发者可以调用 resolve({ event: 'exposureAuthorization' }) 把隐私弹窗曝光告知平台。
*
* ### Object eventInfo
*
* eventInfo 是 onNeedPrivacyAuthorization 的第二个回调参数，表示触发本次 onNeedPrivacyAuthorization 事件的关联信息
*
* | 属性 | 类型 | 说明 |
* | ---- | ---- | ---- |
* | referrer | string | 触发本次 onNeedPrivacyAuthorization 事件的接口或组件名（例如："getUserInfo", "UserInfoButton.onTap"） |
*
* ****
*
* ## resolve 接口参数
*
* | 属性 | 类型 | 说明 |
* | ---- | ---- | ---- |
* | event | string | 用户操作类型 |
*
* ### event 合法值
*
* | event | 说明 |
* | ---- | ---- |
* | exposureAuthorization | 自定义隐私弹窗曝光 |
* | agree | 用户同意隐私授权 |
* | disagree | 用户拒绝隐私授权 |
*
* ****
*
* ## 具体说明：
*
* - 1. 小游戏未注册 wx.onNeedPrivacyAuthorization 事件监听时，会默认使用平台统一隐私弹窗
* - 2. 小游戏注册 wx.onNeedPrivacyAuthorization 后，会切换至自定义隐私弹窗，此时需要开发者自行渲染隐私弹窗
* - 3. 什么时候会触发 onNeedPrivacyAuthorization 事件？
*   - 1. 调用隐私相关接口（比如 wx.getUserInfo、wx.getClipboardData），并且用户还未同意过隐私协议时
*   - 2. 调用 wx.requirePrivacyAuthorize 接口来模拟隐私接口调用，并且用户还未同意过隐私协议时
*   - 3. 如果用户已经同意过隐私协议，则不会再触发 onNeedPrivacyAuthorization 事件
* - 4. 当触发 onNeedPrivacyAuthorization 事件时，触发该事件的隐私接口会处于 pending 状态，等待用户授权后才会继续执行，此时开发者需要弹出自定义隐私弹窗，并在用户点击同意/拒绝后调用回调接口 resolve，触发该事件的隐私接口才会继续执行。
* - 5. 开发者必须在用户产生点击操作时调用 resolve 接口
* - 6. wx.onNeedPrivacyAuthorization 是覆盖式注册监听，若重复注册监听，则只有最后一次注册会生效。
* - 7. 一定要注册 wx.onNeedPrivacyAuthorization 监听以及调用 resolve 吗？
*   - 1. 不是的，如果使用小游戏官方弹窗，不使用自定义弹窗，那就不需要 wx.onNeedPrivacyAuthorization。
*   - 2. 但如果注册了 wx.onNeedPrivacyAuthorization 监听，则一定要调用 resolve 接口。
*
* **示例代码**
*
* ```js
wx.onNeedPrivacyAuthorization((resolve, eventInfo) => {
  console.log('触发本次事件的接口是：' + eventInfo.referrer)
  // ------ 自定义弹窗逻辑 ------ //
  showCustomPopup()
  // -------弹窗后根据用户操作，进行以下逻辑逻辑 ------- //
  // 开发者弹出自定义的隐私弹窗，并调用 resolve 告知平台已经弹窗
  resolve({ event: 'exposureAuthorization' })
  // 用户点击同意后，开发者调用 resolve 告知平台用户已经同意
  resolve({ event: 'agree' })
  // 用户点击拒绝后，开发者调用 resolve 告知平台用户已经拒绝
  resolve({ event: 'disagree' })
})
``` */
        onNeedPrivacyAuthorization(
            /** 隐私接口需要用户授权事件的监听函数 */
            listener: OnNeedPrivacyAuthorizationCallback
        ): void
        /** [wx.onNetworkStatusChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/network/wx.onNetworkStatusChange.html)
*
* 需要基础库： `1.1.0`
*
* 监听网络状态变化事件
*
* **示例代码**
*
* ```js
wx.onNetworkStatusChange(function (res) {
  console.log(res.isConnected)
  console.log(res.networkType)
})
``` */
        onNetworkStatusChange(
            /** 网络状态变化事件的监听函数 */
            listener: OnNetworkStatusChangeCallback
        ): void
        /** [wx.onNetworkWeakChange(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/network/wx.onNetworkWeakChange.html)
*
* 需要基础库： `2.21.0`
*
* 监听弱网状态变化事件
*
* **示例代码**
*
* ```js
wx.onNetworkWeakChange(function (res) {
  console.log(res.weakNet)
  console.log(res.networkType)
})
// 取消监听
wx.offNetworkWeakChange()
``` */
        onNetworkWeakChange(
            /** 弱网状态变化事件的监听函数 */
            listener: OnNetworkWeakChangeCallback
        ): void
        /** [wx.onScreenRecordingStateChanged(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/screen/wx.onScreenRecordingStateChanged.html)
         *
         * 需要基础库： `3.1.4`
         *
         * 监听用户录屏事件。 */
        onScreenRecordingStateChanged(
            /** 用户录屏事件的监听函数 */
            listener: OnScreenRecordingStateChangedCallback
        ): void
        /** [wx.onShareAppMessage(function listener)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.onShareAppMessage.html)
         *
         * 监听用户点击右上角菜单的「转发」按钮时触发的事件
         *
         * ****
         *
         * ## 注意事项
         * - 转发图片说明：imageUrl，imageUrlId 都存在时，优先使用 imageUrl。 imageUrl，imageUrlId 都不填时使用游戏画面截图。 */
        onShareAppMessage(
            /** 用户点击右上角菜单的「转发」按钮时触发的事件的监听函数 */
            listener: OnShareAppMessageCallback
        ): void
        /** [wx.onShareMessageToFriend(function listener)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.onShareMessageToFriend.html)
         *
         * 需要基础库： `2.9.4`
         *
         * 监听主域接收`wx.shareMessageToFriend`接口的成功失败通知事件 */
        onShareMessageToFriend(
            /** 主域接收`wx.shareMessageToFriend`接口的成功失败通知事件的监听函数 */
            listener: OnShareMessageToFriendCallback
        ): void
        /** [wx.onShareTimeline(function listener)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.onShareTimeline.html)
         *
         * 需要基础库： `2.11.3`
         *
         * 监听用户点击右上角菜单的「分享到朋友圈」按钮时触发的事件。本接口为 Beta 版本，暂只在 Android 平台支持。
         *
         * ****
         *
         * ## 注意事项
         * - 转发图片说明：imageUrl，imageUrlId 都存在时，优先使用 imageUrl。  imageUrl，imageUrlId 都不填时使用当前游戏的icon。 */
        onShareTimeline(
            /** 用户点击右上角菜单的「分享到朋友圈」按钮时触发的事件的监听函数 */
            listener: OnShareTimelineCallback
        ): void
        /** [wx.onShow(function listener)](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.onShow.html)
         *
         * 监听小游戏回到前台的事件 */
        onShow(
            /** 小游戏回到前台的事件的监听函数 */
            listener: OnShowCallback
        ): void
        /** [wx.onSocketClose(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.onSocketClose.html)
         *
         * @warning **推荐使用 [SocketTask](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.html) 的方式去管理 webSocket 链接，每一条链路的生命周期都更加可控，同时存在多个 webSocket 的链接的情况下使用 wx 前缀的方法可能会带来一些和预期不一致的情况。**
         *
         * 监听 WebSocket 连接关闭事件。 */
        onSocketClose(
            /** WebSocket 连接关闭事件的监听函数 */
            listener: OnSocketCloseCallback
        ): void
        /** [wx.onSocketError(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.onSocketError.html)
         *
         * @warning **推荐使用 [SocketTask](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.html) 的方式去管理 webSocket 链接，每一条链路的生命周期都更加可控，同时存在多个 webSocket 的链接的情况下使用 wx 前缀的方法可能会带来一些和预期不一致的情况。**
         *
         * 监听 WebSocket 错误事件。 */
        onSocketError(
            /** WebSocket 错误事件的监听函数 */
            listener: OnSocketErrorCallback
        ): void
        /** [wx.onSocketMessage(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.onSocketMessage.html)
         *
         * @warning **推荐使用 [SocketTask](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.html) 的方式去管理 webSocket 链接，每一条链路的生命周期都更加可控，同时存在多个 webSocket 的链接的情况下使用 wx 前缀的方法可能会带来一些和预期不一致的情况。**
         *
         * 监听 WebSocket 接收到服务器的消息事件。 */
        onSocketMessage(
            /** WebSocket 接收到服务器的消息事件的监听函数 */
            listener: OnSocketMessageCallback
        ): void
        /** [wx.onSocketOpen(function listener)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.onSocketOpen.html)
         *
         * @warning **推荐使用 [SocketTask](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.html) 的方式去管理 webSocket 链接，每一条链路的生命周期都更加可控，同时存在多个 webSocket 的链接的情况下使用 wx 前缀的方法可能会带来一些和预期不一致的情况。**
         *
         * 监听 WebSocket 连接打开事件。 */
        onSocketOpen(
            /** WebSocket 连接打开事件的监听函数 */
            listener: OnSocketOpenCallback
        ): void
        /** [wx.onTouchCancel(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.onTouchCancel.html)
         *
         * 监听触点失效事件
         *
         * **注意**
         *
         * - 在 Windows/Mac 设备上，将会由鼠标事件转义而成。 */
        onTouchCancel(
            /** 触点失效事件的监听函数 */
            listener: OnTouchCancelCallback
        ): void
        /** [wx.onTouchEnd(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.onTouchEnd.html)
         *
         * 监听触摸结束事件
         *
         * **注意**
         *
         * - 在 Windows/Mac 设备上，将会由鼠标事件转义而成。 */
        onTouchEnd(
            /** 触摸结束事件的监听函数 */
            listener: OnTouchEndCallback
        ): void
        /** [wx.onTouchMove(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.onTouchMove.html)
         *
         * 监听触点移动事件
         *
         * **注意**
         *
         * - 在 Windows/Mac 设备上，将会由鼠标事件转义而成。
         * - 在 Windows/Mac 设备上并处于鼠标锁定状态时，touchMove 事件将会随着鼠标滑动持续触发。 */
        onTouchMove(
            /** 触点移动事件的监听函数 */
            listener: OnTouchMoveCallback
        ): void
        /** [wx.onTouchStart(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.onTouchStart.html)
         *
         * 监听开始触摸事件
         *
         * **注意**
         *
         * - 在 Windows/Mac 设备上，将会由鼠标事件转义而成。 */
        onTouchStart(
            /** 开始触摸事件的监听函数 */
            listener: OnTouchStartCallback
        ): void
        /** [wx.onUnhandledRejection(function listener)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.onUnhandledRejection.html)
         *
         * 需要基础库： `2.10.0`
         *
         * 监听未处理的 Promise 拒绝事件
         *
         * **注意**
         *
         * 安卓平台暂时不会派发该事件 */
        onUnhandledRejection(
            /** 未处理的 Promise 拒绝事件的监听函数 */
            listener: OnUnhandledRejectionCallback
        ): void
        /** [wx.onUserCaptureScreen(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/screen/wx.onUserCaptureScreen.html)
*
* 需要基础库： `2.8.1`
*
* 监听用户主动截屏事件。用户使用系统截屏按键截屏时触发，只能注册一个监听
*
* **示例代码**
*
* ```js
wx.onUserCaptureScreen(function (res) {
    console.log('用户截屏了')
        return {
            query: "parameter=test", // 通过截屏图片打开小程序的query参数
            promise: new Promise((resolve) => { // 通过promise延时传递小程序的query参数
                    setTimeout(() => {
                        resolve({
                            query: "parameter=test2",
                        })
                    }, 1000) // 在1秒内对query进行解析
                })
        }
    }
  )
``` */
        onUserCaptureScreen(
            /** 用户主动截屏事件的监听函数 */
            listener: OnUserCaptureScreenCallback
        ): void
        /** [wx.onVoIPChatInterrupted(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.onVoIPChatInterrupted.html)
         *
         * 需要基础库： `2.7.0`
         *
         * 监听被动断开实时语音通话事件。包括小游戏切入后端时断开 */
        onVoIPChatInterrupted(
            /** 被动断开实时语音通话事件的监听函数 */
            listener: OnVoIPChatInterruptedCallback
        ): void
        /** [wx.onVoIPChatMembersChanged(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.onVoIPChatMembersChanged.html)
         *
         * 需要基础库： `2.7.0`
         *
         * 监听实时语音通话成员在线状态变化事件。有成员加入/退出通话时触发回调 */
        onVoIPChatMembersChanged(
            /** 实时语音通话成员在线状态变化事件的监听函数 */
            listener: OnVoIPChatMembersChangedCallback
        ): void
        /** [wx.onVoIPChatSpeakersChanged(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.onVoIPChatSpeakersChanged.html)
         *
         * 需要基础库： `2.7.0`
         *
         * 监听实时语音通话成员通话状态变化事件。有成员开始/停止说话时触发回调 */
        onVoIPChatSpeakersChanged(
            /** 实时语音通话成员通话状态变化事件的监听函数 */
            listener: OnVoIPChatSpeakersChangedCallback
        ): void
        /** [wx.onVoIPChatStateChanged(function listener)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.onVoIPChatStateChanged.html)
         *
         * 需要基础库： `2.16.0`
         *
         * 监听房间状态变化事件。 */
        onVoIPChatStateChanged(
            /** 房间状态变化事件的监听函数 */
            listener: OnVoIPChatStateChangedCallback
        ): void
        /** [wx.onWheel(function listener)](https://developers.weixin.qq.com/minigame/dev/api/device/wheel-event/wx.onWheel.html)
         *
         * 监听鼠标滚轮事件 */
        onWheel(
            /** 鼠标滚轮事件的监听函数 */
            listener: OnWheelCallback
        ): void
        /** [wx.onWindowResize(function listener)](https://developers.weixin.qq.com/minigame/dev/api/ui/window/wx.onWindowResize.html)
         *
         * 监听窗口尺寸变化事件 */
        onWindowResize(
            /** 窗口尺寸变化事件的监听函数 */
            listener: OnWindowResizeCallback
        ): void
        /** [wx.openAppAuthorizeSetting(Object object)](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.openAppAuthorizeSetting.html)
*
* 需要基础库： `2.25.3`
*
* 跳转系统微信授权管理页
*
* **示例代码**
*
* ```js
wx.openAppAuthorizeSetting({
  success (res) {
    console.log(res)
  }
})
``` */
        openAppAuthorizeSetting<
            T extends OpenAppAuthorizeSettingOption = OpenAppAuthorizeSettingOption
        >(
            option?: T
        ): PromisifySuccessResult<T, OpenAppAuthorizeSettingOption>
        /** [wx.openBluetoothAdapter(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.openBluetoothAdapter.html)
*
* 需要基础库： `2.9.2`
*
* 初始化蓝牙模块。iOS 上开启主机/从机（外围设备）模式时需分别调用一次，并指定对应的 `mode`。
*
* **object.fail 回调函数返回的 state 参数（仅 iOS）**
*
* | 状态码 | 说明   |
* | ------ | ------ |
* | 0      | 未知   |
* | 1      | 重置中 |
* | 2      | 不支持 |
* | 3      | 未授权 |
* | 4      | 未开启 |
*
* **注意**
*
* - 其他蓝牙相关 API 必须在 [wx.openBluetoothAdapter](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.openBluetoothAdapter.html) 调用之后使用。否则 API 会返回错误（errCode=10000）。
* - 在用户蓝牙开关未开启或者手机不支持蓝牙功能的情况下，调用 [wx.openBluetoothAdapter](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.openBluetoothAdapter.html) 会返回错误（errCode=10001），表示手机蓝牙功能不可用。此时小程序蓝牙模块已经初始化完成，可通过 [wx.onBluetoothAdapterStateChange](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.onBluetoothAdapterStateChange.html) 监听手机蓝牙状态的改变，也可以调用蓝牙模块的所有API。
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.openBluetoothAdapter({
  success (res) {
    console.log(res)
  }
})
``` */
        openBluetoothAdapter<
            T extends OpenBluetoothAdapterOption = OpenBluetoothAdapterOption
        >(
            option?: T
        ): PromisifySuccessResult<T, OpenBluetoothAdapterOption>
        /** [wx.openCard(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/card/wx.openCard.html)
*
* 需要基础库： `2.5.0`
*
* 查看微信卡包中的卡券。只有通过 [认证](https://developers.weixin.qq.com/miniprogram/product/renzheng.html) 的小程序或文化互动类目的小游戏才能使用。更多文档请参考 [微信卡券接口文档](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1490190158&version=1&lang=zh_CN&platform=2)。
*
* **示例代码**
*
* ```js
wx.openCard({
  cardList: [{
    cardId: '',
    code: ''
  }, {
    cardId: '',
    code: ''
  }],
  success (res) { }
})
``` */
        openCard<T extends OpenCardOption = OpenCardOption>(
            option: T
        ): PromisifySuccessResult<T, OpenCardOption>
        /** [wx.openChannelsActivity(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/channels/wx.openChannelsActivity.html)
         *
         * 需要基础库： `2.19.2`
         *
         * 打开视频号视频 */
        openChannelsActivity(option: OpenChannelsActivityOption): void
        /** [wx.openChannelsEvent(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/channels/wx.openChannelsEvent.html)
         *
         * 需要基础库： `2.21.0`
         *
         * 打开视频号活动页 */
        openChannelsEvent(option: OpenChannelsEventOption): void
        /** [wx.openChannelsLive(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/channels/wx.openChannelsLive.html)
         *
         * 需要基础库： `2.15.0`
         *
         * 打开视频号直播 */
        openChannelsLive(option: OpenChannelsLiveOption): void
        /** [wx.openChannelsUserProfile(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/channels/wx.openChannelsUserProfile.html)
         *
         * 需要基础库： `2.21.2`
         *
         * 打开视频号主页。若为插件环境，只允许在插件页面中调用。 */
        openChannelsUserProfile(option: OpenChannelsUserProfileOption): void
        /** [wx.openCustomerServiceChat(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/service-chat/wx.openCustomerServiceChat.html)
*
* 需要基础库： `2.30.4`
*
* 打开微信客服，页面产生点击事件后才可调用。了解更多信息，可以参考[微信客服介绍](https://work.weixin.qq.com/kf/)。
*
* **示例代码**
*
* ```js
wx.openCustomerServiceChat({
  extInfo: {url: ''},
  corpId: '',
  success(res) {}
})
``` */
        openCustomerServiceChat(option: OpenCustomerServiceChatOption): void
        /** [wx.openCustomerServiceConversation(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/customer-message/wx.openCustomerServiceConversation.html)
         *
         * 需要基础库： `2.0.3`
         *
         * 进入客服会话。要求在用户发生过至少一次 touch 事件后才能调用。后台接入方式与小程序一致，详见 [客服消息接入](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/customer-message/customer-message.html)
         *
         * **注意事项**
         *
         * - 在客服会话内点击小程序消息卡片进入小程序时，不能通过 wx.onShow 或 wx.getEnterOptionsSync 等接口获取启动路径和参数，而是应该通过 wx.openCustomerServiceConversation 接口的 success 回调获取启动路径和参数 */
        openCustomerServiceConversation<
            T extends OpenCustomerServiceConversationOption = OpenCustomerServiceConversationOption
        >(
            option: T
        ): PromisifySuccessResult<T, OpenCustomerServiceConversationOption>
        /** [wx.openPrivacyContract(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/privacy/wx.openPrivacyContract.html)
*
* 需要基础库： `2.32.3`
*
* 跳转至隐私协议页面。隐私合规开发指南详情可见[《小游戏隐私合规开发指南》](https://developers.weixin.qq.com/community/develop/doc/000aa25cf1c8a0e64310ac3ef66401?highLine=%25E9%259A%2590%25E7%25A7%2581)
*
* ****
*
* ## 具体说明：
*
* - 1. 一定要调用 wx.openPrivacyContract 接口吗？
*
*   - 不是。开发者也可以选择在小游戏内自行展示完整的隐私协议。但推荐使用该接口。
*
* **示例代码**
*
* ```js
wx.openPrivacyContract({
  success: () => {}, // 打开成功
  fail: () => {}, // 打开失败
  complete: () => {}
})
``` */
        openPrivacyContract(option: OpenPrivacyContractOption): void
        /** [wx.openSetting(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/wx.openSetting.html)
*
* 需要基础库： `1.1.0`
*
* 调起客户端小程序设置界面，返回用户设置的操作结果。**设置界面只会出现小程序已经向用户请求过的[权限](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/authorize.html)**。
*
* ****
*
* - 注意：[2.3.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 版本开始，用户发生点击行为后，才可以跳转打开设置页，管理授权信息。[详情](https://developers.weixin.qq.com/community/develop/doc/000cea2305cc5047af5733de751008)
*
* **示例代码**
*
* ```js
wx.openSetting({
  success (res) {
    console.log(res.authSetting)
    // res.authSetting = {
    //   "scope.userInfo": true,
    //   "scope.userLocation": true
    // }
  }
})
``` */
        openSetting<T extends OpenSettingOption = OpenSettingOption>(
            option?: T
        ): PromisifySuccessResult<T, OpenSettingOption>
        /** [wx.openSystemBluetoothSetting(Object object)](https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.openSystemBluetoothSetting.html)
*
* 需要基础库： `2.25.3`
*
* 跳转系统蓝牙设置页。仅支持安卓。
*
* **示例代码**
*
* ```js
wx.openSystemBluetoothSetting({
  success (res) {
    console.log(res)
  }
})
``` */
        openSystemBluetoothSetting<
            T extends OpenSystemBluetoothSettingOption = OpenSystemBluetoothSettingOption
        >(
            option?: T
        ): PromisifySuccessResult<T, OpenSystemBluetoothSettingOption>
        /** [wx.operateGameRecorderVideo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/wx.operateGameRecorderVideo.html)
         *
         * 需要基础库： `2.26.1`
         *
         * 分享游戏对局回放。安卓微信8.0.28开始支持，iOS微信8.0.30开始支持。 */
        operateGameRecorderVideo(option: OperateGameRecorderVideoOption): void
        /** [wx.previewImage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/image/wx.previewImage.html)
*
* 在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。
*
* **支持长按识别的码**
*
* | 类型 | 说明 | 最低版本 |
* |------|------| -------|
* | 小程序码 |    |
* | 微信个人码 |    | [2.18.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
* | 企业微信个人码 |    | [2.18.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
* | 普通群码 | 指仅包含微信用户的群  | [2.18.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
* | 互通群码 |  指既有微信用户也有企业微信用户的群  | [2.18.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
* | 公众号二维码 |   | [2.18.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
*
* **示例代码**
*
* ```js
wx.previewImage({
  current: '', // 当前显示图片的http链接
  urls: [] // 需要预览的图片http链接列表
})
``` */
        previewImage<T extends PreviewImageOption = PreviewImageOption>(
            option: T
        ): PromisifySuccessResult<T, PreviewImageOption>
        /** [wx.previewMedia(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/image/wx.previewMedia.html)
         *
         * 需要基础库： `2.12.0`
         *
         * 预览图片和视频。
         *
         * **支持长按识别的码**
         *
         * | 类型 | 说明 | 最低版本 |
         * |------|------| -------|
         * | 小程序码 |    |
         * | 微信个人码 | 不支持小游戏   | [2.18.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
         * | 企业微信个人码 | 不支持小游戏   | [2.18.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
         * | 普通群码 | 指仅包含微信用户的群，不支持小游戏   | [2.18.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
         * | 互通群码 |  指既有微信用户也有企业微信用户的群，不支持小游戏  | [2.18.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
         * | 公众号二维码 | 不支持小游戏  | [2.18.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) | */
        previewMedia<T extends PreviewMediaOption = PreviewMediaOption>(
            option: T
        ): PromisifySuccessResult<T, PreviewMediaOption>
        /** [wx.readBLECharacteristicValue(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.readBLECharacteristicValue.html)
*
* 需要基础库： `2.9.2`
*
* 读取蓝牙低功耗设备特征值的二进制数据。注意：必须设备的特征支持 read 才可以成功调用。
*
* **注意**
*
* - 并行调用多次会存在读失败的可能性。
* - 接口读取到的信息需要在 [wx.onBLECharacteristicValueChange](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.onBLECharacteristicValueChange.html) 方法注册的回调中获取。
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
// 必须在这里的回调才能获取
wx.onBLECharacteristicValueChange(function(characteristic) {
  console.log('characteristic value comed:', characteristic)
})

wx.readBLECharacteristicValue({
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  deviceId,
  // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
  serviceId,
  // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
  characteristicId,
  success (res) {
    console.log('readBLECharacteristicValue:', res.errCode)
  }
})
``` */
        readBLECharacteristicValue<
            T extends ReadBLECharacteristicValueOption = ReadBLECharacteristicValueOption
        >(
            option: T
        ): PromisifySuccessResult<T, ReadBLECharacteristicValueOption>
        /** [wx.removeStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.removeStorage.html)
*
* 从本地缓存中移除指定 key。
*
* **示例代码**
*
* ```js
wx.removeStorage({
  key: 'key',
  success (res) {
    console.log(res)
  }
})
```
*
* ```js
try {
  wx.removeStorageSync('key')
} catch (e) {
  // Do something when catch error
}
``` */
        removeStorage<T extends RemoveStorageOption = RemoveStorageOption>(
            option: T
        ): PromisifySuccessResult<T, RemoveStorageOption>
        /** [wx.removeStorageSync(string key)](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.removeStorageSync.html)
*
* [wx.removeStorage](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.removeStorage.html) 的同步版本
*
* **示例代码**
*
* ```js
wx.removeStorage({
  key: 'key',
  success (res) {
    console.log(res)
  }
})
```
*
* ```js
try {
  wx.removeStorageSync('key')
} catch (e) {
  // Do something when catch error
}
``` */
        removeStorageSync(
            /** 本地缓存中指定的 key */
            key: string
        ): void
        /** [wx.removeUserCloudStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.removeUserCloudStorage.html)
         *
         * 需要基础库： `1.9.92`
         *
         * 删除用户托管数据当中对应 key 的数据。 */
        removeUserCloudStorage<
            T extends RemoveUserCloudStorageOption = RemoveUserCloudStorageOption
        >(
            option: T
        ): PromisifySuccessResult<T, RemoveUserCloudStorageOption>
        /** [wx.reportEvent(string eventId, object data)](https://developers.weixin.qq.com/minigame/dev/api/data-analysis/wx.reportEvent.html)
         *
         * 需要基础库： `2.14.4`
         *
         * 事件上报 */
        reportEvent(
            /** 在 mp 实验系统中设置的事件英文名 */
            eventId: string,
            /** 可被 JSON.stringify 的对象，将一起上报至系统 */
            data?: IAnyObject
        ): void
        /** [wx.reportMonitor(string name, number value)](https://developers.weixin.qq.com/minigame/dev/api/data-analysis/wx.reportMonitor.html)
*
* 需要基础库： `2.1.2`
* @deprecated 基础库版本 [2.31.1](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃，请使用 [wx.reportEvent](https://developers.weixin.qq.com/minigame/dev/api/data-analysis/wx.reportEvent.html) 替换
*
* 自定义业务数据监控上报接口。
*
* **使用说明**
*
* 使用前，需要在「小程序管理后台-运维中心-性能监控-业务数据监控」中新建监控事件，配置监控描述与告警类型。每一个监控事件对应唯一的监控ID，开发者最多可以创建128个监控事件。
*
* **示例代码**
*
* ```js
wx.reportMonitor('1', 1)
``` */
        reportMonitor(
            /** 监控ID，在「小程序管理后台」新建数据指标后获得 */
            name: string,
            /** 上报数值，经处理后会在「小程序管理后台」上展示每分钟的上报总量 */
            value: number
        ): void
        /** [wx.reportPerformance(Number id, Number value, String|Array dimensions)](https://developers.weixin.qq.com/minigame/dev/api/base/performance/wx.reportPerformance.html)
*
* 需要基础库： `2.10.0`
*
* 小程序测速上报。使用前，需要在小程序管理后台配置。 详情参见[小程序测速](https://developers.weixin.qq.com/miniprogram/dev/framework/performanceReport/)指南。
*
* **示例代码**
*
* ```js
wx.reportPerformance(1101, 680)
wx.reportPerformance(1101, 680, 'custom')
``` */
        reportPerformance(
            /** 指标 id */
            id: number,
            /** 需要上报的数值 */
            value: number,
            /** 自定义维度 (选填) */
            dimensions?: string | any[]
        ): void
        /** [wx.reportScene(Object object)](https://developers.weixin.qq.com/minigame/dev/api/data-analysis/wx.reportScene.html)
*
* 需要基础库： `2.26.2`
*
* 用于游戏启动阶段的自定义场景上报。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-start-reportScene.html)。
*
* **示例代码**
*
* ```js
wx.reportScene({
  sceneId: 1000,
  costTime: 350,
  dimension: {
    d1: '2.1.0', // value仅支持传入String类型。若value表示Boolean，请将值处理为'0'、'1'进行上报；若value为Number，请转换为String进行上报
  },
  metric: {
    m1: '546', // value仅支持传入数值且需要转换为String类型进行上报
  },
  success (res) {
    // 上报接口执行完成后的回调，用于检查上报数据是否符合预期
    console.log(res)
  },
  fail (res) {
    // 上报报错时的回调，用于查看上报错误的原因：如参数类型错误等
    console.log(res)
  }
})
``` */
        reportScene(option: ReportSceneOption): void
        /** [wx.reportUserBehaviorBranchAnalytics(Object object)](https://developers.weixin.qq.com/minigame/dev/api/data-analysis/wx.reportUserBehaviorBranchAnalytics.html)
         *
         * 需要基础库： `2.12.0`
         *
         * 上报场景分析，用于UI组件（一般是按钮）相关事件的上报，事件目前有曝光、点击两种，查看[相关文档](https://developers.weixin.qq.com/minigame/analysis/selfanalysis.html) */
        reportUserBehaviorBranchAnalytics(
            option: ReportUserBehaviorBranchAnalyticsOption
        ): void
        /** [wx.requestMidasFriendPayment(Object object)](https://developers.weixin.qq.com/minigame/dev/api/midas-payment/wx.requestMidasFriendPayment.html)
*
* 需要基础库： `2.11.0`
*
* @warning **接口已废弃**
*
* 发起米大师朋友礼物索要。接口用法详见 [小游戏礼物索要接入指南](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/friend-payment.html)
*
* **示例代码**
*
* ```js
wx.requestMidasFriendPayment({
  success(res) {
    // res
    {
      errMsg: 'requestMidasFriendPayment:ok',
      encryptedData: 'xxxx',
      iv: 'xxx'
    }
  },
  fail() {

  }
})
```
*
* encryptedData 解密后数据结构如下：
*
* ```json
{
  "outTradeNo": "xxxxxxxx",
  "orderNo": "PBgAAHMjeOhixxxx",
  "watermark": {
    "timestamp": 1585537091,
    "appid": "wx7a727ff7d940xxxx"
  }
}
```
*
* **buyQuantity限制说明**
*
* 购买游戏币的时候，buyQuantity 不可任意填写。需满足 buyQuantity * 游戏币单价 = 限定的价格等级。如：游戏币单价为 0.1 元，一次购买最少数量是 10。
*
* 有效价格等级如下：
*
* | 价格等级（单位：人民币） |
* |----------------------|
* | 1 |
* | 3 |
* | 6 |
* | 8 |
* | 12 |
* | 18 |
* | 25 |
* | 30 |
* | 40 |
* | 45 |
* | 50 |
* | 60 |
* | 68 |
* | 73 |
* | 78 |
* | 88 |
* | 98 |
* | 108 |
* | 118 |
* | 128 |
* | 148 |
* | 168 |
* | 188 |
* | 198 |
* | 328 |
* | 648 |
* | 998 |
* | 1998 |
* | 2998 | */
        requestMidasFriendPayment(option: RequestMidasFriendPaymentOption): void
        /** [wx.requestMidasPayment(Object object)](https://developers.weixin.qq.com/minigame/dev/api/midas-payment/wx.requestMidasPayment.html)
         *
         * 需要基础库： `2.19.2`
         *
         * 发起购买游戏币支付请求，可参考[虚拟支付2.0游戏币](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment/coins.html)，虚拟支付全流程可参考[技术手册-虚拟支付篇](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment/guide.html)
         *
         * **buyQuantity 限制说明**
         *
         * 购买游戏币的时候，buyQuantity 不可任意填写。需满足 buyQuantity * 游戏币单价 = 限定的价格等级。如：游戏币单价为 0.1 元，一次购买最少数量是 10。
         *
         * 有效价格等级如下：
         *
         * | 价格等级（单位：人民币） |
         * |----------------------|
         * | 1 |
         * | 3 |
         * | 6 |
         * | 8 |
         * | 12 |
         * | 18 |
         * | 25 |
         * | 30 |
         * | 40 |
         * | 45 |
         * | 50 |
         * | 60 |
         * | 68 |
         * | 73 |
         * | 78 |
         * | 88 |
         * | 98 |
         * | 108 |
         * | 118 |
         * | 128 |
         * | 148 |
         * | 168 |
         * | 188 |
         * | 198 |
         * | 328 |
         * | 648 |
         * | 998 |
         * | 1998 |
         * | 2998 | */
        requestMidasPayment<
            T extends RequestMidasPaymentOption = RequestMidasPaymentOption
        >(
            option: T
        ): PromisifySuccessResult<T, RequestMidasPaymentOption>
        /** [wx.requestMidasPaymentGameItem(Object object)](https://developers.weixin.qq.com/minigame/dev/api/midas-payment/wx.requestMidasPaymentGameItem.html)
*
* 需要基础库： `2.19.2`
*
* 发起道具直购支付请求，可参考[虚拟支付2.0道具直购](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment/goods.html)，虚拟支付全流程可参考[技术手册-虚拟支付篇](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment/guide.html)
*
* **示例代码**
*
* ```js
wx.requestMidasPaymentGameItem({
 signData: '{"mode":"goods","offerId":"123","buyQuantity":1,"env":0,"currencyType":"CNY","platform":"android","zoneId":"1","productId":"testproductId","goodsPrice":10,"outTradeNo":"xxxxxx","attach":"testdata"}',
 paySig: 'd0b8bbccbe34ed11549bcfd6602b08711f4acc0965253a949cd6a2b895152f9d',
 signature: 'd0b8bbccbe34ed11549bcfd6602b08711f4acc0965253a949cd6a2b895152f9d',
 success(res, errCode) {
     console.log('pay', res, errCode);
 },
 fail({
     errMsg,
     errCode
 }) {
     console.error(errMsg, errCode)
 }
```
* 支付签名代码实现
* ```python
*   import hmac
*   import hashlib
*   import urllib.parse
*
*   # sign_data 支付原串 注意这里sign_data需要和前端一致，原格式传递（包括空格和回车），建议后台下发，
*   # appkey 米大师密钥
*   # method 需要签名方法 requestMidasPaymentGameItem
*   def gen_pay_sig(sign_data, appkey, method):
*       need_encode_body = method + '&' + sign_data
*       print(need_encode_body)
*       return hmac.new(key=appkey.encode('utf-8'), msg=need_encode_body.encode('utf-8'),
*               digestmod=hashlib.sha256).hexdigest()
* ``` */
        requestMidasPaymentGameItem(
            option: RequestMidasPaymentGameItemOption
        ): void
        /** [wx.requestPointerLock()](https://developers.weixin.qq.com/minigame/dev/api/render/cursor/wx.requestPointerLock.html)
*
* 需要基础库： `3.2.0`
*
* 锁定鼠标指针。锁定指针后，鼠标会被隐藏，可以通过 [wx.touchMove](#) 事件获取鼠标偏移量。 **此接口仅在 Windows、Mac 端支持，且必须在用户进行操作后才可调用。**
*
* **示例代码**
*
* ```js
wx.onTouchEnd(() => {
  wx.requestPointerLock() // 触发鼠标锁定
})
```
*
* **示例 demo**
*
* 下方打开后点按窗口会鼠标锁定，同时会在 touchMove 时持续在控制台打印偏移量。
* [https://developers.weixin.qq.com/s/wGruMHm97tMF](https://developers.weixin.qq.com/s/wGruMHm97tMF) */
        requestPointerLock(): void
        /** [wx.requestSubscribeMessage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html)
*
* 需要基础库： `2.4.4`
*
* 调起客户端小游戏订阅消息界面，返回用户订阅消息的操作结果。当用户勾选了订阅面板中的“总是保持以上选择，不再询问”时，模板消息会被添加到用户的小游戏设置页，通过 [wx.getSetting](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/wx.getSetting.html) 接口可获取用户对相关模板消息的订阅状态。
*
* ## 注意事项
*  - 一次性模板 id 和永久模板 id 不可同时使用。
*  - 低版本基础库2.4.4~2.8.3 已支持订阅消息接口调用，仅支持传入一个一次性 tmplId / 永久 tmplId。
*  - [2.8.2](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 版本开始，用户发生点击行为或者发起支付回调后，才可以调起订阅消息界面。
*  - [2.10.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 版本开始，开发版和体验版小游戏将禁止使用模板消息 fomrId。
*  - 使用前建议阅读 [小游戏订阅消息使用指引](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/subscribe-message.html)。
*  - 一次授权调用里，每个tmplId对应的模板标题不能存在相同的，若出现相同的，只保留一个。
*
* **错误码**
*
* | errCode | errMsg                                                 | 说明                                                           |
* | ------- | ------------------------------------------------------ | -------------------------------------------------------------- |
* | 10001   | TmplIds can't be empty                                 | 参数传空了                                                     |
* | 10002   | Request list fail                                       | 网络问题，请求消息列表失败                                     |
* | 10003   | Request subscribe fail                                 | 网络问题，订阅请求发送失败                                     |
* | 10004   | Invalid template id                                    | 参数类型错误                                                   |
* | 10005   | Cannot show subscribe message UI                       | 无法展示 UI，一般是小游戏这个时候退后台了导致的                |
* | 20001   | No template data return, verify the template id exist  | 没有模板数据，一般是模板 ID 不存在 或者和模板类型不对应 导致的 |
* | 20002   | Templates type must be same                            | 模板消息类型 既有一次性的又有永久的                            |
* | 20003   | Templates count out of max bounds                      | 模板消息数量超过上限                                           |
* | 20004   | The main switch is switched off                        | 用户关闭了主开关，无法进行订阅                                 |
* | 20005   | This mini program was banned from subscribing messages | 小游戏被禁封                                                   |
*
* **示例代码**
*
* ```js
wx.requestSubscribeMessage({
  tmplIds: [''],
  success (res) {
    console.log(res)
    res === {
       errMsg: "requestSubscribeMessage:ok",
       "zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE": "accept"
    }
  }
})
``` */
        requestSubscribeMessage<
            T extends RequestSubscribeMessageOption = RequestSubscribeMessageOption
        >(
            option: T
        ): PromisifySuccessResult<T, RequestSubscribeMessageOption>
        /** [wx.requestSubscribeSystemMessage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/subscribe-message/wx.requestSubscribeSystemMessage.html)
*
* 需要基础库： `2.9.4`
*
* 调起小游戏系统订阅消息界面，返回用户订阅消息的操作结果。当用户勾选了订阅面板中的“总是保持以上选择，不再询问”时，模板消息会被添加到用户的小游戏设置页，通过 [wx.getSetting](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/wx.getSetting.html) 接口可获取用户对相关模板消息的订阅状态。
*
* ## 注意事项
*  - 使用前建议阅读 [小游戏系统订阅消息使用指引](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/subscribe-system-message.html)。
*  - 系统订阅消息只需要订阅一次，永久有效。
*
* **错误码**
*
* | errCode | errMsg                                                 | 说明                                                           |
* | ------- | ------------------------------------------------------ | -------------------------------------------------------------- |
* | 10001   | TmplIds can't be empty                                 | 参数传空了                                                     |
* | 10002   | Request list fail                                       | 网络问题，请求消息列表失败                                     |
* | 10003   | Request subscribe fail                                 | 网络问题，订阅请求发送失败                                     |
* | 10004   | Invalid template id                                    | 参数类型错误                                                   |
* | 10005   | Cannot show subscribe message UI                       | 无法展示 UI，一般是小游戏这个时候退后台了导致的                |
* | 20004   | The main switch is switched off                        | 用户关闭了主开关，无法进行订阅                                 |
* | 20005   | This mini program was banned from subscribing messages | 小游戏被禁封                                                   |
*
* **示例代码**
*
* ```js
wx.requestSubscribeSystemMessage({
  msgTypeList: ['SYS_MSG_TYPE_INTERACTIVE', 'SYS_MSG_TYPE_RANK'],
  success (res) {
    console.log(res)
    // res === {
    //   errMsg: "requestSubscribeSystemMessage:ok",
    //   SYS_MSG_TYPE_INTERACTIVE: "accept",
    //   SYS_MSG_TYPE_RANK: 'reject'
    // }
  }
})
``` */
        requestSubscribeSystemMessage<
            T extends RequestSubscribeSystemMessageOption = RequestSubscribeSystemMessageOption
        >(
            option: T
        ): PromisifySuccessResult<T, RequestSubscribeSystemMessageOption>
        /** [wx.requirePrivacyAuthorize(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/privacy/wx.requirePrivacyAuthorize.html)
*
* 需要基础库： `2.32.3`
*
* 模拟隐私接口调用，并触发隐私弹窗逻辑。隐私合规开发指南详情可见[《小游戏隐私合规开发指南》](https://developers.weixin.qq.com/community/develop/doc/000aa25cf1c8a0e64310ac3ef66401?highLine=%25E9%259A%2590%25E7%25A7%2581)
*
* ****
*
* ## 具体说明：
*
* 1. 调用 wx.requirePrivacyAuthorize() 时：
*   - 1. 如果用户之前已经同意过隐私授权，会立即返回success回调，不会触发 wx.onNeedPrivacyAuthorization 事件。
*   - 2. 如果用户之前没有授权过，并且开发者注册了 [wx.onNeedPrivacyAuthorization()](https://developers.weixin.qq.com/minigame/dev/api/open-api/privacy/wx.onNeedPrivacyAuthorization.html) 事件监听，就会立即触发 wx.onNeedPrivacyAuthorization 事件，然后开发者在 onNeedPrivacyAuthorization 回调中弹出自定义隐私授权弹窗，用户点了同意后开发者调用 wx.onNeedPrivacyAuthorization 的回调接口 resolve({ event: 'agree' })，会触发 requirePrivacyAuthorize 的 success 回调。用户点击拒绝授权后开发者调用 wx.onNeedPrivacyAuthorization 的回调接口 resolve({ event: 'disagree' }) 的话，会触发 requirePrivacyAuthorize 的 fail 回调。
*   - 3. 如果用户之前没有授权过，并且开发者没有注册 [wx.onNeedPrivacyAuthorization()](https://developers.weixin.qq.com/minigame/dev/api/open-api/privacy/wx.onNeedPrivacyAuthorization.html) 事件监听，就会立即弹出平台提供的统一隐私授权弹窗，用户点了同意之后，会触发 requirePrivacyAuthorize 的 success 回调，用户点了拒绝后会触发 requirePrivacyAuthorize 的 fail 回调。
*   - 4. 基于上述特性，开发者可以在调用任何真实隐私接口之前调用 wx.requirePrivacyAuthorize 接口来模拟隐私接口调用，并触发隐私弹窗（包括自定义弹窗或平台弹窗）逻辑。
*
* 2. 一定要调用 wx.requirePrivacyAuthorize 接口吗？
*   - 不是，wx.requirePrivacyAuthorize 只是一个辅助接口，可以根据实际情况选择使用。当开发者希望在调用隐私接口之前就主动弹出隐私弹窗时，就可以使用这个接口。
*
* **示例代码**
*
* ```js
wx.requirePrivacyAuthorize({
  success: () => {
    // 用户同意授权
    // runGame() 继续游戏逻辑
  },
  fail: () => {}, // 用户拒绝授权
  complete: () => {}
})
``` */
        requirePrivacyAuthorize(option: RequirePrivacyAuthorizeOption): void
        /** [wx.reserveChannelsLive(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/channels/wx.reserveChannelsLive.html)
         *
         * 需要基础库： `2.19.0`
         *
         * 预约视频号直播 */
        reserveChannelsLive(option: ReserveChannelsLiveOption): void
        /** [wx.restartMiniProgram(Object object)](https://developers.weixin.qq.com/minigame/dev/api/navigate/wx.restartMiniProgram.html)
         *
         * 需要基础库： `2.22.1`
         *
         * 重启当前小程序 */
        restartMiniProgram(option: RestartMiniProgramOption): void
        /** [wx.revokeBufferURL(string url)](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.revokeBufferURL.html)
         *
         * 需要基础库： `2.14.0`
         *
         * 根据 URL 销毁存在内存中的数据 */
        revokeBufferURL(
            /** 需要销毁的二进制数据 URL */
            url: string
        ): void
        /** [wx.saveFileToDisk(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/wx.saveFileToDisk.html)
*
* 需要基础库： `2.11.0`
*
* 保存文件系统的文件到用户磁盘，仅在 PC 端支持
*
* **示例代码**
*
* ```js
wx.saveFileToDisk({
  filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.error(res)
  }
})
``` */
        saveFileToDisk(option: SaveFileToDiskOption): void
        /** [wx.saveImageToPhotosAlbum(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/image/wx.saveImageToPhotosAlbum.html)
*
* 需要基础库： `1.2.0`
*
* 保存图片到系统相册。
*
* **示例代码**
*
* ```js
wx.saveImageToPhotosAlbum({
  success(res) { }
})
``` */
        saveImageToPhotosAlbum<
            T extends SaveImageToPhotosAlbumOption = SaveImageToPhotosAlbumOption
        >(
            option: T
        ): PromisifySuccessResult<T, SaveImageToPhotosAlbumOption>
        /** [wx.scanCode(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/scan/wx.scanCode.html)
*
* 需要基础库： `2.16.1`
*
* 调起客户端扫码界面进行扫码
*
* **示例代码**
*
* ```js
// 允许从相机和相册扫码
wx.scanCode({
  success (res) {
    console.log(res)
  }
})

// 只允许从相机扫码
wx.scanCode({
  onlyFromCamera: true,
  success (res) {
    console.log(res)
  }
})
``` */
        scanCode<T extends ScanCodeOption = ScanCodeOption>(
            option: T
        ): PromisifySuccessResult<T, ScanCodeOption>
        /** [wx.sendSocketMessage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.sendSocketMessage.html)
*
* @warning **推荐使用 [SocketTask](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.html) 的方式去管理 webSocket 链接，每一条链路的生命周期都更加可控，同时存在多个 webSocket 的链接的情况下使用 wx 前缀的方法可能会带来一些和预期不一致的情况。**
*
* 通过 WebSocket 连接发送数据。需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。
*
* **示例代码**
*
* ```js
let socketOpen = false
let socketMsgQueue = []
wx.connectSocket({
  url: 'test.php'
})

wx.onSocketOpen(function(res) {
  socketOpen = true
  for (let i = 0; i < socketMsgQueue.length; i++){
    sendSocketMessage(socketMsgQueue[i])
  }
  socketMsgQueue = []
})

function sendSocketMessage(msg) {
  if (socketOpen) {
    wx.sendSocketMessage({
      data:msg
    })
  } else {
    socketMsgQueue.push(msg)
  }
}
``` */
        sendSocketMessage<
            T extends SendSocketMessageOption = SendSocketMessageOption
        >(
            option: T
        ): PromisifySuccessResult<T, SendSocketMessageOption>
        /** [wx.setBLEMTU(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.setBLEMTU.html)
         *
         * 需要基础库： `2.11.0`
         *
         * 协商设置蓝牙低功耗的最大传输单元 (Maximum Transmission Unit, MTU)。需在 [wx.createBLEConnection](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.createBLEConnection.html) 调用成功后调用。仅安卓系统 5.1 以上版本有效，iOS 因系统限制不支持。 */
        setBLEMTU<T extends SetBLEMTUOption = SetBLEMTUOption>(
            option: T
        ): PromisifySuccessResult<T, SetBLEMTUOption>
        /** [wx.setBackgroundFetchToken(object object)](https://developers.weixin.qq.com/minigame/dev/api/storage/background-fetch/wx.setBackgroundFetchToken.html)
         *
         * 需要基础库： `3.0.1`
         *
         * 设置自定义登录态，在周期性拉取数据时带上，便于第三方服务器验证请求合法性 */
        setBackgroundFetchToken<
            T extends SetBackgroundFetchTokenOption = SetBackgroundFetchTokenOption
        >(
            option: T
        ): PromisifySuccessResult<T, SetBackgroundFetchTokenOption>
        /** [wx.setClipboardData(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/clipboard/wx.setClipboardData.html)
*
* 需要基础库： `1.1.0`
*
* 设置系统剪贴板的内容。调用成功后，会弹出 toast 提示"内容已复制"，持续 1.5s
*
* **示例代码**
*
* ```js
wx.setClipboardData({
  data: 'data',
  success (res) {
    wx.getClipboardData({
      success (res) {
        console.log(res.data) // data
      }
    })
  }
})
``` */
        setClipboardData<
            T extends SetClipboardDataOption = SetClipboardDataOption
        >(
            option: T
        ): PromisifySuccessResult<T, SetClipboardDataOption>
        /** [wx.setDeviceOrientation(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/orientation/wx.setDeviceOrientation.html)
         *
         * 需要基础库： `2.26.0`
         *
         * 切换横竖屏。接口调用成功后会触发 wx.onDeviceOrientationChange 事件 */
        setDeviceOrientation(option: SetDeviceOrientationOption): void
        /** [wx.setEnableDebug(Object object)](https://developers.weixin.qq.com/minigame/dev/api/base/debug/wx.setEnableDebug.html)
*
* 需要基础库： `1.4.0`
*
* 设置是否打开调试开关。此开关对正式版也能生效。
*
* **示例代码**
*
* ```javascript
// 打开调试
wx.setEnableDebug({
  enableDebug: true
})

// 关闭调试
wx.setEnableDebug({
  enableDebug: false
})
```
*
* **Tips**
*
* - 在正式版打开调试还有一种方法，就是先在开发版或体验版打开调试，再切到正式版就能看到vConsole。 */
        setEnableDebug<T extends SetEnableDebugOption = SetEnableDebugOption>(
            option: T
        ): PromisifySuccessResult<T, SetEnableDebugOption>
        /** [wx.setInnerAudioOption(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.setInnerAudioOption.html)
         *
         * 需要基础库： `2.3.0`
         *
         * 设置 [InnerAudioContext](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.html) 的播放选项。设置之后对当前小程序全局生效。
         *
         * ****
         *
         * ## 注意事项
         * - 为保证微信整体体验，speakerOn 为 true 时，客户端会忽略 mixWithOther 参数的内容，强制与其它音频互斥
         * - 不支持在播放音频的过程中切换为扬声器播放，开发者如需切换可以先暂停当前播放的音频并记录下当前暂停的时间点，然后切换后重新从原来暂停的时间点开始播放音频
         * - 目前 wx.setInnerAudioOption 接口不兼容 wx.createWebAudioContext 接口，也不兼容 wx.createInnerAudioContext 开启 useWebAudioImplement 的情况，将在后续版本中支持 */
        setInnerAudioOption<
            T extends SetInnerAudioOption = SetInnerAudioOption
        >(
            option: T
        ): PromisifySuccessResult<T, SetInnerAudioOption>
        /** [wx.setKeepScreenOn(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/screen/wx.setKeepScreenOn.html)
*
* 需要基础库： `1.4.0`
*
* 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。
*
* **示例代码**
*
* ```js
wx.setKeepScreenOn({
  keepScreenOn: true
})
``` */
        setKeepScreenOn<
            T extends SetKeepScreenOnOption = SetKeepScreenOnOption
        >(
            option: T
        ): PromisifySuccessResult<T, SetKeepScreenOnOption>
        /** [wx.setMenuStyle(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/menu/wx.setMenuStyle.html)
         *
         * 动态设置通过右上角按钮拉起的菜单的样式。 */
        setMenuStyle<T extends SetMenuStyleOption = SetMenuStyleOption>(
            option: T
        ): PromisifySuccessResult<T, SetMenuStyleOption>
        /** [wx.setPreferredFramesPerSecond(number fps)](https://developers.weixin.qq.com/minigame/dev/api/render/frame/wx.setPreferredFramesPerSecond.html)
         *
         * 可以修改渲染帧率。默认渲染帧率为 60 帧每秒。修改后，requestAnimationFrame 的回调频率会发生改变。 */
        setPreferredFramesPerSecond(
            /** 帧率，有效范围 1 - 60。 */
            fps: number
        ): void
        /** [wx.setScreenBrightness(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/screen/wx.setScreenBrightness.html)
         *
         * 需要基础库： `1.2.0`
         *
         * 设置屏幕亮度 */
        setScreenBrightness<
            T extends SetScreenBrightnessOption = SetScreenBrightnessOption
        >(
            option: T
        ): PromisifySuccessResult<T, SetScreenBrightnessOption>
        /** [wx.setStatusBarStyle(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/statusbar/wx.setStatusBarStyle.html)
         *
         * 当在配置中设置 showStatusBar 时，屏幕顶部会显示状态栏。此接口可以修改状态栏的样式。 */
        setStatusBarStyle<
            T extends SetStatusBarStyleOption = SetStatusBarStyleOption
        >(
            option: T
        ): PromisifySuccessResult<T, SetStatusBarStyleOption>
        /** [wx.setStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.setStorage.html)
*
* 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
*
* **示例代码**
*
* ```js
wx.setStorage({
  key:"key",
  data:"value"
})
```
*
* ```js
// 开启加密存储
wx.setStorage({
  key: "key",
  data: "value",
  encrypt: true, // 若开启加密存储，setStorage 和 getStorage 需要同时声明 encrypt 的值为 true
  success() {
    wx.getStorage({
      key: "key",
      encrypt: true, // 若开启加密存储，setStorage 和 getStorage 需要同时声明 encrypt 的值为 true
      success(res) {
        console.log(res.data)
      }
    })
  }
})
``` */
        setStorage<
            T = any,
            U extends SetStorageOption<T> = SetStorageOption<T>
        >(
            option: U
        ): PromisifySuccessResult<U, SetStorageOption<T>>
        /** [wx.setStorageSync(string key, any data)](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.setStorageSync.html)
*
* 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
*
* **注意**
*
* storage 应只用来进行数据的持久化存储，不应用于运行时的数据传递或全局状态管理。启动过程中过多的同步读写存储，会显著影响启动耗时。
*
* **示例代码**
*
* ```js
try {
  wx.setStorageSync('key', 'value')
} catch (e) { }
``` */
        setStorageSync<T = any>(
            /** 本地缓存中指定的 key */
            key: string,
            /** 需要存储的内容。只支持原生类型、Date、及能够通过`JSON.stringify`序列化的对象。 */
            data: T
        ): void
        /** [wx.setUserCloudStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.setUserCloudStorage.html)
         *
         * 需要基础库： `1.9.92`
         *
         * 对用户托管数据进行写数据操作。允许同时写多组 KV 数据。
         *
         * **托管数据的限制**
         *
         * 1. 每个openid所标识的微信用户在每个游戏上托管的数据不能超过128个key-value对。
         * 2. 上报的key-value列表当中每一项的key+value长度都不能超过1K(1024)字节。
         * 3. 上报的key-value列表当中每一个key长度都不能超过128字节。 */
        setUserCloudStorage<
            T extends SetUserCloudStorageOption = SetUserCloudStorageOption
        >(
            option: T
        ): PromisifySuccessResult<T, SetUserCloudStorageOption>
        /** [wx.setVisualEffectOnCapture(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/screen/wx.setVisualEffectOnCapture.html)
         *
         * 需要基础库： `3.1.4`
         *
         * 设置截屏/录屏时屏幕表现
         *
         * **Bug & Tip**
         *
         * 1. `tip`：iOS 要求基础库版本为 3.3.0 以上，且系统版本为 iOS 16 以上
         * 2. `tip`：iOS 目前只支持处理录屏时的表现 */
        setVisualEffectOnCapture(option: SetVisualEffectOnCaptureOption): void
        /** [wx.setWindowSize(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/window/wx.setWindowSize.html)
         *
         * 需要基础库： `2.10.1`
         * @deprecated 基础库版本 [2.11.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃
         *
         * 设置窗口大小，该接口仅适用于 PC 平台，使用细则请参见指南 */
        setWindowSize(option: SetWindowSizeOption): void
        /** [wx.shareAppMessage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.shareAppMessage.html)
         *
         * 主动拉起转发，进入选择通讯录界面。
         *
         * ****
         *
         * ## 注意事项
         * - 转发图片说明：imageUrl，imageUrlId 都存在时，优先使用 imageUrl。 imageUrl，imageUrlId 都不填时使用游戏画面截图。 */
        shareAppMessage(option: ShareAppMessageOption): void
        /** [wx.shareMessageToFriend(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.shareMessageToFriend.html)
         *
         * 需要基础库： `2.9.0`
         *
         * 给指定的好友分享游戏信息，该接口只可在开放数据域下使用。接收者打开之后，可以用 `wx.modifyFriendInteractiveStorage` 传入参数 quiet=true 发起一次无需弹框确认的好友互动。
         *
         * ****
         *
         * ## 注意事项
         * - 定向分享不允许直接在开放数据域设置 query 参数
         * - 需要设置请参见游戏域 `wx.setMessageToFriendQuery` 接口
         * - 转发图片说明：仅当自定义分享图片权限被封禁时用 imageUrlId，其他情况都会用 imageUrl。 imageUrl 不填或错填网络图片时使用游戏画面截图。 */
        shareMessageToFriend(option: ShareMessageToFriendOption): void
        /** [wx.showActionSheet(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.showActionSheet.html)
*
* 显示操作菜单
*
* **示例代码**
*
* ```js
wx.showActionSheet({
  itemList: ['A', 'B', 'C'],
  success (res) {
    console.log(res.tapIndex)
  },
  fail (res) {
    console.log(res.errMsg)
  }
})
```
*
* **注意**
*
* - Android 6.7.2 以下版本，点击取消或蒙层时，回调 fail, errMsg 为 "fail cancel"；
* - Android 6.7.2 及以上版本 和 iOS 点击蒙层不会关闭模态弹窗，所以尽量避免使用「取消」分支中实现业务逻辑 */
        showActionSheet<
            T extends ShowActionSheetOption = ShowActionSheetOption
        >(
            option: T
        ): PromisifySuccessResult<T, ShowActionSheetOption>
        /** [wx.showKeyboard(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.showKeyboard.html)
         *
         * 显示键盘 */
        showKeyboard<T extends ShowKeyboardOption = ShowKeyboardOption>(
            option: T
        ): PromisifySuccessResult<T, ShowKeyboardOption>
        /** [wx.showLoading(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.showLoading.html)
*
* 需要基础库： `1.1.0`
*
* 显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
*
* **示例代码**
*
* ```js
wx.showLoading({
  title: '加载中',
})

setTimeout(function () {
  wx.hideLoading()
}, 2000)
```
*
* **注意**
*
* - [wx.showLoading](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.showLoading.html) 和 [wx.showToast](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.showToast.html) 同时只能显示一个
* - [wx.showLoading](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.showLoading.html) 应与 [wx.hideLoading](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.hideLoading.html) 配对使用 */
        showLoading<T extends ShowLoadingOption = ShowLoadingOption>(
            option: T
        ): PromisifySuccessResult<T, ShowLoadingOption>
        /** [wx.showModal(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.showModal.html)
*
* 显示模态对话框
*
* **示例代码**
*
* ```js
wx.showModal({
  title: '提示',
  content: '这是一个模态弹窗',
  success (res) {
    if (res.confirm) {
      console.log('用户点击确定')
    } else if (res.cancel) {
      console.log('用户点击取消')
    }
  }
})
```
*
* **注意**
*
* - Android 6.7.2 以下版本，点击取消或蒙层时，回调 fail, errMsg 为 "fail cancel"；
* - Android 6.7.2 及以上版本 和 iOS 点击蒙层不会关闭模态弹窗，所以尽量避免使用「取消」分支中实现业务逻辑
* - 自基础库 2.17.1 版本起，支持传入 editable 参数，显示带输入框的弹窗 */
        showModal<T extends ShowModalOption = ShowModalOption>(
            option: T
        ): PromisifySuccessResult<T, ShowModalOption>
        /** [wx.showShareImageMenu(Object object)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.showShareImageMenu.html)
         *
         * 需要基础库： `2.14.3`
         *
         * 打开分享图片弹窗，可以将图片发送给朋友、收藏或下载 */
        showShareImageMenu<
            T extends ShowShareImageMenuOption = ShowShareImageMenuOption
        >(
            option: T
        ): PromisifySuccessResult<T, ShowShareImageMenuOption>
        /** [wx.showShareMenu(Object object)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.showShareMenu.html)
*
* 需要基础库： `1.1.0`
*
* 设置右上角点开的详情界面中的分享按钮是否可用
*
* ****
*
* ## 注意事项
*  - "shareAppMessage"表示“发送给朋友”按钮，"shareTimeline"表示“分享到朋友圈”按钮
*  - 显示“分享到朋友圈”按钮时必须同时显示“发送给朋友”按钮，显示“发送给朋友”按钮时则允许不显示“分享到朋友圈”按钮
*
* **示例代码**
*
* ```js
wx.showShareMenu({
  withShareTicket: true,
  menus: ['shareAppMessage', 'shareTimeline']
})
``` */
        showShareMenu<T extends ShowShareMenuOption = ShowShareMenuOption>(
            option: T
        ): PromisifySuccessResult<T, ShowShareMenuOption>
        /** [wx.showToast(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.showToast.html)
*
* 显示消息提示框
*
* **示例代码**
*
* ```js
wx.showToast({
  title: '成功',
  icon: 'success',
  duration: 2000
})
```
*
* **注意**
*
* - [wx.showLoading](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.showLoading.html) 和 [wx.showToast](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.showToast.html) 同时只能显示一个
* - [wx.showToast](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.showToast.html) 应与 [wx.hideToast](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.hideToast.html) 配对使用 */
        showToast<T extends ShowToastOption = ShowToastOption>(
            option: T
        ): PromisifySuccessResult<T, ShowToastOption>
        /** [wx.startAccelerometer(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/accelerometer/wx.startAccelerometer.html)
*
* 需要基础库： `1.1.0`
*
* 开始监听加速度数据。
*
* **示例代码**
*
* ```js
wx.startAccelerometer({
  interval: 'game'
})
```
*
* **注意**
*
* - 根据机型性能、当前 CPU 与内存的占用情况，`interval` 的设置与实际 `wx.onAccelerometerChange()` 回调函数的执行频率会有一些出入。 */
        startAccelerometer<
            T extends StartAccelerometerOption = StartAccelerometerOption
        >(
            option?: T
        ): PromisifySuccessResult<T, StartAccelerometerOption>
        /** [wx.startBeaconDiscovery(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.startBeaconDiscovery.html)
*
* 需要基础库： `2.9.2`
*
* 开始搜索附近的 Beacon 设备
*
* **示例代码**
*
* ```js
wx.startBeaconDiscovery({
  success(res) { }
})
``` */
        startBeaconDiscovery<
            T extends StartBeaconDiscoveryOption = StartBeaconDiscoveryOption
        >(
            option: T
        ): PromisifySuccessResult<T, StartBeaconDiscoveryOption>
        /** [wx.startBluetoothDevicesDiscovery(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.startBluetoothDevicesDiscovery.html)
*
* 需要基础库： `2.9.2`
*
* 开始搜寻附近的蓝牙外围设备。
*
* **此操作比较耗费系统资源，请在搜索到需要的设备后及时调用 [wx.stopBluetoothDevicesDiscovery](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.stopBluetoothDevicesDiscovery.html) 停止搜索。**
*
* **注意**
*
* - 考虑到蓝牙功能可以间接进行定位，安卓 6.0 及以上版本，无定位权限或定位开关未打开时，无法进行设备搜索。这种情况下，安卓 8.0.16 前，接口调用成功但无法扫描设备；8.0.16 及以上版本，会返回错误。
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/m7klFDmZ72i1)
*
* ```js
// 以微信硬件平台的蓝牙智能灯为例，主服务的 UUID 是 FEE7。传入这个参数，只搜索主服务 UUID 为 FEE7 的设备
wx.startBluetoothDevicesDiscovery({
  services: ['FEE7'],
  success (res) {
    console.log(res)
  }
})
``` */
        startBluetoothDevicesDiscovery<
            T extends StartBluetoothDevicesDiscoveryOption = StartBluetoothDevicesDiscoveryOption
        >(
            option: T
        ): PromisifySuccessResult<T, StartBluetoothDevicesDiscoveryOption>
        /** [wx.startCompass(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/compass/wx.startCompass.html)
*
* 需要基础库： `1.1.0`
*
* 开始监听罗盘数据
*
* **示例代码**
*
* ```js
wx.startCompass()
``` */
        startCompass<T extends StartCompassOption = StartCompassOption>(
            option?: T
        ): PromisifySuccessResult<T, StartCompassOption>
        /** [wx.startDeviceMotionListening(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/motion/wx.startDeviceMotionListening.html)
         *
         * 需要基础库： `2.3.0`
         *
         * 开始监听设备方向的变化。 */
        startDeviceMotionListening<
            T extends StartDeviceMotionListeningOption = StartDeviceMotionListeningOption
        >(
            option?: T
        ): PromisifySuccessResult<T, StartDeviceMotionListeningOption>
        /** [wx.startGyroscope(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/gyroscope/wx.startGyroscope.html)
         *
         * 需要基础库： `2.3.0`
         *
         * 开始监听陀螺仪数据。 */
        startGyroscope<T extends StartGyroscopeOption = StartGyroscopeOption>(
            option?: T
        ): PromisifySuccessResult<T, StartGyroscopeOption>
        /** [wx.startHandoff(Object object)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.startHandoff.html)
         *
         * 需要基础库： `2.14.4`
         *
         * 开始进行接力，该接口需要在开放数据域调用 */
        startHandoff(option?: StartHandoffOption): void
        /** [wx.stopAccelerometer(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/accelerometer/wx.stopAccelerometer.html)
*
* 需要基础库： `1.1.0`
*
* 停止监听加速度数据。
*
* **示例代码**
*
* ```js
wx.stopAccelerometer()
``` */
        stopAccelerometer<
            T extends StopAccelerometerOption = StopAccelerometerOption
        >(
            option?: T
        ): PromisifySuccessResult<T, StopAccelerometerOption>
        /** [wx.stopBeaconDiscovery(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.stopBeaconDiscovery.html)
         *
         * 需要基础库： `2.9.2`
         *
         * 停止搜索附近的 Beacon 设备 */
        stopBeaconDiscovery<
            T extends StopBeaconDiscoveryOption = StopBeaconDiscoveryOption
        >(
            option?: T
        ): PromisifySuccessResult<T, StopBeaconDiscoveryOption>
        /** [wx.stopBluetoothDevicesDiscovery(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.stopBluetoothDevicesDiscovery.html)
*
* 需要基础库： `2.9.2`
*
* 停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索。
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.stopBluetoothDevicesDiscovery({
  success (res) {
    console.log(res)
  }
})
``` */
        stopBluetoothDevicesDiscovery<
            T extends StopBluetoothDevicesDiscoveryOption = StopBluetoothDevicesDiscoveryOption
        >(
            option?: T
        ): PromisifySuccessResult<T, StopBluetoothDevicesDiscoveryOption>
        /** [wx.stopCompass(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/compass/wx.stopCompass.html)
*
* 需要基础库： `1.1.0`
*
* 停止监听罗盘数据
*
* **示例代码**
*
* ```js
wx.stopCompass()
``` */
        stopCompass<T extends StopCompassOption = StopCompassOption>(
            option?: T
        ): PromisifySuccessResult<T, StopCompassOption>
        /** [wx.stopDeviceMotionListening(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/motion/wx.stopDeviceMotionListening.html)
         *
         * 需要基础库： `2.3.0`
         *
         * 停止监听设备方向的变化。 */
        stopDeviceMotionListening<
            T extends StopDeviceMotionListeningOption = StopDeviceMotionListeningOption
        >(
            option?: T
        ): PromisifySuccessResult<T, StopDeviceMotionListeningOption>
        /** [wx.stopFaceDetect(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ai/face/wx.stopFaceDetect.html)
         *
         * 需要基础库： `2.18.0`
         *
         * @warning **该接口已停止维护，推荐使用 [wx.createVKSession](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/wx.createVKSession.html) 代替**
         *
         * 停止人脸检测。本接口不再维护，请使用 [wx.createVKSession](https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/wx.createVKSession.html) 接口代替。详情参考[人脸检测指南文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/face.html) */
        stopFaceDetect(option?: StopFaceDetectOption): void
        /** [wx.stopGyroscope(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/gyroscope/wx.stopGyroscope.html)
         *
         * 需要基础库： `2.3.0`
         *
         * 停止监听陀螺仪数据。 */
        stopGyroscope<T extends StopGyroscopeOption = StopGyroscopeOption>(
            option?: T
        ): PromisifySuccessResult<T, StopGyroscopeOption>
        /** [wx.triggerGC()](https://developers.weixin.qq.com/minigame/dev/api/base/performance/wx.triggerGC.html)
         *
         * 加快触发 JavaScriptCore 垃圾回收（Garbage Collection）。GC 时机是由 JavaScriptCore 来控制的，并不能保证调用后马上触发 GC。 */
        triggerGC(): void
        /** [wx.updateKeyboard(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.updateKeyboard.html)
         *
         * 需要基础库： `2.1.0`
         *
         * 更新键盘输入框内容。只有当键盘处于拉起状态时才会产生效果 */
        updateKeyboard<T extends UpdateKeyboardOption = UpdateKeyboardOption>(
            option: T
        ): PromisifySuccessResult<T, UpdateKeyboardOption>
        /** [wx.updateShareMenu(Object object)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.updateShareMenu.html)
*
* 需要基础库： `1.2.0`
*
* 更新转发属性
*
* ****
*
* ## 注意事项
* - bug：在iOS上，如果 withShareTicket 传了 true ，同时 isUpdatableMessage 传了 false，会导致 withShareTicket 失效。解决办法：当 withShareTicket 传了 true 的时候，isUpdatableMessage 传 true 或者不传都可以，但不要传 false。如果需要关掉动态消息设置，则另外单独调用一次 wx.updateShareMenu({ isUpdatableMessage: false }) 即可。
*
* **示例代码**
*
* ```js
wx.updateShareMenu({
  withShareTicket: true,
  success () { }
})
```
* ```js
// 转发私密消息
wx.updateShareMenu({
  isPrivateMessage: true,
  activityId: 'xxx',
  templateInfo: {},
  success () { },
  fail () {}
})
``` */
        updateShareMenu<
            T extends UpdateShareMenuOption = UpdateShareMenuOption
        >(
            option: T
        ): PromisifySuccessResult<T, UpdateShareMenuOption>
        /** [wx.updateVoIPChatMuteConfig(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.updateVoIPChatMuteConfig.html)
         *
         * 需要基础库： `2.7.0`
         *
         * 更新实时语音静音设置 */
        updateVoIPChatMuteConfig<
            T extends UpdateVoIPChatMuteConfigOption = UpdateVoIPChatMuteConfigOption
        >(
            option: T
        ): PromisifySuccessResult<T, UpdateVoIPChatMuteConfigOption>
        /** [wx.updateWeChatApp(Object object)](https://developers.weixin.qq.com/minigame/dev/api/base/update/wx.updateWeChatApp.html)
         *
         * 需要基础库： `2.12.0`
         *
         * 更新客户端版本。当判断用户小程序所在客户端版本过低时，可使用该接口跳转到更新微信页面。 */
        updateWeChatApp<
            T extends UpdateWeChatAppOption = UpdateWeChatAppOption
        >(
            option?: T
        ): PromisifySuccessResult<T, UpdateWeChatAppOption>
        /** [wx.vibrateLong(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/vibrate/wx.vibrateLong.html)
         *
         * 需要基础库： `1.2.0`
         *
         * 使手机发生较长时间的振动（400 ms) */
        vibrateLong<T extends VibrateLongOption = VibrateLongOption>(
            option?: T
        ): PromisifySuccessResult<T, VibrateLongOption>
        /** [wx.vibrateShort(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/vibrate/wx.vibrateShort.html)
         *
         * 需要基础库： `1.2.0`
         *
         * 使手机发生较短时间的振动（15 ms）。仅在 iPhone `7 / 7 Plus` 以上及 Android 机型生效 */
        vibrateShort<T extends VibrateShortOption = VibrateShortOption>(
            option: T
        ): PromisifySuccessResult<T, VibrateShortOption>
        /** [wx.writeBLECharacteristicValue(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.writeBLECharacteristicValue.html)
*
* 需要基础库： `2.9.2`
*
* 向蓝牙低功耗设备特征值中写入二进制数据。注意：必须设备的特征支持 write 才可以成功调用。
*
* **注意**
*
* - 并行调用多次会存在写失败的可能性。
* - 小程序不会对写入数据包大小做限制，但系统与蓝牙设备会限制蓝牙 4.0 单次传输的数据大小，超过最大字节数后会发生写入错误，建议每次写入不超过 20 字节。
* - 若单次写入数据过长，iOS 上存在系统不会有任何回调的情况（包括错误回调）。
* - 安卓平台上，在调用 [wx.notifyBLECharacteristicValueChange](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.notifyBLECharacteristicValueChange.html) 成功后立即调用本接口，在部分机型上会发生 10008 系统错误
*
* **示例代码**
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
// 向蓝牙设备发送一个0x00的16进制数据
let buffer = new ArrayBuffer(1)
let dataView = new DataView(buffer)
dataView.setUint8(0, 0)

wx.writeBLECharacteristicValue({
  // 这里的 deviceId 需要在 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
  deviceId,
  // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
  serviceId,
  // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
  characteristicId,
  // 这里的value是ArrayBuffer类型
  value: buffer,
  success (res) {
    console.log('writeBLECharacteristicValue success', res.errMsg)
  }
})
``` */
        writeBLECharacteristicValue<
            T extends WriteBLECharacteristicValueOption = WriteBLECharacteristicValueOption
        >(
            option: T
        ): PromisifySuccessResult<T, WriteBLECharacteristicValueOption>
        /** 小程序云开发 */
        cloud: WxCloud
        /** 文件系统中的用户目录路径 */
        env: { USER_DATA_PATH: string }
    }

    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AccessCompleteCallback = (res: FileError) => void
    /** 接口调用失败的回调函数 */
    type AccessFailCallback = (res: FileError) => void
    /** 接口调用成功的回调函数 */
    type AccessSuccessCallback = (res: FileError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AddCardCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type AddCardFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type AddCardSuccessCallback = (result: AddCardSuccessCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AddServiceCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type AddServiceFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type AddServiceSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AppendFileCompleteCallback = (res: FileError) => void
    /** 接口调用失败的回调函数 */
    type AppendFileFailCallback = (res: FileError) => void
    /** 接口调用成功的回调函数 */
    type AppendFileSuccessCallback = (res: FileError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AuthPrivateMessageCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type AuthPrivateMessageFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type AuthPrivateMessageSuccessCallback = (
        result: AuthPrivateMessageSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AuthorizeCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type AuthorizeFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type AuthorizeSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type BroadcastInRoomCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type BroadcastInRoomFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type BroadcastInRoomSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CancelMatchCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type CancelMatchFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type CancelMatchSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ChangeSeatCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ChangeSeatFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ChangeSeatSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CheckHandoffEnabledCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type CheckHandoffEnabledFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type CheckHandoffEnabledSuccessCallback = (
        result: CheckHandoffEnabledSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CheckIsAddedToMyMiniProgramCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type CheckIsAddedToMyMiniProgramFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type CheckIsAddedToMyMiniProgramSuccessCallback = (
        result: CheckIsAddedToMyMiniProgramSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CheckSessionCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type CheckSessionFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type CheckSessionSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ChooseImageCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ChooseImageFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ChooseImageSuccessCallback = (
        result: ChooseImageSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ChooseMediaCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ChooseMediaFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ChooseMediaSuccessCallback = (
        result: ChooseMediaSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ChooseMessageFileCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type ChooseMessageFileFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ChooseMessageFileSuccessCallback = (
        result: ChooseMessageFileSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ClearStorageCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ClearStorageFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ClearStorageSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CloseBLEConnectionCompleteCallback = (res: BluetoothError) => void
    /** 接口调用失败的回调函数 */
    type CloseBLEConnectionFailCallback = (res: BluetoothError) => void
    /** 接口调用成功的回调函数 */
    type CloseBLEConnectionSuccessCallback = (res: BluetoothError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CloseBluetoothAdapterCompleteCallback = (res: BluetoothError) => void
    /** 接口调用失败的回调函数 */
    type CloseBluetoothAdapterFailCallback = (res: BluetoothError) => void
    /** 接口调用成功的回调函数 */
    type CloseBluetoothAdapterSuccessCallback = (res: BluetoothError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CloseSocketCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type CloseSocketFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type CloseSocketSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CompressImageCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type CompressImageFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type CompressImageSuccessCallback = (
        result: CompressImageSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ConnectSocketCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ConnectSocketFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ConnectSocketSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CopyFileCompleteCallback = (res: FileError) => void
    /** 接口调用失败的回调函数 */
    type CopyFileFailCallback = (res: FileError) => void
    /** 接口调用成功的回调函数 */
    type CopyFileSuccessCallback = (res: FileError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CreateBLEConnectionCompleteCallback = (res: BluetoothError) => void
    /** 接口调用失败的回调函数 */
    type CreateBLEConnectionFailCallback = (res: BluetoothError) => void
    /** 接口调用成功的回调函数 */
    type CreateBLEConnectionSuccessCallback = (res: BluetoothError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CreateBLEPeripheralServerCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type CreateBLEPeripheralServerFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type CreateBLEPeripheralServerSuccessCallback = (
        result: CreateBLEPeripheralServerSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CreateCameraCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type CreateCameraFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type CreateCameraSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CreateRoomCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type CreateRoomFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type CreateRoomSuccessCallback = (
        result: CreateRoomSuccessCallbackResult
    ) => void
    /** onError 传入的监听函数。不传此参数则移除所有监听函数。 */
    type CustomAdOffErrorCallback = (
        result: CustomAdOnErrorListenerResult
    ) => void
    /** 原生模板广告错误事件的监听函数 */
    type CustomAdOnErrorCallback = (
        result: CustomAdOnErrorListenerResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type DownloadFileCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type DownloadFileFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type DownloadFileSuccessCallback = (
        result: DownloadFileSuccessCallbackResult
    ) => void
    /** onHeadersReceived 传入的监听函数。不传此参数则移除所有监听函数。 */
    type DownloadTaskOffHeadersReceivedCallback = (
        result: DownloadTaskOnHeadersReceivedListenerResult
    ) => void
    /** onProgressUpdate 传入的监听函数。不传此参数则移除所有监听函数。 */
    type DownloadTaskOffProgressUpdateCallback = (
        result: DownloadTaskOnProgressUpdateListenerResult
    ) => void
    /** HTTP Response Header 事件的监听函数 */
    type DownloadTaskOnHeadersReceivedCallback = (
        result: DownloadTaskOnHeadersReceivedListenerResult
    ) => void
    /** 下载进度变化事件的监听函数 */
    type DownloadTaskOnProgressUpdateCallback = (
        result: DownloadTaskOnProgressUpdateListenerResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type EndGameCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type EndGameFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type EndGameSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type EndStateServiceCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type EndStateServiceFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type EndStateServiceSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ExitMiniProgramCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ExitMiniProgramFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ExitMiniProgramSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ExitVoIPChatCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ExitVoIPChatFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ExitVoIPChatSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type FaceDetectCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type FaceDetectFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type FaceDetectSuccessCallback = (
        result: FaceDetectSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type FileSystemManagerCloseCompleteCallback = (res: FileError) => void
    /** 接口调用失败的回调函数 */
    type FileSystemManagerCloseFailCallback = (res: FileError) => void
    /** 接口调用成功的回调函数 */
    type FileSystemManagerCloseSuccessCallback = (res: FileError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type FstatCompleteCallback = (res: FileError) => void
    /** 接口调用失败的回调函数 */
    type FstatFailCallback = (res: FileError) => void
    /** 接口调用成功的回调函数 */
    type FstatSuccessCallback = (result: FstatSuccessCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type FtruncateCompleteCallback = (res: FileError) => void
    /** 接口调用失败的回调函数 */
    type FtruncateFailCallback = (res: FileError) => void
    /** 接口调用成功的回调函数 */
    type FtruncateSuccessCallback = (res: FileError) => void
    /** onTap 传入的监听函数。不传此参数则移除所有监听函数。 */
    type GameClubButtonOffTapCallback = (res: GeneralCallbackResult) => void
    type GameClubButtonOnTapCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetAvailableAudioSourcesCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type GetAvailableAudioSourcesFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type GetAvailableAudioSourcesSuccessCallback = (
        result: GetAvailableAudioSourcesSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBLEDeviceCharacteristicsCompleteCallback = (
        res: BluetoothError
    ) => void
    /** 接口调用失败的回调函数 */
    type GetBLEDeviceCharacteristicsFailCallback = (res: BluetoothError) => void
    /** 接口调用成功的回调函数 */
    type GetBLEDeviceCharacteristicsSuccessCallback = (
        result: GetBLEDeviceCharacteristicsSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBLEDeviceRSSICompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetBLEDeviceRSSIFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetBLEDeviceRSSISuccessCallback = (
        result: GetBLEDeviceRSSISuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBLEDeviceServicesCompleteCallback = (res: BluetoothError) => void
    /** 接口调用失败的回调函数 */
    type GetBLEDeviceServicesFailCallback = (res: BluetoothError) => void
    /** 接口调用成功的回调函数 */
    type GetBLEDeviceServicesSuccessCallback = (
        result: GetBLEDeviceServicesSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBLEMTUCompleteCallback = (res: BluetoothError) => void
    /** 接口调用失败的回调函数 */
    type GetBLEMTUFailCallback = (res: BluetoothError) => void
    /** 接口调用成功的回调函数 */
    type GetBLEMTUSuccessCallback = (
        result: GetBLEMTUSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBackgroundFetchDataCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type GetBackgroundFetchDataFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type GetBackgroundFetchDataSuccessCallback = (
        result: GetBackgroundFetchDataSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBackgroundFetchTokenCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type GetBackgroundFetchTokenFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type GetBackgroundFetchTokenSuccessCallback = (
        result: GetBackgroundFetchTokenSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBatteryInfoCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetBatteryInfoFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetBatteryInfoSuccessCallback = (
        result: GetBatteryInfoSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBeaconsCompleteCallback = (res: BeaconError) => void
    /** 接口调用失败的回调函数 */
    type GetBeaconsFailCallback = (res: BeaconError) => void
    /** 接口调用成功的回调函数 */
    type GetBeaconsSuccessCallback = (
        result: GetBeaconsSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBluetoothAdapterStateCompleteCallback = (
        res: BluetoothError
    ) => void
    /** 接口调用失败的回调函数 */
    type GetBluetoothAdapterStateFailCallback = (res: BluetoothError) => void
    /** 接口调用成功的回调函数 */
    type GetBluetoothAdapterStateSuccessCallback = (
        result: GetBluetoothAdapterStateSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBluetoothDevicesCompleteCallback = (res: BluetoothError) => void
    /** 接口调用失败的回调函数 */
    type GetBluetoothDevicesFailCallback = (res: BluetoothError) => void
    /** 接口调用成功的回调函数 */
    type GetBluetoothDevicesSuccessCallback = (
        result: GetBluetoothDevicesSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetChannelsLiveInfoCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type GetChannelsLiveInfoFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetChannelsLiveInfoSuccessCallback = (
        result: GetChannelsLiveInfoSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetChannelsLiveNoticeInfoCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type GetChannelsLiveNoticeInfoFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type GetChannelsLiveNoticeInfoSuccessCallback = (
        result: GetChannelsLiveNoticeInfoSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetClipboardDataCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetClipboardDataFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetClipboardDataSuccessCallback = (
        option: GetClipboardDataSuccessCallbackOption
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetConnectedBluetoothDevicesCompleteCallback = (
        res: BluetoothError
    ) => void
    /** 接口调用失败的回调函数 */
    type GetConnectedBluetoothDevicesFailCallback = (
        res: BluetoothError
    ) => void
    /** 接口调用成功的回调函数 */
    type GetConnectedBluetoothDevicesSuccessCallback = (
        result: GetConnectedBluetoothDevicesSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetDeviceBenchmarkInfoCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type GetDeviceBenchmarkInfoFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type GetDeviceBenchmarkInfoSuccessCallback = (
        result: GetDeviceBenchmarkInfoSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetExtConfigCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetExtConfigFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetExtConfigSuccessCallback = (
        result: GetExtConfigSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetFileInfoCompleteCallback = (res: FileError) => void
    /** 接口调用失败的回调函数 */
    type GetFileInfoFailCallback = (res: FileError) => void
    /** 接口调用成功的回调函数 */
    type GetFileInfoSuccessCallback = (
        result: GetFileInfoSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetFriendCloudStorageCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type GetFriendCloudStorageFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type GetFriendCloudStorageSuccessCallback = (
        result: GetFriendCloudStorageSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetFriendsStateDataCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type GetFriendsStateDataFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetFriendsStateDataSuccessCallback = (
        result: GetFriendsStateDataSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetFuzzyLocationCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetFuzzyLocationFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetFuzzyLocationSuccessCallback = (
        result: GetFuzzyLocationSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetGameClubDataCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetGameClubDataFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetGameClubDataSuccessCallback = (
        result: GetGameClubDataSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetGroupCloudStorageCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type GetGroupCloudStorageFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetGroupCloudStorageSuccessCallback = (
        result: GetGroupCloudStorageSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetGroupEnterInfoCompleteCallback = (
        res: GetGroupEnterInfoError
    ) => void
    /** 接口调用失败的回调函数 */
    type GetGroupEnterInfoFailCallback = (res: GetGroupEnterInfoError) => void
    /** 接口调用成功的回调函数 */
    type GetGroupEnterInfoSuccessCallback = (
        result: GetGroupEnterInfoSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetGroupInfoCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetGroupInfoFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetGroupInfoSuccessCallback = (
        result: GetGroupInfoSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetInferenceEnvInfoCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type GetInferenceEnvInfoFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetInferenceEnvInfoSuccessCallback = (
        result: GetInferenceEnvInfoSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetLastRoomInfoCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetLastRoomInfoFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetLastRoomInfoSuccessCallback = (
        result: GetLastRoomInfoSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetLatestUserKeyCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetLatestUserKeyFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetLatestUserKeySuccessCallback = (
        result: GetLatestUserKeySuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetLocalIPAddressCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type GetLocalIPAddressFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetLocalIPAddressSuccessCallback = (
        result: GetLocalIPAddressSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetLocationCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetLocationFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetLocationSuccessCallback = (
        result: GetLocationSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetLostFramesCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetLostFramesFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetLostFramesSuccessCallback = (
        result: GetLostFramesSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetNetworkTypeCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetNetworkTypeFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetNetworkTypeSuccessCallback = (
        result: GetNetworkTypeSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetPhoneNumberCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetPhoneNumberFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetPhoneNumberSuccessCallback = (
        result: GetPhoneNumberSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetPotentialFriendListCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type GetPotentialFriendListFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type GetPotentialFriendListSuccessCallback = (
        result: GetPotentialFriendListSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetPrivacySettingCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type GetPrivacySettingFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetPrivacySettingSuccessCallback = (
        result: GetPrivacySettingSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetRandomValuesCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetRandomValuesFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetRandomValuesSuccessCallback = (
        result: GetRandomValuesSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetRoomInfoCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetRoomInfoFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetRoomInfoSuccessCallback = (
        result: GetRoomInfoSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetSavedFileListCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetSavedFileListFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetSavedFileListSuccessCallback = (
        result: GetSavedFileListSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetScreenBrightnessCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type GetScreenBrightnessFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetScreenBrightnessSuccessCallback = (
        option: GetScreenBrightnessSuccessCallbackOption
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetScreenRecordingStateCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type GetScreenRecordingStateFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type GetScreenRecordingStateSuccessCallback = (
        result: GetScreenRecordingStateSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetSettingCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetSettingFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetSettingSuccessCallback = (
        result: GetSettingSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetShareInfoCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetShareInfoFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetShareInfoSuccessCallback = (
        result: GetGroupEnterInfoSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetShowSplashAdStatusCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type GetShowSplashAdStatusFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type GetShowSplashAdStatusSuccessCallback = (
        result: GetShowSplashAdStatusSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetStorageCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetStorageFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetStorageInfoCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetStorageInfoFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetStorageInfoSuccessCallback = (
        option: GetStorageInfoSuccessCallbackOption
    ) => void
    /** 接口调用成功的回调函数 */
    type GetStorageSuccessCallback<T = any> = (
        result: GetStorageSuccessCallbackResult<T>
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetSystemInfoAsyncCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type GetSystemInfoAsyncFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetSystemInfoAsyncSuccessCallback = (result: SystemInfo) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetSystemInfoCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetSystemInfoFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetSystemInfoSuccessCallback = (result: SystemInfo) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetTextLineHeightCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type GetTextLineHeightFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetTextLineHeightSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetUserCloudStorageCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type GetUserCloudStorageFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetUserCloudStorageKeysCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type GetUserCloudStorageKeysFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type GetUserCloudStorageKeysSuccessCallback = (
        result: GetUserCloudStorageKeysSuccessCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type GetUserCloudStorageSuccessCallback = (
        result: GetUserCloudStorageSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetUserInfoCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetUserInfoFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetUserInfoSuccessCallback = (
        result: GetUserInfoSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetUserInteractiveStorageCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type GetUserInteractiveStorageFailCallback = (
        result: GetUserInteractiveStorageFailCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type GetUserInteractiveStorageSuccessCallback = (
        result: GetUserInteractiveStorageSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetWeRunDataCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetWeRunDataFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetWeRunDataSuccessCallback = (
        result: GetWeRunDataSuccessCallbackResult
    ) => void
    /** onError 传入的监听函数。不传此参数则移除所有监听函数。 */
    type GridAdOffErrorCallback = (result: GridAdOnErrorListenerResult) => void
    type GridAdOnErrorCallback = (result: GridAdOnErrorListenerResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type HideKeyboardCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type HideKeyboardFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type HideKeyboardSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type HideLoadingCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type HideLoadingFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type HideLoadingSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type HideShareMenuCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type HideShareMenuFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type HideShareMenuSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type HideToastCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type HideToastFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type HideToastSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type InitFaceDetectCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type InitFaceDetectFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type InitFaceDetectSuccessCallback = (res: GeneralCallbackResult) => void
    /** onError 传入的监听函数。不传此参数则移除所有监听函数。 */
    type InnerAudioContextOffErrorCallback = (
        result: InnerAudioContextOnErrorListenerResult
    ) => void
    /** onTimeUpdate 传入的监听函数。不传此参数则移除所有监听函数。 */
    type InnerAudioContextOffTimeUpdateCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 音频播放错误事件的监听函数 */
    type InnerAudioContextOnErrorCallback = (
        result: InnerAudioContextOnErrorListenerResult
    ) => void
    /** 音频停止事件的监听函数 */
    type InnerAudioContextOnStopCallback = (res: GeneralCallbackResult) => void
    /** 音频播放进度更新事件的监听函数 */
    type InnerAudioContextOnTimeUpdateCallback = (
        res: GeneralCallbackResult
    ) => void
    /** onError 传入的监听函数。不传此参数则移除所有监听函数。 */
    type InterstitialAdOffErrorCallback = (
        result: InterstitialAdOnErrorListenerResult
    ) => void
    /** 插屏错误事件的监听函数 */
    type InterstitialAdOnErrorCallback = (
        result: InterstitialAdOnErrorListenerResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type InviteFriendCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type InviteFriendFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type InviteFriendSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type IsBluetoothDevicePairedCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type IsBluetoothDevicePairedFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type IsBluetoothDevicePairedSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type JoinRoomCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type JoinRoomFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type JoinRoomSuccessCallback = (
        result: JoinRoomSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type JoinVoIPChatCompleteCallback = (res: JoinVoIPChatError) => void
    /** 接口调用失败的回调函数 */
    type JoinVoIPChatFailCallback = (res: JoinVoIPChatError) => void
    /** 接口调用成功的回调函数 */
    type JoinVoIPChatSuccessCallback = (
        result: JoinVoIPChatSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type KickoutMemberCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type KickoutMemberFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type KickoutMemberSuccessCallback = (res: GeneralCallbackResult) => void
    /** 分包加载进度变化事件的监听函数 */
    type LoadSubpackageTaskOnProgressUpdateCallback = (
        result: LoadSubpackageTaskOnProgressUpdateListenerResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type LoginCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type LoginFailCallback = (err: RequestFailCallbackErr) => void
    /** 接口调用成功的回调函数 */
    type LoginSuccessCallback = (result: LoginSuccessCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type MakeBluetoothPairCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type MakeBluetoothPairFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type MakeBluetoothPairSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type MemberLeaveRoomCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type MemberLeaveRoomFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type MemberLeaveRoomSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type MkdirCompleteCallback = (res: FileError) => void
    /** 接口调用失败的回调函数 */
    type MkdirFailCallback = (res: FileError) => void
    /** 接口调用成功的回调函数 */
    type MkdirSuccessCallback = (res: FileError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ModifyFriendInteractiveStorageCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type ModifyFriendInteractiveStorageFailCallback = (
        result: ModifyFriendInteractiveStorageFailCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type ModifyFriendInteractiveStorageSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type NavigateBackMiniProgramCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type NavigateBackMiniProgramFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type NavigateBackMiniProgramSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type NavigateToMiniProgramCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type NavigateToMiniProgramFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type NavigateToMiniProgramSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type NotifyBLECharacteristicValueChangeCompleteCallback = (
        res: BluetoothError
    ) => void
    /** 接口调用失败的回调函数 */
    type NotifyBLECharacteristicValueChangeFailCallback = (
        res: BluetoothError
    ) => void
    /** 接口调用成功的回调函数 */
    type NotifyBLECharacteristicValueChangeSuccessCallback = (
        res: BluetoothError
    ) => void
    /** onAccelerometerChange 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffAccelerometerChangeCallback = (res: GeneralCallbackResult) => void
    /** onAudioInterruptionBegin 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffAudioInterruptionBeginCallback = (
        res: GeneralCallbackResult
    ) => void
    /** onAudioInterruptionEnd 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffAudioInterruptionEndCallback = (res: GeneralCallbackResult) => void
    /** onBLEConnectionStateChange 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffBLEConnectionStateChangeCallback = (
        result: OnBLEConnectionStateChangeListenerResult
    ) => void
    /** onBLEMTUChange 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffBLEMTUChangeCallback = (
        result: OnBLEMTUChangeListenerResult
    ) => void
    /** onBLEPeripheralConnectionStateChanged 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffBLEPeripheralConnectionStateChangedCallback = (
        result: OnBLEPeripheralConnectionStateChangedListenerResult
    ) => void
    /** onBeKickedOut 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffBeKickedOutCallback = (result: OnBeKickedOutListenerResult) => void
    /** onBindWifi 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffBindWifiCallback = (res: GeneralCallbackResult) => void
    /** onBroadcast 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffBroadcastCallback = (result: OnBroadcastListenerResult) => void
    /** onCanplay 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffCanplayCallback = (res: GeneralCallbackResult) => void
    /** onCharacteristicReadRequest 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffCharacteristicReadRequestCallback = (
        result: OnCharacteristicReadRequestListenerResult
    ) => void
    /** onCharacteristicSubscribed 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffCharacteristicSubscribedCallback = (
        result: OnCharacteristicSubscribedListenerResult
    ) => void
    /** onCharacteristicUnsubscribed 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffCharacteristicUnsubscribedCallback = (
        result: OnCharacteristicSubscribedListenerResult
    ) => void
    /** onCharacteristicWriteRequest 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffCharacteristicWriteRequestCallback = (
        result: OnCharacteristicWriteRequestListenerResult
    ) => void
    /** onChunkReceived 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffChunkReceivedCallback = (
        result: OnChunkReceivedListenerResult
    ) => void
    /** onCompassChange 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffCompassChangeCallback = (res: GeneralCallbackResult) => void
    /** onConnect 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffConnectCallback = (result: OnConnectListenerResult) => void
    /** onDeviceMotionChange 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffDeviceMotionChangeCallback = (res: GeneralCallbackResult) => void
    /** onDeviceOrientationChange 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffDeviceOrientationChangeCallback = (
        result: OnDeviceOrientationChangeListenerResult
    ) => void
    /** onDisconnect 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffDisconnectCallback = (
        result: GameServerManagerOnDisconnectListenerResult
    ) => void
    /** onEnded 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffEndedCallback = (res: GeneralCallbackResult) => void
    /** onGameEnd 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffGameEndCallback = (result: OnGameEndListenerResult) => void
    /** onGameStart 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffGameStartCallback = (res: GeneralCallbackResult) => void
    /** onGyroscopeChange 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffGyroscopeChangeCallback = (res: GeneralCallbackResult) => void
    /** onHide 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffHideCallback = (res: GeneralCallbackResult) => void
    /** onInvite 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffInviteCallback = (result: OnInviteListenerResult) => void
    /** onKeyDown 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffKeyDownCallback = (result: OnKeyDownListenerResult) => void
    /** onKeyUp 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffKeyUpCallback = (result: OnKeyDownListenerResult) => void
    /** onKeyboardComplete 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffKeyboardCompleteCallback = (
        result: OnKeyboardInputListenerResult
    ) => void
    /** onKeyboardConfirm 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffKeyboardConfirmCallback = (
        result: OnKeyboardInputListenerResult
    ) => void
    /** onKeyboardHeightChange 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffKeyboardHeightChangeCallback = (
        result: OnKeyboardHeightChangeListenerResult
    ) => void
    /** onKeyboardInput 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffKeyboardInputCallback = (
        result: OnKeyboardInputListenerResult
    ) => void
    /** onListening 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffListeningCallback = (res: GeneralCallbackResult) => void
    /** onLoad 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffLoadCallback = (res: GeneralCallbackResult) => void
    /** onLockStepError 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffLockStepErrorCallback = (
        result: OnLockStepErrorListenerResult
    ) => void
    /** onLogout 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffLogoutCallback = (res: GeneralCallbackResult) => void
    /** onMatch 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffMatchCallback = (
        result: GameServerManagerOnMatchListenerResult
    ) => void
    /** onMemoryWarning 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffMemoryWarningCallback = (
        result: OnMemoryWarningListenerResult
    ) => void
    /** onMouseDown 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffMouseDownCallback = (result: OnMouseDownListenerResult) => void
    /** onMouseMove 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffMouseMoveCallback = (result: OnMouseMoveListenerResult) => void
    /** onMouseUp 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffMouseUpCallback = (result: OnMouseDownListenerResult) => void
    /** onNetworkStatusChange 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffNetworkStatusChangeCallback = (res: GeneralCallbackResult) => void
    /** onNetworkWeakChange 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffNetworkWeakChangeCallback = (
        result: OnNetworkWeakChangeListenerResult
    ) => void
    /** onPause 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffPauseCallback = (res: GeneralCallbackResult) => void
    /** onPlay 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffPlayCallback = (res: GeneralCallbackResult) => void
    /** onProgress 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffProgressCallback = (result: OnProgressListenerResult) => void
    /** onResize 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffResizeCallback = (result: OnResizeListenerResult) => void
    /** onRoomInfoChange 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffRoomInfoChangeCallback = (
        result: GameServerManagerOnRoomInfoChangeListenerResult
    ) => void
    /** onScreenRecordingStateChanged 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffScreenRecordingStateChangedCallback = (
        result: OnScreenRecordingStateChangedListenerResult
    ) => void
    /** onSeeked 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffSeekedCallback = (res: GeneralCallbackResult) => void
    /** onSeeking 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffSeekingCallback = (res: GeneralCallbackResult) => void
    /** onShareAppMessage 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffShareAppMessageCallback = (
        result: OnShareAppMessageListenerResult
    ) => void
    /** onShareMessageToFriend 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffShareMessageToFriendCallback = (
        result: OnShareMessageToFriendListenerResult
    ) => void
    /** onShareTimeline 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffShareTimelineCallback = (
        result: OnShareTimelineListenerResult
    ) => void
    /** onShow 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffShowCallback = (result: OnShowListenerResult) => void
    /** onStateUpdate 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffStateUpdateCallback = (
        result: GameServerManagerOnStateUpdateListenerResult
    ) => void
    /** onStop 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffStopCallback = (res: GeneralCallbackResult) => void
    /** onSyncFrame 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffSyncFrameCallback = (result: OnSyncFrameListenerResult) => void
    /** onTouchCancel 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffTouchCancelCallback = (result: OnTouchStartListenerResult) => void
    /** onTouchEnd 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffTouchEndCallback = (result: OnTouchStartListenerResult) => void
    /** onTouchMove 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffTouchMoveCallback = (result: OnTouchStartListenerResult) => void
    /** onTouchStart 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffTouchStartCallback = (result: OnTouchStartListenerResult) => void
    /** onUnhandledRejection 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffUnhandledRejectionCallback = (
        result: OnUnhandledRejectionListenerResult
    ) => void
    /** onVoIPChatInterrupted 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffVoIPChatInterruptedCallback = (
        result: OnVoIPChatInterruptedListenerResult
    ) => void
    /** onVoIPChatMembersChanged 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffVoIPChatMembersChangedCallback = (
        result: OnVoIPChatMembersChangedListenerResult
    ) => void
    /** onVoIPChatSpeakersChanged 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffVoIPChatSpeakersChangedCallback = (
        result: OnVoIPChatSpeakersChangedListenerResult
    ) => void
    /** onVoIPChatStateChanged 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffVoIPChatStateChangedCallback = (
        result: OnVoIPChatStateChangedListenerResult
    ) => void
    /** onWaiting 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffWaitingCallback = (res: GeneralCallbackResult) => void
    /** onWheel 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffWheelCallback = (result: OnWheelListenerResult) => void
    /** onWindowResize 传入的监听函数。不传此参数则移除所有监听函数。 */
    type OffWindowResizeCallback = (
        result: OnWindowResizeListenerResult
    ) => void
    /** 加速度数据事件的监听函数 */
    type OnAccelerometerChangeCallback = (
        result: OnAccelerometerChangeListenerResult
    ) => void
    /** 用户点击菜单「收藏」按钮时触发的事件的监听函数 */
    type OnAddToFavoritesCallback = (
        result: OnAddToFavoritesListenerResult
    ) => void
    /** 音频因为受到系统占用而被中断开始事件的监听函数 */
    type OnAudioInterruptionBeginCallback = (res: GeneralCallbackResult) => void
    /** 音频中断结束事件的监听函数 */
    type OnAudioInterruptionEndCallback = (res: GeneralCallbackResult) => void
    /** 蓝牙低功耗设备的特征值变化事件的监听函数 */
    type OnBLECharacteristicValueChangeCallback = (
        result: OnBLECharacteristicValueChangeListenerResult
    ) => void
    /** 蓝牙低功耗连接状态改变事件的监听函数 */
    type OnBLEConnectionStateChangeCallback = (
        result: OnBLEConnectionStateChangeListenerResult
    ) => void
    /** 蓝牙低功耗的最大传输单元变化事件的监听函数 */
    type OnBLEMTUChangeCallback = (result: OnBLEMTUChangeListenerResult) => void
    /** 当前外围设备被连接或断开连接事件的监听函数 */
    type OnBLEPeripheralConnectionStateChangedCallback = (
        result: OnBLEPeripheralConnectionStateChangedListenerResult
    ) => void
    /** 收到 backgroundFetch 数据事件的监听函数 */
    type OnBackgroundFetchDataCallback = (
        result: OnBackgroundFetchDataListenerResult
    ) => void
    /** 的监听函数 */
    type OnBeKickedOutCallback = (result: OnBeKickedOutListenerResult) => void
    /** Beacon 服务状态变化事件的监听函数 */
    type OnBeaconServiceChangeCallback = (
        result: OnBeaconServiceChangeListenerResult
    ) => void
    /** Beacon 设备更新事件的监听函数 */
    type OnBeaconUpdateCallback = (result: OnBeaconUpdateListenerResult) => void
    /** 当一个 socket 绑定当前 wifi 网络成功时触发该事件的监听函数 */
    type OnBindWifiCallback = (res: GeneralCallbackResult) => void
    /** 蓝牙适配器状态变化事件的监听函数 */
    type OnBluetoothAdapterStateChangeCallback = (
        result: OnBluetoothAdapterStateChangeListenerResult
    ) => void
    /** 搜索到新设备的事件的监听函数 */
    type OnBluetoothDeviceFoundCallback = (
        result: OnBluetoothDeviceFoundListenerResult
    ) => void
    /** 的监听函数 */
    type OnBroadcastCallback = (result: OnBroadcastListenerResult) => void
    /** 摄像头返回实时帧数据的回调函数 */
    type OnCameraFrameCallback = (result: OnCameraFrameCallbackResult) => void
    /** 音频进入可以播放状态的事件的监听函数 */
    type OnCanplayCallback = (res: GeneralCallbackResult) => void
    /** 已连接的设备请求读当前外围设备的特征值事件的监听函数 */
    type OnCharacteristicReadRequestCallback = (
        result: OnCharacteristicReadRequestListenerResult
    ) => void
    /** 特征订阅事件的监听函数 */
    type OnCharacteristicSubscribedCallback = (
        result: OnCharacteristicSubscribedListenerResult
    ) => void
    /** 取消特征订阅事件的监听函数 */
    type OnCharacteristicUnsubscribedCallback = (
        result: OnCharacteristicSubscribedListenerResult
    ) => void
    /** 已连接的设备请求写当前外围设备的特征值事件的监听函数 */
    type OnCharacteristicWriteRequestCallback = (
        result: OnCharacteristicWriteRequestListenerResult
    ) => void
    /** 向微信后台请求检查更新结果事件的监听函数 */
    type OnCheckForUpdateCallback = (
        result: OnCheckForUpdateListenerResult
    ) => void
    /** Transfer-Encoding Chunk Received 事件的监听函数 */
    type OnChunkReceivedCallback = (
        result: OnChunkReceivedListenerResult
    ) => void
    /** 罗盘数据变化事件的监听函数 */
    type OnCompassChangeCallback = (
        result: OnCompassChangeListenerResult
    ) => void
    /** 当一个 socket 连接成功建立的时候触发该事件的监听函数 */
    type OnConnectCallback = (result: OnConnectListenerResult) => void
    /** 用户点击右上角菜单的「复制链接」按钮时触发的事件的监听函数 */
    type OnCopyUrlCallback = (result: OnCopyUrlListenerResult) => void
    /** 设备方向变化事件的监听函数 */
    type OnDeviceMotionChangeCallback = (
        result: OnDeviceMotionChangeListenerResult
    ) => void
    /** 屏幕转向切换事件的监听函数 */
    type OnDeviceOrientationChangeCallback = (
        result: OnDeviceOrientationChangeListenerResult
    ) => void
    /** 断开连接，收到此事件的监听函数 */
    type OnDisconnectCallback = (
        result: GameServerManagerOnDisconnectListenerResult
    ) => void
    type OnEndedCallback = (res: GeneralCallbackResult) => void
    /** 已录制完指定帧大小的文件事件的监听函数 */
    type OnFrameRecordedCallback = (
        result: OnFrameRecordedListenerResult
    ) => void
    /** 的监听函数 */
    type OnGameEndCallback = (result: OnGameEndListenerResult) => void
    /** 的监听函数 */
    type OnGameStartCallback = (res: GeneralCallbackResult) => void
    /** 用户已连接游戏手柄的事件的监听函数 */
    type OnGamepadConnectedCallback = (
        result: OnGamepadConnectedListenerResult
    ) => void
    /** 用户断开游戏手柄的事件的监听函数 */
    type OnGamepadDisconnectedCallback = (
        result: OnGamepadDisconnectedListenerResult
    ) => void
    /** 陀螺仪数据变化事件的监听函数 */
    type OnGyroscopeChangeCallback = (
        result: OnGyroscopeChangeListenerResult
    ) => void
    /** 用户点击菜单「在电脑上打开」按钮时触发的事件的监听函数 */
    type OnHandoffCallback = (result: OnHandoffListenerResult) => void
    type OnHideCallback = (res: GeneralCallbackResult) => void
    /** 录音因为受到系统占用而被中断开始事件的监听函数 */
    type OnInterruptionBeginCallback = (res: GeneralCallbackResult) => void
    /** 录音中断结束事件的监听函数 */
    type OnInterruptionEndCallback = (res: GeneralCallbackResult) => void
    /** 接收邀请，当用户确认邀请之后会收到此事件的监听函数 */
    type OnInviteCallback = (result: OnInviteListenerResult) => void
    /** 键盘按键按下事件的监听函数 */
    type OnKeyDownCallback = (result: OnKeyDownListenerResult) => void
    /** 键盘按键弹起事件的监听函数 */
    type OnKeyUpCallback = (result: OnKeyDownListenerResult) => void
    /** 键盘收起的事件的监听函数 */
    type OnKeyboardCompleteCallback = (
        result: OnKeyboardInputListenerResult
    ) => void
    /** 用户点击键盘 Confirm 按钮时的事件的监听函数 */
    type OnKeyboardConfirmCallback = (
        result: OnKeyboardInputListenerResult
    ) => void
    /** 键盘高度变化事件的监听函数 */
    type OnKeyboardHeightChangeCallback = (
        result: OnKeyboardHeightChangeListenerResult
    ) => void
    /** 键盘输入事件的监听函数 */
    type OnKeyboardInputCallback = (
        result: OnKeyboardInputListenerResult
    ) => void
    /** 开始监听数据包消息的事件的监听函数 */
    type OnListeningCallback = (res: GeneralCallbackResult) => void
    type OnLoadCallback = (res: GeneralCallbackResult) => void
    /** 的监听函数 */
    type OnLockStepErrorCallback = (
        result: OnLockStepErrorListenerResult
    ) => void
    /** 用户登出游戏服务事件的监听函数 */
    type OnLogoutCallback = (res: GeneralCallbackResult) => void
    /** 游戏匹配成功的事件的监听函数 */
    type OnMatchCallback = (
        result: GameServerManagerOnMatchListenerResult
    ) => void
    /** 内存不足告警事件的监听函数 */
    type OnMemoryWarningCallback = (
        result: OnMemoryWarningListenerResult
    ) => void
    /** 鼠标按键按下事件的监听函数 */
    type OnMouseDownCallback = (result: OnMouseDownListenerResult) => void
    /** 鼠标移动事件的监听函数 */
    type OnMouseMoveCallback = (result: OnMouseMoveListenerResult) => void
    /** 鼠标按键弹起事件的监听函数 */
    type OnMouseUpCallback = (result: OnMouseDownListenerResult) => void
    /** 隐私接口需要用户授权事件的监听函数 */
    type OnNeedPrivacyAuthorizationCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 网络状态变化事件的监听函数 */
    type OnNetworkStatusChangeCallback = (
        result: OnNetworkStatusChangeListenerResult
    ) => void
    /** 弱网状态变化事件的监听函数 */
    type OnNetworkWeakChangeCallback = (
        result: OnNetworkWeakChangeListenerResult
    ) => void
    /** WebSocket 连接打开事件的监听函数 */
    type OnOpenCallback = (result: OnOpenListenerResult) => void
    type OnPauseCallback = (res: GeneralCallbackResult) => void
    type OnPlayCallback = (res: GeneralCallbackResult) => void
    /** worker线程被系统回收事件的监听函数 */
    type OnProcessKilledCallback = (res: GeneralCallbackResult) => void
    /** 视频下载（缓冲）事件的监听函数 */
    type OnProgressCallback = (result: OnProgressListenerResult) => void
    type OnResizeCallback = (result: OnResizeListenerResult) => void
    /** 录音继续事件的监听函数 */
    type OnResumeCallback = (res: GeneralCallbackResult) => void
    /** 的监听函数 */
    type OnRoomInfoChangeCallback = (
        result: GameServerManagerOnRoomInfoChangeListenerResult
    ) => void
    /** 用户录屏事件的监听函数 */
    type OnScreenRecordingStateChangedCallback = (
        result: OnScreenRecordingStateChangedListenerResult
    ) => void
    /** 音频完成跳转操作的事件的监听函数 */
    type OnSeekedCallback = (res: GeneralCallbackResult) => void
    /** 音频进行跳转操作的事件的监听函数 */
    type OnSeekingCallback = (res: GeneralCallbackResult) => void
    /** 用户点击右上角菜单的「转发」按钮时触发的事件的监听函数 */
    type OnShareAppMessageCallback = (
        result: OnShareAppMessageListenerResult
    ) => void
    /** 主域接收`wx.shareMessageToFriend`接口的成功失败通知事件的监听函数 */
    type OnShareMessageToFriendCallback = (
        result: OnShareMessageToFriendListenerResult
    ) => void
    /** 用户点击右上角菜单的「分享到朋友圈」按钮时触发的事件的监听函数 */
    type OnShareTimelineCallback = (
        result: OnShareTimelineListenerResult
    ) => void
    /** 小游戏回到前台的事件的监听函数 */
    type OnShowCallback = (result: OnShowListenerResult) => void
    /** WebSocket 连接关闭事件的监听函数 */
    type OnSocketCloseCallback = (
        result: SocketTaskOnCloseListenerResult
    ) => void
    /** WebSocket 错误事件的监听函数 */
    type OnSocketErrorCallback = (result: GeneralCallbackResult) => void
    /** WebSocket 接收到服务器的消息事件的监听函数 */
    type OnSocketMessageCallback = (
        result: SocketTaskOnMessageListenerResult
    ) => void
    /** WebSocket 连接打开事件的监听函数 */
    type OnSocketOpenCallback = (result: OnSocketOpenListenerResult) => void
    /** 录音开始事件的监听函数 */
    type OnStartCallback = (res: GeneralCallbackResult) => void
    /** 的监听函数 */
    type OnStateUpdateCallback = (
        result: GameServerManagerOnStateUpdateListenerResult
    ) => void
    /** 的监听函数 */
    type OnSyncFrameCallback = (result: OnSyncFrameListenerResult) => void
    /** 触点失效事件的监听函数 */
    type OnTouchCancelCallback = (result: OnTouchStartListenerResult) => void
    /** 触摸结束事件的监听函数 */
    type OnTouchEndCallback = (result: OnTouchStartListenerResult) => void
    /** 触点移动事件的监听函数 */
    type OnTouchMoveCallback = (result: OnTouchStartListenerResult) => void
    /** 开始触摸事件的监听函数 */
    type OnTouchStartCallback = (result: OnTouchStartListenerResult) => void
    /** 未处理的 Promise 拒绝事件的监听函数 */
    type OnUnhandledRejectionCallback = (
        result: OnUnhandledRejectionListenerResult
    ) => void
    /** 小程序更新失败事件的监听函数 */
    type OnUpdateFailedCallback = (res: GeneralCallbackResult) => void
    /** 小程序有版本更新事件的监听函数 */
    type OnUpdateReadyCallback = (res: GeneralCallbackResult) => void
    /** 用户主动截屏事件的监听函数 */
    type OnUserCaptureScreenCallback = (
        result: OnUserCaptureScreenListenerResult
    ) => void
    /** 被动断开实时语音通话事件的监听函数 */
    type OnVoIPChatInterruptedCallback = (
        result: OnVoIPChatInterruptedListenerResult
    ) => void
    /** 实时语音通话成员在线状态变化事件的监听函数 */
    type OnVoIPChatMembersChangedCallback = (
        result: OnVoIPChatMembersChangedListenerResult
    ) => void
    /** 实时语音通话成员通话状态变化事件的监听函数 */
    type OnVoIPChatSpeakersChangedCallback = (
        result: OnVoIPChatSpeakersChangedListenerResult
    ) => void
    /** 房间状态变化事件的监听函数 */
    type OnVoIPChatStateChangedCallback = (
        result: OnVoIPChatStateChangedListenerResult
    ) => void
    type OnWaitingCallback = (res: GeneralCallbackResult) => void
    /** 鼠标滚轮事件的监听函数 */
    type OnWheelCallback = (result: OnWheelListenerResult) => void
    /** 窗口尺寸变化事件的监听函数 */
    type OnWindowResizeCallback = (result: OnWindowResizeListenerResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OpenAppAuthorizeSettingCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type OpenAppAuthorizeSettingFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type OpenAppAuthorizeSettingSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OpenBluetoothAdapterCompleteCallback = (res: BluetoothError) => void
    /** 接口调用失败的回调函数 */
    type OpenBluetoothAdapterFailCallback = (res: BluetoothError) => void
    /** 接口调用成功的回调函数 */
    type OpenBluetoothAdapterSuccessCallback = (res: BluetoothError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OpenCardCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type OpenCardFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type OpenCardSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OpenChannelsActivityCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type OpenChannelsActivityFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type OpenChannelsActivitySuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OpenChannelsEventCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type OpenChannelsEventFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type OpenChannelsEventSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OpenChannelsLiveCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type OpenChannelsLiveFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type OpenChannelsLiveSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OpenChannelsUserProfileCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type OpenChannelsUserProfileFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type OpenChannelsUserProfileSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OpenCompleteCallback = (res: FileError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OpenCustomerServiceChatCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type OpenCustomerServiceChatFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type OpenCustomerServiceChatSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OpenCustomerServiceConversationCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type OpenCustomerServiceConversationFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type OpenCustomerServiceConversationSuccessCallback = (
        result: OpenCustomerServiceConversationSuccessCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type OpenFailCallback = (res: FileError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OpenPrivacyContractCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type OpenPrivacyContractFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type OpenPrivacyContractSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OpenSettingCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type OpenSettingFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type OpenSettingSuccessCallback = (
        result: OpenSettingSuccessCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type OpenSuccessCallback = (result: OpenSuccessCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OpenSystemBluetoothSettingCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type OpenSystemBluetoothSettingFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type OpenSystemBluetoothSettingSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OperateGameRecorderVideoCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type OperateGameRecorderVideoFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type OperateGameRecorderVideoSuccessCallback = (
        /** 拥有errCode和errMsg属性，记录分享到游戏中心的状态 */
        shareToGameCenter: IAnyObject
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OwnerLeaveRoomCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type OwnerLeaveRoomFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type OwnerLeaveRoomSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type PreviewImageCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type PreviewImageFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type PreviewImageSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type PreviewMediaCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type PreviewMediaFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type PreviewMediaSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ReadBLECharacteristicValueCompleteCallback = (
        res: BluetoothError
    ) => void
    /** 接口调用失败的回调函数 */
    type ReadBLECharacteristicValueFailCallback = (res: BluetoothError) => void
    /** 接口调用成功的回调函数 */
    type ReadBLECharacteristicValueSuccessCallback = (
        res: BluetoothError
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ReadCompleteCallback = (res: FileError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ReadCompressedFileCompleteCallback = (res: FileError) => void
    /** 接口调用失败的回调函数 */
    type ReadCompressedFileFailCallback = (res: FileError) => void
    /** 接口调用成功的回调函数 */
    type ReadCompressedFileSuccessCallback = (
        result: ReadCompressedFileSuccessCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type ReadFailCallback = (res: FileError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ReadFileCompleteCallback = (res: FileError) => void
    /** 接口调用失败的回调函数 */
    type ReadFileFailCallback = (res: FileError) => void
    /** 接口调用成功的回调函数 */
    type ReadFileSuccessCallback = (
        result: ReadFileSuccessCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type ReadSuccessCallback = (result: ReadSuccessCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ReadZipEntryCompleteCallback = (res: FileError) => void
    /** 接口调用失败的回调函数 */
    type ReadZipEntryFailCallback = (res: FileError) => void
    /** 接口调用成功的回调函数 */
    type ReadZipEntrySuccessCallback = (
        result: ReadZipEntrySuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ReaddirCompleteCallback = (res: FileError) => void
    /** 接口调用失败的回调函数 */
    type ReaddirFailCallback = (res: FileError) => void
    /** 接口调用成功的回调函数 */
    type ReaddirSuccessCallback = (result: ReaddirSuccessCallbackResult) => void
    /** 录音结束事件的监听函数 */
    type RecorderManagerOnStopCallback = (result: OnStopListenerResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RemoveSavedFileCompleteCallback = (res: FileError) => void
    /** 接口调用失败的回调函数 */
    type RemoveSavedFileFailCallback = (res: FileError) => void
    /** 接口调用成功的回调函数 */
    type RemoveSavedFileSuccessCallback = (res: FileError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RemoveServiceCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type RemoveServiceFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type RemoveServiceSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RemoveStorageCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type RemoveStorageFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type RemoveStorageSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RemoveUserCloudStorageCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type RemoveUserCloudStorageFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type RemoveUserCloudStorageSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RenameCompleteCallback = (res: FileError) => void
    /** 接口调用失败的回调函数 */
    type RenameFailCallback = (res: FileError) => void
    /** 接口调用成功的回调函数 */
    type RenameSuccessCallback = (res: FileError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ReportSceneCompleteCallback = (res: ReportSceneError) => void
    /** 接口调用失败的回调函数 */
    type ReportSceneFailCallback = (err: ReportSceneFailCallbackErr) => void
    /** 接口调用成功的回调函数 */
    type ReportSceneSuccessCallback = (
        result: ReportSceneSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RequestCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type RequestFailCallback = (err: RequestFailCallbackErr) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RequestMidasFriendPaymentCompleteCallback = (
        res: MidasFriendPaymentError
    ) => void
    /** 接口调用失败的回调函数 */
    type RequestMidasFriendPaymentFailCallback = (
        res: MidasFriendPaymentError
    ) => void
    /** 接口调用成功的回调函数 */
    type RequestMidasFriendPaymentSuccessCallback = (
        result: RequestMidasFriendPaymentSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RequestMidasPaymentCompleteCallback = (res: MidasPaymentError) => void
    /** 接口调用失败的回调函数 */
    type RequestMidasPaymentFailCallback = (
        err: RequestMidasPaymentFailCallbackErr
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RequestMidasPaymentGameItemCompleteCallback = (
        res: MidasPaymentError
    ) => void
    /** 接口调用失败的回调函数 */
    type RequestMidasPaymentGameItemFailCallback = (
        res: MidasPaymentError
    ) => void
    /** 接口调用成功的回调函数 */
    type RequestMidasPaymentGameItemSuccessCallback = (
        res: MidasPaymentError
    ) => void
    /** 接口调用成功的回调函数 */
    type RequestMidasPaymentSuccessCallback = (
        result: RequestMidasPaymentSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RequestSubscribeMessageCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type RequestSubscribeMessageFailCallback = (
        result: RequestSubscribeMessageFailCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type RequestSubscribeMessageSuccessCallback = (
        result: RequestSubscribeMessageSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RequestSubscribeSystemMessageCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type RequestSubscribeSystemMessageFailCallback = (
        result: RequestSubscribeMessageFailCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type RequestSubscribeSystemMessageSuccessCallback = (
        result: RequestSubscribeSystemMessageSuccessCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type RequestSuccessCallback<
        T extends string | IAnyObject | ArrayBuffer =
            | string
            | IAnyObject
            | ArrayBuffer
    > = (result: RequestSuccessCallbackResult<T>) => void
    /** onHeadersReceived 传入的监听函数。不传此参数则移除所有监听函数。 */
    type RequestTaskOffHeadersReceivedCallback = (
        result: RequestTaskOnHeadersReceivedListenerResult
    ) => void
    /** HTTP Response Header 事件的监听函数 */
    type RequestTaskOnHeadersReceivedCallback = (
        result: RequestTaskOnHeadersReceivedListenerResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RequirePrivacyAuthorizeCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type RequirePrivacyAuthorizeFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type RequirePrivacyAuthorizeSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ReserveChannelsLiveCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type ReserveChannelsLiveFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ReserveChannelsLiveSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RestartCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type RestartFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RestartMiniProgramCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type RestartMiniProgramFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type RestartMiniProgramSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type RestartSuccessCallback = (res: GeneralCallbackResult) => void
    /** onClose 传入的监听函数。不传此参数则移除所有监听函数。 */
    type RewardedVideoAdOffCloseCallback = (
        result: RewardedVideoAdOnCloseListenerResult
    ) => void
    /** 用户点击 `关闭广告` 按钮的事件的监听函数 */
    type RewardedVideoAdOnCloseCallback = (
        result: RewardedVideoAdOnCloseListenerResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RmdirCompleteCallback = (res: FileError) => void
    /** 接口调用失败的回调函数 */
    type RmdirFailCallback = (res: FileError) => void
    /** 接口调用成功的回调函数 */
    type RmdirSuccessCallback = (res: FileError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SaveFileCompleteCallback = (res: FileError) => void
    /** 接口调用失败的回调函数 */
    type SaveFileFailCallback = (res: FileError) => void
    /** 接口调用成功的回调函数 */
    type SaveFileSuccessCallback = (
        result: SaveFileSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SaveFileToDiskCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type SaveFileToDiskFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SaveFileToDiskSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SaveImageToPhotosAlbumCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type SaveImageToPhotosAlbumFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type SaveImageToPhotosAlbumSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ScanCodeCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ScanCodeFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ScanCodeSuccessCallback = (
        result: ScanCodeSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SendCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type SendFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SendSocketMessageCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type SendSocketMessageFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SendSocketMessageSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SendSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetBLEMTUCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type SetBLEMTUFailCallback = (result: SetBLEMTUFailCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SetBLEMTUSuccessCallback = (
        result: SetBLEMTUSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetBackgroundFetchTokenCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type SetBackgroundFetchTokenFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type SetBackgroundFetchTokenSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetClipboardDataCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type SetClipboardDataFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SetClipboardDataSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetDeviceOrientationCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type SetDeviceOrientationFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SetDeviceOrientationSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetEnableDebugCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type SetEnableDebugFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SetEnableDebugSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetInnerAudioOptionCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type SetInnerAudioOptionFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SetInnerAudioOptionSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetKeepScreenOnCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type SetKeepScreenOnFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SetKeepScreenOnSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetMenuStyleCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type SetMenuStyleFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SetMenuStyleSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetScreenBrightnessCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type SetScreenBrightnessFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SetScreenBrightnessSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetStateCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type SetStateFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SetStateSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetStatusBarStyleCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type SetStatusBarStyleFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SetStatusBarStyleSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetStorageCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type SetStorageFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SetStorageSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetUserCloudStorageCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type SetUserCloudStorageFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SetUserCloudStorageSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetVisualEffectOnCaptureCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type SetVisualEffectOnCaptureFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type SetVisualEffectOnCaptureSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetWindowSizeCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type SetWindowSizeFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SetWindowSizeSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ShareMessageToFriendCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type ShareMessageToFriendFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ShareMessageToFriendSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ShowActionSheetCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ShowActionSheetFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ShowActionSheetSuccessCallback = (
        result: ShowActionSheetSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ShowKeyboardCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ShowKeyboardFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ShowKeyboardSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ShowLoadingCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ShowLoadingFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ShowLoadingSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ShowModalCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ShowModalFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ShowModalSuccessCallback = (
        result: ShowModalSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ShowShareImageMenuCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type ShowShareImageMenuFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ShowShareImageMenuSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ShowShareMenuCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ShowShareMenuFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ShowShareMenuSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ShowToastCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ShowToastFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ShowToastSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SocketTaskCloseCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type SocketTaskCloseFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SocketTaskCloseSuccessCallback = (res: GeneralCallbackResult) => void
    /** WebSocket 连接关闭事件的监听函数 */
    type SocketTaskOnCloseCallback = (
        result: SocketTaskOnCloseListenerResult
    ) => void
    /** WebSocket 接收到服务器的消息事件的监听函数 */
    type SocketTaskOnMessageCallback = (
        result: SocketTaskOnMessageListenerResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartAccelerometerCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type StartAccelerometerFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type StartAccelerometerSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartAdvertisingCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type StartAdvertisingFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type StartAdvertisingSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartBeaconDiscoveryCompleteCallback = (res: BeaconError) => void
    /** 接口调用失败的回调函数 */
    type StartBeaconDiscoveryFailCallback = (res: BeaconError) => void
    /** 接口调用成功的回调函数 */
    type StartBeaconDiscoverySuccessCallback = (res: BeaconError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartBluetoothDevicesDiscoveryCompleteCallback = (
        res: BluetoothError
    ) => void
    /** 接口调用失败的回调函数 */
    type StartBluetoothDevicesDiscoveryFailCallback = (
        res: BluetoothError
    ) => void
    /** 接口调用成功的回调函数 */
    type StartBluetoothDevicesDiscoverySuccessCallback = (
        res: BluetoothError
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartCompassCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type StartCompassFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type StartCompassSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartDeviceMotionListeningCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type StartDeviceMotionListeningFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type StartDeviceMotionListeningSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartGameCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type StartGameFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type StartGameSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartGyroscopeCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type StartGyroscopeFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type StartGyroscopeSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartHandoffCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type StartHandoffFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type StartHandoffSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartMatchCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type StartMatchFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type StartMatchSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartStateServiceCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type StartStateServiceFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type StartStateServiceSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StatCompleteCallback = (res: FileError) => void
    /** 接口调用失败的回调函数 */
    type StatFailCallback = (res: FileError) => void
    /** 接口调用成功的回调函数 */
    type StatSuccessCallback = (result: StatSuccessCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopAccelerometerCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type StopAccelerometerFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type StopAccelerometerSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopAdvertisingCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type StopAdvertisingFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type StopAdvertisingSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopBeaconDiscoveryCompleteCallback = (res: BeaconError) => void
    /** 接口调用失败的回调函数 */
    type StopBeaconDiscoveryFailCallback = (res: BeaconError) => void
    /** 接口调用成功的回调函数 */
    type StopBeaconDiscoverySuccessCallback = (res: BeaconError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopBluetoothDevicesDiscoveryCompleteCallback = (
        res: BluetoothError
    ) => void
    /** 接口调用失败的回调函数 */
    type StopBluetoothDevicesDiscoveryFailCallback = (
        res: BluetoothError
    ) => void
    /** 接口调用成功的回调函数 */
    type StopBluetoothDevicesDiscoverySuccessCallback = (
        res: BluetoothError
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopCompassCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type StopCompassFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type StopCompassSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopDeviceMotionListeningCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type StopDeviceMotionListeningFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type StopDeviceMotionListeningSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopFaceDetectCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type StopFaceDetectFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type StopFaceDetectSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopGyroscopeCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type StopGyroscopeFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type StopGyroscopeSuccessCallback = (res: GeneralCallbackResult) => void
    /** onMessage 传入的监听函数。不传此参数则移除所有监听函数。 */
    type TCPSocketOffMessageCallback = (
        result: TCPSocketOnMessageListenerResult
    ) => void
    /** 当接收到数据的时触发该事件的监听函数 */
    type TCPSocketOnMessageCallback = (
        result: TCPSocketOnMessageListenerResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ToTempFilePathCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ToTempFilePathFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ToTempFilePathSuccessCallback = (
        result: ToTempFilePathSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type TruncateCompleteCallback = (res: FileError) => void
    /** 接口调用失败的回调函数 */
    type TruncateFailCallback = (res: FileError) => void
    /** 接口调用成功的回调函数 */
    type TruncateSuccessCallback = (res: FileError) => void
    /** onClose 传入的监听函数。不传此参数则移除所有监听函数。 */
    type UDPSocketOffCloseCallback = (res: GeneralCallbackResult) => void
    /** onError 传入的监听函数。不传此参数则移除所有监听函数。 */
    type UDPSocketOffErrorCallback = (result: GeneralCallbackResult) => void
    /** onMessage 传入的监听函数。不传此参数则移除所有监听函数。 */
    type UDPSocketOffMessageCallback = (
        result: UDPSocketOnMessageListenerResult
    ) => void
    type UDPSocketOnCloseCallback = (res: GeneralCallbackResult) => void
    type UDPSocketOnErrorCallback = (result: GeneralCallbackResult) => void
    /** 收到消息的事件的监听函数 */
    type UDPSocketOnMessageCallback = (
        result: UDPSocketOnMessageListenerResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type UnlinkCompleteCallback = (res: FileError) => void
    /** 接口调用失败的回调函数 */
    type UnlinkFailCallback = (res: FileError) => void
    /** 接口调用成功的回调函数 */
    type UnlinkSuccessCallback = (res: FileError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type UnzipCompleteCallback = (res: FileError) => void
    /** 接口调用失败的回调函数 */
    type UnzipFailCallback = (res: FileError) => void
    /** 接口调用成功的回调函数 */
    type UnzipSuccessCallback = (res: FileError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type UpdateKeyboardCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type UpdateKeyboardFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type UpdateKeyboardSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type UpdateReadyStatusCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type UpdateReadyStatusFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type UpdateReadyStatusSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type UpdateShareMenuCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type UpdateShareMenuFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type UpdateShareMenuSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type UpdateVoIPChatMuteConfigCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type UpdateVoIPChatMuteConfigFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type UpdateVoIPChatMuteConfigSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type UpdateWeChatAppCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type UpdateWeChatAppFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type UpdateWeChatAppSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type UploadFileCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type UploadFileFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type UploadFileSuccessCallback = (
        result: UploadFileSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type UploadFrameCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type UploadFrameFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type UploadFrameSuccessCallback = (res: GeneralCallbackResult) => void
    /** onProgressUpdate 传入的监听函数。不传此参数则移除所有监听函数。 */
    type UploadTaskOffProgressUpdateCallback = (
        result: UploadTaskOnProgressUpdateListenerResult
    ) => void
    /** 上传进度变化事件的监听函数 */
    type UploadTaskOnProgressUpdateCallback = (
        result: UploadTaskOnProgressUpdateListenerResult
    ) => void
    /** onTap 传入的监听函数。不传此参数则移除所有监听函数。 */
    type UserInfoButtonOffTapCallback = (result: OnTapListenerResult) => void
    /** 用户信息按钮的点击事件的监听函数 */
    type UserInfoButtonOnTapCallback = (result: OnTapListenerResult) => void
    /** 开启会话回调 */
    type VKSessionStartCallback = (
        /** 参数 status 可选值：
         * - 0: 成功;
         * - 104: 用户取消授权;
         * - 112: 接口未在隐私协议中声明;
         * - 1025: 小程序隐私接口被封禁，[解决方案参考链接](https://developers.weixin.qq.com/community/develop/doc/00062a6d514c88baacdf52e8a56009);
         * - 1026: 小游戏隐私接口被封禁，[解决方案参考链接](https://developers.weixin.qq.com/community/minigame/doc/0004c84925817819b7ffd8b2356008);
         * - 2000001: 参数错误;
         * - 2003000: 会话不可用;
         * - 2000000: 系统错误;
         * - 2000002: 设备不支持;
         * - 2000003: 系统不支持;
         * - 2000004: 设备不支持;
         * - 2003001: 未开启系统相机权限;
         * - 2003002: 未开启小程序相机权限; */
        status:
            | 0
            | 104
            | 112
            | 1025
            | 1026
            | 2000001
            | 2003000
            | 2000000
            | 2000002
            | 2000003
            | 2000004
            | 2003001
            | 2003002
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type VibrateLongCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type VibrateLongFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type VibrateLongSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type VibrateShortCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type VibrateShortFailCallback = (
        result: VibrateShortFailCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type VibrateShortSuccessCallback = (res: GeneralCallbackResult) => void
    /** onError 传入的监听函数。不传此参数则移除所有监听函数。 */
    type VideoOffErrorCallback = (result: VideoOnErrorListenerResult) => void
    /** onTimeUpdate 传入的监听函数。不传此参数则移除所有监听函数。 */
    type VideoOffTimeUpdateCallback = (
        result: OnTimeUpdateListenerResult
    ) => void
    /** 视频错误事件的监听函数 */
    type VideoOnErrorCallback = (result: VideoOnErrorListenerResult) => void
    /** 视频播放进度更新事件的监听函数 */
    type VideoOnTimeUpdateCallback = (
        result: OnTimeUpdateListenerResult
    ) => void
    /** 主线程/Worker 线程向当前线程发送的消息的事件的监听函数 */
    type WorkerOnMessageCallback = (
        result: WorkerOnMessageListenerResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type WriteBLECharacteristicValueCompleteCallback = (
        res: BluetoothError
    ) => void
    /** 接口调用失败的回调函数 */
    type WriteBLECharacteristicValueFailCallback = (res: BluetoothError) => void
    /** 接口调用成功的回调函数 */
    type WriteBLECharacteristicValueSuccessCallback = (
        res: BluetoothError
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type WriteCharacteristicValueCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type WriteCharacteristicValueFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type WriteCharacteristicValueSuccessCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type WriteCompleteCallback = (res: FileError) => void
    /** 接口调用失败的回调函数 */
    type WriteFailCallback = (res: FileError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type WriteFileCompleteCallback = (res: FileError) => void
    /** 接口调用失败的回调函数 */
    type WriteFileFailCallback = (res: FileError) => void
    /** 接口调用成功的回调函数 */
    type WriteFileSuccessCallback = (res: FileError) => void
    /** 接口调用成功的回调函数 */
    type WriteSuccessCallback = (result: WriteSuccessCallbackResult) => void
    /** onError 传入的监听函数。不传此参数则移除所有监听函数。 */
    type WxOffErrorCallback = (res: GeneralCallbackResult) => void
    /** 全局错误事件的监听函数 */
    type WxOnErrorCallback = (
        /** 错误 */
        error: Error
    ) => void
}

/** [cancelAnimationFrame(number requestID)](https://developers.weixin.qq.com/minigame/dev/api/render/frame/cancelAnimationFrame.html)
 *
 * 取消由 requestAnimationFrame 添加到计划中的动画帧请求 */
declare function cancelAnimationFrame(requestID: number): void
/** [number requestAnimationFrame(function callback)](https://developers.weixin.qq.com/minigame/dev/api/render/frame/requestAnimationFrame.html)
 *
 * 在下次进行重绘时执行。 */
declare function requestAnimationFrame(
    /** 执行的 callback */
    callback: (...args: any[]) => any
): number
