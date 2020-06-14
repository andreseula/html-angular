import { Injectable } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { datosPagina } from '../interfaces/info-pagina.interface';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {
  
  info: datosPagina ={};
  cargada = false;
  equipo: any [] = [];

  constructor( private http: HttpClient) {

    console.log('SERVICE PAGINA LOAD');
    this.cargarInfo();
    this.cargarEquipo();
    
   }

   private cargarInfo(){

    this.http.get('assets/data/date-page.json')
      .subscribe ( (res: datosPagina) =>{
        
        this.cargada=true;
        this.info = res;
        // console.log(res);
      });
   }

   private cargarEquipo(){

    this.http.get('https://html-angular-54250.firebaseio.com/equipo.json')
      .subscribe ( (res: any[]) =>{

        this.equipo = res;
        // console.log(res);
         
      });

   }
}
