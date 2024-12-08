import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { NgtemplateComponent } from './ngtemplate/ngtemplate.component';
import { NgcontainerComponent } from './ngcontainer/ngcontainer.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { TablistComponent } from './tablist/tablist.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ClassBindingComponent,
    NgtemplateComponent,
    NgcontainerComponent,
    NgcontentComponent,
    TablistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
