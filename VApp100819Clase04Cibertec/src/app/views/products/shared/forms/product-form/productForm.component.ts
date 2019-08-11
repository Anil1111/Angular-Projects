import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Product from '../../../product.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-form',
    templateUrl: './productForm.component.html',
    styleUrls: ['./productForm.component.css']
  })
export class ProductFormComponent implements OnInit{

  @Input() model:Product;
  @Input() type:string;
  @Output() handleSubmit:EventEmitter<string> = new EventEmitter<string>();
  buttonTitle :string='';

    constructor(private router:Router){}

    ngOnInit(){
      this.buttonTitle =this.type='edit'?'Actualizar':'Crear';

    }

    onChildClick(){
      this.handleSubmit.emit('hola papa');
    }

    return(){
      this.router.navigate(['/products']);
    }
}