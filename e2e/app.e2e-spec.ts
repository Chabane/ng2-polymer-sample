import { ChabanerefesPage } from './app.po';

describe('chabanerefes App', function() {
  let page: ChabanerefesPage;

  beforeEach(() => {
    page = new ChabanerefesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
