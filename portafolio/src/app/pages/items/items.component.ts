import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { prodDesc } from '../../interfaces/prod-desc.interface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor( private route: ActivatedRoute, 
                public productoService:ProductosService) { }

  ngOnInit(): void {

    this.route.params
    .subscribe(parametros =>{

      // console.log(parametros['id']);

      this.productoService.getProducto(parametros['id'])
        .subscribe((producto: prodDesc) => {

            console.log(producto);

        });

    });
  }

}
