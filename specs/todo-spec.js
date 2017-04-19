describe('Test DLC', function() {

  it('should search', function() {
    browser.get('http://designlights/');

    element(by.model('dlRemoteSearchBox.searchText')).sendKeys('write first protractor test');
    element(by.css('[ng-click="dlRemoteSearchBox.search()"]')).click();
    //browser.pause();


  });
});
