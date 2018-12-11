"use strict";
const path = require("fire-path");
const fs = require("fire-fs");
let utils = Editor.require("packages://cocos-services/panel/utils/utils.js");
let ProjHelper = Editor.require("packages://cocos-services/panel/utils/projHelper.js");
var projHelper;
module.exports = {
    /**
     * 服务集成安装函数入口
     * @param {Object} options 编译选项
     * @param {Object} params 服务所需的参数
     * @param {Boolean} install 是否是安装服务
     * @param {*} callback
     */
    installService(options, params, install, callback) {
        callback(true);
        console.log(options);
        console.log(params);
        projHelper = new ProjHelper(options);
        if (install) {
            utils.printToCreatorConsole("log", "CocosAds-Test服务正在安装。。。");
            if (!this.checkParam(params)) return;
            this.praseHTML();
            this.parseJavaScript(options, params);
        } else {}
        this.parseNative(options, install);
        utils.printToCreatorConsole("log", "CocosAds-Test服务安装完成！");
    },
    // 检测必要参数是否缺失
    checkParam(params) {
        if (!params) {
            utils.printToCreatorConsole("failed", "Cocos Services (CocosAds-Test) - 检测到参数填写不完整，集成失败！请至服务面板中打开对应的服务，完整填写参数。");
            return false;
        }
        return true;
    },
    // 处理Web平台的index.html文件
    praseHTML() {},
    // 处理index.js文件
    parseJavaScript(options, params) {},
    // 处理原生工程文件
    parseNative(options, install) {}
};