import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Category} from "../model/category";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + '/category')
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(API_URL + '/category/' + id)
  }

  createCategory(category: Category): Observable<any> {
    return this.http.post(API_URL + '/category', category)
  }

  deleteCategory(id: any): Observable<any> {
    return this.http.delete(API_URL + '/category/' + id)
  }
}
