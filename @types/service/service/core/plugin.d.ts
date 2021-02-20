import { ContentType, ServicePlugin, ServicePluginInfo } from '../../ifs';
declare const _default: {
    pluginInfoMap: Map<string, ServicePluginInfo>;
    pluginMap: Map<string, ServicePlugin>;
    install: boolean;
    /**
     * 扫描本地所有插件信息
     */
    scanfServicePluginInfos: () => void;
    /**
     * 注册插件信息
     * @param servicePath 插件路径
     */
    insertServicePluginInfo: (pluginName: string) => void;
    /**
     * 获取插件信息
     * @param pluginName 插件名称
     */
    getServicePluginInfo: (pluginName: string) => ServicePluginInfo | undefined;
    /**
     * 根据插件信息扫描UI插件
     */
    scanfServicePlugins: () => void;
    /**
     * 注册UI插件
     * @param pluginInfo 插件信息
     */
    insertServicePlugin: (pluginInfo: ServicePluginInfo | undefined) => void;
    /**
     * 获取指定类型和名称的UI插件
     * @param pluginName 插件名称
     * @param content    UI 类型
     */
    getServicePlugin: (pluginName: string, content: ContentType) => ServicePlugin | undefined;
    /**
     * 加载所有UI插件
     */
    loadAllServicePlugins: () => Promise<void>;
    /**
     * 加载指定UI插件
     * @param pluginName 插件名称
     */
    loadServicePlugin: (pluginName: string) => Promise<void>;
    /**
     * 加载指定UI插件
     * @param key    插件ID
     * @param plugin 插件对象
     */
    _loadServicePlugin: (key: string, plugin: ServicePlugin) => Promise<void>;
    createInnterHTML: (plugin: ServicePlugin, shadowRoot: ShadowRoot, pluginName: string, content: ContentType) => void;
    /**
     * 卸载所有UI插件
     */
    unloadAllServicePlugins: () => Promise<void>;
    /**
     * 卸载指定UI插件
     * @param pluginName 插件名称
     */
    unloadServicePlugin: (pluginName: string) => Promise<void>;
    /**
     * 卸载指定UI插件
     * @param key    插件ID
     * @param plugin 插件对象
     */
    _unloadServicePlugin: (key: string, plugin: ServicePlugin) => Promise<void>;
    /**
     * 注册插件的多语言信息
     * @param pluginName 插件名称
     */
    registerI18n: (pluginName: string) => void;
    /**
     * 判断本地插件是否存在
     * @param pluginName
     */
    pluginExists: (pluginName: string) => boolean;
    uninstallPlugin: (pluginName: string) => Promise<void>;
    /**
     * 下载安装插件
     * @param pluginName 插件名称
     * @param packageUrl 插件下载地址
     * @param callback   回调地址
     */
    installPlugin: (pluginName: string, packageUrl: string, callback?: ((staus: string, success: boolean) => void) | undefined) => Promise<boolean>;
    /**
     * 重新加载指定插件（用户插件升级或者开发者开发插件）
     * @param pluginName 插件名称
     */
    reloadPlugin: (pluginName: string) => Promise<void>;
    /**
     * 根据插件包的下载url获取
     * @param url 插件包的下载 URL
     */
    getPluginVerByURL: (url: string) => string;
    /**
     * 获取指定版本的下载路径
     * @param url 最新版的下载路径
     * @param ver 指定的版本号
     */
    getPluginUrlByVer: (url: string, ver: string) => string;
};
export default _default;
