import { CCCEyeSatPage } from './app.po';

describe('ccceye-sat App', function() {
  let page: CCCEyeSatPage;

  beforeEach(() => {
    page = new CCCEyeSatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
