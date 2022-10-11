import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { tap} from 'rxjs'
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
      this.resp=this.auth.getAuthorizationToken();
      this.titulo="Token";
      this.subtitulo=` ${ this.auth.getAutorizationType() }  ( ${this.auth.getAutorizationExpires() })` ; 
  }

   parrilla(){
    this.services.parrilla()
    .pipe(
         tap( resp =>{
            this.resp=resp.body;
            this.titulo="Parrilla";
            this.subtitulo="cltveh";
            return resp;
          } 
         )
    )
    .subscribe(resp =>{    
    })
   }

   cliente(rut:string){
    this.services.cliente(rut)
    .pipe(
         tap( resp =>{
            this.resp=resp.body;
            this.titulo="cliente";
            this.subtitulo="cliente?rut=<rut>";
            console.log(resp)
            return resp;
          } 
         )
    )
    .subscribe(resp =>{    
    })
   }


   vehiculo(patente:string){
    this.services.Vehiculo(patente)
    .pipe(
         tap( resp =>{
            this.resp=resp;
            this.titulo="Vehiculo";
            this.subtitulo="vehiculo/patente";
            console.log(resp)
            return resp;
          } 
         )
    )
    .subscribe(resp =>{    
    })
   }


   

   clienteVehiculo(rut:string){
    this.services.ClienteVehiculo(rut)
    .pipe(
         tap( resp =>{
            this.resp=resp;
            this.titulo="cliente/Vehiculo";
            this.subtitulo="Cliente/vehiculo?rut=rut";
            console.log(resp)
            return resp;
          } 
         )
    )
    .subscribe(resp =>{    
    })
   }
 
  
   clienteVehiculoPost(){
    this.services.ClienteVehiculoPost()
    .pipe(
         tap( resp =>{
            this.resp=resp;
            this.titulo="cliente/Vehiculo Post";
            this.subtitulo="Cliente/vehiculo";
            console.log(resp)
            return resp;
          } 
         )
    )
    .subscribe(resp =>{    
    })
   }

  // MiFormulario : FormGroup = this.fb.group({
  //   email:['',[Validators.required,Validators.email]]
  // });

 

}
