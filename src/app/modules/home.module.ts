import { NgModule, CUSTOM_ELEMENTS_SCHEMA }           from '@angular/core';
import { HomeComponent }      from '../home';
import { routing } from '../home/home.routing';
import { SharedModule } from './shared.module';

@NgModule({
  imports:      [ routing, SharedModule ],
  declarations: [ HomeComponent ],
  providers:    [ ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }