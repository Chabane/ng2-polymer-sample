import { TranslateModule, TranslateService, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { HttpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PLATFORM_PIPES } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { PolymerModule } from './polymer.module';
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        CommonModule, FormsModule, PolymerModule ,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
            deps: [Http]
        })
    ],
    exports: [BrowserModule, HttpModule, TranslateModule]
})
export class SharedModule {
}