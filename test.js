const pageObj = require("./page_obj.js");
const EC = protractor.ExpectedConditions; 

const rootUrl = browser.params.url.root;
const getStartedUrl = rootUrl + browser.params.url.quickstart;

describe('angular.io test', () => {

    it('should enter a value to the search box', () => {
        pageObj.get(rootUrl);
        pageObj.setNewSearchText("component");    
        expect(pageObj.searchInput.getAttribute('value')).toEqual('component');
        expect(pageObj.searchResults.isPresent()).toBe(true);
    });

    it('should clear a value in the search box', () => {
        pageObj.searchInput.clear().then(() => {
            pageObj.searchInput.click();            //в противном случае, не прячется блок результатов.
        })
        expect(pageObj.searchInput.getAttribute('value')).toEqual('');
        expect(pageObj.searchResults.isPresent()).toBe(false);
    });

    it('should go to getStarted Url', () => {
        pageObj.getStartedButtonOnClick();
        browser.wait(EC.urlIs(getStartedUrl), 5000);
    });

    it('should close left menu', () => {
        pageObj.hamburgerButtonOnClick();
        browser.wait(EC.invisibilityOf(pageObj.leftMenu), 5000);
    });
});