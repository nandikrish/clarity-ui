import { browser, element, by } from 'protractor';

export class ClarityUiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ui-root h1')).getText();
  }
}
