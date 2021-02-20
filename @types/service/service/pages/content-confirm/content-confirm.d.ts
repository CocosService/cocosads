import Vue from '../../../vue';
declare const _default: import("../../../vue/types/vue").ExtendedVue<Vue, {
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
export default _default;
