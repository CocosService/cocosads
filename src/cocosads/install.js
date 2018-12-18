"use strict";
const path = require("fire-path");
const fs = require("fire-fs");
let utils = Editor.require("packages://cocos-services/panel/utils/utils.js");
let ProjHelper = Editor.require("packages://cocos-services/panel/utils/projHelper.js");
var projHelper;
module.exports = {
    /**
     * 开启服务时会调用此函数，在此函数中要完成的工作：
     *  若服务存在 js 版本的 sdk，则在此处就应该将 sdk 引入到用户的项目中
     * @param {String} projectPath 项目根路径
     * @param {Object} params 服务的参数 ( 若未填写则为 null ) 
     */
    onServiceEnable(projectPath, params) {
        utils.printToCreatorConsole("log", "CocosAds-Test服务已开启！");
        utils.printToCreatorConsole("log", "CocosAds-Test服务 js sdk 正在安装。。。");

        // 在此处完成 js sdk 的引用
        // Todo...

        utils.printToCreatorConsole("log", "CocosAds-Test服务 js sdk 安装完成！");
    },

    /**
     * 关闭服务时会调用此函数，在此函数中要完成的工作：
     *  将开启服务时安装的 sdk 从用户项目中移除引用并删除
     * @param {String} projectPath 项目根路径
     * @param {Object} params 服务的参数(若未填写则为 null)
     */
    onServiceDisable(projectPath, params) {
        utils.printToCreatorConsole("log", "CocosAds-Test服务已关闭！");
        utils.printToCreatorConsole("log", "CocosAds-Test服务 js sdk 正在卸载。。。");

        // 在此处完成 js sdk 的移除
        // Todo...

        utils.printToCreatorConsole("log", "CocosAds-Test服务 js sdk 卸载完成！");
    },

    /**
     * 当 Creator 构建项目时，且当前服务处于开启状态会调用此函数，在此函数中要完成的工作：
     *   将对应服务的 sdk 集成到项目中
     * @param {Object} options 编译选项
     * @param {Object} params 服务的参数(若未填写则为 null)
     */
    onBuildedProjectEnable(options, params) {
        projHelper = new ProjHelper(options);
        utils.printToCreatorConsole("log", "CocosAds-Test服务正在安装。。。");
        if (!this.checkParam(params)) return;

        // 在此处完成构建项目服务 sdk 的集成
        // Todo...

        utils.printToCreatorConsole("log", "CocosAds-Test服务安装完成！");
    },

    /**
     * 当 Creator 构建项目时，且当前服务处于关闭状态会调用此函数，在此函数中要完成的工作：
     *   将对应服务的 sdk 集成到项目中
     * @param {Object} options 编译选项
     * @param {Object} params 服务的参数(若未填写则为 null)
     */
    onBuildedProjectDisable(options, params) {
        projHelper = new ProjHelper(options);
        utils.printToCreatorConsole("log", "CocosAds-Test服务正在卸载。。。");

        // 在此处完成构建项目服务 sdk 的卸载
        // Todo...

        utils.printToCreatorConsole("log", "CocosAds-Test服务卸载完成！");
    },

    // 检测必要参数是否缺失
    checkParam(params) {
        if (!params) {
            utils.printToCreatorConsole("info", "Cocos Services (CocosAds-Test) - 检测到参数填写不完整，集成失败！请至服务面板中打开对应的服务，完整填写参数。");
            return false;
        }
        return true;
    }
};
