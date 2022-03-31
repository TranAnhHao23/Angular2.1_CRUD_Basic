import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/home')
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(API_URL + '/home/' + id)
  }

  getProductByName(nameSearch: string): Observable<Product[]> {
    let params = new HttpParams().set('nameSearch', nameSearch);
    console.log(params.toString())
    return this.http.get<Product[]>(API_URL + '/home/search', {params});
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post(API_URL + '/home', product)
  }

  deleteProduct(id: any): Observable<any> {
    return this.http.delete(API_URL + '/home/' + id)
  }
}
