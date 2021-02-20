/// <reference types="node" />
/// <reference types="../extension" />
import { ParamType, UrlKey } from '../ifs';
export declare const csFile: {
    zip: (src_dir: string, dist?: string) => Promise<void>;
    unzip: (src: string, dist?: string) => Promise<void>;
    walk: (dir: string, hasDir?: boolean) => string[];
    mkdirs: (dir: string) => void;
    readJson: (...paths: string[]) => any;
    saveJson: (file: string, data: any) => void;
    copy: (src: string, dist: string, options: import("fs-extra").CopyOptionsSync | undefined) => void;
    move: (src: string, dist: string, options: import("fs-extra").MoveOptions | undefined) => void;
    remove: (src: string) => void;
    watch: (dir: string, callback: (monitor: import("watch").Monitor) => void) => void;
    readFile: (...paths: string[]) => string;
    recursive: (dir: string, handle: (file: string) => void, filter?: ((file: string) => boolean) | undefined) => void;
};
export declare const csHttp: {
    post: (url: string, form: any) => Promise<any>;
    get: (url: string, form: any) => Promise<any>;
    download: (url: string, dist: string, callback: import("../ifs").DownloadCallback) => void;
    objectSortByKey: (object: Object) => Object;
    paramEncode: (param: any, key?: string, encode?: boolean) => string;
};
export declare const csUtil: {
    openUri: (uri: string) => void;
    validateString: (str: string) => boolean;
    compareVersion: (first: string, second: string) => 0 | 1 | -1;
    require: (...args: string[]) => any;
    deleteCache: (...args: string[]) => any;
    getStrMD5: (str: string) => string;
    generateID: (str: string, len?: number) => string;
};
export declare const csEvent: import("events").EventEmitter;
export declare const csConfig: {
    updateConfigFile: () => Promise<void>;
    generateConfigSet: (config_name: string, config_remarks?: string) => import("../ifs").ConfigSet;
    copyConfigSet: (configSet: import("../ifs").ConfigSet, config_id?: string, app_id?: string) => Promise<void>;
    deleteConfigSet: (config_id: string, app_id?: string) => Promise<import("../ifs").ConfigSet>;
    readServiceList: () => Promise<import("../ifs").Service[]>;
    writeServiceList: (services: import("../ifs").Service[]) => Promise<void>;
    readServiceGroupList: () => Promise<import("../ifs").ServiceGroup[]>;
    writeServiceGroupList: (groups: import("../ifs").ServiceGroup[]) => Promise<void>;
    readServiceFilter: () => Promise<import("../ifs").ServiceFilter>;
    writeServiceFilter: (filter: import("../ifs").ServiceFilter) => Promise<void>;
    readBindGame: () => Promise<import("../ifs").Game>;
    writeBindGame: (game: import("../ifs").Game) => Promise<void>;
    readConfigSet: (app_id?: string) => Promise<import("../ifs").ConfigSet | undefined>;
    writeConfigSet: (configSet: import("../ifs").ConfigSet, app_id?: string) => Promise<void>;
    readConfigSets: (app_id?: string) => Promise<import("../ifs").ConfigSet[]>;
    readEnableServices: (config_id?: string) => Promise<string[]>;
    wirteEnableService: (service_id: string, enable: boolean, config_id?: string) => Promise<void>;
    readServiceParam: (service_id: string, config_id?: string) => Promise<ParamType>;
    writeServiceParam: (service_id: string, param: ParamType, config_id?: string) => Promise<void>;
};
export declare const csEditor: {
    plugin: string;
    isLogin: () => Promise<boolean>;
    getUserData: () => Promise<import("../../@types/editor/user").UserData>;
    getLang: () => string;
    getCreatorVersion: () => string;
    getPackageInfo: (name: string) => Editor.Interface.PackageInfo;
    getServiceVersion: () => string; /**
     * 发送 Creator API 的请求
     * @param path  路径 ( 去除 /api/ )
     * @param param 参数
     */
    readGlobalProfile: (key?: string | undefined) => Promise<any>;
    writeGlobalProfile: (key: string, value: any) => Promise<void>;
    readProjectProfile: (key?: string | undefined) => Promise<any>;
    writeProjectProfile: (key: string, value: any) => Promise<void>;
    pluginDevMode: () => Promise<boolean>;
    getCreatorHomePath: () => string;
    getServiceHomePath: () => string;
    getProjectInfo: () => import("../ifs").ProjectInfo;
    getProjectPath: () => string;
    getProjectID: () => string;
    getProjectName: () => string;
    getPreviewRoot: () => string;
    tr: (key: string, obj?: {
        [key: string]: string;
    } | undefined) => string;
    registerI18n: (language: string, key: string, map: import("../../@types/editor/i18n").I18nMap) => void;
    isWin32: () => boolean;
    isMac: () => boolean;
    dialogSelect: (options?: import("../../@types/editor/dialog/public/interface").SelectDialogOptions) => Promise<any>;
    dialogSave: (options?: import("../../@types/editor/dialog/public/interface").SelectDialogOptions) => Promise<any>;
    dialogMsgBox: (type: "info" | "warn" | "error", msg: string, titile?: string | undefined, buttons?: string[] | undefined, defaultId?: number | undefined) => Promise<any>;
    broadcastMsg(msg: string, ...args: any[]): void;
    sendMsg(name: string, msg: string, ...args: any[]): void;
    requestMsg(name: string, msg: string, ...args: any[]): Promise<any>;
};
export declare const csLogger: {
    printLog: (level: import("../ifs").LogLevel, log: any) => void;
    log: (log: any) => void;
    info: (log: any) => void;
    warn: (log: any) => void;
    error: (log: any) => void;
};
export declare const csPlugin: {
    pluginExists: (pluginName: string) => boolean;
    getServicePluginInfo: (pluginName: string) => import("../ifs").ServicePluginInfo | undefined;
    installPlugin: (pluginName: string, packageUrl: string, callback?: ((staus: string, success: boolean) => void) | undefined) => Promise<boolean>;
    openPopup: (pluginName: string, params: ParamType) => void;
    closePopup: (pluginName: string) => void;
};
export declare const csProtocol: {
    getServiceList: () => Promise<any>;
    getVersionDesc: (service_id: string, version: string) => Promise<any>;
    getCustomPlugin: (type?: string) => Promise<import("../ifs").StorePluginVersionInfo>;
    getGroupList: () => Promise<any>;
    getGameList: () => Promise<any>;
    submitLog: (logs: any) => Promise<any>;
    getGameDetail: (app_id: string) => Promise<import("../ifs").GameDetail>;
    getUserInfo: () => Promise<import("../ifs").UserInfo>;
    getServiceUrls: () => Promise<any>;
    createGame: (game_name: string) => Promise<any>;
    openService: (app_id: string, service_id: string) => Promise<any>;
    associateProjectID: (app_id: string, project_id: string, action: 0 | 1) => Promise<any>;
    getRedirectUrl: (redirect_url: string) => Promise<string>;
    getTencentTmpKey: (service_id: string, app_id: string) => Promise<any>;
    createTCBEnv: (service_id: string, app_id: string, alias: string, env_id?: string) => Promise<any>;
    getTCBEnvs: (service_id: string, app_id: string) => Promise<any>;
    getTCBQuotaData: (service_id: string, app_id: string, env_id: string) => Promise<any>;
};
export declare const csAnalytics: {
    uid: string;
    app_id: string;
    app_name: string;
    service_id: string;
    service_name: string;
    generateAndSubmit: (event: string, ext?: ParamType) => void;
    init: (uid: string, game: import("../ifs").Game, serice: import("../ifs").Service) => void;
    openServicePanel: () => void;
    enterService: () => void;
    downloadService: (plugin_version: string) => void;
    gotoServiceCenter: () => void;
    gotoAccountCenter: () => void;
    gotoDashboardUrl: (target_url?: string) => void;
    gotoSampleUrl: (target_url?: string) => void;
    gotoGuideUrl: (target_url?: string) => void;
    saveParameter: () => void;
    enableService: () => void;
    disableService: () => void;
    showSettingsMenu: () => void;
    enterBindCocosAppID: () => void;
    associateAppID: () => void;
    unassociateAppID: () => void;
    ctrateGame: () => void;
    serviceIntegrationSuccess: (uid: string, game: import("../ifs").Game, serice: import("../ifs").Service, time: "Building Time" | "Editing Time") => void;
    serviceIntegrationFailed: (uid: string, game: import("../ifs").Game, serice: import("../ifs").Service, time: "Building Time" | "Editing Time", cause: string) => void;
    openService: () => void;
    openServiceSuccess: () => void;
    openServiceFailed: (cause: string) => void;
};
declare const _default: {
    csFile: {
        zip: (src_dir: string, dist?: string) => Promise<void>;
        unzip: (src: string, dist?: string) => Promise<void>;
        walk: (dir: string, hasDir?: boolean) => string[];
        mkdirs: (dir: string) => void;
        readJson: (...paths: string[]) => any;
        saveJson: (file: string, data: any) => void;
        copy: (src: string, dist: string, options: import("fs-extra").CopyOptionsSync | undefined) => void;
        move: (src: string, dist: string, options: import("fs-extra").MoveOptions | undefined) => void;
        remove: (src: string) => void;
        watch: (dir: string, callback: (monitor: import("watch").Monitor) => void) => void;
        readFile: (...paths: string[]) => string;
        recursive: (dir: string, handle: (file: string) => void, filter?: ((file: string) => boolean) | undefined) => void;
    };
    csHttp: {
        post: (url: string, form: any) => Promise<any>;
        get: (url: string, form: any) => Promise<any>;
        download: (url: string, dist: string, callback: import("../ifs").DownloadCallback) => void;
        objectSortByKey: (object: Object) => Object;
        paramEncode: (param: any, key?: string, encode?: boolean) => string;
    };
    csUtil: {
        openUri: (uri: string) => void;
        validateString: (str: string) => boolean;
        compareVersion: (first: string, second: string) => 0 | 1 | -1;
        require: (...args: string[]) => any;
        deleteCache: (...args: string[]) => any;
        getStrMD5: (str: string) => string;
        generateID: (str: string, len?: number) => string;
    };
    csEvent: import("events").EventEmitter;
    csConfig: {
        updateConfigFile: () => Promise<void>;
        generateConfigSet: (config_name: string, config_remarks?: string) => import("../ifs").ConfigSet;
        copyConfigSet: (configSet: import("../ifs").ConfigSet, config_id?: string, app_id?: string) => Promise<void>;
        deleteConfigSet: (config_id: string, app_id?: string) => Promise<import("../ifs").ConfigSet>;
        readServiceList: () => Promise<import("../ifs").Service[]>;
        writeServiceList: (services: import("../ifs").Service[]) => Promise<void>;
        readServiceGroupList: () => Promise<import("../ifs").ServiceGroup[]>;
        writeServiceGroupList: (groups: import("../ifs").ServiceGroup[]) => Promise<void>;
        readServiceFilter: () => Promise<import("../ifs").ServiceFilter>;
        writeServiceFilter: (filter: import("../ifs").ServiceFilter) => Promise<void>;
        readBindGame: () => Promise<import("../ifs").Game>;
        writeBindGame: (game: import("../ifs").Game) => Promise<void>;
        readConfigSet: (app_id?: string) => Promise<import("../ifs").ConfigSet | undefined>;
        writeConfigSet: (configSet: import("../ifs").ConfigSet, app_id?: string) => Promise<void>;
        readConfigSets: (app_id?: string) => Promise<import("../ifs").ConfigSet[]>;
        readEnableServices: (config_id?: string) => Promise<string[]>;
        wirteEnableService: (service_id: string, enable: boolean, config_id?: string) => Promise<void>;
        readServiceParam: (service_id: string, config_id?: string) => Promise<ParamType>;
        writeServiceParam: (service_id: string, param: ParamType, config_id?: string) => Promise<void>;
    };
    csEditor: {
        plugin: string;
        isLogin: () => Promise<boolean>;
        getUserData: () => Promise<import("../../@types/editor/user").UserData>;
        getLang: () => string;
        getCreatorVersion: () => string;
        getPackageInfo: (name: string) => Editor.Interface.PackageInfo;
        getServiceVersion: () => string; /**
         * 发送 Creator API 的请求
         * @param path  路径 ( 去除 /api/ )
         * @param param 参数
         */
        readGlobalProfile: (key?: string | undefined) => Promise<any>;
        writeGlobalProfile: (key: string, value: any) => Promise<void>;
        readProjectProfile: (key?: string | undefined) => Promise<any>;
        writeProjectProfile: (key: string, value: any) => Promise<void>;
        pluginDevMode: () => Promise<boolean>;
        getCreatorHomePath: () => string;
        getServiceHomePath: () => string;
        getProjectInfo: () => import("../ifs").ProjectInfo;
        getProjectPath: () => string;
        getProjectID: () => string;
        getProjectName: () => string;
        getPreviewRoot: () => string;
        tr: (key: string, obj?: {
            [key: string]: string;
        } | undefined) => string;
        registerI18n: (language: string, key: string, map: import("../../@types/editor/i18n").I18nMap) => void;
        isWin32: () => boolean;
        isMac: () => boolean;
        dialogSelect: (options?: import("../../@types/editor/dialog/public/interface").SelectDialogOptions) => Promise<any>;
        dialogSave: (options?: import("../../@types/editor/dialog/public/interface").SelectDialogOptions) => Promise<any>;
        dialogMsgBox: (type: "info" | "warn" | "error", msg: string, titile?: string | undefined, buttons?: string[] | undefined, defaultId?: number | undefined) => Promise<any>;
        broadcastMsg(msg: string, ...args: any[]): void;
        sendMsg(name: string, msg: string, ...args: any[]): void;
        requestMsg(name: string, msg: string, ...args: any[]): Promise<any>;
    };
    csLogger: {
        printLog: (level: import("../ifs").LogLevel, log: any) => void;
        log: (log: any) => void;
        info: (log: any) => void;
        warn: (log: any) => void;
        error: (log: any) => void;
    };
    csProtocol: {
        getServiceList: () => Promise<any>;
        getVersionDesc: (service_id: string, version: string) => Promise<any>;
        getCustomPlugin: (type?: string) => Promise<import("../ifs").StorePluginVersionInfo>;
        getGroupList: () => Promise<any>;
        getGameList: () => Promise<any>;
        submitLog: (logs: any) => Promise<any>;
        getGameDetail: (app_id: string) => Promise<import("../ifs").GameDetail>;
        getUserInfo: () => Promise<import("../ifs").UserInfo>;
        getServiceUrls: () => Promise<any>;
        createGame: (game_name: string) => Promise<any>;
        openService: (app_id: string, service_id: string) => Promise<any>;
        associateProjectID: (app_id: string, project_id: string, action: 0 | 1) => Promise<any>;
        getRedirectUrl: (redirect_url: string) => Promise<string>;
        getTencentTmpKey: (service_id: string, app_id: string) => Promise<any>;
        createTCBEnv: (service_id: string, app_id: string, alias: string, env_id?: string) => Promise<any>;
        getTCBEnvs: (service_id: string, app_id: string) => Promise<any>;
        getTCBQuotaData: (service_id: string, app_id: string, env_id: string) => Promise<any>;
    };
    csAnalytics: {
        uid: string;
        app_id: string;
        app_name: string;
        service_id: string;
        service_name: string;
        generateAndSubmit: (event: string, ext?: ParamType) => void;
        init: (uid: string, game: import("../ifs").Game, serice: import("../ifs").Service) => void;
        openServicePanel: () => void;
        enterService: () => void;
        downloadService: (plugin_version: string) => void;
        gotoServiceCenter: () => void;
        gotoAccountCenter: () => void;
        gotoDashboardUrl: (target_url?: string) => void;
        gotoSampleUrl: (target_url?: string) => void;
        gotoGuideUrl: (target_url?: string) => void;
        saveParameter: () => void;
        enableService: () => void;
        disableService: () => void;
        showSettingsMenu: () => void;
        enterBindCocosAppID: () => void;
        associateAppID: () => void;
        unassociateAppID: () => void;
        ctrateGame: () => void;
        serviceIntegrationSuccess: (uid: string, game: import("../ifs").Game, serice: import("../ifs").Service, time: "Building Time" | "Editing Time") => void;
        serviceIntegrationFailed: (uid: string, game: import("../ifs").Game, serice: import("../ifs").Service, time: "Building Time" | "Editing Time", cause: string) => void;
        openService: () => void;
        openServiceSuccess: () => void;
        openServiceFailed: (cause: string) => void;
    };
    urls: {};
    /**
     * 传入 key，翻译成当前语言
     * 允许翻译变量 {a}，传入的第二个参数 obj 内定义 a
     * @param key 用于翻译的 key 值
     * @param obj 翻译字段内如果有 {key} 等可以在这里传入替换字段
     */
    pluginTr(pluginName: string, key: string, obj?: {
        [key: string]: string;
    } | undefined): string;
    /**
     * 发送 Creator API 的请求
     * @param path  路径 ( 去除 /api/ )
     * @param param 参数
     */
    apiRequest(path: string, param?: ParamType): Promise<any>;
    getUrl(key: UrlKey, param?: any): Promise<string>;
};
export default _default;

