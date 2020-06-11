import { Injectable } from '@angular/core';
import { datosPagina } from '../interfaces/info-pagina.interface';
import { HttpClientModule } from '@angular/common/http';
import { getTestBed } from '@angular/core/testing';
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  
  info: datosPagina ={};
  cargada = false;
  constructor( private http: HttpClient) {
    
    this.http.get('assets/data/date-pagina-json')
    .subscribe(res =>{
      
      this.cargada=true;
      this.info = res;
      console.log(res);

    });

   }
}
