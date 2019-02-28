let PageObj = function() {

    this.searchInput = $('[type=search]');
    this.searchResults = $(".search-results");
    this.getStartedBtn = element(by.linkText("GET STARTED"));
    this.hamburgerBtn = $(".hamburger.mat-button");
    this.leftMenu = $(".mat-drawer-inner-container");

    this.get = function(url){
        browser.get(url);
    }
    
    this.setNewSearchText = function(text){
        this.searchInput.sendKeys(text);
    }

    this.getStartedButtonOnClick = function(){
        this.getStartedBtn.click();
    }

    this.hamburgerButtonOnClick = function(){
        this.hamburgerBtn.click();
    }







}

module.exports = new PageObj();


/*


let Menus = function() {

    this.topMenuItems = $$("#nav > li > a");
    
    this.clickOnTopMenuItem = function(menuItemName) {
            element(by.id("nav"))
                .element(by.linkText(menuItemName))
                .click();  
    };


    this.asideMenu = $(".aside__menu.sticky-block");

    this.leftMenuItems = $$(".aside__menu-list > li > a");
    this.clickOnLeftMenuItems = function (menuItemsName) {
        $$(".aside__menu-list")
        .element(by.LinkText(menuItemsName))
        .click();
    }; 
};

module.exports = new Menus();

*/