import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CorreoService } from '../services/correo.service';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  submitted = false;
  envio=undefined;
  public form:FormGroup;
  constructor(formbuilder:FormBuilder,public http:CorreoService) {
    this.form=formbuilder.group({
      nombre:['',[Validators.required]],
       email:['', [Validators.email,Validators.required]],
      mensaje:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  register() {
    const value = this.form.value;
    let user = {
      nombre: value.nombre,
      email:  value.email,
      mensaje:value.mensaje
    }

    this.http.sendEmail("http://localhost:3000/send-email", user).subscribe(
      data => {
        let res:any = data;

      },
      err => {
        console.log(err);

      },() => {
        this.envio=true;
        this.submitted = false;
        this.form.reset();
      },


    );
  }
  get f() { return this.form.controls; }

}


