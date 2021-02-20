import { Game, PanelThis, ParamType, Service } from '../../@types/service/ifs'
import { } from '../../@types/service/utils'

export const template:string = ccService.csFile.readFile(__dirname, "./detail.html");

export const style:string =  ccService.csFile.readFile(__dirname, "./detail.css");

export const $:any = { cocosads: '#cocosads' }

export function ready(this: PanelThis, info: {game: Game, service: Service, param: ParamType}): void {
    console.log(__dirname, "export function ready(service: any): void")
    console.log(ccService.pluginTr(info.service.service_component_name, "name"));
    console.log(info);
}

export function close(): void {
    console.log(__dirname, "export function close(): void")
}

export async function beforeOpenService(this: PanelThis, arg: any): Promise<boolean> {
    console.log(__dirname, "export async function beforeOpenService(arg: any): Promise<boolean>")
    return true;
}

export async function afterOpenService(this: PanelThis, arg: any): Promise<void> {
    console.log(__dirname, "export async function afterOpenService(arg: any): Promise<void>")
}

export async function failureOpenService(this: PanelThis, arg: {service: Service, reason: any}): Promise<void> {
    console.log(__dirname, "export function failureOpenService(arg: any): void")
}

export async function beforeClickGotoLink(this: PanelThis, url: string): Promise<boolean> {
    console.log(__dirname, "export async function beforeClickGotoLink(url: string): Promise<boolean>")
    return true;
}
