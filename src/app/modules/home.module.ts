import { NgModule }           from '@angular/core';
import { HomeComponent }      from '../home';
import { routing } from '../home/home.routing';
import { SharedModule } from './shared.module';

@NgModule({
  imports:      [ routing, SharedModule ],
  declarations: [ HomeComponent ],
  providers:    [ ]
})
export class HomeModule { }