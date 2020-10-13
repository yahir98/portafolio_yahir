import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../services/http-client.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor(public resumen:HttpClientService) { }

  ngOnInit(): void {
  }

}
