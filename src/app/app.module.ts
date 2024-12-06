import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { NgtemplateComponent } from './ngtemplate/ngtemplate.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ClassBindingComponent,
    NgtemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
