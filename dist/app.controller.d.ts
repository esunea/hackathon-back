import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(body: any): string;
    getDock(): any;
    setButton(body: any, param: any): string;
    getButton(param: any): any;
    setDepart(body: any): string;
    getDepart(param: any): {
        depart: boolean;
    };
    setPorte(body: any): string;
    getPorte(param: any): {
        porte: any;
    };
    getPorte2(param: any): any;
    docking_incoming(body: any): void;
    docking_incoming_check(): any;
    docking_incoming_check2(): any;
}
