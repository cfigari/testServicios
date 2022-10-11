import { Component, OnInit } from '@angular/core';
import { ParrillaBO } from 'src/app/interfaces/interfaces';
import { Observable, tap } from 'rxjs';
import { ServicesService } from '../../services/services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-itvis',
  templateUrl: './itvis.component.html',
  styles: [
  ]
})
export class ItvisComponent implements OnInit {

  constructor( private services:ServicesService) { }
  resp={}
  titulo=""
  subtitulo=""
  
  ngOnInit(): void {
  }

parrilla(){
  this.services.parrillaBO().pipe(
    tap( resp =>{
       this.resp=resp;
       this.titulo="Parrilla";
       this.subtitulo="Itvis";
       return resp;
     } 
    )
)
.subscribe(resp =>{    
})
}

bitacora(){
  this.services.bitacora().pipe(
    tap( resp =>{
       this.resp=resp;
       this.titulo="Bitacora";
       this.subtitulo="Itvis";
       return resp;
     } 
    )
)
.subscribe(resp =>{    
})
}

creaUsuario(){
  this.services.crearUsuario().pipe(
    tap( resp =>{
       this.resp=resp;
       this.titulo="Bitacora";
       this.subtitulo="Itvis";
       return resp;
     } 
    )
)
.subscribe(resp =>{    
})
}



}
