import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhotoComponent } from './componentes/photo/photo.component';
import { SearchComponent } from './componentes/search/search.component';
import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
