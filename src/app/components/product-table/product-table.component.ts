import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model/product.model';
import { ProductServiceService } from 'src/app/core/service/product-service.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})


export class ProductTableComponent implements OnInit {
  public products: Product[] = [];
  constructor(private productService: ProductServiceService){}

  ngOnInit(): void {
    this.products = this.productService.getProduct();
    console.log(this.products);
    
  }

}
