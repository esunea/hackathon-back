import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  docking_incoming:any = {}
  docking_incoming2:any = {}
  departValue:any = {}
  porteValue:any = {}
  porteValue2:any = {}
  
  capteurValue:any = {}
  buttonValue:any = {}
  getDock(){
    return this.capteurValue
  }
  
  setDock(dock:any){
    this.capteurValue = dock
  }
  
  getButton(param:any){
    if(this.buttonValue[param.id] != undefined){
      let button = this.buttonValue[param.id]
      this.buttonValue[param.id] = undefined
      return button
    }
    return false
  }
  
  setButton(body:any, param:any){
    this.buttonValue[param.id] = body
  }
  
  getHello(): string {
    return 'OK';
  }
  
  setDepart(body){
    this.departValue[body.seqVoyage] = body.depart
  }
  
  getDepart(body){
    if(this.departValue[body.id] != undefined){
      let depart = this.departValue[body.id]
      this.departValue[body.id] = undefined
      
      return {depart:true}
    }
    return {depart:false}
    
  }
  
  
  setPorte(body){
    console.log("body",body)
    this.porteValue[body.seqVoyage] = body.porte
    if(body.seqVoyage == this.docking_incoming2.tripNumber)
    this.porteValue2[body.porte] = {porte:body.porte, data:  this.docking_incoming2}
  }
  
  getPorte(body){
    console.log("id",body)
    if(this.porteValue[body.id] != undefined){
      let porte = this.porteValue[body.id]
      this.porteValue[body.id] = undefined
      return {porte:porte}
    }
    return {porte:null}
  }

  getPorte2(body){
    if(this.porteValue2[body.id] != undefined){
      let porte = this.porteValue2[body.id]
      // this.porteValue[body.id] = undefined
      return porte
    }
    return null
  }
  
  setDockingIncoming(body){
    this.docking_incoming = body
    this.docking_incoming2 = body
  }
  
  getDockingIncoming(){
    if(this.docking_incoming){
      let tmp = this.docking_incoming
      this.docking_incoming = undefined
      return tmp
    }
    return undefined
  }

  getDockingIncoming2(){
        if(this.docking_incoming2){
      let tmp = this.docking_incoming2
      // this.docking_incoming2 = undefined
      return tmp
    }
    return undefined
  }
  
  
  
}
