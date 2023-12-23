import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  private  url = 'http://localhost:8080/users';
  constructor(private http:HttpClient ) { }

// les observable sont des objet dynamique qui peut produit plusieurs resultats;
  public login(email: string, password: string):Observable<any> {
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*/*');
    return this.http.post(this.url+'/connexion', { "email":email, "password":password }, { 'headers': headers });
  }
 

}
