import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // backend'e istekte bulunmak için
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44346/api/products/getall';

  constructor(private httpClient: HttpClient) { }
  
  getProducts():Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl) // gelen değer any olarak atanır .bu yüzden <> arasına tür yazarak cast ederiz gibi bişey.  
  }
  
}
