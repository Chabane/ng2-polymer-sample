import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, PLATFORM_PIPES } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeModule, SharedModule } from './modules';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    routing,
    HomeModule,
    SharedModule
  ],
  providers : [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}
