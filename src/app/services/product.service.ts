import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl="http://localhost:8081/api/products";

  constructor(private httpClient:HttpClient) { }

  getProducts(theCategoryId:number):Observable<Product[]>{
    const Url=`${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;
    return  this.httpClient.get<GetResponse>(Url).pipe(
      map(response=>response._embedded.products)
    )
  }
 
}

interface GetResponse{
  _embedded:{
    products:Product[];
  }
}
