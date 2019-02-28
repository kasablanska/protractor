let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    framework: "jasmine",
    seleniumAddress: "http://localhost:4444/wd/hub",

    jasmineNodeOpts: {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 360000,
    },
    
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
        args: ['--window-size=1440,900']
        }
     //   browserName: 'safari',
    },

    specs: 
        "test.js",

    params: {
    url: {
        root: "https://angular.io",
        quickstart: "/guide/quickstart",
        }
    },

    onPrepare: function(){
        jasmine.getEnv().addReporter(new SpecReporter({
        displayFailuresSummary: true,
        displayFailuredSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true
        }));

    } 
    
};
