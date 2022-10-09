import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // backend'e istekte bulunmak için
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44346/api/products/getall';

  constructor(private httpClient: HttpClient) { }
  
  getProducts():Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl) // gelen değer any olarak atanır .bu yüzden <> arasına tür yazarak cast ederiz gibi bişey.  
  }
  
}
