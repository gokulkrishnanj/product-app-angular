import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public productNames: string[]=[];
  public products: Product[]=[];


  public getProducts() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      console.log(products);
      this.products = products;
      this.productNames = products.map(product => product.productName);
    });
  }

}
