import { GameDetail, Service, UrlKey, UserInfo } from "../../ifs";
declare const _default: {
    userInfo: {};
    games: any[];
    services: any[];
    urls: {};
    inited: boolean;
    isLogin: boolean;
    unfoldGroups: Set<string>;
    init: (refresh?: boolean) => Promise<void>;
    /**
     * 获取用户信息
     * @param refresh 是否强制刷新
     */
    getUserInfo: (refresh?: boolean) => Promise<UserInfo>;
    /**
     * 获取用户游戏列表
     * @param refresh 是否强制刷新
     */
    getGames: (refresh?: boolean) => Promise<GameDetail[]>;
    /**
     * 获取所有服务列表
     * @param refresh 是否强制刷新
     */
    getServices: (refresh?: boolean) => Promise<Service[]>;
    getUrl(key: UrlKey, param?: any): Promise<string>;
};
export default _default;
