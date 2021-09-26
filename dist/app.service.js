"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    constructor() {
        this.docking_incoming = {};
        this.docking_incoming2 = {};
        this.departValue = {};
        this.porteValue = {};
        this.porteValue2 = {};
        this.capteurValue = {};
        this.buttonValue = {};
    }
    getDock() {
        return this.capteurValue;
    }
    setDock(dock) {
        this.capteurValue = dock;
    }
    getButton(param) {
        if (this.buttonValue[param.id] != undefined) {
            let button = this.buttonValue[param.id];
            this.buttonValue[param.id] = undefined;
            return button;
        }
        return false;
    }
    setButton(body, param) {
        this.buttonValue[param.id] = body;
    }
    getHello() {
        return 'OK';
    }
    setDepart(body) {
        this.departValue[body.seqVoyage] = body.depart;
    }
    getDepart(body) {
        if (this.departValue[body.id] != undefined) {
            let depart = this.departValue[body.id];
            this.departValue[body.id] = undefined;
            return { depart: true };
        }
        return { depart: false };
    }
    setPorte(body) {
        console.log("body", body);
        this.porteValue[body.seqVoyage] = body.porte;
        if (body.seqVoyage == this.docking_incoming2.tripNumber)
            this.porteValue2[body.porte] = { porte: body.porte, data: this.docking_incoming2 };
    }
    getPorte(body) {
        console.log("id", body);
        if (this.porteValue[body.id] != undefined) {
            let porte = this.porteValue[body.id];
            this.porteValue[body.id] = undefined;
            return { porte: porte };
        }
        return { porte: null };
    }
    getPorte2(body) {
        if (this.porteValue2[body.id] != undefined) {
            let porte = this.porteValue2[body.id];
            return porte;
        }
        return null;
    }
    setDockingIncoming(body) {
        this.docking_incoming = body;
        this.docking_incoming2 = body;
    }
    getDockingIncoming() {
        if (this.docking_incoming) {
            let tmp = this.docking_incoming;
            this.docking_incoming = undefined;
            return tmp;
        }
        return undefined;
    }
    getDockingIncoming2() {
        if (this.docking_incoming2) {
            let tmp = this.docking_incoming2;
            return tmp;
        }
        return undefined;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map