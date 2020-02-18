import { Injectable } from '@angular/core';
import { exemplo } from '../models/exemplo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExemploService {
  API_URL = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) { }

  getInfoGeral(idVinicola: string){
    return this.http.get(`${this.API_URL}/vinicolasControl/infoGeral/{id}`);
  }

}
