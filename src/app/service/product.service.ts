import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  private baseUrl: string = 'http://localhost:4000/api/v1/product';

  public getProducts():Observable<Product[]> {
    console.log("getProducts called");
    return this.http.get<Product[]>(this.baseUrl+'/getProducts');
  }


}
