import { Component, OnInit } from '@angular/core';
import { ParrillaBO } from 'src/app/interfaces/interfaces';
import { Observable, tap } from 'rxjs';
import { ServicesService } from '../../services/services.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-itvis',
  templateUrl: './itvis.component.html',
  styles: [
  ]
})
export class ItvisComponent implements OnInit {

  constructor( private services:ServicesService,private auth:AuthService) { }
  resp={}
  titulo=""
  subtitulo=""
  fechaActual=new Date();
  fechaActualString=this.fechaActual.toDateString
  hora=this.fechaActual.getHours
  minutos=this.fechaActual.getMinutes
  
  ngOnInit(): void {
  }

  token(){
    this.resp=this.auth.getAuthorizationToken("POST");
    this.titulo="Token";
    this.subtitulo=` ${ this.auth.getAutorizationType() }  ( ${this.auth.getAutorizationExpires() })` ; 
}

login(usuario:string,psw:string){
  this.services.Login(usuario,psw)
.subscribe(resp =>{ 
  this.resp=resp;
       this.titulo="Login";
       this.subtitulo="Itvis";
       return resp;   
})
}

bitacora(vin :string,rut:string){
  this.services.bitacora(vin,rut)
  .subscribe(resp =>{
       this.resp=resp;
       this.titulo="Bitacora";
       this.subtitulo="Itvis";
       return resp;
     } 
)

}
bitacoranew(vin:string,rut:string,obs:string,file:string,estado:string,fecha:string,hora:string,userId:string){
  this.services.bitacoranew(vin,rut,obs,file,estado,fecha,hora,userId)
  .subscribe(resp =>{
       this.resp=resp;
       this.titulo="Insert Bitacora";
       this.subtitulo="Itvis";
       return resp;
     } 
)

}

usuarios(){
  this.services.usuarios()
  .subscribe(resp =>{
       this.resp=resp;
       this.titulo="Usuarios";
       this.subtitulo="Itvis";
       return resp;
     } 
)

}

usuario(usuario:string){
  this.services.usuario(usuario)
  .subscribe(resp =>{
       this.resp=resp;
       this.titulo="Usuario";
       this.subtitulo="Itvis";
       return resp;
     } 
)

}

usuarionew(userId:string,email:string,nombre:string,psw:string,position:string,estado:string){
  this.services.usuarionew(userId,email,nombre,psw,position,estado)
  .subscribe(resp =>{
       this.resp=resp;
       this.titulo="Nuevo Usuario";
       this.subtitulo="Itvis";
       return resp;
     } 
)

}

usuariodel(usuario:string){
  this.services.usuariodel(usuario)
  .subscribe(resp =>{
       this.resp=resp;
       this.titulo="Borrado de Usuario";
       this.subtitulo="Itvis";
       return resp;
     } 
)

}



vinRut(vin:string, rut:string, fecha:string, hora:string, stock:string, origen:string, status:string){
  this.services.vinRut(vin, rut, fecha, hora, stock, origen, status)
  .subscribe(resp =>{
       this.resp=resp;
       this.titulo="Insert Update  vinRut";
       this.subtitulo="Itvis";
       return resp;
     } 
)

}







}
