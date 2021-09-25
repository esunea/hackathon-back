import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(body: any): string;
    getDock(): any;
    setButton(): string;
    getButton(): any;
}
