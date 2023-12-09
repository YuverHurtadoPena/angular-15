import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1';
  private apiUrl2 = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;

  }
  getCocktailsByCategory(category: string): Observable<any> {
    const endpoint = `${this.apiUrl}/filter.php?c=${category}`;
    return this.httpClient.get<any>(endpoint);
  }
  searchCocktailByName(name: string): Observable<any> {
    const url = `${this.apiUrl2}${name}`;
    return this.httpClient.get(url);
  }



  getDrinkDetails(id: string): Observable<any> {
    const url = `${this.apiUrl}/lookup.php?i=${id}`;
    return this.httpClient.get<any>(url);

  }

  getCocktailsByIngredient(ingredient: string): Observable<any> {
    const endpoint = `${this.apiUrl}/filter.php?i=${ingredient}`;
    return this.httpClient.get<any>(endpoint);
  }
}
