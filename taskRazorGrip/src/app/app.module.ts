import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import {HttpClientModule, HttpClientJsonpModule, HttpClient} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [HeroService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
