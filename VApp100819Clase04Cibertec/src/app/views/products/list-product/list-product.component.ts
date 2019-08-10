import { Component, OnInit, ɵConsole } from '@angular/core';
import Product from '../product.model';
import { SortPipe } from '../shared/pipes/sort.pipe';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  allProducts: Product[];

  constructor(
    private sortPipe: SortPipe,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((data:any) => {      
      this.allProducts = data;
      //      this.allProducts = data;
    });
  }
  /**
   * 
   * .subscribe((data: any) => {
         this.nuevasCanciones = data;
      });
   */

  onSort(value: string) {
    this.sortPipe.transform(
      this.allProducts,
      value
    );
  }

  onRemove(id: number) {
    this.productService.deleteProduct(id).subscribe((response)=>{
      console.log(response);
      this.allProducts = this.allProducts.filter(prod=> prod.id != id);
    });
    
  }

}
