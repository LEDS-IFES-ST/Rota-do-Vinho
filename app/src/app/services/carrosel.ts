import { Injectable } from '@angular/core';
import { carrosel } from '../models/carrosel';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarroselService {
  API_URL = 'http://localhost:3000/api'


  constructor(private http: HttpClient) {
    
   }
   getImagemCarrosel(){
    return this.http.get(`${this.API_URL}/vinicolasControl/fotosMain/`)
  }
}
