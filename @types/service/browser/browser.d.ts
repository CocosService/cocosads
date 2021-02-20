import { IpcMainEvent } from "electron/main";
import { LogLevel, ParamType, PopupType, Service } from "../ifs";
/**
 * 插件定义的方法
 * Methods defined by plug-ins
 * 可以在 package.json 里的 contributions 里定义 messages 触发这里的方法
 * And of course, messages can be defined in the contributions section in package.JSON to trigger the method here
 */
export declare const methods: {
    openServicePanel(): void;
    openPopup(pluginName: string, params: ParamType, type: PopupType): void;
    closePopup(pluginName: string): void;
    /**
     * 打印日志
     * @param level 日志等级
     * @param log   日志内容
     */
    printLog(level: LogLevel, log: any): void;
    popupShow(event: IpcMainEvent, args: any): void;
    userChanged(): void;
    /**
     * 发送 API 请求
     * @param path  Creator API 接口路径
     * @param param 参数
     */
    apiRequest(path: string, param?: ParamType): Promise<any>;
    /**
     * 静默开通服务
     * @param service_name 服务名称
     * @param enable     是否启用服务
     * @param config_id  配置集ID，不填则使用默认的
     */
    enableService(service_name: string, enable: boolean, config_id?: string): Promise<string>;
    /**
     * 发送消息给服务面板内部
     * @param target 消息发送目标
     * @param msg    消息名称
     * @param param  参数
     */
    pluginMsg(target: "service" | "popup", msg: string, param?: ParamType): Promise<any>;
    sceneReady(): Promise<void>;
    onServiceStatusChanged(service: Service): Promise<void>;
};
/**
 * 启动的时候执行的初始化方法
 * Initialization method performed at startup
 */
export declare function load(): Promise<void>;
/**
 * 插件被关闭的时候执行的卸载方法
 * Uninstall method performed when the plug-in is closed
 */
export declare function unload(): void;
