import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ParaComponent } from './para/para.component';
import { ListComponent } from './list/list.component';
import { FooterComponent } from './footer/footer.component';
import { ImagesComponent } from './images/images.components';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParaComponent,
    ListComponent,
    FooterComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
