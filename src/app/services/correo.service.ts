import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  constructor(private http: HttpClient) {


  }

  sendEmail(url, data) {
    return this.http.post(url, data);
  }
}
