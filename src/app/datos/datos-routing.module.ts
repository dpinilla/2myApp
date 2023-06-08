import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosPage } from './datos.page';

const routes: Routes = [
  {
    path: '',
    component: DatosPage
  },
  {
    path: 'insert-datos',
    loadChildren: () => import('./insert-datos/insert-datos.module').then( m => m.InsertDatosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosPageRoutingModule {}
