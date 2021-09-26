export declare class AppService {
    docking_incoming: any;
    docking_incoming2: any;
    departValue: any;
    porteValue: any;
    porteValue2: any;
    capteurValue: any;
    buttonValue: any;
    getDock(): any;
    setDock(dock: any): void;
    getButton(param: any): any;
    setButton(body: any, param: any): void;
    getHello(): string;
    setDepart(body: any): void;
    getDepart(body: any): {
        depart: boolean;
    };
    setPorte(body: any): void;
    getPorte(body: any): {
        porte: any;
    };
    getPorte2(body: any): any;
    setDockingIncoming(body: any): void;
    getDockingIncoming(): any;
    getDockingIncoming2(): any;
}
