import Vue from '../../../vue';
import { Game, Service } from '../../../ifs';
declare const _default: import("../../../vue/types/vue").ExtendedVue<Vue, {
    isLogin: boolean;
    defaultSelected: string;
    selected: string;
    _games: any[];
    games: {
        personGame: {
            type: string;
            list: Service[];
        };
        companyGame: {
            type: string;
            list: Service[];
        };
    };
    game: Game;
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
export default _default;
