var config = require('../../nightwatch.conf.js');

module.exports = {
    'Test Button click' : function (browser) {
        browser
            .url('http://localhost/git/nightwatch-test/src/')
            .waitForElementVisible('body', 1000)
            .waitForElementVisible('button', 1000)
            .click('button')
            .pause('1000')
            .assert.containsText('#message', 'Clicked!')
            .saveScreenshot(config.imgpath(browser) + 'clicked.png')
            .end();
    }
};