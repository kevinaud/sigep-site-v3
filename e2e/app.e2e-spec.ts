import { SigepSiteV3Page } from './app.po';

describe('sigep-site-v3 App', function() {
  let page: SigepSiteV3Page;

  beforeEach(() => {
    page = new SigepSiteV3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
