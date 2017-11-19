import { NgxDemoPage } from './app.po';

describe('ngx-demo App', () => {
  let page: NgxDemoPage;

  beforeEach(() => {
    page = new NgxDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
