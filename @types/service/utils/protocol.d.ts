import { GameDetail, StorePluginVersionInfo, UserInfo } from "../ifs";
declare const _default: {
    /**
     * 获取服务列表
     */
    getServiceList: () => Promise<any | any[]>;
    /**
     * 获取指定服务的版本信息
     * @param service_id 服务ID
     * @param version    版本号
     */
    getVersionDesc: (service_id: string, version: string) => Promise<any>;
    /**
     * 获取指定 Store 插件的最新版本信息
     * @param type 插件类型
     */
    getCustomPlugin: (type?: string) => Promise<StorePluginVersionInfo>;
    /**
     * 获取服务分组列表
     */
    getGroupList: () => Promise<any | any[]>;
    /**
     * 获取游戏列表
     */
    getGameList: () => Promise<any | any[]>;
    /**
     * 提交日志信息
     * @param logs 日志信息
     */
    submitLog: (logs: any) => Promise<any>;
    /**
     * 获取游戏详情
     * @param app_id Cocos App ID
     */
    getGameDetail: (app_id: string) => Promise<GameDetail>;
    /**
     * 获取用户信息
     */
    getUserInfo: () => Promise<UserInfo>;
    /**
     * 获取服务跳转的url信息
     */
    getServiceUrls: () => Promise<any>;
    /**
     * 创建个人游戏
     * @param game_name 游戏名称
     */
    createGame: (game_name: string) => Promise<any>;
    /**
     * 开通服务
     * @param app_id     Cocos App ID
     * @param service_id Service ID
     */
    openService: (app_id: string, service_id: string) => Promise<any>;
    /**
     * 关联/取消关联 Project ID
     * @param app_id     Coocs App ID
     * @param project_id Project ID
     * @param action     绑定动作， 0：取消关联 1：关联
     */
    associateProjectID: (app_id: string, project_id: string, action: 0 | 1) => Promise<any>;
    /**
     * 根据要跳转的 URL 获取自动登录的 URL
     * @param redirect_url 需要跳转的 URL
     */
    getRedirectUrl: (redirect_url: string) => Promise<string>;
    /**
     * 获取开发这绑定的腾讯云的临时密钥
     * @param service_id 服务 ID
     * @param app_id     Cocos App ID
     */
    getTencentTmpKey: (service_id: string, app_id: string) => Promise<any>;
    /**
     * 创建 TCB 环境
     * @param service_id 服务 ID
     * @param app_id     Cocos App ID
     * @param env_id     环境 ID（已废弃）
     * @param alias      环境别名
     */
    createTCBEnv: (service_id: string, app_id: string, alias: string, env_id?: string) => Promise<any>;
    /**
     * 获取 TCB 环境列表
     * @param service_id 服务 ID
     * @param app_id     Cocos App ID
     */
    getTCBEnvs: (service_id: string, app_id: string) => Promise<any | any[]>;
    /**
     * 获取指定环境的用量信息
     * @param service_id 服务 ID
     * @param app_id     Cocos App ID
     * @param env_id     指定的环境 ID
     */
    getTCBQuotaData: (service_id: string, app_id: string, env_id: string) => Promise<any>;
};
export default _default;
