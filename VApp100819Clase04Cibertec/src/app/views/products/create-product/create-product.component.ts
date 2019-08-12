import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import Product from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(
    private productService: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.productService.createProduct({ name: 'Test 1'})
      .subscribe((product: Product) => {
        this.router.navigate(['/products']);
      });
  }

}
