import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  private favorites: any [] = [];
  constructor(
    private _http: HttpClient
  ) { }

  getData(url) {
    return this._http.get(`${url}`);
  }

  favorite(poke, id) {
    poke.id = id;
    this.favorites.push(poke);
  }

  getFav(){
    return this.favorites;
  }
}
