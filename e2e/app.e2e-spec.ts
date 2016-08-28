import { chabaneREFES } from './app.po';

describe('chabaneREFES App', function() {
  let page: chabaneREFES;

  beforeEach(() => {
    page = new chabaneREFES();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
