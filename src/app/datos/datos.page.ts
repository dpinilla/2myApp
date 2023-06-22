import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Datos } from './models/datos'
import { ConexionService } from '../services/conexion.service'
import { AlertController, ModalController, ToastController } from '@ionic/angular'
import { InsertDatosPage } from './insert-datos/insert-datos.page'

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  myNombre: string | null = ''
  //datos: Array<any> = []
  datos! : Datos[]
  constructor(private activateRoute:ActivatedRoute,
              private router: Router,
              private conexion: ConexionService,
              private modalCtrl:ModalController,
              private alertCtrl:AlertController,
              private toastController: ToastController) { }

  ngOnInit() {
    this.myNombre = this.activateRoute.snapshot.paramMap.get('nombre')
    this.visualizaDatos()
  }

  visualizaDatos(){
    this.conexion.consultaDatos().subscribe(
      data => {
        this.datos = data
      }
    )
  }

  insert(){
    this.modalCtrl.create({
      component: InsertDatosPage
    })
    .then((modal) =>{
      modal.present()
      return modal.onDidDismiss
    })
  }

  /* visualizaDatos(){
    this.datos=[
      {
        nombre: "Diego",
        apellido: "Pinilla",
        edad: 25,
        deporte: "Futbol",
        imagen: "https://www.bbva.com/wp-content/uploads/2017/08/bbva-balon-futbol-2017-08-11-1024x622.jpg"
      },
      {
        nombre: "Alberto",
        apellido: "Hernández",
        edad: 23,
        deporte: "Natacion",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkJGfGnxCaCosuWo_sMgPxjsXpZn0UH3AI-w&usqp=CAU"
      },
      {
        nombre: "Andrés",
        apellido: "Pinilla",
        edad: 19,
        deporte: "Tenis",
        imagen: "data:image/jpeg;base64,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"
      }
    ]
  } */

  interface(i:number){
    if(i==0){
      this.router.navigate(['../futbol'])
    }
  }

  doRefresh(event:any){
    this.datos = []
    this.conexion.consultaDatos().subscribe(
      response => {
        this.datos = response
        event.target.complete()
      }
    )
  }

  removeDatos(datId:any){
    this.alertCtrl.create({
      header: 'Eliminar!',
      message: '¿Está seguro que desea ELIMINAR?',
      buttons: [
        {
          text: 'Cancelar',
          
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.conexion.removeDatos(datId).subscribe(
              data =>{
                this.presentToast("El usuario fué eliminado con éxito")
              })
          },
        },
      ],
    })
    .then((alertEl) => alertEl.present());
  }

  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
