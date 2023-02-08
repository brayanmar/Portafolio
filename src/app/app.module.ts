import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './NavBar/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FooComponent } from './Footer/foo/foo.component';
import { MaiComponent } from './Main/mai/mai.component';
import { ArrayPipe } from './Main/mai/array.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooComponent,
    MaiComponent,
    ArrayPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
