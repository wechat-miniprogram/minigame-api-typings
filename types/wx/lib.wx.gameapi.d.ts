/*! *****************************************************************************
Copyright (c) 2018 Tencent, Inc. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
***************************************************************************** */

declare namespace wx {
  interface AccessFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail no such file or directory ${path}': 文件/目录不存在; */
    errMsg: string;
  }
  interface AccessOption {
    /** 要判断是否存在的文件/目录路径 */
    path: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: AccessCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: AccessFailCallback;
    /** 接口调用成功的回调函数 */
    success?: AccessSuccessCallback;
  }
  interface AddCardOption {
    /** 需要添加的卡券列表 */
    cardList: AddCardRequestInfo;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: AddCardCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: AddCardFailCallback;
    /** 接口调用成功的回调函数 */
    success?: AddCardSuccessCallback;
  }
  /** 需要添加的卡券列表 */
  interface AddCardRequestInfo {
    /** 卡券的扩展参数。需进行 JSON 序列化为**字符串**传入 */
    cardExt: CardExt;
    /** 卡券 ID */
    cardId: string;
  }
  /** 卡券添加结果列表 */
  interface AddCardResponseInfo {
    /** 卡券的扩展参数，结构请参考前文 */
    cardExt: string;
    /** 用户领取到卡券的 ID */
    cardId: string;
    /** 加密 code，为用户领取到卡券的code加密后的字符串，解密请参照：[code 解码接口](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1499332673_Unm7V) */
    code: string;
    /** 是否成功 */
    isSuccess: boolean;
  }
  interface AddCardSuccessCallbackResult {
    /** 卡券添加结果列表 */
    cardList: AddCardResponseInfo;
  }
  interface AppendFileFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail no such file or directory, open ${filePath}': 指定的 filePath 文件不存在;
     * - 'fail illegal operation on a directory, open "${filePath}"': 指定的 filePath 是一个已经存在的目录;
     * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有写权限;
     * - 'fail sdcard not mounted': 指定的 filePath 是一个已经存在的目录; */
    errMsg: string;
  }
  interface AppendFileOption {
    /** 要追加的文本或二进制数据 */
    data: string | ArrayBuffer;
    /** 要追加内容的文件路径 */
    filePath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: AppendFileCompleteCallback;
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
      | 'latin1';
    /** 接口调用失败的回调函数 */
    fail?: AppendFileFailCallback;
    /** 接口调用成功的回调函数 */
    success?: AppendFileSuccessCallback;
  }
  /** 用户授权设置信息，详情参考[权限] */
  interface AuthSetting {
    /** 是否授权用户信息，对应接口 [wx.getUserInfo] */
    'scope.userInfo'?: boolean;
    /** 是否授权地理位置，对应接口 [wx.getLocation] */
    'scope.userLocation'?: boolean;
    /** 是否授权微信运动步数，对应接口 [wx.getWeRunData] */
    'scope.werun'?: boolean;
    /** 是否授权保存到相册 [wx.saveImageToPhotosAlbum] */
    'scope.writePhotosAlbum'?: boolean;
  }
  interface AuthorizeOption {
    /** 需要获取权限的 scope，详见 [scope 列表] */
    scope: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: AuthorizeCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: AuthorizeFailCallback;
    /** 接口调用成功的回调函数 */
    success?: AuthorizeSuccessCallback;
  }
  /** banner 广告组件。banner 广告组件是一个原生组件，层级比上屏 Canvas 高，会覆盖在上屏 Canvas 上。banner 广告组件默认是隐藏的，需要调用 BannerAd.show() 将其显示。banner 广告会根据开发者设置的宽度进行等比缩放，缩放后的尺寸将通过 BannerAd.onResize() 事件中提供。 */
  interface BannerAd {
    /** banner 广告组件的样式。style 上的属性的值仅为开发者设置的值，banner 广告会根据开发者设置的宽度进行等比缩放，缩放后的真实尺寸需要通过 BannerAd.onResize() 事件获得。 */
    style: BannerAdStyle;
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
    errCode: 1000 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008;
    /** 错误信息 */
    errMsg: string;
  }
  /** banner 广告组件的样式。style 上的属性的值仅为开发者设置的值，banner 广告会根据开发者设置的宽度进行等比缩放，缩放后的真实尺寸需要通过 BannerAd.onResize() 事件获得。 */
  interface BannerAdStyle {
    /** banner 广告组件的高度 */
    height: number;
    /** banner 广告组件的左上角横坐标 */
    left: number;
    /** banner 广告组件经过缩放后真实的高度 */
    realHeight: number;
    /** banner 广告组件经过缩放后真实的宽度 */
    realWidth: number;
    /** banner 广告组件的左上角纵坐标 */
    top: number;
    /** banner 广告组件的宽度。最小 300，最大至 `屏幕宽度`（屏幕宽度可以通过 wx.getSystemInfoSync() 获取）。 */
    width: number;
  }
  /** 画布对象 */
  interface Canvas {
    /** 画布的高度 */
    height: number;
    /** 画布的宽度 */
    width: number;
  }
  /** 卡券的扩展参数。需进行 JSON 序列化为**字符串**传入 */
  interface CardExt {
    /** 签名，商户将接口列表中的参数按照指定方式进行签名,签名方式使用 SHA1，具体签名方案参见：[卡券签名](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1499332673_Unm7V) */
    signature: string;
    /** 时间戳，东八区时间,UTC+8，单位为秒 */
    timestamp: number;
    /** 用户领取的 code，仅自定义 code 模式的卡券须填写，非自定义 code 模式卡券不可填写，[详情](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1451025056) */
    code?: string;
    /** 卡券在第三方系统的实际领取时间，为东八区时间戳（UTC+8,精确到秒）。当卡券的有效期类为 DATE_TYPE_FIX_TERM 时专用，标识卡券的实际生效时间，用于解决商户系统内起始时间和领取微信卡券时间不同步的问题。 */
    fixed_begintimestamp?: number;
    /** 随机字符串，由开发者设置传入，加强安全性（若不填写可能被重放请求）。随机字符串，不长于 32 位。推荐使用大小写字母和数字，不同添加请求的 nonce_str 须动态生成，若重复将会导致领取失败。 */
    nonce_str?: string;
    /** 指定领取者的 openid，只有该用户能领取。 bind_openid 字段为 true 的卡券必须填写，bind_openid 字段为 false 不可填写。 */
    openid?: string;
    /** 领取渠道参数，用于标识本次领取的渠道值。 */
    outer_str?: string;
  }
  interface CheckIsUserAdvisedToRestOption {
    /** 今天已经玩游戏的时间，单位：秒 */
    todayPlayedTime: number;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: CheckIsUserAdvisedToRestCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: CheckIsUserAdvisedToRestFailCallback;
    /** 接口调用成功的回调函数 */
    success?: CheckIsUserAdvisedToRestSuccessCallback;
  }
  interface CheckIsUserAdvisedToRestSuccessCallbackResult {
    /** 是否建议用户休息 */
    result: boolean;
  }
  interface CheckSessionOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: CheckSessionCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: CheckSessionFailCallback;
    /** 接口调用成功的回调函数 */
    success?: CheckSessionSuccessCallback;
  }
  interface ChooseImageOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: ChooseImageCompleteCallback;
    /** 最多可以选择的图片张数 */
    count?: number;
    /** 接口调用失败的回调函数 */
    fail?: ChooseImageFailCallback;
    /** 所选的图片的尺寸
     *
     * 可选值：
     * - 'original': 原图;
     * - 'compressed': 压缩图; */
    sizeType?: ('original' | 'compressed')[];
    /** 选择图片的来源
     *
     * 可选值：
     * - 'album': 从相册选图;
     * - 'camera': 使用相机; */
    sourceType?: ('album' | 'camera')[];
    /** 接口调用成功的回调函数 */
    success?: ChooseImageSuccessCallback;
  }
  interface ChooseImageSuccessCallbackResult {
    /** 图片的本地临时文件路径列表 */
    tempFilePaths: Array<string>;
    /** 图片的本地临时文件列表
     *
     * 最低基础库： `1.2.0` */
    tempFiles: ImageFile;
  }
  interface ClearStorageOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: ClearStorageCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: ClearStorageFailCallback;
    /** 接口调用成功的回调函数 */
    success?: ClearStorageSuccessCallback;
  }
  interface CloseOption {
    /** 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。 */
    code?: number;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: CloseCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: CloseFailCallback;
    /** 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。 */
    reason?: string;
    /** 接口调用成功的回调函数 */
    success?: CloseSuccessCallback;
  }
  interface CloseSocketOption {
    /** 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。 */
    code?: number;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: CloseSocketCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: CloseSocketFailCallback;
    /** 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。 */
    reason?: string;
    /** 接口调用成功的回调函数 */
    success?: CloseSocketSuccessCallback;
  }
  interface ConnectSocketOption {
    /** 开发者服务器 wss 接口地址 */
    url: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: ConnectSocketCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: ConnectSocketFailCallback;
    /** HTTP Header，Header 中不能设置 Referer */
    header?: object;
    /** 子协议数组
     *
     * 最低基础库： `1.4.0` */
    protocols?: Array<string>;
    /** 接口调用成功的回调函数 */
    success?: ConnectSocketSuccessCallback;
    /** 建立 TCP 连接的时候的 TCP_NODELAY 设置
     *
     * 最低基础库： `2.4.0` */
    tcpNoDelay?: boolean;
  }
  /** webgl 上下文属性，仅当 contextType 为 webgl 时有效 */
  interface ContextAttributes {
    /** 表示是否抗锯齿 */
    antialias?: boolean;
    /** 抗锯齿样本数。最小值为 2，最大不超过系统限制数量，仅 iOS 支持 */
    antialiasSamples?: number;
    /** 表示是否绘图完成后是否保留绘图缓冲区 */
    preserveDrawingBuffer?: boolean;
  }
  interface CopyFileFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail permission denied, copyFile ${srcPath} -> ${destPath}': 指定目标文件路径没有写权限;
     * - 'fail no such file or directory, copyFile ${srcPath} -> ${destPath}': 源文件不存在，或目标文件路径的上层目录不存在; */
    errMsg: string;
  }
  interface CopyFileOption {
    /** 目标文件路径 */
    destPath: string;
    /** 源文件路径，只可以是普通文件 */
    srcPath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: CopyFileCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: CopyFileFailCallback;
    /** 接口调用成功的回调函数 */
    success?: CopyFileSuccessCallback;
  }
  interface CreateBannerAdOption {
    /** 广告单元 id */
    adUnitId: string;
    /** banner 广告组件的样式 */
    style: StyleOption;
  }
  interface CreateFeedbackButtonOption {
    /** 按钮的样式 */
    style: CreateFeedbackButtonOptionStyle;
    /** 按钮的类型
     *
     * 可选值：
     * - 'text': 可以设置背景色和文本的按钮;
     * - 'image': 只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高; */
    type: 'text' | 'image';
    /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
    image?: string;
    /** 按钮上的文本，仅当 type 为 `text` 时有效 */
    text?: string;
  }
  /** 按钮的样式 */
  interface CreateFeedbackButtonOptionStyle {
    /** 背景颜色 */
    backgroundColor: string;
    /** 边框颜色 */
    borderColor: string;
    /** 边框圆角 */
    borderRadius: number;
    /** 边框宽度 */
    borderWidth: number;
    /** 字号 */
    fontSize: number;
    /** 高度 */
    height: number;
    /** 左上角横坐标 */
    left: number;
    /** 文本的行高 */
    lineHeight: number;
    /** 文本的水平居中方式
     *
     * 可选值：
     * - 'left': 居左;
     * - 'center': 居中;
     * - 'right': 居右; */
    textAlign: 'left' | 'center' | 'right';
    /** 左上角纵坐标 */
    top: number;
    /** 宽度 */
    width: number;
  }
  interface CreateGameClubButtonOption {
    /** 游戏圈按钮的图标，仅当 object.type 参数为 image 时有效。
     *
     * 可选值：
     * - 'green': 绿色的图标;
     * - 'white': 白色的图标;
     * - 'dark': 有黑色圆角背景的白色图标;
     * - 'light': 有白色圆角背景的绿色图标; */
    icon: 'green' | 'white' | 'dark' | 'light';
    /** 按钮的样式 */
    style: CreateGameClubButtonOptionStyle;
    /** 按钮的类型
     *
     * 可选值：
     * - 'text': 可以设置背景色和文本的按钮;
     * - 'image': 只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高; */
    type: 'text' | 'image';
    /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
    image?: string;
    /** 按钮上的文本，仅当 type 为 `text` 时有效 */
    text?: string;
  }
  /** 按钮的样式 */
  interface CreateGameClubButtonOptionStyle {
    /** 背景颜色 */
    backgroundColor: string;
    /** 边框颜色 */
    borderColor: string;
    /** 边框圆角 */
    borderRadius: number;
    /** 边框宽度 */
    borderWidth: number;
    /** 字号 */
    fontSize: number;
    /** 高度 */
    height: number;
    /** 左上角横坐标 */
    left: number;
    /** 文本的行高 */
    lineHeight: number;
    /** 文本的水平居中方式
     *
     * 可选值：
     * - 'left': 居左;
     * - 'center': 居中;
     * - 'right': 居右; */
    textAlign: 'left' | 'center' | 'right';
    /** 左上角纵坐标 */
    top: number;
    /** 宽度 */
    width: number;
  }
  interface CreateOpenSettingButtonOption {
    /** 按钮的样式 */
    style: CreateOpenSettingButtonOptionStyle;
    /** 按钮的类型
     *
     * 可选值：
     * - 'text': 可以设置背景色和文本的按钮;
     * - 'image': 只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高; */
    type: 'text' | 'image';
    /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
    image?: string;
    /** 按钮上的文本，仅当 type 为 `text` 时有效 */
    text?: string;
  }
  /** 按钮的样式 */
  interface CreateOpenSettingButtonOptionStyle {
    /** 背景颜色 */
    backgroundColor: string;
    /** 边框颜色 */
    borderColor: string;
    /** 边框圆角 */
    borderRadius: number;
    /** 边框宽度 */
    borderWidth: number;
    /** 字号 */
    fontSize: number;
    /** 高度 */
    height: number;
    /** 左上角横坐标 */
    left: number;
    /** 文本的行高 */
    lineHeight: number;
    /** 文本的水平居中方式
     *
     * 可选值：
     * - 'left': 居左;
     * - 'center': 居中;
     * - 'right': 居右; */
    textAlign: 'left' | 'center' | 'right';
    /** 左上角纵坐标 */
    top: number;
    /** 宽度 */
    width: number;
  }
  interface CreateRewardedVideoAdOption {
    /** 广告单元 id */
    adUnitId: string;
  }
  interface CreateUserInfoButtonOption {
    /** 是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。 */
    withCredentials: boolean;
    /** 按钮的样式 */
    style: CreateUserInfoButtonOptionStyle;
    /** 按钮的类型
     *
     * 可选值：
     * - 'text': 可以设置背景色和文本的按钮;
     * - 'image': 只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高; */
    type: 'text' | 'image';
    /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
    image?: string;
    /** 描述用户信息的语言
     *
     * 可选值：
     * - 'en': 英文;
     * - 'zh_CN': 简体中文;
     * - 'zh_TW': 繁体中文; */
    lang?: 'en' | 'zh_CN' | 'zh_TW';
    /** 按钮上的文本，仅当 type 为 `text` 时有效 */
    text?: string;
  }
  /** 按钮的样式 */
  interface CreateUserInfoButtonOptionStyle {
    /** 背景颜色 */
    backgroundColor: string;
    /** 边框颜色 */
    borderColor: string;
    /** 边框圆角 */
    borderRadius: number;
    /** 边框宽度 */
    borderWidth: number;
    /** 字号 */
    fontSize: number;
    /** 高度 */
    height: number;
    /** 左上角横坐标 */
    left: number;
    /** 文本的行高 */
    lineHeight: number;
    /** 文本的水平居中方式
     *
     * 可选值：
     * - 'left': 居左;
     * - 'center': 居中;
     * - 'right': 居右; */
    textAlign: 'left' | 'center' | 'right';
    /** 左上角纵坐标 */
    top: number;
    /** 宽度 */
    width: number;
  }
  interface CreateVideoOption {
    /** 视频的封面 */
    poster: string;
    /** 视频的资源地址 */
    src: string;
    /** 视频是否自动播放 */
    autoplay?: boolean;
    /** 视频是否显示控件 */
    controls?: boolean;
    /** 是否启用手势控制播放进度 */
    enableProgressGesture?: boolean;
    /** 视频的高度 */
    height?: number;
    /** 视频的初始播放位置，单位为 s 秒 */
    initialTime?: number;
    /** 视频是否为直播 */
    live?: boolean;
    /** 视频是否是否循环播放 */
    loop?: boolean;
    /** 视频是否禁音播放 */
    muted?: boolean;
    /** 视频的缩放模式
     *
     * 可选值：
     * - 'fill': 填充，视频拉伸填满整个容器，不保证保持原有长宽比例;
     * - 'contain': 包含，保持原有长宽比例。保证视频尺寸一定可以在容器里面放得下。因此，可能会有部分空白;
     * - 'cover': 覆盖，保持原有长宽比例。保证视频尺寸一定大于容器尺寸，宽度和高度至少有一个和容器一致。因此，视频有部分会看不见; */
    objectFit?: 'fill' | 'contain' | 'cover';
    /** 视频的播放速率，有效值有 0.5、0.8、1.0、1.25、1.5 */
    playbackRate?: number;
    /** 是否显示视频中央的播放按钮 */
    showCenterPlayBtn?: boolean;
    /** 视频的宽度 */
    width?: number;
    /** 视频的左上角横坐标 */
    x?: number;
    /** 视频的左上角纵坐标 */
    y?: number;
  }
  interface DownloadFileOption {
    /** 下载资源的 url */
    url: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: DownloadFileCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: DownloadFileFailCallback;
    /** 指定文件下载后存储的路径
     *
     * 最低基础库： `1.8.0` */
    filePath?: string;
    /** HTTP 请求的 Header，Header 中不能设置 Referer */
    header?: object;
    /** 接口调用成功的回调函数 */
    success?: DownloadFileSuccessCallback;
  }
  interface DownloadFileSuccessCallbackResult {
    /** 开发者服务器返回的 HTTP 状态码 */
    statusCode: number;
    /** 临时文件路径。如果没传入 filePath 指定文件存储路径，则下载后的文件会存储到一个临时文件 */
    tempFilePath: string;
  }
  interface DownloadTaskOnHeadersReceivedCallbackResult {
    /** 开发者服务器返回的 HTTP Response Header */
    header: object;
  }
  interface DownloadTaskOnProgressUpdateCallbackResult {
    /** 下载进度百分比 */
    progress: number;
    /** 预期需要下载的数据总长度，单位 Bytes */
    totalBytesExpectedToWrite: number;
    /** 已经下载的数据长度，单位 Bytes */
    totalBytesWritten: number;
  }
  interface ExitMiniProgramOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: ExitMiniProgramCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: ExitMiniProgramFailCallback;
    /** 接口调用成功的回调函数 */
    success?: ExitMiniProgramSuccessCallback;
  }
  /** 用户点击后打开意见反馈页面的按钮 */
  interface FeedbackButton {
    /** 按钮的样式 */
    style: FeedbackButtonStyle;
    /** 按钮的类型
     *
     * 可选值：
     * - 'text': 可以设置背景色和文本的按钮;
     * - 'image': 只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高; */
    type: 'text' | 'image';
    /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
    image?: string;
    /** 按钮上的文本，仅当 type 为 `text` 时有效 */
    text?: string;
  }
  /** 按钮的样式 */
  interface FeedbackButtonStyle {
    /** 背景颜色 */
    backgroundColor: string;
    /** 边框颜色 */
    borderColor: string;
    /** 边框圆角 */
    borderRadius: number;
    /** 边框宽度 */
    borderWidth: number;
    /** 字号 */
    fontSize: number;
    /** 高度 */
    height: number;
    /** 左上角横坐标 */
    left: number;
    /** 文本的行高 */
    lineHeight: number;
    /** 文本的水平居中方式
     *
     * 可选值：
     * - 'left': 居左;
     * - 'center': 居中;
     * - 'right': 居右; */
    textAlign: 'left' | 'center' | 'right';
    /** 左上角纵坐标 */
    top: number;
    /** 宽度 */
    width: number;
  }
  /** 文件数组 */
  interface FileItem {
    /** 文件保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数 */
    createTime: number;
    /** 本地路径 */
    filePath: string;
    /** 本地文件大小，以字节为单位 */
    size: number;
  }
  /** 游戏圈按钮。游戏圈按钮被点击后会跳转到小游戏的游戏圈。更多关于游戏圈的信息见 [游戏圈使用指南] */
  interface GameClubButton {
    /** 游戏圈按钮的图标，仅当 type 参数为 image 时有效。
     *
     * 可选值：
     * - 'green': 绿色的图标;
     * - 'white': 白色的图标;
     * - 'dark': 有黑色圆角背景的白色图标;
     * - 'light': 有白色圆角背景的绿色图标; */
    icon: 'green' | 'white' | 'dark' | 'light';
    /** 按钮的样式 */
    style: GameClubButtonStyle;
    /** 按钮的类型
     *
     * 可选值：
     * - 'text': 可以设置背景色和文本的按钮;
     * - 'image': 只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高; */
    type: 'text' | 'image';
    /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
    image?: string;
    /** 按钮上的文本，仅当 type 为 `text` 时有效 */
    text?: string;
  }
  /** 按钮的样式 */
  interface GameClubButtonStyle {
    /** 背景颜色 */
    backgroundColor: string;
    /** 边框颜色 */
    borderColor: string;
    /** 边框圆角 */
    borderRadius: number;
    /** 边框宽度 */
    borderWidth: number;
    /** 字号 */
    fontSize: number;
    /** 高度 */
    height: number;
    /** 左上角横坐标 */
    left: number;
    /** 文本的行高 */
    lineHeight: number;
    /** 文本的水平居中方式
     *
     * 可选值：
     * - 'left': 居左;
     * - 'center': 居中;
     * - 'right': 居右; */
    textAlign: 'left' | 'center' | 'right';
    /** 左上角纵坐标 */
    top: number;
    /** 宽度 */
    width: number;
  }
  interface GetAvailableAudioSourcesOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetAvailableAudioSourcesCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetAvailableAudioSourcesFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetAvailableAudioSourcesSuccessCallback;
  }
  interface GetAvailableAudioSourcesSuccessCallbackResult {
    /** 支持的音频输入源列表，可在 [RecorderManager.start()] 接口中使用。返回值定义参考 https://developer.android.com/reference/kotlin/android/media/MediaRecorder.AudioSource
     *
     * 可选值：
     * - 'auto': 自动设置，默认使用手机麦克风，插上耳麦后自动切换使用耳机麦克风，所有平台适用;
     * - 'buildInMic': 手机麦克风，仅限 iOS;
     * - 'headsetMic': 耳机麦克风，仅限 iOS;
     * - 'mic': 麦克风（没插耳麦时是手机麦克风，插耳麦时是耳机麦克风），仅限 Android;
     * - 'camcorder': 同 mic，适用于录制音视频内容，仅限 Android;
     * - 'voice_communication': 同 mic，适用于实时沟通，仅限 Android;
     * - 'voice_recognition': 同 mic，适用于语音识别，仅限 Android; */
    audioSources: (
      | 'auto'
      | 'buildInMic'
      | 'headsetMic'
      | 'mic'
      | 'camcorder'
      | 'voice_communication'
      | 'voice_recognition')[];
  }
  interface GetBatteryInfoOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetBatteryInfoCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetBatteryInfoFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetBatteryInfoSuccessCallback;
  }
  interface GetBatteryInfoSuccessCallbackResult {
    /** 是否正在充电中 */
    isCharging: boolean;
    /** 设备电量，范围 1 - 100 */
    level: string;
  }
  interface GetBatteryInfoSyncResult {
    /** 是否正在充电中 */
    isCharging: boolean;
    /** 设备电量，范围 1 - 100 */
    level: string;
  }
  interface GetClipboardDataOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetClipboardDataCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetClipboardDataFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetClipboardDataSuccessCallback;
  }
  interface GetClipboardDataSuccessCallbackOption {
    /** 剪贴板的内容 */
    data: string;
  }
  interface GetFileInfoFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail file not exist': 指定的 filePath 找不到文件; */
    errMsg: string;
  }
  interface GetFileInfoOption {
    /** 要读取的文件路径 */
    filePath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetFileInfoCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetFileInfoFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetFileInfoSuccessCallback;
  }
  interface GetFileInfoSuccessCallbackResult {
    /** 文件大小，以字节为单位 */
    size: number;
  }
  interface GetFriendCloudStorageOption {
    /** 要拉取的 key 列表 */
    keyList: Array<string>;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetFriendCloudStorageCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetFriendCloudStorageFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetFriendCloudStorageSuccessCallback;
  }
  interface GetFriendCloudStorageSuccessCallbackResult {
    /** 同玩好友的托管数据 */
    data: Array<UserGameData>;
  }
  interface GetGroupCloudStorageOption {
    /** 要拉取的 key 列表 */
    keyList: Array<string>;
    /** 群分享对应的 shareTicket */
    shareTicket: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetGroupCloudStorageCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetGroupCloudStorageFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetGroupCloudStorageSuccessCallback;
  }
  interface GetGroupCloudStorageSuccessCallbackResult {
    /** 群同玩成员的托管数据 */
    data: Array<UserGameData>;
  }
  interface GetLocationOption {
    /** 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度
     *
     * 最低基础库： `1.6.0` */
    altitude?: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetLocationCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetLocationFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetLocationSuccessCallback;
    /** wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标 */
    type?: string;
  }
  interface GetLocationSuccessCallbackResult {
    /** 位置的精确度 */
    accuracy: number;
    /** 高度，单位 m
     *
     * 最低基础库： `1.2.0` */
    altitude: number;
    /** 水平精度，单位 m
     *
     * 最低基础库： `1.2.0` */
    horizontalAccuracy: number;
    /** 纬度，范围为 -90~90，负数表示南纬 */
    latitude: number;
    /** 经度，范围为 -180~180，负数表示西经 */
    longitude: number;
    /** 速度，单位 m/s */
    speed: number;
    /** 垂直精度，单位 m（Android 无法获取，返回 0）
     *
     * 最低基础库： `1.2.0` */
    verticalAccuracy: number;
  }
  interface GetLogManagerOption {
    /** 取值为0/1，取值为0表示是否会把 `App`、`Page` 的生命周期函数和 `wx` 命名空间下的函数调用写入日志，取值为1则不会。默认值是 0
     *
     * 最低基础库： `2.3.2` */
    level?: number;
  }
  interface GetNetworkTypeOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetNetworkTypeCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetNetworkTypeFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetNetworkTypeSuccessCallback;
  }
  interface GetNetworkTypeSuccessCallbackResult {
    /** 网络类型
     *
     * 可选值：
     * - 'wifi': wifi 网络;
     * - '2g': 2g 网络;
     * - '3g': 3g 网络;
     * - '4g': 4g 网络;
     * - 'unknown': Android 下不常见的网络类型;
     * - 'none': 无网络; */
    networkType: 'wifi' | '2g' | '3g' | '4g' | 'unknown' | 'none';
  }
  interface GetSavedFileListOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetSavedFileListCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetSavedFileListFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetSavedFileListSuccessCallback;
  }
  interface GetSavedFileListSuccessCallbackResult {
    /** 文件数组 */
    fileList: FileItem;
  }
  interface GetScreenBrightnessOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetScreenBrightnessCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetScreenBrightnessFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetScreenBrightnessSuccessCallback;
  }
  interface GetScreenBrightnessSuccessCallbackOption {
    /** 屏幕亮度值，范围 0 ~ 1，0 最暗，1 最亮 */
    value: number;
  }
  interface GetSettingOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetSettingCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetSettingFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetSettingSuccessCallback;
  }
  interface GetSettingSuccessCallbackResult {
    /** [AuthSetting]
     *
     * 用户授权结果 */
    authSetting: AuthSetting;
  }
  interface GetShareInfoOption {
    /** shareTicket */
    shareTicket: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetShareInfoCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetShareInfoFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetShareInfoSuccessCallback;
    /** 超时时间，单位 ms
     *
     * 最低基础库： `1.9.90` */
    timeout?: number;
  }
  interface GetShareInfoSuccessCallbackResult {
    /** 包括敏感数据在内的完整转发信息的加密数据，详细见[加密数据解密算法] */
    encryptedData: string;
    /** 错误信息 */
    errMsg: string;
    /** 加密算法的初始向量，详细见[加密数据解密算法] */
    iv: string;
  }
  interface GetStorageInfoOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetStorageInfoCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetStorageInfoFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetStorageInfoSuccessCallback;
  }
  interface GetStorageInfoSuccessCallbackOption {
    /** 当前占用的空间大小, 单位 KB */
    currentSize: number;
    /** 当前 storage 中所有的 key */
    keys: Array<string>;
    /** 限制的空间大小，单位 KB */
    limitSize: number;
  }
  interface GetStorageInfoSyncOption {
    /** 当前占用的空间大小, 单位 KB */
    currentSize: number;
    /** 当前 storage 中所有的 key */
    keys: Array<string>;
    /** 限制的空间大小，单位 KB */
    limitSize: number;
  }
  interface GetStorageOption {
    /** 本地缓存中指定的 key */
    key: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetStorageCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetStorageFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetStorageSuccessCallback;
  }
  interface GetStorageSuccessCallbackResult {
    /** key对应的内容 */
    data: any;
  }
  interface GetSystemInfoOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetSystemInfoCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetSystemInfoFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetSystemInfoSuccessCallback;
  }
  interface GetSystemInfoSuccessCallbackResult {
    /** 客户端基础库版本
     *
     * 最低基础库： `1.1.0` */
    SDKVersion: string;
    /** 允许微信使用相册的开关（仅 iOS 有效）
     *
     * 最低基础库： `2.6.0` */
    albumAuthorized: boolean;
    /** 设备性能等级（仅Android小游戏）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50）
     *
     * 最低基础库： `1.8.0` */
    benchmarkLevel: number;
    /** 蓝牙的系统开关
     *
     * 最低基础库： `2.6.0` */
    bluetoothEnabled: boolean;
    /** 设备品牌
     *
     * 最低基础库： `1.5.0` */
    brand: string;
    /** 允许微信使用摄像头的开关
     *
     * 最低基础库： `2.6.0` */
    cameraAuthorized: boolean;
    /** 用户字体大小（单位px）。以微信客户端「我-设置-通用-字体大小」中的设置为准
     *
     * 最低基础库： `1.5.0` */
    fontSizeSetting: number;
    /** 微信设置的语言 */
    language: string;
    /** 允许微信使用定位的开关
     *
     * 最低基础库： `2.6.0` */
    locationAuthorized: boolean;
    /** 地理位置的系统开关
     *
     * 最低基础库： `2.6.0` */
    locationEnabled: boolean;
    /** 允许微信使用麦克风的开关
     *
     * 最低基础库： `2.6.0` */
    microphoneAuthorized: boolean;
    /** 设备型号 */
    model: string;
    /** 允许微信通知带有提醒的开关（仅 iOS 有效）
     *
     * 最低基础库： `2.6.0` */
    notificationAlertAuthorized: boolean;
    /** 允许微信通知的开关
     *
     * 最低基础库： `2.6.0` */
    notificationAuthorized: boolean;
    /** 允许微信通知带有标记的开关（仅 iOS 有效）
     *
     * 最低基础库： `2.6.0` */
    notificationBadgeAuthorized: boolean;
    /** 允许微信通知带有声音的开关（仅 iOS 有效）
     *
     * 最低基础库： `2.6.0` */
    notificationSoundAuthorized: boolean;
    /** 设备像素比 */
    pixelRatio: number;
    /** 客户端平台 */
    platform: string;
    /** 屏幕高度，单位px
     *
     * 最低基础库： `1.1.0` */
    screenHeight: number;
    /** 屏幕宽度，单位px
     *
     * 最低基础库： `1.1.0` */
    screenWidth: number;
    /** 状态栏的高度，单位px
     *
     * 最低基础库： `1.9.0` */
    statusBarHeight: number;
    /** 操作系统及版本 */
    system: string;
    /** 微信版本号 */
    version: string;
    /** Wi-Fi 的系统开关
     *
     * 最低基础库： `2.6.0` */
    wifiEnabled: boolean;
    /** 可使用窗口高度，单位px */
    windowHeight: number;
    /** 可使用窗口宽度，单位px */
    windowWidth: number;
  }
  interface GetSystemInfoSyncResult {
    /** 客户端基础库版本
     *
     * 最低基础库： `1.1.0` */
    SDKVersion: string;
    /** 允许微信使用相册的开关（仅 iOS 有效）
     *
     * 最低基础库： `2.6.0` */
    albumAuthorized: boolean;
    /** 设备性能等级（仅Android小游戏）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50）
     *
     * 最低基础库： `1.8.0` */
    benchmarkLevel: number;
    /** 蓝牙的系统开关
     *
     * 最低基础库： `2.6.0` */
    bluetoothEnabled: boolean;
    /** 设备品牌
     *
     * 最低基础库： `1.5.0` */
    brand: string;
    /** 允许微信使用摄像头的开关
     *
     * 最低基础库： `2.6.0` */
    cameraAuthorized: boolean;
    /** 用户字体大小（单位px）。以微信客户端「我-设置-通用-字体大小」中的设置为准
     *
     * 最低基础库： `1.5.0` */
    fontSizeSetting: number;
    /** 微信设置的语言 */
    language: string;
    /** 允许微信使用定位的开关
     *
     * 最低基础库： `2.6.0` */
    locationAuthorized: boolean;
    /** 地理位置的系统开关
     *
     * 最低基础库： `2.6.0` */
    locationEnabled: boolean;
    /** 允许微信使用麦克风的开关
     *
     * 最低基础库： `2.6.0` */
    microphoneAuthorized: boolean;
    /** 设备型号 */
    model: string;
    /** 允许微信通知带有提醒的开关（仅 iOS 有效）
     *
     * 最低基础库： `2.6.0` */
    notificationAlertAuthorized: boolean;
    /** 允许微信通知的开关
     *
     * 最低基础库： `2.6.0` */
    notificationAuthorized: boolean;
    /** 允许微信通知带有标记的开关（仅 iOS 有效）
     *
     * 最低基础库： `2.6.0` */
    notificationBadgeAuthorized: boolean;
    /** 允许微信通知带有声音的开关（仅 iOS 有效）
     *
     * 最低基础库： `2.6.0` */
    notificationSoundAuthorized: boolean;
    /** 设备像素比 */
    pixelRatio: number;
    /** 客户端平台 */
    platform: string;
    /** 屏幕高度，单位px
     *
     * 最低基础库： `1.1.0` */
    screenHeight: number;
    /** 屏幕宽度，单位px
     *
     * 最低基础库： `1.1.0` */
    screenWidth: number;
    /** 状态栏的高度，单位px
     *
     * 最低基础库： `1.9.0` */
    statusBarHeight: number;
    /** 操作系统及版本 */
    system: string;
    /** 微信版本号 */
    version: string;
    /** Wi-Fi 的系统开关
     *
     * 最低基础库： `2.6.0` */
    wifiEnabled: boolean;
    /** 可使用窗口高度，单位px */
    windowHeight: number;
    /** 可使用窗口宽度，单位px */
    windowWidth: number;
  }
  interface GetTextLineHeightOption {
    /** 字体名称 */
    fontFamily: string;
    /** 文本的内容 */
    text: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetTextLineHeightCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetTextLineHeightFailCallback;
    /** 字号 */
    fontSize?: number;
    /** 字体样式
     *
     * 可选值：
     * - 'normal': 正常;
     * - 'italic': 斜体; */
    fontStyle?: 'normal' | 'italic';
    /** 字重
     *
     * 可选值：
     * - 'normal': 正常;
     * - 'bold': 粗体; */
    fontWeight?: 'normal' | 'bold';
    /** 接口调用成功的回调函数 */
    success?: GetTextLineHeightSuccessCallback;
  }
  interface GetUserCloudStorageOption {
    /** 要获取的 key 列表 */
    keyList: Array<string>;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetUserCloudStorageCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetUserCloudStorageFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetUserCloudStorageSuccessCallback;
  }
  interface GetUserCloudStorageSuccessCallbackResult {
    /** 用户托管的 KV 数据列表 */
    KVDataList: Array<KVData>;
  }
  interface GetUserInfoOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetUserInfoCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetUserInfoFailCallback;
    /** 显示用户信息的语言
     *
     * 可选值：
     * - 'en': 英文;
     * - 'zh_CN': 简体中文;
     * - 'zh_TW': 繁体中文; */
    lang?: 'en' | 'zh_CN' | 'zh_TW';
    /** 接口调用成功的回调函数 */
    success?: GetUserInfoSuccessCallback;
    /** 是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。 */
    withCredentials?: boolean;
  }
  interface GetUserInfoSuccessCallbackResult {
    /** 包括敏感数据在内的完整用户信息的加密数据，详见 [用户数据的签名验证和加解密] */
    encryptedData: string;
    /** 加密算法的初始向量，详见 [用户数据的签名验证和加解密] */
    iv: string;
    /** 不包括敏感信息的原始数据字符串，用于计算签名 */
    rawData: string;
    /** 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，详见 [用户数据的签名验证和加解密] */
    signature: string;
    /** [UserInfo]
     *
     * 用户信息对象，不包含 openid 等敏感信息 */
    userInfo: UserInfo;
  }
  interface GetWeRunDataOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: GetWeRunDataCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: GetWeRunDataFailCallback;
    /** 接口调用成功的回调函数 */
    success?: GetWeRunDataSuccessCallback;
  }
  interface GetWeRunDataSuccessCallbackResult {
    /** 包括敏感数据在内的完整用户信息的加密数据，详细见[加密数据解密算法]。解密后得到的数据结构见后文 */
    encryptedData: string;
    /** 加密算法的初始向量，详细见[加密数据解密算法] */
    iv: string;
  }
  interface HideKeyboardOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: HideKeyboardCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: HideKeyboardFailCallback;
    /** 接口调用成功的回调函数 */
    success?: HideKeyboardSuccessCallback;
  }
  interface HideLoadingOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: HideLoadingCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: HideLoadingFailCallback;
    /** 接口调用成功的回调函数 */
    success?: HideLoadingSuccessCallback;
  }
  interface HideShareMenuOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: HideShareMenuCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: HideShareMenuFailCallback;
    /** 接口调用成功的回调函数 */
    success?: HideShareMenuSuccessCallback;
  }
  interface HideToastOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: HideToastCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: HideToastFailCallback;
    /** 接口调用成功的回调函数 */
    success?: HideToastSuccessCallback;
  }
  /** 图片对象 */
  interface Image {
    /** 图片的真实高度 */
    height: number;
    /** 图片加载发生错误后触发的回调函数 */
    onerror: Function;
    /** 图片加载完成后触发的回调函数 */
    onload: Function;
    /** 图片的 URL */
    src: string;
    /** 图片的真实宽度 */
    width: number;
  }
  /** 图片的本地临时文件列表
   *
   * 最低基础库： `1.2.0` */
  interface ImageFile {
    /** 本地临时文件路径 */
    path: string;
    /** 本地临时文件大小，单位 B */
    size: number;
  }
  /** InnerAudioContext 实例，可通过 [wx.createInnerAudioContext] 接口获取实例。
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
    autoplay: boolean;
    /** 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲（只读） */
    buffered: number;
    /** 当前音频的播放位置（单位 s）。只有在当前有合法的 src 时返回，时间保留小数点后 6 位（只读） */
    currentTime: number;
    /** 当前音频的长度（单位 s）。只有在当前有合法的 src 时返回（只读） */
    duration: number;
    /** 是否循环播放，默认为 `false` */
    loop: boolean;
    /** 是否遵循系统静音开关，默认为 `true`。当此参数为 `false` 时，即使用户打开了静音开关，也能继续发出声音。从 2.3.0 版本开始此参数不生效，使用 `wx.setInnerAudioOption` 接口统一设置。 */
    obeyMuteSwitch: boolean;
    /** 当前是是否暂停或停止状态（只读） */
    paused: boolean;
    /** 音频资源的地址，用于直接播放。{% version('2.2.3') %} 开始支持云文件ID */
    src: string;
    /** 开始播放的位置（单位：s），默认为 0 */
    startTime: number;
    /** 音量。范围 0~1。默认为 1
     *
     * 最低基础库： `1.9.90` */
    volume: number;
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
    errCode: 10001 | 10002 | 10003 | 10004 | -1;
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
    key: string;
    /** 数据的 value */
    value: string;
  }
  /** 启动参数 */
  interface LaunchOptionsGame {
    /** 启动小游戏的 query 参数 */
    query: object;
    /** 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) */
    referrerInfo: LaunchOptionsGameReferrerInfo;
    /** 启动小游戏的[场景值] */
    scene: number;
    /** shareTicket，详见[获取更多转发信息] */
    shareTicket: string;
  }
  /** 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) */
  interface LaunchOptionsGameReferrerInfo {
    /** 来源小程序、公众号或 App 的 appId */
    appId: string;
    /** 来源小程序传过来的数据，scene=1037或1038时支持 */
    extraData: object;
  }
  interface LoadSubpackageOption {
    /** 分包加载结束回调事件(加载成功、失败都会执行） */
    complete: Function;
    /** 分包加载失败回调事件 */
    fail: Function;
    /** 分包的名字，可以填 name 或者 root */
    name: Function;
    /** 分包加载成功回调事件 */
    success: Function;
  }
  interface LoadSubpackageTaskOnProgressUpdateCallbackResult {
    /** 分包下载进度百分比 */
    progress: number;
    /** 预期需要下载的数据总长度，单位 Bytes */
    totalBytesExpectedToWrite: number;
    /** 已经下载的数据长度，单位 Bytes */
    totalBytesWritten: number;
  }
  interface LoginOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: LoginCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: LoginFailCallback;
    /** 接口调用成功的回调函数 */
    success?: LoginSuccessCallback;
    /** 超时时间，单位ms
     *
     * 最低基础库： `1.9.90` */
    timeout?: number;
  }
  interface LoginSuccessCallbackResult {
    /** 用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 [auth.code2Session]，使用 code 换取 openid 和 session_key 等信息 */
    code: string;
  }
  interface MkdirFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail no such file or directory ${dirPath}': 上级目录不存在;
     * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有写权限;
     * - 'fail file already exists ${dirPath}': 有同名文件或目录; */
    errMsg: string;
  }
  interface MkdirOption {
    /** 创建的目录路径 */
    dirPath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: MkdirCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: MkdirFailCallback;
    /** 是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。
     *
     * 最低基础库： `2.3.0` */
    recursive?: boolean;
    /** 接口调用成功的回调函数 */
    success?: MkdirSuccessCallback;
  }
  interface NavigateToMiniProgramOption {
    /** 要打开的小程序 appId */
    appId: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: NavigateToMiniProgramCompleteCallback;
    /** 要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。
     *
     * 可选值：
     * - 'develop': 开发版;
     * - 'trial': 体验版;
     * - 'release': 正式版; */
    envVersion?: 'develop' | 'trial' | 'release';
    /** 需要传递给目标小程序的数据，目标小程序可在 `App.onLaunch`，`App.onShow` 中获取到这份数据。如果跳转的是小游戏，可以在 `wx.onShow`、`wx.getLaunchOptionsSync` 中可以获取到这份数据数据。 */
    extraData?: object;
    /** 接口调用失败的回调函数 */
    fail?: NavigateToMiniProgramFailCallback;
    /** 打开的页面路径，如果为空则打开首页。path 中 ? 后面的部分会成为 query，在小程序的 `App.onLaunch`、`App.onShow` 和 `Page.onLoad` 的回调函数或小游戏的 `wx.onShow` 回调函数、`wx.getLaunchOptionsSync` 中可以获取到 query 数据。对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"。 */
    path?: string;
    /** 接口调用成功的回调函数 */
    success?: NavigateToMiniProgramSuccessCallback;
  }
  interface OnAccelerometerChangeCallbackResult {
    /** X 轴 */
    x: number;
    /** Y 轴 */
    y: number;
    /** Z 轴 */
    z: number;
  }
  interface OnCheckForUpdateCallbackResult {
    /** 是否有新版本 */
    hasUpdate: boolean;
  }
  interface OnCloseCallbackResult {
    /** 视频是否是在用户完整观看的情况下被关闭的
     *
     * 最低基础库： `2.1.0` */
    isEnded: boolean;
  }
  interface OnCompassChangeCallbackResult {
    /** 精度
     *
     * 最低基础库： `2.4.0` */
    accuracy: number | string;
    /** 面对的方向度数 */
    direction: number;
  }
  interface OnDeviceMotionChangeCallbackResult {
    /** 当 手机坐标 X/Y 和 地球 X/Y 重合时，绕着 Z 轴转动的夹角为 alpha，范围值为 [0, 2*PI)。逆时针转动为正。 */
    alpha: number;
    /** 当手机坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 beta。范围值为 [-1*PI, PI) 。顶部朝着地球表面转动为正。也有可能朝着用户为正。 */
    beta: number;
    /** 当手机 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 gamma。范围值为 [-1*PI/2, PI/2)。右边朝着地球表面转动为正。 */
    gamma: number;
  }
  interface OnDeviceOrientationChangeCallbackResult {
    /** 表示切换后的屏幕是横屏还是竖屏
     *
     * 可选值：
     * - 'portrait': 竖屏;
     * - 'landscape': 横屏正方向，以 HOME 键在屏幕右侧为正方向;
     * - 'landscapeReverse': 横屏反方向，以 HOME 键在屏幕左侧为反方向; */
    value: 'portrait' | 'landscape' | 'landscapeReverse';
  }
  interface OnFrameRecordedCallbackResult {
    /** 录音分片数据 */
    frameBuffer: ArrayBuffer;
    /** 当前帧是否正常录音结束前的最后一帧 */
    isLastFrame: boolean;
  }
  interface OnGyroscopeChangeCallbackResult {
    res: Result;
  }
  interface OnKeyboardCompleteCallbackResult {
    /** 键盘输入的当前值 */
    value: string;
  }
  interface OnKeyboardConfirmCallbackResult {
    /** 键盘输入的当前值 */
    value: string;
  }
  interface OnKeyboardInputCallbackResult {
    /** 键盘输入的当前值 */
    value: object;
  }
  interface OnMemoryWarningCallbackResult {
    /** 内存告警等级，只有 Android 才有，对应系统宏定义
     *
     * 可选值：
     * - 5: TRIM_MEMORY_RUNNING_MODERATE;
     * - 10: TRIM_MEMORY_RUNNING_LOW;
     * - 15: TRIM_MEMORY_RUNNING_CRITICAL; */
    level: 5 | 10 | 15;
  }
  interface OnNetworkStatusChangeCallbackResult {
    /** 当前是否有网络连接 */
    isConnected: boolean;
    /** 网络类型
     *
     * 可选值：
     * - 'wifi': wifi 网络;
     * - '2g': 2g 网络;
     * - '3g': 3g 网络;
     * - '4g': 4g 网络;
     * - 'unknown': Android 下不常见的网络类型;
     * - 'none': 无网络; */
    networkType: 'wifi' | '2g' | '3g' | '4g' | 'unknown' | 'none';
  }
  interface OnOpenCallbackResult {
    /** 连接成功的 HTTP 响应 Header
     *
     * 最低基础库： `2.0.0` */
    header: object;
  }
  interface OnResizeCallbackResult {
    /** 缩放后的高度 */
    height: number;
    /** 缩放后的宽度 */
    width: number;
  }
  interface OnShareAppMessageCallbackResult {
    /** 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4 */
    imageUrl: string;
    /** 查询字符串，必须是 key1=val1&key2=val2 的格式。从这条转发消息进入后，可通过 wx.getLaunchOptionSync() 或 wx.onShow() 获取启动参数中的 query。 */
    query: string;
    /** 转发标题，不传则默认使用当前小游戏的昵称。 */
    title: string;
    /** 审核通过的图片 ID，详见 [使用审核通过的转发图片]
     *
     * 最低基础库： `2.4.3` */
    imageUrlId?: string;
  }
  interface OnShowCallbackResult {
    /** 查询参数 */
    query: object;
    /** 当场景为由从另一个小程序或公众号或App打开时，返回此字段 */
    referrerInfo: ResultReferrerInfo;
    /** 场景值 */
    scene: string;
    /** shareTicket */
    shareTicket: string;
  }
  interface OnSocketMessageCallbackResult {
    /** 服务器返回的消息 */
    data: string | ArrayBuffer;
  }
  interface OnSocketOpenCallbackResult {
    /** 连接成功的 HTTP 响应 Header
     *
     * 最低基础库： `2.0.0` */
    header: object;
  }
  interface OnStopCallbackResult {
    /** 录音文件的临时路径 */
    tempFilePath: string;
  }
  interface OnTapCallbackResult {
    /** 包括敏感数据在内的完整用户信息的加密数据，详细见[加密数据解密算法] */
    encryptedData: string;
    /** 加密算法的初始向量，详细见[加密数据解密算法] */
    iv: string;
    /** 不包括敏感信息的原始数据字符串，用于计算签名 */
    rawData: string;
    /** 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，参考文档[signature] */
    signature: string;
    /** [UserInfo]
     *
     * 用户信息对象，不包含 openid 等敏感信息 */
    userInfo: UserInfo;
  }
  interface OnTimeUpdateCallbackResult {
    /** 视频的总时长，单位为秒 */
    duration: number;
    /** 当前的播放位置，单位为秒 */
    position: number;
  }
  interface OnTouchCancelCallbackResult {
    /** 触发此次事件的触摸点列表 */
    changedTouches: Array<Touch>;
    /** 事件触发时的时间戳 */
    timeStamp: number;
    /** 当前所有触摸点的列表 */
    touches: Array<Touch>;
  }
  interface OnTouchEndCallbackResult {
    /** 触发此次事件的触摸点列表 */
    changedTouches: Array<Touch>;
    /** 事件触发时的时间戳 */
    timeStamp: number;
    /** 当前所有触摸点的列表 */
    touches: Array<Touch>;
  }
  interface OnTouchMoveCallbackResult {
    /** 触发此次事件的触摸点列表 */
    changedTouches: Array<Touch>;
    /** 事件触发时的时间戳 */
    timeStamp: number;
    /** 当前所有触摸点的列表 */
    touches: Array<Touch>;
  }
  interface OnTouchStartCallbackResult {
    /** 触发此次事件的触摸点列表 */
    changedTouches: Array<Touch>;
    /** 事件触发时的时间戳 */
    timeStamp: number;
    /** 当前所有触摸点的列表 */
    touches: Array<Touch>;
  }
  interface OnWindowResizeCallbackResult {
    /** 变化后的窗口高度，单位 px */
    windowHeight: number;
    /** 变化后的窗口宽度，单位 px */
    windowWidth: number;
  }
  interface OpenCardOption {
    /** 需要打开的卡券列表 */
    cardList: OpenCardRequestInfo;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: OpenCardCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: OpenCardFailCallback;
    /** 接口调用成功的回调函数 */
    success?: OpenCardSuccessCallback;
  }
  /** 需要打开的卡券列表 */
  interface OpenCardRequestInfo {
    /** 卡券 ID */
    cardId: string;
    /** 由 [wx.addCard] 的返回对象中的加密 code 通过解密后得到，解密请参照：[code 解码接口](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1499332673_Unm7V) */
    code: string;
  }
  interface OpenCustomerServiceConversationOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: OpenCustomerServiceConversationCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: OpenCustomerServiceConversationFailCallback;
    /** 会话内消息卡片图片路径 */
    sendMessageImg?: string;
    /** 会话内消息卡片路径 */
    sendMessagePath?: string;
    /** 会话内消息卡片标题 */
    sendMessageTitle?: string;
    /** 会话来源 */
    sessionFrom?: string;
    /** 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息 */
    showMessageCard?: boolean;
    /** 接口调用成功的回调函数 */
    success?: OpenCustomerServiceConversationSuccessCallback;
  }
  /** 开放数据域对象 */
  interface OpenDataContext {
    /** [Canvas]
     *
     * 开放数据域和主域共享的 sharedCanvas */
    canvas: Canvas;
  }
  /** 用户点击后打开设置页面的按钮 */
  interface OpenSettingButton {
    /** 按钮的样式 */
    style: OpenSettingButtonStyle;
    /** 按钮的类型
     *
     * 可选值：
     * - 'text': 可以设置背景色和文本的按钮;
     * - 'image': 只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高; */
    type: 'text' | 'image';
    /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
    image?: string;
    /** 按钮上的文本，仅当 type 为 `text` 时有效 */
    text?: string;
  }
  /** 按钮的样式 */
  interface OpenSettingButtonStyle {
    /** 背景颜色 */
    backgroundColor: string;
    /** 边框颜色 */
    borderColor: string;
    /** 边框圆角 */
    borderRadius: number;
    /** 边框宽度 */
    borderWidth: number;
    /** 字号 */
    fontSize: number;
    /** 高度 */
    height: number;
    /** 左上角横坐标 */
    left: number;
    /** 文本的行高 */
    lineHeight: number;
    /** 文本的水平居中方式
     *
     * 可选值：
     * - 'left': 居左;
     * - 'center': 居中;
     * - 'right': 居右; */
    textAlign: 'left' | 'center' | 'right';
    /** 左上角纵坐标 */
    top: number;
    /** 宽度 */
    width: number;
  }
  interface OpenSettingOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: OpenSettingCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: OpenSettingFailCallback;
    /** 接口调用成功的回调函数 */
    success?: OpenSettingSuccessCallback;
  }
  interface OpenSettingSuccessCallbackResult {
    /** [AuthSetting]
     *
     * 用户授权结果 */
    authSetting: AuthSetting;
  }
  interface PreviewImageOption {
    /** 需要预览的图片链接列表。{% version('2.2.3') %} 起支持云文件ID。 */
    urls: Array<string>;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: PreviewImageCompleteCallback;
    /** 当前显示图片的链接 */
    current?: string;
    /** 接口调用失败的回调函数 */
    fail?: PreviewImageFailCallback;
    /** 接口调用成功的回调函数 */
    success?: PreviewImageSuccessCallback;
  }
  interface ReadFileFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail no such file or directory, open ${filePath}': 指定的 filePath 所在目录不存在;
     * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有读权限; */
    errMsg: string;
  }
  interface ReadFileOption {
    /** 要读取的文件的路径 */
    filePath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: ReadFileCompleteCallback;
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
      | 'latin1';
    /** 接口调用失败的回调函数 */
    fail?: ReadFileFailCallback;
    /** 接口调用成功的回调函数 */
    success?: ReadFileSuccessCallback;
  }
  interface ReadFileSuccessCallbackResult {
    /** 文件内容 */
    data: string | ArrayBuffer;
  }
  interface ReaddirFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail no such file or directory ${dirPath}': 目录不存在;
     * - 'fail not a directory ${dirPath}': dirPath 不是目录;
     * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有读权限; */
    errMsg: string;
  }
  interface ReaddirOption {
    /** 要读取的目录路径 */
    dirPath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: ReaddirCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: ReaddirFailCallback;
    /** 接口调用成功的回调函数 */
    success?: ReaddirSuccessCallback;
  }
  interface ReaddirSuccessCallbackResult {
    /** 指定目录下的文件名数组。 */
    files: Array<string>;
  }
  interface RecorderManagerOnErrorCallbackResult {
    /** 错误信息 */
    errMsg: string;
  }
  /** 菜单按钮的布局位置信息 */
  interface Rect {
    /** 下边界坐标，单位：px */
    bottom: number;
    /** 高度，单位：px */
    height: number;
    /** 左边界坐标，单位：px */
    left: number;
    /** 右边界坐标，单位：px */
    right: number;
    /** 上边界坐标，单位：px */
    top: number;
    /** 宽度，单位：px */
    width: number;
  }
  interface RemoveSavedFileFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail file not exist': 指定的 tempFilePath 找不到文件; */
    errMsg: string;
  }
  interface RemoveSavedFileOption {
    /** 需要删除的文件路径 */
    filePath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: RemoveSavedFileCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: RemoveSavedFileFailCallback;
    /** 接口调用成功的回调函数 */
    success?: RemoveSavedFileSuccessCallback;
  }
  interface RemoveStorageOption {
    /** 本地缓存中指定的 key */
    key: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: RemoveStorageCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: RemoveStorageFailCallback;
    /** 接口调用成功的回调函数 */
    success?: RemoveStorageSuccessCallback;
  }
  interface RemoveUserCloudStorageOption {
    /** 要删除掉 key 列表 */
    keyList: Array<string>;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: RemoveUserCloudStorageCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: RemoveUserCloudStorageFailCallback;
    /** 接口调用成功的回调函数 */
    success?: RemoveUserCloudStorageSuccessCallback;
  }
  interface RenameFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail permission denied, rename ${oldPath} -> ${newPath}': 指定源文件或目标文件没有写权限;
     * - 'fail no such file or directory, rename ${oldPath} -> ${newPath}': 源文件不存在，或目标文件路径的上层目录不存在; */
    errMsg: string;
  }
  interface RenameOption {
    /** 新文件路径 */
    newPath: string;
    /** 源文件路径，可以是普通文件或目录 */
    oldPath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: RenameCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: RenameFailCallback;
    /** 接口调用成功的回调函数 */
    success?: RenameSuccessCallback;
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
    currencyType: 'CNY';
    /** 支付的类型，不同的支付类型有各自额外要传的附加参数。
     *
     * 可选值：
     * - 'game': 购买游戏币; */
    mode: 'game';
    /** 在米大师侧申请的应用 id */
    offerId: string;
    /** 购买数量。mode=game 时必填。购买数量。详见 [buyQuantity 限制说明](#buyquantity-限制说明)。 */
    buyQuantity?: number;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: RequestMidasPaymentCompleteCallback;
    /** 环境配置
     *
     * 可选值：
     * - 0: 米大师正式环境;
     * - 1: 米大师沙箱环境; */
    env?: 0 | 1;
    /** 接口调用失败的回调函数 */
    fail?: RequestMidasPaymentFailCallback;
    /** 申请接入时的平台，platform 与应用id有关。
     *
     * 可选值：
     * - 'android': android; */
    platform?: 'android';
    /** 接口调用成功的回调函数 */
    success?: RequestMidasPaymentSuccessCallback;
    /** 分区 ID */
    zoneId?: string;
  }
  interface RequestOption {
    /** 开发者服务器接口地址 */
    url: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: RequestCompleteCallback;
    /** 请求的参数 */
    data?: string | object | ArrayBuffer;
    /** 返回的数据格式
     *
     * 可选值：
     * - 'json': 返回的数据为 JSON，返回后会对返回的数据进行一次 JSON.parse;
     * - '其他': 不对返回的内容进行 JSON.parse; */
    dataType?: 'json' | '其他';
    /** 接口调用失败的回调函数 */
    fail?: RequestFailCallback;
    /** 设置请求的 header，header 中不能设置 Referer。
     *
     * `content-type` 默认为 `application/json` */
    header?: object;
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
      | 'CONNECT';
    /** 响应的数据类型
     *
     * 可选值：
     * - 'text': 响应的数据为文本;
     * - 'arraybuffer': 响应的数据为 ArrayBuffer;
     *
     * 最低基础库： `1.7.0` */
    responseType?: 'text' | 'arraybuffer';
    /** 接口调用成功的回调函数 */
    success?: RequestSuccessCallback;
  }
  interface RequestSuccessCallbackResult {
    /** 开发者服务器返回的数据 */
    data: string | object | ArrayBuffer;
    /** 开发者服务器返回的 HTTP Response Header
     *
     * 最低基础库： `1.2.0` */
    header: object;
    /** 开发者服务器返回的 HTTP 状态码 */
    statusCode: number;
  }
  interface RequestTaskOnHeadersReceivedCallbackResult {
    /** 开发者服务器返回的 HTTP Response Header */
    header: object;
  }
  interface Result {
    /** x 轴的角速度 */
    x: number;
    /** y 轴的角速度 */
    y: number;
    /** z 轴的角速度 */
    z: number;
  }
  /** 当场景为由从另一个小程序或公众号或App打开时，返回此字段 */
  interface ResultReferrerInfo {
    /** 来源小程序或公众号或App的 appId */
    appId: string;
    /** 来源小程序传过来的数据，scene=1037或1038时支持 */
    extraData: object;
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
    errCode: 1000 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008;
    /** 错误信息 */
    errMsg: string;
  }
  interface RmdirFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail no such file or directory ${dirPath}': 目录不存在;
     * - 'fail directory not empty': 目录不为空;
     * - 'fail permission denied, open ${dirPath}': 指定的 dirPath 路径没有写权限; */
    errMsg: string;
  }
  interface RmdirOption {
    /** 要删除的目录路径 */
    dirPath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: RmdirCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: RmdirFailCallback;
    /** 是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。
     *
     * 最低基础库： `2.3.0` */
    recursive?: boolean;
    /** 接口调用成功的回调函数 */
    success?: RmdirSuccessCallback;
  }
  interface SaveFileFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail tempFilePath file not exist': 指定的 tempFilePath 找不到文件;
     * - 'fail permission denied, open "${filePath}"': 指定的 filePath 路径没有写权限;
     * - 'fail no such file or directory "${dirPath}"': 上级目录不存在; */
    errMsg: string;
  }
  interface SaveFileOption {
    /** 临时存储文件路径 */
    tempFilePath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SaveFileCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SaveFileFailCallback;
    /** 要存储的文件路径 */
    filePath?: string;
    /** 接口调用成功的回调函数 */
    success?: SaveFileSuccessCallback;
  }
  interface SaveFileSuccessCallbackResult {
    /** 存储后的文件路径 */
    savedFilePath: number;
  }
  interface SaveImageToPhotosAlbumOption {
    /** 图片文件路径，可以是临时文件路径或永久文件路径，不支持网络图片路径 */
    filePath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SaveImageToPhotosAlbumCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SaveImageToPhotosAlbumFailCallback;
    /** 接口调用成功的回调函数 */
    success?: SaveImageToPhotosAlbumSuccessCallback;
  }
  interface SendOption {
    /** 需要发送的内容 */
    data: string | ArrayBuffer;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SendCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SendFailCallback;
    /** 接口调用成功的回调函数 */
    success?: SendSuccessCallback;
  }
  interface SendSocketMessageOption {
    /** 需要发送的内容 */
    data: string | ArrayBuffer;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SendSocketMessageCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SendSocketMessageFailCallback;
    /** 接口调用成功的回调函数 */
    success?: SendSocketMessageSuccessCallback;
  }
  interface SetClipboardDataOption {
    /** 剪贴板的内容 */
    data: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SetClipboardDataCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SetClipboardDataFailCallback;
    /** 接口调用成功的回调函数 */
    success?: SetClipboardDataSuccessCallback;
  }
  interface SetEnableDebugOption {
    /** 是否打开调试 */
    enableDebug: boolean;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SetEnableDebugCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SetEnableDebugFailCallback;
    /** 接口调用成功的回调函数 */
    success?: SetEnableDebugSuccessCallback;
  }
  interface SetInnerAudioOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SetInnerAudioOptionCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SetInnerAudioOptionFailCallback;
    /** 是否与其他音频混播，设置为 true 之后，不会终止其他应用或微信内的音乐 */
    mixWithOther?: boolean;
    /** （仅在 iOS 生效）是否遵循静音开关，设置为 false 之后，即使是在静音模式下，也能播放声音 */
    obeyMuteSwitch?: boolean;
    /** 接口调用成功的回调函数 */
    success?: SetInnerAudioOptionSuccessCallback;
  }
  interface SetKeepScreenOnOption {
    /** 是否保持屏幕常亮 */
    keepScreenOn: boolean;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SetKeepScreenOnCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SetKeepScreenOnFailCallback;
    /** 接口调用成功的回调函数 */
    success?: SetKeepScreenOnSuccessCallback;
  }
  interface SetMenuStyleOption {
    /** 样式风格
     *
     * 可选值：
     * - 'light': 浅色;
     * - 'dark': 深色; */
    style: 'light' | 'dark';
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SetMenuStyleCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SetMenuStyleFailCallback;
    /** 接口调用成功的回调函数 */
    success?: SetMenuStyleSuccessCallback;
  }
  interface SetScreenBrightnessOption {
    /** 屏幕亮度值，范围 0 ~ 1。0 最暗，1 最亮 */
    value: number;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SetScreenBrightnessCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SetScreenBrightnessFailCallback;
    /** 接口调用成功的回调函数 */
    success?: SetScreenBrightnessSuccessCallback;
  }
  interface SetStatusBarStyleOption {
    /** 样式风格
     *
     * 可选值：
     * - 'white': 白色;
     * - 'black': 浅色; */
    style: 'white' | 'black';
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SetStatusBarStyleCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SetStatusBarStyleFailCallback;
    /** 接口调用成功的回调函数 */
    success?: SetStatusBarStyleSuccessCallback;
  }
  interface SetStorageOption {
    /** 需要存储的内容。只支持原生类型、Date、及能够通过`JSON.stringify`序列化的对象。 */
    data: any;
    /** 本地缓存中指定的 key */
    key: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SetStorageCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SetStorageFailCallback;
    /** 接口调用成功的回调函数 */
    success?: SetStorageSuccessCallback;
  }
  interface SetUserCloudStorageOption {
    /** 要修改的 KV 数据列表 */
    KVDataList: Array<KVData>;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: SetUserCloudStorageCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: SetUserCloudStorageFailCallback;
    /** 接口调用成功的回调函数 */
    success?: SetUserCloudStorageSuccessCallback;
  }
  interface ShareAppMessageOption {
    /** 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4 */
    imageUrl?: string;
    /** 审核通过的图片 ID，详见 [使用审核通过的转发图片]
     *
     * 最低基础库： `2.4.3` */
    imageUrlId?: string;
    /** 查询字符串，从这条转发消息进入后，可通过 wx.getLaunchInfoSync() 或 wx.onShow() 获取启动参数中的 query。必须是 key1=val1&key2=val2 的格式。 */
    query?: string;
    /** 转发标题，不传则默认使用当前小游戏的昵称。 */
    title?: string;
  }
  interface ShowActionSheetOption {
    /** 按钮的文字数组，数组长度最大为 6 */
    itemList: Array<string>;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: ShowActionSheetCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: ShowActionSheetFailCallback;
    /** 按钮的文字颜色 */
    itemColor?: string;
    /** 接口调用成功的回调函数 */
    success?: ShowActionSheetSuccessCallback;
  }
  interface ShowActionSheetSuccessCallbackResult {
    /** 用户点击的按钮序号，从上到下的顺序，从0开始 */
    tapIndex: number;
  }
  interface ShowKeyboardOption {
    /** 当点击完成时键盘是否收起 */
    confirmHold: boolean;
    /** 键盘右下角 confirm 按钮的类型，只影响按钮的文本内容
     *
     * 可选值：
     * - 'done': 完成;
     * - 'next': 下一个;
     * - 'search': 搜索;
     * - 'go': 前往;
     * - 'send': 发送; */
    confirmType: 'done' | 'next' | 'search' | 'go' | 'send';
    /** 键盘输入框显示的默认值 */
    defaultValue: string;
    /** 键盘中文本的最大长度 */
    maxLength: number;
    /** 是否为多行输入 */
    multiple: boolean;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: ShowKeyboardCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: ShowKeyboardFailCallback;
    /** 接口调用成功的回调函数 */
    success?: ShowKeyboardSuccessCallback;
  }
  interface ShowLoadingOption {
    /** 提示的内容 */
    title: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: ShowLoadingCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: ShowLoadingFailCallback;
    /** 是否显示透明蒙层，防止触摸穿透 */
    mask?: boolean;
    /** 接口调用成功的回调函数 */
    success?: ShowLoadingSuccessCallback;
  }
  interface ShowModalOption {
    /** 提示的内容 */
    content: string;
    /** 提示的标题 */
    title: string;
    /** 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串 */
    cancelColor?: string;
    /** 取消按钮的文字，最多 4 个字符 */
    cancelText?: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: ShowModalCompleteCallback;
    /** 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串 */
    confirmColor?: string;
    /** 确认按钮的文字，最多 4 个字符 */
    confirmText?: string;
    /** 接口调用失败的回调函数 */
    fail?: ShowModalFailCallback;
    /** 是否显示取消按钮 */
    showCancel?: boolean;
    /** 接口调用成功的回调函数 */
    success?: ShowModalSuccessCallback;
  }
  interface ShowModalSuccessCallbackResult {
    /** 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）
     *
     * 最低基础库： `1.1.0` */
    cancel: boolean;
    /** 为 true 时，表示用户点击了确定按钮 */
    confirm: boolean;
  }
  interface ShowShareMenuOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: ShowShareMenuCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: ShowShareMenuFailCallback;
    /** 接口调用成功的回调函数 */
    success?: ShowShareMenuSuccessCallback;
    /** 是否使用带 shareTicket 的转发[详情] */
    withShareTicket?: boolean;
  }
  interface ShowToastOption {
    /** 提示的内容 */
    title: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: ShowToastCompleteCallback;
    /** 提示的延迟时间 */
    duration?: number;
    /** 接口调用失败的回调函数 */
    fail?: ShowToastFailCallback;
    /** 图标
     *
     * 可选值：
     * - 'success': 显示成功图标，此时 title 文本最多显示 7 个汉字长度;
     * - 'loading': 显示加载图标，此时 title 文本最多显示 7 个汉字长度;
     * - 'none': 不显示图标，此时 title 文本最多可显示两行，{% version('1.9.0') %}及以上版本支持; */
    icon?: 'success' | 'loading' | 'none';
    /** 自定义图标的本地路径，image 的优先级高于 icon
     *
     * 最低基础库： `1.1.0` */
    image?: string;
    /** 是否显示透明蒙层，防止触摸穿透 */
    mask?: boolean;
    /** 接口调用成功的回调函数 */
    success?: ShowToastSuccessCallback;
  }
  interface SocketTaskOnErrorCallbackResult {
    /** 错误信息 */
    errMsg: string;
  }
  interface SocketTaskOnMessageCallbackResult {
    /** 服务器返回的消息 */
    data: string | ArrayBuffer;
  }
  interface StartAccelerometerOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: StartAccelerometerCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: StartAccelerometerFailCallback;
    /** 监听加速度数据回调函数的执行频率
     *
     * 可选值：
     * - 'game': 适用于更新游戏的回调频率，在 20ms/次 左右;
     * - 'ui': 适用于更新 UI 的回调频率，在 60ms/次 左右;
     * - 'normal': 普通的回调频率，在 200ms/次 左右;
     *
     * 最低基础库： `2.1.0` */
    interval?: 'game' | 'ui' | 'normal';
    /** 接口调用成功的回调函数 */
    success?: StartAccelerometerSuccessCallback;
  }
  interface StartCompassOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: StartCompassCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: StartCompassFailCallback;
    /** 接口调用成功的回调函数 */
    success?: StartCompassSuccessCallback;
  }
  interface StartDeviceMotionListeningOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: StartDeviceMotionListeningCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: StartDeviceMotionListeningFailCallback;
    /** 监听设备方向的变化回调函数的执行频率
     *
     * 可选值：
     * - 'game': 适用于更新游戏的回调频率，在 20ms/次 左右;
     * - 'ui': 适用于更新 UI 的回调频率，在 60ms/次 左右;
     * - 'normal': 普通的回调频率，在 200ms/次 左右; */
    interval?: 'game' | 'ui' | 'normal';
    /** 接口调用成功的回调函数 */
    success?: StartDeviceMotionListeningSuccessCallback;
  }
  interface StartGyroscopeOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: StartGyroscopeCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: StartGyroscopeFailCallback;
    /** 监听陀螺仪数据回调函数的执行频率
     *
     * 可选值：
     * - 'game': 适用于更新游戏的回调频率，在 20ms/次 左右;
     * - 'ui': 适用于更新 UI 的回调频率，在 60ms/次 左右;
     * - 'normal': 普通的回调频率，在 200ms/次 左右; */
    interval?: 'game' | 'ui' | 'normal';
    /** 接口调用成功的回调函数 */
    success?: StartGyroscopeSuccessCallback;
  }
  interface StartOption {
    /** 指定录音的音频输入源，可通过 [wx.getAvailableAudioSources()] 获取当前可用的音频源
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
      | 'voice_recognition';
    /** 录音的时长，单位 ms，最大值 600000（10 分钟） */
    duration?: number;
    /** 编码码率，有效值见下表格 */
    encodeBitRate?: number;
    /** 音频格式
     *
     * 可选值：
     * - 'mp3': mp3 格式;
     * - 'aac': aac 格式; */
    format?: 'mp3' | 'aac';
    /** 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。 */
    frameSize?: number;
    /** 录音通道数
     *
     * 可选值：
     * - 1: 1 个通道;
     * - 2: 2 个通道; */
    numberOfChannels?: 1 | 2;
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
      | 48000;
  }
  interface StatFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail permission denied, open ${path}': 指定的 path 路径没有读权限;
     * - 'fail no such file or directory ${path}': 文件不存在; */
    errMsg: string;
  }
  interface StatOption {
    /** 文件/目录路径 */
    path: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: StatCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: StatFailCallback;
    /** 是否递归获取目录下的每个文件的 Stats 信息
     *
     * 最低基础库： `2.3.0` */
    recursive?: boolean;
    /** 接口调用成功的回调函数 */
    success?: StatSuccessCallback;
  }
  interface StatSuccessCallbackResult {
    /** [Stats]|Object
     *
     * 当 recursive 为 false 时，res.stats 是一个 Stats 对象。当 recursive 为 true 且 path 是一个目录的路径时，res.stats 是一个 Object，key 以 path 为根路径的相对路径，value 是该路径对应的 Stats 对象。 */
    stats: Stats | object;
  }
  /** 描述文件状态的对象 */
  interface Stats {
    /** 文件最近一次被存取或被执行的时间，UNIX 时间戳，对应 POSIX stat.st_atime */
    lastAccessedTime: number;
    /** 文件最后一次被修改的时间，UNIX 时间戳，对应 POSIX stat.st_mtime */
    lastModifiedTime: number;
    /** 文件的类型和存取的权限，对应 POSIX stat.st_mode */
    mode: string;
    /** 文件大小，单位：B，对应 POSIX stat.st_size */
    size: number;
  }
  interface StopAccelerometerOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: StopAccelerometerCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: StopAccelerometerFailCallback;
    /** 接口调用成功的回调函数 */
    success?: StopAccelerometerSuccessCallback;
  }
  interface StopCompassOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: StopCompassCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: StopCompassFailCallback;
    /** 接口调用成功的回调函数 */
    success?: StopCompassSuccessCallback;
  }
  interface StopDeviceMotionListeningOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: StopDeviceMotionListeningCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: StopDeviceMotionListeningFailCallback;
    /** 接口调用成功的回调函数 */
    success?: StopDeviceMotionListeningSuccessCallback;
  }
  interface StopGyroscopeOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: StopGyroscopeCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: StopGyroscopeFailCallback;
    /** 接口调用成功的回调函数 */
    success?: StopGyroscopeSuccessCallback;
  }
  /** banner 广告组件的样式 */
  interface StyleOption {
    /** banner 广告组件的高度 */
    height: number;
    /** banner 广告组件的左上角横坐标 */
    left: number;
    /** banner 广告组件的左上角纵坐标 */
    top: number;
    /** banner 广告组件的宽度 */
    width: number;
  }
  interface ToTempFilePathOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: ToTempFilePathCompleteCallback;
    /** 目标文件的高度，会将截取的部分拉伸或压缩至该数值 */
    destHeight?: number;
    /** 目标文件的宽度，会将截取的部分拉伸或压缩至该数值 */
    destWidth?: number;
    /** 接口调用失败的回调函数 */
    fail?: ToTempFilePathFailCallback;
    /** 目标文件的类型
     *
     * 可选值：
     * - 'jpg': jpg 文件;
     * - 'png': png 文件; */
    fileType?: 'jpg' | 'png';
    /** 截取 canvas 的高度 */
    height?: number;
    /** jpg图片的质量，仅当 fileType 为 jpg 时有效。取值范围为 0.0（最低）- 1.0（最高），不含 0。不在范围内时当作 1.0 */
    quality?: number;
    /** 接口调用成功的回调函数 */
    success?: ToTempFilePathSuccessCallback;
    /** 截取 canvas 的宽度 */
    width?: number;
    /** 截取 canvas 的左上角横坐标 */
    x?: number;
    /** 截取 canvas 的左上角纵坐标 */
    y?: number;
  }
  interface ToTempFilePathSyncOption {
    /** 目标文件的高度，会将截取的部分拉伸或压缩至该数值 */
    destHeight?: number;
    /** 目标文件的宽度，会将截取的部分拉伸或压缩至该数值 */
    destWidth?: number;
    /** 目标文件的类型
     *
     * 可选值：
     * - 'jpg': jpg 文件;
     * - 'png': png 文件; */
    fileType?: 'jpg' | 'png';
    /** 截取 canvas 的高度 */
    height?: number;
    /** jpg图片的质量，仅当 fileType 为 jpg 时有效。取值范围为 0.0（最低）- 1.0（最高），不含 0。不在范围内时当作 1.0 */
    quality?: number;
    /** 截取 canvas 的宽度 */
    width?: number;
    /** 截取 canvas 的左上角横坐标 */
    x?: number;
    /** 截取 canvas 的左上角纵坐标 */
    y?: number;
  }
  /** 在触控设备上的触摸点。通常是指手指或者触控笔在触屏设备或者触摸板上的操作。 */
  interface Touch {
    /** Touch 对象的唯一标识符，只读属性。一次触摸动作(我们值的是手指的触摸)在平面上移动的整个过程中, 该标识符不变。可以根据它来判断跟踪的是否是同一次触摸过程。 */
    identifier: number;
    /** 触点相对于屏幕左边沿的 X 坐标。 */
    screenX: number;
    /** 触点相对于屏幕上边沿的 Y 坐标。 */
    screenY: number;
  }
  interface UnlinkFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail permission denied, open ${path}': 指定的 path 路径没有读权限;
     * - 'fail no such file or directory ${path}': 文件不存在;
     * - 'fail operation not permitted, unlink ${filePath}': 传入的 filePath 是一个目录; */
    errMsg: string;
  }
  interface UnlinkOption {
    /** 要删除的文件路径 */
    filePath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: UnlinkCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: UnlinkFailCallback;
    /** 接口调用成功的回调函数 */
    success?: UnlinkSuccessCallback;
  }
  interface UnzipFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail permission denied, unzip ${zipFilePath} -> ${destPath}': 指定目标文件路径没有写权限;
     * - 'fail no such file or directory, unzip ${zipFilePath} -> "${destPath}': 源文件不存在，或目标文件路径的上层目录不存在; */
    errMsg: string;
  }
  interface UnzipOption {
    /** 目标目录路径 */
    targetPath: string;
    /** 源文件路径，只可以是 zip 压缩文件 */
    zipFilePath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: UnzipCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: UnzipFailCallback;
    /** 接口调用成功的回调函数 */
    success?: UnzipSuccessCallback;
  }
  /** 参数列表 */
  interface UpdatableMessageFrontEndParameter {
    /** 参数名 */
    name: string;
    /** 参数值 */
    value: string;
  }
  /** 动态消息的模板信息
   *
   * 最低基础库： `2.4.0` */
  interface UpdatableMessageFrontEndTemplateInfo {
    /** 参数列表 */
    parameterList: UpdatableMessageFrontEndParameter;
  }
  interface UpdateKeyboardOption {
    /** 键盘输入框的当前值 */
    value: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: UpdateKeyboardCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: UpdateKeyboardFailCallback;
    /** 接口调用成功的回调函数 */
    success?: UpdateKeyboardSuccessCallback;
  }
  interface UpdateShareMenuOption {
    /** 动态消息的 activityId。通过 [updatableMessage.createActivityId] 接口获取
     *
     * 最低基础库： `2.4.0` */
    activityId?: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: UpdateShareMenuCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: UpdateShareMenuFailCallback;
    /** 是否是动态消息，详见[动态消息]
     *
     * 最低基础库： `2.4.0` */
    isUpdatableMessage?: boolean;
    /** 接口调用成功的回调函数 */
    success?: UpdateShareMenuSuccessCallback;
    /** 动态消息的模板信息
     *
     * 最低基础库： `2.4.0` */
    templateInfo?: UpdatableMessageFrontEndTemplateInfo;
    /** 是否使用带 shareTicket 的转发[详情] */
    withShareTicket?: boolean;
  }
  interface UploadFileOption {
    /** 要上传文件资源的路径 */
    filePath: string;
    /** 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 */
    name: string;
    /** 开发者服务器地址 */
    url: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: UploadFileCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: UploadFileFailCallback;
    /** HTTP 请求中其他额外的 form data */
    formData?: object;
    /** HTTP 请求 Header，Header 中不能设置 Referer */
    header?: object;
    /** 接口调用成功的回调函数 */
    success?: UploadFileSuccessCallback;
  }
  interface UploadFileSuccessCallbackResult {
    /** 开发者服务器返回的数据 */
    data: string;
    /** 开发者服务器返回的 HTTP 状态码 */
    statusCode: number;
  }
  interface UploadTaskOnHeadersReceivedCallbackResult {
    /** 开发者服务器返回的 HTTP Response Header */
    header: object;
  }
  interface UploadTaskOnProgressUpdateCallbackResult {
    /** 上传进度百分比 */
    progress: number;
    /** 预期需要上传的数据总长度，单位 Bytes */
    totalBytesExpectedToSend: number;
    /** 已经上传的数据长度，单位 Bytes */
    totalBytesSent: number;
  }
  /** 托管数据 */
  interface UserGameData {
    /** 用户的托管 KV 数据列表 */
    KVDataList: Array<KVData>;
    /** 用户的微信头像 url */
    avatarUrl: string;
    /** 用户的微信昵称 */
    nickname: string;
    /** 用户的 openid */
    openid: string;
  }
  /** 用户信息 */
  interface UserInfo {
    /** 用户头像图片的 URL。URL 最后一个数值代表正方形头像大小（有 0、46、64、96、132 数值可选，0 代表 640x640 的正方形头像，46 表示 46x46 的正方形头像，剩余数值以此类推。默认132），用户没有头像时该项为空。若用户更换头像，原有头像 URL 将失效。 */
    avatarUrl: string;
    /** 用户所在城市 */
    city: string;
    /** 用户所在国家 */
    country: string;
    /** 用户性别
     *
     * 可选值：
     * - 0: 未知;
     * - 1: 男性;
     * - 2: 女性; */
    gender: 0 | 1 | 2;
    /** 显示 country，province，city 所用的语言
     *
     * 可选值：
     * - 'en': 英文;
     * - 'zh_CN': 简体中文;
     * - 'zh_TW': 繁体中文; */
    language: 'en' | 'zh_CN' | 'zh_TW';
    /** 用户昵称 */
    nickName: string;
    /** 用户所在省份 */
    province: string;
  }
  /** 用户信息按钮 */
  interface UserInfoButton {
    /** 按钮的样式 */
    style: UserInfoButtonStyle;
    /** 按钮的类型
     *
     * 可选值：
     * - 'text': 可以设置背景色和文本的按钮;
     * - 'image': 只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高; */
    type: 'text' | 'image';
    /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
    image?: string;
    /** 按钮上的文本，仅当 type 为 `text` 时有效 */
    text?: string;
  }
  /** 按钮的样式 */
  interface UserInfoButtonStyle {
    /** 背景颜色 */
    backgroundColor: string;
    /** 边框颜色 */
    borderColor: string;
    /** 边框圆角 */
    borderRadius: number;
    /** 边框宽度 */
    borderWidth: number;
    /** 字号 */
    fontSize: number;
    /** 高度 */
    height: number;
    /** 左上角横坐标 */
    left: number;
    /** 文本的行高 */
    lineHeight: number;
    /** 文本的水平居中方式
     *
     * 可选值：
     * - 'left': 居左;
     * - 'center': 居中;
     * - 'right': 居右; */
    textAlign: 'left' | 'center' | 'right';
    /** 左上角纵坐标 */
    top: number;
    /** 宽度 */
    width: number;
  }
  interface VibrateLongOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: VibrateLongCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: VibrateLongFailCallback;
    /** 接口调用成功的回调函数 */
    success?: VibrateLongSuccessCallback;
  }
  interface VibrateShortOption {
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: VibrateShortCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: VibrateShortFailCallback;
    /** 接口调用成功的回调函数 */
    success?: VibrateShortSuccessCallback;
  }
  /** 视频对象 */
  interface Video {
    /** 视频是否自动播放 */
    autoplay: number;
    /** 视频是否显示控件 */
    controls: number;
    /** 是否启用手势控制播放进度 */
    enableProgressGesture: boolean;
    /** 视频的高度 */
    height: number;
    /** 视频的初始播放位置，单位为 s 秒 */
    initialTime: number;
    /** 视频是否为直播 */
    live: number;
    /** 视频是否是否循环播放 */
    loop: number;
    /** 视频是否禁音播放 */
    muted: number;
    /** 视频的缩放模式 */
    objectFit: number;
    /** 视频播放到末尾时触发的回调函数 */
    onended: Function;
    /** 视频发生错误时触发的回调函数 */
    onerror: Function;
    /** 视频暂停时触发的回调函数 */
    onpause: Function;
    /** 视频开始播放时触发的回调函数 */
    onplay: Function;
    /** 每当视频播放进度更新时触发的回调函数 */
    ontimeupdate: Function;
    /** 视频开始缓冲时触发的回调函数 */
    onwaiting: Function;
    /** 视频的播放速率，有效值有 0.5、0.8、1.0、1.25、1.5 */
    playbackRate: number;
    /** 视频的封面 */
    poster: number;
    /** 是否显示视频中央的播放按钮 */
    showCenterPlayBtn: boolean;
    /** 视频的资源地址 */
    src: number;
    /** 视频的宽度 */
    width: number;
    /** 视频的左上角横坐标 */
    x: number;
    /** 视频的左上角纵坐标 */
    y: number;
  }
  interface VideoOnErrorCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'MEDIA_ERR_NETWORK': 当下载时发生错误;
     * - 'MEDIA_ERR_DECODE': 当解码时发生错误;
     * - 'MEDIA_ERR_SRC_NOT_SUPPORTED': video 的 src 属性是不支持的资源类型; */
    errMsg: string;
  }
  interface WorkerOnMessageCallbackResult {
    /** 主线程/Worker 线程向当前线程发送的消息 */
    message: object;
  }
  interface WriteFileFailCallbackResult {
    /** 错误信息
     *
     * 可选值：
     * - 'fail no such file or directory, open ${filePath}': 指定的 filePath 所在目录不存在;
     * - 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有写权限; */
    errMsg: string;
  }
  interface WriteFileOption {
    /** 要写入的文本或二进制数据 */
    data: string | ArrayBuffer;
    /** 要写入的文件路径 */
    filePath: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: WriteFileCompleteCallback;
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
      | 'latin1';
    /** 接口调用失败的回调函数 */
    fail?: WriteFileFailCallback;
    /** 接口调用成功的回调函数 */
    success?: WriteFileSuccessCallback;
  }
  interface WxOnErrorCallbackResult {
    /** 错误 */
    message: string;
    /** 错误调用堆栈 */
    stack: string;
  }
  interface BannerAd {
    /** [BannerAd.destroy()](BannerAd.destroy.md)
     *
     * 销毁 banner 广告 */
    destroy(): void;
    /** [BannerAd.hide()](BannerAd.hide.md)
     *
     * 隐藏 banner 广告 */
    hide(): void;
    /** [BannerAd.offError(function callback)](BannerAd.offError.md)
     *
     * 取消监听 banner 广告错误事件 */
    offError(
      /** banner 广告错误事件的回调函数 */
      callback: BannerAdOffErrorCallback,
    ): void;
    /** [BannerAd.offLoad(function callback)](BannerAd.offLoad.md)
     *
     * 取消监听 banner 广告加载事件 */
    offLoad(
      /** banner 广告加载事件的回调函数 */
      callback: BannerAdOffLoadCallback,
    ): void;
    /** [BannerAd.offResize(function callback)](BannerAd.offResize.md)
     *
     * 取消监听 banner 广告尺寸变化事件 */
    offResize(
      /** banner 广告尺寸变化事件的回调函数 */
      callback: OffResizeCallback,
    ): void;
    /** [BannerAd.onError(function callback)](BannerAd.onError.md)
     *
     * 监听 banner 广告错误事件
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
    ): void;
    /** [BannerAd.onLoad(function callback)](BannerAd.onLoad.md)
     *
     * 监听 banner 广告加载事件 */
    onLoad(
      /** banner 广告加载事件的回调函数 */
      callback: BannerAdOnLoadCallback,
    ): void;
    /** [BannerAd.onResize(function callback)](BannerAd.onResize.md)
     *
     * 监听 banner 广告尺寸变化事件 */
    onResize(
      /** banner 广告尺寸变化事件的回调函数 */
      callback: OnResizeCallback,
    ): void;
    /** [Promise BannerAd.show()](BannerAd.show.md)
     *
     * 显示 banner 广告。 */
    show(): Promise<any>;
  }
  interface Canvas {
    /** [Canvas.toTempFilePathSync(Object object)]
     *
     * [Canvas.toTempFilePath] 的同步版本 */
    toTempFilePathSync(option: ToTempFilePathSyncOption): void;
    /** [[RenderingContext] Canvas.getContext(string contextType, Object contextAttributes)](Canvas.getContext.md)
     *
     * 获取画布对象的绘图上下文 */
    getContext(
      /** 上下文类型 */
      contextType: string,
      /** webgl 上下文属性，仅当 contextType 为 webgl 时有效 */
      contextAttributes: ContextAttributes,
    ): RenderingContext;
    /** [string Canvas.toDataURL()](Canvas.toDataURL.md)
     *
     * 把画布上的绘制内容以一个 data URI 的格式返回 */
    toDataURL(): string;
    /** [string Canvas.toTempFilePath(Object object)](Canvas.toTempFilePath.md)
     *
     * 将当前 Canvas 保存为一个临时文件。 */
    toTempFilePath(option: ToTempFilePathOption): string;
  }
  interface Console {
    /** [console.debug()](console.debug.md)
     *
     * 向调试面板中打印 debug 日志 */
    debug(
      /** 日志内容，可以有任意多个。 */
      ...args: any[]
    ): void;
    /** [console.error()](console.error.md)
     *
     * 向调试面板中打印 error 日志 */
    error(
      /** 日志内容，可以有任意多个。 */
      ...args: any[]
    ): void;
    /** [console.group(string label)](console.group.md)
     *
     * 在调试面板中创建一个新的分组。随后输出的内容都会被添加一个缩进，表示该内容属于当前分组。调用 [console.groupEnd]之后分组结束。
     *
     * **注意**
     *
     *
     * 仅在工具中有效，在 vConsole 中为空函数实现。 */
    group(
      /** 分组标记，可选。 */
      label?: string,
    ): void;
    /** [console.groupEnd()](console.groupEnd.md)
     *
     * 结束由 [console.group] 创建的分组
     *
     * **注意**
     *
     *
     * 仅在工具中有效，在 vConsole 中为空函数实现。 */
    groupEnd(): void;
    /** [console.info()](console.info.md)
     *
     * 向调试面板中打印 info 日志 */
    info(
      /** 日志内容，可以有任意多个。 */
      ...args: any[]
    ): void;
    /** [console.log()](console.log.md)
     *
     * 向调试面板中打印 log 日志 */
    log(
      /** 日志内容，可以有任意多个。 */
      ...args: any[]
    ): void;
    /** [console.warn()](console.warn.md)
     *
     * 向调试面板中打印 warn 日志 */
    warn(
      /** 日志内容，可以有任意多个。 */
      ...args: any[]
    ): void;
  }
  interface DownloadTask {
    /** [DownloadTask.abort()](DownloadTask.abort.md)
     *
     * 中断下载任务
     *
     * 最低基础库： `1.4.0` */
    abort(): void;
    /** [DownloadTask.offHeadersReceived(function callback)](DownloadTask.offHeadersReceived.md)
     *
     * 取消监听 HTTP Response Header 事件
     *
     * 最低基础库： `2.1.0` */
    offHeadersReceived(
      /** HTTP Response Header 事件的回调函数 */
      callback: DownloadTaskOffHeadersReceivedCallback,
    ): void;
    /** [DownloadTask.offProgressUpdate(function callback)](DownloadTask.offProgressUpdate.md)
     *
     * 取消监听下载进度变化事件
     *
     * 最低基础库： `2.1.0` */
    offProgressUpdate(
      /** 下载进度变化事件的回调函数 */
      callback: DownloadTaskOffProgressUpdateCallback,
    ): void;
    /** [DownloadTask.onHeadersReceived(function callback)](DownloadTask.onHeadersReceived.md)
     *
     * 监听 HTTP Response Header 事件。会比请求完成事件更早
     *
     * 最低基础库： `2.1.0` */
    onHeadersReceived(
      /** HTTP Response Header 事件的回调函数 */
      callback: DownloadTaskOnHeadersReceivedCallback,
    ): void;
    /** [DownloadTask.onProgressUpdate(function callback)](DownloadTask.onProgressUpdate.md)
     *
     * 监听下载进度变化事件
     *
     * 最低基础库： `1.4.0` */
    onProgressUpdate(
      /** 下载进度变化事件的回调函数 */
      callback: DownloadTaskOnProgressUpdateCallback,
    ): void;
  }
  interface FeedbackButton {
    /** [FeedbackButton.destroy()](FeedbackButton.destroy.md)
     *
     * 销毁意见反馈按钮 */
    destroy(): void;
    /** [FeedbackButton.hide()](FeedbackButton.hide.md)
     *
     * 隐藏意见反馈按钮。 */
    hide(): void;
    /** [FeedbackButton.offTap(function callback)](FeedbackButton.offTap.md)
     *
     * 取消监听意见反馈按钮的点击事件 */
    offTap(
      /** 意见反馈按钮的点击事件的回调函数 */
      callback: FeedbackButtonOffTapCallback,
    ): void;
    /** [FeedbackButton.onTap(function callback)](FeedbackButton.onTap.md)
     *
     * 监听意见反馈按钮的点击事件 */
    onTap(
      /** 意见反馈按钮的点击事件的回调函数 */
      callback: FeedbackButtonOnTapCallback,
    ): void;
    /** [FeedbackButton.show()](FeedbackButton.show.md)
     *
     * 显示意见反馈按钮 */
    show(): void;
  }
  interface FileSystemManager {
    /** [Array.<string> FileSystemManager.readdirSync(string dirPath)]
     *
     * [FileSystemManager.readdir] 的同步版本 */
    readdirSync(
      /** 要读取的目录路径 */
      dirPath: string,
    ): Array<string>;
    /** [FileSystemManager.access(Object object)](FileSystemManager.access.md)
     *
     * 判断文件/目录是否存在 */
    access(option: AccessOption): void;
    /** [FileSystemManager.accessSync(string path)]
     *
     * [FileSystemManager.access] 的同步版本 */
    accessSync(
      /** 要判断是否存在的文件/目录路径 */
      path: string,
    ): void;
    /** [FileSystemManager.appendFile(Object object)](FileSystemManager.appendFile.md)
     *
     * 在文件结尾追加内容
     *
     * 最低基础库： `2.1.0` */
    appendFile(option: AppendFileOption): void;
    /** [FileSystemManager.appendFileSync(string filePath, string|ArrayBuffer data, string encoding)]
     *
     * [FileSystemManager.appendFile] 的同步版本
     *
     * 最低基础库： `2.1.0` */
    appendFileSync(
      /** 要追加内容的文件路径 */
      filePath: string,
      /** 要追加的文本或二进制数据 */
      data: string | ArrayBuffer,
      /** 指定写入文件的字符编码 */
      encoding?: string,
    ): void;
    /** [FileSystemManager.copyFile(Object object)](FileSystemManager.copyFile.md)
     *
     * 复制文件 */
    copyFile(option: CopyFileOption): void;
    /** [FileSystemManager.copyFileSync(string srcPath, string destPath)]
     *
     * [FileSystemManager.copyFile] 的同步版本 */
    copyFileSync(
      /** 源文件路径，只可以是普通文件 */
      srcPath: string,
      /** 目标文件路径 */
      destPath: string,
    ): void;
    /** [FileSystemManager.getFileInfo(Object object)](FileSystemManager.getFileInfo.md)
     *
     * 获取该小程序下的 本地临时文件 或 本地缓存文件 信息 */
    getFileInfo(option: GetFileInfoOption): void;
    /** [FileSystemManager.getSavedFileList(Object object)](FileSystemManager.getSavedFileList.md)
     *
     * 获取该小程序下已保存的本地缓存文件列表 */
    getSavedFileList(option?: GetSavedFileListOption): void;
    /** [FileSystemManager.mkdir(Object object)](FileSystemManager.mkdir.md)
     *
     * 创建目录 */
    mkdir(option: MkdirOption): void;
    /** [FileSystemManager.mkdirSync(string dirPath, boolean recursive)]
     *
     * [FileSystemManager.mkdir] 的同步版本 */
    mkdirSync(
      /** 创建的目录路径 */
      dirPath: string,
      /** 是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。
       *
       * 最低基础库： `2.3.0` */
      recursive?: boolean,
    ): void;
    /** [FileSystemManager.readFile(Object object)](FileSystemManager.readFile.md)
     *
     * 读取本地文件内容 */
    readFile(option: ReadFileOption): void;
    /** [FileSystemManager.readdir(Object object)](FileSystemManager.readdir.md)
     *
     * 读取目录内文件列表 */
    readdir(option: ReaddirOption): void;
    /** [FileSystemManager.removeSavedFile(Object object)](FileSystemManager.removeSavedFile.md)
     *
     * 删除该小程序下已保存的本地缓存文件 */
    removeSavedFile(option: RemoveSavedFileOption): void;
    /** [FileSystemManager.rename(Object object)](FileSystemManager.rename.md)
     *
     * 重命名文件。可以把文件从 oldPath 移动到 newPath */
    rename(option: RenameOption): void;
    /** [FileSystemManager.renameSync(string oldPath, string newPath)]
     *
     * [FileSystemManager.rename] 的同步版本 */
    renameSync(
      /** 源文件路径，可以是普通文件或目录 */
      oldPath: string,
      /** 新文件路径 */
      newPath: string,
    ): void;
    /** [FileSystemManager.rmdir(Object object)](FileSystemManager.rmdir.md)
     *
     * 删除目录 */
    rmdir(option: RmdirOption): void;
    /** [FileSystemManager.rmdirSync(string dirPath, boolean recursive)]
     *
     * [FileSystemManager.rmdir] 的同步版本 */
    rmdirSync(
      /** 要删除的目录路径 */
      dirPath: string,
      /** 是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。
       *
       * 最低基础库： `2.3.0` */
      recursive?: boolean,
    ): void;
    /** [FileSystemManager.saveFile(Object object)](FileSystemManager.saveFile.md)
     *
     * 保存临时文件到本地。此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用。 */
    saveFile(option: SaveFileOption): void;
    /** [FileSystemManager.stat(Object object)](FileSystemManager.stat.md)
     *
     * 获取文件 Stats 对象 */
    stat(option: StatOption): void;
    /** [FileSystemManager.unlink(Object object)](FileSystemManager.unlink.md)
     *
     * 删除文件 */
    unlink(option: UnlinkOption): void;
    /** [FileSystemManager.unlinkSync(string filePath)]
     *
     * [FileSystemManager.unlink] 的同步版本 */
    unlinkSync(
      /** 要删除的文件路径 */
      filePath: string,
    ): void;
    /** [FileSystemManager.unzip(Object object)](FileSystemManager.unzip.md)
     *
     * 解压文件 */
    unzip(option: UnzipOption): void;
    /** [FileSystemManager.writeFile(Object object)](FileSystemManager.writeFile.md)
     *
     * 写文件 */
    writeFile(option: WriteFileOption): void;
    /** [FileSystemManager.writeFileSync(string filePath, string|ArrayBuffer data, string encoding)]
     *
     * [FileSystemManager.writeFile] 的同步版本 */
    writeFileSync(
      /** 要写入的文件路径 */
      filePath: string,
      /** 要写入的文本或二进制数据 */
      data: string | ArrayBuffer,
      /** 指定写入文件的字符编码 */
      encoding?: string,
    ): void;
    /** [[Stats]
     *
     * [FileSystemManager.stat] 的同步版本 */
    statSync(
      /** 文件/目录路径 */
      path: string,
      /** 是否递归获取目录下的每个文件的 Stats 信息
       *
       * 最低基础库： `2.3.0` */
      recursive?: boolean,
    ): Stats;
    /** [number FileSystemManager.saveFileSync(string tempFilePath, string filePath)]
     *
     * [FileSystemManager.saveFile] 的同步版本 */
    saveFileSync(
      /** 临时存储文件路径 */
      tempFilePath: string,
      /** 要存储的文件路径 */
      filePath?: string,
    ): number;
    /** [string|ArrayBuffer FileSystemManager.readFileSync(string filePath, string encoding)]
     *
     * [FileSystemManager.readFile] 的同步版本 */
    readFileSync(
      /** 要读取的文件的路径 */
      filePath: string,
      /** 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容 */
      encoding?: string,
    ): string;
  }
  interface GameClubButton {
    /** [GameClubButton.destroy()](GameClubButton.destroy.md)
     *
     * 销毁游戏圈按钮 */
    destroy(): void;
    /** [GameClubButton.hide()](GameClubButton.hide.md)
     *
     * 隐藏游戏圈按钮 */
    hide(): void;
    /** [GameClubButton.offTap(function callback)](GameClubButton.offTap.md)
     *
     * 取消监听游戏圈按钮的点击事件 */
    offTap(
      /** 游戏圈按钮的点击事件的回调函数 */
      callback: GameClubButtonOffTapCallback,
    ): void;
    /** [GameClubButton.onTap(function callback)](GameClubButton.onTap.md)
     *
     * 监听游戏圈按钮的点击事件 */
    onTap(
      /** 游戏圈按钮的点击事件的回调函数 */
      callback: GameClubButtonOnTapCallback,
    ): void;
    /** [GameClubButton.show()](GameClubButton.show.md)
     *
     * 显示游戏圈按钮 */
    show(): void;
  }
  interface GeneralCallbackResult {
    errMsg: string;
  }
  interface InnerAudioContext {
    /** [InnerAudioContext.destroy()](InnerAudioContext.destroy.md)
     *
     * 销毁当前实例 */
    destroy(): void;
    /** [InnerAudioContext.offCanplay(function callback)](InnerAudioContext.offCanplay.md)
     *
     * 取消监听音频进入可以播放状态的事件
     *
     * 最低基础库： `1.9.0` */
    offCanplay(
      /** 音频进入可以播放状态的事件的回调函数 */
      callback: OffCanplayCallback,
    ): void;
    /** [InnerAudioContext.offEnded(function callback)](InnerAudioContext.offEnded.md)
     *
     * 取消监听音频自然播放至结束的事件
     *
     * 最低基础库： `1.9.0` */
    offEnded(
      /** 音频自然播放至结束的事件的回调函数 */
      callback: InnerAudioContextOffEndedCallback,
    ): void;
    /** [InnerAudioContext.offError(function callback)](InnerAudioContext.offError.md)
     *
     * 取消监听音频播放错误事件
     *
     * 最低基础库： `1.9.0` */
    offError(
      /** 音频播放错误事件的回调函数 */
      callback: InnerAudioContextOffErrorCallback,
    ): void;
    /** [InnerAudioContext.offPause(function callback)](InnerAudioContext.offPause.md)
     *
     * 取消监听音频暂停事件
     *
     * 最低基础库： `1.9.0` */
    offPause(
      /** 音频暂停事件的回调函数 */
      callback: InnerAudioContextOffPauseCallback,
    ): void;
    /** [InnerAudioContext.offPlay(function callback)](InnerAudioContext.offPlay.md)
     *
     * 取消监听音频播放事件
     *
     * 最低基础库： `1.9.0` */
    offPlay(
      /** 音频播放事件的回调函数 */
      callback: InnerAudioContextOffPlayCallback,
    ): void;
    /** [InnerAudioContext.offSeeked(function callback)](InnerAudioContext.offSeeked.md)
     *
     * 取消监听音频完成跳转操作的事件
     *
     * 最低基础库： `1.9.0` */
    offSeeked(
      /** 音频完成跳转操作的事件的回调函数 */
      callback: OffSeekedCallback,
    ): void;
    /** [InnerAudioContext.offSeeking(function callback)](InnerAudioContext.offSeeking.md)
     *
     * 取消监听音频进行跳转操作的事件
     *
     * 最低基础库： `1.9.0` */
    offSeeking(
      /** 音频进行跳转操作的事件的回调函数 */
      callback: OffSeekingCallback,
    ): void;
    /** [InnerAudioContext.offStop(function callback)](InnerAudioContext.offStop.md)
     *
     * 取消监听音频停止事件
     *
     * 最低基础库： `1.9.0` */
    offStop(
      /** 音频停止事件的回调函数 */
      callback: OffStopCallback,
    ): void;
    /** [InnerAudioContext.offTimeUpdate(function callback)](InnerAudioContext.offTimeUpdate.md)
     *
     * 取消监听音频播放进度更新事件
     *
     * 最低基础库： `1.9.0` */
    offTimeUpdate(
      /** 音频播放进度更新事件的回调函数 */
      callback: InnerAudioContextOffTimeUpdateCallback,
    ): void;
    /** [InnerAudioContext.offWaiting(function callback)](InnerAudioContext.offWaiting.md)
     *
     * 取消监听音频加载中事件
     *
     * 最低基础库： `1.9.0` */
    offWaiting(
      /** 音频加载中事件的回调函数 */
      callback: InnerAudioContextOffWaitingCallback,
    ): void;
    /** [InnerAudioContext.onCanplay(function callback)](InnerAudioContext.onCanplay.md)
     *
     * 监听音频进入可以播放状态的事件。但不保证后面可以流畅播放 */
    onCanplay(
      /** 音频进入可以播放状态的事件的回调函数 */
      callback: OnCanplayCallback,
    ): void;
    /** [InnerAudioContext.onEnded(function callback)](InnerAudioContext.onEnded.md)
     *
     * 监听音频自然播放至结束的事件 */
    onEnded(
      /** 音频自然播放至结束的事件的回调函数 */
      callback: InnerAudioContextOnEndedCallback,
    ): void;
    /** [InnerAudioContext.onError(function callback)](InnerAudioContext.onError.md)
     *
     * 监听音频播放错误事件 */
    onError(
      /** 音频播放错误事件的回调函数 */
      callback: InnerAudioContextOnErrorCallback,
    ): void;
    /** [InnerAudioContext.onPause(function callback)](InnerAudioContext.onPause.md)
     *
     * 监听音频暂停事件 */
    onPause(
      /** 音频暂停事件的回调函数 */
      callback: InnerAudioContextOnPauseCallback,
    ): void;
    /** [InnerAudioContext.onPlay(function callback)](InnerAudioContext.onPlay.md)
     *
     * 监听音频播放事件 */
    onPlay(
      /** 音频播放事件的回调函数 */
      callback: InnerAudioContextOnPlayCallback,
    ): void;
    /** [InnerAudioContext.onSeeked(function callback)](InnerAudioContext.onSeeked.md)
     *
     * 监听音频完成跳转操作的事件 */
    onSeeked(
      /** 音频完成跳转操作的事件的回调函数 */
      callback: OnSeekedCallback,
    ): void;
    /** [InnerAudioContext.onSeeking(function callback)](InnerAudioContext.onSeeking.md)
     *
     * 监听音频进行跳转操作的事件 */
    onSeeking(
      /** 音频进行跳转操作的事件的回调函数 */
      callback: OnSeekingCallback,
    ): void;
    /** [InnerAudioContext.onStop(function callback)](InnerAudioContext.onStop.md)
     *
     * 监听音频停止事件 */
    onStop(
      /** 音频停止事件的回调函数 */
      callback: InnerAudioContextOnStopCallback,
    ): void;
    /** [InnerAudioContext.onTimeUpdate(function callback)](InnerAudioContext.onTimeUpdate.md)
     *
     * 监听音频播放进度更新事件 */
    onTimeUpdate(
      /** 音频播放进度更新事件的回调函数 */
      callback: InnerAudioContextOnTimeUpdateCallback,
    ): void;
    /** [InnerAudioContext.onWaiting(function callback)](InnerAudioContext.onWaiting.md)
     *
     * 监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发 */
    onWaiting(
      /** 音频加载中事件的回调函数 */
      callback: InnerAudioContextOnWaitingCallback,
    ): void;
    /** [InnerAudioContext.pause()](InnerAudioContext.pause.md)
     *
     * 暂停。暂停后的音频再播放会从暂停处开始播放 */
    pause(): void;
    /** [InnerAudioContext.play()](InnerAudioContext.play.md)
     *
     * 播放 */
    play(): void;
    /** [InnerAudioContext.seek(number position)](InnerAudioContext.seek.md)
     *
     * 跳转到指定位置 */
    seek(
      /** 跳转的时间，单位 s。精确到小数点后 3 位，即支持 ms 级别精确度 */
      position: number,
    ): void;
    /** [InnerAudioContext.stop()](InnerAudioContext.stop.md)
     *
     * 停止。停止后的音频再播放会从头开始播放。 */
    stop(): void;
  }
  interface LoadSubpackageTask {
    /** [LoadSubpackageTask.onProgressUpdate(function callback)](LoadSubpackageTask.onProgressUpdate.md)
     *
     * 监听分包加载进度变化事件
     *
     * 最低基础库： `2.1.0` */
    onProgressUpdate(
      /** 分包加载进度变化事件的回调函数 */
      callback: LoadSubpackageTaskOnProgressUpdateCallback,
    ): void;
  }
  interface LogManager {
    /** [LogManager.debug()](LogManager.debug.md)
     *
     * 写 debug 日志 */
    debug(
      /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb */
      ...args: any[]
    ): void;
    /** [LogManager.info()](LogManager.info.md)
     *
     * 写 info 日志 */
    info(
      /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb */
      ...args: any[]
    ): void;
    /** [LogManager.log()](LogManager.log.md)
     *
     * 写 log 日志 */
    log(
      /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb */
      ...args: any[]
    ): void;
    /** [LogManager.warn()](LogManager.warn.md)
     *
     * 写 warn 日志 */
    warn(
      /** 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb */
      ...args: any[]
    ): void;
  }
  interface OpenDataContext {
    /** [OpenDataContext.postMessage(Object message)](OpenDataContext.postMessage.md)
     *
     * 向开放数据域发送消息 */
    postMessage(
      /** 要发送的消息，message 中及嵌套对象中 key 的 value 只能是 primitive value。即 number、string、boolean、null、undefined。 */
      message: object,
    ): void;
  }
  interface OpenSettingButton {
    /** [OpenSettingButton.destroy()](OpenSettingButton.destroy.md)
     *
     * 销毁打开设置页面按钮 */
    destroy(): void;
    /** [OpenSettingButton.hide()](OpenSettingButton.hide.md)
     *
     * 隐藏打开设置页面按钮。 */
    hide(): void;
    /** [OpenSettingButton.offTap(function callback)](OpenSettingButton.offTap.md)
     *
     * 取消监听设置页面按钮的点击事件 */
    offTap(
      /** 设置页面按钮的点击事件的回调函数 */
      callback: OpenSettingButtonOffTapCallback,
    ): void;
    /** [OpenSettingButton.onTap(function callback)](OpenSettingButton.onTap.md)
     *
     * 监听设置页面按钮的点击事件 */
    onTap(
      /** 设置页面按钮的点击事件的回调函数 */
      callback: OpenSettingButtonOnTapCallback,
    ): void;
    /** [OpenSettingButton.show()](OpenSettingButton.show.md)
     *
     * 显示打开设置页面按钮 */
    show(): void;
  }
  interface Performance {
    /** [number Performance.now()](Performance.now.md)
     *
     * 可以获取当前时间以微秒为单位的时间戳 */
    now(): number;
  }
  interface RecorderManager {
    /** [RecorderManager.onError(function callback)](RecorderManager.onError.md)
     *
     * 监听录音错误事件 */
    onError(
      /** 录音错误事件的回调函数 */
      callback: RecorderManagerOnErrorCallback,
    ): void;
    /** [RecorderManager.onFrameRecorded(function callback)](RecorderManager.onFrameRecorded.md)
     *
     * 监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。 */
    onFrameRecorded(
      /** 已录制完指定帧大小的文件事件的回调函数 */
      callback: OnFrameRecordedCallback,
    ): void;
    /** [RecorderManager.onInterruptionBegin(function callback)](RecorderManager.onInterruptionBegin.md)
     *
     * 监听录音因为受到系统占用而被中断开始事件。以下场景会触发此事件：微信语音聊天、微信视频聊天。此事件触发后，录音会被暂停。pause 事件在此事件后触发
     *
     * 最低基础库： `2.3.0` */
    onInterruptionBegin(
      /** 录音因为受到系统占用而被中断开始事件的回调函数 */
      callback: OnInterruptionBeginCallback,
    ): void;
    /** [RecorderManager.onInterruptionEnd(function callback)](RecorderManager.onInterruptionEnd.md)
     *
     * 监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功。
     *
     * 最低基础库： `2.3.0` */
    onInterruptionEnd(
      /** 录音中断结束事件的回调函数 */
      callback: OnInterruptionEndCallback,
    ): void;
    /** [RecorderManager.onPause(function callback)](RecorderManager.onPause.md)
     *
     * 监听录音暂停事件 */
    onPause(
      /** 录音暂停事件的回调函数 */
      callback: RecorderManagerOnPauseCallback,
    ): void;
    /** [RecorderManager.onResume(function callback)](RecorderManager.onResume.md)
     *
     * 监听录音继续事件 */
    onResume(
      /** 录音继续事件的回调函数 */
      callback: OnResumeCallback,
    ): void;
    /** [RecorderManager.onStart(function callback)](RecorderManager.onStart.md)
     *
     * 监听录音开始事件 */
    onStart(
      /** 录音开始事件的回调函数 */
      callback: OnStartCallback,
    ): void;
    /** [RecorderManager.onStop(function callback)](RecorderManager.onStop.md)
     *
     * 监听录音结束事件 */
    onStop(
      /** 录音结束事件的回调函数 */
      callback: RecorderManagerOnStopCallback,
    ): void;
    /** [RecorderManager.pause()](RecorderManager.pause.md)
     *
     * 暂停录音 */
    pause(): void;
    /** [RecorderManager.resume()](RecorderManager.resume.md)
     *
     * 继续录音 */
    resume(): void;
    /** [RecorderManager.start(Object object)](RecorderManager.start.md)
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
    start(option: StartOption): void;
    /** [RecorderManager.stop()](RecorderManager.stop.md)
     *
     * 停止录音 */
    stop(): void;
  }
  interface RequestTask {
    /** [RequestTask.abort()](RequestTask.abort.md)
     *
     * 中断请求任务
     *
     * 最低基础库： `1.4.0` */
    abort(): void;
    /** [RequestTask.offHeadersReceived(function callback)](RequestTask.offHeadersReceived.md)
     *
     * 取消监听 HTTP Response Header 事件
     *
     * 最低基础库： `2.1.0` */
    offHeadersReceived(
      /** HTTP Response Header 事件的回调函数 */
      callback: RequestTaskOffHeadersReceivedCallback,
    ): void;
    /** [RequestTask.onHeadersReceived(function callback)](RequestTask.onHeadersReceived.md)
     *
     * 监听 HTTP Response Header 事件。会比请求完成事件更早
     *
     * 最低基础库： `2.1.0` */
    onHeadersReceived(
      /** HTTP Response Header 事件的回调函数 */
      callback: RequestTaskOnHeadersReceivedCallback,
    ): void;
  }
  interface RewardedVideoAd {
    /** [Promise RewardedVideoAd.load()](RewardedVideoAd.load.md)
     *
     * 隐藏激励视频广告 */
    load(): Promise<any>;
    /** [Promise RewardedVideoAd.show()](RewardedVideoAd.show.md)
     *
     * 显示激励视频广告。激励视频广告将从屏幕下方推入。 */
    show(): Promise<any>;
    /** [RewardedVideoAd.offClose(function callback)](RewardedVideoAd.offClose.md)
     *
     * 取消监听用户点击 `关闭广告` 按钮的事件 */
    offClose(
      /** 用户点击 `关闭广告` 按钮的事件的回调函数 */
      callback: OffCloseCallback,
    ): void;
    /** [RewardedVideoAd.offError(function callback)](RewardedVideoAd.offError.md)
     *
     * 取消监听激励视频错误事件 */
    offError(
      /** 激励视频错误事件的回调函数 */
      callback: RewardedVideoAdOffErrorCallback,
    ): void;
    /** [RewardedVideoAd.offLoad(function callback)](RewardedVideoAd.offLoad.md)
     *
     * 取消监听激励视频广告加载事件 */
    offLoad(
      /** 激励视频广告加载事件的回调函数 */
      callback: RewardedVideoAdOffLoadCallback,
    ): void;
    /** [RewardedVideoAd.onClose(function callback)](RewardedVideoAd.onClose.md)
     *
     * 监听用户点击 `关闭广告` 按钮的事件 */
    onClose(
      /** 用户点击 `关闭广告` 按钮的事件的回调函数 */
      callback: RewardedVideoAdOnCloseCallback,
    ): void;
    /** [RewardedVideoAd.onError(function callback)](RewardedVideoAd.onError.md)
     *
     * 监听激励视频错误事件
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
    ): void;
    /** [RewardedVideoAd.onLoad(function callback)](RewardedVideoAd.onLoad.md)
     *
     * 监听激励视频广告加载事件 */
    onLoad(
      /** 激励视频广告加载事件的回调函数 */
      callback: RewardedVideoAdOnLoadCallback,
    ): void;
  }
  interface SocketTask {
    /** [SocketTask.close(Object object)](SocketTask.close.md)
     *
     * 关闭 WebSocket 连接 */
    close(option: CloseOption): void;
    /** [SocketTask.onClose(function callback)](SocketTask.onClose.md)
     *
     * 监听 WebSocket 连接关闭事件 */
    onClose(
      /** WebSocket 连接关闭事件的回调函数 */
      callback: SocketTaskOnCloseCallback,
    ): void;
    /** [SocketTask.onError(function callback)](SocketTask.onError.md)
     *
     * 监听 WebSocket 错误事件 */
    onError(
      /** WebSocket 错误事件的回调函数 */
      callback: SocketTaskOnErrorCallback,
    ): void;
    /** [SocketTask.onMessage(function callback)](SocketTask.onMessage.md)
     *
     * 监听 WebSocket 接受到服务器的消息事件 */
    onMessage(
      /** WebSocket 接受到服务器的消息事件的回调函数 */
      callback: SocketTaskOnMessageCallback,
    ): void;
    /** [SocketTask.onOpen(function callback)](SocketTask.onOpen.md)
     *
     * 监听 WebSocket 连接打开事件 */
    onOpen(
      /** WebSocket 连接打开事件的回调函数 */
      callback: OnOpenCallback,
    ): void;
    /** [SocketTask.send(Object object)](SocketTask.send.md)
     *
     * 通过 WebSocket 连接发送数据 */
    send(option: SendOption): void;
  }
  interface Stats {
    /** [boolean Stats.isDirectory()](Stats.isDirectory.md)
     *
     * 判断当前文件是否一个目录 */
    isDirectory(): boolean;
    /** [boolean Stats.isFile()](Stats.isFile.md)
     *
     * 判断当前文件是否一个普通文件 */
    isFile(): boolean;
  }
  interface UpdateManager {
    /** [UpdateManager.applyUpdate()](UpdateManager.applyUpdate.md)
     *
     * 强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 `onUpdateReady` 回调）调用。 */
    applyUpdate(): void;
    /** [UpdateManager.onCheckForUpdate(function callback)](UpdateManager.onCheckForUpdate.md)
     *
     * 监听向微信后台请求检查更新结果事件。微信在小程序冷启动时自动检查更新，不需由开发者主动触发。 */
    onCheckForUpdate(
      /** 向微信后台请求检查更新结果事件的回调函数 */
      callback: OnCheckForUpdateCallback,
    ): void;
    /** [UpdateManager.onUpdateFailed(function callback)](UpdateManager.onUpdateFailed.md)
     *
     * 监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调 */
    onUpdateFailed(
      /** 小程序更新失败事件的回调函数 */
      callback: OnUpdateFailedCallback,
    ): void;
    /** [UpdateManager.onUpdateReady(function callback)](UpdateManager.onUpdateReady.md)
     *
     * 监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调 */
    onUpdateReady(
      /** 小程序有版本更新事件的回调函数 */
      callback: OnUpdateReadyCallback,
    ): void;
  }
  interface UploadTask {
    /** [UploadTask.abort()](UploadTask.abort.md)
     *
     * 中断上传任务
     *
     * 最低基础库： `1.4.0` */
    abort(): void;
    /** [UploadTask.offHeadersReceived(function callback)](UploadTask.offHeadersReceived.md)
     *
     * 取消监听 HTTP Response Header 事件
     *
     * 最低基础库： `2.1.0` */
    offHeadersReceived(
      /** HTTP Response Header 事件的回调函数 */
      callback: UploadTaskOffHeadersReceivedCallback,
    ): void;
    /** [UploadTask.offProgressUpdate(function callback)](UploadTask.offProgressUpdate.md)
     *
     * 取消监听上传进度变化事件
     *
     * 最低基础库： `2.1.0` */
    offProgressUpdate(
      /** 上传进度变化事件的回调函数 */
      callback: UploadTaskOffProgressUpdateCallback,
    ): void;
    /** [UploadTask.onHeadersReceived(function callback)](UploadTask.onHeadersReceived.md)
     *
     * 监听 HTTP Response Header 事件。会比请求完成事件更早
     *
     * 最低基础库： `2.1.0` */
    onHeadersReceived(
      /** HTTP Response Header 事件的回调函数 */
      callback: UploadTaskOnHeadersReceivedCallback,
    ): void;
    /** [UploadTask.onProgressUpdate(function callback)](UploadTask.onProgressUpdate.md)
     *
     * 监听上传进度变化事件
     *
     * 最低基础库： `1.4.0` */
    onProgressUpdate(
      /** 上传进度变化事件的回调函数 */
      callback: UploadTaskOnProgressUpdateCallback,
    ): void;
  }
  interface UserInfoButton {
    /** [UserInfoButton.destroy()](UserInfoButton.destroy.md)
     *
     * 销毁用户信息按钮 */
    destroy(): void;
    /** [UserInfoButton.hide()](UserInfoButton.hide.md)
     *
     * 隐藏用户信息按钮。 */
    hide(): void;
    /** [UserInfoButton.offTap(function callback)](UserInfoButton.offTap.md)
     *
     * 取消监听用户信息按钮的点击事件 */
    offTap(
      /** 用户信息按钮的点击事件的回调函数 */
      callback: UserInfoButtonOffTapCallback,
    ): void;
    /** [UserInfoButton.onTap(function callback)](UserInfoButton.onTap.md)
     *
     * 监听用户信息按钮的点击事件 */
    onTap(
      /** 用户信息按钮的点击事件的回调函数 */
      callback: UserInfoButtonOnTapCallback,
    ): void;
    /** [UserInfoButton.show()](UserInfoButton.show.md)
     *
     * 显示用户信息按钮 */
    show(): void;
  }
  interface Video {
    /** [Promise Video.exitFullScreen()](Video.exitFullScreen.md)
     *
     * 视频退出全屏 */
    exitFullScreen(): Promise<any>;
    /** [Promise Video.pause()](Video.pause.md)
     *
     * 暂停视频 */
    pause(): Promise<any>;
    /** [Promise Video.play()](Video.play.md)
     *
     * 播放视频 */
    play(): Promise<any>;
    /** [Promise Video.requestFullScreen()](Video.requestFullScreen.md)
     *
     * 视频全屏 */
    requestFullScreen(): Promise<any>;
    /** [Promise Video.seek(number time)](Video.seek.md)
     *
     * 视频跳转 */
    seek(
      /** 视频跳转到指定位置，单位为 s 秒 */
      time: number,
    ): Promise<any>;
    /** [Promise Video.stop()](Video.stop.md)
     *
     * 停止视频 */
    stop(): Promise<any>;
    /** [Video.destroy()](Video.destroy.md)
     *
     * 销毁视频 */
    destroy(): void;
    /** [Video.offEnded(function callback)](Video.offEnded.md)
     *
     * 取消监听视频播放到末尾事件 */
    offEnded(
      /** 视频播放到末尾事件的回调函数 */
      callback: VideoOffEndedCallback,
    ): void;
    /** [Video.offError(function callback)](Video.offError.md)
     *
     * 取消监听视频错误事件 */
    offError(
      /** 视频错误事件的回调函数 */
      callback: VideoOffErrorCallback,
    ): void;
    /** [Video.offPause(function callback)](Video.offPause.md)
     *
     * 取消监听视频暂停事件 */
    offPause(
      /** 视频暂停事件的回调函数 */
      callback: VideoOffPauseCallback,
    ): void;
    /** [Video.offPlay(function callback)](Video.offPlay.md)
     *
     * 取消监听视频播放事件 */
    offPlay(
      /** 视频播放事件的回调函数 */
      callback: VideoOffPlayCallback,
    ): void;
    /** [Video.offTimeUpdate(function callback)](Video.offTimeUpdate.md)
     *
     * 取消监听视频播放进度更新事件 */
    offTimeUpdate(
      /** 视频播放进度更新事件的回调函数 */
      callback: VideoOffTimeUpdateCallback,
    ): void;
    /** [Video.offWaiting(function callback)](Video.offWaiting.md)
     *
     * 取消监听视频缓冲事件 */
    offWaiting(
      /** 视频缓冲事件的回调函数 */
      callback: VideoOffWaitingCallback,
    ): void;
    /** [Video.onEnded(function callback)](Video.onEnded.md)
     *
     * 监听视频播放到末尾事件 */
    onEnded(
      /** 视频播放到末尾事件的回调函数 */
      callback: VideoOnEndedCallback,
    ): void;
    /** [Video.onError(function callback)](Video.onError.md)
     *
     * 监听视频错误事件 */
    onError(
      /** 视频错误事件的回调函数 */
      callback: VideoOnErrorCallback,
    ): void;
    /** [Video.onPause(function callback)](Video.onPause.md)
     *
     * 监听视频暂停事件 */
    onPause(
      /** 视频暂停事件的回调函数 */
      callback: VideoOnPauseCallback,
    ): void;
    /** [Video.onPlay(function callback)](Video.onPlay.md)
     *
     * 监听视频播放事件 */
    onPlay(
      /** 视频播放事件的回调函数 */
      callback: VideoOnPlayCallback,
    ): void;
    /** [Video.onTimeUpdate(function callback)](Video.onTimeUpdate.md)
     *
     * 监听视频播放进度更新事件 */
    onTimeUpdate(
      /** 视频播放进度更新事件的回调函数 */
      callback: VideoOnTimeUpdateCallback,
    ): void;
    /** [Video.onWaiting(function callback)](Video.onWaiting.md)
     *
     * 监听视频缓冲事件 */
    onWaiting(
      /** 视频缓冲事件的回调函数 */
      callback: VideoOnWaitingCallback,
    ): void;
  }
  interface WebGLRenderingContext {
    /** [WebGLRenderingContext.wxBindCanvasTexture(number texture, [Canvas] canvas)](WebGLRenderingContext.wxBindCanvasTexture.md)
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
      /** [Canvas]
       *
       * 需要绑定为 Texture 的 Canvas */
      canvas: Canvas,
    ): void;
  }
  interface Worker {
    /** [Worker.onMessage(function callback)](Worker.onMessage.md)
     *
     * 监听主线程/Worker 线程向当前线程发送的消息的事件。 */
    onMessage(
      /** 主线程/Worker 线程向当前线程发送的消息的事件的回调函数 */
      callback: WorkerOnMessageCallback,
    ): void;
    /** [Worker.postMessage(Object message)](Worker.postMessage.md)
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
      message: object,
    ): void;
    /** [Worker.terminate()](Worker.terminate.md)
     *
     * 结束当前 Worker 线程。仅限在主线程 worker 对象上调用。 */
    terminate(): void;
  }
  interface Wx {
    /** [Object wx.getBatteryInfoSync()]
     *
     * [wx.getBatteryInfo] 的同步版本 */
    getBatteryInfoSync(): GetBatteryInfoSyncResult;
    /** [Object wx.getLaunchOptionsSync()](wx.getLaunchOptionsSync.md)
* 
* 获取小游戏启动时的参数。
* 
* **返回有效 referrerInfo 的场景**
* 
* 
| 场景值 | 场景                            | appId含义  |
| ------ | ------------------------------- | ---------- |
| 1020   | 公众号 profile 页相关小程序列表 | 来源公众号 |
| 1035   | 公众号自定义菜单                | 来源公众号 |
| 1036   | App 分享消息卡片                | 来源App    |
| 1037   | 小程序打开小程序                | 来源小程序 |
| 1038   | 从另一个小程序返回              | 来源小程序 |
| 1043   | 公众号模板消息                  | 来源公众号 |
* 
* **注意**
* 
* 
部分版本在无`referrerInfo`的时候会返回 `undefined`，建议使用 `options.referrerInfo && options.referrerInfo.appId` 进行判断。 */
    getLaunchOptionsSync(): LaunchOptionsGame;
    /** [Object wx.getMenuButtonBoundingClientRect()](wx.getMenuButtonBoundingClientRect.md)
     *
     * 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
     *
     * 最低基础库： `2.1.0` */
    getMenuButtonBoundingClientRect(): Rect;
    /** [Object wx.getStorageInfoSync()]
* 
* [wx.getStorageInfo] 的同步版本
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
    getStorageInfoSync(): GetStorageInfoSyncOption;
    /** [Object wx.getSystemInfoSync()]
* 
* [wx.getSystemInfo] 的同步版本
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
    getSystemInfoSync(): GetSystemInfoSyncResult;
    /** [[BannerAd] wx.createBannerAd(Object object)](wx.createBannerAd.md)
     *
     * 创建 banner 广告组件。请通过 [wx.getSystemInfoSync()] 返回对象的 SDKVersion 判断基础库版本号 >= 2.0.4 后再使用该 API。同时，开发者工具上暂不支持调试该 API，请直接在真机上进行调试。
     *
     * **注意**
     *
     *
     * 小游戏广告能力目前暂时以邀请制开放申请，请留意后续通知
     *
     * 最低基础库： `2.0.4` */
    createBannerAd(option: CreateBannerAdOption): BannerAd;
    /** [[Canvas] wx.createCanvas()](wx.createCanvas.md)
     *
     * 创建一个画布对象。首次调用创建的是显示在屏幕上的画布，之后调用创建的都是离屏画布。 */
    createCanvas(): Canvas;
    /** [[Canvas] wx.getSharedCanvas()](wx.getSharedCanvas.md)
     *
     * 获取主域和开放数据域共享的 sharedCanvas。**只有开放数据域能调用。** */
    getSharedCanvas(): Canvas;
    /** [[DownloadTask] wx.downloadFile(Object object)](wx.downloadFile.md)
* 
* 下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径。使用前请注意阅读[相关说明]。
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
    downloadFile(option: DownloadFileOption): DownloadTask;
    /** [[FeedbackButton] wx.createFeedbackButton(Object object)](wx.createFeedbackButton.md)
     *
     * 创建打开意见反馈页面的按钮
     *
     * 最低基础库： `2.1.2` */
    createFeedbackButton(option: CreateFeedbackButtonOption): FeedbackButton;
    /** [[FileSystemManager] wx.getFileSystemManager()](wx.getFileSystemManager.md)
     *
     * 获取全局唯一的文件管理器 */
    getFileSystemManager(): FileSystemManager;
    /** [[GameClubButton] wx.createGameClubButton(Object object)](wx.createGameClubButton.md)
     *
     * 创建游戏圈按钮。游戏圈按钮被点击后会跳转到小游戏的游戏圈。更多关于游戏圈的信息见 [游戏圈使用指南]
     *
     * 最低基础库： `2.0.3` */
    createGameClubButton(option: CreateGameClubButtonOption): GameClubButton;
    /** [[Image] wx.createImage()](wx.createImage.md)
     *
     * 创建一个图片对象 */
    createImage(): Image;
    /** [[InnerAudioContext] wx.createInnerAudioContext()](wx.createInnerAudioContext.md)
     *
     * 创建内部 `audio` 上下文 `InnerAudioContext` 对象。
     *
     * 最低基础库： `1.6.0` */
    createInnerAudioContext(): InnerAudioContext;
    /** [[LoadSubpackageTask] wx.loadSubpackage(Object object)](wx.loadSubpackage.md)
     *
     * 触发分包加载，详见 [分包加载]
     *
     * 最低基础库： `2.1.0` */
    loadSubpackage(option: LoadSubpackageOption): LoadSubpackageTask;
    /** [[LogManager] wx.getLogManager(Object object)](wx.getLogManager.md)
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
    getLogManager(option: GetLogManagerOption): LogManager;
    /** [[OpenDataContext] wx.getOpenDataContext()](wx.getOpenDataContext.md)
     *
     * 获取开放数据域
     *
     * 最低基础库： `1.9.92` */
    getOpenDataContext(): OpenDataContext;
    /** [[OpenSettingButton] wx.createOpenSettingButton(Object object)](wx.createOpenSettingButton.md)
     *
     * 创建打开设置页面的按钮
     *
     * 最低基础库： `2.0.7` */
    createOpenSettingButton(
      option: CreateOpenSettingButtonOption,
    ): OpenSettingButton;
    /** [[Performance] wx.getPerformance()](wx.getPerformance.md)
     *
     * 获取性能管理器 */
    getPerformance(): Performance;
    /** [[RecorderManager] wx.getRecorderManager()](wx.getRecorderManager.md)
     *
     * 获取**全局唯一**的录音管理器 RecorderManager
     *
     * 最低基础库： `1.6.0` */
    getRecorderManager(): RecorderManager;
    /** [[RequestTask] wx.request(Object object)](wx.request.md)
* 
* 发起 HTTPS 网络请求。使用前请注意阅读[相关说明]。
* 
* **data 参数说明**
* 
* 
最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下：
- 对于 `GET` 方法的数据，会将数据转换成 query string（`encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...`）
- 对于 `POST` 方法且 `header['content-type']` 为 `application/json` 的数据，会对数据进行 JSON 序列化
- 对于 `POST` 方法且 `header['content-type']` 为 `application/x-www-form-urlencoded` 的数据，会将数据转换成 query string `（encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）`
* 
* **示例代码**
* 
* 
```js
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
    request(option: RequestOption): RequestTask;
    /** [[RewardedVideoAd] wx.createRewardedVideoAd(Object object)](wx.createRewardedVideoAd.md)
     *
     * 创建激励视频广告组件。请通过 [wx.getSystemInfoSync()] 返回对象的 SDKVersion 判断基础库版本号 >= 2.0.4 后再使用该 API。同时，开发者工具上暂不支持调试该 API，请直接在真机上进行调试。
     *
     * **注意**
     *
     *
     * 小游戏广告能力目前暂时以邀请制开放申请，请留意后续通知
     *
     * 最低基础库： `2.0.4` */
    createRewardedVideoAd(option: CreateRewardedVideoAdOption): RewardedVideoAd;
    /** [[SocketTask] wx.connectSocket(Object object)](wx.connectSocket.md)
* 
* 创建一个 WebSocket 连接。使用前请注意阅读[相关说明]。
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
  protocols: ['protocol1'],
  method:"GET"
})
``` */
    connectSocket(option: ConnectSocketOption): SocketTask;
    /** [[UpdateManager] wx.getUpdateManager()](wx.getUpdateManager.md)
     *
     * 获取**全局唯一**的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看[运行机制]文档。
     *
     * 最低基础库： `1.9.90` */
    getUpdateManager(): UpdateManager;
    /** [[UploadTask] wx.uploadFile(Object object)](wx.uploadFile.md)
* 
* 将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 `content-type` 为 `multipart/form-data`。使用前请注意阅读[相关说明]。
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
    uploadFile(option: UploadFileOption): UploadTask;
    /** [[UserInfoButton] wx.createUserInfoButton(Object object)](wx.createUserInfoButton.md)
     *
     * 创建用户信息按钮
     *
     * 最低基础库： `2.0.1` */
    createUserInfoButton(option: CreateUserInfoButtonOption): UserInfoButton;
    /** [[Video] wx.createVideo(Object object)](wx.createVideo.md)
     *
     * 创建视频 */
    createVideo(option: CreateVideoOption): Video;
    /** [[Worker] wx.createWorker(string scriptPath)](wx.createWorker.md)
     *
     * 创建一个 [Worker 线程]
     *
     * 最低基础库： `1.9.90` */
    createWorker(
      /** worker 入口文件的**绝对路径** */
      scriptPath: string,
    ): Worker;
    /** [any wx.getStorageSync(string key)]
* 
* [wx.getStorage] 的同步版本
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
    ): any;
    /** [number wx.getTextLineHeight(Object object)](wx.getTextLineHeight.md)
     *
     * 获取一行文本的行高 */
    getTextLineHeight(option: GetTextLineHeightOption): number;
    /** [string wx.loadFont(string path)](wx.loadFont.md)
     *
     * 加载自定义字体文件 */
    loadFont(
      /** 字体文件路径。可以是代码包文件路径，也可以是 wxfile:// 协议的本地文件路径。 */
      path: string,
    ): string;
    /** [wx.addCard(Object object)](wx.addCard.md)
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
* 最低基础库： `[object Object]` */
    addCard(option: AddCardOption): void;
    /** [wx.authorize(Object object)](wx.authorize.md)
* 
* 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。更多用法详见 [用户授权]。
* 
* **示例代码**
* 
* 
```js
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
    authorize(option: AuthorizeOption): void;
    /** [wx.checkIsUserAdvisedToRest(Object object)](wx.checkIsUserAdvisedToRest.md)
     *
     * 根据用户当天游戏时间判断用户是否需要休息
     *
     * 最低基础库： `1.9.97` */
    checkIsUserAdvisedToRest(option: CheckIsUserAdvisedToRestOption): void;
    /** [wx.checkSession(Object object)](wx.checkSession.md)
* 
* 检查登录态是否过期。
* 
* 通过 wx.login 接口获得的用户登录态拥有一定的时效性。用户越久未使用小程序，用户登录态越有可能失效。反之如果用户一直在使用小程序，则用户登录态一直保持有效。具体时效逻辑由微信维护，对开发者透明。开发者只需要调用 wx.checkSession 接口检测当前用户登录态是否有效。
* 
* 登录态过期后开发者可以再调用 wx.login 获取新的用户登录态。调用成功说明当前 session_key 未过期，调用失败说明 session_key 已过期。更多使用方法详见 [小程序登录]。
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
    checkSession(option?: CheckSessionOption): void;
    /** [wx.chooseImage(Object object)](wx.chooseImage.md)
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
    chooseImage(option: ChooseImageOption): void;
    /** [wx.clearStorage(Object object)](wx.clearStorage.md)
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
    clearStorage(option?: ClearStorageOption): void;
    /** [wx.clearStorageSync()]
* 
* [wx.clearStorage] 的同步版本
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
    clearStorageSync(): void;
    /** [wx.closeSocket(Object object)](wx.closeSocket.md)
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
    closeSocket(option: CloseSocketOption): void;
    /** [wx.exitMiniProgram(Object object)](wx.exitMiniProgram.md)
     *
     * 退出当前小游戏 */
    exitMiniProgram(option?: ExitMiniProgramOption): void;
    /** [wx.getAvailableAudioSources(Object object)](wx.getAvailableAudioSources.md)
     *
     * 获取当前支持的音频输入源
     *
     * 最低基础库： `2.1.0` */
    getAvailableAudioSources(option?: GetAvailableAudioSourcesOption): void;
    /** [wx.getBatteryInfo(Object object)](wx.getBatteryInfo.md)
     *
     * 获取设备电量。同步 API [wx.getBatteryInfoSync] 在 iOS 上不可用。 */
    getBatteryInfo(option?: GetBatteryInfoOption): void;
    /** [wx.getClipboardData(Object object)](wx.getClipboardData.md)
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
    getClipboardData(option?: GetClipboardDataOption): void;
    /** [wx.getFriendCloudStorage(Object object)](wx.getFriendCloudStorage.md)
     *
     * 拉取当前用户所有同玩好友的托管数据。该接口只可在开放数据域下使用
     *
     * 最低基础库： `1.9.92` */
    getFriendCloudStorage(option: GetFriendCloudStorageOption): void;
    /** [wx.getGroupCloudStorage(Object object)](wx.getGroupCloudStorage.md)
     *
     * 获取群同玩成员的游戏数据。小游戏通过群分享卡片打开的情况下才可以调用。**该接口只可在开放数据域下使用**。
     *
     * 最低基础库： `1.9.92` */
    getGroupCloudStorage(option: GetGroupCloudStorageOption): void;
    /** [wx.getLocation(Object object)](wx.getLocation.md)
* 
* 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。
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
    getLocation(option: GetLocationOption): void;
    /** [wx.getNetworkType(Object object)](wx.getNetworkType.md)
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
    getNetworkType(option?: GetNetworkTypeOption): void;
    /** [wx.getScreenBrightness(Object object)](wx.getScreenBrightness.md)
     *
     * 获取屏幕亮度
     *
     * **说明**
     *
     *
     * - 若安卓系统设置中开启了自动调节亮度功能，则屏幕亮度会根据光线自动调整，该接口仅能获取自动调节亮度之前的值，而非实时的亮度值。
     *
     * 最低基础库： `1.2.0` */
    getScreenBrightness(option?: GetScreenBrightnessOption): void;
    /** [wx.getSetting(Object object)](wx.getSetting.md)
* 
* 获取用户的当前设置。**返回值中只会出现小程序已经向用户请求过的[权限]**。
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
* 最低基础库： `1.2.0` */
    getSetting(option?: GetSettingOption): void;
    /** [wx.getShareInfo(Object object)](wx.getShareInfo.md)
* 
* 获取转发详细信息
* 
* **示例代码**
* 
* 
* encryptedData 解密后为以下 json 结构，详见[加密数据解密算法]。其中 openGId 为当前群的唯一标识
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
* - 如需要展示群名称，可以使用[开放数据组件]
* 
* 最低基础库： `1.1.0` */
    getShareInfo(option: GetShareInfoOption): void;
    /** [wx.getStorage(Object object)](wx.getStorage.md)
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
    getStorage(option: GetStorageOption): void;
    /** [wx.getStorageInfo(Object object)](wx.getStorageInfo.md)
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
    getStorageInfo(option?: GetStorageInfoOption): void;
    /** [wx.getSystemInfo(Object object)](wx.getSystemInfo.md)
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
    getSystemInfo(option?: GetSystemInfoOption): void;
    /** [wx.getUserCloudStorage(Object object)](wx.getUserCloudStorage.md)
     *
     * 获取当前用户托管数据当中对应 key 的数据。该接口只可在开放数据域下使用
     *
     * 最低基础库： `1.9.92` */
    getUserCloudStorage(option: GetUserCloudStorageOption): void;
    /** [wx.getUserInfo(Object object)](wx.getUserInfo.md)
* 
* 获取用户信息。
* 
* **接口调整说明**
* 
* 
* 在用户未授权过的情况下调用此接口，将不再出现授权弹窗，会直接进入 fail 回调（详见[《公告》]({% postUrl(0000a26e1aca6012e896a517556c01) %}))。在用户已授权的情况下调用此接口，可成功获取用户信息。
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
* encryptedData 解密后为以下 json 结构，详见[加密数据解密算法]
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
* **示例代码**
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
    getUserInfo(option: GetUserInfoOption): void;
    /** [wx.getWeRunData(Object object)](wx.getWeRunData.md)
* 
* 获取用户过去三十天微信运动步数。需要先调用 [wx.login] 接口。步数信息会在用户主动进入小程序时更新。
* 
* **示例代码**
* 
* 
* ```js
wx.getWeRunData({
  success (res) {
    const encryptedData = res.encryptedData
  }
})
```
* 
* **encryptedData 解密后 JSON 结构**
* 
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
    getWeRunData(option?: GetWeRunDataOption): void;
    /** [wx.hideKeyboard(Object object)](wx.hideKeyboard.md)
     *
     * 隐藏键盘 */
    hideKeyboard(option?: HideKeyboardOption): void;
    /** [wx.hideLoading(Object object)](wx.hideLoading.md)
     *
     * 隐藏 loading 提示框
     *
     * 最低基础库： `1.1.0` */
    hideLoading(option?: HideLoadingOption): void;
    /** [wx.hideShareMenu(Object object)](wx.hideShareMenu.md)
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
    hideShareMenu(option?: HideShareMenuOption): void;
    /** [wx.hideToast(Object object)](wx.hideToast.md)
     *
     * 隐藏消息提示框 */
    hideToast(option?: HideToastOption): void;
    /** [wx.login(Object object)](wx.login.md)
* 
* 调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户的唯一标识（openid）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。更多使用方法详见 [小程序登录]。
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
    login(option: LoginOption): void;
    /** [wx.navigateToMiniProgram(Object object)](wx.navigateToMiniProgram.md)
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
* 从 2.4.0 版本以及指定日期（具体待定）开始，开发者提交新版小程序代码时，如使用了跳转其他小程序功能，则需要在代码配置中声明将要跳转的小程序名单，限定不超过 10 个，否则将无法通过审核。该名单可在发布新版时更新，不支持动态修改。配置方法详见 [小程序全局配置]。调用此接口时，所跳转的 appId 必须在配置列表中，否则回调 `fail appId "${appId}" is not in navigateToMiniProgramAppIdList`。
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
* 最低基础库： `[object Object]` */
    navigateToMiniProgram(option: NavigateToMiniProgramOption): void;
    /** [wx.offAudioInterruptionBegin(function callback)](wx.offAudioInterruptionBegin.md)
     *
     * 取消监听音频因为受到系统占用而被中断开始事件
     *
     * 最低基础库： `[object Object]` */
    offAudioInterruptionBegin(
      /** 音频因为受到系统占用而被中断开始事件的回调函数 */
      callback: OffAudioInterruptionBeginCallback,
    ): void;
    /** [wx.offAudioInterruptionEnd(function callback)](wx.offAudioInterruptionEnd.md)
     *
     * 取消监听音频中断结束事件
     *
     * 最低基础库： `[object Object]` */
    offAudioInterruptionEnd(
      /** 音频中断结束事件的回调函数 */
      callback: OffAudioInterruptionEndCallback,
    ): void;
    /** [wx.offDeviceOrientationChange(function callback)](wx.offDeviceOrientationChange.md)
     *
     * 取消监听横竖屏切换事件
     *
     * 最低基础库： `2.1.0` */
    offDeviceOrientationChange(
      /** 横竖屏切换事件的回调函数 */
      callback: OffDeviceOrientationChangeCallback,
    ): void;
    /** [wx.offError(function callback)](wx.offError.md)
     *
     * 取消监听全局错误事件 */
    offError(
      /** 全局错误事件的回调函数 */
      callback: WxOffErrorCallback,
    ): void;
    /** [wx.offHide(function callback)](wx.offHide.md)
     *
     * 取消监听小游戏隐藏到后台事件 */
    offHide(
      /** 小游戏隐藏到后台事件的回调函数 */
      callback: OffHideCallback,
    ): void;
    /** [wx.offKeyboardComplete(function callback)](wx.offKeyboardComplete.md)
     *
     * 取消监听监听键盘收起的事件 */
    offKeyboardComplete(
      /** 监听键盘收起的事件的回调函数 */
      callback: OffKeyboardCompleteCallback,
    ): void;
    /** [wx.offKeyboardConfirm(function callback)](wx.offKeyboardConfirm.md)
     *
     * 取消监听用户点击键盘 Confirm 按钮时的事件 */
    offKeyboardConfirm(
      /** 用户点击键盘 Confirm 按钮时的事件的回调函数 */
      callback: OffKeyboardConfirmCallback,
    ): void;
    /** [wx.offKeyboardInput(function callback)](wx.offKeyboardInput.md)
     *
     * 取消监听键盘输入事件 */
    offKeyboardInput(
      /** 键盘输入事件的回调函数 */
      callback: OffKeyboardInputCallback,
    ): void;
    /** [wx.offShareAppMessage(function callback)](wx.offShareAppMessage.md)
     *
     * 取消监听用户点击右上角菜单的「转发」按钮时触发的事件 */
    offShareAppMessage(
      /** 用户点击右上角菜单的「转发」按钮时触发的事件的回调函数 */
      callback: OffShareAppMessageCallback,
    ): void;
    /** [wx.offShow(function callback)](wx.offShow.md)
     *
     * 取消监听小游戏回到前台的事件 */
    offShow(
      /** 小游戏回到前台的事件的回调函数 */
      callback: OffShowCallback,
    ): void;
    /** [wx.offTouchCancel(function callback)](wx.offTouchCancel.md)
     *
     * 取消监听触点失效事件 */
    offTouchCancel(
      /** 触点失效事件的回调函数 */
      callback: OffTouchCancelCallback,
    ): void;
    /** [wx.offTouchEnd(function callback)](wx.offTouchEnd.md)
     *
     * 取消监听触摸结束事件 */
    offTouchEnd(
      /** 触摸结束事件的回调函数 */
      callback: OffTouchEndCallback,
    ): void;
    /** [wx.offTouchMove(function callback)](wx.offTouchMove.md)
     *
     * 取消监听触点移动事件 */
    offTouchMove(
      /** 触点移动事件的回调函数 */
      callback: OffTouchMoveCallback,
    ): void;
    /** [wx.offTouchStart(function callback)](wx.offTouchStart.md)
     *
     * 取消监听开始触摸事件 */
    offTouchStart(
      /** 开始触摸事件的回调函数 */
      callback: OffTouchStartCallback,
    ): void;
    /** [wx.offWindowResize(function callback)](wx.offWindowResize.md)
     *
     * 取消监听窗口尺寸变化事件 */
    offWindowResize(
      /** 窗口尺寸变化事件的回调函数 */
      callback: OffWindowResizeCallback,
    ): void;
    /** [wx.onAccelerometerChange(function callback)](wx.onAccelerometerChange.md)
* 
* 监听加速度数据事件。频率根据 [wx.startAccelerometer()] 停止监听。
* 
* **示例代码**
* 
* 
* ```js
wx.onAccelerometerChange(function (res) {
  console.log(res.x)
  console.log(res.y)
  console.log(res.z)
})
``` */
    onAccelerometerChange(
      /** 加速度数据事件的回调函数 */
      callback: OnAccelerometerChangeCallback,
    ): void;
    /** [wx.onAudioInterruptionBegin(function callback)](wx.onAudioInterruptionBegin.md)
     *
     * 监听音频因为受到系统占用而被中断开始事件。以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停。
     *
     * 最低基础库： `[object Object]` */
    onAudioInterruptionBegin(
      /** 音频因为受到系统占用而被中断开始事件的回调函数 */
      callback: OnAudioInterruptionBeginCallback,
    ): void;
    /** [wx.onAudioInterruptionEnd(function callback)](wx.onAudioInterruptionEnd.md)
     *
     * 监听音频中断结束事件。在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功
     *
     * 最低基础库： `[object Object]` */
    onAudioInterruptionEnd(
      /** 音频中断结束事件的回调函数 */
      callback: OnAudioInterruptionEndCallback,
    ): void;
    /** [wx.onCompassChange(function callback)](wx.onCompassChange.md)
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
    ): void;
    /** [wx.onDeviceMotionChange(function callback)](wx.onDeviceMotionChange.md)
     *
     * 监听设备方向变化事件。频率根据 [wx.startDeviceMotionListening()] 停止监听。
     *
     * 最低基础库： `2.3.0` */
    onDeviceMotionChange(
      /** 设备方向变化事件的回调函数 */
      callback: OnDeviceMotionChangeCallback,
    ): void;
    /** [wx.onDeviceOrientationChange(function callback)](wx.onDeviceOrientationChange.md)
     *
     * 监听横竖屏切换事件
     *
     * 最低基础库： `2.1.0` */
    onDeviceOrientationChange(
      /** 横竖屏切换事件的回调函数 */
      callback: OnDeviceOrientationChangeCallback,
    ): void;
    /** [wx.onError(function callback)](wx.onError.md)
     *
     * 监听全局错误事件 */
    onError(
      /** 全局错误事件的回调函数 */
      callback: WxOnErrorCallback,
    ): void;
    /** [wx.onGyroscopeChange(function callback)](wx.onGyroscopeChange.md)
     *
     * 监听陀螺仪数据变化事件。频率根据 [wx.startGyroscope()] 停止监听。
     *
     * 最低基础库： `2.3.0` */
    onGyroscopeChange(
      /** 陀螺仪数据变化事件的回调函数 */
      callback: OnGyroscopeChangeCallback,
    ): void;
    /** [wx.onHide(function callback)](wx.onHide.md)
     *
     * 监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面、显示在聊天顶部等操作会触发此事件。 */
    onHide(
      /** 小游戏隐藏到后台事件的回调函数 */
      callback: OnHideCallback,
    ): void;
    /** [wx.onKeyboardComplete(function callback)](wx.onKeyboardComplete.md)
     *
     * 监听监听键盘收起的事件 */
    onKeyboardComplete(
      /** 监听键盘收起的事件的回调函数 */
      callback: OnKeyboardCompleteCallback,
    ): void;
    /** [wx.onKeyboardConfirm(function callback)](wx.onKeyboardConfirm.md)
     *
     * 监听用户点击键盘 Confirm 按钮时的事件 */
    onKeyboardConfirm(
      /** 用户点击键盘 Confirm 按钮时的事件的回调函数 */
      callback: OnKeyboardConfirmCallback,
    ): void;
    /** [wx.onKeyboardInput(function callback)](wx.onKeyboardInput.md)
     *
     * 监听键盘输入事件 */
    onKeyboardInput(
      /** 键盘输入事件的回调函数 */
      callback: OnKeyboardInputCallback,
    ): void;
    /** [wx.onMemoryWarning(function callback)](wx.onMemoryWarning.md)
* 
* 监听内存不足告警事件。

当 iOS/Android 向小程序进程发出内存警告时，触发该事件。触发该事件不意味小程序被杀，大部分情况下仅仅是告警，开发者可在收到通知后回收一些不必要资源避免进一步加剧内存紧张。
* 
* **示例代码**
* 
* 
```js
wx.onMemoryWarning(function () {
  console.log('onMemoryWarningReceive')
})
``
* 
* 最低基础库： `2.0.2` */
    onMemoryWarning(
      /** 内存不足告警事件的回调函数 */
      callback: OnMemoryWarningCallback,
    ): void;
    /** [wx.onMessage(function callback)](wx.onMessage.md)
     *
     * 监听主域发送的消息 */
    onMessage(
      /** 监听事件的回调函数 */
      callback: Function,
    ): void;
    /** [wx.onNetworkStatusChange(function callback)](wx.onNetworkStatusChange.md)
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
    ): void;
    /** [wx.onShareAppMessage(function callback)](wx.onShareAppMessage.md)
     *
     * 监听用户点击右上角菜单的「转发」按钮时触发的事件 */
    onShareAppMessage(
      /** 用户点击右上角菜单的「转发」按钮时触发的事件的回调函数 */
      callback: OnShareAppMessageCallback,
    ): void;
    /** [wx.onShow(function callback)](wx.onShow.md)
     *
     * 监听小游戏回到前台的事件 */
    onShow(
      /** 小游戏回到前台的事件的回调函数 */
      callback: OnShowCallback,
    ): void;
    /** [wx.onSocketClose(function callback)](wx.onSocketClose.md)
     *
     * 监听 WebSocket 连接关闭事件 */
    onSocketClose(
      /** WebSocket 连接关闭事件的回调函数 */
      callback: OnSocketCloseCallback,
    ): void;
    /** [wx.onSocketError(function callback)](wx.onSocketError.md)
     *
     * 监听 WebSocket 错误事件 */
    onSocketError(
      /** WebSocket 错误事件的回调函数 */
      callback: OnSocketErrorCallback,
    ): void;
    /** [wx.onSocketMessage(function callback)](wx.onSocketMessage.md)
     *
     * 监听 WebSocket 接受到服务器的消息事件 */
    onSocketMessage(
      /** WebSocket 接受到服务器的消息事件的回调函数 */
      callback: OnSocketMessageCallback,
    ): void;
    /** [wx.onSocketOpen(function callback)](wx.onSocketOpen.md)
     *
     * 监听 WebSocket 连接打开事件 */
    onSocketOpen(
      /** WebSocket 连接打开事件的回调函数 */
      callback: OnSocketOpenCallback,
    ): void;
    /** [wx.onTouchCancel(function callback)](wx.onTouchCancel.md)
     *
     * 监听触点失效事件 */
    onTouchCancel(
      /** 触点失效事件的回调函数 */
      callback: OnTouchCancelCallback,
    ): void;
    /** [wx.onTouchEnd(function callback)](wx.onTouchEnd.md)
     *
     * 监听触摸结束事件 */
    onTouchEnd(
      /** 触摸结束事件的回调函数 */
      callback: OnTouchEndCallback,
    ): void;
    /** [wx.onTouchMove(function callback)](wx.onTouchMove.md)
     *
     * 监听触点移动事件 */
    onTouchMove(
      /** 触点移动事件的回调函数 */
      callback: OnTouchMoveCallback,
    ): void;
    /** [wx.onTouchStart(function callback)](wx.onTouchStart.md)
     *
     * 监听开始触摸事件 */
    onTouchStart(
      /** 开始触摸事件的回调函数 */
      callback: OnTouchStartCallback,
    ): void;
    /** [wx.onWindowResize(function callback)](wx.onWindowResize.md)
     *
     * 监听窗口尺寸变化事件 */
    onWindowResize(
      /** 窗口尺寸变化事件的回调函数 */
      callback: OnWindowResizeCallback,
    ): void;
    /** [wx.openCard(Object object)](wx.openCard.md)
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
* 最低基础库： `[object Object]` */
    openCard(option: OpenCardOption): void;
    /** [wx.openCustomerServiceConversation(Object object)](wx.openCustomerServiceConversation.md)
     *
     * 进入客服会话。要求在用户发生过至少一次 touch 事件后才能调用。后台接入方式与小程序一致，详见 [客服消息接入](https://developers.weixin.qq.com/miniprogram/dev/api/custommsg/callback_help.html)
     *
     * 最低基础库： `2.0.3` */
    openCustomerServiceConversation(
      option: OpenCustomerServiceConversationOption,
    ): void;
    /** [wx.openSetting(Object object)](wx.openSetting.md)
* 
* 调起客户端小程序设置界面，返回用户设置的操作结果。**设置界面只会出现小程序已经向用户请求过的[权限]**。
* 
* 
* 注意：{% version(2.3.0) %} 版本开始，用户发生点击行为后，才可以跳转打开设置页，管理授权信息。[详情]({% postUrl(000cea2305cc5047af5733de751008) %})
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
    openSetting(option?: OpenSettingOption): void;
    /** [wx.previewImage(Object object)](wx.previewImage.md)
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
    previewImage(option: PreviewImageOption): void;
    /** [wx.removeStorage(Object object)](wx.removeStorage.md)
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
    removeStorage(option: RemoveStorageOption): void;
    /** [wx.removeStorageSync(string key)]
* 
* [wx.removeStorage] 的同步版本
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
    ): void;
    /** [wx.removeUserCloudStorage(Object object)](wx.removeUserCloudStorage.md)
     *
     * 删除用户托管数据当中对应 key 的数据。
     *
     * 最低基础库： `1.9.92` */
    removeUserCloudStorage(option: RemoveUserCloudStorageOption): void;
    /** [wx.requestMidasPayment(Object object)](wx.requestMidasPayment.md)
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
    requestMidasPayment(option: RequestMidasPaymentOption): void;
    /** [wx.saveImageToPhotosAlbum(Object object)](wx.saveImageToPhotosAlbum.md)
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
    saveImageToPhotosAlbum(option: SaveImageToPhotosAlbumOption): void;
    /** [wx.sendSocketMessage(Object object)](wx.sendSocketMessage.md)
* 
* 通过 WebSocket 连接发送数据。需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。
* 
* **示例代码**
* 
* 
* ```js
const socketOpen = false
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
    sendSocketMessage(option: SendSocketMessageOption): void;
    /** [wx.setClipboardData(Object object)](wx.setClipboardData.md)
* 
* 设置系统剪贴板的内容
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
    setClipboardData(option: SetClipboardDataOption): void;
    /** [wx.setEnableDebug(Object object)](wx.setEnableDebug.md)
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
    setEnableDebug(option: SetEnableDebugOption): void;
    /** [wx.setInnerAudioOption(Object object)](wx.setInnerAudioOption.md)
     *
     * 设置 [InnerAudioContext] 的播放选项。设置之后对当前小程序全局生效。
     *
     * 最低基础库： `2.3.0` */
    setInnerAudioOption(option: SetInnerAudioOption): void;
    /** [wx.setKeepScreenOn(Object object)](wx.setKeepScreenOn.md)
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
    setKeepScreenOn(option: SetKeepScreenOnOption): void;
    /** [wx.setMenuStyle(Object object)](wx.setMenuStyle.md)
     *
     * 动态设置通过右上角按钮拉起的菜单的样式。 */
    setMenuStyle(option: SetMenuStyleOption): void;
    /** [wx.setPreferredFramesPerSecond(number fps)](wx.setPreferredFramesPerSecond.md)
     *
     * 可以修改渲染帧率。默认渲染帧率为 60 帧每秒。修改后，requestAnimationFrame 的回调频率会发生改变。 */
    setPreferredFramesPerSecond(
      /** 帧率，有效范围 1 - 60。 */
      fps: number,
    ): void;
    /** [wx.setScreenBrightness(Object object)](wx.setScreenBrightness.md)
     *
     * 设置屏幕亮度
     *
     * 最低基础库： `1.2.0` */
    setScreenBrightness(option: SetScreenBrightnessOption): void;
    /** [wx.setStatusBarStyle(Object object)](wx.setStatusBarStyle.md)
     *
     * 当在配置中设置 showStatusBarStyle 时，屏幕顶部会显示状态栏。此接口可以修改状态栏的样式。 */
    setStatusBarStyle(option: SetStatusBarStyleOption): void;
    /** [wx.setStorage(Object object)](wx.setStorage.md)
* 
* 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。数据存储生命周期跟小程序本身一致，即除用户主动删除或超过一定时间被自动清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
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
    setStorage(option: SetStorageOption): void;
    /** [wx.setStorageSync(string key, any data)]
* 
* [wx.setStorage] 的同步版本
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
    ): void;
    /** [wx.setUserCloudStorage(Object object)](wx.setUserCloudStorage.md)
* 
* 对用户托管数据进行写数据操作。允许同时写多组 KV 数据。
* 
* **托管数据的限制**
* 
* 
1. 每个openid所标识的微信用户在每个游戏上托管的数据不能超过128个key-value对。
2. 上报的key-value列表当中每一项的key+value长度都不能超过1K(1024)字节。
3. 上报的key-value列表当中每一个key长度都不能超过128字节。
* 
* 最低基础库： `1.9.92` */
    setUserCloudStorage(option: SetUserCloudStorageOption): void;
    /** [wx.shareAppMessage(Object object)](wx.shareAppMessage.md)
     *
     * 主动拉起转发，进入选择通讯录界面。 */
    shareAppMessage(option: ShareAppMessageOption): void;
    /** [wx.showActionSheet(Object object)](wx.showActionSheet.md)
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
    showActionSheet(option: ShowActionSheetOption): void;
    /** [wx.showKeyboard(Object object)](wx.showKeyboard.md)
     *
     * 显示键盘 */
    showKeyboard(option: ShowKeyboardOption): void;
    /** [wx.showLoading(Object object)](wx.showLoading.md)
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
* - `wx.showLoading` 和 `wx.showToast` 同时只能显示一个
* - `wx.showLoading` 应与 `wx.hideLoading` 配对使用
* 
* 最低基础库： `1.1.0` */
    showLoading(option: ShowLoadingOption): void;
    /** [wx.showModal(Object object)](wx.showModal.md)
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
    showModal(option: ShowModalOption): void;
    /** [wx.showShareMenu(Object object)](wx.showShareMenu.md)
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
    showShareMenu(option: ShowShareMenuOption): void;
    /** [wx.showToast(Object object)](wx.showToast.md)
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
* - `wx.showLoading` 和 `wx.showToast` 同时只能显示一个
* - `wx.showToast` 应与 `wx.hideToast` 配对使用 */
    showToast(option: ShowToastOption): void;
    /** [wx.startAccelerometer(Object object)](wx.startAccelerometer.md)
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
    startAccelerometer(option: StartAccelerometerOption): void;
    /** [wx.startCompass(Object object)](wx.startCompass.md)
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
    startCompass(option?: StartCompassOption): void;
    /** [wx.startDeviceMotionListening(Object object)](wx.startDeviceMotionListening.md)
     *
     * 开始监听设备方向的变化。
     *
     * 最低基础库： `2.3.0` */
    startDeviceMotionListening(option: StartDeviceMotionListeningOption): void;
    /** [wx.startGyroscope(Object object)](wx.startGyroscope.md)
     *
     * 开始监听陀螺仪数据。
     *
     * 最低基础库： `2.3.0` */
    startGyroscope(option: StartGyroscopeOption): void;
    /** [wx.stopAccelerometer(Object object)](wx.stopAccelerometer.md)
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
    stopAccelerometer(option?: StopAccelerometerOption): void;
    /** [wx.stopCompass(Object object)](wx.stopCompass.md)
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
    stopCompass(option?: StopCompassOption): void;
    /** [wx.stopDeviceMotionListening(Object object)](wx.stopDeviceMotionListening.md)
     *
     * 停止监听设备方向的变化。
     *
     * 最低基础库： `2.3.0` */
    stopDeviceMotionListening(option?: StopDeviceMotionListeningOption): void;
    /** [wx.stopGyroscope(Object object)](wx.stopGyroscope.md)
     *
     * 停止监听陀螺仪数据。
     *
     * 最低基础库： `2.3.0` */
    stopGyroscope(option?: StopGyroscopeOption): void;
    /** [wx.triggerGC()](wx.triggerGC.md)
     *
     * 加快触发 JavaScriptCore 垃圾回收（Garbage Collection）。GC 时机是由 JavaScriptCore 来控制的，并不能保证调用后马上触发 GC。 */
    triggerGC(): void;
    /** [wx.updateKeyboard(Object object)](wx.updateKeyboard.md)
     *
     * 更新键盘输入框内容。只有当键盘处于拉起状态时才会产生效果
     *
     * 最低基础库： `2.1.0` */
    updateKeyboard(option: UpdateKeyboardOption): void;
    /** [wx.updateShareMenu(Object object)](wx.updateShareMenu.md)
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
    updateShareMenu(option: UpdateShareMenuOption): void;
    /** [wx.vibrateLong(Object object)](wx.vibrateLong.md)
     *
     * 使手机发生较长时间的振动（400 ms)
     *
     * 最低基础库： `1.2.0` */
    vibrateLong(option?: VibrateLongOption): void;
    /** [wx.vibrateShort(Object object)](wx.vibrateShort.md)
     *
     * 使手机发生较短时间的振动（15 ms）。仅在 iPhone `7 / 7 Plus` 以上及 Android 机型生效
     *
     * 最低基础库： `1.2.0` */
    vibrateShort(option?: VibrateShortOption): void;
  }
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type AccessCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type AccessFailCallback = (result: AccessFailCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type AccessSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type AddCardCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type AddCardFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type AddCardSuccessCallback = (result: AddCardSuccessCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type AppendFileCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type AppendFileFailCallback = (result: AppendFileFailCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type AppendFileSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type AuthorizeCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type AuthorizeFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type AuthorizeSuccessCallback = (res: GeneralCallbackResult) => void;
  /** banner 广告错误事件的回调函数 */
  type BannerAdOffErrorCallback = (res: GeneralCallbackResult) => void;
  /** banner 广告加载事件的回调函数 */
  type BannerAdOffLoadCallback = (res: GeneralCallbackResult) => void;
  /** banner 广告错误事件的回调函数 */
  type BannerAdOnErrorCallback = (
    result: BannerAdOnErrorCallbackResult,
  ) => void;
  /** banner 广告加载事件的回调函数 */
  type BannerAdOnLoadCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type CheckIsUserAdvisedToRestCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type CheckIsUserAdvisedToRestFailCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type CheckIsUserAdvisedToRestSuccessCallback = (
    result: CheckIsUserAdvisedToRestSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type CheckSessionCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type CheckSessionFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type CheckSessionSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type ChooseImageCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ChooseImageFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ChooseImageSuccessCallback = (
    result: ChooseImageSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type ClearStorageCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ClearStorageFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ClearStorageSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type CloseCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type CloseFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type CloseSocketCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type CloseSocketFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type CloseSocketSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type CloseSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type ConnectSocketCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ConnectSocketFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ConnectSocketSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type CopyFileCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type CopyFileFailCallback = (result: CopyFileFailCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type CopyFileSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type DownloadFileCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type DownloadFileFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type DownloadFileSuccessCallback = (
    result: DownloadFileSuccessCallbackResult,
  ) => void;
  /** HTTP Response Header 事件的回调函数 */
  type DownloadTaskOffHeadersReceivedCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 下载进度变化事件的回调函数 */
  type DownloadTaskOffProgressUpdateCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** HTTP Response Header 事件的回调函数 */
  type DownloadTaskOnHeadersReceivedCallback = (
    result: DownloadTaskOnHeadersReceivedCallbackResult,
  ) => void;
  /** 下载进度变化事件的回调函数 */
  type DownloadTaskOnProgressUpdateCallback = (
    result: DownloadTaskOnProgressUpdateCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type ExitMiniProgramCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ExitMiniProgramFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ExitMiniProgramSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 意见反馈按钮的点击事件的回调函数 */
  type FeedbackButtonOffTapCallback = (res: GeneralCallbackResult) => void;
  /** 意见反馈按钮的点击事件的回调函数 */
  type FeedbackButtonOnTapCallback = (res: GeneralCallbackResult) => void;
  /** 游戏圈按钮的点击事件的回调函数 */
  type GameClubButtonOffTapCallback = (res: GeneralCallbackResult) => void;
  /** 游戏圈按钮的点击事件的回调函数 */
  type GameClubButtonOnTapCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetAvailableAudioSourcesCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type GetAvailableAudioSourcesFailCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type GetAvailableAudioSourcesSuccessCallback = (
    result: GetAvailableAudioSourcesSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetBatteryInfoCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetBatteryInfoFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetBatteryInfoSuccessCallback = (
    result: GetBatteryInfoSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetClipboardDataCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetClipboardDataFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetClipboardDataSuccessCallback = (
    option: GetClipboardDataSuccessCallbackOption,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetFileInfoCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetFileInfoFailCallback = (
    result: GetFileInfoFailCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type GetFileInfoSuccessCallback = (
    result: GetFileInfoSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetFriendCloudStorageCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type GetFriendCloudStorageFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetFriendCloudStorageSuccessCallback = (
    result: GetFriendCloudStorageSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetGroupCloudStorageCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type GetGroupCloudStorageFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetGroupCloudStorageSuccessCallback = (
    result: GetGroupCloudStorageSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetLocationCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetLocationFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetLocationSuccessCallback = (
    result: GetLocationSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetNetworkTypeCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetNetworkTypeFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetNetworkTypeSuccessCallback = (
    result: GetNetworkTypeSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetSavedFileListCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetSavedFileListFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetSavedFileListSuccessCallback = (
    result: GetSavedFileListSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetScreenBrightnessCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type GetScreenBrightnessFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetScreenBrightnessSuccessCallback = (
    option: GetScreenBrightnessSuccessCallbackOption,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetSettingCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetSettingFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetSettingSuccessCallback = (
    result: GetSettingSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetShareInfoCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetShareInfoFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetShareInfoSuccessCallback = (
    result: GetShareInfoSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetStorageCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetStorageFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetStorageInfoCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetStorageInfoFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetStorageInfoSuccessCallback = (
    option: GetStorageInfoSuccessCallbackOption,
  ) => void;
  /** 接口调用成功的回调函数 */
  type GetStorageSuccessCallback = (
    result: GetStorageSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetSystemInfoCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetSystemInfoFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetSystemInfoSuccessCallback = (
    result: GetSystemInfoSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetTextLineHeightCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetTextLineHeightFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetTextLineHeightSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetUserCloudStorageCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type GetUserCloudStorageFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetUserCloudStorageSuccessCallback = (
    result: GetUserCloudStorageSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetUserInfoCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetUserInfoFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetUserInfoSuccessCallback = (
    result: GetUserInfoSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type GetWeRunDataCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type GetWeRunDataFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type GetWeRunDataSuccessCallback = (
    result: GetWeRunDataSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type HideKeyboardCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type HideKeyboardFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type HideKeyboardSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type HideLoadingCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type HideLoadingFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type HideLoadingSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type HideShareMenuCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type HideShareMenuFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type HideShareMenuSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type HideToastCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type HideToastFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type HideToastSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 音频自然播放至结束的事件的回调函数 */
  type InnerAudioContextOffEndedCallback = (res: GeneralCallbackResult) => void;
  /** 音频播放错误事件的回调函数 */
  type InnerAudioContextOffErrorCallback = (res: GeneralCallbackResult) => void;
  /** 音频暂停事件的回调函数 */
  type InnerAudioContextOffPauseCallback = (res: GeneralCallbackResult) => void;
  /** 音频播放事件的回调函数 */
  type InnerAudioContextOffPlayCallback = (res: GeneralCallbackResult) => void;
  /** 音频播放进度更新事件的回调函数 */
  type InnerAudioContextOffTimeUpdateCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 音频加载中事件的回调函数 */
  type InnerAudioContextOffWaitingCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 音频自然播放至结束的事件的回调函数 */
  type InnerAudioContextOnEndedCallback = (res: GeneralCallbackResult) => void;
  /** 音频播放错误事件的回调函数 */
  type InnerAudioContextOnErrorCallback = (
    result: InnerAudioContextOnErrorCallbackResult,
  ) => void;
  /** 音频暂停事件的回调函数 */
  type InnerAudioContextOnPauseCallback = (res: GeneralCallbackResult) => void;
  /** 音频播放事件的回调函数 */
  type InnerAudioContextOnPlayCallback = (res: GeneralCallbackResult) => void;
  /** 音频停止事件的回调函数 */
  type InnerAudioContextOnStopCallback = (res: GeneralCallbackResult) => void;
  /** 音频播放进度更新事件的回调函数 */
  type InnerAudioContextOnTimeUpdateCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 音频加载中事件的回调函数 */
  type InnerAudioContextOnWaitingCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 分包加载进度变化事件的回调函数 */
  type LoadSubpackageTaskOnProgressUpdateCallback = (
    result: LoadSubpackageTaskOnProgressUpdateCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type LoginCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type LoginFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type LoginSuccessCallback = (result: LoginSuccessCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type MkdirCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type MkdirFailCallback = (result: MkdirFailCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type MkdirSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type NavigateToMiniProgramCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type NavigateToMiniProgramFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type NavigateToMiniProgramSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 音频因为受到系统占用而被中断开始事件的回调函数 */
  type OffAudioInterruptionBeginCallback = (res: GeneralCallbackResult) => void;
  /** 音频中断结束事件的回调函数 */
  type OffAudioInterruptionEndCallback = (res: GeneralCallbackResult) => void;
  /** 音频进入可以播放状态的事件的回调函数 */
  type OffCanplayCallback = (res: GeneralCallbackResult) => void;
  /** 用户点击 `关闭广告` 按钮的事件的回调函数 */
  type OffCloseCallback = (res: GeneralCallbackResult) => void;
  /** 横竖屏切换事件的回调函数 */
  type OffDeviceOrientationChangeCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 小游戏隐藏到后台事件的回调函数 */
  type OffHideCallback = (res: GeneralCallbackResult) => void;
  /** 监听键盘收起的事件的回调函数 */
  type OffKeyboardCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 用户点击键盘 Confirm 按钮时的事件的回调函数 */
  type OffKeyboardConfirmCallback = (res: GeneralCallbackResult) => void;
  /** 键盘输入事件的回调函数 */
  type OffKeyboardInputCallback = (res: GeneralCallbackResult) => void;
  /** banner 广告尺寸变化事件的回调函数 */
  type OffResizeCallback = (res: GeneralCallbackResult) => void;
  /** 音频完成跳转操作的事件的回调函数 */
  type OffSeekedCallback = (res: GeneralCallbackResult) => void;
  /** 音频进行跳转操作的事件的回调函数 */
  type OffSeekingCallback = (res: GeneralCallbackResult) => void;
  /** 用户点击右上角菜单的「转发」按钮时触发的事件的回调函数 */
  type OffShareAppMessageCallback = (res: GeneralCallbackResult) => void;
  /** 小游戏回到前台的事件的回调函数 */
  type OffShowCallback = (res: GeneralCallbackResult) => void;
  /** 音频停止事件的回调函数 */
  type OffStopCallback = (res: GeneralCallbackResult) => void;
  /** 触点失效事件的回调函数 */
  type OffTouchCancelCallback = (res: GeneralCallbackResult) => void;
  /** 触摸结束事件的回调函数 */
  type OffTouchEndCallback = (res: GeneralCallbackResult) => void;
  /** 触点移动事件的回调函数 */
  type OffTouchMoveCallback = (res: GeneralCallbackResult) => void;
  /** 开始触摸事件的回调函数 */
  type OffTouchStartCallback = (res: GeneralCallbackResult) => void;
  /** 窗口尺寸变化事件的回调函数 */
  type OffWindowResizeCallback = (res: GeneralCallbackResult) => void;
  /** 加速度数据事件的回调函数 */
  type OnAccelerometerChangeCallback = (
    result: OnAccelerometerChangeCallbackResult,
  ) => void;
  /** 音频因为受到系统占用而被中断开始事件的回调函数 */
  type OnAudioInterruptionBeginCallback = (res: GeneralCallbackResult) => void;
  /** 音频中断结束事件的回调函数 */
  type OnAudioInterruptionEndCallback = (res: GeneralCallbackResult) => void;
  /** 音频进入可以播放状态的事件的回调函数 */
  type OnCanplayCallback = (res: GeneralCallbackResult) => void;
  /** 向微信后台请求检查更新结果事件的回调函数 */
  type OnCheckForUpdateCallback = (
    result: OnCheckForUpdateCallbackResult,
  ) => void;
  /** 罗盘数据变化事件的回调函数 */
  type OnCompassChangeCallback = (
    result: OnCompassChangeCallbackResult,
  ) => void;
  /** 设备方向变化事件的回调函数 */
  type OnDeviceMotionChangeCallback = (
    result: OnDeviceMotionChangeCallbackResult,
  ) => void;
  /** 横竖屏切换事件的回调函数 */
  type OnDeviceOrientationChangeCallback = (
    result: OnDeviceOrientationChangeCallbackResult,
  ) => void;
  /** 已录制完指定帧大小的文件事件的回调函数 */
  type OnFrameRecordedCallback = (
    result: OnFrameRecordedCallbackResult,
  ) => void;
  /** 陀螺仪数据变化事件的回调函数 */
  type OnGyroscopeChangeCallback = (
    result: OnGyroscopeChangeCallbackResult,
  ) => void;
  /** 小游戏隐藏到后台事件的回调函数 */
  type OnHideCallback = (res: GeneralCallbackResult) => void;
  /** 录音因为受到系统占用而被中断开始事件的回调函数 */
  type OnInterruptionBeginCallback = (res: GeneralCallbackResult) => void;
  /** 录音中断结束事件的回调函数 */
  type OnInterruptionEndCallback = (res: GeneralCallbackResult) => void;
  /** 监听键盘收起的事件的回调函数 */
  type OnKeyboardCompleteCallback = (
    result: OnKeyboardCompleteCallbackResult,
  ) => void;
  /** 用户点击键盘 Confirm 按钮时的事件的回调函数 */
  type OnKeyboardConfirmCallback = (
    result: OnKeyboardConfirmCallbackResult,
  ) => void;
  /** 键盘输入事件的回调函数 */
  type OnKeyboardInputCallback = (
    result: OnKeyboardInputCallbackResult,
  ) => void;
  /** 内存不足告警事件的回调函数 */
  type OnMemoryWarningCallback = (
    result: OnMemoryWarningCallbackResult,
  ) => void;
  /** 网络状态变化事件的回调函数 */
  type OnNetworkStatusChangeCallback = (
    result: OnNetworkStatusChangeCallbackResult,
  ) => void;
  /** WebSocket 连接打开事件的回调函数 */
  type OnOpenCallback = (result: OnOpenCallbackResult) => void;
  /** banner 广告尺寸变化事件的回调函数 */
  type OnResizeCallback = (result: OnResizeCallbackResult) => void;
  /** 录音继续事件的回调函数 */
  type OnResumeCallback = (res: GeneralCallbackResult) => void;
  /** 音频完成跳转操作的事件的回调函数 */
  type OnSeekedCallback = (res: GeneralCallbackResult) => void;
  /** 音频进行跳转操作的事件的回调函数 */
  type OnSeekingCallback = (res: GeneralCallbackResult) => void;
  /** 用户点击右上角菜单的「转发」按钮时触发的事件的回调函数 */
  type OnShareAppMessageCallback = (
    result: OnShareAppMessageCallbackResult,
  ) => void;
  /** 小游戏回到前台的事件的回调函数 */
  type OnShowCallback = (result: OnShowCallbackResult) => void;
  /** WebSocket 连接关闭事件的回调函数 */
  type OnSocketCloseCallback = (res: GeneralCallbackResult) => void;
  /** WebSocket 错误事件的回调函数 */
  type OnSocketErrorCallback = (res: GeneralCallbackResult) => void;
  /** WebSocket 接受到服务器的消息事件的回调函数 */
  type OnSocketMessageCallback = (
    result: OnSocketMessageCallbackResult,
  ) => void;
  /** WebSocket 连接打开事件的回调函数 */
  type OnSocketOpenCallback = (result: OnSocketOpenCallbackResult) => void;
  /** 录音开始事件的回调函数 */
  type OnStartCallback = (res: GeneralCallbackResult) => void;
  /** 触点失效事件的回调函数 */
  type OnTouchCancelCallback = (result: OnTouchCancelCallbackResult) => void;
  /** 触摸结束事件的回调函数 */
  type OnTouchEndCallback = (result: OnTouchEndCallbackResult) => void;
  /** 触点移动事件的回调函数 */
  type OnTouchMoveCallback = (result: OnTouchMoveCallbackResult) => void;
  /** 开始触摸事件的回调函数 */
  type OnTouchStartCallback = (result: OnTouchStartCallbackResult) => void;
  /** 小程序更新失败事件的回调函数 */
  type OnUpdateFailedCallback = (res: GeneralCallbackResult) => void;
  /** 小程序有版本更新事件的回调函数 */
  type OnUpdateReadyCallback = (res: GeneralCallbackResult) => void;
  /** 窗口尺寸变化事件的回调函数 */
  type OnWindowResizeCallback = (result: OnWindowResizeCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type OpenCardCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type OpenCardFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type OpenCardSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type OpenCustomerServiceConversationCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type OpenCustomerServiceConversationFailCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type OpenCustomerServiceConversationSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 设置页面按钮的点击事件的回调函数 */
  type OpenSettingButtonOffTapCallback = (res: GeneralCallbackResult) => void;
  /** 设置页面按钮的点击事件的回调函数 */
  type OpenSettingButtonOnTapCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type OpenSettingCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type OpenSettingFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type OpenSettingSuccessCallback = (
    result: OpenSettingSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type PreviewImageCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type PreviewImageFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type PreviewImageSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type ReadFileCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ReadFileFailCallback = (result: ReadFileFailCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ReadFileSuccessCallback = (
    result: ReadFileSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type ReaddirCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ReaddirFailCallback = (result: ReaddirFailCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ReaddirSuccessCallback = (result: ReaddirSuccessCallbackResult) => void;
  /** 录音错误事件的回调函数 */
  type RecorderManagerOnErrorCallback = (
    result: RecorderManagerOnErrorCallbackResult,
  ) => void;
  /** 录音暂停事件的回调函数 */
  type RecorderManagerOnPauseCallback = (res: GeneralCallbackResult) => void;
  /** 录音结束事件的回调函数 */
  type RecorderManagerOnStopCallback = (result: OnStopCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type RemoveSavedFileCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type RemoveSavedFileFailCallback = (
    result: RemoveSavedFileFailCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type RemoveSavedFileSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type RemoveStorageCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type RemoveStorageFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type RemoveStorageSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type RemoveUserCloudStorageCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type RemoveUserCloudStorageFailCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type RemoveUserCloudStorageSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type RenameCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type RenameFailCallback = (result: RenameFailCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type RenameSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type RequestCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type RequestFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type RequestMidasPaymentCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type RequestMidasPaymentFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type RequestMidasPaymentSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type RequestSuccessCallback = (result: RequestSuccessCallbackResult) => void;
  /** HTTP Response Header 事件的回调函数 */
  type RequestTaskOffHeadersReceivedCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** HTTP Response Header 事件的回调函数 */
  type RequestTaskOnHeadersReceivedCallback = (
    result: RequestTaskOnHeadersReceivedCallbackResult,
  ) => void;
  /** 激励视频错误事件的回调函数 */
  type RewardedVideoAdOffErrorCallback = (res: GeneralCallbackResult) => void;
  /** 激励视频广告加载事件的回调函数 */
  type RewardedVideoAdOffLoadCallback = (res: GeneralCallbackResult) => void;
  /** 用户点击 `关闭广告` 按钮的事件的回调函数 */
  type RewardedVideoAdOnCloseCallback = (result: OnCloseCallbackResult) => void;
  /** 激励视频错误事件的回调函数 */
  type RewardedVideoAdOnErrorCallback = (
    result: RewardedVideoAdOnErrorCallbackResult,
  ) => void;
  /** 激励视频广告加载事件的回调函数 */
  type RewardedVideoAdOnLoadCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type RmdirCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type RmdirFailCallback = (result: RmdirFailCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type RmdirSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type SaveFileCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type SaveFileFailCallback = (result: SaveFileFailCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type SaveFileSuccessCallback = (
    result: SaveFileSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type SaveImageToPhotosAlbumCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type SaveImageToPhotosAlbumFailCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type SaveImageToPhotosAlbumSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type SendCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type SendFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type SendSocketMessageCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type SendSocketMessageFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type SendSocketMessageSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type SendSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type SetClipboardDataCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type SetClipboardDataFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type SetClipboardDataSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type SetEnableDebugCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type SetEnableDebugFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type SetEnableDebugSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type SetInnerAudioOptionCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type SetInnerAudioOptionFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type SetInnerAudioOptionSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type SetKeepScreenOnCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type SetKeepScreenOnFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type SetKeepScreenOnSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type SetMenuStyleCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type SetMenuStyleFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type SetMenuStyleSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type SetScreenBrightnessCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type SetScreenBrightnessFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type SetScreenBrightnessSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type SetStatusBarStyleCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type SetStatusBarStyleFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type SetStatusBarStyleSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type SetStorageCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type SetStorageFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type SetStorageSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type SetUserCloudStorageCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type SetUserCloudStorageFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type SetUserCloudStorageSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type ShowActionSheetCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ShowActionSheetFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ShowActionSheetSuccessCallback = (
    result: ShowActionSheetSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type ShowKeyboardCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ShowKeyboardFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ShowKeyboardSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type ShowLoadingCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ShowLoadingFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ShowLoadingSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type ShowModalCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ShowModalFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ShowModalSuccessCallback = (
    result: ShowModalSuccessCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type ShowShareMenuCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ShowShareMenuFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ShowShareMenuSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type ShowToastCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ShowToastFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ShowToastSuccessCallback = (res: GeneralCallbackResult) => void;
  /** WebSocket 连接关闭事件的回调函数 */
  type SocketTaskOnCloseCallback = (res: GeneralCallbackResult) => void;
  /** WebSocket 错误事件的回调函数 */
  type SocketTaskOnErrorCallback = (
    result: SocketTaskOnErrorCallbackResult,
  ) => void;
  /** WebSocket 接受到服务器的消息事件的回调函数 */
  type SocketTaskOnMessageCallback = (
    result: SocketTaskOnMessageCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type StartAccelerometerCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type StartAccelerometerFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type StartAccelerometerSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type StartCompassCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type StartCompassFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type StartCompassSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type StartDeviceMotionListeningCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type StartDeviceMotionListeningFailCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type StartDeviceMotionListeningSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type StartGyroscopeCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type StartGyroscopeFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type StartGyroscopeSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type StatCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type StatFailCallback = (result: StatFailCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type StatSuccessCallback = (result: StatSuccessCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type StopAccelerometerCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type StopAccelerometerFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type StopAccelerometerSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type StopCompassCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type StopCompassFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type StopCompassSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type StopDeviceMotionListeningCompleteCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用失败的回调函数 */
  type StopDeviceMotionListeningFailCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用成功的回调函数 */
  type StopDeviceMotionListeningSuccessCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type StopGyroscopeCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type StopGyroscopeFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type StopGyroscopeSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type ToTempFilePathCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type ToTempFilePathFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type ToTempFilePathSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type UnlinkCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type UnlinkFailCallback = (result: UnlinkFailCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type UnlinkSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type UnzipCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type UnzipFailCallback = (result: UnzipFailCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type UnzipSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type UpdateKeyboardCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type UpdateKeyboardFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type UpdateKeyboardSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type UpdateShareMenuCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type UpdateShareMenuFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type UpdateShareMenuSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type UploadFileCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type UploadFileFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type UploadFileSuccessCallback = (
    result: UploadFileSuccessCallbackResult,
  ) => void;
  /** HTTP Response Header 事件的回调函数 */
  type UploadTaskOffHeadersReceivedCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** 上传进度变化事件的回调函数 */
  type UploadTaskOffProgressUpdateCallback = (
    res: GeneralCallbackResult,
  ) => void;
  /** HTTP Response Header 事件的回调函数 */
  type UploadTaskOnHeadersReceivedCallback = (
    result: UploadTaskOnHeadersReceivedCallbackResult,
  ) => void;
  /** 上传进度变化事件的回调函数 */
  type UploadTaskOnProgressUpdateCallback = (
    result: UploadTaskOnProgressUpdateCallbackResult,
  ) => void;
  /** 用户信息按钮的点击事件的回调函数 */
  type UserInfoButtonOffTapCallback = (res: GeneralCallbackResult) => void;
  /** 用户信息按钮的点击事件的回调函数 */
  type UserInfoButtonOnTapCallback = (result: OnTapCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type VibrateLongCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type VibrateLongFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type VibrateLongSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type VibrateShortCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type VibrateShortFailCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type VibrateShortSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 视频播放到末尾事件的回调函数 */
  type VideoOffEndedCallback = (res: GeneralCallbackResult) => void;
  /** 视频错误事件的回调函数 */
  type VideoOffErrorCallback = (res: GeneralCallbackResult) => void;
  /** 视频暂停事件的回调函数 */
  type VideoOffPauseCallback = (res: GeneralCallbackResult) => void;
  /** 视频播放事件的回调函数 */
  type VideoOffPlayCallback = (res: GeneralCallbackResult) => void;
  /** 视频播放进度更新事件的回调函数 */
  type VideoOffTimeUpdateCallback = (res: GeneralCallbackResult) => void;
  /** 视频缓冲事件的回调函数 */
  type VideoOffWaitingCallback = (res: GeneralCallbackResult) => void;
  /** 视频播放到末尾事件的回调函数 */
  type VideoOnEndedCallback = (res: GeneralCallbackResult) => void;
  /** 视频错误事件的回调函数 */
  type VideoOnErrorCallback = (result: VideoOnErrorCallbackResult) => void;
  /** 视频暂停事件的回调函数 */
  type VideoOnPauseCallback = (res: GeneralCallbackResult) => void;
  /** 视频播放事件的回调函数 */
  type VideoOnPlayCallback = (res: GeneralCallbackResult) => void;
  /** 视频播放进度更新事件的回调函数 */
  type VideoOnTimeUpdateCallback = (result: OnTimeUpdateCallbackResult) => void;
  /** 视频缓冲事件的回调函数 */
  type VideoOnWaitingCallback = (res: GeneralCallbackResult) => void;
  /** 主线程/Worker 线程向当前线程发送的消息的事件的回调函数 */
  type WorkerOnMessageCallback = (
    result: WorkerOnMessageCallbackResult,
  ) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  type WriteFileCompleteCallback = (res: GeneralCallbackResult) => void;
  /** 接口调用失败的回调函数 */
  type WriteFileFailCallback = (result: WriteFileFailCallbackResult) => void;
  /** 接口调用成功的回调函数 */
  type WriteFileSuccessCallback = (res: GeneralCallbackResult) => void;
  /** 全局错误事件的回调函数 */
  type WxOffErrorCallback = (res: GeneralCallbackResult) => void;
  /** 全局错误事件的回调函数 */
  type WxOnErrorCallback = (result: WxOnErrorCallbackResult) => void;
}
declare const wx: wx.Wx;
declare function /** [cancelAnimationFrame(number requestID)](cancelAnimationFrame.md)
 *
 * 取消由 requestAnimationFrame 添加到计划中的动画帧请求 */
cancelAnimationFrame(requestID: number): void;
declare function /** [clearInterval(number intervalID)](clearInterval.md)
 *
 * 取消由 setInterval 设置的定时器。 */
clearInterval(
  /** 要取消的定时器的 ID */
  intervalID: number,
): void;
declare function /** [clearTimeout(number timeoutID)](clearTimeout.md)
 *
 * 取消由 setTimeout 设置的定时器。 */
clearTimeout(
  /** 要取消的定时器的 ID */
  timeoutID: number,
): void;
declare function /** [number requestAnimationFrame(function callback)](requestAnimationFrame.md)
 *
 * 在下次进行重绘时执行。 */
requestAnimationFrame(
  /** 执行的 callback */
  callback: Function,
): number;
declare function /** [number setInterval(function callback, number delay, any rest)](setInterval.md)
 *
 * 设定一个定时器。按照指定的周期（以毫秒计）来执行注册的回调函数 */
setInterval(
  /** 回调函数 */
  callback: Function,
  /** 执行回调函数之间的时间间隔，单位 ms。 */
  delay?: number,
  /** param1, param2, ..., paramN 等附加参数，它们会作为参数传递给回调函数。 */
  rest?: any,
): number;
declare function /** [number setTimeout(function callback, number delay, any rest)](setTimeout.md)
 *
 * 设定一个定时器。在定时到期以后执行注册的回调函数 */
setTimeout(
  /** 回调函数 */
  callback: Function,
  /** 延迟的时间，函数的调用会在该延迟之后发生，单位 ms。 */
  delay?: number,
  /** param1, param2, ..., paramN 等附加参数，它们会作为参数传递给回调函数。 */
  rest?: any,
): number;
