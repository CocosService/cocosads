declare const _default: {
    methods: {
        tr(key: string, obj?: {
            [key: string]: string;
        } | undefined): string;
    };
    components: {
        'service-list': import("../../vue/types/vue").ExtendedVue<import("../../vue/types").default, {
            filterStatus: import("../../ifs").FilterStatus;
            filterPlatforms: Set<string>;
        }, {
            getServiceShown(service: import("../../ifs").Service): boolean;
            checkElementOnSet<T>(array: T[], set: Set<T>): boolean;
            getGroupByName(groupService: import("../../ifs").ServiceGroup[], name: string): import("../../ifs").ServiceGroup;
            handleItemClick(service: any): void;
            handleConfigChange(e: any): void;
            handleShowMenu(e: MouseEvent): void;
            handleShowFilter(): void;
        }, {
            groups: import("../../ifs").ServiceGroup[];
        }, {
            game: any;
            services: unknown[];
            config: any;
            configs: unknown[];
            filter: any;
        }>;
        'service-header': import("../../vue/types/vue").ExtendedVue<import("../../vue/types").default, unknown, {
            backHome(): void;
            gotoService(): Promise<void>;
        }, unknown, {
            showToLink: boolean;
        }>;
        'group-item': import("../../vue/types/vue").ExtendedVue<import("../../vue/types").default, {
            title: any;
            unfolded: boolean;
            icon: any;
            hasUpdate: boolean;
            hideTips: string;
            imageStyle: {
                height: string;
                width: string;
                "margin-top": string;
                "-webkit-filter": string;
            };
        }, {
            handleItemClick(service: import("../../ifs").Service): void;
            handleFoldClick(): void;
        }, unknown, {
            group: any;
        }>;
        'service-item': import("../../vue/types/vue").ExtendedVue<import("../../vue/types").default, {
            serviceInfo: import("../../ifs").ServicePluginInfo | undefined;
            servicePlugin: import("../../ifs").ServicePlugin | undefined;
            hasCustomItem: boolean;
            content: any;
            nameTitle: any;
            hasGroup: boolean;
            hasUpdate: boolean;
            headerStyle: {
                display: string;
                'justify-content': string;
                padding: string;
            };
            contentStyle: {
                padding: string;
                'font-size': string;
                'line-height': string;
                color: string;
            };
            imgStyle: {
                height: string;
                width: string;
                "margin-top": string;
                "-webkit-filter": string;
            };
            titleStyle: {
                color: string;
                width: string;
                "font-size": string;
                "margin-left": string;
                "margin-top": string;
                "text-overflow": string;
                overflow: string;
                "white-space": string;
            };
        }, {
            getRealPath(filename: string): string;
            handleItemClick(): void;
            clactureVersion(): void;
            setItemHover(isHover: boolean): void;
        }, unknown, {
            service: any;
        }>;
        'content-menu': import("../../vue/types/vue").ExtendedVue<import("../../vue/types").default, {
            show: boolean;
            menuStyle: {
                top: string;
                left: string;
            };
            positionContainerStyle: {
                position: string;
                width: string;
                top: string;
                left: string;
                right: string;
            };
            subMenuStyle: {
                position: string;
                left: string;
                right: string;
                top: string;
            };
            curSubMenuItemId: string;
        }, {
            setupItemsTopAndBottom(items: import("../../ifs").ContentMenuItem[]): void;
            itemClick(item: import("../../ifs").ContentMenuItem, e: MouseEvent): void;
            onSubMenuItemEnter(item: import("../../ifs").ContentMenuItem): void;
            onSubMenuItemLeave(): void;
        }, unknown, {
            position: any;
            items: unknown[];
            callback: Function;
        }>;
        'content-confirm': import("../../vue/types/vue").ExtendedVue<import("../../vue/types").default, {
            show: boolean;
            t_btns: unknown[];
            t_high: number;
            contentStyle: {
                'margin-top': string;
                'word-wrap': string;
                'line-height': string;
                'overflow-y': string;
                'max-height': string;
            };
        }, {
            handleClose(): void;
            btnClick(id: number): void;
        }, unknown, {
            title: string;
            msg: string;
            btns: unknown[];
            high: number;
            callback: Function;
        }>;
        'service-detail': import("../../vue/types/vue").ExtendedVue<import("../../vue/types").default, {
            enable: boolean;
            srv: import("../../ifs").Service;
            serviceInfo: import("../../ifs").ServicePluginInfo | undefined;
            servicePlugin: import("../../ifs").ServicePlugin | undefined;
            service_price: any;
            serviceVersion: string;
            hasUpdate: boolean;
            shows: {
                all: boolean;
                name: boolean;
                version: boolean;
                description: boolean;
                jump: boolean;
                price: boolean;
                platform: boolean;
            };
        }, {
            pluginReady(): Promise<void>;
            pluginClose(): Promise<void>;
            backHome(): void;
            getRealPath: (filename: string) => string;
            configDevUrl(): void;
            calcShows(): void;
            versionClick(): void;
            updateClick(): void;
            switchVersion(targetVersion: string): void;
            checkServiceOnGame(): Promise<boolean>;
            checkAllowOpenService(): Promise<boolean>;
            installPlugin(cb: (success: boolean) => void): Promise<void>;
            enableService(enable: boolean): Promise<void>;
            doOpenService(): Promise<any>;
            openServiceRequestServer(): Promise<any>;
            handleEnabelService(e: Event): Promise<void>;
            handleGotoLink(type: "guide" | "dev" | "sample"): Promise<void>;
            gotoService(): Promise<void>;
        }, unknown, {
            game: any;
            service: any;
        }>;
        'bind-game': import("../../vue/types/vue").ExtendedVue<import("../../vue/types").default, {
            isLogin: boolean;
            defaultSelected: string;
            selected: string;
            _games: any[];
            games: {
                personGame: {
                    type: string;
                    list: import("../../ifs").Service[];
                };
                companyGame: {
                    type: string;
                    list: import("../../ifs").Service[];
                };
            };
            game: import("../../ifs").Game;
        }, {
            handleBindGame(): Promise<void>;
            handleCreateGame(): Promise<void>;
            handleRefreshGame(): void;
            handleSelectChange(e: any): void;
            handleClose(): void;
            refreshGame(): Promise<void>;
            computeGame(): Promise<void>;
        }, unknown, {
            islogin: boolean;
        }>;
        'popup-container': import("../../vue/types/vue").ExtendedVue<import("../../vue/types").default, {
            rectangleStyle: {
                'max-width': string;
                'max-height': string;
            };
        }, unknown, unknown, {
            mh: number;
            mw: number;
            html: string;
        }>;
        'version-manager': import("../../vue/types/vue").ExtendedVue<import("../../vue/types").default, {
            srv: import("../../ifs").Service;
            srvInfo: import("../../ifs").ServicePluginInfo | undefined;
            versionStr: string;
            upgradeStr: string;
            localVersion: string;
            remoteVersion: string;
            enableUpdate: boolean;
            enableSwitch: boolean;
            selected: string;
        }, {
            handleClose(): void;
            handleSelectChange(e: any): void;
            handleSwitch(): void;
            handleUpdate(): void;
        }, unknown, {
            service: any;
            action: string;
        }>;
        'config-set': import("../../vue/types/vue").ExtendedVue<import("../../vue/types").default, {
            show: boolean;
            enableConfirm: boolean;
            title: string;
            configName: string;
            configRemarks: string;
            act: import("../../ifs").ConfigSetAction;
        }, {
            getCopedConfigName(name: string): string;
            handleClose(): void;
            handleConfirm(): void;
        }, unknown, {
            action: string;
            config: any;
            configs: unknown[];
        }>;
        'service-filter': import("../../vue/types/vue").ExtendedVue<import("../../vue/types").default, {
            platforms: string[];
            platformSet: Set<string>;
            status: number;
            refresh: boolean;
        }, {
            refreshPanel(): void;
            clacAllPlatforms(): void;
            handleConfirm(): void;
            handlePlatformClick(e: any): void;
            handleClose(): void;
        }, unknown, {
            services: unknown[];
            filter: any;
        }>;
    };
};
export default _default;
