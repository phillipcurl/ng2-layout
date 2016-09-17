import { Ng2LayoutPage } from './app.po';

describe('ng2-layout App', function() {
  let page: Ng2LayoutPage;

  beforeEach(() => {
    page = new Ng2LayoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
