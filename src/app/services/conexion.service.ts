import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private _refresh$ = new Subject<void>() 

  get refresh$(){
    return this._refresh$
  }

  url = "http://127.0.0.1:80" //Dirección de backend
  constructor(private http:HttpClient) { }

  consultaDatos():Observable<any>{
    return this.http
    .get(this.url+'/consultaDatos')
  }

  insertarDatos(datos:any):Observable<any>{
    return this.http
    .post(this.url+"/insertarDatos", JSON.stringify(datos))
    .pipe(tap(()=>{
       this.refresh$.next()
    }))
  }

  removeDatos(datId:any){
    //const enviar={datId:datId}
    return this.http
    .post(this.url+"/removeDatos", JSON.stringify(datId))
    .pipe(tap(()=>{
       this.refresh$.next()
    }))
  }

  updateDatos(datos:any){
    //const enviar={datId:datId}
    return this.http
    .post(this.url+"/updateDatos", JSON.stringify(datos))
    .pipe(tap(()=>{
       this.refresh$.next()
    }))
  }

}
