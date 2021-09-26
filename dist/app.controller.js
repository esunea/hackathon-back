"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello(body) {
        this.appService.setDock(body);
        return this.appService.getHello();
    }
    getDock() {
        return this.appService.getDock();
    }
    setButton(body, param) {
        this.appService.setButton(body, param);
        return this.appService.getHello();
    }
    getButton(param) {
        return this.appService.getButton(param);
    }
    setDepart(body) {
        this.appService.setDepart(body);
        return this.appService.getHello();
    }
    getDepart(param) {
        return this.appService.getDepart(param);
    }
    setPorte(body) {
        this.appService.setPorte(body);
        return this.appService.getHello();
    }
    getPorte(param) {
        return this.appService.getPorte(param);
    }
    getPorte2(param) {
        return this.appService.getPorte2(param);
    }
    docking_incoming(body) {
        this.appService.setDockingIncoming(body);
    }
    docking_incoming_check() {
        return this.appService.getDockingIncoming();
    }
    docking_incoming_check2() {
        return this.appService.getDockingIncoming2();
    }
};
__decorate([
    (0, common_1.Post)("/dock"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)("/dock"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getDock", null);
__decorate([
    (0, common_1.Post)("/button/:id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "setButton", null);
__decorate([
    (0, common_1.Get)("/button/:id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getButton", null);
__decorate([
    (0, common_1.Post)("/depart/set"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "setDepart", null);
__decorate([
    (0, common_1.Get)("/depart/:id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getDepart", null);
__decorate([
    (0, common_1.Post)("/porte/set"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "setPorte", null);
__decorate([
    (0, common_1.Get)("/porte/:id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getPorte", null);
__decorate([
    (0, common_1.Get)("/porte2/:id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getPorte2", null);
__decorate([
    (0, common_1.Post)("/docking/incoming"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "docking_incoming", null);
__decorate([
    (0, common_1.Get)("/docking/incoming"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "docking_incoming_check", null);
__decorate([
    (0, common_1.Get)("/docking/incoming/2"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "docking_incoming_check2", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map