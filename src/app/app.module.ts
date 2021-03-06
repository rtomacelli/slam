import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { MenulateralComponent } from './menulateral/menulateral.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    MenulateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, RodapeComponent, MenulateralComponent]
})
export class AppModule { }
