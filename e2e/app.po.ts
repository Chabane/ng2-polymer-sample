export class /Users/chabane/Documents/dev/source/perso/chabaneRefesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
