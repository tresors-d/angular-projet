import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  
  private  url = "http://localhost:8080/products";
  constructor(private http:HttpClient ) { }
  public getProduct():  Product[] {
    return [
      new Product(1, "Savon Noir", "Permet de guerir les bouton", 3000, 20),
      new Product(1, "Lait eclaissisant", "Permet d'adoucir la peaux", 3000, 20),
      new Product(1, "Patte d'entiffice", "Permet de ressoudre les problemes d'entaire", 4000, 10),
      new Product(1, "Craime a main", "Permet de rentre une peaux douce", 3600, 30),
    ];

  }
  public getProducts():Observable<any> {
    return this.http.get(this.url);
  }
 

}
