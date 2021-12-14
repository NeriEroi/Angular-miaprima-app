import { NgModule } from '@angular/core';

// imports 
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// componenti 
import { AppComponent } from './app.component';
import { SecondoComponent } from './secondo-component/secondo-component.component';
import { TerzoComponent } from './terzo-component/terzo-component.component';


@NgModule({
  declarations: [
    AppComponent,
    SecondoComponent,
    TerzoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
