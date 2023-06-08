import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert-datos',
  templateUrl: './insert-datos.page.html',
  styleUrls: ['./insert-datos.page.scss'],
})
export class InsertDatosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    datNombre: new FormControl('',[
      Validators.minLength(3)
    ]),
    datApellido: new FormControl('',[
      Validators.minLength(5)
    ]),
    datEdad: new FormControl('',[
    ]),
    datDeporte: new FormControl('',[
      Validators.minLength(3)
    ]),
    datImagen: new FormControl('',[
      Validators.minLength(3)
    ]),
  })

}
