import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FakeStore {

  private apiUrl = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) { }

  // PRODUTOS

  getProducts() {
    return this.http.get(`${this.apiUrl}/products`);
  }

  getProductById(id: number) {
    return this.http.get(`${this.apiUrl}/products/${id}`);
  }

  // CATEGORIAS

  getCategories() {
    return this.http.get(`${this.apiUrl}/products/categories`);
  }

  // USUÁRIOS

  getUsers() {
    return this.http.get(`${this.apiUrl}/users`);
  }

  getUserById(id: number) {
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }

  // LOGIN

  login(username: string, password: string) {

    return this.http.post(
      `${this.apiUrl}/auth/login`,
      {
        username,
        password
      }
    );

  }

}
