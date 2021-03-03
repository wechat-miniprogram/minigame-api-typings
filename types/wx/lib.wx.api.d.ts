/*! *****************************************************************************
Copyright (c) 2021 Tencent, Inc. All rights reserved.

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
    interface AccessFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail no such file or directory ${path}': 文件/目录不存在;
         * - 'fail sdcard not mounted': Android sdcard 挂载失败; */
        errMsg: string
    }
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
    /** 帐号信息 */
    interface AccountInfo {
        /** 小程序帐号信息 */
        miniProgram: MiniProgram
        /** 插件帐号信息（仅在插件中调用时包含这一项） */
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
        /** 当前Service是否可连接 */
        connectable?: boolean
        /** 广播中deviceName字段，默认为空 */
        deviceName?: string
        /** 广播的制造商信息, 仅安卓支持 */
        manufacturerData?: ManufacturerData[]
        /** 要广播的serviceUuid列表 */
        serviceUuids?: string[]
    }
    interface AppendFileFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail no such file or directory, open ${filePath}': 指定的 filePath 文件不存在;
         * - 'fail illegal operation on a directory, open "${filePath}"': 指定的 filePath 是一个已经存在的目录;
         * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有写权限;
         * - 'fail sdcard not mounted': Android sdcard 挂载失败; */
        errMsg: string
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
    interface AuthPrivateMessageOption {
        /** shareTicket。可以从 wx.onShow 中获取。详情 [shareTicket](#) */
        shareTicket: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AuthPrivateMessageCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: AuthPrivateMessageFailCallback
        /** 接口调用成功的回调函数 */
        success?: AuthPrivateMessageSuccessCallback
    }
    interface AuthPrivateMessageSuccessCallbackResult {
        /** 经过加密的activityId，解密后可得到原始的activityId。若解密后得到的activityId可以与开发者后台的活动id对应上则验证通过，否则表明valid字段不可靠（被篡改） 详细见[加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html) */
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
        /** 是否授权用户信息，对应接口 [wx.getUserInfo](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/wx.getUserInfo.html) */
        'scope.userInfo'?: boolean
        /** 是否授权地理位置，对应接口 [wx.getLocation](https://developers.weixin.qq.com/minigame/dev/api/location/wx.getLocation.html) */
        'scope.userLocation'?: boolean
        /** 是否授权微信运动步数，对应接口 [wx.getWeRunData](https://developers.weixin.qq.com/minigame/dev/api/open-api/werun/wx.getWeRunData.html) */
        'scope.werun'?: boolean
        /** 是否授权保存到相册 [wx.saveImageToPhotosAlbum](https://developers.weixin.qq.com/minigame/dev/api/media/image/wx.saveImageToPhotosAlbum.html) */
        'scope.writePhotosAlbum'?: boolean
    }
    interface AuthorizeOption {
        /** 需要获取权限的 scope，详见 [scope 列表]((authorize#scope-列表)) */
        scope: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: AuthorizeCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: AuthorizeFailCallback
        /** 接口调用成功的回调函数 */
        success?: AuthorizeSuccessCallback
    }
    /** 设备特征值列表 */
    interface BLECharacteristic {
        /** 该特征值支持的操作类型 */
        properties: BLECharacteristicProperties
        /** 蓝牙设备特征值的 uuid */
        uuid: string
    }
    /** 该特征值支持的操作类型 */
    interface BLECharacteristicProperties {
        /** 该特征值是否支持 indicate 操作 */
        indicate: boolean
        /** 该特征值是否支持 notify 操作 */
        notify: boolean
        /** 该特征值是否支持 read 操作 */
        read: boolean
        /** 该特征值是否支持 write 操作 */
        write: boolean
    }
    /** 描述service的Object */
    interface BLEPeripheralService {
        /** characteristics列表 */
        characteristics: Characteristic[]
        /** service 的 uuid */
        uuid: string
    }
    /** 设备服务列表 */
    interface BLEService {
        /** 该服务是否为主服务 */
        isPrimary: boolean
        /** 蓝牙设备服务的 uuid */
        uuid: string
    }
    /** banner 广告组件。banner 广告组件是一个原生组件，层级比普通组件高。banner 广告组件默认是隐藏的，需要调用 BannerAd.show() 将其显示。banner 广告会根据开发者设置的宽度进行等比缩放，缩放后的尺寸将通过 BannerAd.onResize() 事件中提供。 */
    interface BannerAd {
        /** banner 广告组件的样式。style 上的属性的值仅为开发者设置的值，banner 广告会根据开发者设置的宽度进行等比缩放，缩放后的真实尺寸需要通过 BannerAd.onResize() 事件获得。 */
        style: BannerAdStyle
    }
    interface BannerAdOnErrorCallbackResult {
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
         * - 1008: 广告单元已关闭;
         *
         * 最低基础库： `2.2.2` */
        errCode: 1000 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008
        /** 错误信息 */
        errMsg: string
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
    interface BlueToothDevice {
        /** 当前蓝牙设备的信号强度 */
        RSSI: number
        /** 当前蓝牙设备的广播数据段中的 ManufacturerData 数据段。 */
        advertisData: ArrayBuffer
        /** 当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段 */
        advertisServiceUUIDs: string[]
        /** 用于区分设备的 id */
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
    /** 对局回放的按钮的配置。对局回放按钮的文案不能随意设置，只能选择预设的文案模版。 */
    interface ButtonShare {
        /** 对局回放的按钮的模版。
         *
         * 可选值：
         * - 'enter': 马上玩;
         * - 'challenge': 去挑战;
         * - 'play': 去挑战; */
        template?: 'enter' | 'challenge' | 'play'
    }
    /** 对局回放的按钮。只能选择预设的文案模版。 */
    interface ButtonShareOption {
        /** 对局回放的按钮的模版。
         *
         * 可选值：
         * - 'enter': 马上玩;
         * - 'challenge': 去挑战;
         * - 'play': 玩一把; */
        template?: 'enter' | 'challenge' | 'play'
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
        /** Characteristic 的 uuid */
        uuid: string
        /** 描述符数据 */
        descriptors?: Descriptor[]
        /** 特征值权限 */
        permission?: CharacteristicPermission
        /** 特征值支持的操作 */
        properties?: CharacteristicProperties
        /** 特征值对应的二进制值 */
        value?: ArrayBuffer
    }
    /** 特征值权限 */
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
    /** 特征值支持的操作 */
    interface CharacteristicProperties {
        /** 回包 */
        indicate?: boolean
        /** 订阅 */
        notify?: boolean
        /** 读 */
        read?: boolean
        /** 写 */
        write?: boolean
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
        /** 是否可以进行接力 */
        isEnabled: boolean
        errMsg: string
    }
    interface CheckIsUserAdvisedToRestOption {
        /** 今天已经玩游戏的时间，单位：秒 */
        todayPlayedTime: number
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CheckIsUserAdvisedToRestCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: CheckIsUserAdvisedToRestFailCallback
        /** 接口调用成功的回调函数 */
        success?: CheckIsUserAdvisedToRestSuccessCallback
    }
    interface CheckIsUserAdvisedToRestSuccessCallbackResult {
        /** 是否建议用户休息 */
        result: boolean
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
        /** 图片的本地临时文件列表
         *
         * 最低基础库： `1.2.0` */
        tempFiles: ImageFile[]
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
    interface CloseBLEConnectionOption {
        /** 用于区分设备的 id */
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
    interface CloseOption {
        /** 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。 */
        code?: number
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CloseCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: CloseFailCallback
        /** 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。 */
        reason?: string
        /** 接口调用成功的回调函数 */
        success?: CloseSuccessCallback
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
    interface ConnectSocketOption {
        /** 开发者服务器 wss 接口地址 */
        url: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ConnectSocketCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ConnectSocketFailCallback
        /** HTTP Header，Header 中不能设置 Referer */
        header?: IAnyObject
        /** 是否开启压缩扩展
         *
         * 最低基础库： `2.8.0` */
        perMessageDeflate?: boolean
        /** 子协议数组
         *
         * 最低基础库： `1.4.0` */
        protocols?: string[]
        /** 接口调用成功的回调函数 */
        success?: ConnectSocketSuccessCallback
        /** 建立 TCP 连接的时候的 TCP_NODELAY 设置
         *
         * 最低基础库： `2.4.0` */
        tcpNoDelay?: boolean
        /** 超时时间，单位为毫秒
         *
         * 最低基础库： `2.10.0` */
        timeout?: number
    }
    /** webgl 上下文属性，仅当 contextType 为 webgl 时有效 */
    interface ContextAttributes {
        /** 是否开启透明通道，仅当 contextType 为 webgl 时有效。（开启后，配合wx.createVideo({underGameView: true}) 即可在video组件之上渲染主屏画布）
         *
         * 最低基础库： `2.11.0` */
        alpha?: number
        /** 表示是否抗锯齿 */
        antialias?: boolean
        /** 抗锯齿样本数。最小值为 2，最大不超过系统限制数量，仅 iOS 支持 */
        antialiasSamples?: number
        /** 表示是否绘图完成后是否保留绘图缓冲区 */
        preserveDrawingBuffer?: boolean
    }
    interface CopyFileFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail permission denied, copyFile ${srcPath} -> ${destPath}': 指定目标文件路径没有写权限;
         * - 'fail no such file or directory, copyFile ${srcPath} -> ${destPath}': 源文件不存在，或目标文件路径的上层目录不存在;
         * - 'fail the maximum size of the file storage limit is exceeded': 存储空间不足;
         * - 'fail sdcard not mounted': Android sdcard 挂载失败; */
        errMsg: string
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
        /** 用于区分设备的 id */
        deviceId: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: CreateBLEConnectionCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: CreateBLEConnectionFailCallback
        /** 接口调用成功的回调函数 */
        success?: CreateBLEConnectionSuccessCallback
        /** 超时时间，单位ms，不填表示不会超时 */
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
    }
    interface CreateGameBannerOption {
        /** 推荐单元 id */
        adUnitId: string
        /** 小游戏推荐banner组件样式 */
        style: CreateGameBannerStyleOption
    }
    /** 小游戏推荐banner组件样式 */
    interface CreateGameBannerStyleOption {
        /** 小游戏推荐banner组件左上角横坐标 */
        left: number
        /** 小游戏推荐banner组件左上角纵坐标 */
        top: number
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
        /** 按钮上的文本，仅当 type 为 `text` 时有效 */
        text?: string
    }
    interface CreateGameIconOption {
        /** 推荐单元 id */
        adUnitId: string
        /** 游戏icon的数量，请注意，正式版下面渲染出来的icon数量会小于等于count，请注册做好样式兼容 */
        count: number
        /** 数组的每一项可以针对对应的icon设置位置和样式等信息，style的每一项称为styleItem */
        style: any[]
    }
    interface CreateGamePortalOption {
        /** 推荐单元 id。 */
        adUnitId: string
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
        /** 是否启用多例模式，默认为false
         *
         * 最低基础库： `2.8.0` */
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
        errMsg: string
    }
    interface CreateUserInfoButtonOption {
        /** 是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。 */
        withCredentials: boolean
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
        /** 按钮上的文本，仅当 type 为 `text` 时有效 */
        text?: string
    }
    interface CreateVideoOption {
        /** 视频的资源地址 */
        src: string
        /** 视频是否自动播放 */
        autoplay?: boolean
        /** 视频背景颜色
         *
         * 最低基础库： `2.12.0` */
        backgroundColor?: boolean
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
        /** 视频是否遵循系统静音开关设置（仅iOS）
         *
         * 最低基础库： `2.4.0` */
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
        /** 是否显示视频底部进度条
         *
         * 最低基础库： `2.12.0` */
        showProgress?: boolean
        /** 是否显示控制栏的进度条
         *
         * 最低基础库： `2.12.0` */
        showProgressInControlMode?: boolean
        /** 视频是否显示在游戏画布之下（配合 Canvas.getContext('webgl', {alpha: true}) 使主屏canvas实现透明效果）
         *
         * 最低基础库： `2.11.0` */
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
        /** 是否使用实验worker。在iOS下，实验worker的JS运行效率比非实验worker提升近十倍，如需在worker内进行重度计算的建议开启此选项。
         *
         * 最低基础库： `2.13.0` */
        useExperimentalWorker?: boolean
    }
    /** 原生模板广告组件。原生模板广告组件是一个原生组件，层级比普通组件高。原生模板广告组件默认是隐藏的，需要调用 CustomAd.show() 将其显示。如果宽度可配置，原生模板广告会根据开发者设置的宽度进行等比缩放。 */
    interface CustomAd {
        /** 原生模板广告组件的样式 */
        style: CustomAdStyle
    }
    interface CustomAdOnErrorCallbackResult {
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
         * - 1008: 广告单元已关闭;
         * - 2001: 模板渲染错误;
         * - 2002: 模板为空;
         * - 2003: 模板解析失败;
         * - 2004: 触发频率限制;
         * - 2005: 触发频率限制;
         *
         * 最低基础库： `2.2.2` */
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
    /** 描述符数据 */
    interface Descriptor {
        /** Descriptor 的 uuid */
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
    interface DownloadFileOption {
        /** 下载资源的 url */
        url: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: DownloadFileCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: DownloadFileFailCallback
        /** 指定文件下载后存储的路径 (本地路径)
         *
         * 最低基础库： `1.8.0` */
        filePath?: string
        /** HTTP 请求的 Header，Header 中不能设置 Referer */
        header?: IAnyObject
        /** 接口调用成功的回调函数 */
        success?: DownloadFileSuccessCallback
        /** 超时时间，单位为毫秒
         *
         * 最低基础库： `2.10.0` */
        timeout?: number
    }
    interface DownloadFileSuccessCallbackResult {
        /** 用户文件路径 (本地路径)。传入 filePath 时会返回，跟传入的 filePath 一致 */
        filePath: string
        /** 网络请求过程中一些调试信息
         *
         * 最低基础库： `2.10.4` */
        profile: DownloadProfile
        /** 开发者服务器返回的 HTTP 状态码 */
        statusCode: number
        /** 临时文件路径 (本地路径)。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件 */
        tempFilePath: string
        errMsg: string
    }
    /** 网络请求过程中一些调试信息
     *
     * 最低基础库： `2.10.4` */
    interface DownloadProfile {
        /** SSL建立完成的时间,如果不是安全连接,则值为 0 */
        SSLconnectionEnd: number
        /** SSL建立连接的时间,如果不是安全连接,则值为 0 */
        SSLconnectionStart: number
        /** HTTP（TCP） 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间。注意这里握手结束，包括安全连接建立完成、SOCKS 授权通过 */
        connectEnd: number
        /** HTTP（TCP） 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间 */
        connectStart: number
        /** DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
        domainLookupEnd: number
        /** DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
        domainLookupStart: number
        /** 评估当前网络下载的kbps */
        downstreamThroughputKbpsEstimate: number
        /** 评估的网络状态 slow 2g/2g/3g/4g */
        estimate_nettype: string
        /** 组件准备好使用 HTTP 请求抓取资源的时间，这发生在检查本地缓存之前 */
        fetchStart: number
        /** 协议层根据多个请求评估当前网络的 rtt（仅供参考） */
        httpRttEstimate: number
        /** 当前请求的IP */
        peerIP: string
        /** 当前请求的端口 */
        port: number
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
    }
    interface DownloadTaskOnProgressUpdateCallbackResult {
        /** 下载进度百分比 */
        progress: number
        /** 预期需要下载的数据总长度，单位 Bytes */
        totalBytesExpectedToWrite: number
        /** 已经下载的数据长度，单位 Bytes */
        totalBytesWritten: number
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
        /** 启动小游戏的 query 参数 */
        query: IAnyObject
        /** 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) */
        referrerInfo: EnterOptionsGameReferrerInfo
        /** 启动小游戏的[场景值](https://developers.weixin.qq.com/minigame/dev/game-engine/render/scene.html) */
        scene: number
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
    interface FileSystemManagerGetFileInfoOption {
        /** 要读取的文件路径 (本地路径) */
        filePath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetFileInfoCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: FileSystemManagerGetFileInfoFailCallback
        /** 接口调用成功的回调函数 */
        success?: FileSystemManagerGetFileInfoSuccessCallback
    }
    interface FileSystemManagerGetFileInfoSuccessCallbackResult {
        /** 文件大小，以字节为单位 */
        size: number
        errMsg: string
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
    /** 小游戏推荐banner组件。小游戏推荐banner组件是一个原生组件，层级比上屏 Canvas 高，会覆盖在上屏 Canvas 上。小游戏推荐banner组件默认是隐藏的，需要调用 GameBanner.show() 将其显示。 */
    interface GameBanner {
        /** 是否已销毁的标记位 */
        isDestroyed: boolean
        /** 小游戏推荐banner组件的样式。style 上的属性的值仅为开发者设置的值，开发者设置的异常值会被忽略，最终的尺寸和位置信息通过GameBanner.onResize() 事件获得。 */
        style: GameBannerStyle
    }
    interface GameBannerOnErrorCallbackResult {
        /** 错误码
         *
         * 可选值：
         * - 1000: 内部错误;
         * - 1001: 参数错误;
         * - 1002: 无效的推荐位，请检查推荐id是否正确;
         * - 1004: 无合适的推荐;
         * - 1008: 推荐单元已关闭; */
        errCode: 1000 | 1001 | 1002 | 1004 | 1008
        /** 错误信息
         *
         * 最低基础库： `2.7.7` */
        errMsg: string
    }
    /** 小游戏推荐banner组件的样式。style 上的属性的值仅为开发者设置的值，开发者设置的异常值会被忽略，最终的尺寸和位置信息通过GameBanner.onResize() 事件获得。 */
    interface GameBannerStyle {
        /** 小游戏推荐banner组件的左上角横坐标 */
        left: number
        /** 小游戏推荐banner组件的左上角纵坐标 */
        top: number
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
    }
    /** 小游戏推荐icon组件。小游戏推荐icon组件是一个原生组件，层级比上屏 Canvas 高，会覆盖在上屏 Canvas 上。小游戏推荐icon组件默认是隐藏的，需要调用 GameIcon.show() 将其显示。 */
    interface GameIcon {
        /** 单个游戏icon的位置和样式等信息 */
        iconItem: IconItem
        /** 每个icon渲染出来之后都有位置、尺寸和样式等信息，统一由icons数组维护，数组的每一项称为iconItem */
        icons: any[]
        /** 是否已销毁的标记位 */
        isDestroyed: boolean
    }
    /** 小游戏推荐弹窗组件。小游戏推荐弹窗组件是一个原生组件，层级比上屏 Canvas 高，会覆盖在上屏 Canvas 上。小游戏推荐弹窗组件默认是隐藏的，需要调用 GamePortal.show() 将其显示。 */
    interface GamePortal {
        /** 组件是否已销毁的标记位。 */
        isDestroyed: boolean
    }
    interface GamePortalOnErrorCallbackResult {
        /** 错误码
         *
         * 可选值：
         * - 1000: 内部错误;
         * - 1001: 参数错误;
         * - 1002: 无效的推荐位，请检查推荐位id是否正确;
         * - 1004: 无合适的推荐;
         * - 1008: 推荐位已关闭; */
        errCode: 1000 | 1001 | 1002 | 1004 | 1008
        /** 错误信息
         *
         * 最低基础库： `2.7.7` */
        errMsg: string
    }
    /** 游戏对局回放分享按钮。按钮在被用户点击后会发起对最近一次录制完成的游戏对局回放的分享。
     *
     * 最低基础库： `2.8.0` */
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
        /** 是否录制游戏音效
         *
         * 最低基础库： `2.10.0` */
        hookBgm?: boolean
    }
    interface GameServerManagerOnDisconnectCallbackResult {
        res: OnDisconnectCallbackResult
    }
    interface GameServerManagerOnMatchCallbackResult {
        res: OnMatchCallbackResult
    }
    interface GameServerManagerOnRoomInfoChangeCallbackResult {
        res: OnRoomInfoChangeCallbackResult
    }
    interface GameServerManagerOnStateUpdateCallbackResult {
        res: OnStateUpdateCallbackResult
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
        /** 蓝牙设备 id */
        deviceId: string
        /** 蓝牙服务 uuid，需要使用 `getBLEDeviceServices` 获取 */
        serviceId: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetBLEDeviceCharacteristicsCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetBLEDeviceCharacteristicsFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetBLEDeviceCharacteristicsSuccessCallback
    }
    interface GetBLEDeviceCharacteristicsSuccessCallbackResult {
        /** 设备特征值列表 */
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
        /** 信号强度 */
        RSSI: number
        errMsg: string
    }
    interface GetBLEDeviceServicesOption {
        /** 蓝牙设备 id */
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
        /** 设备电量，范围 1 - 100 */
        level: string
        errMsg: string
    }
    interface GetBatteryInfoSyncResult {
        /** 是否正在充电中 */
        isCharging: boolean
        /** 设备电量，范围 1 - 100 */
        level: string
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
        /** iBeacon 设备列表 */
        beacons: IBeaconInfo[]
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
        /** uuid 对应的的已连接设备列表 */
        devices: BlueToothDevice[]
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
    }
    interface GetConnectedBluetoothDevicesOption {
        /** 蓝牙设备主 service 的 uuid 列表 */
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
    interface GetFileInfoFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail file not exist': 指定的 filePath 找不到文件; */
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
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetGroupEnterInfoCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetGroupEnterInfoFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetGroupEnterInfoSuccessCallback
    }
    interface GetGroupEnterInfoSuccessCallbackResult {
        /** 敏感数据对应的云 ID，开通[云开发](https://developers.weixin.qq.com/minigame/dev/wxcloud/basis/getting-started.html)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html#method-cloud)
         *
         * 最低基础库： `2.7.0` */
        cloudID: string
        /** 包括敏感数据在内的完整转发信息的加密数据，详细见[加密数据解密算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html) */
        encryptedData: string
        /** 错误信息 */
        errMsg: string
        /** 加密算法的初始向量，详细见[加密数据解密算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html) */
        iv: string
    }
    interface GetGroupInfoOption {
        /** 群 openGId，可通过 `wx.getShareInfo` 获取 */
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
    interface GetLocationOption {
        /** 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度
         *
         * 最低基础库： `1.6.0` */
        altitude?: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetLocationCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetLocationFailCallback
        /** 高精度定位超时时间(ms)，指定时间内返回最高精度，该值3000ms以上高精度定位才有效果
         *
         * 最低基础库： `2.9.0` */
        highAccuracyExpireTime?: number
        /** 开启高精度定位
         *
         * 最低基础库： `2.9.0` */
        isHighAccuracy?: boolean
        /** 接口调用成功的回调函数 */
        success?: GetLocationSuccessCallback
        /** wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标 */
        type?: string
    }
    interface GetLocationSuccessCallbackResult {
        /** 位置的精确度 */
        accuracy: number
        /** 高度，单位 m
         *
         * 最低基础库： `1.2.0` */
        altitude: number
        /** 水平精度，单位 m
         *
         * 最低基础库： `1.2.0` */
        horizontalAccuracy: number
        /** 纬度，范围为 -90~90，负数表示南纬 */
        latitude: number
        /** 经度，范围为 -180~180，负数表示西经 */
        longitude: number
        /** 速度，单位 m/s */
        speed: number
        /** 垂直精度，单位 m（Android 无法获取，返回 0）
         *
         * 最低基础库： `1.2.0` */
        verticalAccuracy: number
        errMsg: string
    }
    interface GetLogManagerOption {
        /** 取值为0/1，取值为0表示是否会把 `App`、`Page` 的生命周期函数和 `wx` 命名空间下的函数调用写入日志，取值为1则不会。默认值是 0
         *
         * 最低基础库： `2.3.2` */
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
        errMsg: string
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
    }
    interface GetSettingOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetSettingCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetSettingFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetSettingSuccessCallback
        /** 是否同时获取用户订阅消息的订阅状态，默认不获取。注意：withSubscriptions 只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。
         *
         * 最低基础库： `2.10.1` */
        withSubscriptions?: boolean
    }
    interface GetSettingSuccessCallbackResult {
        /** [AuthSetting](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/AuthSetting.html)
         *
         * 用户授权结果 */
        authSetting: AuthSetting
        /** [SubscriptionsSetting](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/SubscriptionsSetting.html)
         *
         * 用户订阅消息设置，接口参数`withSubscriptions`值为`true`时才会返回。
         *
         * 最低基础库： `2.10.1` */
        subscriptionsSetting: SubscriptionsSetting
        /** [AuthSetting](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/AuthSetting.html)
         *
         * 在插件中调用时，当前宿主小程序的用户授权结果 */
        miniprogramAuthSetting?: AuthSetting
        errMsg: string
    }
    interface GetShareInfoOption {
        /** shareTicket */
        shareTicket: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetShareInfoCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetShareInfoFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetShareInfoSuccessCallback
        /** 超时时间，单位 ms
         *
         * 最低基础库： `1.9.90` */
        timeout?: number
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
        /** 敏感数据对应的云 ID，开通[云开发](https://developers.weixin.qq.com/minigame/dev/wxcloud/basis/getting-started.html)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html#method-cloud)
         *
         * 最低基础库： `2.7.0` */
        cloudID: string
        /** 包括敏感数据在内的完整用户信息的加密数据，详见 [用户数据的签名验证和加解密]((signature#加密数据解密算法)) */
        encryptedData: string
        /** 加密算法的初始向量，详见 [用户数据的签名验证和加解密]((signature#加密数据解密算法)) */
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
        keyList: string
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
        /** 加密数据，包含互动型托管数据的值。解密后的结果为一个 `KVDataList`，每一项为一个 `KVData`。 [用户数据的签名验证和加解密]((signature#加密数据解密算法)) */
        encryptedData: string
        errMsg: string
    }
    interface GetUserProfileOption {
        /** 声明获取用户个人信息后的用途，不超过30个字符 */
        desc: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetUserProfileCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetUserProfileFailCallback
        /** 显示用户信息的语言
         *
         * 可选值：
         * - 'en': 英文;
         * - 'zh_CN': 简体中文;
         * - 'zh_TW': 繁体中文; */
        lang?: 'en' | 'zh_CN' | 'zh_TW'
        /** 接口调用成功的回调函数 */
        success?: GetUserProfileSuccessCallback
    }
    interface GetUserProfileSuccessCallbackResult {
        /** [UserInfo](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/UserInfo.html)
         *
         * 用户信息对象 */
        userInfo: UserInfo
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
        /** 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html#method-cloud)
         *
         * 最低基础库： `2.7.0` */
        cloudID: string
        /** 包括敏感数据在内的完整用户信息的加密数据，详细见[加密数据解密算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html)。解密后得到的数据结构见后文 */
        encryptedData: string
        /** 加密算法的初始向量，详细见[加密数据解密算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html) */
        iv: string
        errMsg: string
    }
    /** grid(格子) 广告组件。grid(格子) 广告组件是一个原生组件，层级比普通组件高。grid(格子) 广告组件默认是隐藏的，需要调用 GridAd.show() 将其显示。grid(格子) 广告会根据开发者设置的宽度进行等比缩放，缩放后的尺寸将通过 GridAd.onResize() 事件中提供。 */
    interface GridAd {
        /** grid(格子) 广告广告组件的主题，提供 `white` `black` 两种主题选择。 */
        adTheme: string
        /** grid(格子) 广告组件的格子个数，可设置爱5，8两种格子个数样式，默认值为5 */
        gridCount: number
        /** grid(格子) 广告广告组件的样式。style 上的属性的值仅为开发者设置的grid(格子) 广告) 广告会根据开发者设置的宽度进行等比缩放，缩放后的真实尺寸需要通过 GridAd.onResize() 事件获得。 */
        style: GridAdStyle
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
        /** 接口调用成功的回调函数 */
        success?: HideLoadingSuccessCallback
    }
    interface HideShareMenuOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: HideShareMenuCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: HideShareMenuFailCallback
        /** 本接口为 Beta 版本，暂只在 Android 平台支持。需要隐藏的转发按钮名称列表，默认['shareAppMessage', 'shareTimeline']。按钮名称合法值包含 "shareAppMessage"、"shareTimeline" 两种
         *
         * 最低基础库： `2.11.3` */
        menus?: string[]
        /** 接口调用成功的回调函数 */
        success?: HideShareMenuSuccessCallback
    }
    interface HideToastOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: HideToastCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: HideToastFailCallback
        /** 接口调用成功的回调函数 */
        success?: HideToastSuccessCallback
    }
    interface IBeaconInfo {
        /** iBeacon 设备的距离 */
        accuracy: number
        /** iBeacon 设备的主 id */
        major: string
        /** iBeacon 设备的次 id */
        minor: string
        /** 表示设备距离的枚举值 */
        proximity: number
        /** 表示设备的信号强度 */
        rssi: number
        /** iBeacon 设备广播的 uuid */
        uuid: string
    }
    /** 单个游戏icon的位置和样式等信息 */
    interface IconItem {
        /** 游戏名称是否隐藏 */
        appNameHidden: boolean
        /** 游戏icon的border颜色色值 */
        borderColor: string
        /** 游戏icon的border尺寸 */
        borderWidth: number
        /** 游戏名称的颜色色号 */
        color: string
        /** 游戏icon的X轴坐标 */
        left: number
        /** 游戏icon的宽高值 */
        size: number
        /** 游戏icon的Y轴坐标 */
        top: number
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
    /** 图片的本地临时文件列表
     *
     * 最低基础库： `1.2.0` */
    interface ImageFile {
        /** 本地临时文件路径 (本地路径) */
        path: string
        /** 本地临时文件大小，单位 B */
        size: number
    }
    /** InnerAudioContext 实例，可通过 [wx.createInnerAudioContext](https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.createInnerAudioContext.html) 接口获取实例。注意，音频播放过程中，可能被系统中断，可通过 [wx.onAudioInterruptionBegin](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.onAudioInterruptionBegin.html)、[wx.onAudioInterruptionEnd](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.onAudioInterruptionEnd.html)事件来处理这种情况。
*
* **支持格式**
*
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
*
* ```js
const innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.autoplay = true
innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
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
        /** 当前音频的播放位置（单位 s）。只有在当前有合法的 src 时返回，时间保留小数点后 6 位（只读） */
        currentTime: number
        /** 当前音频的长度（单位 s）。只有在当前有合法的 src 时返回（只读） */
        duration: number
        /** 是否循环播放，默认为 `false` */
        loop: boolean
        /** 是否遵循系统静音开关，默认为 `true`。当此参数为 `false` 时，即使用户打开了静音开关，也能继续发出声音。从 2.3.0 版本开始此参数不生效，使用 [wx.setInnerAudioOption](https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.setInnerAudioOption.html) 接口统一设置。 */
        obeyMuteSwitch: boolean
        /** 当前是是否暂停或停止状态（只读） */
        paused: boolean
        /** 播放速度。范围 0.5-2.0，默认为 1。（Android 需要 6 及以上版本）
         *
         * 最低基础库： `2.11.0` */
        playbackRate: number
        /** 音频资源的地址，用于直接播放。[2.2.3](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 开始支持云文件ID */
        src: string
        /** 开始播放的位置（单位：s），默认为 0 */
        startTime: number
        /** 音量。范围 0~1。默认为 1
         *
         * 最低基础库： `1.9.90` */
        volume: number
    }
    interface InnerAudioContextOnErrorCallbackResult {
        /**
         *
         * 可选值：
         * - 10001: 系统错误;
         * - 10002: 网络错误;
         * - 10003: 文件错误;
         * - 10004: 格式错误;
         * - -1: 未知错误; */
        errCode: 10001 | 10002 | 10003 | 10004 | -1
        errMsg: string
    }
    interface InterstitialAdOnErrorCallbackResult {
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
* 最终序列化为string后，value为"{\"wxgame\":{\"score\":16,\"update_time\": 1513080573},\"cost_ms\":36500}"。 */
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
        query: IAnyObject
        /** 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) */
        referrerInfo: EnterOptionsGameReferrerInfo
        /** 启动小游戏的[场景值](https://developers.weixin.qq.com/minigame/dev/game-engine/render/scene.html) */
        scene: number
        /** shareTicket，详见[获取更多转发信息](#) */
        shareTicket?: string
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
    interface LoadSubpackageTaskOnProgressUpdateCallbackResult {
        /** 分包下载进度百分比 */
        progress: number
        /** 预期需要下载的数据总长度，单位 Bytes */
        totalBytesExpectedToWrite: number
        /** 已经下载的数据长度，单位 Bytes */
        totalBytesWritten: number
    }
    interface LoginOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: LoginCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: LoginFailCallback
        /** 接口调用成功的回调函数 */
        success?: LoginSuccessCallback
        /** 超时时间，单位ms
         *
         * 最低基础库： `1.9.90` */
        timeout?: number
    }
    interface LoginSuccessCallbackResult {
        /** 用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 [auth.code2Session](https://developers.weixin.qq.com/minigame/dev/api-backend/open-api/login/auth.code2Session.html)，使用 code 换取 openid 和 session_key 等信息 */
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
        /** 超时时间 */
        timeout?: number
    }
    /** 广播的制造商信息, 仅安卓支持 */
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
    /** 小程序帐号信息 */
    interface MiniProgram {
        /** 小程序 appId */
        appId: string
        /** 小程序版本
         *
         * 可选值：
         * - 'develop': 开发版;
         * - 'trial': 体验版;
         * - 'release': 正式版;
         *
         * 最低基础库： `2.10.0` */
        envVersion: 'develop' | 'trial' | 'release'
        /** 线上小程序版本号
         *
         * 最低基础库： `2.10.2` */
        version: string
    }
    interface MkdirFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail no such file or directory ${dirPath}': 上级目录不存在;
         * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有写权限;
         * - 'fail file already exists ${dirPath}': 有同名文件或目录;
         * - 'fail sdcard not mounted': Android sdcard 挂载失败; */
        errMsg: string
    }
    interface MkdirOption {
        /** 创建的目录路径 (本地路径) */
        dirPath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: MkdirCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: MkdirFailCallback
        /** 是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。
         *
         * 最低基础库： `2.3.0` */
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
        /** 分享图片地址，详见 wx.shareMessageToFriend 同名参数（需要配置模板规则）
         *
         * 最低基础库： `2.9.0` */
        imageUrl?: string
        /** 分享图片 ID，详见 wx.shareMessageToFriend 同名参数（需要配置模板规则）
         *
         * 最低基础库： `2.9.0` */
        imageUrlId?: string
        /** 是否静默修改（不弹框）。当进入场景是好友 [定向分享](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.shareMessageToFriend.html) 的卡片时有效，代表分享反馈操作，此时 `toUser` 默认为原分享者的 openId
         *
         * 最低基础库： `2.9.0` */
        quiet?: boolean
        /** 接口调用成功的回调函数 */
        success?: ModifyFriendInteractiveStorageSuccessCallback
        /** 分享标题，如果设置了这个值，则在交互成功后自动询问用户是否分享给好友（需要配置模板规则）
         *
         * 最低基础库： `2.9.0` */
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
    interface NavigateToMiniProgramOption {
        /** 要打开的小程序 appId */
        appId: string
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
        /** 打开的页面路径，如果为空则打开首页。path 中 ? 后面的部分会成为 query，在小程序的 `App.onLaunch`、`App.onShow` 和 `Page.onLoad` 的回调函数或小游戏的 [wx.onShow](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.onShow.html) 回调函数、[wx.getLaunchOptionsSync](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html) 中可以获取到 query 数据。对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"。 */
        path?: string
        /** 接口调用成功的回调函数 */
        success?: NavigateToMiniProgramSuccessCallback
    }
    interface NotifyBLECharacteristicValueChangeOption {
        /** 蓝牙特征值的 uuid */
        characteristicId: string
        /** 蓝牙设备 id */
        deviceId: string
        /** 蓝牙特征值对应服务的 uuid */
        serviceId: string
        /** 是否启用 notify */
        state: boolean
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: NotifyBLECharacteristicValueChangeCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: NotifyBLECharacteristicValueChangeFailCallback
        /** 接口调用成功的回调函数 */
        success?: NotifyBLECharacteristicValueChangeSuccessCallback
    }
    interface OnAccelerometerChangeCallbackResult {
        /** X 轴 */
        x: number
        /** Y 轴 */
        y: number
        /** Z 轴 */
        z: number
    }
    interface OnAddToFavoritesCallbackResult {
        /** 禁止收藏后长按转发，默认 false */
        disableForward: boolean
        /** 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4 */
        imageUrl: string
        /** 查询字符串，必须是 key1=val1&key2=val2 的格式。从收藏进入后，可通过 wx.getLaunchOptionsSync() 或 wx.onShow() 获取启动参数中的 query。 */
        query: string
        /** 收藏标题，不传则默认使用当前小游戏的昵称。 */
        title: string
    }
    interface OnBLECharacteristicValueChangeCallbackResult {
        /** 蓝牙特征值的 uuid */
        characteristicId: string
        /** 蓝牙设备 id */
        deviceId: string
        /** 蓝牙特征值对应服务的 uuid */
        serviceId: string
        /** 特征值最新的值 */
        value: ArrayBuffer
    }
    interface OnBLEConnectionStateChangeCallbackResult {
        /** 是否处于已连接状态 */
        connected: boolean
        /** 蓝牙设备ID */
        deviceId: string
    }
    interface OnBLEPeripheralConnectionStateChangedCallbackResult {
        /** 连接目前状态 */
        connected: boolean
        /** 连接状态变化的设备 id */
        deviceId: string
        /** server 的 uuid */
        serverId: string
    }
    interface OnBeKickedOutCallbackResult {
        res: IAnyObject
    }
    interface OnBeaconServiceChangeCallbackResult {
        /** 服务目前是否可用 */
        available: boolean
        /** 目前是否处于搜索状态 */
        discovering: boolean
    }
    interface OnBeaconUpdateCallbackResult {
        /** 当前搜寻到的所有 iBeacon 设备列表 */
        beacons: IBeaconInfo[]
    }
    interface OnBluetoothAdapterStateChangeCallbackResult {
        /** 蓝牙适配器是否可用 */
        available: boolean
        /** 蓝牙适配器是否处于搜索状态 */
        discovering: boolean
    }
    interface OnBluetoothDeviceFoundCallbackResult {
        /** 新搜索到的设备列表 */
        devices: BlueToothDevice[]
    }
    interface OnBroadcastCallbackResult {
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
    interface OnCharacteristicReadRequestCallbackResult {
        /** 唯一标识码，调用 writeCharacteristicValue 时使用 */
        callbackId: number
        /** characteristic对应的uuid */
        characteristicId: string
        /** service对应的uuid */
        serviceId: string
    }
    interface OnCharacteristicSubscribedCallbackResult {
        /** characteristic对应的uuid */
        characteristicId: string
        /** service对应的uuid */
        serviceId: string
    }
    interface OnCharacteristicWriteRequestCallbackResult {
        /** 唯一标识码，调用 writeCharacteristicValue 时使用 */
        callbackId: number
        /** characteristic对应的uuid */
        characteristicId: string
        /** service对应的uuid */
        serviceId: string
        /** 请求写入的特征值数据 */
        value: ArrayBuffer
    }
    interface OnCheckForUpdateCallbackResult {
        /** 是否有新版本 */
        hasUpdate: boolean
    }
    interface OnCompassChangeCallbackResult {
        /** 精度
         *
         * 最低基础库： `2.4.0` */
        accuracy: number | string
        /** 面对的方向度数 */
        direction: number
    }
    interface OnCopyUrlCallbackResult {
        /** 用短链打开小程序时当前页面携带的查询字符串。小程序中使用时，应在进入页面时调用 `wx.onCopyUrl` 自定义 `query`，退出页面时调用 `wx.offCopyUrl`，防止影响其它页面。 */
        query: string
    }
    interface OnDeviceMotionChangeCallbackResult {
        /** 当 手机坐标 X/Y 和 地球 X/Y 重合时，绕着 Z 轴转动的夹角为 alpha，范围值为 [0, 2*PI)。逆时针转动为正。 */
        alpha: number
        /** 当手机坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 beta。范围值为 [-1*PI, PI) 。顶部朝着地球表面转动为正。也有可能朝着用户为正。 */
        beta: number
        /** 当手机 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 gamma。范围值为 [-1*PI/2, PI/2)。右边朝着地球表面转动为正。 */
        gamma: number
    }
    interface OnDeviceOrientationChangeCallbackResult {
        /** 表示切换后的屏幕是横屏还是竖屏
         *
         * 可选值：
         * - 'portrait': 竖屏;
         * - 'landscape': 横屏正方向，以 HOME 键在屏幕右侧为正方向;
         * - 'landscapeReverse': 横屏反方向，以 HOME 键在屏幕左侧为反方向; */
        value: 'portrait' | 'landscape' | 'landscapeReverse'
    }
    interface OnDisconnectCallbackResult {
        /**
         *
         * 可选值：
         * - 'room': 房间服务断开连接，只有在进入房间后有机会收到。房间服务断开连接后，将无法进行房间相关的操作，以及无法收到房间信息变化事件。;
         * - 'game': 游戏服务断开连接，只有在游戏开始后有机会收到。游戏服务断开连接后，将无法收发帧。; */
        type: 'room' | 'game'
    }
    interface OnFrameRecordedCallbackResult {
        /** 录音分片数据 */
        frameBuffer: ArrayBuffer
        /** 当前帧是否正常录音结束前的最后一帧 */
        isLastFrame: boolean
    }
    interface OnGameEndCallbackResult {
        /** 游戏唯一标识，用于后台接口拉取对局记录 */
        gameAccessInfo: string
    }
    interface OnGyroscopeChangeCallbackResult {
        /** x 轴的角速度 */
        x: number
        /** y 轴的角速度 */
        y: number
        /** z 轴的角速度 */
        z: number
    }
    interface OnHandoffCallbackResult {
        /** 需要传递给接力客户端的 query */
        query: string
    }
    interface OnHeadersReceivedCallbackResult {
        /** 开发者服务器返回的 HTTP Response Header */
        header: IAnyObject
    }
    interface OnInviteCallbackResult {
        /** 邀请者附带的额外信息 */
        data: string
        /** 邀请者的 openId */
        openId: string
        res: IAnyObject
    }
    interface OnKeyDownCallbackResult {
        /** 同 Web 规范 KeyEvent code 属性 */
        code: string
        /** 同 Web 规范 KeyEvent key 属性 */
        key: string
        /** 事件触发时的时间戳 */
        timeStamp: number
    }
    interface OnKeyboardConfirmCallbackResult {
        /** 键盘输入的当前值 */
        value: string
    }
    interface OnKeyboardInputCallbackResult {
        /** 键盘输入的当前值 */
        value: IAnyObject
    }
    interface OnLockStepErrorCallbackResult {
        /** 错误码 */
        errCode: number
        /** 错误原因 */
        errMsg: string
    }
    interface OnMatchCallbackResult {
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
    interface OnMemoryWarningCallbackResult {
        /** 内存告警等级，只有 Android 才有，对应系统宏定义
         *
         * 可选值：
         * - 5: TRIM_MEMORY_RUNNING_MODERATE;
         * - 10: TRIM_MEMORY_RUNNING_LOW;
         * - 15: TRIM_MEMORY_RUNNING_CRITICAL; */
        level: 5 | 10 | 15
    }
    interface OnMouseDownCallbackResult {
        /** 按键类型，0左键，1中键，2右键 */
        button: number
        /** 事件触发时的时间戳 */
        timeStamp: number
        /** 事件触发时鼠标所在的位置横坐标 */
        x: number
        /** 事件触发时鼠标所在的位置纵坐标 */
        y: number
    }
    interface OnMouseMoveCallbackResult {
        /** 事件触发时的时间戳 */
        timeStamp: number
        /** 事件触发时鼠标所在的位置横坐标 */
        x: number
        /** 事件触发时鼠标所在的位置纵坐标 */
        y: number
    }
    interface OnNetworkStatusChangeCallbackResult {
        /** 当前是否有网络连接 */
        isConnected: boolean
        /** 网络类型
         *
         * 可选值：
         * - 'wifi': wifi 网络;
         * - '2g': 2g 网络;
         * - '3g': 3g 网络;
         * - '4g': 4g 网络;
         * - 'unknown': Android 下不常见的网络类型;
         * - 'none': 无网络; */
        networkType: 'wifi' | '2g' | '3g' | '4g' | 'unknown' | 'none'
    }
    interface OnOpenCallbackResult {
        /** 连接成功的 HTTP 响应 Header
         *
         * 最低基础库： `2.0.0` */
        header: IAnyObject
        /** 网络请求过程中一些调试信息
         *
         * 最低基础库： `2.10.4` */
        profile: SocketProfile
    }
    interface OnProgressCallbackResult {
        /** 当前的缓冲进度，缓冲进度区间为 (0~100]，100表示缓冲完成 */
        buffered: number
        /** 视频的总时长，单位为秒 */
        duration: number
    }
    interface OnResizeCallbackResult {
        /** 缩放后的高度 */
        height: number
        /** 缩放后的宽度 */
        width: number
    }
    interface OnRoomInfoChangeCallbackResult {
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
    interface OnShareAppMessageCallbackResult {
        /** 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4 */
        imageUrl: string
        /** 查询字符串，必须是 key1=val1&key2=val2 的格式。从这条转发消息进入后，可通过 wx.getLaunchOptionsSync() 或 wx.onShow() 获取启动参数中的 query。 */
        query: string
        /** 转发标题，不传则默认使用当前小游戏的昵称。 */
        title: string
        /** 审核通过的图片 ID，详见 [使用审核通过的转发图片]((share#使用审核通过的转发图片))
         *
         * 最低基础库： `2.4.3` */
        imageUrlId?: string
        /** 独立分包路径。详见 [小游戏独立分包指南](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/independent-sub-packages.html)
         *
         * 最低基础库： `2.12.2` */
        path?: string
        /** 如果该参数存在，则其它的参数将会以 resolve 结果为准，如果三秒内不 resolve，分享会使用上面传入的默认参数
         *
         * 最低基础库： `2.12.0` */
        promise?: Promise<any>
        /** 是否转发到当前群。该参数只对从群工具栏打开的场景下生效，默认转发到当前群，填入false时可转发到其他会话。
         *
         * 最低基础库： `2.12.2` */
        toCurrentGroup?: boolean
    }
    interface OnShareMessageToFriendCallbackResult {
        /** 错误信息 */
        errMsg: string
        /** 是否成功 */
        success: boolean
    }
    interface OnShareTimelineCallbackResult {
        /** 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。（该图片用于分享到朋友圈的卡片以及从朋友圈转发到会话消息的卡片展示） */
        imageUrl: string
        /** 朋友圈预览图链接，不传则默认使用当前游戏画面截图
         *
         * 最低基础库： `2.14.3` */
        imagePreviewUrl?: string
        /** 审核通过的朋友圈预览图图片 ID，详见 [使用审核通过的转发图片]((share#使用审核通过的转发图片))
         *
         * 最低基础库： `2.14.3` */
        imagePreviewUrlId?: string
        /** 审核通过的图片 ID，详见 [使用审核通过的转发图片]((share#使用审核通过的转发图片)) */
        imageUrlId?: string
        /** 独立分包路径。详见 [小游戏独立分包指南](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/independent-sub-packages.html)
         *
         * 最低基础库： `2.12.2` */
        path?: string
        /** 查询字符串，必须是 key1=val1&key2=val2 的格式。从这条转发消息进入后，可通过 wx.getLaunchOptionsSync() 或 wx.onShow() 获取启动参数中的 query。不传则默认使用当前页面query。 */
        query?: string
        /** 转发标题，不传则默认使用当前小游戏的昵称。 */
        title?: string
    }
    interface OnShowCallbackResult {
        /** 查询参数 */
        query: IAnyObject
        /** 当场景为由从另一个小程序或公众号或App打开时，返回此字段 */
        referrerInfo: ResultReferrerInfo
        /** 场景值 */
        scene: string
        /** shareTicket */
        shareTicket?: string
    }
    interface OnSocketOpenCallbackResult {
        /** 连接成功的 HTTP 响应 Header
         *
         * 最低基础库： `2.0.0` */
        header: IAnyObject
    }
    interface OnStateUpdateCallbackResult {
        /** 好友 openId */
        openId: string
        /** 系统状态，0 掉线 1 在线 */
        sysState: number
        /** 该玩家的自定义状态信息 */
        userState: string
    }
    interface OnStopCallbackResult {
        /** 录音总时长，单位：ms */
        duration: number
        /** 录音文件大小，单位：Byte */
        fileSize: number
        /** 录音文件的临时路径 (本地路径) */
        tempFilePath: string
    }
    interface OnSyncFrameCallbackResult {
        /** 帧数据列表，如果为空则说明该帧是空帧，每一项的类型与配置项 `lockStepOption.dataType` 一致 */
        actionList: string[] | ArrayBuffer[]
        /** 帧号，从 1 开始递增 */
        frameId: number
    }
    interface OnTapCallbackResult {
        /** 包括敏感数据在内的完整用户信息的加密数据，详细见[加密数据解密算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html) */
        encryptedData: string
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
    interface OnTimeUpdateCallbackResult {
        /** 视频的总时长，单位为秒 */
        duration: number
        /** 当前的播放位置，单位为秒 */
        position: number
    }
    interface OnTouchStartCallbackResult {
        /** 触发此次事件的触摸点列表 */
        changedTouches: Touch[]
        /** 事件触发时的时间戳 */
        timeStamp: number
        /** 当前所有触摸点的列表 */
        touches: Touch[]
    }
    interface OnUnhandledRejectionCallbackResult {
        /** 被拒绝的 promise 对象 */
        promise: string
        /** 拒绝原因，一般是一个 Error 对象 */
        reason: string
    }
    interface OnVoIPChatInterruptedCallbackResult {
        /** 错误码 */
        errCode: number
        /** 调用结果（错误原因） */
        errMsg: string
    }
    interface OnVoIPChatMembersChangedCallbackResult {
        /** 错误码 */
        errCode: number
        /** 调用结果 */
        errMsg: string
        /** 还在实时语音通话中的成员 openId 名单 */
        openIdList: string[]
    }
    interface OnVoIPChatSpeakersChangedCallbackResult {
        /** 错误码 */
        errCode: number
        /** 调用结果（错误原因） */
        errMsg: string
        /** 还在实时语音通话中的成员 openId 名单 */
        openIdList: string[]
    }
    interface OnWheelCallbackResult {
        /** 滚轮 x 轴方向滚动量，左正右负 */
        deltaX: number
        /** 滚轮 y 轴方向滚动量，上负下正 */
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
    interface OnWindowResizeCallbackResult {
        /** 变化后的窗口高度，单位 px */
        windowHeight: number
        /** 变化后的窗口宽度，单位 px */
        windowWidth: number
    }
    interface OpenBluetoothAdapterOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenBluetoothAdapterCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: OpenBluetoothAdapterFailCallback
        /** 蓝牙模式，可作为主/从设备，仅 iOS 需要。
         *
         * 可选值：
         * - 'central': 主机模式;
         * - 'peripheral': 从机模式;
         *
         * 最低基础库： `2.10.0` */
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
        /** 会话来源 */
        sessionFrom?: string
        /** 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息 */
        showMessageCard?: boolean
        /** 接口调用成功的回调函数 */
        success?: OpenCustomerServiceConversationSuccessCallback
    }
    /** 开放数据域对象 */
    interface OpenDataContext {
        /** [Canvas](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.html)
         *
         * 开放数据域和主域共享的 sharedCanvas */
        canvas: Canvas
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
    }
    interface OpenSettingOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenSettingCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: OpenSettingFailCallback
        /** 接口调用成功的回调函数 */
        success?: OpenSettingSuccessCallback
        /** 是否同时获取用户订阅消息的订阅状态，默认不获取。注意：withSubscriptions 只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。
         *
         * 最低基础库： `2.10.3` */
        withSubscriptions?: boolean
    }
    interface OpenSettingSuccessCallbackResult {
        /** [AuthSetting](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/AuthSetting.html)
         *
         * 用户授权结果 */
        authSetting: AuthSetting
        /** [SubscriptionsSetting](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/SubscriptionsSetting.html)
         *
         * 用户订阅消息设置，接口参数`withSubscriptions`值为`true`时才会返回。
         *
         * 最低基础库： `2.10.3` */
        subscriptionsSetting: SubscriptionsSetting
        errMsg: string
    }
    /** 按钮的样式 */
    interface OptionStyle {
        /** 背景颜色 */
        backgroundColor: string
        /** 边框颜色 */
        borderColor: string
        /** 边框圆角 */
        borderRadius: number
        /** 边框宽度 */
        borderWidth: number
        /** 文本的颜色。格式为 6 位 16 进制数。 */
        color: string
        /** 字号 */
        fontSize: number
        /** 高度 */
        height: number
        /** 左上角横坐标 */
        left: number
        /** 文本的行高 */
        lineHeight: number
        /** 文本的水平居中方式
         *
         * 可选值：
         * - 'left': 居左;
         * - 'center': 居中;
         * - 'right': 居右; */
        textAlign: 'left' | 'center' | 'right'
        /** 左上角纵坐标 */
        top: number
        /** 宽度 */
        width: number
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
    /** 插件帐号信息（仅在插件中调用时包含这一项） */
    interface Plugin {
        /** 插件 appId */
        appId: string
        /** 插件版本号 */
        version: string
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
        /** 是否显示长按菜单
         *
         * 最低基础库： `2.13.0` */
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
        /** 是否显示长按菜单
         *
         * 最低基础库： `2.13.0` */
        showmenu?: boolean
        /** 接口调用成功的回调函数 */
        success?: PreviewMediaSuccessCallback
    }
    interface ReadBLECharacteristicValueOption {
        /** 蓝牙特征值的 uuid */
        characteristicId: string
        /** 蓝牙设备 id */
        deviceId: string
        /** 蓝牙特征值对应服务的 uuid */
        serviceId: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ReadBLECharacteristicValueCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ReadBLECharacteristicValueFailCallback
        /** 接口调用成功的回调函数 */
        success?: ReadBLECharacteristicValueSuccessCallback
    }
    interface ReadFileFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail no such file or directory, open ${filePath}': 指定的 filePath 所在目录不存在;
         * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有读权限;
         * - 'fail sdcard not mounted': Android sdcard 挂载失败; */
        errMsg: string
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
        /** 指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte
         *
         * 最低基础库： `2.10.0` */
        length?: number
        /** 从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：byte
         *
         * 最低基础库： `2.10.0` */
        position?: number
        /** 接口调用成功的回调函数 */
        success?: ReadFileSuccessCallback
    }
    interface ReadFileSuccessCallbackResult {
        /** 文件内容 */
        data: string | ArrayBuffer
        errMsg: string
    }
    interface ReaddirFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail no such file or directory ${dirPath}': 目录不存在;
         * - 'fail not a directory ${dirPath}': dirPath 不是目录;
         * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有读权限;
         * - 'fail sdcard not mounted': Android sdcard 挂载失败; */
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
        accessInfo: number
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ReconnectCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ReconnectFailCallback
        /** 接口调用成功的回调函数 */
        success?: ReconnectSuccessCallback
    }
    interface ReconnectSuccessCallbackDataResult {
        /** 此时服务器的最大帧号。 */
        maxFrameId: any[]
    }
    interface ReconnectSuccessCallbackResult {
        data: ReconnectSuccessCallbackDataResult
        errMsg: string
    }
    interface RecorderManagerStartOption {
        /** 指定录音的音频输入源，可通过 [wx.getAvailableAudioSources()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.getAvailableAudioSources.html) 获取当前可用的音频源
         *
         * 可选值：
         * - 'auto': 自动设置，默认使用手机麦克风，插上耳麦后自动切换使用耳机麦克风，所有平台适用;
         * - 'buildInMic': 手机麦克风，仅限 iOS;
         * - 'headsetMic': 有线耳机麦克风，仅限 iOS;
         * - 'mic': 麦克风（没插耳麦时是手机麦克风，插耳麦时是耳机麦克风），仅限 Android;
         * - 'camcorder': 同 mic，适用于录制音视频内容，仅限 Android;
         * - 'voice_communication': 同 mic，适用于实时沟通，仅限 Android;
         * - 'voice_recognition': 同 mic，适用于语音识别，仅限 Android;
         *
         * 最低基础库： `2.1.0` */
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
        /** 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。 */
        frameSize?: number
        /** 录音通道数
         *
         * 可选值：
         * - 1: 1 个通道;
         * - 2: 2 个通道; */
        numberOfChannels?: 1 | 2
        /** 采样率
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
    /** 菜单按钮的布局位置信息 */
    interface Rect {
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
    /** 消息来源的结构化信息 */
    interface RemoteInfo {
        /** 发送消息的 socket 的地址 */
        address: string
        /** 使用的协议族，为 IPv4 或者 IPv6 */
        family: string
        /** 端口号 */
        port: number
        /** message 的大小，单位：字节 */
        size: number
    }
    interface RemoveSavedFileFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail file not exist': 指定的 tempFilePath 找不到文件; */
        errMsg: string
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
        /** service 的 uuid */
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
    interface RenameFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail permission denied, rename ${oldPath} -> ${newPath}': 指定源文件或目标文件没有写权限;
         * - 'fail no such file or directory, rename ${oldPath} -> ${newPath}': 源文件不存在，或目标文件路径的上层目录不存在; */
        errMsg: string
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
     *
     * iOS/Android 不支持的 2d 属性和接口
     *
     * - globalCompositeOperation 不支持以下值： source-in source-out destination-atop lighter copy。如果使用，不会报错，但是将得到与预期不符的结果。
     * - isPointInPath
     *
     * **WebGL 接口支持情况**
     *
     *
     * 压缩纹理的支持
     * - iOS 支持 pvr 格式
     * - Android 支持 etc1 格式 */
    interface RenderingContext {}
    interface ReportUserBehaviorBranchAnalyticsOption {
        /** 分支ID，在「小程序管理后台」获取 */
        branchId: string
        /** 事件类型，1：曝光； 2：点击 */
        eventType: number
        /** 自定义维度，基础库 v2.14.0 开始支持可选 */
        branchDim?: string
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
        /** 开启 cache
         *
         * 最低基础库： `2.10.4` */
        enableCache?: boolean
        /** 开启 http2
         *
         * 最低基础库： `2.10.4` */
        enableHttp2?: boolean
        /** 开启 quic
         *
         * 最低基础库： `2.10.4` */
        enableQuic?: boolean
        /** 接口调用失败的回调函数 */
        fail?: RequestFailCallback
        /** 设置请求的 header，header 中不能设置 Referer。
         *
         * `content-type` 默认为 `application/json` */
        header?: IAnyObject
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
        /** 响应的数据类型
         *
         * 可选值：
         * - 'text': 响应的数据为文本;
         * - 'arraybuffer': 响应的数据为 ArrayBuffer;
         *
         * 最低基础库： `1.7.0` */
        responseType?: 'text' | 'arraybuffer'
        /** 接口调用成功的回调函数 */
        success?: RequestSuccessCallback<T>
        /** 超时时间，单位为毫秒
         *
         * 最低基础库： `2.10.0` */
        timeout?: number
    }
    /** 网络请求过程中一些调试信息
     *
     * 最低基础库： `2.10.4` */
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
        domainLookupEnd: number
        /** DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
        domainLookupStart: number
        /** 评估当前网络下载的kbps */
        downstreamThroughputKbpsEstimate: number
        /** 评估的网络状态 slow 2g/2g/3g/4g */
        estimate_nettype: string
        /** 组件准备好使用 HTTP 请求抓取资源的时间，这发生在检查本地缓存之前 */
        fetchStart: number
        /** 协议层根据多个请求评估当前网络的 rtt（仅供参考） */
        httpRttEstimate: number
        /** 当前请求的IP */
        peerIP: string
        /** 当前请求的端口 */
        port: number
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
        /** 系统订阅消息类型列表，一次调用最多可订阅3种类型的消息，目前支持两种类型，"SYS_MSG_TYPE_INTERACTIVE"（好友互动提醒）、"SYS_MSG_TYPE_RANK"（排行榜超越提醒） */
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
        /** 开发者服务器返回的 cookies，格式为字符串数组
         *
         * 最低基础库： `2.10.0` */
        cookies: string[]
        /** 开发者服务器返回的数据 */
        data: T
        /** 开发者服务器返回的 HTTP Response Header
         *
         * 最低基础库： `1.2.0` */
        header: IAnyObject
        /** 网络请求过程中一些调试信息
         *
         * 最低基础库： `2.10.4` */
        profile: RequestProfile
        /** 开发者服务器返回的 HTTP 状态码 */
        statusCode: number
        errMsg: string
    }
    interface Res {
        /** 好友状态信息列表 */
        list: StateData[]
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
    interface RewardedVideoAdOnCloseCallbackResult {
        /** 视频是否是在用户完整观看的情况下被关闭的
         *
         * 最低基础库： `2.1.0` */
        isEnded: boolean
    }
    interface RmdirFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail no such file or directory ${dirPath}': 目录不存在;
         * - 'fail directory not empty': 目录不为空;
         * - 'fail permission denied, open ${dirPath}': 指定的 dirPath 路径没有写权限;
         * - 'fail sdcard not mounted': Android sdcard 挂载失败; */
        errMsg: string
    }
    interface RmdirOption {
        /** 要删除的目录路径 (本地路径) */
        dirPath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RmdirCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: RmdirFailCallback
        /** 是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。
         *
         * 最低基础库： `2.3.0` */
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
    /** 在竖屏正方向下的安全区域
     *
     * 最低基础库： `2.7.0` */
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
    interface SaveFileFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail tempFilePath file not exist': 指定的 tempFilePath 找不到文件;
         * - 'fail permission denied, open "${filePath}"': 指定的 filePath 路径没有写权限;
         * - 'fail no such file or directory "${dirPath}"': 上级目录不存在;
         * - 'fail the maximum size of the file storage limit is exceeded': 存储空间不足;
         * - 'fail sdcard not mounted': Android sdcard 挂载失败; */
        errMsg: string
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
    interface SetBLEMTUOption {
        /** 用于区分设备的 id */
        deviceId: string
        /** 最大传输单元(22,512) 区间内，单位 bytes */
        mtu: number
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: SetBLEMTUCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: SetBLEMTUFailCallback
        /** 接口调用成功的回调函数 */
        success?: SetBLEMTUSuccessCallback
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
        /** 需要传递的代表场景的数字，需要在 0 - 50 之间 */
        shareMessageToFriendScene: number
    }
    interface SetScreenBrightnessOption {
        /** 屏幕亮度值，范围 0 ~ 1。0 最暗，1 最亮 */
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
        timeRange: number[]
        /** 对局回放的播放速率，只能设置以下几个值：0.3，0.5，1，1.5，2，2.5，3。其中1表示原速播放，小于1表示减速播放，大于1表示加速播放。
         *
         * 最低基础库： `2.9.2` */
        atempo?: number
        /** 如果原始视频文件中有音频，是否与新传入的bgm混音，默认为false，表示不混音，只保留一个音轨，值为true时表示原始音频与传入的bgm混音。
         *
         * 最低基础库： `2.10.0` */
        audioMix?: boolean
        /** 对局回放背景音乐的地址。必须是一个代码包文件路径或者 wxfile:// 文件路径，不支持 http/https 开头的 url。 */
        bgm?: string
        /** 对局回放的按钮的配置。对局回放按钮的文案不能随意设置，只能选择预设的文案模版。 */
        button?: ButtonShare
        /** 分享的对局回放打开后跳转小游戏的 path （独立分包路径）。详见 [小游戏独立分包指南](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/independent-sub-packages.html)
         *
         * 最低基础库： `2.13.2` */
        path?: string
        /** 分享的对局回放打开后跳转小游戏的 query。 */
        query?: string
        /** 对局回放的标题的配置。对局回放标题不能随意设置，只能选择预设的文案模版和对应的参数。 */
        title?: TitleShare
        /** 对局回放的音量大小，最小 0，最大 1。
         *
         * 最低基础库： `2.9.2` */
        volume?: number
    }
    interface ShareAppMessageOption {
        /** 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4 */
        imageUrl?: string
        /** 审核通过的图片 ID，详见 [使用审核通过的转发图片]((share#使用审核通过的转发图片))
         *
         * 最低基础库： `2.4.3` */
        imageUrlId?: string
        /** 独立分包路径。详见 [小游戏独立分包指南](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/independent-sub-packages.html)
         *
         * 最低基础库： `2.12.2` */
        path?: string
        /** 查询字符串，从这条转发消息进入后，可通过 wx.getLaunchOptionsSync() 或 wx.onShow() 获取启动参数中的 query。必须是 key1=val1&key2=val2 的格式。 */
        query?: string
        /** 转发标题，不传则默认使用当前小游戏的昵称。 */
        title?: string
        /** 是否转发到当前群。该参数只对从群工具栏打开的场景下生效，默认转发到当前群，填入false时可转发到其他会话。
         *
         * 最低基础库： `2.12.2` */
        toCurrentGroup?: boolean
    }
    interface ShareMessageToFriendOption {
        /** 发送对象的 openId */
        openId: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShareMessageToFriendCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ShareMessageToFriendFailCallback
        /** 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4 */
        imageUrl?: string
        /** 审核通过的图片 ID，详见 [使用审核通过的转发图片]((share#使用审核通过的转发图片)) */
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
        timeRange: number[]
        /** 对局回放的播放速率，只能设置以下几个值：0.3，0.5，1，1.5，2，2.5，3。其中1表示原速播放，小于1表示减速播放，大于1表示加速播放。
         *
         * 最低基础库： `2.9.2` */
        atempo?: number
        /** 如果原始视频文件中有音频，是否与新传入的bgm混音，默认为false，表示不混音，只保留一个音轨，值为true时表示原始音频与传入的bgm混音。
         *
         * 最低基础库： `2.10.0` */
        audioMix?: boolean
        /** 对局回放的按钮。只能选择预设的文案模版。 */
        button?: ButtonShareOption
        /** 分享的对局回放打开后跳转小游戏的 path （独立分包路径）。详见 [小游戏独立分包指南](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/independent-sub-packages.html)
         *
         * 最低基础库： `2.13.2` */
        path?: string
        /** 分享的对局回放打开后跳转小游戏的 query。 */
        query?: string
        /** 对局回放的标题。对局回放标题不能随意设置，只能选择预设的文案模版和对应的参数。 */
        title?: TitleShareOption
        /** 对局回放的音量大小，最小 0，最大 1。
         *
         * 最低基础库： `2.9.2` */
        volume?: number
    }
    interface ShowActionSheetOption {
        /** 按钮的文字数组，数组长度最大为 6 */
        itemList: string[]
        /** 警示文案
         *
         * 最低基础库： `2.14.0` */
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
        /** 当点击完成时键盘是否收起 */
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
        /** 提示的内容，editable 为 true 时，会输入框默认文本 */
        content?: string
        /** 是否显示输入框
         *
         * 最低基础库： `2.15.0` */
        editable?: boolean
        /** 接口调用失败的回调函数 */
        fail?: ShowModalFailCallback
        /** 输入框提示文本
         *
         * 最低基础库： `2.15.0` */
        placeholderText?: string
        /** 是否显示取消按钮 */
        showCancel?: boolean
        /** 接口调用成功的回调函数 */
        success?: ShowModalSuccessCallback
        /** 提示的标题 */
        title?: string
    }
    interface ShowModalSuccessCallbackResult {
        /** 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）
         *
         * 最低基础库： `1.1.0` */
        cancel: boolean
        /** 为 true 时，表示用户点击了确定按钮 */
        confirm: boolean
        /** editable 为 true 时，用户输入的文本 */
        content: string
        errMsg: string
    }
    interface ShowShareImageMenuOption {
        /** 要分享的图片地址，必须为本地路径或临时路径 */
        path: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShowShareImageMenuCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ShowShareImageMenuFailCallback
        /** 接口调用成功的回调函数 */
        success?: ShowShareImageMenuSuccessCallback
    }
    interface ShowShareMenuOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShowShareMenuCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ShowShareMenuFailCallback
        /** 本接口为 Beta 版本，暂只在 Android 平台支持。需要显示的转发按钮名称列表，默认['shareAppMessage']。按钮名称合法值包含 "shareAppMessage"、"shareTimeline" 两种
         *
         * 最低基础库： `2.11.3` */
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
        /** 自定义图标的本地路径，image 的优先级高于 icon
         *
         * 最低基础库： `1.1.0` */
        image?: string
        /** 是否显示透明蒙层，防止触摸穿透 */
        mask?: boolean
        /** 接口调用成功的回调函数 */
        success?: ShowToastSuccessCallback
    }
    /** 网络请求过程中一些调试信息
     *
     * 最低基础库： `2.10.4` */
    interface SocketProfile {
        /** 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间。注意这里握手结束，包括安全连接建立完成、SOCKS 授权通过 */
        connectEnd: number
        /** 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间 */
        connectStart: number
        /** 上层请求到返回的耗时 */
        cost: number
        /** DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
        domainLookupEnd: number
        /** DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
        domainLookupStart: number
        /** 组件准备好使用 SOCKET 建立请求的时间，这发生在检查本地缓存之前 */
        fetchStart: number
        /** 握手耗时 */
        handshakeCost: number
        /** 单次连接的耗时，包括 connect ，tls */
        rtt: number
    }
    interface SocketTaskOnCloseCallbackResult {
        /** 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。 */
        code: number
        /** 一个可读的字符串，表示连接被关闭的原因。 */
        reason: string
    }
    interface SocketTaskOnMessageCallbackResult {
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
        /** 监听加速度数据回调函数的执行频率
         *
         * 可选值：
         * - 'game': 适用于更新游戏的回调频率，在 20ms/次 左右;
         * - 'ui': 适用于更新 UI 的回调频率，在 60ms/次 左右;
         * - 'normal': 普通的回调频率，在 200ms/次 左右;
         *
         * 最低基础库： `2.1.0` */
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
        /** iBeacon 设备广播的 uuid 列表 */
        uuids: string[]
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StartBeaconDiscoveryCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StartBeaconDiscoveryFailCallback
        /** 是否校验蓝牙开关，仅在 iOS 下有效 */
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
        /** 上报设备的间隔。0 表示找到新设备立即上报，其他数值根据传入的间隔上报。 */
        interval?: number
        /** 扫描模式，越高扫描越快，也越耗电, 仅安卓 7.0.12 及以上支持。
         *
         * 可选值：
         * - 'low': 低;
         * - 'medium': 中;
         * - 'high': 高; */
        powerLevel?: 'low' | 'medium' | 'high'
        /** 要搜索的蓝牙设备主 service 的 uuid 列表。某些蓝牙设备会广播自己的主 service 的 uuid。如果设置此参数，则只搜索广播包有对应 uuid 的主服务的蓝牙设备。建议主要通过该参数过滤掉周边不需要处理的其他蓝牙设备。 */
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
    interface StatFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail permission denied, open ${path}': 指定的 path 路径没有读权限;
         * - 'fail no such file or directory ${path}': 文件不存在;
         * - 'fail sdcard not mounted': Android sdcard 挂载失败; */
        errMsg: string
    }
    interface StatOption {
        /** 文件/目录路径 (本地路径) */
        path: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StatCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StatFailCallback
        /** 是否递归获取目录下的每个文件的 Stats 信息
         *
         * 最低基础库： `2.3.0` */
        recursive?: boolean
        /** 接口调用成功的回调函数 */
        success?: StatSuccessCallback
    }
    interface StatSuccessCallbackResult {
        /** [Stats](https://developers.weixin.qq.com/minigame/dev/api/file/Stats.html)|Object
         *
         * 当 recursive 为 false 时，res.stats 是一个 Stats 对象。当 recursive 为 true 且 path 是一个目录的路径时，res.stats 是一个 Object，key 以 path 为根路径的相对路径，value 是该路径对应的 Stats 对象。 */
        stats: Stats | IAnyObject
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
        openid: string
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
        mode: string
        /** 文件大小，单位：B，对应 POSIX stat.st_size */
        size: number
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
    interface StopGyroscopeOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: StopGyroscopeCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: StopGyroscopeFailCallback
        /** 接口调用成功的回调函数 */
        success?: StopGyroscopeSuccessCallback
    }
    /** 单个游戏icon的位置和样式信息 */
    interface StyleItem {
        /** 游戏名称是否隐藏 */
        appNameHidden: boolean
        /** 游戏icon的border颜色色值 */
        borderColor: string
        /** 游戏icon的border尺寸 */
        borderWidth: number
        /** 游戏名称的颜色色值 */
        color: string
        /** 游戏icon的X轴坐标 */
        left: number
        /** 游戏icon的宽高值 */
        size: number
        /** 游戏icon的Y轴坐标 */
        top: number
    }
    /** 订阅消息设置
*
* **示例代码**
*
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
        /** 每一项订阅消息的订阅状态。itemSettings对象的键为**一次性订阅消息的模板id**或**系统订阅消息的类型**，值为'accept'、'reject'、'ban'中的其中一种。'accept'表示用户同意订阅这条消息，'reject'表示用户拒绝订阅这条消息，'ban'表示已被后台封禁。一次性订阅消息使用方法详见 [wx.requestSubscribeMessage](https://developers.weixin.qq.com/minigame/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html)，永久订阅消息（仅小游戏可用）使用方法详见[wx.requestSubscribeSystemMessage](/minigame/dev/api/open-api/subscribe-message/wx.requestSubscribeSystemMessage.html)
         * ## 注意事项
         *  - itemSettings 只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。 */
        itemSettings?: IAnyObject
    }
    interface SystemInfo {
        /** 客户端基础库版本
         *
         * 最低基础库： `1.1.0` */
        SDKVersion: string
        /** 允许微信使用相册的开关（仅 iOS 有效）
         *
         * 最低基础库： `2.6.0` */
        albumAuthorized: boolean
        /** 设备性能等级（仅 Android）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50）
         *
         * 最低基础库： `1.8.0` */
        benchmarkLevel: number
        /** 蓝牙的系统开关
         *
         * 最低基础库： `2.6.0` */
        bluetoothEnabled: boolean
        /** 设备品牌
         *
         * 最低基础库： `1.5.0` */
        brand: string
        /** 允许微信使用摄像头的开关
         *
         * 最低基础库： `2.6.0` */
        cameraAuthorized: boolean
        /** 设备方向
         *
         * 可选值：
         * - 'portrait': 竖屏;
         * - 'landscape': 横屏; */
        deviceOrientation: 'portrait' | 'landscape'
        /** 是否已打开调试。可通过右上角菜单或 [wx.setEnableDebug](https://developers.weixin.qq.com/minigame/dev/api/base/debug/wx.setEnableDebug.html) 打开调试。
         *
         * 最低基础库： `2.15.0` */
        enableDebug: boolean
        /** 用户字体大小（单位px）。以微信客户端「我-设置-通用-字体大小」中的设置为准
         *
         * 最低基础库： `1.5.0` */
        fontSizeSetting: number
        /** 微信设置的语言 */
        language: string
        /** 允许微信使用定位的开关
         *
         * 最低基础库： `2.6.0` */
        locationAuthorized: boolean
        /** 地理位置的系统开关
         *
         * 最低基础库： `2.6.0` */
        locationEnabled: boolean
        /** `true` 表示模糊定位，`false` 表示精确定位，仅 iOS 支持 */
        locationReducedAccuracy: boolean
        /** 允许微信使用麦克风的开关
         *
         * 最低基础库： `2.6.0` */
        microphoneAuthorized: boolean
        /** 设备型号。新机型刚推出一段时间会显示unknown，微信会尽快进行适配。 */
        model: string
        /** 允许微信通知带有提醒的开关（仅 iOS 有效）
         *
         * 最低基础库： `2.6.0` */
        notificationAlertAuthorized: boolean
        /** 允许微信通知的开关
         *
         * 最低基础库： `2.6.0` */
        notificationAuthorized: boolean
        /** 允许微信通知带有标记的开关（仅 iOS 有效）
         *
         * 最低基础库： `2.6.0` */
        notificationBadgeAuthorized: boolean
        /** 允许微信通知带有声音的开关（仅 iOS 有效）
         *
         * 最低基础库： `2.6.0` */
        notificationSoundAuthorized: boolean
        /** 设备像素比 */
        pixelRatio: number
        /** 客户端平台 */
        platform: string
        /** 在竖屏正方向下的安全区域
         *
         * 最低基础库： `2.7.0` */
        safeArea: SafeArea
        /** 屏幕高度，单位px
         *
         * 最低基础库： `1.1.0` */
        screenHeight: number
        /** 屏幕宽度，单位px
         *
         * 最低基础库： `1.1.0` */
        screenWidth: number
        /** 状态栏的高度，单位px
         *
         * 最低基础库： `1.9.0` */
        statusBarHeight: number
        /** 操作系统及版本 */
        system: string
        /** 微信版本号 */
        version: string
        /** Wi-Fi 的系统开关
         *
         * 最低基础库： `2.6.0` */
        wifiEnabled: boolean
        /** 可使用窗口高度，单位px */
        windowHeight: number
        /** 可使用窗口宽度，单位px */
        windowWidth: number
        /** 系统当前主题，取值为`light`或`dark`，全局配置`"darkmode":true`时才能获取，否则为 undefined （不支持小游戏）
         *
         * 可选值：
         * - 'dark': 深色主题;
         * - 'light': 浅色主题;
         *
         * 最低基础库： `2.11.0` */
        theme?: 'dark' | 'light'
    }
    /** 对局回放的标题的配置。对局回放标题不能随意设置，只能选择预设的文案模版和对应的参数。 */
    interface TitleShare {
        /** 对局回放的标题的模版参数。 */
        data?: IAnyObject
        /** 对局回放的标题的模版。不传则为：${用户昵称} 在 ${游戏名称} 的游戏时刻
         *
         * 可选值：
         * - 'default.score': 模版格式为，《小游戏名称》，本局得分：${score}，对应的 data 应该如 { score: 4500 };
         * - 'default.level': 模版格式为，《小游戏名称》，当前关卡：第42关，对应的 data 应该如 { level: 23 };
         * - 'default.opponent': 模版格式为，《小游戏名称》，本局对手：${opponent}，对应的 data 应该如 { opponent_openid: 'oC6J75Sh1_4K8Mf5b1mlgDkMPhoI' };
         * - 'default.cost': 模版格式为，《小游戏名称》，本局耗时：${cost}秒，对应的 data 应该如 { cost_seconds: 123 }; */
        template?:
            | 'default.score'
            | 'default.level'
            | 'default.opponent'
            | 'default.cost'
    }
    /** 对局回放的标题。对局回放标题不能随意设置，只能选择预设的文案模版和对应的参数。 */
    interface TitleShareOption {
        /** 对局回放的标题的模版参数。 */
        data?: IAnyObject
        /** 对局回放的标题的模版。不传则为：${用户昵称} 在 ${游戏名称} 的游戏时刻
         *
         * 可选值：
         * - 'default.score': 模版格式为，${游戏名称}，本局得分：${score}，对应的 data 应该如 { score: 4500 };
         * - 'default.level': 模版格式为，${游戏名称}，当前关卡：第42关，对应的 data 应该如 { level: 23 };
         * - 'default.opponent': 模版格式为，${游戏名称}，本局对手：${opponent}，对应的 data 应该如 { opponent_openid: 'oC6J75Sh1_4K8Mf5b1mlgDkMPhoI' };
         * - 'default.cost': 模版格式为，${游戏名称}，本局耗时：${cost}秒，对应的 data 应该如 { cost_seconds: 123 }; */
        template?:
            | 'default.score'
            | 'default.level'
            | 'default.opponent'
            | 'default.cost'
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
    interface UDPSocketOnErrorCallbackResult {
        /** 错误信息 */
        errMsg: string
    }
    interface UDPSocketOnMessageCallbackResult {
        /** 收到的消息 */
        message: ArrayBuffer
        /** 消息来源的结构化信息 */
        remoteInfo: RemoteInfo
    }
    interface UDPSocketSendOption {
        /** 要发消息的地址。在基础库 2.9.3 及之前版本可以是一个和本机同网段的 IP 地址，也可以是在安全域名列表内的域名地址；在基础库 2.9.4 及之后版本，可以是任意 IP 和域名 */
        address: string
        /** 要发送的数据 */
        message: string | ArrayBuffer
        /** 要发送消息的端口号 */
        port: number
        /** 发送数据的长度，仅当 message 为 ArrayBuffer 类型时有效 */
        length?: number
        /** 发送数据的偏移量，仅当 message 为 ArrayBuffer 类型时有效 */
        offset?: number
    }
    interface UnlinkFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail permission denied, open ${path}': 指定的 path 路径没有读权限;
         * - 'fail no such file or directory ${path}': 文件不存在;
         * - 'fail operation not permitted, unlink ${filePath}': 传入的 filePath 是一个目录;
         * - 'fail sdcard not mounted': Android sdcard 挂载失败; */
        errMsg: string
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
    interface UnzipFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail permission denied, unzip ${zipFilePath} -> ${destPath}': 指定目标文件路径没有写权限;
         * - 'fail no such file or directory, unzip ${zipFilePath} -> "${destPath}': 源文件不存在，或目标文件路径的上层目录不存在; */
        errMsg: string
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
    /** 动态消息的模板信息
     *
     * 最低基础库： `2.4.0` */
    interface UpdatableMessageFrontEndTemplateInfo {
        /** 参数列表 */
        parameterList: UpdatableMessageFrontEndParameter[]
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
        /** 动态消息的 activityId。通过 [updatableMessage.createActivityId](https://developers.weixin.qq.com/minigame/dev/api-backend/open-api/updatable-message/updatableMessage.createActivityId.html) 接口获取
         *
         * 最低基础库： `2.4.0` */
        activityId?: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: UpdateShareMenuCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: UpdateShareMenuFailCallback
        /** 是否是私密消息。详见 [小程序私密消息](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/share/private-message.html)
         *
         * 最低基础库： `2.13.0` */
        isPrivateMessage?: boolean
        /** 是否是动态消息，详见[动态消息](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/share/updatable-message.html)
         *
         * 最低基础库： `2.4.0` */
        isUpdatableMessage?: boolean
        /** 接口调用成功的回调函数 */
        success?: UpdateShareMenuSuccessCallback
        /** 动态消息的模板信息
         *
         * 最低基础库： `2.4.0` */
        templateInfo?: UpdatableMessageFrontEndTemplateInfo
        /** 群待办消息的id，通过toDoActivityId可以把多个群待办消息聚合为同一个。通过 [updatableMessage.createActivityId](https://developers.weixin.qq.com/minigame/dev/api-backend/open-api/updatable-message/updatableMessage.createActivityId.html) 接口获取。详见[群待办消息](#)
         *
         * 最低基础库： `2.11.0` */
        toDoActivityId?: string
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
        /** 接口调用失败的回调函数 */
        fail?: UploadFileFailCallback
        /** HTTP 请求中其他额外的 form data */
        formData?: IAnyObject
        /** HTTP 请求 Header，Header 中不能设置 Referer */
        header?: IAnyObject
        /** 接口调用成功的回调函数 */
        success?: UploadFileSuccessCallback
        /** 超时时间，单位为毫秒
         *
         * 最低基础库： `2.10.0` */
        timeout?: number
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
    interface UploadTaskOnProgressUpdateCallbackResult {
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
    /** 用户信息 */
    interface UserInfo {
        /** 用户头像图片的 URL。URL 最后一个数值代表正方形头像大小（有 0、46、64、96、132 数值可选，0 代表 640x640 的正方形头像，46 表示 46x46 的正方形头像，剩余数值以此类推。默认132），用户没有头像时该项为空。若用户更换头像，原有头像 URL 将失效。 */
        avatarUrl: string
        /** 用户所在城市 */
        city: string
        /** 用户所在国家 */
        country: string
        /** 用户性别
         *
         * 可选值：
         * - 0: 未知;
         * - 1: 男性;
         * - 2: 女性; */
        gender: 0 | 1 | 2
        /** 显示 country，province，city 所用的语言
         *
         * 可选值：
         * - 'en': 英文;
         * - 'zh_CN': 简体中文;
         * - 'zh_TW': 繁体中文; */
        language: 'en' | 'zh_CN' | 'zh_TW'
        /** 用户昵称 */
        nickName: string
        /** 用户所在省份 */
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
    }
    interface VibrateLongOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: VibrateLongCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: VibrateLongFailCallback
        /** 接口调用成功的回调函数 */
        success?: VibrateLongSuccessCallback
    }
    interface VibrateShortOption {
        /** 震动强度类型，有效值为：heavy、medium、light
         *
         * 最低基础库： `2.13.0` */
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
        /** 视频背景颜色
         *
         * 最低基础库： `2.12.0` */
        backgroundColor: boolean
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
        /** 视频是否遵从系统静音开关设置（仅iOS）
         *
         * 最低基础库： `2.4.0` */
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
        /** 是否显示视频底部进度条
         *
         * 最低基础库： `2.12.0` */
        showProgress: boolean
        /** 是否显示视频控制栏进度条
         *
         * 最低基础库： `2.12.0` */
        showProgressInControlMode: boolean
        /** 视频的资源地址 */
        src: string
        /** 视频的宽度 */
        width: number
        /** 视频的左上角横坐标 */
        x: number
        /** 视频的左上角纵坐标 */
        y: number
    }
    interface VideoDecoderStartOption {
        /** 需要解码的视频源文件。基础库 2.13.0 以下的版本只支持本地路径。 2.13.0 开始支持 http:// 和 https:// 协议的远程路径。 */
        source: string
        /** 解码模式。0：按 pts 解码；1：以最快速度解码 */
        mode?: number
    }
    interface VideoOnErrorCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'MEDIA_ERR_NETWORK': 当下载时发生错误;
         * - 'MEDIA_ERR_DECODE': 当解码时发生错误;
         * - 'MEDIA_ERR_SRC_NOT_SUPPORTED': video 的 src 属性是不支持的资源类型; */
        errMsg: string
    }
    interface WorkerOnMessageCallbackResult {
        /** 主线程/Worker 线程向当前线程发送的消息 */
        message: IAnyObject
    }
    interface WriteBLECharacteristicValueOption {
        /** 蓝牙特征值的 uuid */
        characteristicId: string
        /** 蓝牙设备 id */
        deviceId: string
        /** 蓝牙特征值对应服务的 uuid */
        serviceId: string
        /** 蓝牙设备特征值对应的二进制值 */
        value: ArrayBuffer
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: WriteBLECharacteristicValueCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: WriteBLECharacteristicValueFailCallback
        /** 接口调用成功的回调函数 */
        success?: WriteBLECharacteristicValueSuccessCallback
    }
    interface WriteCharacteristicValueObject {
        /** characteristic对应的uuid */
        characteristicId: string
        /** 是否需要通知主机value已更新 */
        needNotify: boolean
        /** service 的 uuid */
        serviceId: string
        /** 特征值对应的二进制值 */
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
    interface WriteFileFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail no such file or directory, open ${filePath}': 指定的 filePath 所在目录不存在;
         * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有写权限;
         * - 'fail the maximum size of the file storage limit is exceeded': 存储空间不足;
         * - 'fail sdcard not mounted': Android sdcard 挂载失败; */
        errMsg: string
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
        fail?: WriteFileFailCallback
        /** 接口调用成功的回调函数 */
        success?: WriteFileSuccessCallback
    }
    interface WxGetFileInfoOption {
        /** 本地文件路径 (本地路径) */
        filePath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetFileInfoCompleteCallback
        /** 计算文件摘要的算法
         *
         * 可选值：
         * - 'md5': md5 算法;
         * - 'sha1': sha1 算法; */
        digestAlgorithm?: 'md5' | 'sha1'
        /** 接口调用失败的回调函数 */
        fail?: WxGetFileInfoFailCallback
        /** 接口调用成功的回调函数 */
        success?: WxGetFileInfoSuccessCallback
    }
    interface WxGetFileInfoSuccessCallbackResult {
        /** 按照传入的 digestAlgorithm 计算得出的的文件摘要 */
        digest: string
        /** 文件大小，以字节为单位 */
        size: number
        errMsg: string
    }
    interface WxOnErrorCallbackResult {
        /** 错误 */
        message: string
        /** 错误调用堆栈 */
        stack: string
    }
    interface BLEPeripheralServer {
        /** [BLEPeripheralServer.addService(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.addService.html)
         *
         * 添加服务。
         *
         * 最低基础库： `2.10.3` */
        addService(option: AddServiceOption): void
        /** [BLEPeripheralServer.offCharacteristicReadRequest(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.offCharacteristicReadRequest.html)
         *
         * 取消监听已连接的设备请求读当前外围设备的特征值事件
         *
         * 最低基础库： `2.10.3` */
        offCharacteristicReadRequest(
            /** 已连接的设备请求读当前外围设备的特征值事件的回调函数 */
            callback?: OffCharacteristicReadRequestCallback
        ): void
        /** [BLEPeripheralServer.offCharacteristicSubscribed(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.offCharacteristicSubscribed.html)
         *
         * 取消监听特征值订阅事件
         *
         * 最低基础库： `2.13.0` */
        offCharacteristicSubscribed(
            /** 特征值订阅事件的回调函数 */
            callback?: OffCharacteristicSubscribedCallback
        ): void
        /** [BLEPeripheralServer.offCharacteristicUnsubscribed(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.offCharacteristicUnsubscribed.html)
         *
         * 取消监听取消特征值订阅事件
         *
         * 最低基础库： `2.13.0` */
        offCharacteristicUnsubscribed(
            /** 取消特征值订阅事件的回调函数 */
            callback?: OffCharacteristicUnsubscribedCallback
        ): void
        /** [BLEPeripheralServer.offCharacteristicWriteRequest(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.offCharacteristicWriteRequest.html)
         *
         * 取消监听已连接的设备请求写当前外围设备的特征值事件
         *
         * 最低基础库： `2.10.3` */
        offCharacteristicWriteRequest(
            /** 已连接的设备请求写当前外围设备的特征值事件的回调函数 */
            callback?: OffCharacteristicWriteRequestCallback
        ): void
        /** [BLEPeripheralServer.onCharacteristicReadRequest(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.onCharacteristicReadRequest.html)
         *
         * 监听已连接的设备请求读当前外围设备的特征值事件。收到该消息后需要立刻调用 `writeCharacteristicValue` 写回数据，否则主机不会收到响应。
         *
         * 最低基础库： `2.10.3` */
        onCharacteristicReadRequest(
            /** 已连接的设备请求读当前外围设备的特征值事件的回调函数 */
            callback: OnCharacteristicReadRequestCallback
        ): void
        /** [BLEPeripheralServer.onCharacteristicSubscribed(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.onCharacteristicSubscribed.html)
         *
         * 监听特征值订阅事件，仅 iOS 支持。
         *
         * 最低基础库： `2.13.0` */
        onCharacteristicSubscribed(
            /** 特征值订阅事件的回调函数 */
            callback: OnCharacteristicSubscribedCallback
        ): void
        /** [BLEPeripheralServer.onCharacteristicUnsubscribed(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.onCharacteristicUnsubscribed.html)
         *
         * 监听取消特征值订阅事件，仅 iOS 支持。
         *
         * 最低基础库： `2.13.0` */
        onCharacteristicUnsubscribed(
            /** 取消特征值订阅事件的回调函数 */
            callback: OnCharacteristicUnsubscribedCallback
        ): void
        /** [BLEPeripheralServer.onCharacteristicWriteRequest(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.onCharacteristicWriteRequest.html)
         *
         * 监听已连接的设备请求写当前外围设备的特征值事件。收到该消息后需要立刻调用 `writeCharacteristicValue` 写回数据，否则主机不会收到响应。
         *
         * 最低基础库： `2.10.3` */
        onCharacteristicWriteRequest(
            /** 已连接的设备请求写当前外围设备的特征值事件的回调函数 */
            callback: OnCharacteristicWriteRequestCallback
        ): void
        /** [BLEPeripheralServer.removeService(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.removeService.html)
         *
         * 移除服务。
         *
         * 最低基础库： `2.10.3` */
        removeService(option: RemoveServiceOption): void
        /** [BLEPeripheralServer.startAdvertising(Object Object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.startAdvertising.html)
         *
         * 开始广播本地创建的外围设备。
         *
         * 最低基础库： `2.10.3` */
        startAdvertising(Object: StartAdvertisingObject): void
        /** [BLEPeripheralServer.stopAdvertising(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.stopAdvertising.html)
         *
         * 停止广播。
         *
         * 最低基础库： `2.10.3` */
        stopAdvertising(option?: StopAdvertisingOption): void
        /** [BLEPeripheralServer.writeCharacteristicValue(Object Object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.writeCharacteristicValue.html)
         *
         * 往指定特征值写入数据，并通知已连接的主机，从机的特征值已发生变化，该接口会处理是走回包还是走订阅。
         *
         * 最低基础库： `2.10.3` */
        writeCharacteristicValue(Object: WriteCharacteristicValueObject): void
    }
    interface BannerAd {
        /** [BannerAd.destroy()](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.destroy.html)
         *
         * 销毁 banner 广告。 */
        destroy(): void
        /** [BannerAd.hide()](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.hide.html)
         *
         * 隐藏 banner 广告。 */
        hide(): void
        /** [BannerAd.offError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.offError.html)
         *
         * 取消监听 banner 广告错误事件 */
        offError(
            /** banner 广告错误事件的回调函数 */
            callback?: BannerAdOffErrorCallback
        ): void
        /** [BannerAd.offLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.offLoad.html)
         *
         * 取消监听 banner 广告加载事件 */
        offLoad(
            /** banner 广告加载事件的回调函数 */
            callback?: OffLoadCallback
        ): void
        /** [BannerAd.offResize(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.offResize.html)
         *
         * 取消监听 banner 广告尺寸变化事件 */
        offResize(
            /** banner 广告尺寸变化事件的回调函数 */
            callback?: BannerAdOffResizeCallback
        ): void
        /** [BannerAd.onError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.onError.html)
         *
         * 监听 banner 广告错误事件。
         *
         * **错误码信息与解决方案表**
         *
         *
         *  错误码是通过onError获取到的错误信息。调试期间，可以通过异常返回来捕获信息。
         *  在小程序发布上线之后，如果遇到异常问题，可以在[“运维中心“](https://mp.weixin.qq.com/)里面搜寻错误日志，还可以针对异常返回加上适当的监控信息。
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
         * | 1007  | 广告组件被驳回  | 你的广告能力已经被封禁，封禁期间无法展现广告 | 请前往mp.weixin.qq.com确认小程序广告封禁状态。 |
         * | 1008  | 广告单元已关闭  | 该广告位的广告能力已经被关闭 | 请前往mp.weixin.qq.com重新打开对应广告位的展现。| */
        onError(
            /** banner 广告错误事件的回调函数 */
            callback: BannerAdOnErrorCallback
        ): void
        /** [BannerAd.onLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.onLoad.html)
         *
         * 监听 banner 广告加载事件。 */
        onLoad(
            /** banner 广告加载事件的回调函数 */
            callback: OnLoadCallback
        ): void
        /** [BannerAd.onResize(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.onResize.html)
         *
         * 监听 banner 广告尺寸变化事件。 */
        onResize(
            /** banner 广告尺寸变化事件的回调函数 */
            callback: BannerAdOnResizeCallback
        ): void
        /** [Promise BannerAd.show()](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.show.html)
         *
         * 显示 banner 广告。 */
        show(): Promise<any>
    }
    interface BluetoothError {
        /** 错误信息
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 0 | ok | 正常 |
         * | -1 | already connet | 已连接 |
         * | 10000 | not init | 未初始化蓝牙适配器 |
         * | 10001 | not available | 当前蓝牙适配器不可用 |
         * | 10002 | no device | 没有找到指定设备 |
         * | 10003 | connection fail | 连接失败 |
         * | 10004 | no service | 没有找到指定服务 |
         * | 10005 | no characteristic | 没有找到指定特征值 |
         * | 10006 | no connection | 当前连接已断开 |
         * | 10007 | property not support | 当前特征值不支持此操作 |
         * | 10008 | system error | 其余所有系统上报的异常 |
         * | 10009 | system not support | Android 系统特有，系统版本低于 4.3 不支持 BLE |
         * | 10012 | operate time out | 连接超时 |
         * | 10013 | invalid_data | 连接 deviceId 为空或者是格式不正确 | */ errMsg: string
        /** 错误码
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | 0 | ok | 正常 |
         * | -1 | already connet | 已连接 |
         * | 10000 | not init | 未初始化蓝牙适配器 |
         * | 10001 | not available | 当前蓝牙适配器不可用 |
         * | 10002 | no device | 没有找到指定设备 |
         * | 10003 | connection fail | 连接失败 |
         * | 10004 | no service | 没有找到指定服务 |
         * | 10005 | no characteristic | 没有找到指定特征值 |
         * | 10006 | no connection | 当前连接已断开 |
         * | 10007 | property not support | 当前特征值不支持此操作 |
         * | 10008 | system error | 其余所有系统上报的异常 |
         * | 10009 | system not support | Android 系统特有，系统版本低于 4.3 不支持 BLE |
         * | 10012 | operate time out | 连接超时 |
         * | 10013 | invalid_data | 连接 deviceId 为空或者是格式不正确 | */ errCode: number
    }
    interface Camera {
        /** [Camera.closeFrameChange()](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.closeFrameChange.html)
         *
         * 关闭监听帧数据
         *
         * 最低基础库： `2.9.0` */
        closeFrameChange(): void
        /** [Camera.destroy()](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.destroy.html)
         *
         * 销毁相机
         *
         * 最低基础库： `2.9.0` */
        destroy(): void
        /** [Camera.listenFrameChange()](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.listenFrameChange.html)
         *
         * 开启监听帧数据
         *
         * 最低基础库： `2.9.0` */
        listenFrameChange(): void
        /** [Camera.onAuthCancel(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.onAuthCancel.html)
         *
         * 监听用户不允许授权使用摄像头的情况
         *
         * 最低基础库： `2.9.0` */
        onAuthCancel(
            /** 事件发生时的回调函数 */
            callback: (...args: any[]) => any
        ): void
        /** [Camera.onCameraFrame(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.onCameraFrame.html)
         *
         * 监听摄像头实时帧数据
         *
         * 最低基础库： `2.9.0` */
        onCameraFrame(
            /** 摄像头返回实时帧数据的回调函数 */
            callback: OnCameraFrameCallback
        ): void
        /** [Camera.onStop(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.onStop.html)
         *
         * 监听摄像头非正常终止事件，如退出后台等情况
         *
         * 最低基础库： `2.9.0` */
        onStop(
            /** 事件发生时的回调函数 */
            callback: (...args: any[]) => any
        ): void
        /** [Promise Camera.startRecord()](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.startRecord.html)
         *
         * 开始录像
         *
         * 最低基础库： `2.9.0` */
        startRecord(): Promise<any>
        /** [Promise Camera.stopRecord(boolean compressed)](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.stopRecord.html)
         *
         * 结束录像，成功则返回封面与视频
         *
         * 最低基础库： `2.9.0` */
        stopRecord(
            /** 是否压缩录制视频 */
            compressed?: boolean
        ): Promise<any>
        /** [Promise Camera.takePhoto(string quality)](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.takePhoto.html)
         *
         * 拍照，可指定质量，成功则返回图片
         *
         * 最低基础库： `2.9.0` */
        takePhoto(
            /** 拍照质量，值为 high, normal, low */
            quality?: string
        ): Promise<any>
    }
    interface Canvas {
        /** [Canvas.toTempFilePath(Object object)](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.toTempFilePath.html)
         *
         * 将当前 Canvas 保存为一个临时文件。**如果使用了开放数据域，则生成后的文件仅能被用于以下接口：`wx.saveImageToPhotosAlbum`、`wx.shareAppMessage`、`wx.onShareAppMessage`** */
        toTempFilePath(option: ToTempFilePathOption): void
        /** [[RenderingContext](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/RenderingContext.html) Canvas.getContext(string contextType, Object contextAttributes)](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.getContext.html)
         *
         * 获取画布对象的绘图上下文 */
        getContext(
            /** 上下文类型
             *
             * 参数 contextType 可选值：
             * - '2d': 2d 绘图上下文;
             * - 'webgl': webgl 绘图上下文; */
            contextType: '2d' | 'webgl',
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
    interface CustomAd {
        /** [CustomAd.destroy()](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.destroy.html)
         *
         * 销毁原生模板广告。 */
        destroy(): void
        /** [CustomAd.offClose(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.offClose.html)
         *
         * 取消监听原生模板广告关闭事件 */
        offClose(
            /** 原生模板广告关闭事件的回调函数 */
            callback?: UDPSocketOffCloseCallback
        ): void
        /** [CustomAd.offError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.offError.html)
         *
         * 取消监听原生模板广告错误事件 */
        offError(
            /** 原生模板广告错误事件的回调函数 */
            callback?: CustomAdOffErrorCallback
        ): void
        /** [CustomAd.offHide(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.offHide.html)
         *
         * 取消监听原生模板广告隐藏事件
         *
         * 最低基础库： `2.14.4` */
        offHide(
            /** 原生模板广告隐藏事件的回调函数 */
            callback?: OffHideCallback
        ): void
        /** [CustomAd.offLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.offLoad.html)
         *
         * 取消监听原生模板广告加载事件 */
        offLoad(
            /** 原生模板广告加载事件的回调函数 */
            callback?: OffLoadCallback
        ): void
        /** [CustomAd.onClose(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.onClose.html)
         *
         * 监听原生模板广告关闭事件。 */
        onClose(
            /** 原生模板广告关闭事件的回调函数 */
            callback: UDPSocketOnCloseCallback
        ): void
        /** [CustomAd.onError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.onError.html)
         *
         * 监听原生模板广告错误事件。
         *
         * **错误码信息与解决方案表**
         *
         *
         *  错误码是通过onError获取到的错误信息。调试期间，可以通过异常返回来捕获信息。
         *  在小程序发布上线之后，如果遇到异常问题，可以在[“运维中心“](https://mp.weixin.qq.com/)里面搜寻错误日志，还可以针对异常返回加上适当的监控信息。
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
         * | 1007  | 广告组件被驳回  | 你的广告能力已经被封禁，封禁期间无法展现广告 | 请前往mp.weixin.qq.com确认小程序广告封禁状态。 |
         * | 1008  | 广告单元已关闭  | 该广告位的广告能力已经被关闭 | 请前往mp.weixin.qq.com重新打开对应广告位的展现。|
         * | 2001  | 模板渲染错误  | 渲染过程出现错误 | |
         * | 2002  | 模板为空  | 该广告位的广告能力已经被关闭 | |
         * | 2003  | 模板解析失败  | 该广告位的广告能力已经被关闭 | |
         * | 2004  | 触发频率限制  | 小程序启动一定时间内不允许展示原生模板广告 | |
         * | 2005  | 触发频率限制  | 距离小程序插屏广告或者激励视频广告上次播放时间间隔不足，不允许展示原生模板广告 | | */
        onError(
            /** 原生模板广告错误事件的回调函数 */
            callback: CustomAdOnErrorCallback
        ): void
        /** [CustomAd.onHide(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.onHide.html)
         *
         * 监听原生模板广告隐藏事件, 某些模板如矩阵格子模板用户点击关闭时也会触发该事件。
         *
         * 最低基础库： `2.14.4` */
        onHide(
            /** 原生模板广告隐藏事件的回调函数 */
            callback: OnHideCallback
        ): void
        /** [CustomAd.onLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.onLoad.html)
         *
         * 监听原生模板广告加载事件。 */
        onLoad(
            /** 原生模板广告加载事件的回调函数 */
            callback: OnLoadCallback
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
    interface DownloadTask {
        /** [DownloadTask.abort()](https://developers.weixin.qq.com/minigame/dev/api/network/download/DownloadTask.abort.html)
         *
         * 中断下载任务
         *
         * 最低基础库： `1.4.0` */
        abort(): void
        /** [DownloadTask.offHeadersReceived(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/download/DownloadTask.offHeadersReceived.html)
         *
         * 取消监听 HTTP Response Header 事件
         *
         * 最低基础库： `2.1.0` */
        offHeadersReceived(
            /** HTTP Response Header 事件的回调函数 */
            callback?: OffHeadersReceivedCallback
        ): void
        /** [DownloadTask.offProgressUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/download/DownloadTask.offProgressUpdate.html)
         *
         * 取消监听下载进度变化事件
         *
         * 最低基础库： `2.1.0` */
        offProgressUpdate(
            /** 下载进度变化事件的回调函数 */
            callback?: DownloadTaskOffProgressUpdateCallback
        ): void
        /** [DownloadTask.onHeadersReceived(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/download/DownloadTask.onHeadersReceived.html)
         *
         * 监听 HTTP Response Header 事件。会比请求完成事件更早
         *
         * 最低基础库： `2.1.0` */
        onHeadersReceived(
            /** HTTP Response Header 事件的回调函数 */
            callback: OnHeadersReceivedCallback
        ): void
        /** [DownloadTask.onProgressUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/download/DownloadTask.onProgressUpdate.html)
         *
         * 监听下载进度变化事件
         *
         * 最低基础库： `1.4.0` */
        onProgressUpdate(
            /** 下载进度变化事件的回调函数 */
            callback: DownloadTaskOnProgressUpdateCallback
        ): void
    }
    interface FeedbackButton {
        /** [FeedbackButton.destroy()](https://developers.weixin.qq.com/minigame/dev/api/open-api/feedback/FeedbackButton.destroy.html)
         *
         * 销毁意见反馈按钮 */
        destroy(): void
        /** [FeedbackButton.hide()](https://developers.weixin.qq.com/minigame/dev/api/open-api/feedback/FeedbackButton.hide.html)
         *
         * 隐藏意见反馈按钮。 */
        hide(): void
        /** [FeedbackButton.offTap(function callback)](https://developers.weixin.qq.com/minigame/dev/api/open-api/feedback/FeedbackButton.offTap.html)
         *
         * 取消监听意见反馈按钮的点击事件 */
        offTap(
            /** 意见反馈按钮的点击事件的回调函数 */
            callback?: GameClubButtonOffTapCallback
        ): void
        /** [FeedbackButton.onTap(function callback)](https://developers.weixin.qq.com/minigame/dev/api/open-api/feedback/FeedbackButton.onTap.html)
         *
         * 监听意见反馈按钮的点击事件 */
        onTap(
            /** 意见反馈按钮的点击事件的回调函数 */
            callback: GameClubButtonOnTapCallback
        ): void
        /** [FeedbackButton.show()](https://developers.weixin.qq.com/minigame/dev/api/open-api/feedback/FeedbackButton.show.html)
         *
         * 显示意见反馈按钮 */
        show(): void
    }
    interface FileSystemManager {
        /** [Array.&lt;string&gt; FileSystemManager.readdirSync(string dirPath)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.readdirSync.html)
         *
         * [FileSystemManager.readdir](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.readdir.html) 的同步版本 */
        readdirSync(
            /** 要读取的目录路径 (本地路径) */
            dirPath: string
        ): string[]
        /** [FileSystemManager.access(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.access.html)
         *
         * 判断文件/目录是否存在 */
        access(option: AccessOption): void
        /** [FileSystemManager.accessSync(string path)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.accessSync.html)
         *
         * [FileSystemManager.access](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.access.html) 的同步版本 */
        accessSync(
            /** 要判断是否存在的文件/目录路径 (本地路径) */
            path: string
        ): void
        /** [FileSystemManager.appendFile(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.appendFile.html)
         *
         * 在文件结尾追加内容
         *
         * 最低基础库： `2.1.0` */
        appendFile(option: AppendFileOption): void
        /** [FileSystemManager.appendFileSync(string filePath, string|ArrayBuffer data, string encoding)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.appendFileSync.html)
         *
         * [FileSystemManager.appendFile](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.appendFile.html) 的同步版本
         *
         * 最低基础库： `2.1.0` */
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
        /** [FileSystemManager.copyFile(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.copyFile.html)
         *
         * 复制文件 */
        copyFile(option: CopyFileOption): void
        /** [FileSystemManager.copyFileSync(string srcPath, string destPath)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.copyFileSync.html)
         *
         * [FileSystemManager.copyFile](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.copyFile.html) 的同步版本 */
        copyFileSync(
            /** 源文件路径，支持本地路径 */
            srcPath: string,
            /** 目标文件路径，支持本地路径 */
            destPath: string
        ): void
        /** [FileSystemManager.getFileInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.getFileInfo.html)
         *
         * 获取该小程序下的 本地临时文件 或 本地缓存文件 信息 */
        getFileInfo(option: FileSystemManagerGetFileInfoOption): void
        /** [FileSystemManager.getSavedFileList(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.getSavedFileList.html)
         *
         * 获取该小程序下已保存的本地缓存文件列表 */
        getSavedFileList(option?: GetSavedFileListOption): void
        /** [FileSystemManager.mkdir(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.mkdir.html)
         *
         * 创建目录 */
        mkdir(option: MkdirOption): void
        /** [FileSystemManager.mkdirSync(string dirPath, boolean recursive)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.mkdirSync.html)
         *
         * [FileSystemManager.mkdir](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.mkdir.html) 的同步版本 */
        mkdirSync(
            /** 创建的目录路径 (本地路径) */
            dirPath: string,
            /** 是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。
             *
             * 最低基础库： `2.3.0` */
            recursive?: boolean
        ): void
        /** [FileSystemManager.readFile(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.readFile.html)
         *
         * 读取本地文件内容 */
        readFile(option: ReadFileOption): void
        /** [FileSystemManager.readdir(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.readdir.html)
         *
         * 读取目录内文件列表 */
        readdir(option: ReaddirOption): void
        /** [FileSystemManager.removeSavedFile(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.removeSavedFile.html)
         *
         * 删除该小程序下已保存的本地缓存文件 */
        removeSavedFile(option: RemoveSavedFileOption): void
        /** [FileSystemManager.rename(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.rename.html)
         *
         * 重命名文件。可以把文件从 oldPath 移动到 newPath */
        rename(option: RenameOption): void
        /** [FileSystemManager.renameSync(string oldPath, string newPath)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.renameSync.html)
         *
         * [FileSystemManager.rename](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.rename.html) 的同步版本 */
        renameSync(
            /** 源文件路径，支持本地路径 */
            oldPath: string,
            /** 新文件路径，支持本地路径 */
            newPath: string
        ): void
        /** [FileSystemManager.rmdir(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.rmdir.html)
         *
         * 删除目录 */
        rmdir(option: RmdirOption): void
        /** [FileSystemManager.rmdirSync(string dirPath, boolean recursive)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.rmdirSync.html)
         *
         * [FileSystemManager.rmdir](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.rmdir.html) 的同步版本 */
        rmdirSync(
            /** 要删除的目录路径 (本地路径) */
            dirPath: string,
            /** 是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。
             *
             * 最低基础库： `2.3.0` */
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
        /** [FileSystemManager.unlink(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.unlink.html)
         *
         * 删除文件 */
        unlink(option: UnlinkOption): void
        /** [FileSystemManager.unlinkSync(string filePath)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.unlinkSync.html)
         *
         * [FileSystemManager.unlink](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.unlink.html) 的同步版本 */
        unlinkSync(
            /** 要删除的文件路径 (本地路径) */
            filePath: string
        ): void
        /** [FileSystemManager.unzip(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.unzip.html)
         *
         * 解压文件 */
        unzip(option: UnzipOption): void
        /** [FileSystemManager.writeFile(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.writeFile.html)
         *
         * 写文件 */
        writeFile(option: WriteFileOption): void
        /** [FileSystemManager.writeFileSync(string filePath, string|ArrayBuffer data, string encoding)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.writeFileSync.html)
         *
         * [FileSystemManager.writeFile](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.writeFile.html) 的同步版本 */
        writeFileSync(
            /** 要写入的文件路径 (本地路径) */
            filePath: string,
            /** 要写入的文本或二进制数据 */
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
        /** [[Stats](https://developers.weixin.qq.com/minigame/dev/api/file/Stats.html)|Object FileSystemManager.statSync(string path, boolean recursive)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.statSync.html)
         *
         * [FileSystemManager.stat](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.stat.html) 的同步版本 */
        statSync(
            /** 文件/目录路径 (本地路径) */
            path: string,
            /** 是否递归获取目录下的每个文件的 Stats 信息
             *
             * 最低基础库： `2.3.0` */
            recursive?: boolean
        ): Stats | IAnyObject
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
         * [FileSystemManager.readFile](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.readFile.html) 的同步版本 */
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
            /** 从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：byte
             *
             * 最低基础库： `2.10.0` */
            position?: number,
            /** 指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte
             *
             * 最低基础库： `2.10.0` */
            length?: number
        ): string | ArrayBuffer
    }
    interface GameBanner {
        /** [GameBanner.offError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GameBanner.offError.html)
         *
         * 取消监听小游戏推荐banner组件加载错误事件 */
        offError(
            /** 小游戏推荐banner组件加载错误事件的回调函数 */
            callback?: GameBannerOffErrorCallback
        ): void
        /** [GameBanner.offLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GameBanner.offLoad.html)
         *
         * 取消监听小游戏推荐banner组件加载成功事件 */
        offLoad(
            /** 小游戏推荐banner组件加载成功事件的回调函数 */
            callback?: OffLoadCallback
        ): void
        /** [GameBanner.offResize(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GameBanner.offResize.html)
         *
         * 取消监听小游戏推荐banner组件位置或者尺寸改变事件 */
        offResize(
            /** 小游戏推荐banner组件位置或者尺寸改变事件的回调函数 */
            callback?: GameBannerOffResizeCallback
        ): void
        /** [GameBanner.onError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GameBanner.onError.html)
         *
         * 监听小游戏推荐banner组件加载错误事件。
         *
         * **错误码信息与解决方案表**
         *
         *
         * | 代码 | 异常情况 | 理由 | 解决方案 |
         * | ------ | -------------- | --------------- | -------------------------- |
         * | 1000  | 后端错误调用失败  | 该项错误不是开发者的异常情况 | 一般情况下忽略一段时间即可恢复。 |
         * | 1002  | 推荐位id无效    | 可能是拼写错误、或者误用了其他小游戏的推荐位id | 请重新前往mp.weixin.qq.com确认推荐位id。 |
         * | 1004  | 无适合的推荐   | 推荐不是每一次都会出现，这次没有出现可能是由于该用户不适合浏览推荐 | 属于正常情况，且开发者需要针对这种情况做形态上的兼容。 |
         * | 1008  | 推荐位已关闭  | 该推荐位的推荐能力已经被关闭 | 请前往mp.weixin.qq.com重新打开对应推荐位的展现。| */
        onError(
            /** 小游戏推荐banner组件加载错误事件的回调函数 */
            callback: GameBannerOnErrorCallback
        ): void
        /** [GameBanner.onLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GameBanner.onLoad.html)
         *
         * 监听小游戏推荐banner组件加载成功事件。 */
        onLoad(
            /** 小游戏推荐banner组件加载成功事件的回调函数 */
            callback: OnLoadCallback
        ): void
        /** [GameBanner.onResize(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GameBanner.onResize.html)
         *
         * 监听小游戏推荐banner组件位置或者尺寸改变事件。 */
        onResize(
            /** 小游戏推荐banner组件位置或者尺寸改变事件的回调函数 */
            callback: GameBannerOnResizeCallback
        ): void
        /** [Promise GameBanner.destroy()](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GameBanner.destroy.html)
         *
         * 销毁小游戏推荐banner组件，组件销毁后所有方法和事件都将失效。 */
        destroy(): Promise<any>
        /** [Promise GameBanner.hide()](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GameBanner.hide.html)
         *
         * 隐藏小游戏推荐banner组件。 */
        hide(): Promise<any>
        /** [Promise GameBanner.show()](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GameBanner.show.html)
         *
         * 显示小游戏推荐banner组件。 */
        show(): Promise<any>
    }
    interface GameClubButton {
        /** [GameClubButton.destroy()](https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/GameClubButton.destroy.html)
         *
         * 销毁游戏圈按钮 */
        destroy(): void
        /** [GameClubButton.hide()](https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/GameClubButton.hide.html)
         *
         * 隐藏游戏圈按钮 */
        hide(): void
        /** [GameClubButton.offTap(function callback)](https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/GameClubButton.offTap.html)
         *
         * 取消监听游戏圈按钮的点击事件 */
        offTap(
            /** 游戏圈按钮的点击事件的回调函数 */
            callback?: GameClubButtonOffTapCallback
        ): void
        /** [GameClubButton.onTap(function callback)](https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/GameClubButton.onTap.html)
         *
         * 监听游戏圈按钮的点击事件 */
        onTap(
            /** 游戏圈按钮的点击事件的回调函数 */
            callback: GameClubButtonOnTapCallback
        ): void
        /** [GameClubButton.show()](https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/GameClubButton.show.html)
         *
         * 显示游戏圈按钮 */
        show(): void
    }
    interface GameIcon {
        /** [GameIcon.offError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GameIcon.offError.html)
         *
         * 取消监听小游戏推荐icon组件加载错误事件 */
        offError(
            /** 小游戏推荐icon组件加载错误事件的回调函数 */
            callback?: GameBannerOffErrorCallback
        ): void
        /** [GameIcon.offLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GameIcon.offLoad.html)
         *
         * 取消监听小游戏推荐icon组件加载成功事件 */
        offLoad(
            /** 小游戏推荐icon组件加载成功事件的回调函数 */
            callback?: OffLoadCallback
        ): void
        /** [GameIcon.offResize(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GameIcon.offResize.html)
         *
         * 取消监听小游戏推荐icon组件位置或者尺寸改变事件 */
        offResize(
            /** 小游戏推荐icon组件位置或者尺寸改变事件的回调函数 */
            callback?: GameBannerOffResizeCallback
        ): void
        /** [GameIcon.onError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GameIcon.onError.html)
         *
         * 监听小游戏推荐icon组件加载错误事件。
         *
         * **错误码信息与解决方案表**
         *
         *
         * | 代码 | 异常情况 | 理由 | 解决方案 |
         * | ------ | -------------- | --------------- | -------------------------- |
         * | 1000  | 后端错误调用失败  | 该项错误不是开发者的异常情况 | 一般情况下忽略一段时间即可恢复。 |
         * | 1002  | 推荐位id无效    | 可能是拼写错误、或者误用了其他小游戏的推荐位id | 请重新前往mp.weixin.qq.com确认推荐位id。 |
         * | 1004  | 无适合的推荐   | 推荐不是每一次都会出现，这次没有出现可能是由于该用户不适合浏览推荐 | 属于正常情况，且开发者需要针对这种情况做形态上的兼容。 |
         * | 1008  | 推荐位已关闭  | 该推荐位的推荐能力已经被关闭 | 请前往mp.weixin.qq.com重新打开对应推荐位的展现。|
         * | 1009  | 推荐位id类型错误| 可能复制了其他类型的推荐位id | 请前往mp.weixin.qq.com 确认推荐位id | */
        onError(
            /** 小游戏推荐icon组件加载错误事件的回调函数 */
            callback: GameBannerOnErrorCallback
        ): void
        /** [GameIcon.onLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GameIcon.onLoad.html)
         *
         * 监听小游戏推荐icon组件加载成功事件。 */
        onLoad(
            /** 小游戏推荐icon组件加载成功事件的回调函数 */
            callback: OnLoadCallback
        ): void
        /** [GameIcon.onResize(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GameIcon.onResize.html)
         *
         * 监听小游戏推荐icon组件位置或者尺寸改变事件。回调函数回抛出一个数组，包含被渲染出来的游戏的信息，该数组为组件实例属性icons的子集。 */
        onResize(
            /** 小游戏推荐icon组件位置或者尺寸改变事件的回调函数 */
            callback: GameBannerOnResizeCallback
        ): void
        /** [Promise GameIcon.destroy()](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GameIcon.destroy.html)
         *
         * 销毁小游戏推荐icon组件，组件销毁后所有方法和事件都将失效。 */
        destroy(): Promise<any>
        /** [Promise GameIcon.hide()](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GameIcon.hide.html)
         *
         * 隐藏小游戏推荐icon组件。 */
        hide(): Promise<any>
        /** [Promise GameIcon.load()](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GameIcon.load.html)
         *
         * 小游戏推荐icon组件加载数据接口。 */
        load(): Promise<any>
        /** [Promise GameIcon.show()](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GameIcon.show.html)
         *
         * 显示小游戏推荐icon组件。 */
        show(): Promise<any>
    }
    interface GamePortal {
        /** [GamePortal.offClose(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GamePortal.offClose.html)
         *
         * 取消监听小游戏推荐弹窗组件的关闭事件 */
        offClose(
            /** 小游戏推荐弹窗组件的关闭事件的回调函数 */
            callback?: UDPSocketOffCloseCallback
        ): void
        /** [GamePortal.offError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GamePortal.offError.html)
         *
         * 取消监听小游戏推荐弹窗组件加载错误事件 */
        offError(
            /** 小游戏推荐弹窗组件加载错误事件的回调函数 */
            callback?: GamePortalOffErrorCallback
        ): void
        /** [GamePortal.offLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GamePortal.offLoad.html)
         *
         * 取消监听小游戏推荐弹窗组件的数据加载成功事件 */
        offLoad(
            /** 小游戏推荐弹窗组件的数据加载成功事件的回调函数 */
            callback?: OffLoadCallback
        ): void
        /** [GamePortal.onClose(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GamePortal.onClose.html)
         *
         * 监听小游戏推荐弹窗组件的关闭事件。 */
        onClose(
            /** 小游戏推荐弹窗组件的关闭事件的回调函数 */
            callback: UDPSocketOnCloseCallback
        ): void
        /** [GamePortal.onError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GamePortal.onError.html)
         *
         * 监听小游戏推荐弹窗组件加载错误事件。
         *
         * **错误码信息与解决方案表**
         *
         *
         * | 代码 | 异常情况 | 理由 | 解决方案 |
         * | ------ | -------------- | --------------- | -------------------------- |
         * | 1000  | 后端错误调用失败  | 该项错误不是开发者的异常情况 | 一般情况下忽略一段时间即可恢复。 |
         * | 1002  | 推荐位id无效    | 可能是拼写错误、或者误用了其他小游戏的推荐位id | 请重新前往mp.weixin.qq.com确认推荐位id。 |
         * | 1004  | 无适合的推荐   | 推荐不是每一次都会出现，这次没有出现可能是由于该用户不适合浏览推荐 | 属于正常情况，且开发者需要针对这种情况做形态上的兼容。 |
         * | 1008  | 推荐位已关闭  | 该推荐位的推荐能力已经被关闭 | 请前往mp.weixin.qq.com重新打开对应推荐位的展现。| */
        onError(
            /** 小游戏推荐弹窗组件加载错误事件的回调函数 */
            callback: GamePortalOnErrorCallback
        ): void
        /** [GamePortal.onLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GamePortal.onLoad.html)
         *
         * 监听小游戏推荐弹窗组件的数据加载成功事件。 */
        onLoad(
            /** 小游戏推荐弹窗组件的数据加载成功事件的回调函数 */
            callback: OnLoadCallback
        ): void
        /** [Promise GamePortal.destroy()](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GamePortal.destroy.html)
         *
         * 销毁小游戏推荐弹窗组件，组件销毁后，组件的方法和事件都将失效。 */
        destroy(): Promise<any>
        /** [Promise GamePortal.load()](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GamePortal.load.html)
         *
         * 小游戏推荐弹窗组件加载数据接口。 */
        load(): Promise<any>
        /** [Promise GamePortal.show()](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GamePortal.show.html)
         *
         * 显示小游戏推荐弹窗组件。 */
        show(): Promise<any>
    }
    interface GameRecorder {
        /** [GameRecorder.off(string event, function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.off.html)
         *
         * 取消监听录制事件。当对应事件触发时，该回调函数不再执行。
         *
         * 最低基础库： `2.8.0` */
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
* 注册监听录制事件的回调函数。当对应事件触发时，回调函数会被执行。
*
* **事件参数**
*
*
* 除了 timeUpdate error stop 事件外，其他事件都是无参的
* *timeUpdate**
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
* *error**
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
* *stop**
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
```
*
* 最低基础库： `2.8.0` */
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
         * 开始录制游戏画面
         *
         * 最低基础库： `2.8.0` */
        start(option: GameRecorderStartOption): void
        /** [Promise GameRecorder.abort()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.abort.html)
         *
         * 放弃录制游戏画面。此时已经录制的内容会被丢弃。
         *
         * 最低基础库： `2.8.0` */
        abort(): Promise<any>
        /** [Promise GameRecorder.pause()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.pause.html)
         *
         * 暂停录制游戏画面。
         *
         * 最低基础库： `2.8.0` */
        pause(): Promise<any>
        /** [Promise GameRecorder.resume()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.resume.html)
         *
         * 恢复录制游戏画面。
         *
         * 最低基础库： `2.8.0` */
        resume(): Promise<any>
        /** [Promise GameRecorder.stop()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.stop.html)
         *
         * 结束录制游戏画面。结束录制后可以发起分享。
         *
         * 最低基础库： `2.8.0` */
        stop(): Promise<any>
        /** [boolean GameRecorder.isAtempoSupported()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.isAtempoSupported.html)
         *
         * 获取是否支持调节录制视频的播放速率
         *
         * 最低基础库： `2.10.0` */
        isAtempoSupported(): boolean
        /** [boolean GameRecorder.isFrameSupported()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.isFrameSupported.html)
         *
         * 获取是否支持录制游戏画面
         *
         * 最低基础库： `2.8.0` */
        isFrameSupported(): boolean
        /** [boolean GameRecorder.isSoundSupported()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.isSoundSupported.html)
         *
         * 获取是否在录制游戏画面的同时支持录制游戏音频的信息
         *
         * 最低基础库： `2.8.0` */
        isSoundSupported(): boolean
        /** [boolean GameRecorder.isVolumeSupported()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.isVolumeSupported.html)
         *
         * 获取是否支持调节录制视频的音量
         *
         * 最低基础库： `2.10.0` */
        isVolumeSupported(): boolean
    }
    interface GameRecorderError {
        /** 错误信息
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | wx.error.GameRecorder_UnknownError | unknown error | 未知错误，没有被归纳到的错误 |
         * | wx.error.GameRecorder_InternalFailed | internal failed | 游戏画面录制 SDK 内部错误 |
         * | wx.error.GameRecorder_NotSupported | frame not supported | 当前设备不支持录制游戏画面 |
         * | wx.error.GameRecorder_StartDurationInvalid | duration invalid | duration 参数不合法 |
         * | wx.error.GameRecorder_StartBitRateInvalid | bitrate invalid | bitrate 参数不合法 |
         * | wx.error.GameRecorder_StartFPSInvalid | fps invalid | fps 参数不合法 |
         * | wx.error.GameRecorder_StartGOPInvalid | gop invalid | gop 参数不合法 |
         * | wx.error.GameRecorder_StartWhileAlreadyStartRecording | start while already start recording | 在已经开始录制的情况下调用 start |
         * | wx.error.GameRecorder_StartWhilePaused | start while already paused | 在已经暂停录制的情况下调用 start，此时只能调用 resume 恢复录制 |
         * | wx.error.GameRecorder_PauseWhileNotStartRecording | pause while not start recording | 在还没有开始录制的情况下调用 pause |
         * | wx.error.GameRecorder_PauseWhileAlreadyPaused | pause while already paused | 在已经暂停录制的情况下调用 pause |
         * | wx.error.GameRecorder_ResumeWhileNotStartRecording | resume while not start recording | 在还没有开始录制的情况下调用 resume |
         * | wx.error.GameRecorder_ResumeWhileRecording | resume while recording | 在录制中调用 resume，调用 resume 只能在暂停状态下 |
         * | wx.error.GameRecorder_AbortWhileNotStartRecording | abort while not start recording | 在还没有开始录制的情况下调用 abort |
         * | wx.error.GameRecorder_StopWhileNotStartRecording | stop while not start recording | 在还没有开始录制的情况下调用 stop |
         * | wx.error.GameRecorder_NoVideo | no recorded video | 在还没有一个录制好的对局回放的情况下发起分享 |
         * | wx.error.GameRecorder_BGMNotFound | bgm not found | share.bgm 指定的额背景音乐不存在 |
         * | wx.error.GameRecorder_TimeRangeInvalid | time range invalid | share.timeRange 不合法 |
         * | wx.error.GameRecorder_EditDurationOutOfLimit | duration out of limit | share.timeRange 的所有片段的总和超出上限 |
         * | wx.error.GameRecorder_TimeRangeTooShort | time range too short.It should be longer than 2s | share.timeRange 太短 | */ errMsg: string
        /** 错误码
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | wx.error.GameRecorder_UnknownError | unknown error | 未知错误，没有被归纳到的错误 |
         * | wx.error.GameRecorder_InternalFailed | internal failed | 游戏画面录制 SDK 内部错误 |
         * | wx.error.GameRecorder_NotSupported | frame not supported | 当前设备不支持录制游戏画面 |
         * | wx.error.GameRecorder_StartDurationInvalid | duration invalid | duration 参数不合法 |
         * | wx.error.GameRecorder_StartBitRateInvalid | bitrate invalid | bitrate 参数不合法 |
         * | wx.error.GameRecorder_StartFPSInvalid | fps invalid | fps 参数不合法 |
         * | wx.error.GameRecorder_StartGOPInvalid | gop invalid | gop 参数不合法 |
         * | wx.error.GameRecorder_StartWhileAlreadyStartRecording | start while already start recording | 在已经开始录制的情况下调用 start |
         * | wx.error.GameRecorder_StartWhilePaused | start while already paused | 在已经暂停录制的情况下调用 start，此时只能调用 resume 恢复录制 |
         * | wx.error.GameRecorder_PauseWhileNotStartRecording | pause while not start recording | 在还没有开始录制的情况下调用 pause |
         * | wx.error.GameRecorder_PauseWhileAlreadyPaused | pause while already paused | 在已经暂停录制的情况下调用 pause |
         * | wx.error.GameRecorder_ResumeWhileNotStartRecording | resume while not start recording | 在还没有开始录制的情况下调用 resume |
         * | wx.error.GameRecorder_ResumeWhileRecording | resume while recording | 在录制中调用 resume，调用 resume 只能在暂停状态下 |
         * | wx.error.GameRecorder_AbortWhileNotStartRecording | abort while not start recording | 在还没有开始录制的情况下调用 abort |
         * | wx.error.GameRecorder_StopWhileNotStartRecording | stop while not start recording | 在还没有开始录制的情况下调用 stop |
         * | wx.error.GameRecorder_NoVideo | no recorded video | 在还没有一个录制好的对局回放的情况下发起分享 |
         * | wx.error.GameRecorder_BGMNotFound | bgm not found | share.bgm 指定的额背景音乐不存在 |
         * | wx.error.GameRecorder_TimeRangeInvalid | time range invalid | share.timeRange 不合法 |
         * | wx.error.GameRecorder_EditDurationOutOfLimit | duration out of limit | share.timeRange 的所有片段的总和超出上限 |
         * | wx.error.GameRecorder_TimeRangeTooShort | time range too short.It should be longer than 2s | share.timeRange 太短 | */ errCode: number
    }
    interface GameRecorderShareButton {
        /** [GameRecorderShareButton.hide()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorderShareButton.hide.html)
         *
         * 隐藏游戏对局回放分享按钮
         *
         * 最低基础库： `2.8.0` */
        hide(): void
        /** [GameRecorderShareButton.offTap(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorderShareButton.offTap.html)
         *
         * 取消监听游戏对局回放分享按钮的点击事件
         *
         * 最低基础库： `2.8.0` */
        offTap(
            /** 游戏对局回放分享按钮的点击事件的回调函数 */
            callback?: GameClubButtonOffTapCallback
        ): void
        /** [GameRecorderShareButton.onTap(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorderShareButton.onTap.html)
         *
         * 监听游戏对局回放分享按钮的点击事件。只有当分享由于非用户取消的原因失败时，该事件的回调函数才会执行。
         *
         * 最低基础库： `2.8.0` */
        onTap(
            /** 游戏对局回放分享按钮的点击事件的回调函数 */
            callback: GameClubButtonOnTapCallback
        ): void
        /** [GameRecorderShareButton.show()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorderShareButton.show.html)
         *
         * 显示游戏对局回放分享按钮
         *
         * 最低基础库： `2.8.0` */
        show(): void
    }
    interface GameServerManager {
        /** [GameServerManager.getFriendsStateData(Object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.getFriendsStateData.html)
         *
         * 获取所有好友的在线状态及信息（该接口需要在开放数据域使用）
         *
         * 最低基础库： `2.9.4` */
        getFriendsStateData(option?: GetFriendsStateDataOption): void
        /** [GameServerManager.offBeKickedOut(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offBeKickedOut.html)
         *
         * 取消监听自己被踢出当前房间 */
        offBeKickedOut(
            /** 的回调函数 */
            callback?: OffBeKickedOutCallback
        ): void
        /** [GameServerManager.offBroadcast(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offBroadcast.html)
         *
         * 取消监听收到同个房间内的广播消息 */
        offBroadcast(
            /** 的回调函数 */
            callback?: OffBroadcastCallback
        ): void
        /** [GameServerManager.offDisconnect(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offDisconnect.html)
         *
         * 取消监听断开连接，收到此事件 */
        offDisconnect(
            /** 断开连接，收到此事件的回调函数 */
            callback?: OffDisconnectCallback
        ): void
        /** [GameServerManager.offGameEnd(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offGameEnd.html)
         *
         * 取消监听帧同步游戏结束 */
        offGameEnd(
            /** 的回调函数 */
            callback?: OffGameEndCallback
        ): void
        /** [GameServerManager.offGameStart(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offGameStart.html)
         *
         * 取消监听帧同步游戏开始 */
        offGameStart(
            /** 的回调函数 */
            callback?: OffGameStartCallback
        ): void
        /** [GameServerManager.offInvite(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offInvite.html)
         *
         * 取消监听接收邀请，当用户确认邀请之后会收到此事件
         *
         * 最低基础库： `2.9.4` */
        offInvite(
            /** 接收邀请，当用户确认邀请之后会收到此事件的回调函数 */
            callback?: OffInviteCallback
        ): void
        /** [GameServerManager.offLockStepError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offLockStepError.html)
         *
         * 取消监听帧同步出错
         *
         * 最低基础库： `2.11.2` */
        offLockStepError(
            /** 的回调函数 */
            callback?: OffLockStepErrorCallback
        ): void
        /** [GameServerManager.offLogout(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offLogout.html)
         *
         * 取消监听用户登出游戏服务事件 */
        offLogout(
            /** 用户登出游戏服务事件的回调函数 */
            callback?: OffLogoutCallback
        ): void
        /** [GameServerManager.offMatch(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offMatch.html)
         *
         * 取消监听游戏匹配成功的事件
         *
         * 最低基础库： `2.14.4` */
        offMatch(
            /** 游戏匹配成功的事件的回调函数 */
            callback?: OffMatchCallback
        ): void
        /** [GameServerManager.offRoomInfoChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offRoomInfoChange.html)
         *
         * 取消监听房间信息更新 */
        offRoomInfoChange(
            /** 的回调函数 */
            callback?: OffRoomInfoChangeCallback
        ): void
        /** [GameServerManager.offStateUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offStateUpdate.html)
         *
         * 取消监听好友在线状态变更（该接口需要在开放数据域使用）
         *
         * 最低基础库： `2.9.4` */
        offStateUpdate(
            /** 的回调函数 */
            callback?: OffStateUpdateCallback
        ): void
        /** [GameServerManager.offSyncFrame(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offSyncFrame.html)
         *
         * 取消监听收到同个房间的帧同步消息 */
        offSyncFrame(
            /** 的回调函数 */
            callback?: OffSyncFrameCallback
        ): void
        /** [GameServerManager.onBeKickedOut(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onBeKickedOut.html)
         *
         * 监听自己被踢出当前房间 */
        onBeKickedOut(
            /** 的回调函数 */
            callback: OnBeKickedOutCallback
        ): void
        /** [GameServerManager.onBroadcast(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onBroadcast.html)
         *
         * 监听收到同个房间内的广播消息 */
        onBroadcast(
            /** 的回调函数 */
            callback: OnBroadcastCallback
        ): void
        /** [GameServerManager.onDisconnect(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onDisconnect.html)
         *
         * 监听断开连接，收到此事件后，需要调用 `GameServerManager.reconnect` 进行重连 */
        onDisconnect(
            /** 断开连接，收到此事件的回调函数 */
            callback: OnDisconnectCallback
        ): void
        /** [GameServerManager.onGameEnd(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onGameEnd.html)
         *
         * 监听帧同步游戏结束 */
        onGameEnd(
            /** 的回调函数 */
            callback: OnGameEndCallback
        ): void
        /** [GameServerManager.onGameStart(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onGameStart.html)
         *
         * 监听帧同步游戏开始 */
        onGameStart(
            /** 的回调函数 */
            callback: OnGameStartCallback
        ): void
        /** [GameServerManager.onInvite(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onInvite.html)
         *
         * 监听接收邀请，当用户确认邀请之后会收到此事件
         *
         * 最低基础库： `2.9.4` */
        onInvite(
            /** 接收邀请，当用户确认邀请之后会收到此事件的回调函数 */
            callback: OnInviteCallback
        ): void
        /** [GameServerManager.onLockStepError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onLockStepError.html)
         *
         * 监听帧同步出错
         *
         * 最低基础库： `2.11.2` */
        onLockStepError(
            /** 的回调函数 */
            callback: OnLockStepErrorCallback
        ): void
        /** [GameServerManager.onLogout(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onLogout.html)
         *
         * 监听用户登出游戏服务事件，可能是主动登出也可能是其他原因被动登出 */
        onLogout(
            /** 用户登出游戏服务事件的回调函数 */
            callback: OnLogoutCallback
        ): void
        /** [GameServerManager.onMatch(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onMatch.html)
         *
         * 监听游戏匹配成功的事件
         *
         * 最低基础库： `2.14.4` */
        onMatch(
            /** 游戏匹配成功的事件的回调函数 */
            callback: OnMatchCallback
        ): void
        /** [GameServerManager.onRoomInfoChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onRoomInfoChange.html)
         *
         * 监听房间信息更新 */
        onRoomInfoChange(
            /** 的回调函数 */
            callback: OnRoomInfoChangeCallback
        ): void
        /** [GameServerManager.onStateUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onStateUpdate.html)
         *
         * 监听好友在线状态变更（该接口需要在开放数据域使用）
         *
         * 最低基础库： `2.9.4` */
        onStateUpdate(
            /** 的回调函数 */
            callback: OnStateUpdateCallback
        ): void
        /** [GameServerManager.onSyncFrame(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onSyncFrame.html)
         *
         * 监听收到同个房间的帧同步消息 */
        onSyncFrame(
            /** 的回调函数 */
            callback: OnSyncFrameCallback
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
         * 取消游戏匹配
         *
         * 最低基础库： `2.14.4` */
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
        /** [Promise GameServerManager.inviteFriend(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.inviteFriend.html)
         *
         * 邀请好友，该好友的系统状态必须为在线（该接口需要在开放数据域使用）
         *
         * 最低基础库： `2.9.4` */
        inviteFriend(option: InviteFriendOption): Promise<any>
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
        /** [Promise GameServerManager.reconnect(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.reconnect.html)
         *
         * 重连游戏服务。如果此时连接并未断开或游戏未开始，会直接成功；如果游戏已开始并且连接已断开，会进行重连，并返回此时服务器的最大帧号。 */
        reconnect(option: ReconnectOption): Promise<any>
        /** [Promise GameServerManager.restart(Object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.restart.html)
         *
         * 重启游戏并进入"组队中"的状态。如果当前房间游戏已结束，调用可进入"组队中"状态并重置所有玩家的准备状态；如果当前房间已经在"组队中"状态，调用不改变状态；如果当前房间游戏进行中，调用失败。 */
        restart(option?: RestartOption): Promise<any>
        /** [Promise GameServerManager.setState(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.setState.html)
         *
         * 更新玩家状态信息
         *
         * 最低基础库： `2.9.4` */
        setState(option: SetStateOption): Promise<any>
        /** [Promise GameServerManager.startMatch(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.startMatch.html)
         *
         * 开始游戏匹配
         *
         * 最低基础库： `2.14.4` */
        startMatch(option: StartMatchOption): Promise<any>
        /** [Promise GameServerManager.startStateService(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.startStateService.html)
         *
         * 开启状态管理服务，只有开启状态管理服务，才能获取在线好友列表以及接收好友邀请
         *
         * 最低基础库： `2.9.4` */
        startStateService(option: StartStateServiceOption): Promise<any>
        /** [Promise GameServerManager.updateReadyStatus(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.updateReadyStatus.html)
         *
         * 更新玩家准备信息 */
        updateReadyStatus(option: UpdateReadyStatusOption): Promise<any>
        /** [Promise GameServerManager.uploadFrame(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.uploadFrame.html)
         *
         * 上传游戏帧 */
        uploadFrame(option: UploadFrameOption): Promise<any>
        /** [boolean GameServerManager.setInviteData(string data)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.setInviteData.html)
         *
         * 设置邀请好友附带的数据
         *
         * 最低基础库： `2.9.4` */
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
    interface GeneralCallbackResult {
        errMsg: string
    }
    interface GridAd {
        /** [GridAd.destroy()](https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.destroy.html)
         *
         * 销毁 grid(格子) 广告。 */
        destroy(): void
        /** [GridAd.hide()](https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.hide.html)
         *
         * 隐藏 grid(格子) 广告。 */
        hide(): void
        /** [GridAd.offError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.offError.html)
         *
         * 取消监听 grid(格子) 广告错误事件 */
        offError(
            /** grid(格子) 广告错误事件的回调函数 */
            callback?: BannerAdOffErrorCallback
        ): void
        /** [GridAd.offLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.offLoad.html)
         *
         * 取消监听 grid(格子) 广告加载事件 */
        offLoad(
            /** grid(格子) 广告加载事件的回调函数 */
            callback?: OffLoadCallback
        ): void
        /** [GridAd.offResize(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.offResize.html)
         *
         * 取消监听 grid(格子) 广告尺寸变化事件 */
        offResize(
            /** grid(格子) 广告尺寸变化事件的回调函数 */
            callback?: BannerAdOffResizeCallback
        ): void
        /** [GridAd.onError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.onError.html)
         *
         * 监听 grid(格子) 广告错误事件。
         *
         * **错误码信息与解决方案表**
         *
         *
         *  错误码是通过onError获取到的错误信息。调试期间，可以通过异常返回来捕获信息。
         *  在小程序发布上线之后，如果遇到异常问题，可以在[“运维中心“](https://mp.weixin.qq.com/)里面搜寻错误日志，还可以针对异常返回加上适当的监控信息。
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
         * | 1007  | 广告组件被驳回  | 你的广告能力已经被封禁，封禁期间无法展现广告 | 请前往mp.weixin.qq.com确认小程序广告封禁状态。 |
         * | 1008  | 广告单元已关闭  | 该广告位的广告能力已经被关闭 | 请前往mp.weixin.qq.com重新打开对应广告位的展现。| */
        onError(
            /** grid(格子) 广告错误事件的回调函数 */
            callback: BannerAdOnErrorCallback
        ): void
        /** [GridAd.onLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.onLoad.html)
         *
         * 监听 grid(格子) 广告加载事件。 */
        onLoad(
            /** grid(格子) 广告加载事件的回调函数 */
            callback: OnLoadCallback
        ): void
        /** [GridAd.onResize(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.onResize.html)
         *
         * 监听 grid(格子) 广告尺寸变化事件。 */
        onResize(
            /** grid(格子) 广告尺寸变化事件的回调函数 */
            callback: BannerAdOnResizeCallback
        ): void
        /** [Promise GridAd.show()](https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.show.html)
         *
         * 显示 grid(格子) 广告。 */
        show(): Promise<any>
    }
    interface IBeaconError {
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
    interface InnerAudioContext {
        /** [InnerAudioContext.destroy()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.destroy.html)
         *
         * 销毁当前实例 */
        destroy(): void
        /** [InnerAudioContext.offCanplay(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offCanplay.html)
         *
         * 取消监听音频进入可以播放状态的事件
         *
         * 最低基础库： `1.9.0` */
        offCanplay(
            /** 音频进入可以播放状态的事件的回调函数 */
            callback?: OffCanplayCallback
        ): void
        /** [InnerAudioContext.offEnded(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offEnded.html)
         *
         * 取消监听音频自然播放至结束的事件
         *
         * 最低基础库： `1.9.0` */
        offEnded(
            /** 音频自然播放至结束的事件的回调函数 */
            callback?: OffEndedCallback
        ): void
        /** [InnerAudioContext.offError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offError.html)
         *
         * 取消监听音频播放错误事件
         *
         * 最低基础库： `1.9.0` */
        offError(
            /** 音频播放错误事件的回调函数 */
            callback?: InnerAudioContextOffErrorCallback
        ): void
        /** [InnerAudioContext.offPause(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offPause.html)
         *
         * 取消监听音频暂停事件
         *
         * 最低基础库： `1.9.0` */
        offPause(
            /** 音频暂停事件的回调函数 */
            callback?: OffPauseCallback
        ): void
        /** [InnerAudioContext.offPlay(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offPlay.html)
         *
         * 取消监听音频播放事件
         *
         * 最低基础库： `1.9.0` */
        offPlay(
            /** 音频播放事件的回调函数 */
            callback?: OffPlayCallback
        ): void
        /** [InnerAudioContext.offSeeked(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offSeeked.html)
         *
         * 取消监听音频完成跳转操作的事件
         *
         * 最低基础库： `1.9.0` */
        offSeeked(
            /** 音频完成跳转操作的事件的回调函数 */
            callback?: OffSeekedCallback
        ): void
        /** [InnerAudioContext.offSeeking(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offSeeking.html)
         *
         * 取消监听音频进行跳转操作的事件
         *
         * 最低基础库： `1.9.0` */
        offSeeking(
            /** 音频进行跳转操作的事件的回调函数 */
            callback?: OffSeekingCallback
        ): void
        /** [InnerAudioContext.offStop(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offStop.html)
         *
         * 取消监听音频停止事件
         *
         * 最低基础库： `1.9.0` */
        offStop(
            /** 音频停止事件的回调函数 */
            callback?: OffStopCallback
        ): void
        /** [InnerAudioContext.offTimeUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offTimeUpdate.html)
         *
         * 取消监听音频播放进度更新事件
         *
         * 最低基础库： `1.9.0` */
        offTimeUpdate(
            /** 音频播放进度更新事件的回调函数 */
            callback?: InnerAudioContextOffTimeUpdateCallback
        ): void
        /** [InnerAudioContext.offWaiting(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offWaiting.html)
         *
         * 取消监听音频加载中事件
         *
         * 最低基础库： `1.9.0` */
        offWaiting(
            /** 音频加载中事件的回调函数 */
            callback?: OffWaitingCallback
        ): void
        /** [InnerAudioContext.onCanplay(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onCanplay.html)
         *
         * 监听音频进入可以播放状态的事件。但不保证后面可以流畅播放 */
        onCanplay(
            /** 音频进入可以播放状态的事件的回调函数 */
            callback: OnCanplayCallback
        ): void
        /** [InnerAudioContext.onEnded(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onEnded.html)
         *
         * 监听音频自然播放至结束的事件 */
        onEnded(
            /** 音频自然播放至结束的事件的回调函数 */
            callback: OnEndedCallback
        ): void
        /** [InnerAudioContext.onError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onError.html)
         *
         * 监听音频播放错误事件
         *
         * **Tips**
         *
         *
         * 1. errCode=100001 时，如若 errMsg 中有 INNERCODE -11828 ，请先检查 response header 是否缺少 Content-Length
         * 2. errCode=100001 时，如若 errMsg 中有 systemErrCode:200333420，请检查文件编码格式和 fileExtension 是否一致 */
        onError(
            /** 音频播放错误事件的回调函数 */
            callback: InnerAudioContextOnErrorCallback
        ): void
        /** [InnerAudioContext.onPause(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onPause.html)
         *
         * 监听音频暂停事件 */
        onPause(
            /** 音频暂停事件的回调函数 */
            callback: OnPauseCallback
        ): void
        /** [InnerAudioContext.onPlay(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onPlay.html)
         *
         * 监听音频播放事件 */
        onPlay(
            /** 音频播放事件的回调函数 */
            callback: OnPlayCallback
        ): void
        /** [InnerAudioContext.onSeeked(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onSeeked.html)
         *
         * 监听音频完成跳转操作的事件 */
        onSeeked(
            /** 音频完成跳转操作的事件的回调函数 */
            callback: OnSeekedCallback
        ): void
        /** [InnerAudioContext.onSeeking(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onSeeking.html)
         *
         * 监听音频进行跳转操作的事件 */
        onSeeking(
            /** 音频进行跳转操作的事件的回调函数 */
            callback: OnSeekingCallback
        ): void
        /** [InnerAudioContext.onStop(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onStop.html)
         *
         * 监听音频停止事件 */
        onStop(
            /** 音频停止事件的回调函数 */
            callback: InnerAudioContextOnStopCallback
        ): void
        /** [InnerAudioContext.onTimeUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onTimeUpdate.html)
         *
         * 监听音频播放进度更新事件 */
        onTimeUpdate(
            /** 音频播放进度更新事件的回调函数 */
            callback: InnerAudioContextOnTimeUpdateCallback
        ): void
        /** [InnerAudioContext.onWaiting(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onWaiting.html)
         *
         * 监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发 */
        onWaiting(
            /** 音频加载中事件的回调函数 */
            callback: OnWaitingCallback
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
    interface InterstitialAd {
        /** [InterstitialAd.destroy()](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.destroy.html)
         *
         * 销毁插屏广告实例。
         *
         * 最低基础库： `2.8.0` */
        destroy(): void
        /** [InterstitialAd.offClose(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.offClose.html)
         *
         * 取消监听插屏广告关闭事件 */
        offClose(
            /** 插屏广告关闭事件的回调函数 */
            callback?: UDPSocketOffCloseCallback
        ): void
        /** [InterstitialAd.offError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.offError.html)
         *
         * 取消监听插屏错误事件 */
        offError(
            /** 插屏错误事件的回调函数 */
            callback?: InterstitialAdOffErrorCallback
        ): void
        /** [InterstitialAd.offLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.offLoad.html)
         *
         * 取消监听插屏广告加载事件 */
        offLoad(
            /** 插屏广告加载事件的回调函数 */
            callback?: OffLoadCallback
        ): void
        /** [InterstitialAd.onClose(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.onClose.html)
         *
         * 监听插屏广告关闭事件。 */
        onClose(
            /** 插屏广告关闭事件的回调函数 */
            callback: UDPSocketOnCloseCallback
        ): void
        /** [InterstitialAd.onError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.onError.html)
         *
         * 监听插屏错误事件。
         *
         * **错误码信息与解决方案表**
         *
         *
         *  错误码是通过onError获取到的错误信息。调试期间，可以通过异常返回来捕获信息。
         *  在小程序发布上线之后，如果遇到异常问题，可以在[“运维中心“](https://mp.weixin.qq.com/)里面搜寻错误日志，还可以针对异常返回加上适当的监控信息。
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
         * | 1007  | 广告组件被驳回  | 你的广告能力已经被封禁，封禁期间无法展现广告 | 请前往mp.weixin.qq.com确认小程序广告封禁状态。 |
         * | 1008  | 广告单元已关闭  | 该广告位的广告能力已经被关闭 | 请前往mp.weixin.qq.com重新打开对应广告位的展现。| */
        onError(
            /** 插屏错误事件的回调函数 */
            callback: InterstitialAdOnErrorCallback
        ): void
        /** [InterstitialAd.onLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.onLoad.html)
         *
         * 监听插屏广告加载事件。 */
        onLoad(
            /** 插屏广告加载事件的回调函数 */
            callback: OnLoadCallback
        ): void
        /** [Promise InterstitialAd.load()](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.load.html)
         *
         * 加载插屏广告。
         *
         * 最低基础库： `2.8.0` */
        load(): Promise<any>
        /** [Promise InterstitialAd.show()](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.show.html)
         *
         * 显示插屏广告。
         *
         * **错误码信息表**
         *
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
        /** [LoadSubpackageTask.onProgressUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/subpackage/LoadSubpackageTask.onProgressUpdate.html)
         *
         * 监听分包加载进度变化事件
         *
         * 最低基础库： `2.1.0` */
        onProgressUpdate(
            /** 分包加载进度变化事件的回调函数 */
            callback: LoadSubpackageTaskOnProgressUpdateCallback
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
    interface MediaAudioPlayer {
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
         * | -15001 |  | 虚拟支付接口错误码，缺少参数 |
         * | -15002 |  | 虚拟支付接口错误码，参数不合法 |
         * | -15003 |  | 虚拟支付接口错误码，订单重复 |
         * | -15004 |  | 虚拟支付接口错误码，后台错误 |
         * | -15005 |  | 虚拟支付接口错误码，appId权限被封禁 |
         * | -15006 |  | 虚拟支付接口错误码，货币类型不支持 |
         * | -15007 |  | 虚拟支付接口错误码，订单已支付 |
         * | -15009 |  | 虚拟支付接口错误码，由于健康系统限制，本次支付已超过限额（这种错误情况会有默认弹窗提示） |
         * | 1 |  | 虚拟支付接口错误码，用户取消支付 |
         * | 2 |  | 虚拟支付接口错误码，客户端错误,判断到小程序在用户处于支付中时,又发起了一笔支付请求 |
         * | 3 |  | 虚拟支付接口错误码，Android独有错误：用户使用GooglePlay支付，而手机未安装GooglePlay |
         * | 4 |  | 虚拟支付接口错误码，用户操作系统支付状态异常 |
         * | 5 |  | 虚拟支付接口错误码，操作系统错误 |
         * | 6 |  | 虚拟支付接口错误码，其他错误 |
         * | 1000 |  | 参数错误 |
         * | 1003 |  | 米大师Portal错误 | */ errMsg: string
        /** 错误码
         *
         * | 错误码 | 错误信息 | 说明 |
         * | - | - | - |
         * | -1 |  | 系统失败 |
         * | -2 |  | 支付取消 |
         * | -15001 |  | 虚拟支付接口错误码，缺少参数 |
         * | -15002 |  | 虚拟支付接口错误码，参数不合法 |
         * | -15003 |  | 虚拟支付接口错误码，订单重复 |
         * | -15004 |  | 虚拟支付接口错误码，后台错误 |
         * | -15005 |  | 虚拟支付接口错误码，appId权限被封禁 |
         * | -15006 |  | 虚拟支付接口错误码，货币类型不支持 |
         * | -15007 |  | 虚拟支付接口错误码，订单已支付 |
         * | -15009 |  | 虚拟支付接口错误码，由于健康系统限制，本次支付已超过限额（这种错误情况会有默认弹窗提示） |
         * | 1 |  | 虚拟支付接口错误码，用户取消支付 |
         * | 2 |  | 虚拟支付接口错误码，客户端错误,判断到小程序在用户处于支付中时,又发起了一笔支付请求 |
         * | 3 |  | 虚拟支付接口错误码，Android独有错误：用户使用GooglePlay支付，而手机未安装GooglePlay |
         * | 4 |  | 虚拟支付接口错误码，用户操作系统支付状态异常 |
         * | 5 |  | 虚拟支付接口错误码，操作系统错误 |
         * | 6 |  | 虚拟支付接口错误码，其他错误 |
         * | 1000 |  | 参数错误 |
         * | 1003 |  | 米大师Portal错误 | */ errCode: number
    }
    interface OpenDataContext {
        /** [OpenDataContext.postMessage(Object message)](https://developers.weixin.qq.com/minigame/dev/api/open-api/context/OpenDataContext.postMessage.html)
         *
         * 向开放数据域发送消息 */
        postMessage(
            /** 要发送的消息，message 中及嵌套对象中 key 的 value 只能是 primitive value。即 number、string、boolean、null、undefined。 */
            message: IAnyObject
        ): void
    }
    interface OpenSettingButton {
        /** [OpenSettingButton.destroy()](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/OpenSettingButton.destroy.html)
         *
         * 销毁打开设置页面按钮 */
        destroy(): void
        /** [OpenSettingButton.hide()](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/OpenSettingButton.hide.html)
         *
         * 隐藏打开设置页面按钮。 */
        hide(): void
        /** [OpenSettingButton.offTap(function callback)](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/OpenSettingButton.offTap.html)
         *
         * 取消监听设置页面按钮的点击事件 */
        offTap(
            /** 设置页面按钮的点击事件的回调函数 */
            callback?: GameClubButtonOffTapCallback
        ): void
        /** [OpenSettingButton.onTap(function callback)](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/OpenSettingButton.onTap.html)
         *
         * 监听设置页面按钮的点击事件 */
        onTap(
            /** 设置页面按钮的点击事件的回调函数 */
            callback: GameClubButtonOnTapCallback
        ): void
        /** [OpenSettingButton.show()](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/OpenSettingButton.show.html)
         *
         * 显示打开设置页面按钮 */
        show(): void
    }
    interface Performance {
        /** [number Performance.now()](https://developers.weixin.qq.com/minigame/dev/api/base/performance/Performance.now.html)
         *
         * 可以获取当前时间以微秒为单位的时间戳 */
        now(): number
    }
    interface RealtimeLogManager {
        /** [RealtimeLogManager.addFilterMsg(string msg)](https://developers.weixin.qq.com/minigame/dev/api/base/debug/RealtimeLogManager.addFilterMsg.html)
         *
         * 添加过滤关键字
         *
         * 最低基础库： `2.14.4` */
        addFilterMsg(
            /** 是setFilterMsg的添加接口。用于设置多个过滤关键字。 */
            msg: string
        ): void
        /** [RealtimeLogManager.error()](https://developers.weixin.qq.com/minigame/dev/api/base/debug/RealtimeLogManager.error.html)
         *
         * 写 error 日志
         *
         * 最低基础库： `2.14.4` */
        error(
            /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过5Kb */
            ...args: any[]
        ): void
        /** [RealtimeLogManager.info()](https://developers.weixin.qq.com/minigame/dev/api/base/debug/RealtimeLogManager.info.html)
         *
         * 写 info 日志
         *
         * 最低基础库： `2.14.4` */
        info(
            /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过5Kb */
            ...args: any[]
        ): void
        /** [RealtimeLogManager.setFilterMsg(string msg)](https://developers.weixin.qq.com/minigame/dev/api/base/debug/RealtimeLogManager.setFilterMsg.html)
         *
         * 设置过滤关键字
         *
         * 最低基础库： `2.14.4` */
        setFilterMsg(
            /** 过滤关键字，最多不超过1Kb，可以在小程序管理后台根据设置的内容搜索得到对应的日志。 */
            msg: string
        ): void
        /** [RealtimeLogManager.warn()](https://developers.weixin.qq.com/minigame/dev/api/base/debug/RealtimeLogManager.warn.html)
         *
         * 写 warn 日志
         *
         * 最低基础库： `2.14.4` */
        warn(
            /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过5Kb */
            ...args: any[]
        ): void
    }
    interface RecorderManager {
        /** [RecorderManager.onError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onError.html)
         *
         * 监听录音错误事件 */
        onError(
            /** 录音错误事件的回调函数 */
            callback: UDPSocketOnErrorCallback
        ): void
        /** [RecorderManager.onFrameRecorded(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onFrameRecorded.html)
         *
         * 监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。 */
        onFrameRecorded(
            /** 已录制完指定帧大小的文件事件的回调函数 */
            callback: OnFrameRecordedCallback
        ): void
        /** [RecorderManager.onInterruptionBegin(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onInterruptionBegin.html)
         *
         * 监听录音因为受到系统占用而被中断开始事件。以下场景会触发此事件：微信语音聊天、微信视频聊天。此事件触发后，录音会被暂停。pause 事件在此事件后触发
         *
         * 最低基础库： `2.3.0` */
        onInterruptionBegin(
            /** 录音因为受到系统占用而被中断开始事件的回调函数 */
            callback: OnInterruptionBeginCallback
        ): void
        /** [RecorderManager.onInterruptionEnd(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onInterruptionEnd.html)
         *
         * 监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功。
         *
         * 最低基础库： `2.3.0` */
        onInterruptionEnd(
            /** 录音中断结束事件的回调函数 */
            callback: OnInterruptionEndCallback
        ): void
        /** [RecorderManager.onPause(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onPause.html)
         *
         * 监听录音暂停事件 */
        onPause(
            /** 录音暂停事件的回调函数 */
            callback: OnPauseCallback
        ): void
        /** [RecorderManager.onResume(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onResume.html)
         *
         * 监听录音继续事件 */
        onResume(
            /** 录音继续事件的回调函数 */
            callback: OnResumeCallback
        ): void
        /** [RecorderManager.onStart(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onStart.html)
         *
         * 监听录音开始事件 */
        onStart(
            /** 录音开始事件的回调函数 */
            callback: OnStartCallback
        ): void
        /** [RecorderManager.onStop(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onStop.html)
         *
         * 监听录音结束事件 */
        onStop(
            /** 录音结束事件的回调函数 */
            callback: RecorderManagerOnStopCallback
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
    interface RequestTask {
        /** [RequestTask.abort()](https://developers.weixin.qq.com/minigame/dev/api/network/request/RequestTask.abort.html)
         *
         * 中断请求任务
         *
         * 最低基础库： `1.4.0` */
        abort(): void
        /** [RequestTask.offHeadersReceived(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/request/RequestTask.offHeadersReceived.html)
         *
         * 取消监听 HTTP Response Header 事件
         *
         * 最低基础库： `2.1.0` */
        offHeadersReceived(
            /** HTTP Response Header 事件的回调函数 */
            callback?: OffHeadersReceivedCallback
        ): void
        /** [RequestTask.onHeadersReceived(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/request/RequestTask.onHeadersReceived.html)
         *
         * 监听 HTTP Response Header 事件。会比请求完成事件更早
         *
         * 最低基础库： `2.1.0` */
        onHeadersReceived(
            /** HTTP Response Header 事件的回调函数 */
            callback: OnHeadersReceivedCallback
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
         * 销毁激励视频广告实例。
         *
         * 最低基础库： `2.8.0` */
        destroy(): void
        /** [RewardedVideoAd.offClose(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.offClose.html)
         *
         * 取消监听用户点击 `关闭广告` 按钮的事件 */
        offClose(
            /** 用户点击 `关闭广告` 按钮的事件的回调函数 */
            callback?: RewardedVideoAdOffCloseCallback
        ): void
        /** [RewardedVideoAd.offError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.offError.html)
         *
         * 取消监听激励视频错误事件 */
        offError(
            /** 激励视频错误事件的回调函数 */
            callback?: BannerAdOffErrorCallback
        ): void
        /** [RewardedVideoAd.offLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.offLoad.html)
         *
         * 取消监听激励视频广告加载事件 */
        offLoad(
            /** 激励视频广告加载事件的回调函数 */
            callback?: OffLoadCallback
        ): void
        /** [RewardedVideoAd.onClose(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.onClose.html)
         *
         * 监听用户点击 `关闭广告` 按钮的事件。 */
        onClose(
            /** 用户点击 `关闭广告` 按钮的事件的回调函数 */
            callback: RewardedVideoAdOnCloseCallback
        ): void
        /** [RewardedVideoAd.onError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.onError.html)
         *
         * 监听激励视频错误事件。
         *
         * **错误码信息与解决方案表**
         *
         *
         *  错误码是通过onError获取到的错误信息。调试期间，可以通过异常返回来捕获信息。
         *  在小程序发布上线之后，如果遇到异常问题，可以在[“运维中心“](https://mp.weixin.qq.com/)里面搜寻错误日志，还可以针对异常返回加上适当的监控信息。
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
         * | 1007  | 广告组件被驳回  | 你的广告能力已经被封禁，封禁期间无法展现广告 | 请前往mp.weixin.qq.com确认小程序广告封禁状态。 |
         * | 1008  | 广告单元已关闭  | 该广告位的广告能力已经被关闭 | 请前往mp.weixin.qq.com重新打开对应广告位的展现。| */
        onError(
            /** 激励视频错误事件的回调函数 */
            callback: BannerAdOnErrorCallback
        ): void
        /** [RewardedVideoAd.onLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.onLoad.html)
         *
         * 监听激励视频广告加载事件。 */
        onLoad(
            /** 激励视频广告加载事件的回调函数 */
            callback: OnLoadCallback
        ): void
    }
    interface SocketTask {
        /** [SocketTask.close(Object object)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.close.html)
         *
         * 关闭 WebSocket 连接 */
        close(option: CloseOption): void
        /** [SocketTask.onClose(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.onClose.html)
         *
         * 监听 WebSocket 连接关闭事件 */
        onClose(
            /** WebSocket 连接关闭事件的回调函数 */
            callback: SocketTaskOnCloseCallback
        ): void
        /** [SocketTask.onError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.onError.html)
         *
         * 监听 WebSocket 错误事件 */
        onError(
            /** WebSocket 错误事件的回调函数 */
            callback: UDPSocketOnErrorCallback
        ): void
        /** [SocketTask.onMessage(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.onMessage.html)
         *
         * 监听 WebSocket 接受到服务器的消息事件 */
        onMessage(
            /** WebSocket 接受到服务器的消息事件的回调函数 */
            callback: SocketTaskOnMessageCallback
        ): void
        /** [SocketTask.onOpen(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.onOpen.html)
         *
         * 监听 WebSocket 连接打开事件 */
        onOpen(
            /** WebSocket 连接打开事件的回调函数 */
            callback: OnOpenCallback
        ): void
        /** [SocketTask.send(Object object)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.send.html)
         *
         * 通过 WebSocket 连接发送数据 */
        send(option: SocketTaskSendOption): void
    }
    interface Stats {
        /** [boolean Stats.isDirectory()](https://developers.weixin.qq.com/minigame/dev/api/file/Stats.isDirectory.html)
         *
         * 判断当前文件是否一个目录 */
        isDirectory(): boolean
        /** [boolean Stats.isFile()](https://developers.weixin.qq.com/minigame/dev/api/file/Stats.isFile.html)
         *
         * 判断当前文件是否一个普通文件 */
        isFile(): boolean
    }
    interface UDPSocket {
        /** [UDPSocket.close()](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.close.html)
         *
         * 关闭 UDP Socket 实例，相当于销毁。 在关闭之后，UDP Socket 实例不能再发送消息，每次调用 `UDPSocket.send` 将会触发错误事件，并且 message 事件回调函数也不会再也执行。在 `UDPSocket` 实例被创建后将被 Native 强引用，保证其不被 GC。在 `UDPSocket.close` 后将解除对其的强引用，让 UDPSocket 实例遵从 GC。 */
        close(): void
        /** [UDPSocket.offClose(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.offClose.html)
         *
         * 取消监听关闭事件 */
        offClose(
            /** 关闭事件的回调函数 */
            callback?: UDPSocketOffCloseCallback
        ): void
        /** [UDPSocket.offError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.offError.html)
         *
         * 取消监听错误事件 */
        offError(
            /** 错误事件的回调函数 */
            callback?: UDPSocketOffErrorCallback
        ): void
        /** [UDPSocket.offListening(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.offListening.html)
         *
         * 取消监听开始监听数据包消息的事件 */
        offListening(
            /** 开始监听数据包消息的事件的回调函数 */
            callback?: OffListeningCallback
        ): void
        /** [UDPSocket.offMessage(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.offMessage.html)
         *
         * 取消监听收到消息的事件 */
        offMessage(
            /** 收到消息的事件的回调函数 */
            callback?: OffMessageCallback
        ): void
        /** [UDPSocket.onClose(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.onClose.html)
         *
         * 监听关闭事件 */
        onClose(
            /** 关闭事件的回调函数 */
            callback: UDPSocketOnCloseCallback
        ): void
        /** [UDPSocket.onError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.onError.html)
         *
         * 监听错误事件 */
        onError(
            /** 错误事件的回调函数 */
            callback: UDPSocketOnErrorCallback
        ): void
        /** [UDPSocket.onListening(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.onListening.html)
         *
         * 监听开始监听数据包消息的事件 */
        onListening(
            /** 开始监听数据包消息的事件的回调函数 */
            callback: OnListeningCallback
        ): void
        /** [UDPSocket.onMessage(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.onMessage.html)
         *
         * 监听收到消息的事件 */
        onMessage(
            /** 收到消息的事件的回调函数 */
            callback: UDPSocketOnMessageCallback
        ): void
        /** [UDPSocket.send(Object object)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.send.html)
         *
         * 向指定的 IP 和 port 发送消息 */
        send(option: UDPSocketSendOption): void
        /** [number UDPSocket.bind(number port)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.bind.html)
         *
         * 绑定一个系统随机分配的可用端口，或绑定一个指定的端口号 */
        bind(
            /** 指定要绑定的端口号，不传则返回系统随机分配的可用端口
             *
             * 最低基础库： `2.9.0` */
            port?: number
        ): number
    }
    interface UpdateManager {
        /** [UpdateManager.applyUpdate()](https://developers.weixin.qq.com/minigame/dev/api/base/update/UpdateManager.applyUpdate.html)
         *
         * 强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 `onUpdateReady` 回调）调用。 */
        applyUpdate(): void
        /** [UpdateManager.onCheckForUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/update/UpdateManager.onCheckForUpdate.html)
         *
         * 监听向微信后台请求检查更新结果事件。微信在小程序冷启动时自动检查更新，不需由开发者主动触发。 */
        onCheckForUpdate(
            /** 向微信后台请求检查更新结果事件的回调函数 */
            callback: OnCheckForUpdateCallback
        ): void
        /** [UpdateManager.onUpdateFailed(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/update/UpdateManager.onUpdateFailed.html)
         *
         * 监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调 */
        onUpdateFailed(
            /** 小程序更新失败事件的回调函数 */
            callback: OnUpdateFailedCallback
        ): void
        /** [UpdateManager.onUpdateReady(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/update/UpdateManager.onUpdateReady.html)
         *
         * 监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调 */
        onUpdateReady(
            /** 小程序有版本更新事件的回调函数 */
            callback: OnUpdateReadyCallback
        ): void
    }
    interface UploadTask {
        /** [UploadTask.abort()](https://developers.weixin.qq.com/minigame/dev/api/network/upload/UploadTask.abort.html)
         *
         * 中断上传任务
         *
         * 最低基础库： `1.4.0` */
        abort(): void
        /** [UploadTask.offHeadersReceived(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/upload/UploadTask.offHeadersReceived.html)
         *
         * 取消监听 HTTP Response Header 事件
         *
         * 最低基础库： `2.1.0` */
        offHeadersReceived(
            /** HTTP Response Header 事件的回调函数 */
            callback?: OffHeadersReceivedCallback
        ): void
        /** [UploadTask.offProgressUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/upload/UploadTask.offProgressUpdate.html)
         *
         * 取消监听上传进度变化事件
         *
         * 最低基础库： `2.1.0` */
        offProgressUpdate(
            /** 上传进度变化事件的回调函数 */
            callback?: UploadTaskOffProgressUpdateCallback
        ): void
        /** [UploadTask.onHeadersReceived(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/upload/UploadTask.onHeadersReceived.html)
         *
         * 监听 HTTP Response Header 事件。会比请求完成事件更早
         *
         * 最低基础库： `2.1.0` */
        onHeadersReceived(
            /** HTTP Response Header 事件的回调函数 */
            callback: OnHeadersReceivedCallback
        ): void
        /** [UploadTask.onProgressUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/upload/UploadTask.onProgressUpdate.html)
         *
         * 监听上传进度变化事件
         *
         * 最低基础库： `1.4.0` */
        onProgressUpdate(
            /** 上传进度变化事件的回调函数 */
            callback: UploadTaskOnProgressUpdateCallback
        ): void
    }
    interface UserInfoButton {
        /** [UserInfoButton.destroy()](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/UserInfoButton.destroy.html)
         *
         * 销毁用户信息按钮 */
        destroy(): void
        /** [UserInfoButton.hide()](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/UserInfoButton.hide.html)
         *
         * 隐藏用户信息按钮。 */
        hide(): void
        /** [UserInfoButton.offTap(function callback)](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/UserInfoButton.offTap.html)
         *
         * 取消监听用户信息按钮的点击事件 */
        offTap(
            /** 用户信息按钮的点击事件的回调函数 */
            callback?: UserInfoButtonOffTapCallback
        ): void
        /** [UserInfoButton.onTap(function callback)](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/UserInfoButton.onTap.html)
         *
         * 监听用户信息按钮的点击事件 */
        onTap(
            /** 用户信息按钮的点击事件的回调函数 */
            callback: UserInfoButtonOnTapCallback
        ): void
        /** [UserInfoButton.show()](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/UserInfoButton.show.html)
         *
         * 显示用户信息按钮 */
        show(): void
    }
    interface Video {
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
        /** [Video.offEnded(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offEnded.html)
         *
         * 取消监听视频播放到末尾事件 */
        offEnded(
            /** 视频播放到末尾事件的回调函数 */
            callback?: OffEndedCallback
        ): void
        /** [Video.offError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offError.html)
         *
         * 取消监听视频错误事件 */
        offError(
            /** 视频错误事件的回调函数 */
            callback?: VideoOffErrorCallback
        ): void
        /** [Video.offPause(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offPause.html)
         *
         * 取消监听视频暂停事件 */
        offPause(
            /** 视频暂停事件的回调函数 */
            callback?: OffPauseCallback
        ): void
        /** [Video.offPlay(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offPlay.html)
         *
         * 取消监听视频播放事件 */
        offPlay(
            /** 视频播放事件的回调函数 */
            callback?: OffPlayCallback
        ): void
        /** [Video.offProgress(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offProgress.html)
         *
         * 取消监听视频下载（缓冲）事件 */
        offProgress(
            /** 视频下载（缓冲）事件的回调函数 */
            callback?: OffProgressCallback
        ): void
        /** [Video.offTimeUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offTimeUpdate.html)
         *
         * 取消监听视频播放进度更新事件 */
        offTimeUpdate(
            /** 视频播放进度更新事件的回调函数 */
            callback?: VideoOffTimeUpdateCallback
        ): void
        /** [Video.offWaiting(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offWaiting.html)
         *
         * 取消监听视频由于需要缓冲下一帧而停止时触发 */
        offWaiting(
            /** 的回调函数 */
            callback?: OffWaitingCallback
        ): void
        /** [Video.onEnded(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.onEnded.html)
         *
         * 监听视频播放到末尾事件 */
        onEnded(
            /** 视频播放到末尾事件的回调函数 */
            callback: OnEndedCallback
        ): void
        /** [Video.onError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.onError.html)
         *
         * 监听视频错误事件 */
        onError(
            /** 视频错误事件的回调函数 */
            callback: VideoOnErrorCallback
        ): void
        /** [Video.onPause(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.onPause.html)
         *
         * 监听视频暂停事件 */
        onPause(
            /** 视频暂停事件的回调函数 */
            callback: OnPauseCallback
        ): void
        /** [Video.onPlay(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.onPlay.html)
         *
         * 监听视频播放事件 */
        onPlay(
            /** 视频播放事件的回调函数 */
            callback: OnPlayCallback
        ): void
        /** [Video.onProgress(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.onProgress.html)
         *
         * 监听视频下载（缓冲）事件 */
        onProgress(
            /** 视频下载（缓冲）事件的回调函数 */
            callback: OnProgressCallback
        ): void
        /** [Video.onTimeUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.onTimeUpdate.html)
         *
         * 监听视频播放进度更新事件 */
        onTimeUpdate(
            /** 视频播放进度更新事件的回调函数 */
            callback: VideoOnTimeUpdateCallback
        ): void
        /** [Video.onWaiting(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.onWaiting.html)
         *
         * 监听视频由于需要缓冲下一帧而停止时触发 */
        onWaiting(
            /** 的回调函数 */
            callback: OnWaitingCallback
        ): void
    }
    interface VideoDecoder {
        /** [Object VideoDecoder.getFrameData()](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.getFrameData.html)
         *
         * 获取下一帧的解码数据
         *
         * 最低基础库： `2.11.1` */
        getFrameData(): FrameDataOptions
        /** [VideoDecoder.off(string eventName, function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.off.html)
         *
         * 取消监听录制事件。当对应事件触发时，该回调函数不再执行
         *
         * 最低基础库： `2.11.1` */
        off(
            /** 事件名 */
            eventName: string,
            /** 事件触发时执行的回调函数 */
            callback: (...args: any[]) => any
        ): void
        /** [VideoDecoder.on(string eventName, function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.on.html)
         *
         * 注册监听录制事件的回调函数。当对应事件触发时，回调函数会被执行
         *
         * 最低基础库： `2.11.1` */
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
        /** [VideoDecoder.remove()](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.remove.html)
         *
         * 移除解码器
         *
         * 最低基础库： `2.11.1` */
        remove(): void
        /** [VideoDecoder.seek(number position)](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.seek.html)
         *
         * 跳到某个时间点解码
         *
         * 最低基础库： `2.11.1` */
        seek(
            /** 跳转的解码位置，单位 ms */
            position: number
        ): void
        /** [VideoDecoder.start(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.start.html)
         *
         * 开始解码
         *
         * 最低基础库： `2.11.1` */
        start(option: VideoDecoderStartOption): void
        /** [VideoDecoder.stop()](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.stop.html)
         *
         * 停止解码
         *
         * 最低基础库： `2.11.1` */
        stop(): void
    }
    interface WebGLRenderingContext {
        /** [WebGLRenderingContext.wxBindCanvasTexture(number texture, [Canvas](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.html) canvas)](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/WebGLRenderingContext.wxBindCanvasTexture.html)
*
* 将一个 Canvas 对应的 Texture 绑定到 WebGL 上下文。
*
* **示例代码**
*
*
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
```
*
* 最低基础库： `2.0.0` */
        wxBindCanvasTexture(
            /** WebGL 的纹理类型枚举值 */
            texture: number,
            /** [Canvas](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.html)
             *
             * 需要绑定为 Texture 的 Canvas */
            canvas: Canvas
        ): void
    }
    interface Worker {
        /** [Worker.onMessage(function callback)](https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.onMessage.html)
         *
         * 监听主线程/Worker 线程向当前线程发送的消息的事件。 */
        onMessage(
            /** 主线程/Worker 线程向当前线程发送的消息的事件的回调函数 */
            callback: WorkerOnMessageCallback
        ): void
        /** [Worker.onProcessKilled(function callback)](https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.onProcessKilled.html)
         *
         * 监听 worker进程被系统回收事件（当iOS系统资源紧张时，处于后台的小程序/小游戏的worker存在被系统回收的可能，开发者可监听此事件并重新创建一个worker） */
        onProcessKilled(
            /** worker进程被系统回收事件的回调函数 */
            callback: OnProcessKilledCallback
        ): void
        /** [Worker.postMessage(Object message)](https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.postMessage.html)
*
* 向主线程/Worker 线程发送的消息。
*
* **示例代码**
*
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
``` */
        postMessage(
            /** 需要发送的消息，必须是一个可序列化的 JavaScript key-value 形式的对象。 */
            message: IAnyObject
        ): void
        /** [Worker.terminate()](https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.terminate.html)
         *
         * 结束当前 Worker 线程。仅限在主线程 worker 对象上调用。 */
        terminate(): void
    }
    interface Wx {
        /**
小程序云开发
*/
        cloud: WxCloud
        /**
文件系统中的用户目录路径
*/
        env: { USER_DATA_PATH: string }
        /** [Boolean wx.setHandoffQuery(String query)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.setHandoffQuery.html)
         *
         * 设置接力参数，该接口需要在游戏域调用
         *
         * 最低基础库： `2.14.4` */
        setHandoffQuery(
            /** 需要传递给接力设备的参数，格式 为querystring */
            query: string
        ): boolean
        /** [Object wx.getAccountInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/open-api/account-info/wx.getAccountInfoSync.html)
*
* 获取当前帐号信息。线上小程序版本号仅支持在正式版小程序中获取，开发版和体验版中无法获取。
*
* **示例代码**
*
*
* ```js
const accountInfo = wx.getAccountInfoSync();
console.log(accountInfo.miniProgram.appId) // 小程序 appId
console.log(accountInfo.plugin.appId) // 插件 appId
console.log(accountInfo.plugin.version) // 插件版本号， 'a.b.c' 这样的形式
```
*
* 最低基础库： `2.11.2` */
        getAccountInfoSync(): AccountInfo
        /** [Object wx.getBatteryInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/device/battery/wx.getBatteryInfoSync.html)
         *
         * [wx.getBatteryInfo](https://developers.weixin.qq.com/minigame/dev/api/device/battery/wx.getBatteryInfo.html) 的同步版本 */
        getBatteryInfoSync(): GetBatteryInfoSyncResult
        /** [Object wx.getEnterOptionsSync()](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.getEnterOptionsSync.html)
         *
         * 获取小游戏打开的参数（包括冷启动和热启动）
         *
         * **返回有效 referrerInfo 的场景**
         *
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
         *
         * 部分版本在无`referrerInfo`的时候会返回 `undefined`，建议使用 `options.referrerInfo && options.referrerInfo.appId` 进行判断。
         *
         * 最低基础库： `2.13.2` */
        getEnterOptionsSync(): EnterOptionsGame
        /** [Object wx.getExptInfoSync(Array.&lt;string&gt; keys)](https://developers.weixin.qq.com/minigame/dev/api/open-api/report/wx.getExptInfoSync.html)
         *
         * 给定实验参数数组，获取对应的实验参数值
         *
         * 最低基础库： `2.14.4` */
        getExptInfoSync(
            /** 实验参数数组，不填则获取所有实验参数 */
            keys?: string[]
        ): IAnyObject
        /** [Object wx.getExtConfigSync()](https://developers.weixin.qq.com/minigame/dev/api/ext/wx.getExtConfigSync.html)
*
* [wx.getExtConfig](https://developers.weixin.qq.com/minigame/dev/api/ext/wx.getExtConfig.html) 的同步版本。
*
* **Tips**
*
*
* 1. 本接口暂时无法通过 [wx.canIUse](#) 判断是否兼容，开发者需要自行判断 [wx.getExtConfigSync](https://developers.weixin.qq.com/minigame/dev/api/ext/wx.getExtConfigSync.html) 是否存在来兼容
*
* ****
*
* ```js
let extConfig = wx.getExtConfigSync? wx.getExtConfigSync(): {}
console.log(extConfig)
```
*
* 最低基础库： `2.8.3` */
        getExtConfigSync(): IAnyObject
        /** [Object wx.getLaunchOptionsSync()](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html)
         *
         * 获取小游戏冷启动时的参数。热启动参数通过 [wx.onShow](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.onShow.html) 接口获取。
         *
         * **返回有效 referrerInfo 的场景**
         *
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
         *
         * 部分版本在无`referrerInfo`的时候会返回 `undefined`，建议使用 `options.referrerInfo && options.referrerInfo.appId` 进行判断。 */
        getLaunchOptionsSync(): LaunchOptionsGame
        /** [Object wx.getMenuButtonBoundingClientRect()](https://developers.weixin.qq.com/minigame/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html)
         *
         * 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
         *
         * 最低基础库： `2.1.0` */
        getMenuButtonBoundingClientRect(): Rect
        /** [Object wx.getStorageInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.getStorageInfoSync.html)
*
* [wx.getStorageInfo](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.getStorageInfo.html) 的同步版本
*
* **示例代码**
*
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
        /** [Object wx.getSystemInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/base/system/system-info/wx.getSystemInfoSync.html)
*
* [wx.getSystemInfo](https://developers.weixin.qq.com/minigame/dev/api/base/system/system-info/wx.getSystemInfo.html) 的同步版本
*
* **示例代码**
*
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
``` */
        getSystemInfoSync(): SystemInfo
        /** [[BannerAd](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.html) wx.createBannerAd(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ad/wx.createBannerAd.html)
         *
         * 创建 banner 广告组件。请通过 [wx.getSystemInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/base/system/system-info/wx.getSystemInfoSync.html) 返回对象的 SDKVersion 判断基础库版本号 >= 2.0.4 后再使用该 API。每次调用该方法创建 banner 广告都会返回一个全新的实例。
         *
         * 最低基础库： `2.0.4` */
        createBannerAd(option: CreateBannerAdOption): BannerAd
        /** [[Camera](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.html) wx.createCamera(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/camera/wx.createCamera.html)
         *
         * 创建相机
         *
         * 最低基础库： `2.9.0` */
        createCamera(option: CreateCameraOption): Camera
        /** [[Canvas](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.html) wx.createCanvas()](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/wx.createCanvas.html)
         *
         * 创建一个画布对象。首次调用创建的是显示在屏幕上的画布，之后调用创建的都是离屏画布。 */
        createCanvas(): Canvas
        /** [[Canvas](https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.html) wx.getSharedCanvas()](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getSharedCanvas.html)
         *
         * 获取主域和开放数据域共享的 sharedCanvas。**只有开放数据域能调用。** */
        getSharedCanvas(): Canvas
        /** [[DownloadTask](https://developers.weixin.qq.com/minigame/dev/api/network/download/DownloadTask.html) wx.downloadFile(Object object)](https://developers.weixin.qq.com/minigame/dev/api/network/download/wx.downloadFile.html)
*
* 下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径 (本地路径)，单次下载允许的最大文件为 200MB。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/network.html)。
*
* 注意：请在服务端响应的 header 中指定合理的 `Content-Type` 字段，以保证客户端正确处理文件类型。
*
* **示例代码**
*
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
         * 创建打开意见反馈页面的按钮
         *
         * 最低基础库： `2.1.2` */
        createFeedbackButton(
            option: CreateOpenSettingButtonOption
        ): FeedbackButton
        /** [[FileSystemManager](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.html) wx.getFileSystemManager()](https://developers.weixin.qq.com/minigame/dev/api/file/wx.getFileSystemManager.html)
         *
         * 获取全局唯一的文件管理器 */
        getFileSystemManager(): FileSystemManager
        /** [[GameBanner](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GameBanner.html) wx.createGameBanner(Object object)](https://developers.weixin.qq.com/minigame/dev/api/game-portal/wx.createGameBanner.html)
         *
         * 创建小游戏推荐banner组件。请通过 [wx.getSystemInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/base/system/system-info/wx.getSystemInfoSync.html) 返回对象的 SDKVersion 判断基础库版本号 >= 2.7.5 后再使用该 API。每次调用该方法都会返回一个全新的实例。
         *
         * 最低基础库： `2.7.5` */
        createGameBanner(option: CreateGameBannerOption): GameBanner
        /** [[GameClubButton](https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/GameClubButton.html) wx.createGameClubButton(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/wx.createGameClubButton.html)
         *
         * 创建游戏圈按钮。游戏圈按钮被点击后会跳转到小游戏的游戏圈。更多关于游戏圈的信息见 [游戏圈使用指南](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/game-club.html)
         *
         * 最低基础库： `2.0.3` */
        createGameClubButton(option: CreateGameClubButtonOption): GameClubButton
        /** [[GameIcon](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GameIcon.html) wx.createGameIcon(Object object, Object styleItem)](https://developers.weixin.qq.com/minigame/dev/api/game-portal/wx.createGameIcon.html)
         *
         * 创建小游戏推荐icon组件。请通过 [wx.getSystemInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/base/system/system-info/wx.getSystemInfoSync.html) 返回对象的 SDKVersion 判断基础库版本号 >= 2.8.2 后再使用该 API。每次调用该方法都会返回一个全新的实例。
         *
         * 最低基础库： `2.8.3` */
        createGameIcon(
            option: CreateGameIconOption,
            /** 单个游戏icon的位置和样式信息 */
            styleItem: StyleItem
        ): GameIcon
        /** [[GamePortal](https://developers.weixin.qq.com/minigame/dev/api/game-portal/GamePortal.html) wx.createGamePortal(Object object)](https://developers.weixin.qq.com/minigame/dev/api/game-portal/wx.createGamePortal.html)
         *
         * 创建小游戏推荐弹窗组件。请通过 [wx.getSystemInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/base/system/system-info/wx.getSystemInfoSync.html) 返回对象的 SDKVersion 判断基础库版本号 >= 2.7.5 后再使用该 API。每次调用该方法都会返回一个全新的实例。
         *
         * 最低基础库： `2.7.5` */
        createGamePortal(option: CreateGamePortalOption): GamePortal
        /** [[GameRecorderShareButton](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorderShareButton.html) wx.createGameRecorderShareButton(Object object)](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/wx.createGameRecorderShareButton.html)
         *
         * 创建游戏对局回放分享按钮，返回一个单例对象。按钮在被用户点击后会发起对最近一次录制完成的游戏对局回放的分享。
         *
         * 最低基础库： `2.8.0` */
        createGameRecorderShareButton(
            option: CreateGameRecorderShareButtonOption
        ): GameRecorderShareButton
        /** [[GameRecorder](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.html) wx.getGameRecorder()](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/wx.getGameRecorder.html)
         *
         * 获取全局唯一的游戏画面录制对象
         *
         * 最低基础库： `2.8.0` */
        getGameRecorder(): GameRecorder
        /** [[GameServerManager](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.html) wx.getGameServerManager()](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/wx.getGameServerManager.html)
         *
         * 获取 **全局唯一** 的游戏服务管理器。
         *
         * 最低基础库： `2.8.0` */
        getGameServerManager(): GameServerManager
        /** [[GridAd](https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.html) wx.createGridAd(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ad/wx.createGridAd.html)
         *
         * 创建 grid(格子) 广告组件。请通过 [wx.getSystemInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/base/system/system-info/wx.getSystemInfoSync.html) 返回对象的 SDKVersion 判断基础库版本号 >= 2.9.2 后再使用该 API。每次调用该方法创建 grid(格子) 广告都会返回一个全新的实例。
         *
         * 最低基础库： `2.9.2` */
        createGridAd(option: CreateGridAdOption): GridAd
        /** [[Image](https://developers.weixin.qq.com/minigame/dev/api/render/image/Image.html) wx.createImage()](https://developers.weixin.qq.com/minigame/dev/api/render/image/wx.createImage.html)
         *
         * 创建一个图片对象 */
        createImage(): Image
        /** [[InnerAudioContext](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.html) wx.createInnerAudioContext()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.createInnerAudioContext.html)
         *
         * 创建内部 [audio](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/audio.html) 上下文 [InnerAudioContext](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.html) 对象。
         *
         * 最低基础库： `1.6.0` */
        createInnerAudioContext(): InnerAudioContext
        /** [[InterstitialAd](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.html) wx.createInterstitialAd(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ad/wx.createInterstitialAd.html)
         *
         * 创建插屏广告组件。请通过 [wx.getSystemInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/base/system/system-info/wx.getSystemInfoSync.html) 返回对象的 SDKVersion 判断基础库版本号后再使用该 API。每次调用该方法创建插屏广告都会返回一个全新的实例（小程序端的插屏广告实例不允许跨页面使用）。
         *
         * 最低基础库： `2.6.0` */
        createInterstitialAd(option: CreateInterstitialAdOption): InterstitialAd
        /** [[LoadSubpackageTask](https://developers.weixin.qq.com/minigame/dev/api/base/subpackage/LoadSubpackageTask.html) wx.loadSubpackage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/base/subpackage/wx.loadSubpackage.html)
         *
         * 触发分包加载，详见 [分包加载](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/sub-packages.html)
         *
         * 最低基础库： `2.1.0` */
        loadSubpackage(option: LoadSubpackageOption): LoadSubpackageTask
        /** [[LogManager](https://developers.weixin.qq.com/minigame/dev/api/base/debug/LogManager.html) wx.getLogManager(Object object)](https://developers.weixin.qq.com/minigame/dev/api/base/debug/wx.getLogManager.html)
*
* 获取日志管理器对象。
*
* **示例代码**
*
*
* ```js
const logger = wx.getLogManager({level: 1})
logger.log({str: 'hello world'}, 'basic log', 100, [1, 2, 3])
logger.info({str: 'hello world'}, 'info log', 100, [1, 2, 3])
logger.debug({str: 'hello world'}, 'debug log', 100, [1, 2, 3])
logger.warn({str: 'hello world'}, 'warn log', 100, [1, 2, 3])
```
*
* 最低基础库： `2.1.0` */
        getLogManager(option: GetLogManagerOption): LogManager
        /** [[MediaAudioPlayer](https://developers.weixin.qq.com/minigame/dev/api/media/audio/MediaAudioPlayer.html) wx.createMediaAudioPlayer()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.createMediaAudioPlayer.html)
*
* 创建媒体音频播放器对象 [MediaAudioPlayer](https://developers.weixin.qq.com/minigame/dev/api/media/audio/MediaAudioPlayer.html) 对象，可用于播放视频解码器 [VideoDecoder](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.html) 输出的音频。
*
* **示例代码**
*
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
    mediaAudioPlaye.removeAudioSource(videoDecoder).then()
    // 停止播放器
    mediaAudioPlaye.stop().then()
    // 销毁播放器
    mediaAudioPlaye.destroy().then()
    // 设置播放器音量
    mediaAudioPlayer.volume = 0.5
  })
```
*
* **完整demo（小游戏）**
*
*
* - https://developers.weixin.qq.com/s/SF2duHmb7MjI
*
* 最低基础库： `2.13.0` */
        createMediaAudioPlayer(): MediaAudioPlayer
        /** [[OpenDataContext](https://developers.weixin.qq.com/minigame/dev/api/open-api/context/OpenDataContext.html) wx.getOpenDataContext()](https://developers.weixin.qq.com/minigame/dev/api/open-api/context/wx.getOpenDataContext.html)
         *
         * 获取开放数据域
         *
         * 最低基础库： `1.9.92` */
        getOpenDataContext(): OpenDataContext
        /** [[OpenSettingButton](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/OpenSettingButton.html) wx.createOpenSettingButton(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/wx.createOpenSettingButton.html)
         *
         * 创建打开设置页面的按钮
         *
         * 最低基础库： `2.0.7` */
        createOpenSettingButton(
            option: CreateOpenSettingButtonOption
        ): OpenSettingButton
        /** [[Performance](https://developers.weixin.qq.com/minigame/dev/api/base/performance/Performance.html) wx.getPerformance()](https://developers.weixin.qq.com/minigame/dev/api/base/performance/wx.getPerformance.html)
         *
         * 获取性能管理器 */
        getPerformance(): Performance
        /** [[RealtimeLogManager](https://developers.weixin.qq.com/minigame/dev/api/base/debug/RealtimeLogManager.html) wx.getRealtimeLogManager()](https://developers.weixin.qq.com/minigame/dev/api/base/debug/wx.getRealtimeLogManager.html)
*
* 获取实时日志管理器对象。
*
* **示例代码**
*
*
* ```js
const logger = wx.getRealtimeLogManager()
logger.info({str: 'hello world'}, 'info log', 100, [1, 2, 3])
logger.error({str: 'hello world'}, 'error log', 100, [1, 2, 3])
logger.warn({str: 'hello world'}, 'warn log', 100, [1, 2, 3])
```
*
* 最低基础库： `2.14.4` */
        getRealtimeLogManager(): RealtimeLogManager
        /** [[RecorderManager](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.html) wx.getRecorderManager()](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/wx.getRecorderManager.html)
         *
         * 获取**全局唯一**的录音管理器 RecorderManager
         *
         * 最低基础库： `1.6.0` */
        getRecorderManager(): RecorderManager
        /** [[RequestTask](https://developers.weixin.qq.com/minigame/dev/api/network/request/RequestTask.html) wx.request(Object object)](https://developers.weixin.qq.com/minigame/dev/api/network/request/wx.request.html)
*
* 发起 HTTPS 网络请求。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/network.html)。
*
* **data 参数说明**
*
*
* 最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下：
* - 对于 `GET` 方法的数据，会将数据转换成 query string（`encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...`）
* - 对于 `POST` 方法且 `header['content-type']` 为 `application/json` 的数据，会对数据进行 JSON 序列化
* - 对于 `POST` 方法且 `header['content-type']` 为 `application/x-www-form-urlencoded` 的数据，会将数据转换成 query string `（encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）`
*
* **示例代码**
*
*
* ```js
wx.request({
  url: 'test.php', //仅为示例，并非真实的接口地址
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
         * 创建激励视频广告组件。请通过 [wx.getSystemInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/base/system/system-info/wx.getSystemInfoSync.html) 返回对象的 SDKVersion 判断基础库版本号后再使用该 API（小游戏端要求 >= 2.0.4， 小程序端要求 >= 2.6.0）。调用该方法创建的激励视频广告是一个单例（小游戏端是全局单例，小程序端是页面内单例，在小程序端的单例对象不允许跨页面使用）。
         *
         * 最低基础库： `2.0.4` */
        createRewardedVideoAd(
            option: CreateRewardedVideoAdOption
        ): RewardedVideoAd
        /** [[SocketTask](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.html) wx.connectSocket(Object object)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.connectSocket.html)
*
* 创建一个 WebSocket 连接。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/network.html)。
*
* **并发数**
*
*
* - 1.7.0 及以上版本，最多可以同时存在 5 个 WebSocket 连接。
* - 1.7.0 以下版本，一个小程序同时只能有一个 WebSocket 连接，如果当前已存在一个 WebSocket 连接，会自动关闭该连接，并重新创建一个 WebSocket 连接。
*
* **示例代码**
*
*
* ```js
wx.connectSocket({
  url: 'wss://example.qq.com',
  header:{
    'content-type': 'application/json'
  },
  protocols: ['protocol1']
})
``` */
        connectSocket(option: ConnectSocketOption): SocketTask
        /** [[UDPSocket](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.html) wx.createUDPSocket()](https://developers.weixin.qq.com/minigame/dev/api/network/udp/wx.createUDPSocket.html)
         *
         * 创建一个 UDP Socket 实例。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/network.html)。
         *
         * 最低基础库： `2.7.0` */
        createUDPSocket(): UDPSocket
        /** [[UpdateManager](https://developers.weixin.qq.com/minigame/dev/api/base/update/UpdateManager.html) wx.getUpdateManager()](https://developers.weixin.qq.com/minigame/dev/api/base/update/wx.getUpdateManager.html)
         *
         * 获取**全局唯一**的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看[运行机制](https://developers.weixin.qq.com/minigame/dev/guide/runtime/operating-mechanism.html)文档。
         *
         * 最低基础库： `1.9.90` */
        getUpdateManager(): UpdateManager
        /** [[UploadTask](https://developers.weixin.qq.com/minigame/dev/api/network/upload/UploadTask.html) wx.uploadFile(Object object)](https://developers.weixin.qq.com/minigame/dev/api/network/upload/wx.uploadFile.html)
*
* 将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 `content-type` 为 `multipart/form-data`。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/network.html)。
*
* **示例代码**
*
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
        /** [[UserInfoButton](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/UserInfoButton.html) wx.createUserInfoButton(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/wx.createUserInfoButton.html)
         *
         * 创建用户信息按钮
         *
         * 最低基础库： `2.0.1` */
        createUserInfoButton(option: CreateUserInfoButtonOption): UserInfoButton
        /** [[VideoDecoder](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.html) wx.createVideoDecoder()](https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/wx.createVideoDecoder.html)
         *
         * 创建视频解码器，可逐帧获取解码后的数据
         *
         * 最低基础库： `2.11.1` */
        createVideoDecoder(): VideoDecoder
        /** [[Video](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.html) wx.createVideo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/video/wx.createVideo.html)
         *
         * 创建视频 */
        createVideo(option: CreateVideoOption): Video
        /** [[Worker](https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.html) wx.createWorker(string scriptPath, object options)](https://developers.weixin.qq.com/minigame/dev/api/worker/wx.createWorker.html)
*
* 创建一个 [Worker 线程](#)
*
* **示例代码**
*
*
* ```js
// 创建普通worker
wx.createWorker('workers/index.js')
```
* ```js
// 创建实验worker
wx.createWorker('workers/index.js', {
  useExperimentalWorker: true
})
```
*
* 最低基础库： `1.9.90` */
        createWorker(
            /** worker 入口文件的**绝对路径** */
            scriptPath: string,
            /** 可选参数 */
            options?: CreateWorkerOption
        ): Worker
        /** [any wx.getStorageSync(string key)](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.getStorageSync.html)
*
* [wx.getStorage](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.getStorage.html) 的同步版本
*
* **示例代码**
*
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
        /** [boolean wx.setCursor(string path)](https://developers.weixin.qq.com/minigame/dev/api/render/cursor/wx.setCursor.html)
         *
         * 加载自定义光标，仅支持 PC 平台
         *
         * 最低基础库： `2.10.1` */
        setCursor(
            /** 代码包或本地路径，支持 ico 和 cur 格式，传入 'default' 代表恢复系统默认 */
            path: string
        ): boolean
        /** [boolean wx.setMessageToFriendQuery(Object object)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.setMessageToFriendQuery.html)
         *
         * 设置 wx.shareMessageToFriend 接口 query 字段的值 */
        setMessageToFriendQuery(option: SetMessageToFriendQueryOption): boolean
        /** [number wx.getTextLineHeight(Object object)](https://developers.weixin.qq.com/minigame/dev/api/render/font/wx.getTextLineHeight.html)
         *
         * 获取一行文本的行高 */
        getTextLineHeight(option: GetTextLineHeightOption): number
        /** [string wx.loadFont(string path)](https://developers.weixin.qq.com/minigame/dev/api/render/font/wx.loadFont.html)
         *
         * 加载自定义字体文件 */
        loadFont(
            /** 字体文件路径。支持本地路径、代码包路径。 */
            path: string
        ): string
        /** [wx.addCard(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/card/wx.addCard.html)
*
* 批量添加卡券。只有通过 [认证](https://developers.weixin.qq.com/miniprogram/product/renzheng.html) 的小程序或文化互动类目的小游戏才能使用。更多文档请参考 [微信卡券接口文档](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1490190158&version=1&lang=zh_CN&platform=2)。
*
* **cardExt 说明**
*
*
* cardExt 是卡券的扩展参数，其值是一个 JSON 字符串。
*
* **示例代码**
*
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
```
*
* 最低基础库： `2.5.0` */
        addCard<T extends AddCardOption = AddCardOption>(
            option: T
        ): PromisifySuccessResult<T, AddCardOption>
        /** [wx.authPrivateMessage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.authPrivateMessage.html)
*
* 验证私密消息。用法详情见 [小程序私密消息使用指南](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/share/private-message.html)
*
* **示例代码**
*
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
```
*
* 最低基础库： `2.13.0` */
        authPrivateMessage(option?: AuthPrivateMessageOption): void
        /** [wx.authorize(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/authorize/wx.authorize.html)
*
* 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。更多用法详见 [用户授权](https://developers.weixin.qq.com/minigame/dev/guide/framework/authorize.html)。
* > 小程序插件可以使用 [wx.authorizeForMiniProgram](#)
*
* **示例代码**
*
*
* ```js
// 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
wx.getSetting({
  success(res) {
    if (!res.authSetting['scope.record']) {
      wx.authorize({
        scope: 'scope.record',
        success () {
          // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
          wx.startRecord()
        }
      })
    }
  }
})
```
*
* 最低基础库： `1.2.0` */
        authorize<T extends AuthorizeOption = AuthorizeOption>(
            option: T
        ): PromisifySuccessResult<T, AuthorizeOption>
        /** [wx.checkHandoffEnabled(Object object)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.checkHandoffEnabled.html)
         *
         * 检查是否可以进行接力，该接口需要在开放数据域调用
         *
         * 最低基础库： `2.14.4` */
        checkHandoffEnabled(option?: CheckHandoffEnabledOption): void
        /** [wx.checkIsUserAdvisedToRest(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/anti-addiction/wx.checkIsUserAdvisedToRest.html)
         *
         * 根据用户当天游戏时间判断用户是否需要休息
         *
         * 最低基础库： `1.9.97` */
        checkIsUserAdvisedToRest<
            T extends CheckIsUserAdvisedToRestOption = CheckIsUserAdvisedToRestOption
        >(
            option: T
        ): PromisifySuccessResult<T, CheckIsUserAdvisedToRestOption>
        /** [wx.checkSession(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/login/wx.checkSession.html)
*
* 检查登录态是否过期。
*
* 通过 wx.login 接口获得的用户登录态拥有一定的时效性。用户越久未使用小程序，用户登录态越有可能失效。反之如果用户一直在使用小程序，则用户登录态一直保持有效。具体时效逻辑由微信维护，对开发者透明。开发者只需要调用 wx.checkSession 接口检测当前用户登录态是否有效。
*
* 登录态过期后开发者可以再调用 wx.login 获取新的用户登录态。调用成功说明当前 session_key 未过期，调用失败说明 session_key 已过期。更多使用方法详见 [小程序登录](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/login.html)。
*
* **示例代码**
*
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
        /** [wx.clearStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.clearStorage.html)
*
* 清理本地数据缓存。缓存相关策略请查看 [存储](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/storage.html)。
*
* **示例代码**
*
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
* 断开与低功耗蓝牙设备的连接。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.closeBLEConnection({
  deviceId,
  success (res) {
    console.log(res)
  }
})
```
*
* 最低基础库： `2.9.2` */
        closeBLEConnection<
            T extends CloseBLEConnectionOption = CloseBLEConnectionOption
        >(
            option: T
        ): PromisifySuccessResult<T, CloseBLEConnectionOption>
        /** [wx.closeBluetoothAdapter(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.closeBluetoothAdapter.html)
*
* 关闭蓝牙模块。调用该方法将断开所有已建立的连接并释放系统资源。建议在使用蓝牙流程后，与 [wx.openBluetoothAdapter](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.openBluetoothAdapter.html) 成对调用。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.closeBluetoothAdapter({
  success (res) {
    console.log(res)
  }
})
```
*
* 最低基础库： `2.9.2` */
        closeBluetoothAdapter<
            T extends CloseBluetoothAdapterOption = CloseBluetoothAdapterOption
        >(
            option?: T
        ): PromisifySuccessResult<T, CloseBluetoothAdapterOption>
        /** [wx.closeSocket(Object object)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.closeSocket.html)
*
* 关闭 WebSocket 连接
*
* **示例代码**
*
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
        /** [wx.createBLEConnection(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.createBLEConnection.html)
*
* 连接低功耗蓝牙设备。
*
* 若小程序在之前已有搜索过某个蓝牙设备，并成功建立连接，可直接传入之前搜索获取的 deviceId 直接尝试连接该设备，无需进行搜索操作。
*
* **注意**
*
*
* - 请保证尽量成对的调用 `createBLEConnection` 和 `closeBLEConnection` 接口。安卓如果多次调用 `createBLEConnection` 创建连接，有可能导致系统持有同一设备多个连接的实例，导致调用 `closeBLEConnection` 的时候并不能真正的断开与设备的连接。
* - 蓝牙连接随时可能断开，建议监听 [wx.onBLEConnectionStateChange](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.onBLEConnectionStateChange.html) 回调事件，当蓝牙设备断开时按需执行重连操作
* - 若对未连接的设备或已断开连接的设备调用数据读写操作的接口，会返回 10006 错误，建议进行重连操作。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.createBLEConnection({
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  deviceId,
  success (res) {
    console.log(res)
  }
})
```
*
* 最低基础库： `2.9.2` */
        createBLEConnection<
            T extends CreateBLEConnectionOption = CreateBLEConnectionOption
        >(
            option: T
        ): PromisifySuccessResult<T, CreateBLEConnectionOption>
        /** [wx.createBLEPeripheralServer(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/wx.createBLEPeripheralServer.html)
         *
         * 建立本地作为外围设备的服务端，可创建多个。
         *
         * 最低基础库： `2.10.3` */
        createBLEPeripheralServer<
            T extends CreateBLEPeripheralServerOption = CreateBLEPeripheralServerOption
        >(
            option?: T
        ): PromisifySuccessResult<T, CreateBLEPeripheralServerOption>
        /** [wx.createCustomAd(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ad/wx.createCustomAd.html)
         *
         * 创建原生模板广告组件。请通过 [wx.getSystemInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/base/system/system-info/wx.getSystemInfoSync.html) 返回对象的 SDKVersion 判断基础库版本号 >= 2.11.1 后再使用该 API。每次调用该方法创建原生模板广告都会返回一个全新的实例。
         *
         * 最低基础库： `2.11.1` */
        createCustomAd(option: CreateCustomAdOption): void
        /** [wx.exitMiniProgram(Object object)](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.exitMiniProgram.html)
         *
         * 退出当前小游戏 */
        exitMiniProgram<
            T extends ExitMiniProgramOption = ExitMiniProgramOption
        >(
            option?: T
        ): PromisifySuccessResult<T, ExitMiniProgramOption>
        /** [wx.exitVoIPChat(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.exitVoIPChat.html)
         *
         * 退出（销毁）实时语音通话
         *
         * 最低基础库： `2.7.0` */
        exitVoIPChat<T extends ExitVoIPChatOption = ExitVoIPChatOption>(
            option?: T
        ): PromisifySuccessResult<T, ExitVoIPChatOption>
        /** [wx.getAvailableAudioSources(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.getAvailableAudioSources.html)
         *
         * 获取当前支持的音频输入源
         *
         * 最低基础库： `2.1.0` */
        getAvailableAudioSources<
            T extends GetAvailableAudioSourcesOption = GetAvailableAudioSourcesOption
        >(
            option?: T
        ): PromisifySuccessResult<T, GetAvailableAudioSourcesOption>
        /** [wx.getBLEDeviceCharacteristics(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.getBLEDeviceCharacteristics.html)
*
* 获取蓝牙设备某个服务中所有特征值(characteristic)。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.getBLEDeviceCharacteristics({
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  deviceId,
  // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
  serviceId,
  success (res) {
    console.log('device getBLEDeviceCharacteristics:', res.characteristics)
  }
})
```
*
* 最低基础库： `2.9.2` */
        getBLEDeviceCharacteristics<
            T extends GetBLEDeviceCharacteristicsOption = GetBLEDeviceCharacteristicsOption
        >(
            option: T
        ): PromisifySuccessResult<T, GetBLEDeviceCharacteristicsOption>
        /** [wx.getBLEDeviceRSSI(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.getBLEDeviceRSSI.html)
         *
         * 获取蓝牙设备的信号强度。
         *
         * 最低基础库： `2.11.0` */
        getBLEDeviceRSSI<
            T extends GetBLEDeviceRSSIOption = GetBLEDeviceRSSIOption
        >(
            option: T
        ): PromisifySuccessResult<T, GetBLEDeviceRSSIOption>
        /** [wx.getBLEDeviceServices(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.getBLEDeviceServices.html)
*
* 获取蓝牙设备所有服务(service)。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.getBLEDeviceServices({
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  deviceId,
  success (res) {
    console.log('device services:', res.services)
  }
})
```
*
* 最低基础库： `2.9.2` */
        getBLEDeviceServices<
            T extends GetBLEDeviceServicesOption = GetBLEDeviceServicesOption
        >(
            option: T
        ): PromisifySuccessResult<T, GetBLEDeviceServicesOption>
        /** [wx.getBatteryInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/battery/wx.getBatteryInfo.html)
         *
         * 获取设备电量。同步 API [wx.getBatteryInfoSync](https://developers.weixin.qq.com/minigame/dev/api/device/battery/wx.getBatteryInfoSync.html) 在 iOS 上不可用。 */
        getBatteryInfo<T extends GetBatteryInfoOption = GetBatteryInfoOption>(
            option?: T
        ): PromisifySuccessResult<T, GetBatteryInfoOption>
        /** [wx.getBeacons(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.getBeacons.html)
         *
         * 获取所有已搜索到的 iBeacon 设备
         *
         * 最低基础库： `2.9.2` */
        getBeacons<T extends GetBeaconsOption = GetBeaconsOption>(
            option?: T
        ): PromisifySuccessResult<T, GetBeaconsOption>
        /** [wx.getBluetoothAdapterState(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.getBluetoothAdapterState.html)
*
* 获取本机蓝牙适配器状态。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.getBluetoothAdapterState({
  success (res) {
    console.log(res)
  }
})
```
*
* 最低基础库： `2.9.2` */
        getBluetoothAdapterState<
            T extends GetBluetoothAdapterStateOption = GetBluetoothAdapterStateOption
        >(
            option?: T
        ): PromisifySuccessResult<T, GetBluetoothAdapterStateOption>
        /** [wx.getBluetoothDevices(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.getBluetoothDevices.html)
*
* 获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。
*
* **示例代码**
*
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
* **注意事项**
*
*
* - 该接口获取到的设备列表为**蓝牙模块生效期间所有搜索到的蓝牙设备**，若在蓝牙模块使用流程结束后未及时调用 [wx.closeBluetoothAdapter](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.closeBluetoothAdapter.html) 释放资源，会存在调用该接口会返回之前的蓝牙使用流程中搜索到的蓝牙设备，可能设备已经不在用户身边，无法连接。
* - 蓝牙设备在被搜索到时，系统返回的 name 字段一般为广播包中的 LocalName 字段中的设备名称，而如果与蓝牙设备建立连接，系统返回的 name 字段会改为从蓝牙设备上获取到的 `GattName`。若需要动态改变设备名称并展示，建议使用 `localName` 字段。
*
* 最低基础库： `2.9.2` */
        getBluetoothDevices<
            T extends GetBluetoothDevicesOption = GetBluetoothDevicesOption
        >(
            option?: T
        ): PromisifySuccessResult<T, GetBluetoothDevicesOption>
        /** [wx.getClipboardData(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/clipboard/wx.getClipboardData.html)
*
* 获取系统剪贴板的内容
*
* **示例代码**
*
*
* ```js
wx.getClipboardData({
  success (res){
    console.log(res.data)
  }
})
```
*
* 最低基础库： `1.1.0` */
        getClipboardData<
            T extends GetClipboardDataOption = GetClipboardDataOption
        >(
            option?: T
        ): PromisifySuccessResult<T, GetClipboardDataOption>
        /** [wx.getConnectedBluetoothDevices(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.getConnectedBluetoothDevices.html)
*
* 根据 uuid 获取处于已连接状态的设备。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.getConnectedBluetoothDevices({
  success (res) {
    console.log(res)
  }
})
```
*
* 最低基础库： `2.9.2` */
        getConnectedBluetoothDevices<
            T extends GetConnectedBluetoothDevicesOption = GetConnectedBluetoothDevicesOption
        >(
            option: T
        ): PromisifySuccessResult<T, GetConnectedBluetoothDevicesOption>
        /** [wx.getExtConfig(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ext/wx.getExtConfig.html)
*
* 获取[第三方平台](#)自定义的数据字段。
*
* **Tips**
*
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
```
*
* 最低基础库： `2.8.3` */
        getExtConfig<T extends GetExtConfigOption = GetExtConfigOption>(
            option?: T
        ): PromisifySuccessResult<T, GetExtConfigOption>
        /** [wx.getFileInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/wx.getFileInfo.html)
*
* 获取文件信息
*
* **示例代码**
*
*
* ```js
wx.getFileInfo({
  success (res) {
    console.log(res.size)
    console.log(res.digest)
  }
})
```
*
* 最低基础库： `1.4.0` */
        getFileInfo<T extends WxGetFileInfoOption = WxGetFileInfoOption>(
            option: T
        ): PromisifySuccessResult<T, WxGetFileInfoOption>
        /** [wx.getFriendCloudStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getFriendCloudStorage.html)
         *
         * 拉取当前用户所有同玩好友的托管数据。该接口只可在开放数据域下使用
         *
         * 最低基础库： `1.9.92` */
        getFriendCloudStorage<
            T extends GetFriendCloudStorageOption = GetFriendCloudStorageOption
        >(
            option: T
        ): PromisifySuccessResult<T, GetFriendCloudStorageOption>
        /** [wx.getGroupCloudStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupCloudStorage.html)
         *
         * 获取群同玩成员的游戏数据。小游戏通过群分享卡片打开的情况下才可以调用。**该接口只可在开放数据域下使用**。
         *
         * 最低基础库： `1.9.92` */
        getGroupCloudStorage<
            T extends GetGroupCloudStorageOption = GetGroupCloudStorageOption
        >(
            option: T
        ): PromisifySuccessResult<T, GetGroupCloudStorageOption>
        /** [wx.getGroupEnterInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/group/wx.getGroupEnterInfo.html)
*
* 获取群工具小程序启动信息
*
* **示例代码**
*
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
* 敏感数据有两种获取方式，一是使用 [加密数据解密算法]((open-ability/signature#加密数据解密算法)) 。
* 获取得到的开放数据为以下 json 结构（其中 opengid 为当前群的唯一标识）：
*
* ```json
{
 "opengid": "OPENGID"
}
```
*
* **Tips**
*
*
* - 如需要展示群名称，小程序可以使用[开放数据组件](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/open-data.html)
* - 小游戏可以通过 `wx.getGroupInfo` 接口获取群名称
*
* 最低基础库： `2.10.4` */
        getGroupEnterInfo(option: GetGroupEnterInfoOption): void
        /** [wx.getGroupInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupInfo.html)
         *
         * 获取群信息。小游戏通过群分享卡片打开的情况下才可以调用。**该接口只可在开放数据域下使用**。
         *
         * 最低基础库： `2.10.1` */
        getGroupInfo<T extends GetGroupInfoOption = GetGroupInfoOption>(
            option: T
        ): PromisifySuccessResult<T, GetGroupInfoOption>
        /** [wx.getLocation(Object object)](https://developers.weixin.qq.com/minigame/dev/api/location/wx.getLocation.html)
*
* 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。开启高精度定位，接口耗时会增加，可指定 highAccuracyExpireTime 作为超时时间。地图相关使用的坐标格式应为 gcj02。
*
* **示例代码**
*
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
*
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
*
* ```js
wx.getNetworkType({
  success (res) {
    const networkType = res.networkType
  }
})
``` */
        getNetworkType<T extends GetNetworkTypeOption = GetNetworkTypeOption>(
            option?: T
        ): PromisifySuccessResult<T, GetNetworkTypeOption>
        /** [wx.getPotentialFriendList(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getPotentialFriendList.html)
         *
         * 获取可能对游戏感兴趣的未注册的好友名单。每次调用最多可获得 5 个好友，此接口只能在开放数据域中使用
         *
         * 最低基础库： `2.9.0` */
        getPotentialFriendList<
            T extends GetPotentialFriendListOption = GetPotentialFriendListOption
        >(
            option?: T
        ): PromisifySuccessResult<T, GetPotentialFriendListOption>
        /** [wx.getScreenBrightness(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/screen/wx.getScreenBrightness.html)
         *
         * 获取屏幕亮度
         *
         * **说明**
         *
         *
         * - 若安卓系统设置中开启了自动调节亮度功能，则屏幕亮度会根据光线自动调整，该接口仅能获取自动调节亮度之前的值，而非实时的亮度值。
         *
         * 最低基础库： `1.2.0` */
        getScreenBrightness<
            T extends GetScreenBrightnessOption = GetScreenBrightnessOption
        >(
            option?: T
        ): PromisifySuccessResult<T, GetScreenBrightnessOption>
        /** [wx.getSetting(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/wx.getSetting.html)
*
* 获取用户的当前设置。**返回值中只会出现小程序已经向用户请求过的[权限](https://developers.weixin.qq.com/minigame/dev/guide/framework/authorize.html)**。
*
* **示例代码**
*
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
```
*
* 最低基础库： `1.2.0` */
        getSetting<T extends GetSettingOption = GetSettingOption>(
            option?: T
        ): PromisifySuccessResult<T, GetSettingOption>
        /** [wx.getShareInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.getShareInfo.html)
*
* 获取转发详细信息
*
* **示例代码**
*
*
* 敏感数据有两种获取方式，一是使用 [加密数据解密算法]((open-ability/signature#加密数据解密算法)) 。
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
*
* - 如需要展示群名称，小程序可以使用[开放数据组件](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/open-data.html)
* - 小游戏可以通过 `wx.getGroupInfo` 接口获取群名称
*
* 最低基础库： `1.1.0` */
        getShareInfo<T extends GetShareInfoOption = GetShareInfoOption>(
            option: T
        ): PromisifySuccessResult<T, GetShareInfoOption>
        /** [wx.getStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.getStorage.html)
*
* 从本地缓存中异步获取指定 key 的内容。缓存相关策略请查看 [存储](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/storage.html)。
*
* **示例代码**
*
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
try {
  var value = wx.getStorageSync('key')
  if (value) {
    // Do something with return value
  }
} catch (e) {
  // Do something when catch error
}
``` */
        getStorage<
            T = any,
            U extends GetStorageOption<T> = GetStorageOption<T>
        >(
            option: U
        ): PromisifySuccessResult<U, GetStorageOption<T>>
        /** [wx.getStorageInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.getStorageInfo.html)
*
* 异步获取当前storage的相关信息。缓存相关策略请查看 [存储](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/storage.html)。
*
* **示例代码**
*
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
        /** [wx.getSystemInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/base/system/system-info/wx.getSystemInfo.html)
*
* 获取系统信息
*
* **示例代码**
*
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
``` */
        getSystemInfo<T extends GetSystemInfoOption = GetSystemInfoOption>(
            option?: T
        ): PromisifySuccessResult<T, GetSystemInfoOption>
        /** [wx.getSystemInfoAsync(Object object)](https://developers.weixin.qq.com/minigame/dev/api/base/system/system-info/wx.getSystemInfoAsync.html)
*
* 异步获取系统信息。需要一定的微信客户端版本支持，在不支持的客户端上，会使用同步实现来返回。
*
* **示例代码**
*
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
```
*
* 最低基础库： `2.14.1` */
        getSystemInfoAsync(option?: GetSystemInfoAsyncOption): void
        /** [wx.getUserCloudStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getUserCloudStorage.html)
         *
         * 获取当前用户托管数据当中对应 key 的数据。该接口只可在开放数据域下使用
         *
         * 最低基础库： `1.9.92` */
        getUserCloudStorage<
            T extends GetUserCloudStorageOption = GetUserCloudStorageOption
        >(
            option: T
        ): PromisifySuccessResult<T, GetUserCloudStorageOption>
        /** [wx.getUserCloudStorageKeys(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getUserCloudStorageKeys.html)
         *
         * 获取当前用户托管数据当中所有的 key，此接口只能在开放数据域中使用
         *
         * 最低基础库： `2.14.0` */
        getUserCloudStorageKeys(option?: GetUserCloudStorageKeysOption): void
        /** [wx.getUserInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/wx.getUserInfo.html)
*
* 获取用户信息。
*
* **接口调整说明**
*
*
* 为优化用户登录体验，该接口将进行调整，详见 [用户信息接口调整说明](https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801)
*
* **示例代码**
*
*
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
* 敏感数据有两种获取方式，一是使用 [加密数据解密算法]((open-ability/signature#加密数据解密算法)) 。
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
* **小程序用户信息组件示例代码**
*
*
* ```html
* <!-- 如果只是展示用户头像昵称，可以使用 <open-data /> 组件 -->
* <open-data type="userAvatarUrl"></open-data>
* <open-data type="userNickName"></open-data>
* <!-- 需要使用 button 来授权登录 -->
* <button wx:if="{{canIUse}}" open-type="getUserInfo" bindgetuserinfo="bindGetUserInfo">授权登录</button>
* <view wx:else>请升级微信版本</view>
* ```
*
* ```js
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function() {
    // 查看是否授权
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo (e) {
    console.log(e.detail.userInfo)
  }
})
``` */
        getUserInfo<T extends GetUserInfoOption = GetUserInfoOption>(
            option: T
        ): PromisifySuccessResult<T, GetUserInfoOption>
        /** [wx.getUserInteractiveStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getUserInteractiveStorage.html)
         *
         * 获取当前用户互动型托管数据对应 key 的数据
         *
         * 最低基础库： `2.7.7` */
        getUserInteractiveStorage<
            T extends GetUserInteractiveStorageOption = GetUserInteractiveStorageOption
        >(
            option: T
        ): PromisifySuccessResult<T, GetUserInteractiveStorageOption>
        /** [wx.getUserProfile(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/wx.getUserProfile.html)
         *
         * 获取用户信息。每次请求都会弹出授权窗口，用户同意后返回 `userInfo`。
         *
         * 最低基础库： `2.10.4` */
        getUserProfile<T extends GetUserProfileOption = GetUserProfileOption>(
            option: T
        ): PromisifySuccessResult<T, GetUserProfileOption>
        /** [wx.getWeRunData(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/werun/wx.getWeRunData.html)
*
* 获取用户过去三十天微信运动步数。需要先调用 [wx.login](https://developers.weixin.qq.com/minigame/dev/api/open-api/login/wx.login.html) 接口。步数信息会在用户主动进入小程序时更新。
*
* **示例代码**
*
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
*
*
* 敏感数据有两种获取方式，一是使用 [加密数据解密算法]((open-ability/signature#加密数据解密算法)) 。
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
* | step | number | 微信运动步数 |
*
* 最低基础库： `1.2.0` */
        getWeRunData<T extends GetWeRunDataOption = GetWeRunDataOption>(
            option?: T
        ): PromisifySuccessResult<T, GetWeRunDataOption>
        /** [wx.hideKeyboard(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/keyboard/wx.hideKeyboard.html)
         *
         * 隐藏键盘 */
        hideKeyboard<T extends HideKeyboardOption = HideKeyboardOption>(
            option?: T
        ): PromisifySuccessResult<T, HideKeyboardOption>
        /** [wx.hideLoading(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.hideLoading.html)
         *
         * 隐藏 loading 提示框
         *
         * 最低基础库： `1.1.0` */
        hideLoading<T extends HideLoadingOption = HideLoadingOption>(
            option?: T
        ): PromisifySuccessResult<T, HideLoadingOption>
        /** [wx.hideShareMenu(Object object)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.hideShareMenu.html)
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
*
* ```js
wx.hideShareMenu({
  menus: ['shareAppMessage', 'shareTimeline']
})
```
*
* 最低基础库： `1.1.0` */
        hideShareMenu<T extends HideShareMenuOption = HideShareMenuOption>(
            option?: T
        ): PromisifySuccessResult<T, HideShareMenuOption>
        /** [wx.hideToast(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.hideToast.html)
         *
         * 隐藏消息提示框 */
        hideToast<T extends HideToastOption = HideToastOption>(
            option?: T
        ): PromisifySuccessResult<T, HideToastOption>
        /** [wx.joinVoIPChat(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.joinVoIPChat.html)
         *
         * 加入 (创建) 实时语音通话，更多信息可见 [实时语音指南](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/voip-chat.html)。调用前需要用户授权 `scope.record`，若房间类型为视频房间需要用户授权 `scope.camera`。
         *
         * 最低基础库： `2.7.0` */
        joinVoIPChat<T extends JoinVoIPChatOption = JoinVoIPChatOption>(
            option: T
        ): PromisifySuccessResult<T, JoinVoIPChatOption>
        /** [wx.login(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/login/wx.login.html)
*
* 调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户的唯一标识（openid）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。更多使用方法详见 [小程序登录](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/login.html)。
*
* **示例代码**
*
*
* ```js
wx.login({
  success (res) {
    if (res.code) {
      //发起网络请求
      wx.request({
        url: 'https://test.com/onLogin',
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
        /** [wx.makeBluetoothPair(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.makeBluetoothPair.html)
         *
         * 蓝牙配对接口，仅安卓支持。通常情况下（需要指定 `pin` 码或者密码时）系统会接管配对流程，直接使用 直接 `createBLEConnection` 即可；该接口只应当在开发者不想让用户手动输入`pin` 码且真机验证确认可以正常生效情况下用。
         *
         * 最低基础库： `2.12.0` */
        makeBluetoothPair<
            T extends MakeBluetoothPairOption = MakeBluetoothPairOption
        >(
            option: T
        ): PromisifySuccessResult<T, MakeBluetoothPairOption>
        /** [wx.modifyFriendInteractiveStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.modifyFriendInteractiveStorage.html)
*
* 修改好友的互动型托管数据，该接口只可在开放数据域下使用。
*
* **赠送动作的校验**
*
*
* 调用该接口需要上传 JSServer 函数 "checkInteractiveData"，该函数可用于执行赠送动作的校验逻辑，校验通过后返回结果表示本次赠送是否合法。只有 checkInteractiveData 返回了 `{ret: true}`，此次修改才会成功。
*
* **使用模板规则进行交互**
*
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
*
* 2.7.7 之后，2.9.0 之前的版本，文案通过 game.json 的 `modifyFriendInteractiveStorageConfirmWording` 字段配置。
* 配置内容可包含 nickname 变量，用 ${nickname} 表示，实际调用时会被替换成好友的昵称。示例配置：
* ```json
{
  "modifyFriendInteractiveStorageConfirmWording": "确认送给${nickname}一个体力？"
}
```
* 2.9.0 之后，在 `modifyFriendInteractiveStorageTemplates` 和 `modifyFriendInteractiveStorageConfirmWording` 都存在的情况下，会优先使用前者。
*
* 最低基础库： `2.7.7` */
        modifyFriendInteractiveStorage<
            T extends ModifyFriendInteractiveStorageOption = ModifyFriendInteractiveStorageOption
        >(
            option: T
        ): PromisifySuccessResult<T, ModifyFriendInteractiveStorageOption>
        /** [wx.navigateToMiniProgram(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html)
*
* 打开另一个小程序
*
* **使用限制**
*
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
*
* 平台将坚决打击小程序盒子等互推行为，使用此功能时请严格遵守[《微信小程序平台运营规范》](https://developers.weixin.qq.com/miniprogram/product/#_5-10-%E4%BA%92%E6%8E%A8%E8%A1%8C%E4%B8%BA)，若发现小程序违反运营规范将被下架处理。
*
* **关于调试**
*
*
* - 在开发者工具上调用此 API 并不会真实的跳转到另外的小程序，但是开发者工具会校验本次调用跳转是否成功。[详情](https://developers.weixin.qq.com/miniprogram/dev/devtools/different.html#跳转小程序调试支持)
* - 开发者工具上支持被跳转的小程序处理接收参数的调试。[详情](https://developers.weixin.qq.com/miniprogram/dev/devtools/different.html#跳转小程序调试支持)
*
* **示例代码**
*
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
```
*
* 最低基础库： `2.2.0` */
        navigateToMiniProgram<
            T extends NavigateToMiniProgramOption = NavigateToMiniProgramOption
        >(
            option: T
        ): PromisifySuccessResult<T, NavigateToMiniProgramOption>
        /** [wx.notifyBLECharacteristicValueChange(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.notifyBLECharacteristicValueChange.html)
*
* 启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值。注意：必须设备的特征值支持 notify 或者 indicate 才可以成功调用。
*
* 另外，必须先启用 `notifyBLECharacteristicValueChange` 才能监听到设备 `characteristicValueChange` 事件
*
* **注意**
*
*
* - 订阅操作成功后需要设备主动更新特征值的 value，才会触发 [wx.onBLECharacteristicValueChange](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.onBLECharacteristicValueChange.html) 回调。
* - 安卓平台上，在调用 `notifyBLECharacteristicValueChange` 成功后立即调用 `writeBLECharacteristicValue` 接口，在部分机型上会发生 10008 系统错误
*
* **示例代码**
*
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
```
*
* 最低基础库： `2.9.2` */
        notifyBLECharacteristicValueChange<
            T extends NotifyBLECharacteristicValueChangeOption = NotifyBLECharacteristicValueChangeOption
        >(
            option: T
        ): PromisifySuccessResult<T, NotifyBLECharacteristicValueChangeOption>
        /** [wx.offAccelerometerChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/accelerometer/wx.offAccelerometerChange.html)
         *
         * 取消监听加速度数据事件，参数为空，则取消所有的事件监听。
         *
         * 最低基础库： `2.9.3` */
        offAccelerometerChange(
            /** 加速度数据事件的回调函数 */
            callback: (...args: any[]) => any
        ): void
        /** [wx.offAddToFavorites(function callback)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.offAddToFavorites.html)
         *
         * 取消监听用户点击菜单「收藏」按钮时触发的事件
         *
         * 最低基础库： `2.10.3` */
        offAddToFavorites(
            /** 用户点击菜单「收藏」按钮时触发的事件的回调函数 */
            callback?: OffAddToFavoritesCallback
        ): void
        /** [wx.offAudioInterruptionBegin(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.offAudioInterruptionBegin.html)
         *
         * 取消监听音频因为受到系统占用而被中断开始事件
         *
         * 最低基础库： `1.8.0` */
        offAudioInterruptionBegin(
            /** 音频因为受到系统占用而被中断开始事件的回调函数 */
            callback?: OffAudioInterruptionBeginCallback
        ): void
        /** [wx.offAudioInterruptionEnd(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.offAudioInterruptionEnd.html)
         *
         * 取消监听音频中断结束事件
         *
         * 最低基础库： `1.8.0` */
        offAudioInterruptionEnd(
            /** 音频中断结束事件的回调函数 */
            callback?: OffAudioInterruptionEndCallback
        ): void
        /** [wx.offBLEPeripheralConnectionStateChanged(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/wx.offBLEPeripheralConnectionStateChanged.html)
         *
         * 取消监听当前外围设备被连接或断开连接事件
         *
         * 最低基础库： `2.10.3` */
        offBLEPeripheralConnectionStateChanged(
            /** 当前外围设备被连接或断开连接事件的回调函数 */
            callback?: OffBLEPeripheralConnectionStateChangedCallback
        ): void
        /** [wx.offBeaconServiceChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.offBeaconServiceChange.html)
         *
         * 取消监听 iBeacon 服务状态变化事件
         *
         * 最低基础库： `2.9.2` */
        offBeaconServiceChange(
            /** iBeacon 服务状态变化事件的回调函数 */
            callback?: OffBeaconServiceChangeCallback
        ): void
        /** [wx.offBeaconUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.offBeaconUpdate.html)
         *
         * 取消监听 iBeacon 设备更新事件
         *
         * 最低基础库： `2.9.2` */
        offBeaconUpdate(
            /** iBeacon 设备更新事件的回调函数 */
            callback?: OffBeaconUpdateCallback
        ): void
        /** [wx.offCompassChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/compass/wx.offCompassChange.html)
         *
         * 取消监听罗盘数据变化事件，参数为空，则取消所有的事件监听。
         *
         * 最低基础库： `2.9.3` */
        offCompassChange(
            /** 罗盘数据变化事件的回调函数 */
            callback: (...args: any[]) => any
        ): void
        /** [wx.offCopyUrl(function callback)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.offCopyUrl.html)
         *
         * 取消监听用户点击右上角菜单的「复制链接」按钮时触发的事件
         *
         * 最低基础库： `2.14.3` */
        offCopyUrl(
            /** 用户点击右上角菜单的「复制链接」按钮时触发的事件的回调函数 */
            callback?: OffCopyUrlCallback
        ): void
        /** [wx.offDeviceMotionChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/motion/wx.offDeviceMotionChange.html)
         *
         * 取消监听设备方向变化事件，参数为空，则取消所有的事件监听。
         *
         * 最低基础库： `2.9.3` */
        offDeviceMotionChange(
            /** 设备方向变化事件的回调函数 */
            callback: (...args: any[]) => any
        ): void
        /** [wx.offDeviceOrientationChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/orientation/wx.offDeviceOrientationChange.html)
         *
         * 取消监听横竖屏切换事件
         *
         * 最低基础库： `2.1.0` */
        offDeviceOrientationChange(
            /** 横竖屏切换事件的回调函数 */
            callback?: OffDeviceOrientationChangeCallback
        ): void
        /** [wx.offError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.offError.html)
         *
         * 取消监听全局错误事件 */
        offError(
            /** 全局错误事件的回调函数 */
            callback?: WxOffErrorCallback
        ): void
        /** [wx.offGyroscopeChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/gyroscope/wx.offGyroscopeChange.html)
         *
         * 取消监听陀螺仪数据变化事件。
         *
         * 最低基础库： `2.9.3` */
        offGyroscopeChange(
            /** 陀螺仪数据变化事件的回调函数 */
            callback: (...args: any[]) => any
        ): void
        /** [wx.offHandoff(function callback)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.offHandoff.html)
         *
         * 取消监听用户点击菜单「在电脑上打开」按钮时触发的事件
         *
         * 最低基础库： `2.14.4` */
        offHandoff(
            /** 用户点击菜单「在电脑上打开」按钮时触发的事件的回调函数 */
            callback?: OffHandoffCallback
        ): void
        /** [wx.offHide(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.offHide.html)
         *
         * 取消监听小游戏隐藏到后台事件 */
        offHide(
            /** 小游戏隐藏到后台事件的回调函数 */
            callback?: OffHideCallback
        ): void
        /** [wx.offInteractiveStorageModified(function callback)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.offInteractiveStorageModified.html)
         *
         * 取消监听成功修改好友的互动型托管数据事件，该接口在游戏主域使用
         *
         * 最低基础库： `2.14.4` */
        offInteractiveStorageModified(
            /** 事件发生的回调函数，留空则清除所有回调 */
            callback?: (...args: any[]) => any
        ): void
        /** [wx.offKeyDown(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/key-event/wx.offKeyDown.html)
         *
         * 取消监听键盘按键按下事件
         *
         * 最低基础库： `2.10.1` */
        offKeyDown(
            /** 键盘按键按下事件的回调函数 */
            callback?: OffKeyDownCallback
        ): void
        /** [wx.offKeyUp(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/key-event/wx.offKeyUp.html)
         *
         * 取消监听键盘按键弹起事件
         *
         * 最低基础库： `2.10.1` */
        offKeyUp(
            /** 键盘按键弹起事件的回调函数 */
            callback?: OffKeyUpCallback
        ): void
        /** [wx.offKeyboardComplete(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ui/keyboard/wx.offKeyboardComplete.html)
         *
         * 取消监听监听键盘收起的事件 */
        offKeyboardComplete(
            /** 监听键盘收起的事件的回调函数 */
            callback?: OffKeyboardCompleteCallback
        ): void
        /** [wx.offKeyboardConfirm(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ui/keyboard/wx.offKeyboardConfirm.html)
         *
         * 取消监听用户点击键盘 Confirm 按钮时的事件 */
        offKeyboardConfirm(
            /** 用户点击键盘 Confirm 按钮时的事件的回调函数 */
            callback?: OffKeyboardConfirmCallback
        ): void
        /** [wx.offKeyboardInput(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ui/keyboard/wx.offKeyboardInput.html)
         *
         * 取消监听键盘输入事件 */
        offKeyboardInput(
            /** 键盘输入事件的回调函数 */
            callback?: OffKeyboardInputCallback
        ): void
        /** [wx.offMemoryWarning(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/performance/wx.offMemoryWarning.html)
         *
         * 取消监听内存不足告警事件。
         *
         * 最低基础库： `2.9.0` */
        offMemoryWarning(
            /** 内存不足告警事件的回调函数 */
            callback: (...args: any[]) => any
        ): void
        /** [wx.offMouseDown(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/mouse-event/wx.offMouseDown.html)
         *
         * 取消监听鼠标按键按下事件 */
        offMouseDown(
            /** 鼠标按键按下事件的回调函数 */
            callback?: OffMouseDownCallback
        ): void
        /** [wx.offMouseMove(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/mouse-event/wx.offMouseMove.html)
         *
         * 取消监听鼠标移动事件 */
        offMouseMove(
            /** 鼠标移动事件的回调函数 */
            callback?: OffMouseMoveCallback
        ): void
        /** [wx.offMouseUp(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/mouse-event/wx.offMouseUp.html)
         *
         * 取消监听鼠标按键弹起事件 */
        offMouseUp(
            /** 鼠标按键弹起事件的回调函数 */
            callback?: OffMouseUpCallback
        ): void
        /** [wx.offNetworkStatusChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/network/wx.offNetworkStatusChange.html)
         *
         * 取消监听网络状态变化事件，参数为空，则取消所有的事件监听。
         *
         * 最低基础库： `2.9.3` */
        offNetworkStatusChange(
            /** 网络状态变化事件的回调函数 */
            callback: (...args: any[]) => any
        ): void
        /** [wx.offShareAppMessage(function callback)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.offShareAppMessage.html)
         *
         * 取消监听用户点击右上角菜单的「转发」按钮时触发的事件 */
        offShareAppMessage(
            /** 用户点击右上角菜单的「转发」按钮时触发的事件的回调函数 */
            callback?: OffShareAppMessageCallback
        ): void
        /** [wx.offShareTimeline(function callback)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.offShareTimeline.html)
         *
         * 取消监听用户点击右上角菜单的「分享到朋友圈」按钮时触发的事件
         *
         * 最低基础库： `2.11.3` */
        offShareTimeline(
            /** 用户点击右上角菜单的「分享到朋友圈」按钮时触发的事件的回调函数 */
            callback?: OffShareTimelineCallback
        ): void
        /** [wx.offShow(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.offShow.html)
         *
         * 取消监听小游戏回到前台的事件 */
        offShow(
            /** 小游戏回到前台的事件的回调函数 */
            callback?: OffShowCallback
        ): void
        /** [wx.offTouchCancel(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/touch-event/wx.offTouchCancel.html)
         *
         * 取消监听触点失效事件 */
        offTouchCancel(
            /** 触点失效事件的回调函数 */
            callback?: OffTouchCancelCallback
        ): void
        /** [wx.offTouchEnd(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/touch-event/wx.offTouchEnd.html)
         *
         * 取消监听触摸结束事件 */
        offTouchEnd(
            /** 触摸结束事件的回调函数 */
            callback?: OffTouchEndCallback
        ): void
        /** [wx.offTouchMove(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/touch-event/wx.offTouchMove.html)
         *
         * 取消监听触点移动事件 */
        offTouchMove(
            /** 触点移动事件的回调函数 */
            callback?: OffTouchMoveCallback
        ): void
        /** [wx.offTouchStart(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/touch-event/wx.offTouchStart.html)
         *
         * 取消监听开始触摸事件 */
        offTouchStart(
            /** 开始触摸事件的回调函数 */
            callback?: OffTouchStartCallback
        ): void
        /** [wx.offUnhandledRejection(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.offUnhandledRejection.html)
         *
         * 取消监听未处理的 Promise 拒绝事件
         *
         * 最低基础库： `2.10.0` */
        offUnhandledRejection(
            /** 未处理的 Promise 拒绝事件的回调函数 */
            callback?: OffUnhandledRejectionCallback
        ): void
        /** [wx.offVoIPChatInterrupted(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.offVoIPChatInterrupted.html)
         *
         * 取消监听被动断开实时语音通话事件。
         *
         * 最低基础库： `2.9.0` */
        offVoIPChatInterrupted(
            /** 被动断开实时语音通话事件的回调函数 */
            callback: (...args: any[]) => any
        ): void
        /** [wx.offVoIPChatMembersChanged(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.offVoIPChatMembersChanged.html)
         *
         * 取消监听实时语音通话成员在线状态变化事件。
         *
         * 最低基础库： `2.9.0` */
        offVoIPChatMembersChanged(
            /** 实时语音通话成员在线状态变化事件的回调函数 */
            callback: (...args: any[]) => any
        ): void
        /** [wx.offVoIPChatSpeakersChanged(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.offVoIPChatSpeakersChanged.html)
         *
         * 取消监听实时语音通话成员通话状态变化事件。
         *
         * 最低基础库： `2.9.0` */
        offVoIPChatSpeakersChanged(
            /** 实时语音通话成员通话状态变化事件的回调函数 */
            callback: (...args: any[]) => any
        ): void
        /** [wx.offWheel(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/wheel-event/wx.offWheel.html)
         *
         * 取消监听鼠标滚轮事件 */
        offWheel(
            /** 鼠标滚轮事件的回调函数 */
            callback?: OffWheelCallback
        ): void
        /** [wx.offWindowResize(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ui/window/wx.offWindowResize.html)
         *
         * 取消监听窗口尺寸变化事件 */
        offWindowResize(
            /** 窗口尺寸变化事件的回调函数 */
            callback?: OffWindowResizeCallback
        ): void
        /** [wx.onAccelerometerChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/accelerometer/wx.onAccelerometerChange.html)
*
* 监听加速度数据事件。频率根据 [wx.startAccelerometer()](https://developers.weixin.qq.com/minigame/dev/api/device/accelerometer/wx.startAccelerometer.html) 的 interval 参数, 接口调用后会自动开始监听。
*
* **示例代码**
*
*
* ```js
wx.onAccelerometerChange(callback)
``` */
        onAccelerometerChange(
            /** 加速度数据事件的回调函数 */
            callback: OnAccelerometerChangeCallback
        ): void
        /** [wx.onAddToFavorites(function callback)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.onAddToFavorites.html)
         *
         * 监听用户点击菜单「收藏」按钮时触发的事件（安卓7.0.15起支持，iOS 暂不支持）
         *
         * 最低基础库： `2.10.3` */
        onAddToFavorites(
            /** 用户点击菜单「收藏」按钮时触发的事件的回调函数 */
            callback: OnAddToFavoritesCallback
        ): void
        /** [wx.onAudioInterruptionBegin(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.onAudioInterruptionBegin.html)
         *
         * 监听音频因为受到系统占用而被中断开始事件。以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停。
         *
         * 最低基础库： `1.8.0` */
        onAudioInterruptionBegin(
            /** 音频因为受到系统占用而被中断开始事件的回调函数 */
            callback: OnAudioInterruptionBeginCallback
        ): void
        /** [wx.onAudioInterruptionEnd(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.onAudioInterruptionEnd.html)
         *
         * 监听音频中断结束事件。在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功
         *
         * 最低基础库： `1.8.0` */
        onAudioInterruptionEnd(
            /** 音频中断结束事件的回调函数 */
            callback: OnAudioInterruptionEndCallback
        ): void
        /** [wx.onBLECharacteristicValueChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.onBLECharacteristicValueChange.html)
*
* 监听低功耗蓝牙设备的特征值变化事件。必须先启用 `notifyBLECharacteristicValueChange` 接口才能接收到设备推送的 notification。
*
* **示例代码**
*
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
```
*
* 最低基础库： `2.9.2` */
        onBLECharacteristicValueChange(
            /** 低功耗蓝牙设备的特征值变化事件的回调函数 */
            callback: OnBLECharacteristicValueChangeCallback
        ): void
        /** [wx.onBLEConnectionStateChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.onBLEConnectionStateChange.html)
*
* 监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.onBLEConnectionStateChange(function(res) {
  // 该方法回调中可以用于处理连接意外断开等异常情况
  console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)
})
```
*
* 最低基础库： `2.9.2` */
        onBLEConnectionStateChange(
            /** 低功耗蓝牙连接状态的改变事件的回调函数 */
            callback: OnBLEConnectionStateChangeCallback
        ): void
        /** [wx.onBLEPeripheralConnectionStateChanged(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/wx.onBLEPeripheralConnectionStateChanged.html)
         *
         * 监听当前外围设备被连接或断开连接事件
         *
         * 最低基础库： `2.10.3` */
        onBLEPeripheralConnectionStateChanged(
            /** 当前外围设备被连接或断开连接事件的回调函数 */
            callback: OnBLEPeripheralConnectionStateChangedCallback
        ): void
        /** [wx.onBeaconServiceChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.onBeaconServiceChange.html)
         *
         * 监听 iBeacon 服务状态变化事件，仅能注册一个监听
         *
         * 最低基础库： `2.9.2` */
        onBeaconServiceChange(
            /** iBeacon 服务状态变化事件的回调函数 */
            callback: OnBeaconServiceChangeCallback
        ): void
        /** [wx.onBeaconUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.onBeaconUpdate.html)
         *
         * 监听 iBeacon 设备更新事件，仅能注册一个监听
         *
         * 最低基础库： `2.9.2` */
        onBeaconUpdate(
            /** iBeacon 设备更新事件的回调函数 */
            callback: OnBeaconUpdateCallback
        ): void
        /** [wx.onBluetoothAdapterStateChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.onBluetoothAdapterStateChange.html)
*
* 监听蓝牙适配器状态变化事件
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.onBluetoothAdapterStateChange(function (res) {
  console.log('adapterState changed, now is', res)
})
```
*
* 最低基础库： `2.9.2` */
        onBluetoothAdapterStateChange(
            /** 蓝牙适配器状态变化事件的回调函数 */
            callback: OnBluetoothAdapterStateChangeCallback
        ): void
        /** [wx.onBluetoothDeviceFound(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.onBluetoothDeviceFound.html)
*
* 监听寻找到新设备的事件
*
* **注意**
*
*
* - 若在 [wx.onBluetoothDeviceFound](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.onBluetoothDeviceFound.html) 回调了某个设备，则此设备会添加到 [wx.getBluetoothDevices](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.getBluetoothDevices.html) 接口获取到的数组中。
*
* **示例代码**
*
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
*
* - 安卓下部分机型需要有位置权限才能搜索到设备，需留意是否开启了位置权限
*
* 最低基础库： `2.9.2` */
        onBluetoothDeviceFound(
            /** 寻找到新设备的事件的回调函数 */
            callback: OnBluetoothDeviceFoundCallback
        ): void
        /** [wx.onCompassChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/compass/wx.onCompassChange.html)
         *
         * 监听罗盘数据变化事件。频率：5 次/秒，接口调用后会自动开始监听，可使用 wx.stopCompass 停止监听。
         *
         * **accuracy 在 iOS/Android 的差异**
         *
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
            /** 罗盘数据变化事件的回调函数 */
            callback: OnCompassChangeCallback
        ): void
        /** [wx.onCopyUrl(function callback)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.onCopyUrl.html)
         *
         * 监听用户点击右上角菜单的「复制链接」按钮时触发的事件。本接口为 Beta 版本，暂只在 Android 平台支持。
         *
         * 最低基础库： `2.14.3` */
        onCopyUrl(
            /** 用户点击右上角菜单的「复制链接」按钮时触发的事件的回调函数 */
            callback: OnCopyUrlCallback
        ): void
        /** [wx.onDeviceMotionChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/motion/wx.onDeviceMotionChange.html)
         *
         * 监听设备方向变化事件。频率根据 [wx.startDeviceMotionListening()](https://developers.weixin.qq.com/minigame/dev/api/device/motion/wx.startDeviceMotionListening.html) 的 interval 参数。可以使用 [wx.stopDeviceMotionListening()](https://developers.weixin.qq.com/minigame/dev/api/device/motion/wx.stopDeviceMotionListening.html) 停止监听。
         *
         * 最低基础库： `2.3.0` */
        onDeviceMotionChange(
            /** 设备方向变化事件的回调函数 */
            callback: OnDeviceMotionChangeCallback
        ): void
        /** [wx.onDeviceOrientationChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/orientation/wx.onDeviceOrientationChange.html)
         *
         * 监听横竖屏切换事件
         *
         * 最低基础库： `2.1.0` */
        onDeviceOrientationChange(
            /** 横竖屏切换事件的回调函数 */
            callback: OnDeviceOrientationChangeCallback
        ): void
        /** [wx.onError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.onError.html)
         *
         * 监听全局错误事件 */
        onError(
            /** 全局错误事件的回调函数 */
            callback: WxOnErrorCallback
        ): void
        /** [wx.onGyroscopeChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/gyroscope/wx.onGyroscopeChange.html)
         *
         * 监听陀螺仪数据变化事件。频率根据 [wx.startGyroscope()](https://developers.weixin.qq.com/minigame/dev/api/device/gyroscope/wx.startGyroscope.html) 的 interval 参数。可以使用 [wx.stopGyroscope()](https://developers.weixin.qq.com/minigame/dev/api/device/gyroscope/wx.stopGyroscope.html) 停止监听。
         *
         * 最低基础库： `2.3.0` */
        onGyroscopeChange(
            /** 陀螺仪数据变化事件的回调函数 */
            callback: OnGyroscopeChangeCallback
        ): void
        /** [wx.onHandoff(function callback)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.onHandoff.html)
         *
         * 监听用户点击菜单「在电脑上打开」按钮时触发的事件
         *
         * 最低基础库： `2.14.4` */
        onHandoff(
            /** 用户点击菜单「在电脑上打开」按钮时触发的事件的回调函数 */
            callback: OnHandoffCallback
        ): void
        /** [wx.onHide(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.onHide.html)
         *
         * 监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面、显示在聊天顶部等操作会触发此事件。 */
        onHide(
            /** 小游戏隐藏到后台事件的回调函数 */
            callback: OnHideCallback
        ): void
        /** [wx.onInteractiveStorageModified(function callback)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.onInteractiveStorageModified.html)
         *
         * 监听成功修改好友的互动型托管数据事件，该接口在游戏主域使用
         *
         * 最低基础库： `2.9.0` */
        onInteractiveStorageModified(
            /** 事件发生的回调函数，只有一个参数为 `wx.modifyFriendInteractiveStorage` 传入的 key */
            callback: (...args: any[]) => any
        ): void
        /** [wx.onKeyDown(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/key-event/wx.onKeyDown.html)
         *
         * 监听键盘按键按下事件，仅适用于 PC 平台
         *
         * 最低基础库： `2.10.1` */
        onKeyDown(
            /** 键盘按键按下事件的回调函数 */
            callback: OnKeyDownCallback
        ): void
        /** [wx.onKeyUp(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/key-event/wx.onKeyUp.html)
         *
         * 监听键盘按键弹起事件，仅适用于 PC 平台
         *
         * 最低基础库： `2.10.1` */
        onKeyUp(
            /** 键盘按键弹起事件的回调函数 */
            callback: OnKeyUpCallback
        ): void
        /** [wx.onKeyboardComplete(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ui/keyboard/wx.onKeyboardComplete.html)
         *
         * 监听监听键盘收起的事件 */
        onKeyboardComplete(
            /** 监听键盘收起的事件的回调函数 */
            callback: OnKeyboardCompleteCallback
        ): void
        /** [wx.onKeyboardConfirm(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ui/keyboard/wx.onKeyboardConfirm.html)
         *
         * 监听用户点击键盘 Confirm 按钮时的事件 */
        onKeyboardConfirm(
            /** 用户点击键盘 Confirm 按钮时的事件的回调函数 */
            callback: OnKeyboardConfirmCallback
        ): void
        /** [wx.onKeyboardInput(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ui/keyboard/wx.onKeyboardInput.html)
         *
         * 监听键盘输入事件 */
        onKeyboardInput(
            /** 键盘输入事件的回调函数 */
            callback: OnKeyboardInputCallback
        ): void
        /** [wx.onMemoryWarning(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/performance/wx.onMemoryWarning.html)
         *
         * 监听内存不足告警事件。
         *
         * 当 iOS/Android 向小程序进程发出内存警告时，触发该事件。触发该事件不意味小程序被杀，大部分情况下仅仅是告警，开发者可在收到通知后回收一些不必要资源避免进一步加剧内存紧张。
         *
         * **示例代码**
         *
         *
         * ```js
         * wx.onMemoryWarning(function () {
         *   console.log('onMemoryWarningReceive')
         * })
         * ``
         *
         * 最低基础库： `2.0.2` */
        onMemoryWarning(
            /** 内存不足告警事件的回调函数 */
            callback: OnMemoryWarningCallback
        ): void
        /** [wx.onMessage(function callback)](https://developers.weixin.qq.com/minigame/dev/api/open-api/context/wx.onMessage.html)
         *
         * 监听主域发送的消息 */
        onMessage(
            /** 监听事件的回调函数 */
            callback: (...args: any[]) => any
        ): void
        /** [wx.onMouseDown(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/mouse-event/wx.onMouseDown.html)
         *
         * 监听鼠标按键按下事件 */
        onMouseDown(
            /** 鼠标按键按下事件的回调函数 */
            callback: OnMouseDownCallback
        ): void
        /** [wx.onMouseMove(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/mouse-event/wx.onMouseMove.html)
         *
         * 监听鼠标移动事件 */
        onMouseMove(
            /** 鼠标移动事件的回调函数 */
            callback: OnMouseMoveCallback
        ): void
        /** [wx.onMouseUp(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/mouse-event/wx.onMouseUp.html)
         *
         * 监听鼠标按键弹起事件 */
        onMouseUp(
            /** 鼠标按键弹起事件的回调函数 */
            callback: OnMouseUpCallback
        ): void
        /** [wx.onNetworkStatusChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/network/wx.onNetworkStatusChange.html)
*
* 监听网络状态变化事件
*
* **示例代码**
*
*
* ```js
wx.onNetworkStatusChange(function (res) {
  console.log(res.isConnected)
  console.log(res.networkType)
})
```
*
* 最低基础库： `1.1.0` */
        onNetworkStatusChange(
            /** 网络状态变化事件的回调函数 */
            callback: OnNetworkStatusChangeCallback
        ): void
        /** [wx.onShareAppMessage(function callback)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.onShareAppMessage.html)
         *
         * 监听用户点击右上角菜单的「转发」按钮时触发的事件 */
        onShareAppMessage(
            /** 用户点击右上角菜单的「转发」按钮时触发的事件的回调函数 */
            callback: OnShareAppMessageCallback
        ): void
        /** [wx.onShareMessageToFriend(function callback)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.onShareMessageToFriend.html)
         *
         * 监听主域接收 `wx.shareMessageToFriend` 接口的成功失败通知
         *
         * 最低基础库： `2.9.4` */
        onShareMessageToFriend(
            /** 的回调函数 */
            callback: OnShareMessageToFriendCallback
        ): void
        /** [wx.onShareTimeline(function callback)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.onShareTimeline.html)
         *
         * 监听用户点击右上角菜单的「分享到朋友圈」按钮时触发的事件。本接口为 Beta 版本，暂只在 Android 平台支持。
         *
         * 最低基础库： `2.11.3` */
        onShareTimeline(
            /** 用户点击右上角菜单的「分享到朋友圈」按钮时触发的事件的回调函数 */
            callback: OnShareTimelineCallback
        ): void
        /** [wx.onShow(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.onShow.html)
         *
         * 监听小游戏回到前台的事件 */
        onShow(
            /** 小游戏回到前台的事件的回调函数 */
            callback: OnShowCallback
        ): void
        /** [wx.onSocketClose(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.onSocketClose.html)
         *
         * 监听 WebSocket 连接关闭事件 */
        onSocketClose(
            /** WebSocket 连接关闭事件的回调函数 */
            callback: OnSocketCloseCallback
        ): void
        /** [wx.onSocketError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.onSocketError.html)
         *
         * 监听 WebSocket 错误事件 */
        onSocketError(
            /** WebSocket 错误事件的回调函数 */
            callback: OnSocketErrorCallback
        ): void
        /** [wx.onSocketMessage(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.onSocketMessage.html)
         *
         * 监听 WebSocket 接受到服务器的消息事件 */
        onSocketMessage(
            /** WebSocket 接受到服务器的消息事件的回调函数 */
            callback: OnSocketMessageCallback
        ): void
        /** [wx.onSocketOpen(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.onSocketOpen.html)
         *
         * 监听 WebSocket 连接打开事件 */
        onSocketOpen(
            /** WebSocket 连接打开事件的回调函数 */
            callback: OnSocketOpenCallback
        ): void
        /** [wx.onTouchCancel(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/touch-event/wx.onTouchCancel.html)
         *
         * 监听触点失效事件 */
        onTouchCancel(
            /** 触点失效事件的回调函数 */
            callback: OnTouchCancelCallback
        ): void
        /** [wx.onTouchEnd(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/touch-event/wx.onTouchEnd.html)
         *
         * 监听触摸结束事件 */
        onTouchEnd(
            /** 触摸结束事件的回调函数 */
            callback: OnTouchEndCallback
        ): void
        /** [wx.onTouchMove(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/touch-event/wx.onTouchMove.html)
         *
         * 监听触点移动事件 */
        onTouchMove(
            /** 触点移动事件的回调函数 */
            callback: OnTouchMoveCallback
        ): void
        /** [wx.onTouchStart(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/touch-event/wx.onTouchStart.html)
         *
         * 监听开始触摸事件 */
        onTouchStart(
            /** 开始触摸事件的回调函数 */
            callback: OnTouchStartCallback
        ): void
        /** [wx.onUnhandledRejection(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.onUnhandledRejection.html)
         *
         * 监听未处理的 Promise 拒绝事件
         *
         * **注意**
         *
         *
         * 安卓平台暂时不会派发该事件
         *
         * 最低基础库： `2.10.0` */
        onUnhandledRejection(
            /** 未处理的 Promise 拒绝事件的回调函数 */
            callback: OnUnhandledRejectionCallback
        ): void
        /** [wx.onUserCaptureScreen(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/screen/wx.onUserCaptureScreen.html)
*
* 监听用户主动截屏事件。用户使用系统截屏按键截屏时触发，只能注册一个监听
*
* **示例代码**
*
*
* ```js
wx.onUserCaptureScreen(function (res) {
  console.log('用户截屏了')
})
```
*
* 最低基础库： `2.8.1` */
        onUserCaptureScreen(
            /** 用户主动截屏事件的回调函数 */
            callback: OnUserCaptureScreenCallback
        ): void
        /** [wx.onVoIPChatInterrupted(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.onVoIPChatInterrupted.html)
         *
         * 监听被动断开实时语音通话事件。包括小游戏切入后端时断开
         *
         * 最低基础库： `2.7.0` */
        onVoIPChatInterrupted(
            /** 被动断开实时语音通话事件的回调函数 */
            callback: OnVoIPChatInterruptedCallback
        ): void
        /** [wx.onVoIPChatMembersChanged(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.onVoIPChatMembersChanged.html)
         *
         * 监听实时语音通话成员在线状态变化事件。有成员加入/退出通话时触发回调
         *
         * 最低基础库： `2.7.0` */
        onVoIPChatMembersChanged(
            /** 实时语音通话成员在线状态变化事件的回调函数 */
            callback: OnVoIPChatMembersChangedCallback
        ): void
        /** [wx.onVoIPChatSpeakersChanged(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.onVoIPChatSpeakersChanged.html)
         *
         * 监听实时语音通话成员通话状态变化事件。有成员开始/停止说话时触发回调
         *
         * 最低基础库： `2.7.0` */
        onVoIPChatSpeakersChanged(
            /** 实时语音通话成员通话状态变化事件的回调函数 */
            callback: OnVoIPChatSpeakersChangedCallback
        ): void
        /** [wx.onWheel(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/wheel-event/wx.onWheel.html)
         *
         * 监听鼠标滚轮事件 */
        onWheel(
            /** 鼠标滚轮事件的回调函数 */
            callback: OnWheelCallback
        ): void
        /** [wx.onWindowResize(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ui/window/wx.onWindowResize.html)
         *
         * 监听窗口尺寸变化事件 */
        onWindowResize(
            /** 窗口尺寸变化事件的回调函数 */
            callback: OnWindowResizeCallback
        ): void
        /** [wx.openBluetoothAdapter(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.openBluetoothAdapter.html)
*
* 初始化蓝牙模块。iOS 上开启主机/从机模式时需分别调用一次，指定对应的 `mode`。
*
* **object.fail 回调函数返回的 state 参数（仅 iOS）**
*
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
*
* - 其他蓝牙相关 API 必须在 [wx.openBluetoothAdapter](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.openBluetoothAdapter.html) 调用之后使用。否则 API 会返回错误（errCode=10000）。
* - 在用户蓝牙开关未开启或者手机不支持蓝牙功能的情况下，调用 [wx.openBluetoothAdapter](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.openBluetoothAdapter.html) 会返回错误（errCode=10001），表示手机蓝牙功能不可用。此时小程序蓝牙模块已经初始化完成，可通过 [wx.onBluetoothAdapterStateChange](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.onBluetoothAdapterStateChange.html) 监听手机蓝牙状态的改变，也可以调用蓝牙模块的所有API。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.openBluetoothAdapter({
  success (res) {
    console.log(res)
  }
})
```
*
* 最低基础库： `2.9.2` */
        openBluetoothAdapter<
            T extends OpenBluetoothAdapterOption = OpenBluetoothAdapterOption
        >(
            option?: T
        ): PromisifySuccessResult<T, OpenBluetoothAdapterOption>
        /** [wx.openCard(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/card/wx.openCard.html)
*
* 查看微信卡包中的卡券。只有通过 [认证](https://developers.weixin.qq.com/miniprogram/product/renzheng.html) 的小程序或文化互动类目的小游戏才能使用。更多文档请参考 [微信卡券接口文档](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1490190158&version=1&lang=zh_CN&platform=2)。
*
* **示例代码**
*
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
```
*
* 最低基础库： `2.5.0` */
        openCard<T extends OpenCardOption = OpenCardOption>(
            option: T
        ): PromisifySuccessResult<T, OpenCardOption>
        /** [wx.openCustomerServiceConversation(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/customer-message/wx.openCustomerServiceConversation.html)
         *
         * 进入客服会话。要求在用户发生过至少一次 touch 事件后才能调用。后台接入方式与小程序一致，详见 [客服消息接入](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/customer-message/customer-message.html)
         *
         * 最低基础库： `2.0.3` */
        openCustomerServiceConversation<
            T extends OpenCustomerServiceConversationOption = OpenCustomerServiceConversationOption
        >(
            option: T
        ): PromisifySuccessResult<T, OpenCustomerServiceConversationOption>
        /** [wx.openSetting(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/wx.openSetting.html)
*
* 调起客户端小程序设置界面，返回用户设置的操作结果。**设置界面只会出现小程序已经向用户请求过的[权限](https://developers.weixin.qq.com/minigame/dev/guide/framework/authorize.html)**。
*
* ****
*
* - 注意：[2.3.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 版本开始，用户发生点击行为后，才可以跳转打开设置页，管理授权信息。[详情](https://developers.weixin.qq.com/community/develop/doc/000cea2305cc5047af5733de751008)
*
* **示例代码**
*
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
```
*
* 最低基础库： `1.1.0` */
        openSetting<T extends OpenSettingOption = OpenSettingOption>(
            option?: T
        ): PromisifySuccessResult<T, OpenSettingOption>
        /** [wx.previewImage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/image/wx.previewImage.html)
*
* 在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。
*
* **示例代码**
*
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
         * 预览图片和视频。
         *
         * 最低基础库： `2.12.0` */
        previewMedia<T extends PreviewMediaOption = PreviewMediaOption>(
            option: T
        ): PromisifySuccessResult<T, PreviewMediaOption>
        /** [wx.readBLECharacteristicValue(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.readBLECharacteristicValue.html)
*
* 读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用。
*
* **注意**
*
*
* - 并行调用多次会存在读失败的可能性。
* - 接口读取到的信息需要在 `onBLECharacteristicValueChange` 方法注册的回调中获取。
*
* **示例代码**
*
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
```
*
* 最低基础库： `2.9.2` */
        readBLECharacteristicValue<
            T extends ReadBLECharacteristicValueOption = ReadBLECharacteristicValueOption
        >(
            option: T
        ): PromisifySuccessResult<T, ReadBLECharacteristicValueOption>
        /** [wx.removeStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.removeStorage.html)
*
* 从本地缓存中移除指定 key。缓存相关策略请查看 [存储](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/storage.html)。
*
* **示例代码**
*
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
         * 删除用户托管数据当中对应 key 的数据。
         *
         * 最低基础库： `1.9.92` */
        removeUserCloudStorage<
            T extends RemoveUserCloudStorageOption = RemoveUserCloudStorageOption
        >(
            option: T
        ): PromisifySuccessResult<T, RemoveUserCloudStorageOption>
        /** [wx.reportEvent(string eventId)](https://developers.weixin.qq.com/minigame/dev/api/open-api/report/wx.reportEvent.html)
         *
         * 事件上报
         *
         * 最低基础库： `2.14.4` */
        reportEvent(
            /** 在 mp 实验系统中设置的事件英文名 */
            eventId: string
        ): void
        /** [wx.reportMonitor(string name, number value)](https://developers.weixin.qq.com/minigame/dev/api/open-api/report/wx.reportMonitor.html)
*
* 自定义业务数据监控上报接口。
*
* **使用说明**
*
*
* 使用前，需要在「小程序管理后台-运维中心-性能监控-业务数据监控」中新建监控事件，配置监控描述与告警类型。每一个监控事件对应唯一的监控ID，开发者最多可以创建128个监控事件。
*
* **示例代码**
*
*
* ```js
wx.reportMonitor('1', 1)
```
*
* 最低基础库： `2.1.2` */
        reportMonitor(
            /** 监控ID，在「小程序管理后台」新建数据指标后获得 */
            name: string,
            /** 上报数值，经处理后会在「小程序管理后台」上展示每分钟的上报总量 */
            value: number
        ): void
        /** [wx.reportPerformance(Number id, Number value, String|Array dimensions)](https://developers.weixin.qq.com/minigame/dev/api/base/performance/wx.reportPerformance.html)
*
* 小程序测速上报。使用前，需要在小程序管理后台配置。 详情参见[小程序测速](/miniprogram/dev/framework/performanceReport/)指南。
*
* **示例代码**
*
*
* ```js
wx.reportPerformance(1101, 680)
wx.reportPerformance(1101, 680, 'custom')
```
*
* 最低基础库： `2.10.0` */
        reportPerformance(
            /** 指标 id */
            id: number,
            /** 需要上报的数值 */
            value: number,
            /** 自定义维度 (选填) */
            dimensions?: string | any[]
        ): void
        /** [wx.reportUserBehaviorBranchAnalytics(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/report/wx.reportUserBehaviorBranchAnalytics.html)
         *
         * 用于分支相关的UI组件（一般是按钮）相关事件的上报，事件目前有曝光、点击两种
         *
         * 最低基础库： `2.12.0` */
        reportUserBehaviorBranchAnalytics(
            option: ReportUserBehaviorBranchAnalyticsOption
        ): void
        /** [wx.requestMidasFriendPayment(Object object)](https://developers.weixin.qq.com/minigame/dev/api/midas-payment/wx.requestMidasFriendPayment.html)
         *
         * 发起米大师朋友礼物索要
         *
         * **buyQuantity限制说明**
         *
         *
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
         * | 2998 |
         *
         * 最低基础库： `2.11.0` */
        requestMidasFriendPayment(option: RequestMidasFriendPaymentOption): void
        /** [wx.requestMidasPayment(Object object)](https://developers.weixin.qq.com/minigame/dev/api/midas-payment/wx.requestMidasPayment.html)
         *
         * 发起米大师支付
         *
         * **buyQuantity 限制说明**
         *
         *
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
        /** [wx.requestSubscribeMessage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html)
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
*
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
```
*
* 最低基础库： `2.4.4` */
        requestSubscribeMessage<
            T extends RequestSubscribeMessageOption = RequestSubscribeMessageOption
        >(
            option: T
        ): PromisifySuccessResult<T, RequestSubscribeMessageOption>
        /** [wx.requestSubscribeSystemMessage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/subscribe-message/wx.requestSubscribeSystemMessage.html)
*
* 调起小游戏系统订阅消息界面，返回用户订阅消息的操作结果。当用户勾选了订阅面板中的“总是保持以上选择，不再询问”时，模板消息会被添加到用户的小游戏设置页，通过 [wx.getSetting](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/wx.getSetting.html) 接口可获取用户对相关模板消息的订阅状态。
*
* ## 注意事项
*  - 需要在 touchend 事件的回调中调用。
*  - 使用前建议阅读 [小游戏系统订阅消息使用指引](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/subscribe-system-message.html)。
*  - 系统订阅消息只需要订阅一次，永久有效。
*
* **错误码**
*
*
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
```
*
* 最低基础库： `2.9.4` */
        requestSubscribeSystemMessage<
            T extends RequestSubscribeSystemMessageOption = RequestSubscribeSystemMessageOption
        >(
            option: T
        ): PromisifySuccessResult<T, RequestSubscribeSystemMessageOption>
        /** [wx.saveFileToDisk(Object object)](https://developers.weixin.qq.com/minigame/dev/api/file/wx.saveFileToDisk.html)
         *
         * 保存文件系统的文件到用户磁盘，仅在 PC 端支持
         *
         * 最低基础库： `2.11.0` */
        saveFileToDisk(option: SaveFileToDiskOption): void
        /** [wx.saveImageToPhotosAlbum(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/image/wx.saveImageToPhotosAlbum.html)
*
* 保存图片到系统相册。
*
* **示例代码**
*
*
* ```js
wx.saveImageToPhotosAlbum({
  success(res) { }
})
```
*
* 最低基础库： `1.2.0` */
        saveImageToPhotosAlbum<
            T extends SaveImageToPhotosAlbumOption = SaveImageToPhotosAlbumOption
        >(
            option: T
        ): PromisifySuccessResult<T, SaveImageToPhotosAlbumOption>
        /** [wx.sendSocketMessage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.sendSocketMessage.html)
*
* 通过 WebSocket 连接发送数据。需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。
*
* **示例代码**
*
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
         * 设置蓝牙最大传输单元。需在 wx.createBLEConnection调用成功后调用，mtu 设置范围 (22,512)。安卓5.1以上有效。
         *
         * 最低基础库： `2.11.0` */
        setBLEMTU<T extends SetBLEMTUOption = SetBLEMTUOption>(
            option: T
        ): PromisifySuccessResult<T, SetBLEMTUOption>
        /** [wx.setClipboardData(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/clipboard/wx.setClipboardData.html)
*
* 设置系统剪贴板的内容。调用成功后，会弹出 toast 提示"内容已复制"，持续 1.5s
*
* **示例代码**
*
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
```
*
* 最低基础库： `1.1.0` */
        setClipboardData<
            T extends SetClipboardDataOption = SetClipboardDataOption
        >(
            option: T
        ): PromisifySuccessResult<T, SetClipboardDataOption>
        /** [wx.setEnableDebug(Object object)](https://developers.weixin.qq.com/minigame/dev/api/base/debug/wx.setEnableDebug.html)
*
* 设置是否打开调试开关。此开关对正式版也能生效。
*
* **示例代码**
*
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
*
* - 在正式版打开调试还有一种方法，就是先在开发版或体验版打开调试，再切到正式版就能看到vConsole。
*
* 最低基础库： `1.4.0` */
        setEnableDebug<T extends SetEnableDebugOption = SetEnableDebugOption>(
            option: T
        ): PromisifySuccessResult<T, SetEnableDebugOption>
        /** [wx.setInnerAudioOption(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.setInnerAudioOption.html)
         *
         * 设置 [InnerAudioContext](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.html) 的播放选项。设置之后对当前小程序全局生效。
         *
         * **注意**
         *
         *
         * 为保证微信整体体验，speakerOn 为 true 时，客户端会忽略 mixWithOthers 参数的内容，强制与其它音频互斥
         * 不支持在播放音频的过程中切换为扬声器播放，开发者如需切换可以先暂停当前播放的音频并记录下当前暂停的时间点，然后切换后重新从原来暂停的时间点开始播放音频
         *
         * 最低基础库： `2.3.0` */
        setInnerAudioOption<
            T extends SetInnerAudioOption = SetInnerAudioOption
        >(
            option: T
        ): PromisifySuccessResult<T, SetInnerAudioOption>
        /** [wx.setKeepScreenOn(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/screen/wx.setKeepScreenOn.html)
*
* 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。
*
* **示例代码**
*
*
* ```js
wx.setKeepScreenOn({
  keepScreenOn: true
})
```
*
* 最低基础库： `1.4.0` */
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
         * 设置屏幕亮度
         *
         * 最低基础库： `1.2.0` */
        setScreenBrightness<
            T extends SetScreenBrightnessOption = SetScreenBrightnessOption
        >(
            option: T
        ): PromisifySuccessResult<T, SetScreenBrightnessOption>
        /** [wx.setStatusBarStyle(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/statusbar/wx.setStatusBarStyle.html)
         *
         * 当在配置中设置 showStatusBarStyle 时，屏幕顶部会显示状态栏。此接口可以修改状态栏的样式。 */
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
*
* ```js
wx.setStorage({
  key:"key",
  data:"value"
})
```
* ```js
try {
  wx.setStorageSync('key', 'value')
} catch (e) { }
``` */
        setStorage<
            T = any,
            U extends SetStorageOption<T> = SetStorageOption<T>
        >(
            option: U
        ): PromisifySuccessResult<U, SetStorageOption<T>>
        /** [wx.setStorageSync(string key, any data)](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.setStorageSync.html)
*
* [wx.setStorage](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.setStorage.html) 的同步版本
*
* **示例代码**
*
*
* ```js
wx.setStorage({
  key:"key",
  data:"value"
})
```
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
         * 对用户托管数据进行写数据操作。允许同时写多组 KV 数据。
         *
         * **托管数据的限制**
         *
         *
         * 1. 每个openid所标识的微信用户在每个游戏上托管的数据不能超过128个key-value对。
         * 2. 上报的key-value列表当中每一项的key+value长度都不能超过1K(1024)字节。
         * 3. 上报的key-value列表当中每一个key长度都不能超过128字节。
         *
         * 最低基础库： `1.9.92` */
        setUserCloudStorage<
            T extends SetUserCloudStorageOption = SetUserCloudStorageOption
        >(
            option: T
        ): PromisifySuccessResult<T, SetUserCloudStorageOption>
        /** [wx.setWindowSize(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/window/wx.setWindowSize.html)
         *
         * 设置窗口大小，该接口仅适用于 PC 平台，使用细则请参见指南
         *
         * 最低基础库： `2.10.1`
         * @deprecated 基础库版本 [2.11.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起已废弃
         *  */
        setWindowSize(option: SetWindowSizeOption): void
        /** [wx.shareAppMessage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.shareAppMessage.html)
         *
         * 主动拉起转发，进入选择通讯录界面。 */
        shareAppMessage(option: ShareAppMessageOption): void
        /** [wx.shareMessageToFriend(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.shareMessageToFriend.html)
         *
         * 给指定的好友分享游戏信息，该接口只可在开放数据域下使用。接收者打开之后，可以用 `wx.modifyFriendInteractiveStorage` 传入参数 quiet=true 发起一次无需弹框确认的好友互动。
         *
         * ****
         *
         * 定向分享不允许直接在开放数据域设置 query 参数
         * 需要设置请参见游戏域 `wx.setMessageToFriendQuery` 接口
         *
         * 最低基础库： `2.9.0` */
        shareMessageToFriend(option: ShareMessageToFriendOption): void
        /** [wx.showActionSheet(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.showActionSheet.html)
*
* 显示操作菜单
*
* **示例代码**
*
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
*
* - Android 6.7.2 以下版本，点击取消或蒙层时，回调 fail, errMsg 为 "fail cancel"；
* - Android 6.7.2 及以上版本 和 iOS 点击蒙层不会关闭模态弹窗，所以尽量避免使用「取消」分支中实现业务逻辑 */
        showActionSheet<
            T extends ShowActionSheetOption = ShowActionSheetOption
        >(
            option: T
        ): PromisifySuccessResult<T, ShowActionSheetOption>
        /** [wx.showKeyboard(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/keyboard/wx.showKeyboard.html)
         *
         * 显示键盘 */
        showKeyboard<T extends ShowKeyboardOption = ShowKeyboardOption>(
            option: T
        ): PromisifySuccessResult<T, ShowKeyboardOption>
        /** [wx.showLoading(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.showLoading.html)
*
* 显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
*
* **示例代码**
*
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
*
* - [wx.showLoading](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.showLoading.html) 和 [wx.showToast](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.showToast.html) 同时只能显示一个
* - [wx.showLoading](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.showLoading.html) 应与 [wx.hideLoading](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.hideLoading.html) 配对使用
*
* 最低基础库： `1.1.0` */
        showLoading<T extends ShowLoadingOption = ShowLoadingOption>(
            option: T
        ): PromisifySuccessResult<T, ShowLoadingOption>
        /** [wx.showModal(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.showModal.html)
*
* 显示模态对话框
*
* **示例代码**
*
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
*
* - Android 6.7.2 以下版本，点击取消或蒙层时，回调 fail, errMsg 为 "fail cancel"；
* - Android 6.7.2 及以上版本 和 iOS 点击蒙层不会关闭模态弹窗，所以尽量避免使用「取消」分支中实现业务逻辑 */
        showModal<T extends ShowModalOption = ShowModalOption>(
            option: T
        ): PromisifySuccessResult<T, ShowModalOption>
        /** [wx.showShareImageMenu(Object object)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.showShareImageMenu.html)
         *
         * 打开分享图片弹窗
         *
         * 最低基础库： `2.14.3` */
        showShareImageMenu<
            T extends ShowShareImageMenuOption = ShowShareImageMenuOption
        >(
            option: T
        ): PromisifySuccessResult<T, ShowShareImageMenuOption>
        /** [wx.showShareMenu(Object object)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.showShareMenu.html)
*
* 显示当前页面的转发按钮
*
* ****
*
* ## 注意事项
*  - "shareAppMessage"表示“发送给朋友”按钮，"shareTimeline"表示“分享到朋友圈”按钮
*  - 显示“分享到朋友圈”按钮时必须同时显示“发送给朋友”按钮，显示“发送给朋友”按钮时则允许不显示“分享到朋友圈”按钮
*
* **示例代码**
*
*
* ```js
wx.showShareMenu({
  withShareTicket: true,
  menus: ['shareAppMessage', 'shareTimeline']
})
```
*
* 最低基础库： `1.1.0` */
        showShareMenu<T extends ShowShareMenuOption = ShowShareMenuOption>(
            option: T
        ): PromisifySuccessResult<T, ShowShareMenuOption>
        /** [wx.showToast(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.showToast.html)
*
* 显示消息提示框
*
* **示例代码**
*
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
*
* - [wx.showLoading](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.showLoading.html) 和 [wx.showToast](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.showToast.html) 同时只能显示一个
* - [wx.showToast](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.showToast.html) 应与 [wx.hideToast](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.hideToast.html) 配对使用 */
        showToast<T extends ShowToastOption = ShowToastOption>(
            option: T
        ): PromisifySuccessResult<T, ShowToastOption>
        /** [wx.startAccelerometer(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/accelerometer/wx.startAccelerometer.html)
*
* 开始监听加速度数据。
*
* **示例代码**
*
*
* ```js
wx.startAccelerometer({
  interval: 'game'
})
```
*
* **注意**
*
*
* - 根据机型性能、当前 CPU 与内存的占用情况，`interval` 的设置与实际 `wx.onAccelerometerChange()` 回调函数的执行频率会有一些出入。
*
* 最低基础库： `1.1.0` */
        startAccelerometer<
            T extends StartAccelerometerOption = StartAccelerometerOption
        >(
            option?: T
        ): PromisifySuccessResult<T, StartAccelerometerOption>
        /** [wx.startBeaconDiscovery(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.startBeaconDiscovery.html)
*
* 开始搜索附近的 iBeacon 设备
*
* **示例代码**
*
*
* ```js
wx.startBeaconDiscovery({
  success(res) { }
})
```
*
* 最低基础库： `2.9.2` */
        startBeaconDiscovery<
            T extends StartBeaconDiscoveryOption = StartBeaconDiscoveryOption
        >(
            option: T
        ): PromisifySuccessResult<T, StartBeaconDiscoveryOption>
        /** [wx.startBluetoothDevicesDiscovery(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.startBluetoothDevicesDiscovery.html)
*
* 开始搜寻附近的蓝牙外围设备。**此操作比较耗费系统资源，请在搜索并连接到设备后调用 [wx.stopBluetoothDevicesDiscovery](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.stopBluetoothDevicesDiscovery.html) 方法停止搜索。**
*
* **示例代码**
*
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
```
*
* 最低基础库： `2.9.2` */
        startBluetoothDevicesDiscovery<
            T extends StartBluetoothDevicesDiscoveryOption = StartBluetoothDevicesDiscoveryOption
        >(
            option: T
        ): PromisifySuccessResult<T, StartBluetoothDevicesDiscoveryOption>
        /** [wx.startCompass(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/compass/wx.startCompass.html)
*
* 开始监听罗盘数据
*
* **示例代码**
*
*
* ```js
wx.startCompass()
```
*
* 最低基础库： `1.1.0` */
        startCompass<T extends StartCompassOption = StartCompassOption>(
            option?: T
        ): PromisifySuccessResult<T, StartCompassOption>
        /** [wx.startDeviceMotionListening(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/motion/wx.startDeviceMotionListening.html)
         *
         * 开始监听设备方向的变化。
         *
         * 最低基础库： `2.3.0` */
        startDeviceMotionListening<
            T extends StartDeviceMotionListeningOption = StartDeviceMotionListeningOption
        >(
            option?: T
        ): PromisifySuccessResult<T, StartDeviceMotionListeningOption>
        /** [wx.startGyroscope(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/gyroscope/wx.startGyroscope.html)
         *
         * 开始监听陀螺仪数据。
         *
         * 最低基础库： `2.3.0` */
        startGyroscope<T extends StartGyroscopeOption = StartGyroscopeOption>(
            option?: T
        ): PromisifySuccessResult<T, StartGyroscopeOption>
        /** [wx.startHandoff(Object object)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.startHandoff.html)
         *
         * 开始进行接力，该接口需要在开放数据域调用
         *
         * 最低基础库： `2.14.4` */
        startHandoff(option?: StartHandoffOption): void
        /** [wx.stopAccelerometer(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/accelerometer/wx.stopAccelerometer.html)
*
* 停止监听加速度数据。
*
* **示例代码**
*
*
* ```js
wx.stopAccelerometer()
```
*
* 最低基础库： `1.1.0` */
        stopAccelerometer<
            T extends StopAccelerometerOption = StopAccelerometerOption
        >(
            option?: T
        ): PromisifySuccessResult<T, StopAccelerometerOption>
        /** [wx.stopBeaconDiscovery(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.stopBeaconDiscovery.html)
         *
         * 停止搜索附近的 iBeacon 设备
         *
         * 最低基础库： `2.9.2` */
        stopBeaconDiscovery<
            T extends StopBeaconDiscoveryOption = StopBeaconDiscoveryOption
        >(
            option?: T
        ): PromisifySuccessResult<T, StopBeaconDiscoveryOption>
        /** [wx.stopBluetoothDevicesDiscovery(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.stopBluetoothDevicesDiscovery.html)
*
* 停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索。
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
* ```js
wx.stopBluetoothDevicesDiscovery({
  success (res) {
    console.log(res)
  }
})
```
*
* 最低基础库： `2.9.2` */
        stopBluetoothDevicesDiscovery<
            T extends StopBluetoothDevicesDiscoveryOption = StopBluetoothDevicesDiscoveryOption
        >(
            option?: T
        ): PromisifySuccessResult<T, StopBluetoothDevicesDiscoveryOption>
        /** [wx.stopCompass(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/compass/wx.stopCompass.html)
*
* 停止监听罗盘数据
*
* **示例代码**
*
*
* ```js
wx.stopCompass()
```
*
* 最低基础库： `1.1.0` */
        stopCompass<T extends StopCompassOption = StopCompassOption>(
            option?: T
        ): PromisifySuccessResult<T, StopCompassOption>
        /** [wx.stopDeviceMotionListening(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/motion/wx.stopDeviceMotionListening.html)
         *
         * 停止监听设备方向的变化。
         *
         * 最低基础库： `2.3.0` */
        stopDeviceMotionListening<
            T extends StopDeviceMotionListeningOption = StopDeviceMotionListeningOption
        >(
            option?: T
        ): PromisifySuccessResult<T, StopDeviceMotionListeningOption>
        /** [wx.stopGyroscope(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/gyroscope/wx.stopGyroscope.html)
         *
         * 停止监听陀螺仪数据。
         *
         * 最低基础库： `2.3.0` */
        stopGyroscope<T extends StopGyroscopeOption = StopGyroscopeOption>(
            option?: T
        ): PromisifySuccessResult<T, StopGyroscopeOption>
        /** [wx.triggerGC()](https://developers.weixin.qq.com/minigame/dev/api/base/performance/wx.triggerGC.html)
         *
         * 加快触发 JavaScriptCore 垃圾回收（Garbage Collection）。GC 时机是由 JavaScriptCore 来控制的，并不能保证调用后马上触发 GC。 */
        triggerGC(): void
        /** [wx.updateKeyboard(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/keyboard/wx.updateKeyboard.html)
         *
         * 更新键盘输入框内容。只有当键盘处于拉起状态时才会产生效果
         *
         * 最低基础库： `2.1.0` */
        updateKeyboard<T extends UpdateKeyboardOption = UpdateKeyboardOption>(
            option: T
        ): PromisifySuccessResult<T, UpdateKeyboardOption>
        /** [wx.updateShareMenu(Object object)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.updateShareMenu.html)
*
* 更新转发属性
*
* **示例代码**
*
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
```
*
* 最低基础库： `1.2.0` */
        updateShareMenu<
            T extends UpdateShareMenuOption = UpdateShareMenuOption
        >(
            option: T
        ): PromisifySuccessResult<T, UpdateShareMenuOption>
        /** [wx.updateVoIPChatMuteConfig(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.updateVoIPChatMuteConfig.html)
         *
         * 更新实时语音静音设置
         *
         * 最低基础库： `2.7.0` */
        updateVoIPChatMuteConfig<
            T extends UpdateVoIPChatMuteConfigOption = UpdateVoIPChatMuteConfigOption
        >(
            option: T
        ): PromisifySuccessResult<T, UpdateVoIPChatMuteConfigOption>
        /** [wx.updateWeChatApp(Object object)](https://developers.weixin.qq.com/minigame/dev/api/base/update/wx.updateWeChatApp.html)
         *
         * 更新客户端版本。当判断用户小程序所在客户端版本过低时，可使用该接口跳转到更新微信页面。
         *
         * 最低基础库： `2.12.0` */
        updateWeChatApp<
            T extends UpdateWeChatAppOption = UpdateWeChatAppOption
        >(
            option?: T
        ): PromisifySuccessResult<T, UpdateWeChatAppOption>
        /** [wx.vibrateLong(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/vibrate/wx.vibrateLong.html)
         *
         * 使手机发生较长时间的振动（400 ms)
         *
         * 最低基础库： `1.2.0` */
        vibrateLong<T extends VibrateLongOption = VibrateLongOption>(
            option?: T
        ): PromisifySuccessResult<T, VibrateLongOption>
        /** [wx.vibrateShort(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/vibrate/wx.vibrateShort.html)
         *
         * 使手机发生较短时间的振动（15 ms）。仅在 iPhone `7 / 7 Plus` 以上及 Android 机型生效
         *
         * 最低基础库： `1.2.0` */
        vibrateShort<T extends VibrateShortOption = VibrateShortOption>(
            option: T
        ): PromisifySuccessResult<T, VibrateShortOption>
        /** [wx.writeBLECharacteristicValue(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.writeBLECharacteristicValue.html)
*
* 向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持 write 才可以成功调用。
*
* **注意**
*
*
* - 并行调用多次会存在写失败的可能性。
* - 小程序不会对写入数据包大小做限制，但系统与蓝牙设备会限制蓝牙4.0单次传输的数据大小，超过最大字节数后会发生写入错误，建议每次写入不超过20字节。
* - 若单次写入数据过长，iOS 上存在系统不会有任何回调的情况（包括错误回调）。
* - 安卓平台上，在调用 `notifyBLECharacteristicValueChange` 成功后立即调用 `writeBLECharacteristicValue` 接口，在部分机型上会发生 10008 系统错误
*
* **示例代码**
*
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
```
*
* 最低基础库： `2.9.2` */
        writeBLECharacteristicValue<
            T extends WriteBLECharacteristicValueOption = WriteBLECharacteristicValueOption
        >(
            option: T
        ): PromisifySuccessResult<T, WriteBLECharacteristicValueOption>
    }

    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AccessCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type AccessFailCallback = (result: AccessFailCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type AccessSuccessCallback = (res: GeneralCallbackResult) => void
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
    type AppendFileCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type AppendFileFailCallback = (result: AppendFileFailCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type AppendFileSuccessCallback = (res: GeneralCallbackResult) => void
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
    type BannerAdOffErrorCallback = (
        result: BannerAdOnErrorCallbackResult
    ) => void
    type BannerAdOffResizeCallback = (result: OnResizeCallbackResult) => void
    type BannerAdOnErrorCallback = (
        result: BannerAdOnErrorCallbackResult
    ) => void
    type BannerAdOnResizeCallback = (result: OnResizeCallbackResult) => void
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
    type CheckIsUserAdvisedToRestCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type CheckIsUserAdvisedToRestFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type CheckIsUserAdvisedToRestSuccessCallback = (
        result: CheckIsUserAdvisedToRestSuccessCallbackResult
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
    type CloseCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type CloseFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CloseSocketCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type CloseSocketFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type CloseSocketSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type CloseSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ConnectSocketCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ConnectSocketFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ConnectSocketSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CopyFileCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type CopyFileFailCallback = (result: CopyFileFailCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type CopyFileSuccessCallback = (res: GeneralCallbackResult) => void
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
    /** 原生模板广告错误事件的回调函数 */
    type CustomAdOffErrorCallback = (
        result: CustomAdOnErrorCallbackResult
    ) => void
    /** 原生模板广告错误事件的回调函数 */
    type CustomAdOnErrorCallback = (
        result: CustomAdOnErrorCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type DownloadFileCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type DownloadFileFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type DownloadFileSuccessCallback = (
        result: DownloadFileSuccessCallbackResult
    ) => void
    /** 下载进度变化事件的回调函数 */
    type DownloadTaskOffProgressUpdateCallback = (
        result: DownloadTaskOnProgressUpdateCallbackResult
    ) => void
    /** 下载进度变化事件的回调函数 */
    type DownloadTaskOnProgressUpdateCallback = (
        result: DownloadTaskOnProgressUpdateCallbackResult
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
    /** 接口调用失败的回调函数 */
    type FileSystemManagerGetFileInfoFailCallback = (
        result: GetFileInfoFailCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type FileSystemManagerGetFileInfoSuccessCallback = (
        result: FileSystemManagerGetFileInfoSuccessCallbackResult
    ) => void
    type GameBannerOffErrorCallback = (
        result: GameBannerOnErrorCallbackResult
    ) => void
    type GameBannerOffResizeCallback = (res: GeneralCallbackResult) => void
    type GameBannerOnErrorCallback = (
        result: GameBannerOnErrorCallbackResult
    ) => void
    type GameBannerOnResizeCallback = (res: GeneralCallbackResult) => void
    type GameClubButtonOffTapCallback = (res: GeneralCallbackResult) => void
    type GameClubButtonOnTapCallback = (res: GeneralCallbackResult) => void
    /** 小游戏推荐弹窗组件加载错误事件的回调函数 */
    type GamePortalOffErrorCallback = (
        result: GamePortalOnErrorCallbackResult
    ) => void
    /** 小游戏推荐弹窗组件加载错误事件的回调函数 */
    type GamePortalOnErrorCallback = (
        result: GamePortalOnErrorCallbackResult
    ) => void
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
    type GetBatteryInfoCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetBatteryInfoFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetBatteryInfoSuccessCallback = (
        result: GetBatteryInfoSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBeaconsCompleteCallback = (res: IBeaconError) => void
    /** 接口调用失败的回调函数 */
    type GetBeaconsFailCallback = (res: IBeaconError) => void
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
    type GetExtConfigCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetExtConfigFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetExtConfigSuccessCallback = (
        result: GetExtConfigSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetFileInfoCompleteCallback = (res: GeneralCallbackResult) => void
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
    type GetFriendsStateDataSuccessCallback = (result: Res) => void
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
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type GetGroupEnterInfoFailCallback = (res: GeneralCallbackResult) => void
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
    type GetLastRoomInfoCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetLastRoomInfoFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetLastRoomInfoSuccessCallback = (
        result: GetLastRoomInfoSuccessCallbackResult
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
        result: GetUserInteractiveStorageSuccessCallbackResult,
        /** 加密算法的初始向量，详见 [用户数据的签名验证和加解密]((signature#加密数据解密算法)) */
        iv: string
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetUserProfileCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetUserProfileFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetUserProfileSuccessCallback = (
        result: GetUserProfileSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetWeRunDataCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetWeRunDataFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetWeRunDataSuccessCallback = (
        result: GetWeRunDataSuccessCallbackResult
    ) => void
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
    /** 音频播放错误事件的回调函数 */
    type InnerAudioContextOffErrorCallback = (
        result: InnerAudioContextOnErrorCallbackResult
    ) => void
    /** 音频播放进度更新事件的回调函数 */
    type InnerAudioContextOffTimeUpdateCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 音频播放错误事件的回调函数 */
    type InnerAudioContextOnErrorCallback = (
        result: InnerAudioContextOnErrorCallbackResult
    ) => void
    /** 音频停止事件的回调函数 */
    type InnerAudioContextOnStopCallback = (res: GeneralCallbackResult) => void
    /** 音频播放进度更新事件的回调函数 */
    type InnerAudioContextOnTimeUpdateCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 插屏错误事件的回调函数 */
    type InterstitialAdOffErrorCallback = (
        result: InterstitialAdOnErrorCallbackResult
    ) => void
    /** 插屏错误事件的回调函数 */
    type InterstitialAdOnErrorCallback = (
        result: InterstitialAdOnErrorCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type InviteFriendCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type InviteFriendFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type InviteFriendSuccessCallback = (res: GeneralCallbackResult) => void
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
    /** 分包加载进度变化事件的回调函数 */
    type LoadSubpackageTaskOnProgressUpdateCallback = (
        result: LoadSubpackageTaskOnProgressUpdateCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type LoginCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type LoginFailCallback = (res: GeneralCallbackResult) => void
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
    type MkdirCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type MkdirFailCallback = (result: MkdirFailCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type MkdirSuccessCallback = (res: GeneralCallbackResult) => void
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
    /** 用户点击菜单「收藏」按钮时触发的事件的回调函数 */
    type OffAddToFavoritesCallback = (
        result: OnAddToFavoritesCallbackResult
    ) => void
    /** 音频因为受到系统占用而被中断开始事件的回调函数 */
    type OffAudioInterruptionBeginCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 音频中断结束事件的回调函数 */
    type OffAudioInterruptionEndCallback = (res: GeneralCallbackResult) => void
    /** 当前外围设备被连接或断开连接事件的回调函数 */
    type OffBLEPeripheralConnectionStateChangedCallback = (
        result: OnBLEPeripheralConnectionStateChangedCallbackResult
    ) => void
    /** 的回调函数 */
    type OffBeKickedOutCallback = (result: OnBeKickedOutCallbackResult) => void
    /** iBeacon 服务状态变化事件的回调函数 */
    type OffBeaconServiceChangeCallback = (res: GeneralCallbackResult) => void
    /** iBeacon 设备更新事件的回调函数 */
    type OffBeaconUpdateCallback = (res: GeneralCallbackResult) => void
    /** 的回调函数 */
    type OffBroadcastCallback = (result: OnBroadcastCallbackResult) => void
    /** 音频进入可以播放状态的事件的回调函数 */
    type OffCanplayCallback = (res: GeneralCallbackResult) => void
    /** 已连接的设备请求读当前外围设备的特征值事件的回调函数 */
    type OffCharacteristicReadRequestCallback = (
        result: OnCharacteristicReadRequestCallbackResult
    ) => void
    /** 特征值订阅事件的回调函数 */
    type OffCharacteristicSubscribedCallback = (
        result: OnCharacteristicSubscribedCallbackResult
    ) => void
    /** 取消特征值订阅事件的回调函数 */
    type OffCharacteristicUnsubscribedCallback = (
        result: OnCharacteristicSubscribedCallbackResult
    ) => void
    /** 已连接的设备请求写当前外围设备的特征值事件的回调函数 */
    type OffCharacteristicWriteRequestCallback = (
        result: OnCharacteristicWriteRequestCallbackResult
    ) => void
    /** 用户点击右上角菜单的「复制链接」按钮时触发的事件的回调函数 */
    type OffCopyUrlCallback = (result: OnCopyUrlCallbackResult) => void
    /** 横竖屏切换事件的回调函数 */
    type OffDeviceOrientationChangeCallback = (
        result: OnDeviceOrientationChangeCallbackResult
    ) => void
    /** 断开连接，收到此事件的回调函数 */
    type OffDisconnectCallback = (
        result: GameServerManagerOnDisconnectCallbackResult
    ) => void
    type OffEndedCallback = (res: GeneralCallbackResult) => void
    /** 的回调函数 */
    type OffGameEndCallback = (result: OnGameEndCallbackResult) => void
    /** 的回调函数 */
    type OffGameStartCallback = (res: GeneralCallbackResult) => void
    /** 用户点击菜单「在电脑上打开」按钮时触发的事件的回调函数 */
    type OffHandoffCallback = (result: OnHandoffCallbackResult) => void
    /** HTTP Response Header 事件的回调函数 */
    type OffHeadersReceivedCallback = (
        result: OnHeadersReceivedCallbackResult
    ) => void
    type OffHideCallback = (res: GeneralCallbackResult) => void
    /** 接收邀请，当用户确认邀请之后会收到此事件的回调函数 */
    type OffInviteCallback = (result: OnInviteCallbackResult) => void
    /** 键盘按键按下事件的回调函数 */
    type OffKeyDownCallback = (result: OnKeyDownCallbackResult) => void
    /** 键盘按键弹起事件的回调函数 */
    type OffKeyUpCallback = (result: OnKeyDownCallbackResult) => void
    /** 监听键盘收起的事件的回调函数 */
    type OffKeyboardCompleteCallback = (
        result: OnKeyboardConfirmCallbackResult
    ) => void
    /** 用户点击键盘 Confirm 按钮时的事件的回调函数 */
    type OffKeyboardConfirmCallback = (
        result: OnKeyboardConfirmCallbackResult
    ) => void
    /** 键盘输入事件的回调函数 */
    type OffKeyboardInputCallback = (
        result: OnKeyboardInputCallbackResult
    ) => void
    /** 开始监听数据包消息的事件的回调函数 */
    type OffListeningCallback = (res: GeneralCallbackResult) => void
    type OffLoadCallback = (res: GeneralCallbackResult) => void
    /** 的回调函数 */
    type OffLockStepErrorCallback = (
        result: OnLockStepErrorCallbackResult
    ) => void
    /** 用户登出游戏服务事件的回调函数 */
    type OffLogoutCallback = (res: GeneralCallbackResult) => void
    /** 游戏匹配成功的事件的回调函数 */
    type OffMatchCallback = (
        result: GameServerManagerOnMatchCallbackResult
    ) => void
    /** 收到消息的事件的回调函数 */
    type OffMessageCallback = (result: UDPSocketOnMessageCallbackResult) => void
    /** 鼠标按键按下事件的回调函数 */
    type OffMouseDownCallback = (result: OnMouseDownCallbackResult) => void
    /** 鼠标移动事件的回调函数 */
    type OffMouseMoveCallback = (result: OnMouseMoveCallbackResult) => void
    /** 鼠标按键弹起事件的回调函数 */
    type OffMouseUpCallback = (result: OnMouseDownCallbackResult) => void
    type OffPauseCallback = (res: GeneralCallbackResult) => void
    type OffPlayCallback = (res: GeneralCallbackResult) => void
    /** 视频下载（缓冲）事件的回调函数 */
    type OffProgressCallback = (result: OnProgressCallbackResult) => void
    /** 的回调函数 */
    type OffRoomInfoChangeCallback = (
        result: GameServerManagerOnRoomInfoChangeCallbackResult
    ) => void
    /** 音频完成跳转操作的事件的回调函数 */
    type OffSeekedCallback = (res: GeneralCallbackResult) => void
    /** 音频进行跳转操作的事件的回调函数 */
    type OffSeekingCallback = (res: GeneralCallbackResult) => void
    /** 用户点击右上角菜单的「转发」按钮时触发的事件的回调函数 */
    type OffShareAppMessageCallback = (
        result: OnShareAppMessageCallbackResult
    ) => void
    /** 用户点击右上角菜单的「分享到朋友圈」按钮时触发的事件的回调函数 */
    type OffShareTimelineCallback = (
        result: OnShareTimelineCallbackResult
    ) => void
    /** 小游戏回到前台的事件的回调函数 */
    type OffShowCallback = (result: OnShowCallbackResult) => void
    /** 的回调函数 */
    type OffStateUpdateCallback = (
        result: GameServerManagerOnStateUpdateCallbackResult
    ) => void
    /** 音频停止事件的回调函数 */
    type OffStopCallback = (res: GeneralCallbackResult) => void
    /** 的回调函数 */
    type OffSyncFrameCallback = (result: OnSyncFrameCallbackResult) => void
    /** 触点失效事件的回调函数 */
    type OffTouchCancelCallback = (result: OnTouchStartCallbackResult) => void
    /** 触摸结束事件的回调函数 */
    type OffTouchEndCallback = (result: OnTouchStartCallbackResult) => void
    /** 触点移动事件的回调函数 */
    type OffTouchMoveCallback = (result: OnTouchStartCallbackResult) => void
    /** 开始触摸事件的回调函数 */
    type OffTouchStartCallback = (result: OnTouchStartCallbackResult) => void
    /** 未处理的 Promise 拒绝事件的回调函数 */
    type OffUnhandledRejectionCallback = (
        result: OnUnhandledRejectionCallbackResult
    ) => void
    type OffWaitingCallback = (res: GeneralCallbackResult) => void
    /** 鼠标滚轮事件的回调函数 */
    type OffWheelCallback = (result: OnWheelCallbackResult) => void
    /** 窗口尺寸变化事件的回调函数 */
    type OffWindowResizeCallback = (
        result: OnWindowResizeCallbackResult
    ) => void
    /** 加速度数据事件的回调函数 */
    type OnAccelerometerChangeCallback = (
        result: OnAccelerometerChangeCallbackResult
    ) => void
    /** 用户点击菜单「收藏」按钮时触发的事件的回调函数 */
    type OnAddToFavoritesCallback = (
        result: OnAddToFavoritesCallbackResult
    ) => void
    /** 音频因为受到系统占用而被中断开始事件的回调函数 */
    type OnAudioInterruptionBeginCallback = (res: GeneralCallbackResult) => void
    /** 音频中断结束事件的回调函数 */
    type OnAudioInterruptionEndCallback = (res: GeneralCallbackResult) => void
    /** 低功耗蓝牙设备的特征值变化事件的回调函数 */
    type OnBLECharacteristicValueChangeCallback = (
        result: OnBLECharacteristicValueChangeCallbackResult
    ) => void
    /** 低功耗蓝牙连接状态的改变事件的回调函数 */
    type OnBLEConnectionStateChangeCallback = (
        result: OnBLEConnectionStateChangeCallbackResult
    ) => void
    /** 当前外围设备被连接或断开连接事件的回调函数 */
    type OnBLEPeripheralConnectionStateChangedCallback = (
        result: OnBLEPeripheralConnectionStateChangedCallbackResult
    ) => void
    /** 的回调函数 */
    type OnBeKickedOutCallback = (result: OnBeKickedOutCallbackResult) => void
    /** iBeacon 服务状态变化事件的回调函数 */
    type OnBeaconServiceChangeCallback = (
        result: OnBeaconServiceChangeCallbackResult
    ) => void
    /** iBeacon 设备更新事件的回调函数 */
    type OnBeaconUpdateCallback = (result: OnBeaconUpdateCallbackResult) => void
    /** 蓝牙适配器状态变化事件的回调函数 */
    type OnBluetoothAdapterStateChangeCallback = (
        result: OnBluetoothAdapterStateChangeCallbackResult
    ) => void
    /** 寻找到新设备的事件的回调函数 */
    type OnBluetoothDeviceFoundCallback = (
        result: OnBluetoothDeviceFoundCallbackResult
    ) => void
    /** 的回调函数 */
    type OnBroadcastCallback = (result: OnBroadcastCallbackResult) => void
    /** 摄像头返回实时帧数据的回调函数 */
    type OnCameraFrameCallback = (result: OnCameraFrameCallbackResult) => void
    /** 音频进入可以播放状态的事件的回调函数 */
    type OnCanplayCallback = (res: GeneralCallbackResult) => void
    /** 已连接的设备请求读当前外围设备的特征值事件的回调函数 */
    type OnCharacteristicReadRequestCallback = (
        result: OnCharacteristicReadRequestCallbackResult
    ) => void
    /** 特征值订阅事件的回调函数 */
    type OnCharacteristicSubscribedCallback = (
        result: OnCharacteristicSubscribedCallbackResult
    ) => void
    /** 取消特征值订阅事件的回调函数 */
    type OnCharacteristicUnsubscribedCallback = (
        result: OnCharacteristicSubscribedCallbackResult
    ) => void
    /** 已连接的设备请求写当前外围设备的特征值事件的回调函数 */
    type OnCharacteristicWriteRequestCallback = (
        result: OnCharacteristicWriteRequestCallbackResult
    ) => void
    /** 向微信后台请求检查更新结果事件的回调函数 */
    type OnCheckForUpdateCallback = (
        result: OnCheckForUpdateCallbackResult
    ) => void
    /** 罗盘数据变化事件的回调函数 */
    type OnCompassChangeCallback = (
        result: OnCompassChangeCallbackResult
    ) => void
    /** 用户点击右上角菜单的「复制链接」按钮时触发的事件的回调函数 */
    type OnCopyUrlCallback = (result: OnCopyUrlCallbackResult) => void
    /** 设备方向变化事件的回调函数 */
    type OnDeviceMotionChangeCallback = (
        result: OnDeviceMotionChangeCallbackResult
    ) => void
    /** 横竖屏切换事件的回调函数 */
    type OnDeviceOrientationChangeCallback = (
        result: OnDeviceOrientationChangeCallbackResult
    ) => void
    /** 断开连接，收到此事件的回调函数 */
    type OnDisconnectCallback = (
        result: GameServerManagerOnDisconnectCallbackResult
    ) => void
    type OnEndedCallback = (res: GeneralCallbackResult) => void
    /** 已录制完指定帧大小的文件事件的回调函数 */
    type OnFrameRecordedCallback = (
        result: OnFrameRecordedCallbackResult
    ) => void
    /** 的回调函数 */
    type OnGameEndCallback = (result: OnGameEndCallbackResult) => void
    /** 的回调函数 */
    type OnGameStartCallback = (res: GeneralCallbackResult) => void
    /** 陀螺仪数据变化事件的回调函数 */
    type OnGyroscopeChangeCallback = (
        result: OnGyroscopeChangeCallbackResult
    ) => void
    /** 用户点击菜单「在电脑上打开」按钮时触发的事件的回调函数 */
    type OnHandoffCallback = (result: OnHandoffCallbackResult) => void
    /** HTTP Response Header 事件的回调函数 */
    type OnHeadersReceivedCallback = (
        result: OnHeadersReceivedCallbackResult
    ) => void
    type OnHideCallback = (res: GeneralCallbackResult) => void
    /** 录音因为受到系统占用而被中断开始事件的回调函数 */
    type OnInterruptionBeginCallback = (res: GeneralCallbackResult) => void
    /** 录音中断结束事件的回调函数 */
    type OnInterruptionEndCallback = (res: GeneralCallbackResult) => void
    /** 接收邀请，当用户确认邀请之后会收到此事件的回调函数 */
    type OnInviteCallback = (result: OnInviteCallbackResult) => void
    /** 键盘按键按下事件的回调函数 */
    type OnKeyDownCallback = (result: OnKeyDownCallbackResult) => void
    /** 键盘按键弹起事件的回调函数 */
    type OnKeyUpCallback = (result: OnKeyDownCallbackResult) => void
    /** 监听键盘收起的事件的回调函数 */
    type OnKeyboardCompleteCallback = (
        result: OnKeyboardConfirmCallbackResult
    ) => void
    /** 用户点击键盘 Confirm 按钮时的事件的回调函数 */
    type OnKeyboardConfirmCallback = (
        result: OnKeyboardConfirmCallbackResult
    ) => void
    /** 键盘输入事件的回调函数 */
    type OnKeyboardInputCallback = (
        result: OnKeyboardInputCallbackResult
    ) => void
    /** 开始监听数据包消息的事件的回调函数 */
    type OnListeningCallback = (res: GeneralCallbackResult) => void
    type OnLoadCallback = (res: GeneralCallbackResult) => void
    /** 的回调函数 */
    type OnLockStepErrorCallback = (
        result: OnLockStepErrorCallbackResult
    ) => void
    /** 用户登出游戏服务事件的回调函数 */
    type OnLogoutCallback = (res: GeneralCallbackResult) => void
    /** 游戏匹配成功的事件的回调函数 */
    type OnMatchCallback = (
        result: GameServerManagerOnMatchCallbackResult
    ) => void
    /** 内存不足告警事件的回调函数 */
    type OnMemoryWarningCallback = (
        result: OnMemoryWarningCallbackResult
    ) => void
    /** 鼠标按键按下事件的回调函数 */
    type OnMouseDownCallback = (result: OnMouseDownCallbackResult) => void
    /** 鼠标移动事件的回调函数 */
    type OnMouseMoveCallback = (result: OnMouseMoveCallbackResult) => void
    /** 鼠标按键弹起事件的回调函数 */
    type OnMouseUpCallback = (result: OnMouseDownCallbackResult) => void
    /** 网络状态变化事件的回调函数 */
    type OnNetworkStatusChangeCallback = (
        result: OnNetworkStatusChangeCallbackResult
    ) => void
    /** WebSocket 连接打开事件的回调函数 */
    type OnOpenCallback = (result: OnOpenCallbackResult) => void
    type OnPauseCallback = (res: GeneralCallbackResult) => void
    type OnPlayCallback = (res: GeneralCallbackResult) => void
    /** worker进程被系统回收事件的回调函数 */
    type OnProcessKilledCallback = (res: GeneralCallbackResult) => void
    /** 视频下载（缓冲）事件的回调函数 */
    type OnProgressCallback = (result: OnProgressCallbackResult) => void
    /** 录音继续事件的回调函数 */
    type OnResumeCallback = (res: GeneralCallbackResult) => void
    /** 的回调函数 */
    type OnRoomInfoChangeCallback = (
        result: GameServerManagerOnRoomInfoChangeCallbackResult
    ) => void
    /** 音频完成跳转操作的事件的回调函数 */
    type OnSeekedCallback = (res: GeneralCallbackResult) => void
    /** 音频进行跳转操作的事件的回调函数 */
    type OnSeekingCallback = (res: GeneralCallbackResult) => void
    /** 用户点击右上角菜单的「转发」按钮时触发的事件的回调函数 */
    type OnShareAppMessageCallback = (
        result: OnShareAppMessageCallbackResult
    ) => void
    /** 的回调函数 */
    type OnShareMessageToFriendCallback = (
        result: OnShareMessageToFriendCallbackResult
    ) => void
    /** 用户点击右上角菜单的「分享到朋友圈」按钮时触发的事件的回调函数 */
    type OnShareTimelineCallback = (
        result: OnShareTimelineCallbackResult
    ) => void
    /** 小游戏回到前台的事件的回调函数 */
    type OnShowCallback = (result: OnShowCallbackResult) => void
    /** WebSocket 连接关闭事件的回调函数 */
    type OnSocketCloseCallback = (
        result: SocketTaskOnCloseCallbackResult
    ) => void
    /** WebSocket 错误事件的回调函数 */
    type OnSocketErrorCallback = (
        result: UDPSocketOnErrorCallbackResult
    ) => void
    /** WebSocket 接受到服务器的消息事件的回调函数 */
    type OnSocketMessageCallback = (
        result: SocketTaskOnMessageCallbackResult
    ) => void
    /** WebSocket 连接打开事件的回调函数 */
    type OnSocketOpenCallback = (result: OnSocketOpenCallbackResult) => void
    /** 录音开始事件的回调函数 */
    type OnStartCallback = (res: GeneralCallbackResult) => void
    /** 的回调函数 */
    type OnStateUpdateCallback = (
        result: GameServerManagerOnStateUpdateCallbackResult
    ) => void
    /** 的回调函数 */
    type OnSyncFrameCallback = (result: OnSyncFrameCallbackResult) => void
    /** 触点失效事件的回调函数 */
    type OnTouchCancelCallback = (result: OnTouchStartCallbackResult) => void
    /** 触摸结束事件的回调函数 */
    type OnTouchEndCallback = (result: OnTouchStartCallbackResult) => void
    /** 触点移动事件的回调函数 */
    type OnTouchMoveCallback = (result: OnTouchStartCallbackResult) => void
    /** 开始触摸事件的回调函数 */
    type OnTouchStartCallback = (result: OnTouchStartCallbackResult) => void
    /** 未处理的 Promise 拒绝事件的回调函数 */
    type OnUnhandledRejectionCallback = (
        result: OnUnhandledRejectionCallbackResult
    ) => void
    /** 小程序更新失败事件的回调函数 */
    type OnUpdateFailedCallback = (res: GeneralCallbackResult) => void
    /** 小程序有版本更新事件的回调函数 */
    type OnUpdateReadyCallback = (res: GeneralCallbackResult) => void
    /** 用户主动截屏事件的回调函数 */
    type OnUserCaptureScreenCallback = (res: GeneralCallbackResult) => void
    /** 被动断开实时语音通话事件的回调函数 */
    type OnVoIPChatInterruptedCallback = (
        result: OnVoIPChatInterruptedCallbackResult
    ) => void
    /** 实时语音通话成员在线状态变化事件的回调函数 */
    type OnVoIPChatMembersChangedCallback = (
        result: OnVoIPChatMembersChangedCallbackResult
    ) => void
    /** 实时语音通话成员通话状态变化事件的回调函数 */
    type OnVoIPChatSpeakersChangedCallback = (
        result: OnVoIPChatSpeakersChangedCallbackResult
    ) => void
    type OnWaitingCallback = (res: GeneralCallbackResult) => void
    /** 鼠标滚轮事件的回调函数 */
    type OnWheelCallback = (result: OnWheelCallbackResult) => void
    /** 窗口尺寸变化事件的回调函数 */
    type OnWindowResizeCallback = (result: OnWindowResizeCallbackResult) => void
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
    type OpenCustomerServiceConversationCompleteCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用失败的回调函数 */
    type OpenCustomerServiceConversationFailCallback = (
        res: GeneralCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type OpenCustomerServiceConversationSuccessCallback = (
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
    type ReadFileCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ReadFileFailCallback = (result: ReadFileFailCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ReadFileSuccessCallback = (
        result: ReadFileSuccessCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ReaddirCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ReaddirFailCallback = (result: ReaddirFailCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ReaddirSuccessCallback = (result: ReaddirSuccessCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ReconnectCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ReconnectFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ReconnectSuccessCallback = (
        result: ReconnectSuccessCallbackResult
    ) => void
    /** 录音结束事件的回调函数 */
    type RecorderManagerOnStopCallback = (result: OnStopCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RemoveSavedFileCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type RemoveSavedFileFailCallback = (
        result: RemoveSavedFileFailCallbackResult
    ) => void
    /** 接口调用成功的回调函数 */
    type RemoveSavedFileSuccessCallback = (res: GeneralCallbackResult) => void
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
    type RenameCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type RenameFailCallback = (result: RenameFailCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type RenameSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RequestCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type RequestFailCallback = (res: GeneralCallbackResult) => void
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
        res: MidasFriendPaymentError
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RequestMidasPaymentCompleteCallback = (res: MidasPaymentError) => void
    /** 接口调用失败的回调函数 */
    type RequestMidasPaymentFailCallback = (res: MidasPaymentError) => void
    /** 接口调用成功的回调函数 */
    type RequestMidasPaymentSuccessCallback = (res: MidasPaymentError) => void
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
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RestartCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type RestartFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type RestartSuccessCallback = (res: GeneralCallbackResult) => void
    /** 用户点击 `关闭广告` 按钮的事件的回调函数 */
    type RewardedVideoAdOffCloseCallback = (
        result: RewardedVideoAdOnCloseCallbackResult
    ) => void
    /** 用户点击 `关闭广告` 按钮的事件的回调函数 */
    type RewardedVideoAdOnCloseCallback = (
        result: RewardedVideoAdOnCloseCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RmdirCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type RmdirFailCallback = (result: RmdirFailCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type RmdirSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SaveFileCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type SaveFileFailCallback = (result: SaveFileFailCallbackResult) => void
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
    type SetBLEMTUFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SetBLEMTUSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetClipboardDataCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type SetClipboardDataFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SetClipboardDataSuccessCallback = (res: GeneralCallbackResult) => void
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
    /** WebSocket 连接关闭事件的回调函数 */
    type SocketTaskOnCloseCallback = (
        result: SocketTaskOnCloseCallbackResult
    ) => void
    /** WebSocket 接受到服务器的消息事件的回调函数 */
    type SocketTaskOnMessageCallback = (
        result: SocketTaskOnMessageCallbackResult
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
    type StartBeaconDiscoveryCompleteCallback = (res: IBeaconError) => void
    /** 接口调用失败的回调函数 */
    type StartBeaconDiscoveryFailCallback = (res: IBeaconError) => void
    /** 接口调用成功的回调函数 */
    type StartBeaconDiscoverySuccessCallback = (res: IBeaconError) => void
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
    type StatCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type StatFailCallback = (result: StatFailCallbackResult) => void
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
    type StopBeaconDiscoveryCompleteCallback = (res: IBeaconError) => void
    /** 接口调用失败的回调函数 */
    type StopBeaconDiscoveryFailCallback = (res: IBeaconError) => void
    /** 接口调用成功的回调函数 */
    type StopBeaconDiscoverySuccessCallback = (res: IBeaconError) => void
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
    type StopGyroscopeCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type StopGyroscopeFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type StopGyroscopeSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ToTempFilePathCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ToTempFilePathFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ToTempFilePathSuccessCallback = (
        result: ToTempFilePathSuccessCallbackResult
    ) => void
    type UDPSocketOffCloseCallback = (res: GeneralCallbackResult) => void
    /** 错误事件的回调函数 */
    type UDPSocketOffErrorCallback = (
        result: UDPSocketOnErrorCallbackResult
    ) => void
    type UDPSocketOnCloseCallback = (res: GeneralCallbackResult) => void
    type UDPSocketOnErrorCallback = (
        result: UDPSocketOnErrorCallbackResult
    ) => void
    /** 收到消息的事件的回调函数 */
    type UDPSocketOnMessageCallback = (
        result: UDPSocketOnMessageCallbackResult
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type UnlinkCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type UnlinkFailCallback = (result: UnlinkFailCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type UnlinkSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type UnzipCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type UnzipFailCallback = (result: UnzipFailCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type UnzipSuccessCallback = (res: GeneralCallbackResult) => void
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
    /** 上传进度变化事件的回调函数 */
    type UploadTaskOffProgressUpdateCallback = (
        result: UploadTaskOnProgressUpdateCallbackResult
    ) => void
    /** 上传进度变化事件的回调函数 */
    type UploadTaskOnProgressUpdateCallback = (
        result: UploadTaskOnProgressUpdateCallbackResult
    ) => void
    /** 用户信息按钮的点击事件的回调函数 */
    type UserInfoButtonOffTapCallback = (result: OnTapCallbackResult) => void
    /** 用户信息按钮的点击事件的回调函数 */
    type UserInfoButtonOnTapCallback = (result: OnTapCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type VibrateLongCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type VibrateLongFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type VibrateLongSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type VibrateShortCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type VibrateShortFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type VibrateShortSuccessCallback = (res: GeneralCallbackResult) => void
    /** 视频错误事件的回调函数 */
    type VideoOffErrorCallback = (result: VideoOnErrorCallbackResult) => void
    /** 视频播放进度更新事件的回调函数 */
    type VideoOffTimeUpdateCallback = (
        result: OnTimeUpdateCallbackResult
    ) => void
    /** 视频错误事件的回调函数 */
    type VideoOnErrorCallback = (result: VideoOnErrorCallbackResult) => void
    /** 视频播放进度更新事件的回调函数 */
    type VideoOnTimeUpdateCallback = (
        result: OnTimeUpdateCallbackResult
    ) => void
    /** 主线程/Worker 线程向当前线程发送的消息的事件的回调函数 */
    type WorkerOnMessageCallback = (
        result: WorkerOnMessageCallbackResult
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
    type WriteFileCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type WriteFileFailCallback = (result: WriteFileFailCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type WriteFileSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type WxGetFileInfoFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type WxGetFileInfoSuccessCallback = (
        result: WxGetFileInfoSuccessCallbackResult
    ) => void
    /** 全局错误事件的回调函数 */
    type WxOffErrorCallback = (result: WxOnErrorCallbackResult) => void
    /** 全局错误事件的回调函数 */
    type WxOnErrorCallback = (result: WxOnErrorCallbackResult) => void
}

/** [cancelAnimationFrame(number requestID)](https://developers.weixin.qq.com/minigame/dev/api/render/frame/cancelAnimationFrame.html)
 *
 * 取消由 requestAnimationFrame 添加到计划中的动画帧请求 */
declare function cancelAnimationFrame(requestID: number): void
/** [clearInterval(number intervalID)](https://developers.weixin.qq.com/minigame/dev/api/base/timer/clearInterval.html)
 *
 * 取消由 setInterval 设置的定时器。 */
declare function clearInterval(
    /** 要取消的定时器的 ID */
    intervalID: number
): void
/** [clearTimeout(number timeoutID)](https://developers.weixin.qq.com/minigame/dev/api/base/timer/clearTimeout.html)
 *
 * 取消由 setTimeout 设置的定时器。 */
declare function clearTimeout(
    /** 要取消的定时器的 ID */
    timeoutID: number
): void
/** [number requestAnimationFrame(function callback)](https://developers.weixin.qq.com/minigame/dev/api/render/frame/requestAnimationFrame.html)
 *
 * 在下次进行重绘时执行。 */
declare function requestAnimationFrame(
    /** 执行的 callback */
    callback: (...args: any[]) => any
): number
/** [number setInterval(function callback, number delay, any rest)](https://developers.weixin.qq.com/minigame/dev/api/base/timer/setInterval.html)
 *
 * 设定一个定时器。按照指定的周期（以毫秒计）来执行注册的回调函数 */
declare function setInterval(
    /** 回调函数 */
    callback: (...args: any[]) => any,
    /** 执行回调函数之间的时间间隔，单位 ms。 */
    delay?: number,
    /** param1, param2, ..., paramN 等附加参数，它们会作为参数传递给回调函数。 */
    rest?: any
): number
/** [number setTimeout(function callback, number delay, any rest)](https://developers.weixin.qq.com/minigame/dev/api/base/timer/setTimeout.html)
 *
 * 设定一个定时器。在定时到期以后执行注册的回调函数 */
declare function setTimeout(
    /** 回调函数 */
    callback: (...args: any[]) => any,
    /** 延迟的时间，函数的调用会在该延迟之后发生，单位 ms。 */
    delay?: number,
    /** param1, param2, ..., paramN 等附加参数，它们会作为参数传递给回调函数。 */
    rest?: any
): number
