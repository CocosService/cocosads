/// <reference types="../extension" />
/// <reference types="./@types/index" />
import { SelectDialogOptions } from "../../@types/editor/dialog/public/interface";
import { I18nMap } from "../../@types/editor/i18n";
import { UserData } from "../../@types/editor/user";
import { ProjectInfo } from "../ifs";
declare const _default: {
    plugin: string;
    isLogin: () => Promise<boolean>;
    /**
     * 从 Creator 获取当前用户信息
     */
    getUserData: () => Promise<UserData>;
    /**
     * 获取当前语言
     */
    getLang: () => string;
    /**
     * 获取 Creator 版本号
     */
    getCreatorVersion: () => string;
    /**
     * 获取指定的 Creator 插件信息
     * @param name 插件名称
     */
    getPackageInfo: (name: string) => Editor.Interface.PackageInfo;
    /**
     * 获取 Service 的实际版本号
     */
    getServiceVersion: () => string;
    /**
     * 从全局配置中读取 Cocos Service 的相关配置
     * @param key key
     */
    readGlobalProfile: (key?: string | undefined) => Promise<any>;
    /**
     * 向全局配置中写入 Cocos Service 的相关配置
     * @param key   key
     * @param value 数据
     */
    writeGlobalProfile: (key: string, value: any) => Promise<void>;
    /**
     * 从项目配置中读取 Cocos Service 的相关配置
     * @param key key，key 不存在则表明读取整个配置文件
     */
    readProjectProfile: (key?: string | undefined) => Promise<any>;
    /**
     * 向项目配置中写入 Cocos Service 的相关配置
     * @param key   key
     * @param value 数据
     */
    writeProjectProfile: (key: string, value: any) => Promise<void>;
    /**
     * 读取是否处于插件开发模式，用于是否热加载插件
     */
    pluginDevMode: () => Promise<boolean>;
    getCreatorHomePath: () => string;
    getServiceHomePath: () => string;
    getProjectInfo: () => ProjectInfo;
    getProjectPath: () => string;
    getProjectID: () => string;
    getProjectName: () => string;
    /**
     * 传入 key，翻译成当前语言
     * 允许翻译变量 {a}，传入的第二个参数 obj 内定义 a
     * @param key 用于翻译的 key 值
     * @param obj 翻译字段内如果有 {key} 等可以在这里传入替换字段
     */
    tr: (key: string, obj?: {
        [key: string]: string;
    } | undefined) => string;
    /**
     * 动态注册插件的 i18n 数据
     * @param language 语言
     * @param key 翻译路径
     * @param map 翻译表
     */
    registerI18n: (language: string, key: string, map: I18nMap) => void;
    /**
     * 是否是 Windows 系统
     */
    isWin32: () => boolean;
    /**
     * 是否是 macOS 系统
     */
    isMac: () => boolean;
    /**
     * 选择文件弹窗
     * @param options 参数
     */
    dialogSelect: (options?: SelectDialogOptions) => Promise<any>;
    /**
     * 保存文件弹窗
     * @param options 参数
     */
    dialogSave: (options?: SelectDialogOptions) => Promise<any>;
    /**
     * 信息提示框
     * @param type      提示框类型
     * @param msg       提示信息
     * @param titile    提示标题(Windows可用)
     * @param buttons   按钮组
     * @param defaultId 默认高亮的按钮
     */
    dialogMsgBox: (type: 'info' | "warn" | "error", msg: string, titile?: string | undefined, buttons?: string[] | undefined, defaultId?: number | undefined) => Promise<any>;
    /**
     * 广播消息
     * @param msg  消息名称
     * @param args 参数
     */
    broadcastMsg(msg: string, ...args: any[]): void;
    /**
     * 发送一个消息到指定的插件
     * @param name 插件名称
     * @param msg  消息名称
     * @param args 参数
     */
    sendMsg(name: string, msg: string, ...args: any[]): void;
    /**
     * 发送一个消息到指定的插件，并等待返回
     * @param name 插件名称
     * @param msg  消息名称
     * @param args 参数
     */
    requestMsg(name: string, msg: string, ...args: any[]): Promise<any>;
};
export default _default;
