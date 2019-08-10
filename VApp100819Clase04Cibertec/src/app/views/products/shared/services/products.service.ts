import { Injectable } from '@angular/core';

import { products } from '../../../../mocks/products';
import Product from '../../product.model';
import { HttpClientModule } from "@angular/common/http";

@Injectable()
export class ProductsService {

    products: Product[] = products;

    constructor(private http: HttpClientModule) {}

    getProducts() {
        return this.products;
    }

    getProduct(id: number) {
        const prod = this.products.filter(prod => prod.id === id); // []
        return prod[0];
    }

    deleteProduct(id: number) {
        this.products = this.products.filter(prod => prod.id !== id);
    }
}