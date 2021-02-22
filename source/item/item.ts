import { PanelThis } from '../../@types/service/ifs';
import { } from '../../@types/service/utils'

export const template:string = ccService.csFile.readFile(__dirname, "./item.html");

export const style:string =  ccService.csFile.readFile(__dirname, "./item.css");

export const $:any = { test: '#test' }

export function ready(this: PanelThis, info: any): void {
    console.log(__dirname, "export function ready(service: any): void")

    let listener = () => ccService.csEvent.emit('enter-service-detail', info.service);
    console.log(ccService.pluginTr(info.service_component_name, "name"));
      
    this.$.test.removeEventListener('click', listener);
    this.$.test.addEventListener('click', listener);
}

export function close(this: PanelThis): void {
    console.log(__dirname, "export function close(): void");
}
