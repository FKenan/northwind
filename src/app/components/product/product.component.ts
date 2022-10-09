import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http'; // backend'e istekte bulunmak için
import { ProductResponseModel } from 'src/app/models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  apiUrl = 'https://localhost:44346/api/products/getall';

  productResponseModel: ProductResponseModel = {
    data : this.products,
    success: true,
    message: "",
  };

  constructor(private httpClient: HttpClient) {
    // parametrelere başka yerlerden erişebiliriz. private yaparak bu class dışından erişilmesini engelledik. türünü verince otomatik intance oluşturur, c#taki depencyresolverslar gibi.
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.httpClient
      .get<ProductResponseModel>(this.apiUrl) // gelen değer any olarak atanır .bu yüzden <> arasına tür yazarak cast ederiz gibi bişey.
      .subscribe((response) => {
        this.products = response.data;
      }); // response gelen yanıt
  }
}
