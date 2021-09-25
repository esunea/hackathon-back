import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  capteurValue:any = {}
  buttonValue:any = {}
  getDock(){
    return this.capteurValue
  }

  setDock(dock:any){
    this.capteurValue = dock
  }

  getButton(){
    return this.buttonValue
  }

  setButton(button:any){
    this.buttonValue = button
  }

  getHello(): string {
    return 'OK';
  }
}
