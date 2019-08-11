import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import Product from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;
  updateSubs: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    const { id } = this.route.snapshot.params;

    this.updateSubs = this.productService.getProduct(id).subscribe((data: Product) => {
      this.product = data;
      console.log(this.product);
    });
    console.log(this.product);
  }

  onSubmit(parametro) {
    this.updateSubs = this.productService.updateProduct({ id: 102, name: 'mac1' })
      .subscribe(() => {
        this.router.navigate(['/products']);
      });
  }

  ngOnDestroy() {
    this.updateSubs.unsubscribe();
  }

}
