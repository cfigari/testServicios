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

  //const urlParrilla= environment.url_toyota + "/cltveh"
  const urlParrilla= "/cltveh"
  const body={};

  let token=this.auth.getAuthorizationToken();

  return this.http.get<Parrilla>(urlParrilla , {
    responseType: 'json',
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
      })
  })
 }

 cliente(rut:string):Observable<any>{
  

  let token=this.auth.getAuthorizationToken();

console.log(rut);
  const parametro = new HttpParams()
  .append("rut",rut)

  const body={"rut":rut}
  const urlCliente=  `/cliente`

  return this.http.get<any>(urlCliente ,  {
    responseType: 'json',
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      }),
      params:parametro
  })
 }

 Vehiculo(patente:string):Observable<Vehiculo>{

  const urlVehiculo=`/vehiculo/${patente}`
  const body={};

  let token=this.auth.getAuthorizationToken();

  return this.http.get<Vehiculo>(urlVehiculo , {
    responseType: 'json',
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })

  })
 }

 ClienteVehiculo(rut:string):Observable<Vehiculo>{

  const urlVehiculo=`/cliente/vehiculo?rut=${rut}`
  const body={};

  let token=this.auth.getAuthorizationToken();

  return this.http.get<Vehiculo>(urlVehiculo , {
    responseType: 'json',
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
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
    "sattus":""
  };

  let token=this.auth.getAuthorizationToken();

  return this.http.post<Vehiculo>(urlVehiculo ,body, {
    responseType: 'json',
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })

  })
 }



 //************************************************************************************ */
 parrillaBO():Observable<ParrillaBO>{

  const urlParrilla= 'https://z3odomfua2.execute-api.us-east-1.amazonaws.com/test/parrillaitvis'
  const body={};

  return this.http.get<ParrillaBO>(urlParrilla,body ); 

}

bitacora():Observable<any>{

  const vin='JTMZ43FV1MD035521'
  const rut='11439432-3'

  const params = new HttpParams()
        .set("vin",vin)
        .set("rut",rut)

   const urlParrilla= `https://z3odomfua2.execute-api.us-east-1.amazonaws.com/test/bitacora?${params.toString()}` 
 
  const body={};

  return this.http.get<any>(urlParrilla)

}


crearUsuario():Observable<OkUsuario>{

    const userId= "jperez"
    const email= "jperez@perez.com"
    const name= "juan Perez L"
    const password= "123456"
    const position= "1"
    const status= "1"
  

  const  formBody =`userId=${userId}&email=${email}&name=${name}&password=${password}&position=${position}&status=${status}`  
  const urlParrilla= 'https://z3odomfua2.execute-api.us-east-1.amazonaws.com/test/login/nuevo'
 
    return this.http.post<OkUsuario>(urlParrilla,formBody , {
    responseType: 'json',
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
        })
    })

}




}
