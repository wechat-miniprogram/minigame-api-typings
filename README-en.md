# Wechat MiniGame API Typings

> [中文版本](./README.md)

[![Published on NPM](https://img.shields.io/npm/v/minigame-api-typings.svg?style=flat)](https://www.npmjs.com/package/minigame-api-typings)
[![MIT License](https://img.shields.io/github/license/wechat-miniprogram/minigame-api-typings.svg)](https://github.com/wechat-miniprogram/minigame-api-typings)
[![Travis CI Test Status](https://travis-ci.org/wechat-miniprogram/minigame-api-typings.svg?branch=master)](https://travis-ci.org/wechat-miniprogram/minigame-api-typings)

Type definitions for APIs of Wechat Mini Game in TypeScript

## Install

Install by NPM:
```bash
# install definitions for latest base library
npm install minigame-api-typings
```

or specify a base library version:

```bash
# install definitions for base library version 2.4.1
npm install minigame-api-typings@2.6.5
```

## Versions

Check out all available versions corresponding to base library version in [VERSIONS.md](https://github.com/wechat-miniprogram/minigame-api-typings/blob/master/VERSIONS.md)

## Changelog

See [CHANGELOG.md](https://github.com/wechat-miniprogram/minigame-api-typings/blob/master/CHANGELOG.md) (Chinese only)


## Contribution

Definitions of Wechat APIs (`lib.wx.api.d.ts`) are auto-generated together with our [documentations](https://developers.weixin.qq.com/minigame/en/dev/api/), therefore PRs including that file will __not__ be merged. If you found some APIs defined wrongly, create an issue instead.


### Automated tests

We use [`tsd`](https://github.com/SamVerschueren/tsd) to check if this definition is working properly. All test cases are under folder `test`.

To perform an automated test, clone this repo, `npm install --save-dev` and `npm test`.

If you have test case that fails the test, an issue or PR will be great. Strong test case that passes are also welcomed.
