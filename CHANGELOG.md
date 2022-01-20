## 2022-01-20 v3.4.2
- 更新 API 定义到 2.21.3

## 2021-08-02 v3.4.1
- 更新 API 定义到 2.19.0
- 重新整理了注释，包括：
  - 将支持和废弃情况挪到前面，使其更不容易因为接口说明太长而被忽略
  - 移除文首、文末和多余（连续超过两个）的空行
  - 修复几个链接

## 2021-07-07 v3.4.0
- 更新 API 定义到 2.18.0
- 自动化测试迁移到 GitHub Actions
- 更新来自文档代码示例的测试用例
- 更新 npm 依赖以解决安全问题
- 修复 [api-typings/#202](https://github.com/wechat-miniprogram/api-typings/issues/202)

## 2021-04-21 v3.3.1
- 更新 API 定义到 2.16.1

## 2021-03-03 v3.3.0
- 同步 API 定义到基础库 2.15.0
- 支持泛型（[api-typings#177](https://github.com/wechat-miniprogram/api-typings/issues/177)）
- 支持索引签名，以支持 `wx.requestSubscribeMessage`（[api-typings#175](https://github.com/wechat-miniprogram/api-typings/issues/175)）

## 2021-01-12 v3.2.0
- 同步 API 定义到基础库 2.14.1

## 2020-06-15 v2.11.0
- 同步 API 定义到基础库 2.11.0
- 该版本继续合并了一部分完全相同的 interface / callback，是一个 **破坏性改动**，原本字面上引用了这些 interface / callback 的代码可能会报错。

## 2020-05-21 v2.10.4
- 同步 API 定义到基础库 2.10.4
- 在之前的版本中，分属于不同接口的两个 interface / callback 即使完全相同，也会拥有不同的名字。在这次更新中，他们将合并为同一个（如 `GetLastRoomInfoSuccessCallbackDataResultRoomInfoRoomMemberInfo` 和 `GetRoomInfoSuccessCallbackDataResultRoomInfoRoomMemberInfo` 都变成了 `RoomMemberInfo`）。这是一个 **破坏性改动**，原本字面上引用了这些 interface / callback 的代码可能会报错。
- 更新了小程序·云开发的 API 定义

## 2020-03-26 v2.10.3
- 同步 API 定义到基础库 2.10.3

## 2020-03-18 v2.10.2-1
- 支持 API Promise 化调用

## 2020-02-26 v2.10.2
- 同步 API 定义到基础库 2.10.2
- 将命名空间从 `wx` 更改为更正式的 `WechatMinigame`，这是一个 **破坏性改动**，原本字面上引用了 `wx` 命名空间的代码可能失效
- 添加自动化测试