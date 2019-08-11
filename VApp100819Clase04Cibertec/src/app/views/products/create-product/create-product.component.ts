import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import Product from '../product.model';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService:ProductsService) { }

  ngOnInit() {
  }

 onSubmit(){
   this.productService.createProduct({name:'carrito 1'})
      .subscribe((product:Product)=>{
        console.log(product);
      });
 }

}
