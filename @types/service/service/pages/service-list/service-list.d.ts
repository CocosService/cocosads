import Vue from '../../../vue';
import { FilterStatus, Service, ServiceGroup } from '../../../ifs';
declare const _default: import("../../../vue/types/vue").ExtendedVue<Vue, {
    filterStatus: FilterStatus;
    filterPlatforms: Set<string>;
}, {
    getServiceShown(service: Service): boolean;
    checkElementOnSet<T>(array: T[], set: Set<T>): boolean;
    getGroupByName(groupService: ServiceGroup[], name: string): ServiceGroup;
    handleItemClick(service: any): void;
    handleConfigChange(e: any): void;
    handleShowMenu(e: MouseEvent): void;
    handleShowFilter(): void;
}, {
    groups: ServiceGroup[];
}, {
    game: any;
    services: unknown[];
    config: any;
    configs: unknown[];
    filter: any;
}>;
export default _default;
