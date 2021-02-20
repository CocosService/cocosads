declare interface IRedirectInfo {
    type: string; // 跳转资源的类型
    uuid: string; // 跳转资源的 uuid
}

declare interface IAssetInfo {
    name: string; // 资源名字
    displayName: string; // 资源用于显示的名字
    source: string; // url 地址
    path: string; // loader 加载的层级地址
    url: string; // loader 加载地址会去掉扩展名，这个参数不去掉
    file: string; // 绝对路径
    uuid: string; // 资源的唯一 ID
    importer: string; // 使用的导入器名字
    type: string; // 类型
    isDirectory: boolean; // 是否是文件夹
    library: { [key: string]: string }; // 导入资源的 map
    subAssets: { [key: string]: IAssetInfo }; // 子资源 map
    visible: boolean; // 是否显示
    readonly: boolean; // 是否只读
    instantiation?: string; // 虚拟资源可以实例化成实体的话，会带上这个扩展名
    redirect?: IRedirectInfo; // 跳转指向资源
    meta?: any;
    fatherInfo?: any;
}
declare interface IBuildAssetInfo extends IAssetInfo {
    url: string;
    // fatherUuid?: string | undefined;
    userData?: any;
}
declare type IUuid = string; // 需要是符合 uuid 标准的字符型, 例如：
declare type IUrl = string; // 需要的是符合 url 标准的字符串，例如 asset/script/text.ts
declare type IAssetInfoMap = Record<IUuid, IAssetInfo>;
declare type IUuidDependMap = Record<IUuid, IUuid[]>;
declare type IJsonGroupMap = Record<IUuid, IJSONGroupItem>;
declare type IAssetGroupMap = Record<IUuid, IAssetGroupItem>;
declare interface IDefaultGroup {
    assetUuids: IUuid[];
    scriptUuids: IUuid[];
    jsonUuids: IUuid[];
}

// TODO meta 的类型定义
declare type IMetaMap = Record<IUuid, any>;
declare type IJsonMap = Record<IUuid, any>;
declare type IInstanceMap = Record<IUuid, any>;

declare interface IImageTask {
    src: string;
    dest: string;
    presetId: string;
    hasAlpha: boolean;
    mtime?: any;
}
declare type ICompressOptions = Record<string, number>;
declare interface IAssetGroupItem {
    // 分组名字
    // name: string;
    // 分组的根 url
    baseUrls: string[];
    // 脚本编译后的实际地址
    scriptDest: string;
    // 脚本 uuid 列表
    scriptUuids: IUuid[];
    // raw 资源 uuid 列表
    assetUuids: IUuid[];
}

declare interface IJSONGroupItem {
    // 分组名字
    name: string;
    // 分组名字
    type: string;
    // json 资源 uuid 列表
    jsonUuids: IUuid[];
}

declare interface IAssetGroupOptions {
    // 脚本打包后的输出路径
    scriptUrl: string;
    baseUrl: string;
}

declare type IGroupType = 'json' | 'script' | 'asset';
declare interface PacInfo {
    meta: any;
    asset: IBuildAssetInfo;
    spriteFrames: any[];
    relativePath: string;
    relativeDir: string;
}

type IUpdateType = 'asset-change' | 'asset-add' | 'asset-delete';
interface IUpdateInfo {
    type: IUpdateType;
    uuid: string;
}
