import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HttpClientService {
  Profesional: any[] = [];
  Educacion: any[] = [];
  Experiencia: any[] = [];
  constructor(private http: HttpClient) {
    this.CargarProfesional();
    this.CargarEducacion();
    this.CargarExperiencia();
  }

  public CargarProfesional() {
    this.http
      .get("https://portafolio-11ed1.firebaseio.com/Profesional.json")
      .subscribe((Response: any[]) => {
        this.Profesional = Response;
        console.log(Response);
      });
  }

  public CargarEducacion() {
    this.http
      .get("https://portafolio-11ed1.firebaseio.com/Educacion.json")
      .subscribe((response: any[]) => {
        this.Educacion = response;
        console.log(Response);
      });
  }

  public CargarExperiencia() {
    this.http
      .get("https://portafolio-11ed1.firebaseio.com/Experiencia.json")
      .subscribe((response: any[]) => {
        this.Experiencia = response;
        console.log(Response);
      });
  }
}
