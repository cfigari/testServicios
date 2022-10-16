import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { finalize, tap} from 'rxjs'
import { AuthService } from '../../services/auth.service';
import { ServicesService } from '../../services/services.service';


@Component({
  selector: 'app-toyota',
  templateUrl: './toyota.component.html',
  styles: [
  ]
})
export class ToyotaComponent  {

  resp ={}
  titulo=""
  subtitulo=""

  constructor( private fb:FormBuilder,
               private services:ServicesService,
               private auth:AuthService) { }

  token(){
      this.resp=this.auth.getAuthorizationToken("POST");
      this.titulo="Token";
      this.subtitulo=` ${ this.auth.getAutorizationType() }  ( ${this.auth.getAutorizationExpires() })` ; 
  }

   parrilla(){
    this.services.parrilla()
    .subscribe(resp =>{ 
     this.resp=resp.body;
            this.titulo="Parrilla";
            this.subtitulo="cltveh";
            return resp; 

    })
   }

   cliente(rut:string){
    this.services.cliente(rut)
     .subscribe(resp =>{
          this.resp=resp.body;
          this.titulo="cliente";
          this.subtitulo="cliente?rut=<rut>";
          console.log(resp)
          return resp;    
    })
   }

   vehiculo(patente:string){
     console.log("OBTENIDO INFORMACION DE VEHICULO")
    this.services.Vehiculo(patente)
    .subscribe(resp =>{ 
          this.resp=resp;
          this.titulo="Vehiculo";
          this.subtitulo="vehiculo/patente";
          console.log(resp)
          return resp; 
    })
   }


   clienteVehiculo(rut:string){
    this.services.ClienteVehiculo(rut)
     .subscribe(resp =>{  
          this.resp=resp;
          this.titulo="cliente/Vehiculo";
          this.subtitulo="Cliente/vehiculo?rut=rut";
          console.log(resp)
          return resp;
     
    })
   }
 
  
   clienteVehiculoPost(){
    this.services.ClienteVehiculoPost()
     .subscribe(resp =>{
          this.resp=resp;
          this.titulo="cliente/Vehiculo Post";
          this.subtitulo="Cliente/vehiculo";
          console.log(resp)
          return resp;    
    })
   }


}
