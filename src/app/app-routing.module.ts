import { NgModule } from '@angular/core';

import { PhotoComponent } from './componentes/photo/photo.component';
import { SearchComponent } from './componentes/search/search.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'resultados/:i', component: PhotoComponent }
]

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
