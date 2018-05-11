import { MydeployDemoPage } from './app.po';

describe('mydeploy-demo App', () => {
  let page: MydeployDemoPage;

  beforeEach(() => {
    page = new MydeployDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
