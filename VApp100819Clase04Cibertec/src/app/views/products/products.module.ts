import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { HoverDirective } from './shared/directives/hover.directive';
import { SortPipe } from './shared/pipes/sort.pipe';
import { ShorTextPipe } from './shared/pipes/short-text.pipe';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RouterModule } from '@angular/router';
import { ProductsService } from './shared/services/products.service';

@NgModule({
  declarations: [
    ListProductComponent,
    HoverDirective,
    ShorTextPipe,
    CreateProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListProductComponent
  ],
  providers: [
    SortPipe,
    ProductsService
  ]
})
export class ProductsModule { }
