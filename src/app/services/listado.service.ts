import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  constructor(
    private _http: HttpClient
  ) { }

  getData(url) {
    return this._http.get(`${url}`);
  }
}
