import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/productos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;

  constructor( private http: HttpClient) { 

    this.cargarProductos();
  }

  private cargarProductos(){

    this.http.get('https://html-angular-54250.firebaseio.com/productos_idx.json')
    .subscribe(( res: Productos[] ) => {

      console.log(res);

      this.cargando = false;

    });
  }
}
