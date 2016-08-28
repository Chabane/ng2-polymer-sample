import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(translate: TranslateService) {
     // use navigator lang if available
    var userLang = navigator.language.split("-")[0];
    userLang = /(fr|en)/gi.test(userLang) ? userLang : "en";

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang("en");

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(userLang);
  }
}
