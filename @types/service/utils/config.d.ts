import { ConfigSet, Game, ParamType, Service, ServiceFilter, ServiceGroup } from "../ifs";
declare const _default: {
    /**
     * 升级配置文件
     */
    updateConfigFile: () => Promise<void>;
    /**
     * 根据配置集名称生成配置集，自动分配配置集ID
     * @param config_name    配置集名称
     * @param config_remarks 配置集备注
     */
    generateConfigSet: (config_name: string, config_remarks?: string) => ConfigSet;
    /**
     * 从指定的配置集拷贝出一份新的配置，使用传入的配置集替代
     * @param configSet 要写入的配置集
     * @param config_id 被拷贝的配置集 ID （若不传则表明当前使用的）
     * @param app_id    指定的 AppID，为空则表示当前绑定的
     * @throws 配置文件错误
     */
    copyConfigSet: (configSet: ConfigSet, config_id?: string, app_id?: string) => Promise<void>;
    /**
     * 删除指定的 AppID 使用的配置集信息
     * @param config_id 要写入的配置集
     * @param app_id    指定的 AppID，为空则表示当前绑定的
     * @throws 配置文件错误
     */
    deleteConfigSet: (config_id: string, app_id?: string) => Promise<ConfigSet>;
    /**
     * 读取所有服务列表
     */
    readServiceList: () => Promise<Service[]>;
    /**
     * 写入所有服务列表
     * @param services 服务列表
     */
    writeServiceList: (services: Service[]) => Promise<void>;
    /**
     * 读取所有服务分组列表
     */
    readServiceGroupList: () => Promise<ServiceGroup[]>;
    /**
     * 写入所有服务分组列表
     * @param groups 服务分组列表
     */
    writeServiceGroupList: (groups: ServiceGroup[]) => Promise<void>;
    /**
     * 读取当前用户配置的服务过滤器信息
     */
    readServiceFilter: () => Promise<ServiceFilter>;
    /**
     * 写入当前用户配置的服务过滤器信息
     * @param filter 过滤器信息
     */
    writeServiceFilter: (filter: ServiceFilter) => Promise<void>;
    /**
     * 读取当前绑定的游戏
     */
    readBindGame: () => Promise<Game>;
    /**
     * 写入当前绑定的游戏
     * @param game 游戏
     */
    writeBindGame: (game: Game) => Promise<void>;
    /**
     * 获取指定 AppID 的上一次选择的配置集
     * @param app_id 指定的 AppID，为空则表示当前绑定的
     */
    readConfigSet: (app_id?: string) => Promise<ConfigSet | undefined>;
    /**
     * 写入指定的 AppID 使用的配置集信息，并更新，若不存在则新建
     * @param configSet 要写入的配置集
     * @param app_id    指定的 AppID，为空则表示当前绑定的
     */
    writeConfigSet: (configSet: ConfigSet, app_id?: string) => Promise<void>;
    /**
     * 获取指定 AppID 下所有配置集，不传则表示获取当前绑定的 AppID 下的所有配置集
     * @param app_id 指定的 AppID（若不传表示当前绑定的 AppID）
     */
    readConfigSets: (app_id?: string) => Promise<ConfigSet[]>;
    /**
     * 获取当前 AppID 指定配置集的开通的服务
     * @param config_id 配置集 ID （若不传则表明当前使用的）
     * @throws 配置文件错误
     */
    readEnableServices: (config_id?: string) => Promise<string[]>;
    /**
     * 写入当前 AppID 指定配置集指定服务的开通状态
     * @param service_id 要操作的服务ID
     * @param enable     服务启用状态
     * @param config_id  配置集 ID （若不传则表明当前使用的）
     * @throws 配置文件错误
     */
    wirteEnableService: (service_id: string, enable: boolean, config_id?: string) => Promise<void>;
    /**
     * 获取当前 AppID 指定配置集下指定服务的参数
     * @param service_id 服务ID
     * @param config_id  配置集 ID （若不传则表明当前使用的）
     * @throws 配置文件错误
     */
    readServiceParam: (service_id: string, config_id?: string) => Promise<ParamType>;
    /**
     * 在当前 AppID 指定配置集指定服务中写入参数信息
     * @param service_id 服务ID
     * @param param      要写入的参数
     * @param config_id  配置集 ID （若不传则表明当前使用的）
     * @throws 配置文件错误
     */
    writeServiceParam: (service_id: string, param: ParamType, config_id?: string) => Promise<void>;
};
export default _default;
