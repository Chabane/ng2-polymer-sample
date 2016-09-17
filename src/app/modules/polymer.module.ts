import { NgModule, ModuleWithProviders }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { PolymerElement } from '@vaadin/angular2-polymer';

const POLYMER_MODULES = [
 PolymerElement('paper-input'), 
 PolymerElement('paper-card'), PolymerElement('paper-icon-button'), PolymerElement('paper-button'), PolymerElement('iron-icon'), PolymerElement('vaadin-grid')
];

@NgModule({
  imports:      [ ],
  declarations: [POLYMER_MODULES],
  exports:      [POLYMER_MODULES],
  providers:    [  ]
})
export class PolymerModule { }
