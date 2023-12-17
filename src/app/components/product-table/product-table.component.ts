import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model/product.model';
import { ProductServiceService } from 'src/app/core/service/product-service.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  title = 'GESTION DES PRODUITS';
  public products: Product[] = [];
  constructor(private productService: ProductServiceService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (response)=>{
          this.products = response;
      },
      (error) => {
        console.log(error);        
          alert("ERROR:"+error)
      }
    );
    
  }

}
