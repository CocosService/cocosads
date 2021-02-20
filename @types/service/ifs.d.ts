import { IInternalBuildOptions, InternalBuildResult } from "../@types/builder/protect";
export interface DownloadCallback {
    (error: Error | null, data: {
        status: string;
        progress: number;
    } | null): void;
}
export interface ProjectInfo {
    uuid: string;
    name: string;
    path: string;
    type: string;
    tmpDir: string;
}
export interface Functions {
    [name: string]: (...args: any[]) => any | void;
}
export interface ServicePlugin {
    _innerHTML: string;
    template: string;
    style?: string;
    $?: any;
    methods?: Functions;
    load?: (arg: any) => any | void;
    unload?: () => any | void;
    ready?: (arg: any | void) => any | void;
    close?: () => any | void;
    canClose?: () => boolean | Promise<boolean>;
    beforeClickGotoLink?: (arg: any) => Promise<boolean> | boolean;
    beforeOpenService?: (arg: any) => Promise<boolean> | boolean;
    afterOpenService?: (arg: any) => Promise<void> | void;
    failureOpenService?: (arg: any) => Promise<void> | void;
}
export declare type ParamType = {
    [name: string]: any;
};
export declare type PopupType = "dockable" | "simple";
export interface ServicePluginItemContent {
    main: string;
}
export declare type DisableContentType = "all" | "name" | "version" | "description" | "jump" | "price" | "platform";
export interface ServicePluginDetailContent {
    main: string;
    disables?: DisableContentType[];
}
export interface ServicePluginPopupContent {
    main: string;
    title?: string;
    height?: number;
    width?: number;
}
export declare type ContentType = "item" | "detail" | "popup";
export interface ServicePluginContents {
    item?: ServicePluginItemContent;
    detail?: ServicePluginDetailContent;
    popup?: ServicePluginPopupContent;
}
export interface ServicePluginBuilderInfo {
    main: string;
}
export interface ServicePluginInfo {
    path: string;
    name: string;
    version: string;
    author?: string;
    upgrade?: string;
    contents?: ServicePluginContents;
    builder?: ServicePluginBuilderInfo;
}
export interface ContentMenuItem {
    id: string;
    name: string;
    isTop?: boolean;
    isBottom?: boolean;
    subMenu?: ContentMenuItem[];
}
export interface UserInfo {
    access_token: string;
    cocos_uid: string;
    corporation_id: number;
    created_time: string;
    email: string;
    /**
     * 0-未拥有,1-拥有
     */
    is_mobile: 0 | 1;
    /**
     * 0-未拥有,1-拥有
     */
    is_mobile_company: 0 | 1;
    last_login_address: string;
    last_login_ip: string;
    last_login_time: string;
    nickname: string;
    refresh_token: string;
    token_expires: number;
    uid: string;
    updated_time: string;
    /**
     * 认证信息:0-未认证,1-个人认证,2--公司基本认证,4-公司高级认证,按位运算计算
     */
    verification_status: 0 | 1 | 2 | 4;
}
export interface Game {
    app_id: string;
    name: string;
    c_id: string;
}
export interface ConfigSet {
    config_id: string;
    config_name: string;
    config_remarks: string;
}
export interface GameDetail {
    app_id: string;
    game_name: string;
    corporation_id: string;
    service: string[];
    verification_status: 0 | 1 | 2 | 3;
}
export interface Service {
    service_id: string;
    service_name: string;
    service_icon: string;
    service_desc: string;
    service_guide_url: string;
    service_sample_url: string;
    service_dev_url: string;
    service_type: '0' | '1' | '2' | '3';
    service_type_zh: string;
    support_platform: string[];
    package_download_url: string;
    package_version_desc: string;
    service_component_name: string;
    package_versions: string[];
    build_platform: string[];
    require_verify: 0 | 1 | 2 | 3;
    service_price: string;
    packpage_version_desc: string;
    service_protocol: string;
    service_group_id?: string;
    service_group: string;
    not_servic: boolean;
    enable?: boolean;
}
export interface Group {
    group_id: string;
    group_name: string;
    group_icon: string;
    group_desc: string;
    group_component_name: string;
    package_download_url: string;
    package_version_desc: string;
    package_versions: string[];
}
export interface StorePluginVersionInfo {
    dependency: string;
    download_url: string;
    version: string;
}
export interface ServiceGroup {
    name: string;
    services: Service[];
}
export declare type UrlKey = "client_signin_url" | "cocos_dashboard_url" | "cocos_game_create_url" | "cocos_service_url" | "cocos_service_console_url" | "cocos_service_open_url" | "cocos_mgobe_server_url" | "cocos_create_t_p_sub_url " | "cocos_create_t_c_sub_url" | "cocos_create_a_p_sub_url" | "cocos_create_a_c_sub_url" | "cocos_personal_verify_url" | "cocos_company_verify_url" | "cocos_mobile_bind_personal_url" | "cocos_mobile_bind_company_url";
export declare type LogLevel = "log" | "info" | "warn" | "error";
export declare type ConfigSetAction = 'add' | 'edit' | 'copy';
export declare type FilterStatus = "All" | "Enable" | "Disable";
export interface ServiceFilter {
    status: FilterStatus;
    platforms: string[];
}
export interface ServiceConfigInfo {
    service_id: string;
    service_component_name: string;
    enable: boolean;
    params: ParamType;
    builder: string;
}
export interface CSOptions {
    configID: string;
    services: ServiceConfigInfo[];
}
export interface TaskOption extends IInternalBuildOptions {
    packages: {
        "cocos-service": CSOptions;
    };
}
export interface BuildResult extends InternalBuildResult {
}
declare type ServiceHooks = (options: TaskOption, result: BuildResult) => Promise<void>;
export interface ServivePluginBuilder {
    onServiceStatusChanged?: (projectPath: string, info: ServiceConfigInfo) => void;
    onBeforeBuild?: ServiceHooks;
    onBeforeCompressSettings?: ServiceHooks;
    onAfterCompressSettings?: ServiceHooks;
    onAfterBuild?: ServiceHooks;
}


export interface PanelThis {
    template: string;
    style: string;
    $: {[name: string]: HTMLElement};
    vm: Vue,
    ready: (info: {game: Game, service: Service, param: ParamType} | any) => any;
    canClose: (info: any) => Promise<boolean>;
    close: () => any;
    beforeOpenService: (arg: any) => Promise<boolean>;
    afterOpenService: (arg: any) => Promise<void>;
    failureOpenService: (arg: {service: Service, reason: any}) => any;
    beforeClickGotoLink: (url: string) => Promise<boolean>;
}


