import { } from '../../@types/service/utils'
import { PanelThis } from '../../@types/service/ifs'


export const template:string = ccService.csFile.readFile(__dirname, "./popup.html");

export const style:string =  ccService.csFile.readFile(__dirname, "./popup.css");

export const $:any = {
    test: '#test'
}

export function ready(this: PanelThis): any {
    console.log(__dirname, "export function ready(): void")
}

let _canClose = false;

export function canClose(this: PanelThis): boolean | Promise<boolean> {
    console.log(__dirname, "export function canClose(): void")
    setTimeout(() => _canClose = true, 5000);
    !_canClose && ccService.csLogger.log('等待 5s 之后在关闭')
    return _canClose;
}

export function close(this: PanelThis): any {
    console.log(__dirname, "export function close(): void")
}
