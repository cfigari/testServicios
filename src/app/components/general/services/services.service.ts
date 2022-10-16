import { HttpClient, HttpHandler, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OkUsuario, Parrilla, ParrillaBO, RCliente, Token, Vehiculo } from 'src/app/interfaces/interfaces';
import { environment } from '../../../../environments/environment';
import { Observable, throwError,tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

 
  private urlToyota :string = environment.url_toyota

  constructor( private http: HttpClient,private auth: AuthService ){ }

 parrilla():Observable<Parrilla>{

  const urlParrilla= "/cltveh"
  const body={};

  let token=this.auth.getAuthorizationToken("GET");

  return this.http.get<Parrilla>(urlParrilla , {
    responseType: 'json',
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
      })
  })
 }

 ClienteVehiculoPost():Observable<Vehiculo>{

  const urlVehiculo=`/cliente/vehiculo`
  const body={
    "stock":0,
    "rut":"16542926k",
    "fecha":"20220908",
    "hora":"155604",
    "vin":"JTDBT92338116606",
    "origen":"CHILE",
    "status":""
  };

  const  formBody = 'stock=' + body.stock + '&rut=' +body.rut+ '&fecha=' + body.fecha+ '&hora='+ body.hora  + '&vin=' + body.hora + '&origen='+ body.origen + '&status='+body.status

 
  let token=this.auth.getAuthorizationToken("POST");

  return this.http.post<Vehiculo>(urlVehiculo ,body, {
    responseType: 'json',
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })

  })
 }

 Vehiculo(patente:string):Observable<Vehiculo>{

  const urlVehiculo=`/vehiculo/${patente}`
  const body={};

  let token=this.auth.getAuthorizationToken("GET");

  return this.http.get<Vehiculo>(urlVehiculo , {
    responseType: 'json',
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })

  })
 } 

 cliente(rut:string):Observable<any>{
  const urlCliente=  "/clientetoyota";
  const  formBody = '{"rut":"140094471"}'  
  console.log(urlCliente);
  return this.http.post(urlCliente,formBody)
 }

 ClienteVehiculo(rut:string):Observable<Vehiculo>{

  const urlVehiculo=`/cliente/vehiculo?rut=${rut}`
  const body={};
  let token=this.auth.getAuthorizationToken("GET");
  return this.http.get<Vehiculo>(urlVehiculo , {
    responseType: 'json',
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })

  })
 }

 //************************************************************************************ */
bitacora(vin:string,rut:string):Observable<any>{
  const urlBitacora= "/bitacora"
  const formbody={"vin":vin,"rut":rut};
  return this.http.post<any>(urlBitacora,formbody)

}
bitacoranew(vin:string,rut:string,obs:string,file:string,estado:string,fecha:string,hora:string,userId:string):Observable<any>{

  const urlBitacora= "/bitacoranew"
 
  const formbody={
    "vin": vin,
    "rut": rut,
    "obs": obs,
    "file": file,
    "estado": estado,
    "fecha": fecha,
    "hora": hora,
    "userId": userId
  };
  console.log(formbody);

  return this.http.post<any>(urlBitacora,formbody)

}

Login(usuario:string, psw:string):Observable<any>{
  
  const urlLogin="/login"
  const body={
    "userId": usuario,
    "password": psw
  };

  return this.http.post<any>(urlLogin,body)

}

usuarios():Observable<any>{
  
  const urlLogin="/usuarios"

  return this.http.get<any>(urlLogin)

}

usuario(usuario:string):Observable<any>{
  
  const urlLogin="/usuario"
  const body={
    "userId": usuario
  };

  return this.http.post<any>(urlLogin,body)

}
usuarionew(userId:string,email:string,nombre:string,psw:string,position:string,estado:string):Observable<any>{
  
  const urlLogin="/usuarionew"
  const body={
    "userId": userId,
    "email": email,
    "name": nombre,
    "password": psw,
    "position": position,
    "status": estado
  }

  return this.http.post<any>(urlLogin,body)

}

usuariodel(usuario:string):Observable<any>{
  
  const urlLogin="/usuariodel"
  const body={
    "userId": usuario
  };

  return this.http.post<any>(urlLogin,body)

}





}
