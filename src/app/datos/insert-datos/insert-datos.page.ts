import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { Datos } from '../models/datos'
import { ConexionService } from 'src/app/services/conexion.service';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-insert-datos',
  templateUrl: './insert-datos.page.html',
  styleUrls: ['./insert-datos.page.scss'],
})
export class InsertDatosPage implements OnInit {

  //@Input() datos!:Partial<Datos>
  constructor(private conexion:ConexionService,
              private toastController:ToastController,
              private modalCtrl: ModalController) { }
              
  ngOnInit() {
  }

  form = new FormGroup({
    datNombre: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    datApellido: new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    datEdad: new FormControl('',[
      Validators.required,
    ]),
    datDeporte: new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]),
    datImagen: new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]),
  })

  onSubmit(){
    console.log("ingresó")
   /*  const dat:Datos = {
      datNombre: this.form.value.datNombre!,
      datApellido: this.form.value.datApellido!,
      datEdad: this.form.value.datEdad!,
      datDeporte: this.form.value.datDeporte!,
      datImagen: this.form.value.datImagen!
    }  */

    const dat = this.form.value
    this.conexion.insertarDatos(dat).subscribe(
      data=>{
          this.presentToast('Datos guardados con éxito')
          this.closeModal()
      }, error =>{
        this.presentToast('Error al guardar')
          this.closeModal()
      }
      )
  }

  async closeModal(){
    this.modalCtrl.dismiss(null, 'closed')
  }

  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
