import { ClarityUiPage } from './app.po';

describe('clarity-ui App', () => {
  let page: ClarityUiPage;

  beforeEach(() => {
    page = new ClarityUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ui works!');
  });
});