export declare class CCService {
    csFile: {
        zip: (src_dir: string, dist?: string) => Promise<void>;
        unzip: (src: string, dist?: string) => Promise<void>;
        walk: (dir: string, hasDir?: boolean) => string[];
        mkdirs: (dir: string) => void;
        readJson: (...paths: string[]) => any;
        saveJson: (file: string, data: any) => void;
        copy: (src: string, dist: string, options: import("fs-extra").CopyOptionsSync | undefined) => void;
        move: (src: string, dist: string, options: import("fs-extra").MoveOptions | undefined) => void;
        remove: (src: string) => void;
        watch: (dir: string, callback: (monitor: import("watch").Monitor) => void) => void;
        readFile: (...paths: string[]) => string;
        recursive: (dir: string, handle: (file: string) => void, filter?: ((file: string) => boolean) | undefined) => void;
    };
    csHttp: {
        post: (url: string, form: any) => Promise<any>;
        get: (url: string, form: any) => Promise<any>;
        download: (url: string, dist: string, callback: import("../ifs").DownloadCallback) => void;
        objectSortByKey: (object: Object) => Object;
        paramEncode: (param: any, key?: string, encode?: boolean) => string;
    };
    csUtil: {
        openUri: (uri: string) => void;
        validateString: (str: string) => boolean;
        compareVersion: (first: string, second: string) => 0 | 1 | -1;
        require: (...args: string[]) => any;
        deleteCache: (...args: string[]) => any;
        getStrMD5: (str: string) => string;
        generateID: (str: string, len?: number) => string;
    };
    csEvent: import("events").EventEmitter;
    csConfig: {
        updateConfigFile: () => Promise<void>;
        generateConfigSet: (config_name: string, config_remarks?: string) => import("../ifs").ConfigSet;
        copyConfigSet: (configSet: import("../ifs").ConfigSet, config_id?: string, app_id?: string) => Promise<void>;
        deleteConfigSet: (config_id: string, app_id?: string) => Promise<import("../ifs").ConfigSet>;
        readServiceList: () => Promise<import("../ifs").Service[]>;
        writeServiceList: (services: import("../ifs").Service[]) => Promise<void>;
        readServiceGroupList: () => Promise<import("../ifs").ServiceGroup[]>;
        writeServiceGroupList: (groups: import("../ifs").ServiceGroup[]) => Promise<void>;
        readServiceFilter: () => Promise<import("../ifs").ServiceFilter>;
        writeServiceFilter: (filter: import("../ifs").ServiceFilter) => Promise<void>;
        readBindGame: () => Promise<import("../ifs").Game>;
        writeBindGame: (game: import("../ifs").Game) => Promise<void>;
        readConfigSet: (app_id?: string) => Promise<import("../ifs").ConfigSet | undefined>;
        writeConfigSet: (configSet: import("../ifs").ConfigSet, app_id?: string) => Promise<void>;
        readConfigSets: (app_id?: string) => Promise<import("../ifs").ConfigSet[]>;
        readEnableServices: (config_id?: string) => Promise<string[]>;
        wirteEnableService: (service_id: string, enable: boolean, config_id?: string) => Promise<void>;
        readServiceParam: (service_id: string, config_id?: string) => Promise<ParamType>;
        writeServiceParam: (service_id: string, param: ParamType, config_id?: string) => Promise<void>;
    };
    csEditor: {
        plugin: string;
        isLogin: () => Promise<boolean>;
        getUserData: () => Promise<import("../../@types/editor/user").UserData>;
        getLang: () => string;
        getCreatorVersion: () => string;
        getPackageInfo: (name: string) => Editor.Interface.PackageInfo;
        getServiceVersion: () => string; /**
         * 发送 Creator API 的请求
         * @param path  路径 ( 去除 /api/ )
         * @param param 参数
         */
        readGlobalProfile: (key?: string | undefined) => Promise<any>;
        writeGlobalProfile: (key: string, value: any) => Promise<void>;
        readProjectProfile: (key?: string | undefined) => Promise<any>;
        writeProjectProfile: (key: string, value: any) => Promise<void>;
        pluginDevMode: () => Promise<boolean>;
        getCreatorHomePath: () => string;
        getServiceHomePath: () => string;
        getProjectInfo: () => import("../ifs").ProjectInfo;
        getProjectPath: () => string;
        getProjectID: () => string;
        getProjectName: () => string;
        getPreviewRoot: () => string;
        tr: (key: string, obj?: {
            [key: string]: string;
        } | undefined) => string;
        registerI18n: (language: string, key: string, map: import("../../@types/editor/i18n").I18nMap) => void;
        isWin32: () => boolean;
        isMac: () => boolean;
        dialogSelect: (options?: import("../../@types/editor/dialog/public/interface").SelectDialogOptions) => Promise<any>;
        dialogSave: (options?: import("../../@types/editor/dialog/public/interface").SelectDialogOptions) => Promise<any>;
        dialogMsgBox: (type: "info" | "warn" | "error", msg: string, titile?: string | undefined, buttons?: string[] | undefined, defaultId?: number | undefined) => Promise<any>;
        broadcastMsg(msg: string, ...args: any[]): void;
        sendMsg(name: string, msg: string, ...args: any[]): void;
        requestMsg(name: string, msg: string, ...args: any[]): Promise<any>;
    };
    csLogger: {
        printLog: (level: import("../ifs").LogLevel, log: any) => void;
        log: (log: any) => void;
        info: (log: any) => void;
        warn: (log: any) => void;
        error: (log: any) => void;
    };
    csProtocol: {
        getServiceList: () => Promise<any>;
        getVersionDesc: (service_id: string, version: string) => Promise<any>;
        getCustomPlugin: (type?: string) => Promise<import("../ifs").StorePluginVersionInfo>;
        getGroupList: () => Promise<any>;
        getGameList: () => Promise<any>;
        submitLog: (logs: any) => Promise<any>;
        getGameDetail: (app_id: string) => Promise<import("../ifs").GameDetail>;
        getUserInfo: () => Promise<import("../ifs").UserInfo>;
        getServiceUrls: () => Promise<any>;
        createGame: (game_name: string) => Promise<any>;
        openService: (app_id: string, service_id: string) => Promise<any>;
        associateProjectID: (app_id: string, project_id: string, action: 0 | 1) => Promise<any>;
        getRedirectUrl: (redirect_url: string) => Promise<string>;
        getTencentTmpKey: (service_id: string, app_id: string) => Promise<any>;
        createTCBEnv: (service_id: string, app_id: string, alias: string, env_id?: string) => Promise<any>;
        getTCBEnvs: (service_id: string, app_id: string) => Promise<any>;
        getTCBQuotaData: (service_id: string, app_id: string, env_id: string) => Promise<any>;
    };
    csAnalytics: {
        uid: string;
        app_id: string;
        app_name: string;
        service_id: string;
        service_name: string;
        generateAndSubmit: (event: string, ext?: ParamType) => void;
        init: (uid: string, game: import("../ifs").Game, serice: import("../ifs").Service) => void;
        openServicePanel: () => void;
        enterService: () => void;
        downloadService: (plugin_version: string) => void;
        gotoServiceCenter: () => void;
        gotoAccountCenter: () => void;
        gotoDashboardUrl: (target_url?: string) => void;
        gotoSampleUrl: (target_url?: string) => void;
        gotoGuideUrl: (target_url?: string) => void;
        saveParameter: () => void;
        enableService: () => void;
        disableService: () => void;
        showSettingsMenu: () => void;
        enterBindCocosAppID: () => void;
        associateAppID: () => void;
        unassociateAppID: () => void;
        ctrateGame: () => void;
        serviceIntegrationSuccess: (uid: string, game: import("../ifs").Game, serice: import("../ifs").Service, time: "Building Time" | "Editing Time") => void;
        serviceIntegrationFailed: (uid: string, game: import("../ifs").Game, serice: import("../ifs").Service, time: "Building Time" | "Editing Time", cause: string) => void;
        openService: () => void;
        openServiceSuccess: () => void;
        openServiceFailed: (cause: string) => void;
    };
    urls: {};
    /**
     * 传入 key，翻译成当前语言
     * 允许翻译变量 {a}，传入的第二个参数 obj 内定义 a
     * @param key 用于翻译的 key 值
     * @param obj 翻译字段内如果有 {key} 等可以在这里传入替换字段
     */
    pluginTr(pluginName: string, key: string, obj?: {
        [key: string]: string;
    } | undefined): string;
    /**
     * 发送 Creator API 的请求
     * @param path  路径 ( 去除 /api/ )
     * @param param 参数
     */
    apiRequest(path: string, param?: ParamType): Promise<any>;
    getUrl(key: UrlKey, param?: any): Promise<string>;
};

declare global {
    const ccService: CCService
}
