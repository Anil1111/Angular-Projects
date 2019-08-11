import { Injectable } from '@angular/core';

//import { products } from '../../../../mocks/products';
import Product from '../../product.model';
import { HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class ProductsService {

    //private api:string = environment.api;
    private api:string = 'http://localhost:3000';
    private endpoint:string = 'products';

    

    constructor(private http: HttpClient) {}

    getProducts(){
        const URL:string = `${this.api}/${this.endpoint}`;
        return this.http.get(URL);        
    }

    getProduct(id: number) {
        const URL:string = `${this.api}/${this.endpoint}/${id}`;
        return this.http.get(URL);
    }

    deleteProduct(id: number) {
        const URL:string = `${this.api}/${this.endpoint}`;
        return this.http.delete(`${URL}/${id}`);
        //this.products = this.products.filter(prod => prod.id !== id);
    }
}