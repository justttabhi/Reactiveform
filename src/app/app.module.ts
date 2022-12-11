import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';           //register reactive form module
import { HttpClientModule } from '@angular/common/http';
import { UserdataService } from './service/userdata.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,                                   //register reactive form module
    HttpClientModule
  ],
  providers: [UserdataService],          //register services
  bootstrap: [AppComponent]
})
export class AppModule { }
