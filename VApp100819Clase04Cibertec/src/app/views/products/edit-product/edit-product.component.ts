import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import Product from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnDestroy {

  product: Product;
  updateSubs: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    const { id } = this.route.snapshot.params;

    this.productService.getProduct(+id).subscribe((product: Product) => {
      this.product = product;
    });

    console.log(this.product);
  }

  onSubmit(parametro) {
    this.updateSubs = this.productService.updateProduct({ id: 100, name: 'Mac 2' })
      .subscribe(() =>{
        this.router.navigate(['/products']);
      });
  }

  ngOnDestroy() {
    this.updateSubs.unsubscribe();
  }
  

}
