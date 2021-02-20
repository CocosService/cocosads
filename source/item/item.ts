import { PanelThis } from '../../@types/service/ifs';
import { } from '../../@types/service/utils'

let listener: { (): boolean; (this: HTMLElement, ev: MouseEvent): any; (this: HTMLElement, ev: MouseEvent): any; (this: HTMLElement, ev: MouseEvent): any; } | null = null;

export const template:string = ccService.csFile.readFile(__dirname, "./item.html");

export const style:string =  ccService.csFile.readFile(__dirname, "./item.css");

export const $:any = { test: '#test' }

export function ready(this: PanelThis, info: any): void {
    console.log(__dirname, "export function ready(service: any): void")

    listener = () => ccService.csEvent.emit('enter-service-detail', info.service);
    console.log(ccService.pluginTr(info.service_component_name, "name"));
      
    this.$.test.addEventListener('click', listener);
    this.$.test.removeEventListener('click', listener);
}

export function close(this: PanelThis): void {
    console.log(__dirname, "export function close(): void")
    if (listener !== null) this.$.test.removeEventListener('click', listener);
}
