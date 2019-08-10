import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import Product from '../product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    const { id } = this.route.snapshot.params;

    this.product = this.productService.getProduct(+id);

    console.log(this.product);
  }

}
