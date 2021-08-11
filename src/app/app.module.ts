import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeatSelectComponent } from './MyComponent/seat-select/seat-select.component';
import { IndSeatComponent } from './MyComponent/ind-seat/ind-seat.component';

@NgModule({
  declarations: [
    AppComponent,
    SeatSelectComponent,
    IndSeatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
