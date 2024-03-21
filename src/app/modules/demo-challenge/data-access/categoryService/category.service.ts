import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { PizzaCategory } from '../../@models/pizzaCategoryModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseURL = "http://localhost:3000/categories";

  constructor(private http: HttpClient) { }

  categories$: Observable<PizzaCategory[]> = this.http.get<PizzaCategory[]>(this.baseURL).pipe(
    shareReplay(1)
  );
}
