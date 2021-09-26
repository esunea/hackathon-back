import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("/dock")
  getHello(@Body() body:any): string {
    // console.log(body)
    this.appService.setDock(body)
    return this.appService.getHello();
  }

  @Get("/dock")
  getDock(){
    return this.appService.getDock()
  }


  @Post("/button/:id")
  setButton(@Body() body:any, @Param() param: any): string {
    // console.log("param")
    // console.log(param)
    // console.log("body")
    // console.log(body)
    this.appService.setButton(body,param)
    return this.appService.getHello();
  }

  @Get("/button/:id")
  getButton( @Param() param: any){
    // console.log(param)
    return this.appService.getButton(param)
  }

  @Post("/depart/set")
  setDepart(@Body() body:any): string {
    this.appService.setDepart(body)
    return this.appService.getHello();
  }

  @Get("/depart/:id")
  getDepart(@Param() param: any){
    return this.appService.getDepart(param)
  }

  @Post("/porte/set")
  setPorte(@Body() body:any): string {
    this.appService.setPorte(body)
    return this.appService.getHello();
  }

  @Get("/porte/:id")
  getPorte(@Param() param: any){
    return this.appService.getPorte(param)
  }
  @Get("/porte2/:id")
  getPorte2(@Param() param: any){
    return this.appService.getPorte2(param)
  }

  @Post("/docking/incoming")
  docking_incoming(@Body() body:any){
    this.appService.setDockingIncoming(body)
  }

  @Get("/docking/incoming")
  docking_incoming_check(){
    return this.appService.getDockingIncoming()
  }

  @Get("/docking/incoming/2")
  docking_incoming_check2(){
    return this.appService.getDockingIncoming2()
  }
  
}
