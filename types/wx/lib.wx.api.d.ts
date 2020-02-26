/*! *****************************************************************************
Copyright (c) 2020 Tencent, Inc. All rights reserved.

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
         * - 'fail no such file or directory ${path}': 文件/目录不存在; */
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
    interface AppendFileFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail no such file or directory, open ${filePath}': 指定的 filePath 文件不存在;
         * - 'fail illegal operation on a directory, open "${filePath}"': 指定的 filePath 是一个已经存在的目录;
         * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有写权限;
         * - 'fail sdcard not mounted': 指定的 filePath 是一个已经存在的目录; */
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
        properties: Properties
        /** 蓝牙设备特征值的 uuid */
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
    /** 对局回放的按钮。只能选择预设的文案模版。 */
    interface ButtonOption {
        /** 对局回放的按钮的模版。
         *
         * 可选值：
         * - 'enter': 马上玩;
         * - 'challenge': 去挑战;
         * - 'play': 玩一把; */
        template?: 'enter' | 'challenge' | 'play'
    }
    /** 新搜索到的设备列表 */
    interface CallbackResultBlueToothDevice {
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
         * - 'fail the maximum size of the file storage limit is exceeded': 存储空间不足; */
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
    interface CreateFeedbackButtonOption {
        /** 按钮的样式 */
        style: CreateFeedbackButtonOptionStyle
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
    /** 按钮的样式 */
    interface CreateFeedbackButtonOptionStyle {
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
        style: CreateGameClubButtonOptionStyle
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
    /** 按钮的样式 */
    interface CreateGameClubButtonOptionStyle {
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
    interface CreateInterstitialAdOption {
        /** 广告单元 id */
        adUnitId: string
    }
    interface CreateOpenSettingButtonOption {
        /** 按钮的样式 */
        style: CreateOpenSettingButtonOptionStyle
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
    /** 按钮的样式 */
    interface CreateOpenSettingButtonOptionStyle {
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
        style: CreateUserInfoButtonOptionStyle
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
    /** 按钮的样式 */
    interface CreateUserInfoButtonOptionStyle {
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
    interface CreateVideoOption {
        /** 视频的封面 */
        poster: string
        /** 视频的资源地址 */
        src: string
        /** 视频是否自动播放 */
        autoplay?: boolean
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
        /** 是否显示视频中央的播放按钮 */
        showCenterPlayBtn?: boolean
        /** 视频的宽度 */
        width?: number
        /** 视频的左上角横坐标 */
        x?: number
        /** 视频的左上角纵坐标 */
        y?: number
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
        /** 开发者服务器返回的 HTTP 状态码 */
        statusCode: number
        /** 临时文件路径 (本地路径)。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件 */
        tempFilePath: string
        errMsg: string
    }
    interface DownloadTaskOnHeadersReceivedCallbackResult {
        /** 开发者服务器返回的 HTTP Response Header */
        header: IAnyObject
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
        style: FeedbackButtonStyle
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
    /** 按钮的样式 */
    interface FeedbackButtonStyle {
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
    /** 文件数组 */
    interface FileItem {
        /** 文件保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数 */
        createTime: number
        /** 文件路径 (本地路径) */
        filePath: string
        /** 本地文件大小，以字节为单位 */
        size: number
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
        style: GameClubButtonStyle
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
    /** 按钮的样式 */
    interface GameClubButtonStyle {
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
    /** 对局回放的标题的配置。对局回放标题不能随意设置，只能选择预设的文案模版和对应的参数。 */
    interface GameRecorderShareButton {
        /** 对局回放的标题的模版参数。 */
        data?: IAnyObject
        /** 对局回放的标题的模版。不传则为：${用户昵称} 在 ${游戏名称} 的游戏时刻
         *
         * 可选值：
         * - 'defautl.score': 模版格式为，《小游戏名称》，本局得分：${score}，对应的 data 应该如 { score: 4500 };
         * - 'default.level': 模版格式为，《小游戏名称》，当前关卡：第42关，对应的 data 应该如 { level: 23 };
         * - 'default.opponent': 模版格式为，《小游戏名称》，本局对手：${opponent}，对应的 data 应该如 { opponent_openid: 'oC6J75Sh1_4K8Mf5b1mlgDkMPhoI' };
         * - 'default.cost': 模版格式为，《小游戏名称》，本局耗时：${cost}秒，对应的 data 应该如 { cost_seconds: 123 }; */
        template?:
            | 'defautl.score'
            | 'default.level'
            | 'default.opponent'
            | 'default.cost'
    }
    /** 按钮的样式 */
    interface GameRecorderShareButtonStyle {
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
            | 'voice_recognition'>
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
        devices: GetBluetoothDevicesSuccessCallbackResultBlueToothDevice[]
        errMsg: string
    }
    /** uuid 对应的的已连接设备列表 */
    interface GetBluetoothDevicesSuccessCallbackResultBlueToothDevice {
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
    interface GetFileInfoOption {
        /** 要读取的文件路径 (本地路径) */
        filePath: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetFileInfoCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetFileInfoFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetFileInfoSuccessCallback
    }
    interface GetFileInfoSuccessCallbackResult {
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
        roomInfo: GetLastRoomInfoSuccessCallbackDataResultRoomInfo
    }
    /** 最近参与房间的详细信息 */
    interface GetLastRoomInfoSuccessCallbackDataResultRoomInfo {
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
        memberList: GetLastRoomInfoSuccessCallbackDataResultRoomInfoRoomMemberInfo[]
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
    interface GetLastRoomInfoSuccessCallbackDataResultRoomInfoRoomMemberInfo {
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
        roomInfo: GetRoomInfoSuccessCallbackDataResultRoomInfo
    }
    interface GetRoomInfoSuccessCallbackDataResultRoomInfo {
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
        memberList: GetRoomInfoSuccessCallbackDataResultRoomInfoRoomMemberInfo[]
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
    interface GetRoomInfoSuccessCallbackDataResultRoomInfoRoomMemberInfo {
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
    interface GetShareInfoSuccessCallbackResult {
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
    interface GetStorageOption {
        /** 本地缓存中指定的 key */
        key: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetStorageCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetStorageFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetStorageSuccessCallback
    }
    interface GetStorageSuccessCallbackResult {
        /** key对应的内容 */
        data: any
        errMsg: string
    }
    interface GetSystemInfoOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetSystemInfoCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetSystemInfoFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetSystemInfoSuccessCallback
    }
    interface GetSystemInfoSuccessCallbackResult {
        /** 客户端基础库版本
         *
         * 最低基础库： `1.1.0` */
        SDKVersion: string
        /** 允许微信使用相册的开关（仅 iOS 有效）
         *
         * 最低基础库： `2.6.0` */
        albumAuthorized: boolean
        /** 设备性能等级（仅Android小游戏）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50）
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
        /** 允许微信使用麦克风的开关
         *
         * 最低基础库： `2.6.0` */
        microphoneAuthorized: boolean
        /** 设备型号 */
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
        safeArea: SafeAreaResult
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
        errMsg: string
    }
    interface GetSystemInfoSyncResult {
        /** 客户端基础库版本
         *
         * 最低基础库： `1.1.0` */
        SDKVersion: string
        /** 允许微信使用相册的开关（仅 iOS 有效）
         *
         * 最低基础库： `2.6.0` */
        albumAuthorized: boolean
        /** 设备性能等级（仅Android小游戏）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50）
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
        /** 允许微信使用麦克风的开关
         *
         * 最低基础库： `2.6.0` */
        microphoneAuthorized: boolean
        /** 设备型号 */
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
        safeArea: GetSystemInfoSyncResultSafeAreaResult
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
    }
    /** 在竖屏正方向下的安全区域
     *
     * 最低基础库： `2.7.0` */
    interface GetSystemInfoSyncResultSafeAreaResult {
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
    interface GetUserGameLabelOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: GetUserGameLabelCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: GetUserGameLabelFailCallback
        /** 接口调用成功的回调函数 */
        success?: GetUserGameLabelSuccessCallback
    }
    interface GetUserGameLabelSuccessCallbackResult {
        /** 用户特征信息 */
        label: number
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
    /** InnerAudioContext 实例，可通过 [wx.createInnerAudioContext](https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.createInnerAudioContext.html) 接口获取实例。
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
        muteConfig?: JoinVoIPChatOptionMuteConfig
        /** 接口调用成功的回调函数 */
        success?: JoinVoIPChatSuccessCallback
    }
    /** 静音设置 */
    interface JoinVoIPChatOptionMuteConfig {
        /** 是否静音耳机 */
        muteEarphone?: boolean
        /** 是否静音麦克风 */
        muteMicrophone?: boolean
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
        referrerInfo: LaunchOptionsGameReferrerInfo
        /** 启动小游戏的[场景值](https://developers.weixin.qq.com/minigame/dev/guide/framework/scene.html) */
        scene: number
        /** shareTicket，详见[获取更多转发信息](#) */
        shareTicket: string
    }
    /** 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) */
    interface LaunchOptionsGameReferrerInfo {
        /** 来源小程序、公众号或 App 的 appId */
        appId: string
        /** 来源小程序传过来的数据，scene=1037或1038时支持 */
        extraData: IAnyObject
    }
    interface LoadSubpackageOption {
        /** 分包加载结束回调事件(加载成功、失败都会执行） */
        complete: (...args: any[]) => any
        /** 分包加载失败回调事件 */
        fail: (...args: any[]) => any
        /** 分包的名字，可以填 name 或者 root */
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
    interface MkdirFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail no such file or directory ${dirPath}': 上级目录不存在;
         * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有写权限;
         * - 'fail file already exists ${dirPath}': 有同名文件或目录; */
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
        devices: CallbackResultBlueToothDevice[]
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
    interface OnKeyUpCallbackResult {
        /** 同 Web 规范 KeyEvent code 属性 */
        code: string
        /** 同 Web 规范 KeyEvent key 属性 */
        key: string
        /** 事件触发时的时间戳 */
        timeStamp: number
    }
    interface OnKeyboardCompleteCallbackResult {
        /** 键盘输入的当前值 */
        value: string
    }
    interface OnKeyboardConfirmCallbackResult {
        /** 键盘输入的当前值 */
        value: string
    }
    interface OnKeyboardInputCallbackResult {
        /** 键盘输入的当前值 */
        value: IAnyObject
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
    interface OnMouseUpCallbackResult {
        /** 按键类型，0左键，1中键，2右键 */
        button: number
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
        memberList: ResultRoomMemberInfo[]
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
    }
    interface OnShareMessageToFriendCallbackResult {
        /** 错误信息 */
        errMsg: string
        /** 是否成功 */
        success: boolean
    }
    interface OnShowCallbackResult {
        /** 查询参数 */
        query: IAnyObject
        /** 当场景为由从另一个小程序或公众号或App打开时，返回此字段 */
        referrerInfo: ResultReferrerInfo
        /** 场景值 */
        scene: string
        /** shareTicket */
        shareTicket: string
    }
    interface OnSocketCloseCallbackResult {
        /** 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。 */
        code: number
        /** 一个可读的字符串，表示连接被关闭的原因。 */
        reason: string
    }
    interface OnSocketErrorCallbackResult {
        /** 错误信息 */
        errMsg: string
    }
    interface OnSocketMessageCallbackResult {
        /** 服务器返回的消息 */
        data: string | ArrayBuffer
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
    interface OnTouchCancelCallbackResult {
        /** 触发此次事件的触摸点列表 */
        changedTouches: Touch[]
        /** 事件触发时的时间戳 */
        timeStamp: number
        /** 当前所有触摸点的列表 */
        touches: Touch[]
    }
    interface OnTouchEndCallbackResult {
        /** 触发此次事件的触摸点列表 */
        changedTouches: Touch[]
        /** 事件触发时的时间戳 */
        timeStamp: number
        /** 当前所有触摸点的列表 */
        touches: Touch[]
    }
    interface OnTouchMoveCallbackResult {
        /** 触发此次事件的触摸点列表 */
        changedTouches: Touch[]
        /** 事件触发时的时间戳 */
        timeStamp: number
        /** 当前所有触摸点的列表 */
        touches: Touch[]
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
        style: OpenSettingButtonStyle
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
    /** 按钮的样式 */
    interface OpenSettingButtonStyle {
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
    interface OpenSettingOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: OpenSettingCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: OpenSettingFailCallback
        /** 接口调用成功的回调函数 */
        success?: OpenSettingSuccessCallback
    }
    interface OpenSettingSuccessCallbackResult {
        /** [AuthSetting](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/AuthSetting.html)
         *
         * 用户授权结果 */
        authSetting: AuthSetting
        errMsg: string
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
    interface PreviewImageOption {
        /** 需要预览的图片链接列表。[2.2.3](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起支持云文件ID。 */
        urls: string[]
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: PreviewImageCompleteCallback
        /** 当前显示图片的链接 */
        current?: string
        /** 接口调用失败的回调函数 */
        fail?: PreviewImageFailCallback
        /** 接口调用成功的回调函数 */
        success?: PreviewImageSuccessCallback
    }
    /** 该特征值支持的操作类型 */
    interface Properties {
        /** 该特征值是否支持 indicate 操作 */
        indicate: boolean
        /** 该特征值是否支持 notify 操作 */
        notify: boolean
        /** 该特征值是否支持 read 操作 */
        read: boolean
        /** 该特征值是否支持 write 操作 */
        write: boolean
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
         * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有读权限; */
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
        length?: string
        /** 从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：byte
         *
         * 最低基础库： `2.10.0` */
        position?: string
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
         * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有读权限; */
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
    interface RecorderManagerOnErrorCallbackResult {
        /** 错误信息 */
        errMsg: string
    }
    interface RecorderManagerStartOption {
        /** 指定录音的音频输入源，可通过 [wx.getAvailableAudioSources()](https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.getAvailableAudioSources.html) 获取当前可用的音频源
         *
         * 可选值：
         * - 'auto': 自动设置，默认使用手机麦克风，插上耳麦后自动切换使用耳机麦克风，所有平台适用;
         * - 'buildInMic': 手机麦克风，仅限 iOS;
         * - 'headsetMic': 耳机麦克风，仅限 iOS;
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
    interface RequestOption {
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
        success?: RequestSuccessCallback
        /** 超时时间，单位为毫秒
         *
         * 最低基础库： `2.10.0` */
        timeout?: number
    }
    interface RequestSubscribeMessageFailCallbackResult {
        /** 接口调用失败错误码 */
        errCode: number
        /** 接口调用失败错误信息 */
        errMsg: string
    }
    interface RequestSubscribeMessageOption {
        /** 需要订阅的消息模板的id的集合，一次调用最多可订阅3条消息（注意：iOS客户端7.0.6版本、Android客户端7.0.7版本之后的一次性订阅/长期订阅才支持多个模板消息，iOS客户端7.0.5版本、Android客户端7.0.6版本之前的一次订阅只支持一个模板消息）消息模板id在[微信公众平台(mp.weixin.qq.com)-功能-订阅消息]中配置 */
        tmplIds: any[]
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: RequestSubscribeMessageCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: RequestSubscribeMessageFailCallback
        /** 接口调用成功的回调函数 */
        success?: RequestSubscribeMessageSuccessCallback
    }
    interface RequestSubscribeMessageSuccessCallbackResult {
        /** [TEMPLATE_ID]是动态的键，即模板id，值包括'accept'、'reject'、'ban'。'accept'表示用户同意订阅该条id对应的模板消息，'reject'表示用户拒绝订阅该条id对应的模板消息，'ban'表示已被后台封禁。例如 { errMsg: "requestSubscribeMessage:ok", zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE: "accept"} 表示用户同意订阅zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE这条消息 */
        TEMPLATE_ID: string
        /** 接口调用成功时errMsg值为'requestSubscribeMessage:ok' */
        errMsg: string
    }
    interface RequestSubscribeSystemMessageFailCallbackResult {
        /** 接口调用失败错误码 */
        errCode: number
        /** 接口调用失败错误信息 */
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
    interface RequestSuccessCallbackResult {
        /** 开发者服务器返回的 cookies，格式为字符串数组
         *
         * 最低基础库： `2.10.0` */
        cookies: string[]
        /** 开发者服务器返回的数据 */
        data: string | IAnyObject | ArrayBuffer
        /** 开发者服务器返回的 HTTP Response Header
         *
         * 最低基础库： `1.2.0` */
        header: IAnyObject
        /** 开发者服务器返回的 HTTP 状态码 */
        statusCode: number
        errMsg: string
    }
    interface RequestTaskOnHeadersReceivedCallbackResult {
        /** 开发者服务器返回的 HTTP Response Header */
        header: IAnyObject
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
    /** 成员列表 */
    interface ResultRoomMemberInfo {
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
    interface RewardedVideoAdOnCloseCallbackResult {
        /** 视频是否是在用户完整观看的情况下被关闭的
         *
         * 最低基础库： `2.1.0` */
        isEnded: boolean
    }
    interface RewardedVideoAdOnErrorCallbackResult {
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
    interface RmdirFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail no such file or directory ${dirPath}': 目录不存在;
         * - 'fail directory not empty': 目录不为空;
         * - 'fail permission denied, open ${dirPath}': 指定的 dirPath 路径没有写权限; */
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
    /** 在竖屏正方向下的安全区域
     *
     * 最低基础库： `2.7.0` */
    interface SafeAreaResult {
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
         * - 'fail the maximum size of the file storage limit is exceeded': 存储空间不足; */
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
    interface SetStorageOption {
        /** 需要存储的内容。只支持原生类型、Date、及能够通过`JSON.stringify`序列化的对象。 */
        data: any
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
    interface ShareAppMessageOption {
        /** 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4 */
        imageUrl?: string
        /** 审核通过的图片 ID，详见 [使用审核通过的转发图片]((share#使用审核通过的转发图片))
         *
         * 最低基础库： `2.4.3` */
        imageUrlId?: string
        /** 查询字符串，从这条转发消息进入后，可通过 wx.getLaunchOptionsSync() 或 wx.onShow() 获取启动参数中的 query。必须是 key1=val1&key2=val2 的格式。 */
        query?: string
        /** 转发标题，不传则默认使用当前小游戏的昵称。 */
        title?: string
    }
    interface ShareMessageToFriendOption {
        /** 发送对象的 openId */
        openId: string
        /** 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4 */
        imageUrl?: string
        /** 审核通过的图片 ID，详见 [使用审核通过的转发图片]((share#使用审核通过的转发图片)) */
        imageUrlId?: string
        /** 转发标题，不传则默认使用当前小游戏的昵称。 */
        title?: string
    }
    /** 对局回放的分享参数。 */
    interface ShareOption {
        /** 对局回放背景音乐的地址。必须是一个代码包文件路径或者 wxfile:// 文件路径，不支持 http/https 开头的 url。 */
        bgm: string
        /** 分享的对局回放打开后跳转小游戏的 query。 */
        query: string
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
        button?: ButtonOption
        /** 对局回放的标题。对局回放标题不能随意设置，只能选择预设的文案模版和对应的参数。 */
        title?: TitleOption
        /** 对局回放的音量大小，最小 0，最大 1。
         *
         * 最低基础库： `2.9.2` */
        volume?: number
    }
    interface ShowActionSheetOption {
        /** 按钮的文字数组，数组长度最大为 6 */
        itemList: string[]
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
        /** 提示的内容 */
        content?: string
        /** 接口调用失败的回调函数 */
        fail?: ShowModalFailCallback
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
        errMsg: string
    }
    interface ShowShareMenuOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShowShareMenuCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ShowShareMenuFailCallback
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
         * - 'loading': 显示加载图标，此时 title 文本最多显示 7 个汉字长度;
         * - 'none': 不显示图标，此时 title 文本最多可显示两行，[1.9.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)及以上版本支持; */
        icon?: 'success' | 'loading' | 'none'
        /** 自定义图标的本地路径，image 的优先级高于 icon
         *
         * 最低基础库： `1.1.0` */
        image?: string
        /** 是否显示透明蒙层，防止触摸穿透 */
        mask?: boolean
        /** 接口调用成功的回调函数 */
        success?: ShowToastSuccessCallback
    }
    interface SocketTaskOnCloseCallbackResult {
        /** 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。 */
        code: number
        /** 一个可读的字符串，表示连接被关闭的原因。 */
        reason: string
    }
    interface SocketTaskOnErrorCallbackResult {
        /** 错误信息 */
        errMsg: string
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
         * - 'fail no such file or directory ${path}': 文件不存在; */
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
    /** 订阅消息设置 */
    interface SubscriptionsSetting {
        /** 每一项订阅消息的订阅状态。itemSettings对象的键为**一次性订阅消息的模板id**或**系统订阅消息的类型**，值为'accept'、'reject'、'ban'中的其中一种。'accept'表示用户同意订阅这条消息，'reject'表示用户拒绝订阅这条消息，'ban'表示已被后台封禁。一次性订阅消息使用方法详见 [wx.requestSubscribeMessage](https://developers.weixin.qq.com/minigame/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html)，永久订阅消息（仅小游戏可用）使用方法详见[wx.requestSubscribeSystemMessage](https://developers.weixin.qq.com/minigame/dev/api/open-api/subscribe-message/wx.requestSubscribeSystemMessage.html) */
        itemSettings: IAnyObject
        /** 订阅消息总开关，true为开启，false为关闭 */
        mainSwitch: boolean
    }
    /** 对局回放的标题。对局回放标题不能随意设置，只能选择预设的文案模版和对应的参数。 */
    interface TitleOption {
        /** 对局回放的标题的模版参数。 */
        data?: IAnyObject
        /** 对局回放的标题的模版。不传则为：${用户昵称} 在 ${游戏名称} 的游戏时刻
         *
         * 可选值：
         * - 'defautl.score': 模版格式为，${游戏名称}，本局得分：${score}，对应的 data 应该如 { score: 4500 };
         * - 'default.level': 模版格式为，${游戏名称}，当前关卡：第42关，对应的 data 应该如 { level: 23 };
         * - 'default.opponent': 模版格式为，${游戏名称}，本局对手：${opponent}，对应的 data 应该如 { opponent_openid: 'oC6J75Sh1_4K8Mf5b1mlgDkMPhoI' };
         * - 'default.cost': 模版格式为，${游戏名称}，本局耗时：${cost}秒，对应的 data 应该如 { cost_seconds: 123 }; */
        template?:
            | 'defautl.score'
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
        /** 触点相对于屏幕左边沿的 X 坐标。 */
        clientX: number
        /** 触点相对于屏幕上边沿的 Y 坐标。 */
        clientY: number
        /** Touch 对象的唯一标识符，只读属性。一次触摸动作(我们值的是手指的触摸)在平面上移动的整个过程中, 该标识符不变。可以根据它来判断跟踪的是否是同一次触摸过程。 */
        identifier: number
        /** 触点相对于屏幕左边沿的 X 坐标。 */
        screenX: number
        /** 触点相对于屏幕上边沿的 Y 坐标。 */
        screenY: number
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
         * - 'fail operation not permitted, unlink ${filePath}': 传入的 filePath 是一个目录; */
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
        /** 是否使用带 shareTicket 的转发[详情](#) */
        withShareTicket?: boolean
    }
    interface UpdateVoIPChatMuteConfigOption {
        /** 静音设置 */
        muteConfig: UpdateVoIPChatMuteConfigOptionMuteConfig
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: UpdateVoIPChatMuteConfigCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: UpdateVoIPChatMuteConfigFailCallback
        /** 接口调用成功的回调函数 */
        success?: UpdateVoIPChatMuteConfigSuccessCallback
    }
    /** 静音设置 */
    interface UpdateVoIPChatMuteConfigOptionMuteConfig {
        /** 是否静音耳机 */
        muteEarphone?: boolean
        /** 是否静音麦克风 */
        muteMicrophone?: boolean
    }
    interface UploadFileOption {
        /** 要上传文件资源的路径 (网络路径) */
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
    interface UploadTaskOnHeadersReceivedCallbackResult {
        /** 开发者服务器返回的 HTTP Response Header */
        header: IAnyObject
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
        style: UserInfoButtonStyle
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
    /** 按钮的样式 */
    interface UserInfoButtonStyle {
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
    interface VibrateLongOption {
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: VibrateLongCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: VibrateLongFailCallback
        /** 接口调用成功的回调函数 */
        success?: VibrateLongSuccessCallback
    }
    interface VibrateShortOption {
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
        /** 每当视频播放进度更新时触发的回调函数 */
        ontimeupdate: (...args: any[]) => any
        /** 视频开始缓冲时触发的回调函数 */
        onwaiting: (...args: any[]) => any
        /** 视频的播放速率，有效值有 0.5、0.8、1.0、1.25、1.5 */
        playbackRate: number
        /** 视频的封面 */
        poster: string
        /** 是否显示视频中央的播放按钮 */
        showCenterPlayBtn: boolean
        /** 视频的资源地址 */
        src: string
        /** 视频的宽度 */
        width: number
        /** 视频的左上角横坐标 */
        x: number
        /** 视频的左上角纵坐标 */
        y: number
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
    interface WriteFileFailCallbackResult {
        /** 错误信息
         *
         * 可选值：
         * - 'fail no such file or directory, open ${filePath}': 指定的 filePath 所在目录不存在;
         * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有写权限;
         * - 'fail the maximum size of the file storage limit is exceeded': 存储空间不足; */
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
    interface WxOnErrorCallbackResult {
        /** 错误 */
        message: string
        /** 错误调用堆栈 */
        stack: string
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
            callback: BannerAdOffErrorCallback,
        ): void
        /** [BannerAd.offLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.offLoad.html)
         *
         * 取消监听 banner 广告加载事件 */
        offLoad(
            /** banner 广告加载事件的回调函数 */
            callback: BannerAdOffLoadCallback,
        ): void
        /** [BannerAd.offResize(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.offResize.html)
         *
         * 取消监听 banner 广告尺寸变化事件 */
        offResize(
            /** banner 广告尺寸变化事件的回调函数 */
            callback: OffResizeCallback,
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
            callback: BannerAdOnErrorCallback,
        ): void
        /** [BannerAd.onLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.onLoad.html)
         *
         * 监听 banner 广告加载事件。 */
        onLoad(
            /** banner 广告加载事件的回调函数 */
            callback: BannerAdOnLoadCallback,
        ): void
        /** [BannerAd.onResize(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.onResize.html)
         *
         * 监听 banner 广告尺寸变化事件。 */
        onResize(
            /** banner 广告尺寸变化事件的回调函数 */
            callback: OnResizeCallback,
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
            callback: (...args: any[]) => any,
        ): void
        /** [Camera.onCameraFrame(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.onCameraFrame.html)
         *
         * 监听摄像头实时帧数据
         *
         * 最低基础库： `2.9.0` */
        onCameraFrame(
            /** 摄像头返回实时帧数据的回调函数 */
            callback: OnCameraFrameCallback,
        ): void
        /** [Camera.onStop(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.onStop.html)
         *
         * 监听摄像头非正常终止事件，如退出后台等情况
         *
         * 最低基础库： `2.9.0` */
        onStop(
            /** 事件发生时的回调函数 */
            callback: (...args: any[]) => any,
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
            compressed?: boolean,
        ): Promise<any>
        /** [Promise Camera.takePhoto(string quality)](https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.takePhoto.html)
         *
         * 拍照，可指定质量，成功则返回图片
         *
         * 最低基础库： `2.9.0` */
        takePhoto(
            /** 拍照质量，值为 high, normal, low */
            quality?: string,
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
            contextAttributes?: ContextAttributes,
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
            label?: string,
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
            callback: DownloadTaskOffHeadersReceivedCallback,
        ): void
        /** [DownloadTask.offProgressUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/download/DownloadTask.offProgressUpdate.html)
         *
         * 取消监听下载进度变化事件
         *
         * 最低基础库： `2.1.0` */
        offProgressUpdate(
            /** 下载进度变化事件的回调函数 */
            callback: DownloadTaskOffProgressUpdateCallback,
        ): void
        /** [DownloadTask.onHeadersReceived(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/download/DownloadTask.onHeadersReceived.html)
         *
         * 监听 HTTP Response Header 事件。会比请求完成事件更早
         *
         * 最低基础库： `2.1.0` */
        onHeadersReceived(
            /** HTTP Response Header 事件的回调函数 */
            callback: DownloadTaskOnHeadersReceivedCallback,
        ): void
        /** [DownloadTask.onProgressUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/download/DownloadTask.onProgressUpdate.html)
         *
         * 监听下载进度变化事件
         *
         * 最低基础库： `1.4.0` */
        onProgressUpdate(
            /** 下载进度变化事件的回调函数 */
            callback: DownloadTaskOnProgressUpdateCallback,
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
            callback: FeedbackButtonOffTapCallback,
        ): void
        /** [FeedbackButton.onTap(function callback)](https://developers.weixin.qq.com/minigame/dev/api/open-api/feedback/FeedbackButton.onTap.html)
         *
         * 监听意见反馈按钮的点击事件 */
        onTap(
            /** 意见反馈按钮的点击事件的回调函数 */
            callback: FeedbackButtonOnTapCallback,
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
            dirPath: string,
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
            path: string,
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
                | 'latin1',
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
            destPath: string,
        ): void
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
            recursive?: boolean,
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
            newPath: string,
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
            recursive?: boolean,
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
            filePath: string,
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
                | 'latin1',
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
            recursive?: boolean,
        ): Stats | IAnyObject
        /** [string FileSystemManager.saveFileSync(string tempFilePath, string filePath)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.saveFileSync.html)
         *
         * [FileSystemManager.saveFile](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.saveFile.html) 的同步版本 */
        saveFileSync(
            /** 临时存储文件路径 (本地路径) */
            tempFilePath: string,
            /** 要存储的文件路径 (本地路径) */
            filePath?: string,
        ): string
        /** [string|ArrayBuffer FileSystemManager.readFileSync(string filePath, string encoding, string position, string length)](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.readFileSync.html)
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
            position?: string,
            /** 指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte
             *
             * 最低基础库： `2.10.0` */
            length?: string,
        ): string | ArrayBuffer
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
            callback: GameClubButtonOffTapCallback,
        ): void
        /** [GameClubButton.onTap(function callback)](https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/GameClubButton.onTap.html)
         *
         * 监听游戏圈按钮的点击事件 */
        onTap(
            /** 游戏圈按钮的点击事件的回调函数 */
            callback: GameClubButtonOnTapCallback,
        ): void
        /** [GameClubButton.show()](https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/GameClubButton.show.html)
         *
         * 显示游戏圈按钮 */
        show(): void
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
            callback: (...args: any[]) => any,
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
            callback: (...args: any[]) => any,
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
            callback: GameRecorderShareButtonOffTapCallback,
        ): void
        /** [GameRecorderShareButton.onTap(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorderShareButton.onTap.html)
         *
         * 监听游戏对局回放分享按钮的点击事件。只有当分享由于非用户取消的原因失败时，该事件的回调函数才会执行。
         *
         * 最低基础库： `2.8.0` */
        onTap(
            /** 游戏对局回放分享按钮的点击事件的回调函数 */
            callback: GameRecorderShareButtonOnTapCallback,
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
            callback: OffBeKickedOutCallback,
        ): void
        /** [GameServerManager.offBroadcast(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offBroadcast.html)
         *
         * 取消监听收到同个房间内的广播消息 */
        offBroadcast(
            /** 的回调函数 */
            callback: OffBroadcastCallback,
        ): void
        /** [GameServerManager.offDisconnect(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offDisconnect.html)
         *
         * 取消监听断开连接，收到此事件 */
        offDisconnect(
            /** 断开连接，收到此事件的回调函数 */
            callback: OffDisconnectCallback,
        ): void
        /** [GameServerManager.offGameEnd(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offGameEnd.html)
         *
         * 取消监听帧同步游戏结束 */
        offGameEnd(
            /** 的回调函数 */
            callback: OffGameEndCallback,
        ): void
        /** [GameServerManager.offGameStart(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offGameStart.html)
         *
         * 取消监听帧同步游戏开始 */
        offGameStart(
            /** 的回调函数 */
            callback: OffGameStartCallback,
        ): void
        /** [GameServerManager.offInvite(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offInvite.html)
         *
         * 取消监听接收邀请，当用户确认邀请之后会收到此事件
         *
         * 最低基础库： `2.9.4` */
        offInvite(
            /** 接收邀请，当用户确认邀请之后会收到此事件的回调函数 */
            callback: OffInviteCallback,
        ): void
        /** [GameServerManager.offLogout(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offLogout.html)
         *
         * 取消监听用户登出游戏服务事件 */
        offLogout(
            /** 用户登出游戏服务事件的回调函数 */
            callback: OffLogoutCallback,
        ): void
        /** [GameServerManager.offRoomInfoChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offRoomInfoChange.html)
         *
         * 取消监听房间信息更新 */
        offRoomInfoChange(
            /** 的回调函数 */
            callback: OffRoomInfoChangeCallback,
        ): void
        /** [GameServerManager.offStateUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offStateUpdate.html)
         *
         * 取消监听好友在线状态变更（该接口需要在开放数据域使用）
         *
         * 最低基础库： `2.9.4` */
        offStateUpdate(
            /** 的回调函数 */
            callback: OffStateUpdateCallback,
        ): void
        /** [GameServerManager.offSyncFrame(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offSyncFrame.html)
         *
         * 取消监听收到同个房间的帧同步消息 */
        offSyncFrame(
            /** 的回调函数 */
            callback: OffSyncFrameCallback,
        ): void
        /** [GameServerManager.onBeKickedOut(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onBeKickedOut.html)
         *
         * 监听自己被踢出当前房间 */
        onBeKickedOut(
            /** 的回调函数 */
            callback: OnBeKickedOutCallback,
        ): void
        /** [GameServerManager.onBroadcast(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onBroadcast.html)
         *
         * 监听收到同个房间内的广播消息 */
        onBroadcast(
            /** 的回调函数 */
            callback: OnBroadcastCallback,
        ): void
        /** [GameServerManager.onDisconnect(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onDisconnect.html)
         *
         * 监听断开连接，收到此事件后，需要调用 `GameServerManager.reconnect` 进行重连 */
        onDisconnect(
            /** 断开连接，收到此事件的回调函数 */
            callback: OnDisconnectCallback,
        ): void
        /** [GameServerManager.onGameEnd(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onGameEnd.html)
         *
         * 监听帧同步游戏结束 */
        onGameEnd(
            /** 的回调函数 */
            callback: OnGameEndCallback,
        ): void
        /** [GameServerManager.onGameStart(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onGameStart.html)
         *
         * 监听帧同步游戏开始 */
        onGameStart(
            /** 的回调函数 */
            callback: OnGameStartCallback,
        ): void
        /** [GameServerManager.onInvite(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onInvite.html)
         *
         * 监听接收邀请，当用户确认邀请之后会收到此事件
         *
         * 最低基础库： `2.9.4` */
        onInvite(
            /** 接收邀请，当用户确认邀请之后会收到此事件的回调函数 */
            callback: OnInviteCallback,
        ): void
        /** [GameServerManager.onLogout(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onLogout.html)
         *
         * 监听用户登出游戏服务事件，可能是主动登出也可能是其他原因被动登出 */
        onLogout(
            /** 用户登出游戏服务事件的回调函数 */
            callback: OnLogoutCallback,
        ): void
        /** [GameServerManager.onRoomInfoChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onRoomInfoChange.html)
         *
         * 监听房间信息更新 */
        onRoomInfoChange(
            /** 的回调函数 */
            callback: OnRoomInfoChangeCallback,
        ): void
        /** [GameServerManager.onStateUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onStateUpdate.html)
         *
         * 监听好友在线状态变更（该接口需要在开放数据域使用）
         *
         * 最低基础库： `2.9.4` */
        onStateUpdate(
            /** 的回调函数 */
            callback: OnStateUpdateCallback,
        ): void
        /** [GameServerManager.onSyncFrame(function callback)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onSyncFrame.html)
         *
         * 监听收到同个房间的帧同步消息 */
        onSyncFrame(
            /** 的回调函数 */
            callback: OnSyncFrameCallback,
        ): void
        /** [GameServerManager.startGame(Object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.startGame.html)
         *
         * 启动帧同步 */
        startGame(option?: StartGameOption): void
        /** [Promise GameServerManager.broadcastInRoom(object object)](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.broadcastInRoom.html)
         *
         * 在房间内广播 */
        broadcastInRoom(option: BroadcastInRoomOption): Promise<any>
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
            data: string,
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
         * | 4013 | buffer overflow | 自定义 buffer 超过指定大小（matchInfo 和 extInfo） | */ errMsg: string
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
         * | 4013 | buffer overflow | 自定义 buffer 超过指定大小（matchInfo 和 extInfo） | */ errCode: number
    }
    interface GeneralCallbackResult {
        errMsg: string
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
            callback: OffCanplayCallback,
        ): void
        /** [InnerAudioContext.offEnded(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offEnded.html)
         *
         * 取消监听音频自然播放至结束的事件
         *
         * 最低基础库： `1.9.0` */
        offEnded(
            /** 音频自然播放至结束的事件的回调函数 */
            callback: InnerAudioContextOffEndedCallback,
        ): void
        /** [InnerAudioContext.offError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offError.html)
         *
         * 取消监听音频播放错误事件
         *
         * 最低基础库： `1.9.0` */
        offError(
            /** 音频播放错误事件的回调函数 */
            callback: InnerAudioContextOffErrorCallback,
        ): void
        /** [InnerAudioContext.offPause(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offPause.html)
         *
         * 取消监听音频暂停事件
         *
         * 最低基础库： `1.9.0` */
        offPause(
            /** 音频暂停事件的回调函数 */
            callback: InnerAudioContextOffPauseCallback,
        ): void
        /** [InnerAudioContext.offPlay(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offPlay.html)
         *
         * 取消监听音频播放事件
         *
         * 最低基础库： `1.9.0` */
        offPlay(
            /** 音频播放事件的回调函数 */
            callback: InnerAudioContextOffPlayCallback,
        ): void
        /** [InnerAudioContext.offSeeked(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offSeeked.html)
         *
         * 取消监听音频完成跳转操作的事件
         *
         * 最低基础库： `1.9.0` */
        offSeeked(
            /** 音频完成跳转操作的事件的回调函数 */
            callback: OffSeekedCallback,
        ): void
        /** [InnerAudioContext.offSeeking(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offSeeking.html)
         *
         * 取消监听音频进行跳转操作的事件
         *
         * 最低基础库： `1.9.0` */
        offSeeking(
            /** 音频进行跳转操作的事件的回调函数 */
            callback: OffSeekingCallback,
        ): void
        /** [InnerAudioContext.offStop(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offStop.html)
         *
         * 取消监听音频停止事件
         *
         * 最低基础库： `1.9.0` */
        offStop(
            /** 音频停止事件的回调函数 */
            callback: OffStopCallback,
        ): void
        /** [InnerAudioContext.offTimeUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offTimeUpdate.html)
         *
         * 取消监听音频播放进度更新事件
         *
         * 最低基础库： `1.9.0` */
        offTimeUpdate(
            /** 音频播放进度更新事件的回调函数 */
            callback: InnerAudioContextOffTimeUpdateCallback,
        ): void
        /** [InnerAudioContext.offWaiting(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offWaiting.html)
         *
         * 取消监听音频加载中事件
         *
         * 最低基础库： `1.9.0` */
        offWaiting(
            /** 音频加载中事件的回调函数 */
            callback: InnerAudioContextOffWaitingCallback,
        ): void
        /** [InnerAudioContext.onCanplay(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onCanplay.html)
         *
         * 监听音频进入可以播放状态的事件。但不保证后面可以流畅播放 */
        onCanplay(
            /** 音频进入可以播放状态的事件的回调函数 */
            callback: OnCanplayCallback,
        ): void
        /** [InnerAudioContext.onEnded(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onEnded.html)
         *
         * 监听音频自然播放至结束的事件 */
        onEnded(
            /** 音频自然播放至结束的事件的回调函数 */
            callback: InnerAudioContextOnEndedCallback,
        ): void
        /** [InnerAudioContext.onError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onError.html)
         *
         * 监听音频播放错误事件 */
        onError(
            /** 音频播放错误事件的回调函数 */
            callback: InnerAudioContextOnErrorCallback,
        ): void
        /** [InnerAudioContext.onPause(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onPause.html)
         *
         * 监听音频暂停事件 */
        onPause(
            /** 音频暂停事件的回调函数 */
            callback: InnerAudioContextOnPauseCallback,
        ): void
        /** [InnerAudioContext.onPlay(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onPlay.html)
         *
         * 监听音频播放事件 */
        onPlay(
            /** 音频播放事件的回调函数 */
            callback: InnerAudioContextOnPlayCallback,
        ): void
        /** [InnerAudioContext.onSeeked(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onSeeked.html)
         *
         * 监听音频完成跳转操作的事件 */
        onSeeked(
            /** 音频完成跳转操作的事件的回调函数 */
            callback: OnSeekedCallback,
        ): void
        /** [InnerAudioContext.onSeeking(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onSeeking.html)
         *
         * 监听音频进行跳转操作的事件 */
        onSeeking(
            /** 音频进行跳转操作的事件的回调函数 */
            callback: OnSeekingCallback,
        ): void
        /** [InnerAudioContext.onStop(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onStop.html)
         *
         * 监听音频停止事件 */
        onStop(
            /** 音频停止事件的回调函数 */
            callback: InnerAudioContextOnStopCallback,
        ): void
        /** [InnerAudioContext.onTimeUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onTimeUpdate.html)
         *
         * 监听音频播放进度更新事件 */
        onTimeUpdate(
            /** 音频播放进度更新事件的回调函数 */
            callback: InnerAudioContextOnTimeUpdateCallback,
        ): void
        /** [InnerAudioContext.onWaiting(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onWaiting.html)
         *
         * 监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发 */
        onWaiting(
            /** 音频加载中事件的回调函数 */
            callback: InnerAudioContextOnWaitingCallback,
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
            position: number,
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
            callback: InterstitialAdOffCloseCallback,
        ): void
        /** [InterstitialAd.offError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.offError.html)
         *
         * 取消监听插屏错误事件 */
        offError(
            /** 插屏错误事件的回调函数 */
            callback: InterstitialAdOffErrorCallback,
        ): void
        /** [InterstitialAd.offLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.offLoad.html)
         *
         * 取消监听插屏广告加载事件 */
        offLoad(
            /** 插屏广告加载事件的回调函数 */
            callback: InterstitialAdOffLoadCallback,
        ): void
        /** [InterstitialAd.onClose(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.onClose.html)
         *
         * 监听插屏广告关闭事件。 */
        onClose(
            /** 插屏广告关闭事件的回调函数 */
            callback: InterstitialAdOnCloseCallback,
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
            callback: InterstitialAdOnErrorCallback,
        ): void
        /** [InterstitialAd.onLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.onLoad.html)
         *
         * 监听插屏广告加载事件。 */
        onLoad(
            /** 插屏广告加载事件的回调函数 */
            callback: InterstitialAdOnLoadCallback,
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
            callback: LoadSubpackageTaskOnProgressUpdateCallback,
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
         * | -15006 |  | 虚拟支付接口错误码，appId权限被封禁 |
         * | -15006 |  | 虚拟支付接口错误码，货币类型不支持 |
         * | -15007 |  | 虚拟支付接口错误码，订单已支付 |
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
         * | -15006 |  | 虚拟支付接口错误码，appId权限被封禁 |
         * | -15006 |  | 虚拟支付接口错误码，货币类型不支持 |
         * | -15007 |  | 虚拟支付接口错误码，订单已支付 |
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
            message: IAnyObject,
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
            callback: OpenSettingButtonOffTapCallback,
        ): void
        /** [OpenSettingButton.onTap(function callback)](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/OpenSettingButton.onTap.html)
         *
         * 监听设置页面按钮的点击事件 */
        onTap(
            /** 设置页面按钮的点击事件的回调函数 */
            callback: OpenSettingButtonOnTapCallback,
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
    interface RecorderManager {
        /** [RecorderManager.onError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onError.html)
         *
         * 监听录音错误事件 */
        onError(
            /** 录音错误事件的回调函数 */
            callback: RecorderManagerOnErrorCallback,
        ): void
        /** [RecorderManager.onFrameRecorded(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onFrameRecorded.html)
         *
         * 监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。 */
        onFrameRecorded(
            /** 已录制完指定帧大小的文件事件的回调函数 */
            callback: OnFrameRecordedCallback,
        ): void
        /** [RecorderManager.onInterruptionBegin(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onInterruptionBegin.html)
         *
         * 监听录音因为受到系统占用而被中断开始事件。以下场景会触发此事件：微信语音聊天、微信视频聊天。此事件触发后，录音会被暂停。pause 事件在此事件后触发
         *
         * 最低基础库： `2.3.0` */
        onInterruptionBegin(
            /** 录音因为受到系统占用而被中断开始事件的回调函数 */
            callback: OnInterruptionBeginCallback,
        ): void
        /** [RecorderManager.onInterruptionEnd(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onInterruptionEnd.html)
         *
         * 监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功。
         *
         * 最低基础库： `2.3.0` */
        onInterruptionEnd(
            /** 录音中断结束事件的回调函数 */
            callback: OnInterruptionEndCallback,
        ): void
        /** [RecorderManager.onPause(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onPause.html)
         *
         * 监听录音暂停事件 */
        onPause(
            /** 录音暂停事件的回调函数 */
            callback: RecorderManagerOnPauseCallback,
        ): void
        /** [RecorderManager.onResume(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onResume.html)
         *
         * 监听录音继续事件 */
        onResume(
            /** 录音继续事件的回调函数 */
            callback: OnResumeCallback,
        ): void
        /** [RecorderManager.onStart(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onStart.html)
         *
         * 监听录音开始事件 */
        onStart(
            /** 录音开始事件的回调函数 */
            callback: OnStartCallback,
        ): void
        /** [RecorderManager.onStop(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onStop.html)
         *
         * 监听录音结束事件 */
        onStop(
            /** 录音结束事件的回调函数 */
            callback: RecorderManagerOnStopCallback,
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
            callback: RequestTaskOffHeadersReceivedCallback,
        ): void
        /** [RequestTask.onHeadersReceived(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/request/RequestTask.onHeadersReceived.html)
         *
         * 监听 HTTP Response Header 事件。会比请求完成事件更早
         *
         * 最低基础库： `2.1.0` */
        onHeadersReceived(
            /** HTTP Response Header 事件的回调函数 */
            callback: RequestTaskOnHeadersReceivedCallback,
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
            callback: RewardedVideoAdOffCloseCallback,
        ): void
        /** [RewardedVideoAd.offError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.offError.html)
         *
         * 取消监听激励视频错误事件 */
        offError(
            /** 激励视频错误事件的回调函数 */
            callback: RewardedVideoAdOffErrorCallback,
        ): void
        /** [RewardedVideoAd.offLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.offLoad.html)
         *
         * 取消监听激励视频广告加载事件 */
        offLoad(
            /** 激励视频广告加载事件的回调函数 */
            callback: RewardedVideoAdOffLoadCallback,
        ): void
        /** [RewardedVideoAd.onClose(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.onClose.html)
         *
         * 监听用户点击 `关闭广告` 按钮的事件。 */
        onClose(
            /** 用户点击 `关闭广告` 按钮的事件的回调函数 */
            callback: RewardedVideoAdOnCloseCallback,
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
            callback: RewardedVideoAdOnErrorCallback,
        ): void
        /** [RewardedVideoAd.onLoad(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.onLoad.html)
         *
         * 监听激励视频广告加载事件。 */
        onLoad(
            /** 激励视频广告加载事件的回调函数 */
            callback: RewardedVideoAdOnLoadCallback,
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
            callback: SocketTaskOnCloseCallback,
        ): void
        /** [SocketTask.onError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.onError.html)
         *
         * 监听 WebSocket 错误事件 */
        onError(
            /** WebSocket 错误事件的回调函数 */
            callback: SocketTaskOnErrorCallback,
        ): void
        /** [SocketTask.onMessage(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.onMessage.html)
         *
         * 监听 WebSocket 接受到服务器的消息事件 */
        onMessage(
            /** WebSocket 接受到服务器的消息事件的回调函数 */
            callback: SocketTaskOnMessageCallback,
        ): void
        /** [SocketTask.onOpen(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.onOpen.html)
         *
         * 监听 WebSocket 连接打开事件 */
        onOpen(
            /** WebSocket 连接打开事件的回调函数 */
            callback: OnOpenCallback,
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
            callback: UDPSocketOffCloseCallback,
        ): void
        /** [UDPSocket.offError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.offError.html)
         *
         * 取消监听错误事件 */
        offError(
            /** 错误事件的回调函数 */
            callback: UDPSocketOffErrorCallback,
        ): void
        /** [UDPSocket.offListening(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.offListening.html)
         *
         * 取消监听开始监听数据包消息的事件 */
        offListening(
            /** 开始监听数据包消息的事件的回调函数 */
            callback: OffListeningCallback,
        ): void
        /** [UDPSocket.offMessage(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.offMessage.html)
         *
         * 取消监听收到消息的事件 */
        offMessage(
            /** 收到消息的事件的回调函数 */
            callback: OffMessageCallback,
        ): void
        /** [UDPSocket.onClose(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.onClose.html)
         *
         * 监听关闭事件 */
        onClose(
            /** 关闭事件的回调函数 */
            callback: UDPSocketOnCloseCallback,
        ): void
        /** [UDPSocket.onError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.onError.html)
         *
         * 监听错误事件 */
        onError(
            /** 错误事件的回调函数 */
            callback: UDPSocketOnErrorCallback,
        ): void
        /** [UDPSocket.onListening(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.onListening.html)
         *
         * 监听开始监听数据包消息的事件 */
        onListening(
            /** 开始监听数据包消息的事件的回调函数 */
            callback: OnListeningCallback,
        ): void
        /** [UDPSocket.onMessage(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.onMessage.html)
         *
         * 监听收到消息的事件 */
        onMessage(
            /** 收到消息的事件的回调函数 */
            callback: UDPSocketOnMessageCallback,
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
            port?: number,
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
            callback: OnCheckForUpdateCallback,
        ): void
        /** [UpdateManager.onUpdateFailed(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/update/UpdateManager.onUpdateFailed.html)
         *
         * 监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调 */
        onUpdateFailed(
            /** 小程序更新失败事件的回调函数 */
            callback: OnUpdateFailedCallback,
        ): void
        /** [UpdateManager.onUpdateReady(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/update/UpdateManager.onUpdateReady.html)
         *
         * 监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调 */
        onUpdateReady(
            /** 小程序有版本更新事件的回调函数 */
            callback: OnUpdateReadyCallback,
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
            callback: UploadTaskOffHeadersReceivedCallback,
        ): void
        /** [UploadTask.offProgressUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/upload/UploadTask.offProgressUpdate.html)
         *
         * 取消监听上传进度变化事件
         *
         * 最低基础库： `2.1.0` */
        offProgressUpdate(
            /** 上传进度变化事件的回调函数 */
            callback: UploadTaskOffProgressUpdateCallback,
        ): void
        /** [UploadTask.onHeadersReceived(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/upload/UploadTask.onHeadersReceived.html)
         *
         * 监听 HTTP Response Header 事件。会比请求完成事件更早
         *
         * 最低基础库： `2.1.0` */
        onHeadersReceived(
            /** HTTP Response Header 事件的回调函数 */
            callback: UploadTaskOnHeadersReceivedCallback,
        ): void
        /** [UploadTask.onProgressUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/upload/UploadTask.onProgressUpdate.html)
         *
         * 监听上传进度变化事件
         *
         * 最低基础库： `1.4.0` */
        onProgressUpdate(
            /** 上传进度变化事件的回调函数 */
            callback: UploadTaskOnProgressUpdateCallback,
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
            callback: UserInfoButtonOffTapCallback,
        ): void
        /** [UserInfoButton.onTap(function callback)](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/UserInfoButton.onTap.html)
         *
         * 监听用户信息按钮的点击事件 */
        onTap(
            /** 用户信息按钮的点击事件的回调函数 */
            callback: UserInfoButtonOnTapCallback,
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
        /** [Promise Video.requestFullScreen()](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.requestFullScreen.html)
         *
         * 视频全屏 */
        requestFullScreen(): Promise<any>
        /** [Promise Video.seek(number time)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.seek.html)
         *
         * 视频跳转 */
        seek(
            /** 视频跳转到指定位置，单位为 s 秒 */
            time: number,
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
            callback: VideoOffEndedCallback,
        ): void
        /** [Video.offError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offError.html)
         *
         * 取消监听视频错误事件 */
        offError(
            /** 视频错误事件的回调函数 */
            callback: VideoOffErrorCallback,
        ): void
        /** [Video.offPause(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offPause.html)
         *
         * 取消监听视频暂停事件 */
        offPause(
            /** 视频暂停事件的回调函数 */
            callback: VideoOffPauseCallback,
        ): void
        /** [Video.offPlay(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offPlay.html)
         *
         * 取消监听视频播放事件 */
        offPlay(
            /** 视频播放事件的回调函数 */
            callback: VideoOffPlayCallback,
        ): void
        /** [Video.offTimeUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offTimeUpdate.html)
         *
         * 取消监听视频播放进度更新事件 */
        offTimeUpdate(
            /** 视频播放进度更新事件的回调函数 */
            callback: VideoOffTimeUpdateCallback,
        ): void
        /** [Video.offWaiting(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offWaiting.html)
         *
         * 取消监听视频缓冲事件 */
        offWaiting(
            /** 视频缓冲事件的回调函数 */
            callback: VideoOffWaitingCallback,
        ): void
        /** [Video.onEnded(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.onEnded.html)
         *
         * 监听视频播放到末尾事件 */
        onEnded(
            /** 视频播放到末尾事件的回调函数 */
            callback: VideoOnEndedCallback,
        ): void
        /** [Video.onError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.onError.html)
         *
         * 监听视频错误事件 */
        onError(
            /** 视频错误事件的回调函数 */
            callback: VideoOnErrorCallback,
        ): void
        /** [Video.onPause(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.onPause.html)
         *
         * 监听视频暂停事件 */
        onPause(
            /** 视频暂停事件的回调函数 */
            callback: VideoOnPauseCallback,
        ): void
        /** [Video.onPlay(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.onPlay.html)
         *
         * 监听视频播放事件 */
        onPlay(
            /** 视频播放事件的回调函数 */
            callback: VideoOnPlayCallback,
        ): void
        /** [Video.onTimeUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.onTimeUpdate.html)
         *
         * 监听视频播放进度更新事件 */
        onTimeUpdate(
            /** 视频播放进度更新事件的回调函数 */
            callback: VideoOnTimeUpdateCallback,
        ): void
        /** [Video.onWaiting(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.onWaiting.html)
         *
         * 监听视频缓冲事件 */
        onWaiting(
            /** 视频缓冲事件的回调函数 */
            callback: VideoOnWaitingCallback,
        ): void
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
            canvas: Canvas,
        ): void
    }
    interface Worker {
        /** [Worker.onMessage(function callback)](https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.onMessage.html)
         *
         * 监听主线程/Worker 线程向当前线程发送的消息的事件。 */
        onMessage(
            /** 主线程/Worker 线程向当前线程发送的消息的事件的回调函数 */
            callback: WorkerOnMessageCallback,
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
            message: IAnyObject,
        ): void
        /** [Worker.terminate()](https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.terminate.html)
         *
         * 结束当前 Worker 线程。仅限在主线程 worker 对象上调用。 */
        terminate(): void
    }
    interface Wx {
        /** [Object wx.getBatteryInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/device/battery/wx.getBatteryInfoSync.html)
         *
         * [wx.getBatteryInfo](https://developers.weixin.qq.com/minigame/dev/api/device/battery/wx.getBatteryInfo.html) 的同步版本 */
        getBatteryInfoSync(): GetBatteryInfoSyncResult
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
         * 获取小游戏启动时的参数。
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
        getSystemInfoSync(): GetSystemInfoSyncResult
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
* 下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径 (本地路径)，单次下载允许的最大文件为 50MB。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/network.html)。
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
        createFeedbackButton(option: CreateFeedbackButtonOption): FeedbackButton
        /** [[FileSystemManager](https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.html) wx.getFileSystemManager()](https://developers.weixin.qq.com/minigame/dev/api/file/wx.getFileSystemManager.html)
         *
         * 获取全局唯一的文件管理器 */
        getFileSystemManager(): FileSystemManager
        /** [[GameClubButton](https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/GameClubButton.html) wx.createGameClubButton(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/wx.createGameClubButton.html)
         *
         * 创建游戏圈按钮。游戏圈按钮被点击后会跳转到小游戏的游戏圈。更多关于游戏圈的信息见 [游戏圈使用指南](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/game-club.html)
         *
         * 最低基础库： `2.0.3` */
        createGameClubButton(option: CreateGameClubButtonOption): GameClubButton
        /** [[GameRecorderShareButton](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorderShareButton.html) wx.createGameRecorderShareButton(Object object)](https://developers.weixin.qq.com/minigame/dev/api/game-recorder/wx.createGameRecorderShareButton.html)
         *
         * 创建游戏对局回放分享按钮，返回一个单例对象。按钮在被用户点击后会发起对最近一次录制完成的游戏对局回放的分享。
         *
         * 最低基础库： `2.8.0` */
        createGameRecorderShareButton(
            option: CreateGameRecorderShareButtonOption,
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
            option: CreateOpenSettingButtonOption,
        ): OpenSettingButton
        /** [[Performance](https://developers.weixin.qq.com/minigame/dev/api/base/performance/Performance.html) wx.getPerformance()](https://developers.weixin.qq.com/minigame/dev/api/base/performance/wx.getPerformance.html)
         *
         * 获取性能管理器 */
        getPerformance(): Performance
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
        request(option: RequestOption): RequestTask
        /** [[RewardedVideoAd](https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.html) wx.createRewardedVideoAd(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ad/wx.createRewardedVideoAd.html)
         *
         * 创建激励视频广告组件。请通过 [wx.getSystemInfoSync()](https://developers.weixin.qq.com/minigame/dev/api/base/system/system-info/wx.getSystemInfoSync.html) 返回对象的 SDKVersion 判断基础库版本号后再使用该 API（小游戏端要求 >= 2.0.4， 小程序端要求 >= 2.6.0）。调用该方法创建的激励视频广告是一个单例（小游戏端是全局单例，小程序端是页面内单例，在小程序端的单例对象不允许跨页面使用）。
         *
         * 最低基础库： `2.0.4` */
        createRewardedVideoAd(
            option: CreateRewardedVideoAdOption,
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
        /** [[Video](https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.html) wx.createVideo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/video/wx.createVideo.html)
         *
         * 创建视频 */
        createVideo(option: CreateVideoOption): Video
        /** [[Worker](https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.html) wx.createWorker(string scriptPath)](https://developers.weixin.qq.com/minigame/dev/api/worker/wx.createWorker.html)
         *
         * 创建一个 [Worker 线程](#)。目前限制最多只能创建一个 Worker，创建下一个 Worker 前请先调用 [Worker.terminate](https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.terminate.html)
         *
         * 最低基础库： `1.9.90` */
        createWorker(
            /** worker 入口文件的**绝对路径** */
            scriptPath: string,
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
        getStorageSync(
            /** 本地缓存中指定的 key */
            key: string,
        ): any
        /** [boolean wx.setCursor(string path)](https://developers.weixin.qq.com/minigame/dev/api/render/cursor/wx.setCursor.html)
         *
         * 加载自定义光标，仅支持 PC 平台
         *
         * 最低基础库： `2.10.1` */
        setCursor(
            /** 代码包或本地路径，支持 ico 和 cur 格式，传入 'default' 代表恢复系统默认 */
            path: string,
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
            path: string,
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
        addCard(option: AddCardOption): void
        /** [wx.authorize(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/authorize/wx.authorize.html)
*
* 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。更多用法详见 [用户授权](https://developers.weixin.qq.com/minigame/dev/guide/framework/authorize.html)。
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
        authorize(option: AuthorizeOption): void
        /** [wx.checkIsUserAdvisedToRest(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/anti-addiction/wx.checkIsUserAdvisedToRest.html)
         *
         * 根据用户当天游戏时间判断用户是否需要休息
         *
         * 最低基础库： `1.9.97` */
        checkIsUserAdvisedToRest(option: CheckIsUserAdvisedToRestOption): void
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
        checkSession(option?: CheckSessionOption): void
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
        chooseImage(option: ChooseImageOption): void
        /** [wx.clearStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.clearStorage.html)
*
* 清理本地数据缓存
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
        clearStorage(option?: ClearStorageOption): void
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
        closeBLEConnection(option: CloseBLEConnectionOption): void
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
        closeBluetoothAdapter(option?: CloseBluetoothAdapterOption): void
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
        closeSocket(option?: CloseSocketOption): void
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
        createBLEConnection(option: CreateBLEConnectionOption): void
        /** [wx.exitMiniProgram(Object object)](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.exitMiniProgram.html)
         *
         * 退出当前小游戏 */
        exitMiniProgram(option?: ExitMiniProgramOption): void
        /** [wx.exitVoIPChat(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.exitVoIPChat.html)
         *
         * 退出（销毁）实时语音通话
         *
         * 最低基础库： `2.7.0` */
        exitVoIPChat(option?: ExitVoIPChatOption): void
        /** [wx.getAvailableAudioSources(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.getAvailableAudioSources.html)
         *
         * 获取当前支持的音频输入源
         *
         * 最低基础库： `2.1.0` */
        getAvailableAudioSources(option?: GetAvailableAudioSourcesOption): void
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
        getBLEDeviceCharacteristics(
            option: GetBLEDeviceCharacteristicsOption,
        ): void
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
        getBLEDeviceServices(option: GetBLEDeviceServicesOption): void
        /** [wx.getBatteryInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/battery/wx.getBatteryInfo.html)
         *
         * 获取设备电量。同步 API [wx.getBatteryInfoSync](https://developers.weixin.qq.com/minigame/dev/api/device/battery/wx.getBatteryInfoSync.html) 在 iOS 上不可用。 */
        getBatteryInfo(option?: GetBatteryInfoOption): void
        /** [wx.getBeacons(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.getBeacons.html)
         *
         * 获取所有已搜索到的 iBeacon 设备
         *
         * 最低基础库： `2.9.2` */
        getBeacons(option?: GetBeaconsOption): void
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
        getBluetoothAdapterState(option?: GetBluetoothAdapterStateOption): void
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
        getBluetoothDevices(option?: GetBluetoothDevicesOption): void
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
        getClipboardData(option?: GetClipboardDataOption): void
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
        getConnectedBluetoothDevices(
            option: GetConnectedBluetoothDevicesOption,
        ): void
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
        getExtConfig(option?: GetExtConfigOption): void
        /** [wx.getFriendCloudStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getFriendCloudStorage.html)
         *
         * 拉取当前用户所有同玩好友的托管数据。该接口只可在开放数据域下使用
         *
         * 最低基础库： `1.9.92` */
        getFriendCloudStorage(option: GetFriendCloudStorageOption): void
        /** [wx.getGroupCloudStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupCloudStorage.html)
         *
         * 获取群同玩成员的游戏数据。小游戏通过群分享卡片打开的情况下才可以调用。**该接口只可在开放数据域下使用**。
         *
         * 最低基础库： `1.9.92` */
        getGroupCloudStorage(option: GetGroupCloudStorageOption): void
        /** [wx.getGroupInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupInfo.html)
         *
         * 获取群信息。小游戏通过群分享卡片打开的情况下才可以调用。**该接口只可在开放数据域下使用**。
         *
         * 最低基础库： `2.10.1` */
        getGroupInfo(option: GetGroupInfoOption): void
        /** [wx.getLocation(Object object)](https://developers.weixin.qq.com/minigame/dev/api/location/wx.getLocation.html)
*
* 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。开启高精度定位，接口耗时会增加，可指定 highAccuracyExpireTime 作为超时时间。
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
        getLocation(option: GetLocationOption): void
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
        getNetworkType(option?: GetNetworkTypeOption): void
        /** [wx.getPotentialFriendList(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getPotentialFriendList.html)
         *
         * 获取可能对游戏感兴趣的未注册的好友名单。每次调用最多可获得 5 个好友，此接口只能在开放数据域中使用
         *
         * 最低基础库： `2.9.0` */
        getPotentialFriendList(option?: GetPotentialFriendListOption): void
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
        getScreenBrightness(option?: GetScreenBrightnessOption): void
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
        getSetting(option: GetSettingOption): void
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
        getShareInfo(option: GetShareInfoOption): void
        /** [wx.getStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.getStorage.html)
*
* 从本地缓存中异步获取指定 key 的内容
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
        getStorage(option: GetStorageOption): void
        /** [wx.getStorageInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.getStorageInfo.html)
*
* 异步获取当前storage的相关信息
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
        getStorageInfo(option?: GetStorageInfoOption): void
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
        getSystemInfo(option?: GetSystemInfoOption): void
        /** [wx.getUserCloudStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getUserCloudStorage.html)
         *
         * 获取当前用户托管数据当中对应 key 的数据。该接口只可在开放数据域下使用
         *
         * 最低基础库： `1.9.92` */
        getUserCloudStorage(option: GetUserCloudStorageOption): void
        /** [wx.getUserGameLabel(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/wx.getUserGameLabel.html)
         *
         * 提供根据用户行为画像推测的特征信息，帮助开发者实现更精细化的游戏运营
         *
         * **用户特征信息**
         *
         *
         * | 数值 | 特征信息                    |
         * | ---- | ------------------------- |
         * | 1    | 信息不足，未能判断用户特征 |
         * | 2    | 反应敏捷，思维跳跃，暑期活跃、夜晚深夜活跃 |
         * | 3    | 逻辑严谨，思考全面，午间周末活跃 |
         * | 4    | 操作稳重，深思熟虑，晨间白天活跃 |
         * | 5    | 灵活度不足，活跃度较低 |
         *
         * 最低基础库： `2.9.3` */
        getUserGameLabel(option?: GetUserGameLabelOption): void
        /** [wx.getUserInfo(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/wx.getUserInfo.html)
*
* 获取用户信息。
*
* **接口调整说明**
*
*
* 在用户未授权过的情况下调用此接口，将不再出现授权弹窗，会直接进入 fail 回调（详见[《公告》](https://developers.weixin.qq.com/community/develop/doc/0000a26e1aca6012e896a517556c01))。在用户已授权的情况下调用此接口，可成功获取用户信息。
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
        getUserInfo(option: GetUserInfoOption): void
        /** [wx.getUserInteractiveStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getUserInteractiveStorage.html)
         *
         * 获取当前用户互动型托管数据对应 key 的数据
         *
         * 最低基础库： `2.7.7` */
        getUserInteractiveStorage(option: GetUserInteractiveStorageOption): void
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
        getWeRunData(option?: GetWeRunDataOption): void
        /** [wx.hideKeyboard(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/keyboard/wx.hideKeyboard.html)
         *
         * 隐藏键盘 */
        hideKeyboard(option?: HideKeyboardOption): void
        /** [wx.hideLoading(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.hideLoading.html)
         *
         * 隐藏 loading 提示框
         *
         * 最低基础库： `1.1.0` */
        hideLoading(option?: HideLoadingOption): void
        /** [wx.hideShareMenu(Object object)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.hideShareMenu.html)
*
* 隐藏转发按钮
*
* **示例代码**
*
*
* ```js
wx.hideShareMenu()
```
*
* 最低基础库： `1.1.0` */
        hideShareMenu(option?: HideShareMenuOption): void
        /** [wx.hideToast(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.hideToast.html)
         *
         * 隐藏消息提示框 */
        hideToast(option?: HideToastOption): void
        /** [wx.joinVoIPChat(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.joinVoIPChat.html)
         *
         * 加入 (创建) 实时语音通话，更多信息可见 [实时语音指南](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/voip-chat.html)
         *
         * 最低基础库： `2.7.0` */
        joinVoIPChat(option: JoinVoIPChatOption): void
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
        login(option?: LoginOption): void
        /** [wx.markScene(number sceneId)](https://developers.weixin.qq.com/minigame/dev/api/base/performance/wx.markScene.html)
         *
         * 标记自定义场景 */
        markScene(
            /** 在管理后台配置过的 */
            sceneId: number,
        ): void
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
        modifyFriendInteractiveStorage(
            option: ModifyFriendInteractiveStorageOption,
        ): void
        /** [wx.navigateToMiniProgram(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html)
*
* 打开另一个小程序
*
* **使用限制**
*
*
* ##### 需要用户触发跳转
* 从 2.3.0 版本开始，若用户未点击小程序页面任意位置，则开发者将无法调用此接口自动跳转至其他小程序。
* ##### 需要用户确认跳转
* 从 2.3.0 版本开始，在跳转至其他小程序前，将统一增加弹窗，询问是否跳转，用户确认后才可以跳转其他小程序。如果用户点击取消，则回调 `fail cancel`。
* ##### 每个小程序可跳转的其他小程序数量限制为不超过 10 个
* 从 2.4.0 版本以及指定日期（具体待定）开始，开发者提交新版小程序代码时，如使用了跳转其他小程序功能，则需要在代码配置中声明将要跳转的小程序名单，限定不超过 10 个，否则将无法通过审核。该名单可在发布新版时更新，不支持动态修改。配置方法详见 [小程序全局配置](https://developers.weixin.qq.com/minigame/dev/reference/configuration/app.html)。调用此接口时，所跳转的 appId 必须在配置列表中，否则回调 `fail appId "${appId}" is not in navigateToMiniProgramAppIdList`。
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
        navigateToMiniProgram(option: NavigateToMiniProgramOption): void
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
        notifyBLECharacteristicValueChange(
            option: NotifyBLECharacteristicValueChangeOption,
        ): void
        /** [wx.offAccelerometerChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/accelerometer/wx.offAccelerometerChange.html)
         *
         * 取消监听加速度数据事件，参数为空，则取消所有的事件监听。
         *
         * 最低基础库： `2.9.3` */
        offAccelerometerChange(
            /** 加速度数据事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void
        /** [wx.offAudioInterruptionBegin(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.offAudioInterruptionBegin.html)
         *
         * 取消监听音频因为受到系统占用而被中断开始事件
         *
         * 最低基础库： `1.8.0` */
        offAudioInterruptionBegin(
            /** 音频因为受到系统占用而被中断开始事件的回调函数 */
            callback: OffAudioInterruptionBeginCallback,
        ): void
        /** [wx.offAudioInterruptionEnd(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.offAudioInterruptionEnd.html)
         *
         * 取消监听音频中断结束事件
         *
         * 最低基础库： `1.8.0` */
        offAudioInterruptionEnd(
            /** 音频中断结束事件的回调函数 */
            callback: OffAudioInterruptionEndCallback,
        ): void
        /** [wx.offBeaconServiceChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.offBeaconServiceChange.html)
         *
         * 取消监听 iBeacon 服务状态变化事件
         *
         * 最低基础库： `2.9.2` */
        offBeaconServiceChange(
            /** iBeacon 服务状态变化事件的回调函数 */
            callback: OffBeaconServiceChangeCallback,
        ): void
        /** [wx.offBeaconUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.offBeaconUpdate.html)
         *
         * 取消监听 iBeacon 设备更新事件
         *
         * 最低基础库： `2.9.2` */
        offBeaconUpdate(
            /** iBeacon 设备更新事件的回调函数 */
            callback: OffBeaconUpdateCallback,
        ): void
        /** [wx.offCompassChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/compass/wx.offCompassChange.html)
         *
         * 取消监听罗盘数据变化事件，参数为空，则取消所有的事件监听。
         *
         * 最低基础库： `2.9.3` */
        offCompassChange(
            /** 罗盘数据变化事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void
        /** [wx.offDeviceMotionChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/motion/wx.offDeviceMotionChange.html)
         *
         * 取消监听设备方向变化事件，参数为空，则取消所有的事件监听。
         *
         * 最低基础库： `2.9.3` */
        offDeviceMotionChange(
            /** 设备方向变化事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void
        /** [wx.offDeviceOrientationChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/orientation/wx.offDeviceOrientationChange.html)
         *
         * 取消监听横竖屏切换事件
         *
         * 最低基础库： `2.1.0` */
        offDeviceOrientationChange(
            /** 横竖屏切换事件的回调函数 */
            callback: OffDeviceOrientationChangeCallback,
        ): void
        /** [wx.offError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.offError.html)
         *
         * 取消监听全局错误事件 */
        offError(
            /** 全局错误事件的回调函数 */
            callback: WxOffErrorCallback,
        ): void
        /** [wx.offGyroscopeChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/gyroscope/wx.offGyroscopeChange.html)
         *
         * 取消监听陀螺仪数据变化事件。
         *
         * 最低基础库： `2.9.3` */
        offGyroscopeChange(
            /** 陀螺仪数据变化事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void
        /** [wx.offHide(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.offHide.html)
         *
         * 取消监听小游戏隐藏到后台事件 */
        offHide(
            /** 小游戏隐藏到后台事件的回调函数 */
            callback: OffHideCallback,
        ): void
        /** [wx.offKeyDown(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/key-event/wx.offKeyDown.html)
         *
         * 取消监听键盘按键按下事件
         *
         * 最低基础库： `2.10.1` */
        offKeyDown(
            /** 键盘按键按下事件的回调函数 */
            callback: OffKeyDownCallback,
        ): void
        /** [wx.offKeyUp(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/key-event/wx.offKeyUp.html)
         *
         * 取消监听键盘按键弹起事件
         *
         * 最低基础库： `2.10.1` */
        offKeyUp(
            /** 键盘按键弹起事件的回调函数 */
            callback: OffKeyUpCallback,
        ): void
        /** [wx.offKeyboardComplete(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ui/keyboard/wx.offKeyboardComplete.html)
         *
         * 取消监听监听键盘收起的事件 */
        offKeyboardComplete(
            /** 监听键盘收起的事件的回调函数 */
            callback: OffKeyboardCompleteCallback,
        ): void
        /** [wx.offKeyboardConfirm(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ui/keyboard/wx.offKeyboardConfirm.html)
         *
         * 取消监听用户点击键盘 Confirm 按钮时的事件 */
        offKeyboardConfirm(
            /** 用户点击键盘 Confirm 按钮时的事件的回调函数 */
            callback: OffKeyboardConfirmCallback,
        ): void
        /** [wx.offKeyboardInput(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ui/keyboard/wx.offKeyboardInput.html)
         *
         * 取消监听键盘输入事件 */
        offKeyboardInput(
            /** 键盘输入事件的回调函数 */
            callback: OffKeyboardInputCallback,
        ): void
        /** [wx.offMemoryWarning(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/performance/wx.offMemoryWarning.html)
         *
         * 取消监听内存不足告警事件。
         *
         * 最低基础库： `2.9.0` */
        offMemoryWarning(
            /** 内存不足告警事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void
        /** [wx.offMouseDown(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/mouse-event/wx.offMouseDown.html)
         *
         * 取消监听鼠标按键按下事件 */
        offMouseDown(
            /** 鼠标按键按下事件的回调函数 */
            callback: OffMouseDownCallback,
        ): void
        /** [wx.offMouseMove(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/mouse-event/wx.offMouseMove.html)
         *
         * 取消监听鼠标移动事件 */
        offMouseMove(
            /** 鼠标移动事件的回调函数 */
            callback: OffMouseMoveCallback,
        ): void
        /** [wx.offMouseUp(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/mouse-event/wx.offMouseUp.html)
         *
         * 取消监听鼠标按键弹起事件 */
        offMouseUp(
            /** 鼠标按键弹起事件的回调函数 */
            callback: OffMouseUpCallback,
        ): void
        /** [wx.offNetworkStatusChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/network/wx.offNetworkStatusChange.html)
         *
         * 取消监听网络状态变化事件，参数为空，则取消所有的事件监听。
         *
         * 最低基础库： `2.9.3` */
        offNetworkStatusChange(
            /** 网络状态变化事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void
        /** [wx.offShareAppMessage(function callback)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.offShareAppMessage.html)
         *
         * 取消监听用户点击右上角菜单的「转发」按钮时触发的事件 */
        offShareAppMessage(
            /** 用户点击右上角菜单的「转发」按钮时触发的事件的回调函数 */
            callback: OffShareAppMessageCallback,
        ): void
        /** [wx.offShow(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.offShow.html)
         *
         * 取消监听小游戏回到前台的事件 */
        offShow(
            /** 小游戏回到前台的事件的回调函数 */
            callback: OffShowCallback,
        ): void
        /** [wx.offTouchCancel(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/touch-event/wx.offTouchCancel.html)
         *
         * 取消监听触点失效事件 */
        offTouchCancel(
            /** 触点失效事件的回调函数 */
            callback: OffTouchCancelCallback,
        ): void
        /** [wx.offTouchEnd(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/touch-event/wx.offTouchEnd.html)
         *
         * 取消监听触摸结束事件 */
        offTouchEnd(
            /** 触摸结束事件的回调函数 */
            callback: OffTouchEndCallback,
        ): void
        /** [wx.offTouchMove(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/touch-event/wx.offTouchMove.html)
         *
         * 取消监听触点移动事件 */
        offTouchMove(
            /** 触点移动事件的回调函数 */
            callback: OffTouchMoveCallback,
        ): void
        /** [wx.offTouchStart(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/touch-event/wx.offTouchStart.html)
         *
         * 取消监听开始触摸事件 */
        offTouchStart(
            /** 开始触摸事件的回调函数 */
            callback: OffTouchStartCallback,
        ): void
        /** [wx.offUnhandledRejection(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.offUnhandledRejection.html)
         *
         * 取消监听未处理的 Promise 拒绝事件
         *
         * 最低基础库： `2.10.0` */
        offUnhandledRejection(
            /** 未处理的 Promise 拒绝事件的回调函数 */
            callback: OffUnhandledRejectionCallback,
        ): void
        /** [wx.offVoIPChatInterrupted(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.offVoIPChatInterrupted.html)
         *
         * 取消监听被动断开实时语音通话事件。
         *
         * 最低基础库： `2.9.0` */
        offVoIPChatInterrupted(
            /** 被动断开实时语音通话事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void
        /** [wx.offVoIPChatMembersChanged(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.offVoIPChatMembersChanged.html)
         *
         * 取消监听实时语音通话成员在线状态变化事件。
         *
         * 最低基础库： `2.9.0` */
        offVoIPChatMembersChanged(
            /** 实时语音通话成员在线状态变化事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void
        /** [wx.offVoIPChatSpeakersChanged(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.offVoIPChatSpeakersChanged.html)
         *
         * 取消监听实时语音通话成员通话状态变化事件。
         *
         * 最低基础库： `2.9.0` */
        offVoIPChatSpeakersChanged(
            /** 实时语音通话成员通话状态变化事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void
        /** [wx.offWheel(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/wheel-event/wx.offWheel.html)
         *
         * 取消监听鼠标滚轮事件 */
        offWheel(
            /** 鼠标滚轮事件的回调函数 */
            callback: OffWheelCallback,
        ): void
        /** [wx.offWindowResize(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ui/window/wx.offWindowResize.html)
         *
         * 取消监听窗口尺寸变化事件 */
        offWindowResize(
            /** 窗口尺寸变化事件的回调函数 */
            callback: OffWindowResizeCallback,
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
            callback: OnAccelerometerChangeCallback,
        ): void
        /** [wx.onAudioInterruptionBegin(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.onAudioInterruptionBegin.html)
         *
         * 监听音频因为受到系统占用而被中断开始事件。以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停。
         *
         * 最低基础库： `1.8.0` */
        onAudioInterruptionBegin(
            /** 音频因为受到系统占用而被中断开始事件的回调函数 */
            callback: OnAudioInterruptionBeginCallback,
        ): void
        /** [wx.onAudioInterruptionEnd(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.onAudioInterruptionEnd.html)
         *
         * 监听音频中断结束事件。在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功
         *
         * 最低基础库： `1.8.0` */
        onAudioInterruptionEnd(
            /** 音频中断结束事件的回调函数 */
            callback: OnAudioInterruptionEndCallback,
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
            callback: OnBLECharacteristicValueChangeCallback,
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
            callback: OnBLEConnectionStateChangeCallback,
        ): void
        /** [wx.onBeaconServiceChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.onBeaconServiceChange.html)
         *
         * 监听 iBeacon 服务状态变化事件，仅能注册一个监听
         *
         * 最低基础库： `2.9.2` */
        onBeaconServiceChange(
            /** iBeacon 服务状态变化事件的回调函数 */
            callback: OnBeaconServiceChangeCallback,
        ): void
        /** [wx.onBeaconUpdate(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.onBeaconUpdate.html)
         *
         * 监听 iBeacon 设备更新事件，仅能注册一个监听
         *
         * 最低基础库： `2.9.2` */
        onBeaconUpdate(
            /** iBeacon 设备更新事件的回调函数 */
            callback: OnBeaconUpdateCallback,
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
            callback: OnBluetoothAdapterStateChangeCallback,
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
            callback: OnBluetoothDeviceFoundCallback,
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
            callback: OnCompassChangeCallback,
        ): void
        /** [wx.onDeviceMotionChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/motion/wx.onDeviceMotionChange.html)
         *
         * 监听设备方向变化事件。频率根据 [wx.startDeviceMotionListening()](https://developers.weixin.qq.com/minigame/dev/api/device/motion/wx.startDeviceMotionListening.html) 的 interval 参数。可以使用 [wx.stopDeviceMotionListening()](https://developers.weixin.qq.com/minigame/dev/api/device/motion/wx.stopDeviceMotionListening.html) 停止监听。
         *
         * 最低基础库： `2.3.0` */
        onDeviceMotionChange(
            /** 设备方向变化事件的回调函数 */
            callback: OnDeviceMotionChangeCallback,
        ): void
        /** [wx.onDeviceOrientationChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/orientation/wx.onDeviceOrientationChange.html)
         *
         * 监听横竖屏切换事件
         *
         * 最低基础库： `2.1.0` */
        onDeviceOrientationChange(
            /** 横竖屏切换事件的回调函数 */
            callback: OnDeviceOrientationChangeCallback,
        ): void
        /** [wx.onError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.onError.html)
         *
         * 监听全局错误事件 */
        onError(
            /** 全局错误事件的回调函数 */
            callback: WxOnErrorCallback,
        ): void
        /** [wx.onGyroscopeChange(function callback)](https://developers.weixin.qq.com/minigame/dev/api/device/gyroscope/wx.onGyroscopeChange.html)
         *
         * 监听陀螺仪数据变化事件。频率根据 [wx.startGyroscope()](https://developers.weixin.qq.com/minigame/dev/api/device/gyroscope/wx.startGyroscope.html) 的 interval 参数。可以使用 [wx.stopGyroscope()](https://developers.weixin.qq.com/minigame/dev/api/device/gyroscope/wx.stopGyroscope.html) 停止监听。
         *
         * 最低基础库： `2.3.0` */
        onGyroscopeChange(
            /** 陀螺仪数据变化事件的回调函数 */
            callback: OnGyroscopeChangeCallback,
        ): void
        /** [wx.onHide(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.onHide.html)
         *
         * 监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面、显示在聊天顶部等操作会触发此事件。 */
        onHide(
            /** 小游戏隐藏到后台事件的回调函数 */
            callback: OnHideCallback,
        ): void
        /** [wx.onInteractiveStorageModified(function callback)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.onInteractiveStorageModified.html)
         *
         * 监听成功修改好友的互动型托管数据事件，该接口在游戏主域使用
         *
         * 最低基础库： `2.9.0` */
        onInteractiveStorageModified(
            /** 事件发生的回调函数，只有一个参数为 `wx.modifyFriendInteractiveStorage` 传入的 key */
            callback: (...args: any[]) => any,
        ): void
        /** [wx.onKeyDown(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/key-event/wx.onKeyDown.html)
         *
         * 监听键盘按键按下事件，仅适用于 PC 平台
         *
         * 最低基础库： `2.10.1` */
        onKeyDown(
            /** 键盘按键按下事件的回调函数 */
            callback: OnKeyDownCallback,
        ): void
        /** [wx.onKeyUp(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/key-event/wx.onKeyUp.html)
         *
         * 监听键盘按键弹起事件，仅适用于 PC 平台
         *
         * 最低基础库： `2.10.1` */
        onKeyUp(
            /** 键盘按键弹起事件的回调函数 */
            callback: OnKeyUpCallback,
        ): void
        /** [wx.onKeyboardComplete(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ui/keyboard/wx.onKeyboardComplete.html)
         *
         * 监听监听键盘收起的事件 */
        onKeyboardComplete(
            /** 监听键盘收起的事件的回调函数 */
            callback: OnKeyboardCompleteCallback,
        ): void
        /** [wx.onKeyboardConfirm(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ui/keyboard/wx.onKeyboardConfirm.html)
         *
         * 监听用户点击键盘 Confirm 按钮时的事件 */
        onKeyboardConfirm(
            /** 用户点击键盘 Confirm 按钮时的事件的回调函数 */
            callback: OnKeyboardConfirmCallback,
        ): void
        /** [wx.onKeyboardInput(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ui/keyboard/wx.onKeyboardInput.html)
         *
         * 监听键盘输入事件 */
        onKeyboardInput(
            /** 键盘输入事件的回调函数 */
            callback: OnKeyboardInputCallback,
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
            callback: OnMemoryWarningCallback,
        ): void
        /** [wx.onMessage(function callback)](https://developers.weixin.qq.com/minigame/dev/api/open-api/context/wx.onMessage.html)
         *
         * 监听主域发送的消息 */
        onMessage(
            /** 监听事件的回调函数 */
            callback: (...args: any[]) => any,
        ): void
        /** [wx.onMouseDown(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/mouse-event/wx.onMouseDown.html)
         *
         * 监听鼠标按键按下事件 */
        onMouseDown(
            /** 鼠标按键按下事件的回调函数 */
            callback: OnMouseDownCallback,
        ): void
        /** [wx.onMouseMove(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/mouse-event/wx.onMouseMove.html)
         *
         * 监听鼠标移动事件 */
        onMouseMove(
            /** 鼠标移动事件的回调函数 */
            callback: OnMouseMoveCallback,
        ): void
        /** [wx.onMouseUp(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/mouse-event/wx.onMouseUp.html)
         *
         * 监听鼠标按键弹起事件 */
        onMouseUp(
            /** 鼠标按键弹起事件的回调函数 */
            callback: OnMouseUpCallback,
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
            callback: OnNetworkStatusChangeCallback,
        ): void
        /** [wx.onShareAppMessage(function callback)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.onShareAppMessage.html)
         *
         * 监听用户点击右上角菜单的「转发」按钮时触发的事件 */
        onShareAppMessage(
            /** 用户点击右上角菜单的「转发」按钮时触发的事件的回调函数 */
            callback: OnShareAppMessageCallback,
        ): void
        /** [wx.onShareMessageToFriend(function callback)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.onShareMessageToFriend.html)
         *
         * 监听主域接收 `wx.shareMessageToFriend` 接口的成功失败通知
         *
         * 最低基础库： `2.9.4` */
        onShareMessageToFriend(
            /** 的回调函数 */
            callback: OnShareMessageToFriendCallback,
        ): void
        /** [wx.onShow(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.onShow.html)
         *
         * 监听小游戏回到前台的事件 */
        onShow(
            /** 小游戏回到前台的事件的回调函数 */
            callback: OnShowCallback,
        ): void
        /** [wx.onSocketClose(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.onSocketClose.html)
         *
         * 监听 WebSocket 连接关闭事件 */
        onSocketClose(
            /** WebSocket 连接关闭事件的回调函数 */
            callback: OnSocketCloseCallback,
        ): void
        /** [wx.onSocketError(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.onSocketError.html)
         *
         * 监听 WebSocket 错误事件 */
        onSocketError(
            /** WebSocket 错误事件的回调函数 */
            callback: OnSocketErrorCallback,
        ): void
        /** [wx.onSocketMessage(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.onSocketMessage.html)
         *
         * 监听 WebSocket 接受到服务器的消息事件 */
        onSocketMessage(
            /** WebSocket 接受到服务器的消息事件的回调函数 */
            callback: OnSocketMessageCallback,
        ): void
        /** [wx.onSocketOpen(function callback)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.onSocketOpen.html)
         *
         * 监听 WebSocket 连接打开事件 */
        onSocketOpen(
            /** WebSocket 连接打开事件的回调函数 */
            callback: OnSocketOpenCallback,
        ): void
        /** [wx.onTouchCancel(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/touch-event/wx.onTouchCancel.html)
         *
         * 监听触点失效事件 */
        onTouchCancel(
            /** 触点失效事件的回调函数 */
            callback: OnTouchCancelCallback,
        ): void
        /** [wx.onTouchEnd(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/touch-event/wx.onTouchEnd.html)
         *
         * 监听触摸结束事件 */
        onTouchEnd(
            /** 触摸结束事件的回调函数 */
            callback: OnTouchEndCallback,
        ): void
        /** [wx.onTouchMove(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/touch-event/wx.onTouchMove.html)
         *
         * 监听触点移动事件 */
        onTouchMove(
            /** 触点移动事件的回调函数 */
            callback: OnTouchMoveCallback,
        ): void
        /** [wx.onTouchStart(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/touch-event/wx.onTouchStart.html)
         *
         * 监听开始触摸事件 */
        onTouchStart(
            /** 开始触摸事件的回调函数 */
            callback: OnTouchStartCallback,
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
            callback: OnUnhandledRejectionCallback,
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
            callback: OnUserCaptureScreenCallback,
        ): void
        /** [wx.onVoIPChatInterrupted(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.onVoIPChatInterrupted.html)
         *
         * 监听被动断开实时语音通话事件。包括小游戏切入后端时断开
         *
         * 最低基础库： `2.7.0` */
        onVoIPChatInterrupted(
            /** 被动断开实时语音通话事件的回调函数 */
            callback: OnVoIPChatInterruptedCallback,
        ): void
        /** [wx.onVoIPChatMembersChanged(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.onVoIPChatMembersChanged.html)
         *
         * 监听实时语音通话成员在线状态变化事件。有成员加入/退出通话时触发回调
         *
         * 最低基础库： `2.7.0` */
        onVoIPChatMembersChanged(
            /** 实时语音通话成员在线状态变化事件的回调函数 */
            callback: OnVoIPChatMembersChangedCallback,
        ): void
        /** [wx.onVoIPChatSpeakersChanged(function callback)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.onVoIPChatSpeakersChanged.html)
         *
         * 监听实时语音通话成员通话状态变化事件。有成员开始/停止说话时触发回调
         *
         * 最低基础库： `2.7.0` */
        onVoIPChatSpeakersChanged(
            /** 实时语音通话成员通话状态变化事件的回调函数 */
            callback: OnVoIPChatSpeakersChangedCallback,
        ): void
        /** [wx.onWheel(function callback)](https://developers.weixin.qq.com/minigame/dev/api/base/app/wheel-event/wx.onWheel.html)
         *
         * 监听鼠标滚轮事件 */
        onWheel(
            /** 鼠标滚轮事件的回调函数 */
            callback: OnWheelCallback,
        ): void
        /** [wx.onWindowResize(function callback)](https://developers.weixin.qq.com/minigame/dev/api/ui/window/wx.onWindowResize.html)
         *
         * 监听窗口尺寸变化事件 */
        onWindowResize(
            /** 窗口尺寸变化事件的回调函数 */
            callback: OnWindowResizeCallback,
        ): void
        /** [wx.openBluetoothAdapter(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.openBluetoothAdapter.html)
*
* 初始化蓝牙模块
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
        openBluetoothAdapter(option?: OpenBluetoothAdapterOption): void
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
        openCard(option: OpenCardOption): void
        /** [wx.openCustomerServiceConversation(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/customer-message/wx.openCustomerServiceConversation.html)
         *
         * 进入客服会话。要求在用户发生过至少一次 touch 事件后才能调用。后台接入方式与小程序一致，详见 [客服消息接入](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/customer-message/customer-message.html)
         *
         * 最低基础库： `2.0.3` */
        openCustomerServiceConversation(
            option: OpenCustomerServiceConversationOption,
        ): void
        /** [wx.openSetting(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/wx.openSetting.html)
*
* 调起客户端小程序设置界面，返回用户设置的操作结果。**设置界面只会出现小程序已经向用户请求过的[权限](https://developers.weixin.qq.com/minigame/dev/guide/framework/authorize.html)**。
*
*
* 注意：[2.3.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 版本开始，用户发生点击行为后，才可以跳转打开设置页，管理授权信息。[详情](https://developers.weixin.qq.com/community/develop/doc/000cea2305cc5047af5733de751008)
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
        openSetting(option?: OpenSettingOption): void
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
        previewImage(option: PreviewImageOption): void
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
        readBLECharacteristicValue(
            option: ReadBLECharacteristicValueOption,
        ): void
        /** [wx.removeStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/storage/wx.removeStorage.html)
*
* 从本地缓存中移除指定 key
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
        removeStorage(option: RemoveStorageOption): void
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
            key: string,
        ): void
        /** [wx.removeUserCloudStorage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.removeUserCloudStorage.html)
         *
         * 删除用户托管数据当中对应 key 的数据。
         *
         * 最低基础库： `1.9.92` */
        removeUserCloudStorage(option: RemoveUserCloudStorageOption): void
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
            value: number,
        ): void
        /** [wx.reportPerformance(Number id, Number value)](https://developers.weixin.qq.com/minigame/dev/api/base/performance/wx.reportPerformance.html)
*
* 自定义性能监控上报。使用前，需要在小程序管理后台配置。 详情参见[测速系统](/miniprogram/dev/framework/performanceReport/)指南。
*
* **示例代码**
*
*
* ```js
wx.reportPerformance(1101, 680)
```
*
* 最低基础库： `2.10.0` */
        reportPerformance(
            /** 指标 id */
            id: number,
            /** 需要上报的数值 */
            value: number,
        ): void
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
         * | 648 | */
        requestMidasPayment(option: RequestMidasPaymentOption): void
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
*
* **错误码**
*
*
*
* | errCode | errMsg                                                 | 说明                                                           |
* | ------- | ------------------------------------------------------ | -------------------------------------------------------------- |
* | 10001   | TmplIds can't be empty                                 | 参数传空了                                                     |
* | 10002   | Request list fai                                       | 网络问题，请求消息列表失败                                     |
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
* 最低基础库： `2.8.2` */
        requestSubscribeMessage(option: RequestSubscribeMessageOption): void
        /** [wx.requestSubscribeSystemMessage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/open-api/subscribe-message/wx.requestSubscribeSystemMessage.html)
*
* 调起小游戏系统订阅消息界面，返回用户订阅消息的操作结果。当用户勾选了订阅面板中的“总是保持以上选择，不再询问”时，模板消息会被添加到用户的小游戏设置页，通过 [wx.getSetting](https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/wx.getSetting.html) 接口可获取用户对相关模板消息的订阅状态。
*
* ## 注意事项
*  - 需要在 touchend 事件的回调中调用。
*  - 使用前建议阅读 [小游戏系统订阅消息使用指引](#)。
*  - 系统订阅消息只需要订阅一次，永久有效。
*
* **错误码**
*
*
*
* | errCode | errMsg                                                 | 说明                                                           |
* | ------- | ------------------------------------------------------ | -------------------------------------------------------------- |
* | 10001   | TmplIds can't be empty                                 | 参数传空了                                                     |
* | 10002   | Request list fai                                       | 网络问题，请求消息列表失败                                     |
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
        requestSubscribeSystemMessage(
            option: RequestSubscribeSystemMessageOption,
        ): void
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
        saveImageToPhotosAlbum(option: SaveImageToPhotosAlbumOption): void
        /** [wx.sendSocketMessage(Object object)](https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.sendSocketMessage.html)
*
* 通过 WebSocket 连接发送数据。需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。
*
* **示例代码**
*
*
* ```js
let socketOpen = false
const socketMsgQueue = []
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
        sendSocketMessage(option: SendSocketMessageOption): void
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
        setClipboardData(option: SetClipboardDataOption): void
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
        setEnableDebug(option: SetEnableDebugOption): void
        /** [wx.setInnerAudioOption(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.setInnerAudioOption.html)
         *
         * 设置 [InnerAudioContext](https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.html) 的播放选项。设置之后对当前小程序全局生效。
         *
         * 最低基础库： `2.3.0` */
        setInnerAudioOption(option: SetInnerAudioOption): void
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
        setKeepScreenOn(option: SetKeepScreenOnOption): void
        /** [wx.setMenuStyle(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/menu/wx.setMenuStyle.html)
         *
         * 动态设置通过右上角按钮拉起的菜单的样式。 */
        setMenuStyle(option: SetMenuStyleOption): void
        /** [wx.setPreferredFramesPerSecond(number fps)](https://developers.weixin.qq.com/minigame/dev/api/render/frame/wx.setPreferredFramesPerSecond.html)
         *
         * 可以修改渲染帧率。默认渲染帧率为 60 帧每秒。修改后，requestAnimationFrame 的回调频率会发生改变。 */
        setPreferredFramesPerSecond(
            /** 帧率，有效范围 1 - 60。 */
            fps: number,
        ): void
        /** [wx.setScreenBrightness(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/screen/wx.setScreenBrightness.html)
         *
         * 设置屏幕亮度
         *
         * 最低基础库： `1.2.0` */
        setScreenBrightness(option: SetScreenBrightnessOption): void
        /** [wx.setStatusBarStyle(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/statusbar/wx.setStatusBarStyle.html)
         *
         * 当在配置中设置 showStatusBarStyle 时，屏幕顶部会显示状态栏。此接口可以修改状态栏的样式。 */
        setStatusBarStyle(option: SetStatusBarStyleOption): void
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
        setStorage(option: SetStorageOption): void
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
        setStorageSync(
            /** 本地缓存中指定的 key */
            key: string,
            /** 需要存储的内容。只支持原生类型、Date、及能够通过`JSON.stringify`序列化的对象。 */
            data: any,
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
        setUserCloudStorage(option: SetUserCloudStorageOption): void
        /** [wx.setWindowSize(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/window/wx.setWindowSize.html)
         *
         * 设置窗口大小，该接口仅适用于 PC 平台，使用细则请参见指南
         *
         * 最低基础库： `2.10.1` */
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
        showActionSheet(option: ShowActionSheetOption): void
        /** [wx.showKeyboard(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/keyboard/wx.showKeyboard.html)
         *
         * 显示键盘 */
        showKeyboard(option: ShowKeyboardOption): void
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
        showLoading(option: ShowLoadingOption): void
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
        showModal(option: ShowModalOption): void
        /** [wx.showShareMenu(Object object)](https://developers.weixin.qq.com/minigame/dev/api/share/wx.showShareMenu.html)
*
* 显示当前页面的转发按钮
*
* **示例代码**
*
*
* ```js
wx.showShareMenu({
  withShareTicket: true
})
```
*
* 最低基础库： `1.1.0` */
        showShareMenu(option: ShowShareMenuOption): void
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
        showToast(option: ShowToastOption): void
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
        startAccelerometer(option: StartAccelerometerOption): void
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
        startBeaconDiscovery(option: StartBeaconDiscoveryOption): void
        /** [wx.startBluetoothDevicesDiscovery(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.startBluetoothDevicesDiscovery.html)
*
* 开始搜寻附近的蓝牙外围设备。**此操作比较耗费系统资源，请在搜索并连接到设备后调用 [wx.stopBluetoothDevicesDiscovery](https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.stopBluetoothDevicesDiscovery.html) 方法停止搜索。**
*
* **示例代码**
*
*
* [在微信开发者工具中查看示例](https://developers.weixin.qq.com/s/pQU51zmz7a3K)
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
        startBluetoothDevicesDiscovery(
            option: StartBluetoothDevicesDiscoveryOption,
        ): void
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
        startCompass(option?: StartCompassOption): void
        /** [wx.startDeviceMotionListening(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/motion/wx.startDeviceMotionListening.html)
         *
         * 开始监听设备方向的变化。
         *
         * 最低基础库： `2.3.0` */
        startDeviceMotionListening(
            option: StartDeviceMotionListeningOption,
        ): void
        /** [wx.startGyroscope(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/gyroscope/wx.startGyroscope.html)
         *
         * 开始监听陀螺仪数据。
         *
         * 最低基础库： `2.3.0` */
        startGyroscope(option: StartGyroscopeOption): void
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
        stopAccelerometer(option?: StopAccelerometerOption): void
        /** [wx.stopBeaconDiscovery(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.stopBeaconDiscovery.html)
         *
         * 停止搜索附近的 iBeacon 设备
         *
         * 最低基础库： `2.9.2` */
        stopBeaconDiscovery(option?: StopBeaconDiscoveryOption): void
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
        stopBluetoothDevicesDiscovery(
            option?: StopBluetoothDevicesDiscoveryOption,
        ): void
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
        stopCompass(option?: StopCompassOption): void
        /** [wx.stopDeviceMotionListening(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/motion/wx.stopDeviceMotionListening.html)
         *
         * 停止监听设备方向的变化。
         *
         * 最低基础库： `2.3.0` */
        stopDeviceMotionListening(
            option?: StopDeviceMotionListeningOption,
        ): void
        /** [wx.stopGyroscope(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/gyroscope/wx.stopGyroscope.html)
         *
         * 停止监听陀螺仪数据。
         *
         * 最低基础库： `2.3.0` */
        stopGyroscope(option?: StopGyroscopeOption): void
        /** [wx.triggerGC()](https://developers.weixin.qq.com/minigame/dev/api/base/performance/wx.triggerGC.html)
         *
         * 加快触发 JavaScriptCore 垃圾回收（Garbage Collection）。GC 时机是由 JavaScriptCore 来控制的，并不能保证调用后马上触发 GC。 */
        triggerGC(): void
        /** [wx.updateKeyboard(Object object)](https://developers.weixin.qq.com/minigame/dev/api/ui/keyboard/wx.updateKeyboard.html)
         *
         * 更新键盘输入框内容。只有当键盘处于拉起状态时才会产生效果
         *
         * 最低基础库： `2.1.0` */
        updateKeyboard(option: UpdateKeyboardOption): void
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
*
* 最低基础库： `1.2.0` */
        updateShareMenu(option: UpdateShareMenuOption): void
        /** [wx.updateVoIPChatMuteConfig(Object object)](https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.updateVoIPChatMuteConfig.html)
         *
         * 更新实时语音静音设置
         *
         * 最低基础库： `2.7.0` */
        updateVoIPChatMuteConfig(option: UpdateVoIPChatMuteConfigOption): void
        /** [wx.vibrateLong(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/vibrate/wx.vibrateLong.html)
         *
         * 使手机发生较长时间的振动（400 ms)
         *
         * 最低基础库： `1.2.0` */
        vibrateLong(option?: VibrateLongOption): void
        /** [wx.vibrateShort(Object object)](https://developers.weixin.qq.com/minigame/dev/api/device/vibrate/wx.vibrateShort.html)
         *
         * 使手机发生较短时间的振动（15 ms）。仅在 iPhone `7 / 7 Plus` 以上及 Android 机型生效
         *
         * 最低基础库： `1.2.0` */
        vibrateShort(option?: VibrateShortOption): void
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
        writeBLECharacteristicValue(
            option: WriteBLECharacteristicValueOption,
        ): void /**
小程序云开发
*/
        cloud: WxCloud /**
文件系统中的用户目录路径
*/
        env: { USER_DATA_PATH: string }
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
    type AppendFileCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type AppendFileFailCallback = (result: AppendFileFailCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type AppendFileSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type AuthorizeCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type AuthorizeFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type AuthorizeSuccessCallback = (res: GeneralCallbackResult) => void
    /** banner 广告错误事件的回调函数 */
    type BannerAdOffErrorCallback = (res: GeneralCallbackResult) => void
    /** banner 广告加载事件的回调函数 */
    type BannerAdOffLoadCallback = (res: GeneralCallbackResult) => void
    /** banner 广告错误事件的回调函数 */
    type BannerAdOnErrorCallback = (
        result: BannerAdOnErrorCallbackResult,
    ) => void
    /** banner 广告加载事件的回调函数 */
    type BannerAdOnLoadCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type BroadcastInRoomCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type BroadcastInRoomFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type BroadcastInRoomSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ChangeSeatCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ChangeSeatFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ChangeSeatSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type CheckIsUserAdvisedToRestCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type CheckIsUserAdvisedToRestFailCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用成功的回调函数 */
    type CheckIsUserAdvisedToRestSuccessCallback = (
        result: CheckIsUserAdvisedToRestSuccessCallbackResult,
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
        result: ChooseImageSuccessCallbackResult,
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
        result: CreateRoomSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type DownloadFileCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type DownloadFileFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type DownloadFileSuccessCallback = (
        result: DownloadFileSuccessCallbackResult,
    ) => void
    /** HTTP Response Header 事件的回调函数 */
    type DownloadTaskOffHeadersReceivedCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 下载进度变化事件的回调函数 */
    type DownloadTaskOffProgressUpdateCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** HTTP Response Header 事件的回调函数 */
    type DownloadTaskOnHeadersReceivedCallback = (
        result: DownloadTaskOnHeadersReceivedCallbackResult,
    ) => void
    /** 下载进度变化事件的回调函数 */
    type DownloadTaskOnProgressUpdateCallback = (
        result: DownloadTaskOnProgressUpdateCallbackResult,
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
    /** 意见反馈按钮的点击事件的回调函数 */
    type FeedbackButtonOffTapCallback = (res: GeneralCallbackResult) => void
    /** 意见反馈按钮的点击事件的回调函数 */
    type FeedbackButtonOnTapCallback = (res: GeneralCallbackResult) => void
    /** 游戏圈按钮的点击事件的回调函数 */
    type GameClubButtonOffTapCallback = (res: GeneralCallbackResult) => void
    /** 游戏圈按钮的点击事件的回调函数 */
    type GameClubButtonOnTapCallback = (res: GeneralCallbackResult) => void
    /** 游戏对局回放分享按钮的点击事件的回调函数 */
    type GameRecorderShareButtonOffTapCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 游戏对局回放分享按钮的点击事件的回调函数 */
    type GameRecorderShareButtonOnTapCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetAvailableAudioSourcesCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type GetAvailableAudioSourcesFailCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用成功的回调函数 */
    type GetAvailableAudioSourcesSuccessCallback = (
        result: GetAvailableAudioSourcesSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBLEDeviceCharacteristicsCompleteCallback = (
        res: BluetoothError,
    ) => void
    /** 接口调用失败的回调函数 */
    type GetBLEDeviceCharacteristicsFailCallback = (res: BluetoothError) => void
    /** 接口调用成功的回调函数 */
    type GetBLEDeviceCharacteristicsSuccessCallback = (
        result: GetBLEDeviceCharacteristicsSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBLEDeviceServicesCompleteCallback = (res: BluetoothError) => void
    /** 接口调用失败的回调函数 */
    type GetBLEDeviceServicesFailCallback = (res: BluetoothError) => void
    /** 接口调用成功的回调函数 */
    type GetBLEDeviceServicesSuccessCallback = (
        result: GetBLEDeviceServicesSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBatteryInfoCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetBatteryInfoFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetBatteryInfoSuccessCallback = (
        result: GetBatteryInfoSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBeaconsCompleteCallback = (res: IBeaconError) => void
    /** 接口调用失败的回调函数 */
    type GetBeaconsFailCallback = (res: IBeaconError) => void
    /** 接口调用成功的回调函数 */
    type GetBeaconsSuccessCallback = (
        result: GetBeaconsSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBluetoothAdapterStateCompleteCallback = (
        res: BluetoothError,
    ) => void
    /** 接口调用失败的回调函数 */
    type GetBluetoothAdapterStateFailCallback = (res: BluetoothError) => void
    /** 接口调用成功的回调函数 */
    type GetBluetoothAdapterStateSuccessCallback = (
        result: GetBluetoothAdapterStateSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetBluetoothDevicesCompleteCallback = (res: BluetoothError) => void
    /** 接口调用失败的回调函数 */
    type GetBluetoothDevicesFailCallback = (res: BluetoothError) => void
    /** 接口调用成功的回调函数 */
    type GetBluetoothDevicesSuccessCallback = (
        result: GetBluetoothDevicesSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetClipboardDataCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetClipboardDataFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetClipboardDataSuccessCallback = (
        option: GetClipboardDataSuccessCallbackOption,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetConnectedBluetoothDevicesCompleteCallback = (
        res: BluetoothError,
    ) => void
    /** 接口调用失败的回调函数 */
    type GetConnectedBluetoothDevicesFailCallback = (
        res: BluetoothError,
    ) => void
    /** 接口调用成功的回调函数 */
    type GetConnectedBluetoothDevicesSuccessCallback = (
        result: GetConnectedBluetoothDevicesSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetExtConfigCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetExtConfigFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetExtConfigSuccessCallback = (
        result: GetExtConfigSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetFileInfoCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetFileInfoFailCallback = (
        result: GetFileInfoFailCallbackResult,
    ) => void
    /** 接口调用成功的回调函数 */
    type GetFileInfoSuccessCallback = (
        result: GetFileInfoSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetFriendCloudStorageCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type GetFriendCloudStorageFailCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用成功的回调函数 */
    type GetFriendCloudStorageSuccessCallback = (
        result: GetFriendCloudStorageSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetFriendsStateDataCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type GetFriendsStateDataFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetFriendsStateDataSuccessCallback = (result: Res) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetGroupCloudStorageCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type GetGroupCloudStorageFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetGroupCloudStorageSuccessCallback = (
        result: GetGroupCloudStorageSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetGroupInfoCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetGroupInfoFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetGroupInfoSuccessCallback = (
        result: GetGroupInfoSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetLastRoomInfoCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetLastRoomInfoFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetLastRoomInfoSuccessCallback = (
        result: GetLastRoomInfoSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetLocationCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetLocationFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetLocationSuccessCallback = (
        result: GetLocationSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetLostFramesCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetLostFramesFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetLostFramesSuccessCallback = (
        result: GetLostFramesSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetNetworkTypeCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetNetworkTypeFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetNetworkTypeSuccessCallback = (
        result: GetNetworkTypeSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetPotentialFriendListCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type GetPotentialFriendListFailCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用成功的回调函数 */
    type GetPotentialFriendListSuccessCallback = (
        result: GetPotentialFriendListSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetRoomInfoCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetRoomInfoFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetRoomInfoSuccessCallback = (
        result: GetRoomInfoSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetSavedFileListCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetSavedFileListFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetSavedFileListSuccessCallback = (
        result: GetSavedFileListSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetScreenBrightnessCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type GetScreenBrightnessFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetScreenBrightnessSuccessCallback = (
        option: GetScreenBrightnessSuccessCallbackOption,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetSettingCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetSettingFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetSettingSuccessCallback = (
        result: GetSettingSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetShareInfoCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetShareInfoFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetShareInfoSuccessCallback = (
        result: GetShareInfoSuccessCallbackResult,
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
        option: GetStorageInfoSuccessCallbackOption,
    ) => void
    /** 接口调用成功的回调函数 */
    type GetStorageSuccessCallback = (
        result: GetStorageSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetSystemInfoCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetSystemInfoFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetSystemInfoSuccessCallback = (
        result: GetSystemInfoSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetTextLineHeightCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type GetTextLineHeightFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetTextLineHeightSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetUserCloudStorageCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type GetUserCloudStorageFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetUserCloudStorageSuccessCallback = (
        result: GetUserCloudStorageSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetUserGameLabelCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetUserGameLabelFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetUserGameLabelSuccessCallback = (
        result: GetUserGameLabelSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetUserInfoCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetUserInfoFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetUserInfoSuccessCallback = (
        result: GetUserInfoSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetUserInteractiveStorageCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type GetUserInteractiveStorageFailCallback = (
        result: GetUserInteractiveStorageFailCallbackResult,
    ) => void
    /** 接口调用成功的回调函数 */
    type GetUserInteractiveStorageSuccessCallback = (
        result: GetUserInteractiveStorageSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type GetWeRunDataCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type GetWeRunDataFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type GetWeRunDataSuccessCallback = (
        result: GetWeRunDataSuccessCallbackResult,
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
    /** 音频自然播放至结束的事件的回调函数 */
    type InnerAudioContextOffEndedCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 音频播放错误事件的回调函数 */
    type InnerAudioContextOffErrorCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 音频暂停事件的回调函数 */
    type InnerAudioContextOffPauseCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 音频播放事件的回调函数 */
    type InnerAudioContextOffPlayCallback = (res: GeneralCallbackResult) => void
    /** 音频播放进度更新事件的回调函数 */
    type InnerAudioContextOffTimeUpdateCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 音频加载中事件的回调函数 */
    type InnerAudioContextOffWaitingCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 音频自然播放至结束的事件的回调函数 */
    type InnerAudioContextOnEndedCallback = (res: GeneralCallbackResult) => void
    /** 音频播放错误事件的回调函数 */
    type InnerAudioContextOnErrorCallback = (
        result: InnerAudioContextOnErrorCallbackResult,
    ) => void
    /** 音频暂停事件的回调函数 */
    type InnerAudioContextOnPauseCallback = (res: GeneralCallbackResult) => void
    /** 音频播放事件的回调函数 */
    type InnerAudioContextOnPlayCallback = (res: GeneralCallbackResult) => void
    /** 音频停止事件的回调函数 */
    type InnerAudioContextOnStopCallback = (res: GeneralCallbackResult) => void
    /** 音频播放进度更新事件的回调函数 */
    type InnerAudioContextOnTimeUpdateCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 音频加载中事件的回调函数 */
    type InnerAudioContextOnWaitingCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 插屏广告关闭事件的回调函数 */
    type InterstitialAdOffCloseCallback = (res: GeneralCallbackResult) => void
    /** 插屏错误事件的回调函数 */
    type InterstitialAdOffErrorCallback = (res: GeneralCallbackResult) => void
    /** 插屏广告加载事件的回调函数 */
    type InterstitialAdOffLoadCallback = (res: GeneralCallbackResult) => void
    /** 插屏广告关闭事件的回调函数 */
    type InterstitialAdOnCloseCallback = (res: GeneralCallbackResult) => void
    /** 插屏错误事件的回调函数 */
    type InterstitialAdOnErrorCallback = (
        result: InterstitialAdOnErrorCallbackResult,
    ) => void
    /** 插屏广告加载事件的回调函数 */
    type InterstitialAdOnLoadCallback = (res: GeneralCallbackResult) => void
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
        result: JoinRoomSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type JoinVoIPChatCompleteCallback = (res: JoinVoIPChatError) => void
    /** 接口调用失败的回调函数 */
    type JoinVoIPChatFailCallback = (res: JoinVoIPChatError) => void
    /** 接口调用成功的回调函数 */
    type JoinVoIPChatSuccessCallback = (
        result: JoinVoIPChatSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type KickoutMemberCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type KickoutMemberFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type KickoutMemberSuccessCallback = (res: GeneralCallbackResult) => void
    /** 分包加载进度变化事件的回调函数 */
    type LoadSubpackageTaskOnProgressUpdateCallback = (
        result: LoadSubpackageTaskOnProgressUpdateCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type LoginCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type LoginFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type LoginSuccessCallback = (result: LoginSuccessCallbackResult) => void
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
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type ModifyFriendInteractiveStorageFailCallback = (
        result: ModifyFriendInteractiveStorageFailCallbackResult,
    ) => void
    /** 接口调用成功的回调函数 */
    type ModifyFriendInteractiveStorageSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type NavigateToMiniProgramCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type NavigateToMiniProgramFailCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用成功的回调函数 */
    type NavigateToMiniProgramSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type NotifyBLECharacteristicValueChangeCompleteCallback = (
        res: BluetoothError,
    ) => void
    /** 接口调用失败的回调函数 */
    type NotifyBLECharacteristicValueChangeFailCallback = (
        res: BluetoothError,
    ) => void
    /** 接口调用成功的回调函数 */
    type NotifyBLECharacteristicValueChangeSuccessCallback = (
        res: BluetoothError,
    ) => void
    /** 音频因为受到系统占用而被中断开始事件的回调函数 */
    type OffAudioInterruptionBeginCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 音频中断结束事件的回调函数 */
    type OffAudioInterruptionEndCallback = (res: GeneralCallbackResult) => void
    /** 的回调函数 */
    type OffBeKickedOutCallback = (res: GeneralCallbackResult) => void
    /** iBeacon 服务状态变化事件的回调函数 */
    type OffBeaconServiceChangeCallback = (res: GeneralCallbackResult) => void
    /** iBeacon 设备更新事件的回调函数 */
    type OffBeaconUpdateCallback = (res: GeneralCallbackResult) => void
    /** 的回调函数 */
    type OffBroadcastCallback = (res: GeneralCallbackResult) => void
    /** 音频进入可以播放状态的事件的回调函数 */
    type OffCanplayCallback = (res: GeneralCallbackResult) => void
    /** 横竖屏切换事件的回调函数 */
    type OffDeviceOrientationChangeCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 断开连接，收到此事件的回调函数 */
    type OffDisconnectCallback = (res: GeneralCallbackResult) => void
    /** 的回调函数 */
    type OffGameEndCallback = (res: GeneralCallbackResult) => void
    /** 的回调函数 */
    type OffGameStartCallback = (res: GeneralCallbackResult) => void
    /** 小游戏隐藏到后台事件的回调函数 */
    type OffHideCallback = (res: GeneralCallbackResult) => void
    /** 接收邀请，当用户确认邀请之后会收到此事件的回调函数 */
    type OffInviteCallback = (res: GeneralCallbackResult) => void
    /** 键盘按键按下事件的回调函数 */
    type OffKeyDownCallback = (res: GeneralCallbackResult) => void
    /** 键盘按键弹起事件的回调函数 */
    type OffKeyUpCallback = (res: GeneralCallbackResult) => void
    /** 监听键盘收起的事件的回调函数 */
    type OffKeyboardCompleteCallback = (res: GeneralCallbackResult) => void
    /** 用户点击键盘 Confirm 按钮时的事件的回调函数 */
    type OffKeyboardConfirmCallback = (res: GeneralCallbackResult) => void
    /** 键盘输入事件的回调函数 */
    type OffKeyboardInputCallback = (res: GeneralCallbackResult) => void
    /** 开始监听数据包消息的事件的回调函数 */
    type OffListeningCallback = (res: GeneralCallbackResult) => void
    /** 用户登出游戏服务事件的回调函数 */
    type OffLogoutCallback = (res: GeneralCallbackResult) => void
    /** 收到消息的事件的回调函数 */
    type OffMessageCallback = (res: GeneralCallbackResult) => void
    /** 鼠标按键按下事件的回调函数 */
    type OffMouseDownCallback = (res: GeneralCallbackResult) => void
    /** 鼠标移动事件的回调函数 */
    type OffMouseMoveCallback = (res: GeneralCallbackResult) => void
    /** 鼠标按键弹起事件的回调函数 */
    type OffMouseUpCallback = (res: GeneralCallbackResult) => void
    /** banner 广告尺寸变化事件的回调函数 */
    type OffResizeCallback = (res: GeneralCallbackResult) => void
    /** 的回调函数 */
    type OffRoomInfoChangeCallback = (res: GeneralCallbackResult) => void
    /** 音频完成跳转操作的事件的回调函数 */
    type OffSeekedCallback = (res: GeneralCallbackResult) => void
    /** 音频进行跳转操作的事件的回调函数 */
    type OffSeekingCallback = (res: GeneralCallbackResult) => void
    /** 用户点击右上角菜单的「转发」按钮时触发的事件的回调函数 */
    type OffShareAppMessageCallback = (res: GeneralCallbackResult) => void
    /** 小游戏回到前台的事件的回调函数 */
    type OffShowCallback = (res: GeneralCallbackResult) => void
    /** 的回调函数 */
    type OffStateUpdateCallback = (res: GeneralCallbackResult) => void
    /** 音频停止事件的回调函数 */
    type OffStopCallback = (res: GeneralCallbackResult) => void
    /** 的回调函数 */
    type OffSyncFrameCallback = (res: GeneralCallbackResult) => void
    /** 触点失效事件的回调函数 */
    type OffTouchCancelCallback = (res: GeneralCallbackResult) => void
    /** 触摸结束事件的回调函数 */
    type OffTouchEndCallback = (res: GeneralCallbackResult) => void
    /** 触点移动事件的回调函数 */
    type OffTouchMoveCallback = (res: GeneralCallbackResult) => void
    /** 开始触摸事件的回调函数 */
    type OffTouchStartCallback = (res: GeneralCallbackResult) => void
    /** 未处理的 Promise 拒绝事件的回调函数 */
    type OffUnhandledRejectionCallback = (res: GeneralCallbackResult) => void
    /** 鼠标滚轮事件的回调函数 */
    type OffWheelCallback = (res: GeneralCallbackResult) => void
    /** 窗口尺寸变化事件的回调函数 */
    type OffWindowResizeCallback = (res: GeneralCallbackResult) => void
    /** 加速度数据事件的回调函数 */
    type OnAccelerometerChangeCallback = (
        result: OnAccelerometerChangeCallbackResult,
    ) => void
    /** 音频因为受到系统占用而被中断开始事件的回调函数 */
    type OnAudioInterruptionBeginCallback = (res: GeneralCallbackResult) => void
    /** 音频中断结束事件的回调函数 */
    type OnAudioInterruptionEndCallback = (res: GeneralCallbackResult) => void
    /** 低功耗蓝牙设备的特征值变化事件的回调函数 */
    type OnBLECharacteristicValueChangeCallback = (
        result: OnBLECharacteristicValueChangeCallbackResult,
    ) => void
    /** 低功耗蓝牙连接状态的改变事件的回调函数 */
    type OnBLEConnectionStateChangeCallback = (
        result: OnBLEConnectionStateChangeCallbackResult,
    ) => void
    /** 的回调函数 */
    type OnBeKickedOutCallback = (result: OnBeKickedOutCallbackResult) => void
    /** iBeacon 服务状态变化事件的回调函数 */
    type OnBeaconServiceChangeCallback = (
        result: OnBeaconServiceChangeCallbackResult,
    ) => void
    /** iBeacon 设备更新事件的回调函数 */
    type OnBeaconUpdateCallback = (result: OnBeaconUpdateCallbackResult) => void
    /** 蓝牙适配器状态变化事件的回调函数 */
    type OnBluetoothAdapterStateChangeCallback = (
        result: OnBluetoothAdapterStateChangeCallbackResult,
    ) => void
    /** 寻找到新设备的事件的回调函数 */
    type OnBluetoothDeviceFoundCallback = (
        result: OnBluetoothDeviceFoundCallbackResult,
    ) => void
    /** 的回调函数 */
    type OnBroadcastCallback = (result: OnBroadcastCallbackResult) => void
    /** 摄像头返回实时帧数据的回调函数 */
    type OnCameraFrameCallback = (result: OnCameraFrameCallbackResult) => void
    /** 音频进入可以播放状态的事件的回调函数 */
    type OnCanplayCallback = (res: GeneralCallbackResult) => void
    /** 向微信后台请求检查更新结果事件的回调函数 */
    type OnCheckForUpdateCallback = (
        result: OnCheckForUpdateCallbackResult,
    ) => void
    /** 罗盘数据变化事件的回调函数 */
    type OnCompassChangeCallback = (
        result: OnCompassChangeCallbackResult,
    ) => void
    /** 设备方向变化事件的回调函数 */
    type OnDeviceMotionChangeCallback = (
        result: OnDeviceMotionChangeCallbackResult,
    ) => void
    /** 横竖屏切换事件的回调函数 */
    type OnDeviceOrientationChangeCallback = (
        result: OnDeviceOrientationChangeCallbackResult,
    ) => void
    /** 断开连接，收到此事件的回调函数 */
    type OnDisconnectCallback = (result: undefined) => void
    /** 已录制完指定帧大小的文件事件的回调函数 */
    type OnFrameRecordedCallback = (
        result: OnFrameRecordedCallbackResult,
    ) => void
    /** 的回调函数 */
    type OnGameEndCallback = (result: OnGameEndCallbackResult) => void
    /** 的回调函数 */
    type OnGameStartCallback = (res: GeneralCallbackResult) => void
    /** 陀螺仪数据变化事件的回调函数 */
    type OnGyroscopeChangeCallback = (
        result: OnGyroscopeChangeCallbackResult,
    ) => void
    /** 小游戏隐藏到后台事件的回调函数 */
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
    type OnKeyUpCallback = (result: OnKeyUpCallbackResult) => void
    /** 监听键盘收起的事件的回调函数 */
    type OnKeyboardCompleteCallback = (
        result: OnKeyboardCompleteCallbackResult,
    ) => void
    /** 用户点击键盘 Confirm 按钮时的事件的回调函数 */
    type OnKeyboardConfirmCallback = (
        result: OnKeyboardConfirmCallbackResult,
    ) => void
    /** 键盘输入事件的回调函数 */
    type OnKeyboardInputCallback = (
        result: OnKeyboardInputCallbackResult,
    ) => void
    /** 开始监听数据包消息的事件的回调函数 */
    type OnListeningCallback = (res: GeneralCallbackResult) => void
    /** 用户登出游戏服务事件的回调函数 */
    type OnLogoutCallback = (res: GeneralCallbackResult) => void
    /** 内存不足告警事件的回调函数 */
    type OnMemoryWarningCallback = (
        result: OnMemoryWarningCallbackResult,
    ) => void
    /** 鼠标按键按下事件的回调函数 */
    type OnMouseDownCallback = (result: OnMouseDownCallbackResult) => void
    /** 鼠标移动事件的回调函数 */
    type OnMouseMoveCallback = (result: OnMouseMoveCallbackResult) => void
    /** 鼠标按键弹起事件的回调函数 */
    type OnMouseUpCallback = (result: OnMouseUpCallbackResult) => void
    /** 网络状态变化事件的回调函数 */
    type OnNetworkStatusChangeCallback = (
        result: OnNetworkStatusChangeCallbackResult,
    ) => void
    /** WebSocket 连接打开事件的回调函数 */
    type OnOpenCallback = (result: OnOpenCallbackResult) => void
    /** banner 广告尺寸变化事件的回调函数 */
    type OnResizeCallback = (result: OnResizeCallbackResult) => void
    /** 录音继续事件的回调函数 */
    type OnResumeCallback = (res: GeneralCallbackResult) => void
    /** 的回调函数 */
    type OnRoomInfoChangeCallback = (result: undefined) => void
    /** 音频完成跳转操作的事件的回调函数 */
    type OnSeekedCallback = (res: GeneralCallbackResult) => void
    /** 音频进行跳转操作的事件的回调函数 */
    type OnSeekingCallback = (res: GeneralCallbackResult) => void
    /** 用户点击右上角菜单的「转发」按钮时触发的事件的回调函数 */
    type OnShareAppMessageCallback = (
        result: OnShareAppMessageCallbackResult,
    ) => void
    /** 的回调函数 */
    type OnShareMessageToFriendCallback = (
        result: OnShareMessageToFriendCallbackResult,
    ) => void
    /** 小游戏回到前台的事件的回调函数 */
    type OnShowCallback = (result: OnShowCallbackResult) => void
    /** WebSocket 连接关闭事件的回调函数 */
    type OnSocketCloseCallback = (result: OnSocketCloseCallbackResult) => void
    /** WebSocket 错误事件的回调函数 */
    type OnSocketErrorCallback = (result: OnSocketErrorCallbackResult) => void
    /** WebSocket 接受到服务器的消息事件的回调函数 */
    type OnSocketMessageCallback = (
        result: OnSocketMessageCallbackResult,
    ) => void
    /** WebSocket 连接打开事件的回调函数 */
    type OnSocketOpenCallback = (result: OnSocketOpenCallbackResult) => void
    /** 录音开始事件的回调函数 */
    type OnStartCallback = (res: GeneralCallbackResult) => void
    /** 的回调函数 */
    type OnStateUpdateCallback = (result: undefined) => void
    /** 的回调函数 */
    type OnSyncFrameCallback = (result: OnSyncFrameCallbackResult) => void
    /** 触点失效事件的回调函数 */
    type OnTouchCancelCallback = (result: OnTouchCancelCallbackResult) => void
    /** 触摸结束事件的回调函数 */
    type OnTouchEndCallback = (result: OnTouchEndCallbackResult) => void
    /** 触点移动事件的回调函数 */
    type OnTouchMoveCallback = (result: OnTouchMoveCallbackResult) => void
    /** 开始触摸事件的回调函数 */
    type OnTouchStartCallback = (result: OnTouchStartCallbackResult) => void
    /** 未处理的 Promise 拒绝事件的回调函数 */
    type OnUnhandledRejectionCallback = (
        result: OnUnhandledRejectionCallbackResult,
    ) => void
    /** 小程序更新失败事件的回调函数 */
    type OnUpdateFailedCallback = (res: GeneralCallbackResult) => void
    /** 小程序有版本更新事件的回调函数 */
    type OnUpdateReadyCallback = (res: GeneralCallbackResult) => void
    /** 用户主动截屏事件的回调函数 */
    type OnUserCaptureScreenCallback = (res: GeneralCallbackResult) => void
    /** 被动断开实时语音通话事件的回调函数 */
    type OnVoIPChatInterruptedCallback = (
        result: OnVoIPChatInterruptedCallbackResult,
    ) => void
    /** 实时语音通话成员在线状态变化事件的回调函数 */
    type OnVoIPChatMembersChangedCallback = (
        result: OnVoIPChatMembersChangedCallbackResult,
    ) => void
    /** 实时语音通话成员通话状态变化事件的回调函数 */
    type OnVoIPChatSpeakersChangedCallback = (
        result: OnVoIPChatSpeakersChangedCallbackResult,
    ) => void
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
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type OpenCustomerServiceConversationFailCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用成功的回调函数 */
    type OpenCustomerServiceConversationSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 设置页面按钮的点击事件的回调函数 */
    type OpenSettingButtonOffTapCallback = (res: GeneralCallbackResult) => void
    /** 设置页面按钮的点击事件的回调函数 */
    type OpenSettingButtonOnTapCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type OpenSettingCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type OpenSettingFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type OpenSettingSuccessCallback = (
        result: OpenSettingSuccessCallbackResult,
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
    type ReadBLECharacteristicValueCompleteCallback = (
        res: BluetoothError,
    ) => void
    /** 接口调用失败的回调函数 */
    type ReadBLECharacteristicValueFailCallback = (res: BluetoothError) => void
    /** 接口调用成功的回调函数 */
    type ReadBLECharacteristicValueSuccessCallback = (
        res: BluetoothError,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ReadFileCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ReadFileFailCallback = (result: ReadFileFailCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ReadFileSuccessCallback = (
        result: ReadFileSuccessCallbackResult,
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
        result: ReconnectSuccessCallbackResult,
    ) => void
    /** 录音错误事件的回调函数 */
    type RecorderManagerOnErrorCallback = (
        result: RecorderManagerOnErrorCallbackResult,
    ) => void
    /** 录音暂停事件的回调函数 */
    type RecorderManagerOnPauseCallback = (res: GeneralCallbackResult) => void
    /** 录音结束事件的回调函数 */
    type RecorderManagerOnStopCallback = (result: OnStopCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RemoveSavedFileCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type RemoveSavedFileFailCallback = (
        result: RemoveSavedFileFailCallbackResult,
    ) => void
    /** 接口调用成功的回调函数 */
    type RemoveSavedFileSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RemoveStorageCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type RemoveStorageFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type RemoveStorageSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RemoveUserCloudStorageCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type RemoveUserCloudStorageFailCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用成功的回调函数 */
    type RemoveUserCloudStorageSuccessCallback = (
        res: GeneralCallbackResult,
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
    type RequestMidasPaymentCompleteCallback = (res: MidasPaymentError) => void
    /** 接口调用失败的回调函数 */
    type RequestMidasPaymentFailCallback = (res: MidasPaymentError) => void
    /** 接口调用成功的回调函数 */
    type RequestMidasPaymentSuccessCallback = (res: MidasPaymentError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RequestSubscribeMessageCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type RequestSubscribeMessageFailCallback = (
        result: RequestSubscribeMessageFailCallbackResult,
    ) => void
    /** 接口调用成功的回调函数 */
    type RequestSubscribeMessageSuccessCallback = (
        result: RequestSubscribeMessageSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RequestSubscribeSystemMessageCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type RequestSubscribeSystemMessageFailCallback = (
        result: RequestSubscribeSystemMessageFailCallbackResult,
    ) => void
    /** 接口调用成功的回调函数 */
    type RequestSubscribeSystemMessageSuccessCallback = (
        result: RequestSubscribeSystemMessageSuccessCallbackResult,
    ) => void
    /** 接口调用成功的回调函数 */
    type RequestSuccessCallback = (result: RequestSuccessCallbackResult) => void
    /** HTTP Response Header 事件的回调函数 */
    type RequestTaskOffHeadersReceivedCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** HTTP Response Header 事件的回调函数 */
    type RequestTaskOnHeadersReceivedCallback = (
        result: RequestTaskOnHeadersReceivedCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type RestartCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type RestartFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type RestartSuccessCallback = (res: GeneralCallbackResult) => void
    /** 用户点击 `关闭广告` 按钮的事件的回调函数 */
    type RewardedVideoAdOffCloseCallback = (res: GeneralCallbackResult) => void
    /** 激励视频错误事件的回调函数 */
    type RewardedVideoAdOffErrorCallback = (res: GeneralCallbackResult) => void
    /** 激励视频广告加载事件的回调函数 */
    type RewardedVideoAdOffLoadCallback = (res: GeneralCallbackResult) => void
    /** 用户点击 `关闭广告` 按钮的事件的回调函数 */
    type RewardedVideoAdOnCloseCallback = (
        result: RewardedVideoAdOnCloseCallbackResult,
    ) => void
    /** 激励视频错误事件的回调函数 */
    type RewardedVideoAdOnErrorCallback = (
        result: RewardedVideoAdOnErrorCallbackResult,
    ) => void
    /** 激励视频广告加载事件的回调函数 */
    type RewardedVideoAdOnLoadCallback = (res: GeneralCallbackResult) => void
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
        result: SaveFileSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SaveImageToPhotosAlbumCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type SaveImageToPhotosAlbumFailCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用成功的回调函数 */
    type SaveImageToPhotosAlbumSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SendCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type SendFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SendSocketMessageCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type SendSocketMessageFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SendSocketMessageSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SendSuccessCallback = (res: GeneralCallbackResult) => void
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
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type SetInnerAudioOptionFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SetInnerAudioOptionSuccessCallback = (
        res: GeneralCallbackResult,
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
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type SetScreenBrightnessFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SetScreenBrightnessSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetStateCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type SetStateFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SetStateSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetStatusBarStyleCompleteCallback = (
        res: GeneralCallbackResult,
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
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type SetUserCloudStorageFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SetUserCloudStorageSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type SetWindowSizeCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type SetWindowSizeFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type SetWindowSizeSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type ShowActionSheetCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type ShowActionSheetFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type ShowActionSheetSuccessCallback = (
        result: ShowActionSheetSuccessCallbackResult,
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
        result: ShowModalSuccessCallbackResult,
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
        result: SocketTaskOnCloseCallbackResult,
    ) => void
    /** WebSocket 错误事件的回调函数 */
    type SocketTaskOnErrorCallback = (
        result: SocketTaskOnErrorCallbackResult,
    ) => void
    /** WebSocket 接受到服务器的消息事件的回调函数 */
    type SocketTaskOnMessageCallback = (
        result: SocketTaskOnMessageCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartAccelerometerCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type StartAccelerometerFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type StartAccelerometerSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartBeaconDiscoveryCompleteCallback = (res: IBeaconError) => void
    /** 接口调用失败的回调函数 */
    type StartBeaconDiscoveryFailCallback = (res: IBeaconError) => void
    /** 接口调用成功的回调函数 */
    type StartBeaconDiscoverySuccessCallback = (res: IBeaconError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartBluetoothDevicesDiscoveryCompleteCallback = (
        res: BluetoothError,
    ) => void
    /** 接口调用失败的回调函数 */
    type StartBluetoothDevicesDiscoveryFailCallback = (
        res: BluetoothError,
    ) => void
    /** 接口调用成功的回调函数 */
    type StartBluetoothDevicesDiscoverySuccessCallback = (
        res: BluetoothError,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartCompassCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type StartCompassFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type StartCompassSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StartDeviceMotionListeningCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type StartDeviceMotionListeningFailCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用成功的回调函数 */
    type StartDeviceMotionListeningSuccessCallback = (
        res: GeneralCallbackResult,
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
    type StartStateServiceCompleteCallback = (
        res: GeneralCallbackResult,
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
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type StopAccelerometerFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type StopAccelerometerSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopBeaconDiscoveryCompleteCallback = (res: IBeaconError) => void
    /** 接口调用失败的回调函数 */
    type StopBeaconDiscoveryFailCallback = (res: IBeaconError) => void
    /** 接口调用成功的回调函数 */
    type StopBeaconDiscoverySuccessCallback = (res: IBeaconError) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopBluetoothDevicesDiscoveryCompleteCallback = (
        res: BluetoothError,
    ) => void
    /** 接口调用失败的回调函数 */
    type StopBluetoothDevicesDiscoveryFailCallback = (
        res: BluetoothError,
    ) => void
    /** 接口调用成功的回调函数 */
    type StopBluetoothDevicesDiscoverySuccessCallback = (
        res: BluetoothError,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopCompassCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type StopCompassFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type StopCompassSuccessCallback = (res: GeneralCallbackResult) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type StopDeviceMotionListeningCompleteCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type StopDeviceMotionListeningFailCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用成功的回调函数 */
    type StopDeviceMotionListeningSuccessCallback = (
        res: GeneralCallbackResult,
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
        result: ToTempFilePathSuccessCallbackResult,
    ) => void
    /** 关闭事件的回调函数 */
    type UDPSocketOffCloseCallback = (res: GeneralCallbackResult) => void
    /** 错误事件的回调函数 */
    type UDPSocketOffErrorCallback = (res: GeneralCallbackResult) => void
    /** 关闭事件的回调函数 */
    type UDPSocketOnCloseCallback = (res: GeneralCallbackResult) => void
    /** 错误事件的回调函数 */
    type UDPSocketOnErrorCallback = (
        result: UDPSocketOnErrorCallbackResult,
    ) => void
    /** 收到消息的事件的回调函数 */
    type UDPSocketOnMessageCallback = (
        result: UDPSocketOnMessageCallbackResult,
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
        res: GeneralCallbackResult,
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
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用失败的回调函数 */
    type UpdateVoIPChatMuteConfigFailCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用成功的回调函数 */
    type UpdateVoIPChatMuteConfigSuccessCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type UploadFileCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type UploadFileFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type UploadFileSuccessCallback = (
        result: UploadFileSuccessCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type UploadFrameCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type UploadFrameFailCallback = (res: GeneralCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type UploadFrameSuccessCallback = (res: GeneralCallbackResult) => void
    /** HTTP Response Header 事件的回调函数 */
    type UploadTaskOffHeadersReceivedCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** 上传进度变化事件的回调函数 */
    type UploadTaskOffProgressUpdateCallback = (
        res: GeneralCallbackResult,
    ) => void
    /** HTTP Response Header 事件的回调函数 */
    type UploadTaskOnHeadersReceivedCallback = (
        result: UploadTaskOnHeadersReceivedCallbackResult,
    ) => void
    /** 上传进度变化事件的回调函数 */
    type UploadTaskOnProgressUpdateCallback = (
        result: UploadTaskOnProgressUpdateCallbackResult,
    ) => void
    /** 用户信息按钮的点击事件的回调函数 */
    type UserInfoButtonOffTapCallback = (res: GeneralCallbackResult) => void
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
    /** 视频播放到末尾事件的回调函数 */
    type VideoOffEndedCallback = (res: GeneralCallbackResult) => void
    /** 视频错误事件的回调函数 */
    type VideoOffErrorCallback = (res: GeneralCallbackResult) => void
    /** 视频暂停事件的回调函数 */
    type VideoOffPauseCallback = (res: GeneralCallbackResult) => void
    /** 视频播放事件的回调函数 */
    type VideoOffPlayCallback = (res: GeneralCallbackResult) => void
    /** 视频播放进度更新事件的回调函数 */
    type VideoOffTimeUpdateCallback = (res: GeneralCallbackResult) => void
    /** 视频缓冲事件的回调函数 */
    type VideoOffWaitingCallback = (res: GeneralCallbackResult) => void
    /** 视频播放到末尾事件的回调函数 */
    type VideoOnEndedCallback = (res: GeneralCallbackResult) => void
    /** 视频错误事件的回调函数 */
    type VideoOnErrorCallback = (result: VideoOnErrorCallbackResult) => void
    /** 视频暂停事件的回调函数 */
    type VideoOnPauseCallback = (res: GeneralCallbackResult) => void
    /** 视频播放事件的回调函数 */
    type VideoOnPlayCallback = (res: GeneralCallbackResult) => void
    /** 视频播放进度更新事件的回调函数 */
    type VideoOnTimeUpdateCallback = (
        result: OnTimeUpdateCallbackResult,
    ) => void
    /** 视频缓冲事件的回调函数 */
    type VideoOnWaitingCallback = (res: GeneralCallbackResult) => void
    /** 主线程/Worker 线程向当前线程发送的消息的事件的回调函数 */
    type WorkerOnMessageCallback = (
        result: WorkerOnMessageCallbackResult,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type WriteBLECharacteristicValueCompleteCallback = (
        res: BluetoothError,
    ) => void
    /** 接口调用失败的回调函数 */
    type WriteBLECharacteristicValueFailCallback = (res: BluetoothError) => void
    /** 接口调用成功的回调函数 */
    type WriteBLECharacteristicValueSuccessCallback = (
        res: BluetoothError,
    ) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    type WriteFileCompleteCallback = (res: GeneralCallbackResult) => void
    /** 接口调用失败的回调函数 */
    type WriteFileFailCallback = (result: WriteFileFailCallbackResult) => void
    /** 接口调用成功的回调函数 */
    type WriteFileSuccessCallback = (res: GeneralCallbackResult) => void
    /** 全局错误事件的回调函数 */
    type WxOffErrorCallback = (res: GeneralCallbackResult) => void
    /** 全局错误事件的回调函数 */
    type WxOnErrorCallback = (result: WxOnErrorCallbackResult) => void
}
declare const console: WechatMinigame.Console
declare const wx: WechatMinigame.Wx
declare function require(module: string): any
declare let module: { exports: any }
declare let exports: any
declare let GameGlobal: WechatMinigame.IAnyObject

/** [cancelAnimationFrame(number requestID)](https://developers.weixin.qq.com/minigame/dev/api/render/frame/cancelAnimationFrame.html)
 *
 * 取消由 requestAnimationFrame 添加到计划中的动画帧请求 */
declare function cancelAnimationFrame(requestID: number): void
/** [number requestAnimationFrame(function callback)](https://developers.weixin.qq.com/minigame/dev/api/render/frame/requestAnimationFrame.html)
 *
 * 在下次进行重绘时执行。 */
declare function requestAnimationFrame(
    /** 执行的 callback */
    callback: (...args: any[]) => any,
): number
/** [clearInterval(number intervalID)](https://developers.weixin.qq.com/minigame/dev/api/base/timer/clearInterval.html)
 *
 * 取消由 setInterval 设置的定时器。 */
declare function clearInterval(
    /** 要取消的定时器的 ID */
    intervalID: number,
): void
/** [number setInterval(function callback, number delay, any rest)](https://developers.weixin.qq.com/minigame/dev/api/base/timer/setInterval.html)
 *
 * 设定一个定时器。按照指定的周期（以毫秒计）来执行注册的回调函数 */
declare function setInterval(
    /** 回调函数 */
    callback: (...args: any[]) => any,
    /** 执行回调函数之间的时间间隔，单位 ms。 */
    delay?: number,
    /** param1, param2, ..., paramN 等附加参数，它们会作为参数传递给回调函数。 */
    rest?: any,
): number
/** [clearTimeout(number timeoutID)](https://developers.weixin.qq.com/minigame/dev/api/base/timer/clearTimeout.html)
 *
 * 取消由 setTimeout 设置的定时器。 */
declare function clearTimeout(
    /** 要取消的定时器的 ID */
    timeoutID: number,
): void
/** [number setTimeout(function callback, number delay, any rest)](https://developers.weixin.qq.com/minigame/dev/api/base/timer/setTimeout.html)
 *
 * 设定一个定时器。在定时到期以后执行注册的回调函数 */
declare function setTimeout(
    /** 回调函数 */
    callback: (...args: any[]) => any,
    /** 延迟的时间，函数的调用会在该延迟之后发生，单位 ms。 */
    delay?: number,
    /** param1, param2, ..., paramN 等附加参数，它们会作为参数传递给回调函数。 */
    rest?: any,
): number
