import { Game, ParamType, Service } from 'editor-build-helper/@types/service/ifs'

export interface PanelThis {
    template: string;
    style: string;
    $: {
        analytics: string | HTMLElement;
        appid: string | HTMLElement;
        store: string | HTMLElement;
        btnSave: string | HTMLElement;
    };
    ready: (info: { game: Game, service: Service, param: ParamType } | any) => any;
}

export const template: string = ccService.csFile.readFile(__dirname, "./detail.html");

export const style: string = "";

export const $: any = {
    analytics: '#analytics',
    appid: '#appid',
    store: '#store',
    btnSave: '#btnSave',
}

export function ready(this: PanelThis, info: { game: Game, service: Service, param: ParamType }): void {
    console.log(__dirname, "export function ready(service: any): void")
    // @ts-ignore
    this.$.appid.value = info.param.appid || info.game.app_id;
    // @ts-ignore
    this.$.store.value = info.param.store || '';
    let clicked = () => {
        // @ts-ignore
        if (this.$.appid.value === '' || this.$.store.value === '') {
            return ccService.csLogger.warn('必填参数不允许为空');
        }
        // @ts-ignore
        ccService.csEvent.emit('service:save-param', info.service.service_id, { appid: this.$.appid.value, store: this.$.store.value });
        ccService.csLogger.info('保存参数成功');
    }
    if (this.$.btnSave instanceof HTMLElement) {
        this.$.btnSave.removeEventListener('click', clicked);
        this.$.btnSave.addEventListener('click', clicked);
    }
}