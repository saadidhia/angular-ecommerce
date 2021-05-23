import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import {map} from 'rxjs/operators'
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl="http://localhost:8081/api/products";
  private urlCategory="http://localhost:8081/api/product-category"

  constructor(private httpClient:HttpClient) { }

  getProducts(theCategoryId:number):Observable<Product[]>{
    const Url=`${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;
    return  this.httpClient.get<GetResponse>(Url).pipe(
      map(response=>response._embedded.products)
    )
  }

  getProductCategories():Observable<ProductCategory[]>{
    return  this.httpClient.get<GetRespponseProductCategory>(this.urlCategory).pipe(
      map(response=>response._embedded.productCategory)
    )
    

  }
  
 
}

interface GetRespponseProductCategory{
  _embedded:{
    productCategory:ProductCategory[];
  }

}

interface GetResponse{
  _embedded:{
    products:Product[];
  }
}
