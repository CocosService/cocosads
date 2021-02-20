import { ConfigSet, Service } from '../../ifs';
export declare const component: {
    template: string;
    data(): {
        pkgOptions: {};
        configs: ConfigSet[];
        services: Service[];
        config_id: string;
        serviceTips: string;
        showAnalytics: boolean;
        showAnalyticsProtocol: boolean;
        enableServices: Service[];
    };
    methods: {
        emitChange(key: string, value: any): Promise<void>;
        handleSelectChange(e: any): Promise<void>;
        chageAnalyticsStatus(enableServiceIds: Set<string>): void;
        changeEnableServiceTips(config_id: string): Promise<void>;
        handleEnableAnalytics(e: any): Promise<void>;
        handleGotoService(): void;
    };
    mounted(): Promise<void>;
};
