import { /Users/chabane/Documents/dev/source/perso/chabaneRefesPage } from './app.po';

describe('/users/chabane/documents/dev/source/perso/chabane-refes App', function() {
  let page: /Users/chabane/Documents/dev/source/perso/chabaneRefesPage;

  beforeEach(() => {
    page = new /Users/chabane/Documents/dev/source/perso/chabaneRefesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
