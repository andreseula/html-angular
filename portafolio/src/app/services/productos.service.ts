import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/productos.interfaces';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  producto: Productos[] = [];
  prodFiltrado: Productos[] = [];

  constructor( private http: HttpClient) {

    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise ((resolve, rejects) =>{

      this.http.get('https://html-angular-54250.firebaseio.com/productos_idx.json')
        .subscribe(( res: Productos[] ) => {
  
        console.log(res);
        this.producto = res;
        resolve();
    
        setTimeout(() => {
          this.cargando = false;
        }, 800);
  
      });
    });


  }

  getProducto (id: string){

    return this.http.get(`https://html-angular-54250.firebaseio.com/productos/${ id }.json`);

  }

  buscarProducto ( termino: string){
    
    if( this.producto.length === 0){
      //cargar productos
      this.cargarProductos().then(()=>{
        //EJECUTAR DESPUES DE TENER LOS PRODUCTOS APLICAR FILTRO
        this.filtrarProductos(termino);
      })
    }else{

    }

    // this.prodFiltrado = this.producto.filter( producto =>{

    //   return true;

    // });

    // console.log( this.prodFiltrado);
  }

  private filtrarProductos ( termino: string){

    // console.log(this.producto);
    this.prodFiltrado = [];

    termino = termino.toLocaleLowerCase();
    
    this.producto.forEach(prod =>{

      const mintitulo = prod.titulo.toLocaleLowerCase();

      if(prod.categoria.indexOf(termino )>= 0 || mintitulo.indexOf (termino) >= 0){
        this.prodFiltrado.push(prod);
      }
    });
  }

}
