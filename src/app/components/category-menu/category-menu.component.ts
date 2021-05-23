import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  constructor(private productService:ProductService) { }
  productCategories : ProductCategory[];
  ngOnInit() {

    this.getCategories();
  }

  getCategories(){
    this.productService.getProductCategories().subscribe(
     // console.log(this.productCategories)
      data=>{this.productCategories=data;console.log(data)}
    )
  }

}
