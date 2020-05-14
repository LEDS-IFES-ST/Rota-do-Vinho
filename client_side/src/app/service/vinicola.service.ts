
import { Vinicola } from './../models/vinicola';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VinicolaService {
  API_URI = environment.api_uri;

  constructor(private http: HttpClient) { }

  getVinicola() {
    return this.http.get(`${this.API_URI}vinicolaControl/lista`);
  }

  getInfoVinicola(id: string) {
    return this.http.get(`${this.API_URI}vinicolaControl/infoGeral/${id}`);
  }




}