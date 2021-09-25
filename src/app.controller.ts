import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("/dock")
  getHello(@Body() body:any): string {
    console.log(body)
    this.appService.setDock(body)
    return this.appService.getHello();
  }

  @Get("/dock")
  getDock(){
    return this.appService.getDock()
  }


  @Post("/button")
  setButton(): string {
    this.appService.setButton("param")
    return this.appService.getHello();
  }

  @Get("/button")
  getButton(){
    return this.appService.getButton()
  }
  
}
