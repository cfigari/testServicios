import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Token } from '../../../interfaces/interfaces';
import { Observable,tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { 

    this.ttoken ()
    .subscribe();
  }

  private urlToken :string = environment.url_token
  private token :string=""
  private token_type:string=""
  private expires_in:number=0

 private  ttoken ():Observable<Token>{
    
    const  formBody = 'client_id=' + environment.ClientID + '&client_secret=' +environment.ClientSecret + '&grant_type=' + environment.grant_type+ '&scope='+ environment.Scope
 
   return  this.http.post<Token>(this.urlToken,formBody, {
    responseType: 'json',
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
        })
    })
    .pipe( 
      tap( resp =>{
          this.token=resp.access_token;
          this.token_type=resp.token_type;
          this.expires_in=resp.expires_in;
          
          localStorage.setItem('token',resp.access_token);
          return resp;
      })
    )

  }

  public getAuthorizationToken():string{
    return this.token;
  }

  public  getAutorizationType():string{
  
    return this.token_type;
  }

  public getAutorizationExpires():number{
  
    return this.expires_in;
  }


}
