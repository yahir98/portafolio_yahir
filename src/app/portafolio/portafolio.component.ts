import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../services/http-client.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public portafolio:HttpClientService) { }

  ngOnInit(): void {
  }

}
