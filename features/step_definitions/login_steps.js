const { cucumber } = require('cucumber');
const assert = require('assert');

cucumber(function({ Given, When, Then, And }) {

	Given(/^I navigate to \"([^\"]*)\"$/, function(text) {
		return this.page.goto(`${string}`);
	});

	When(/^I navigate to \"([^\"]*)\"$/, async function(text, selector) {
		await this.page.waitForSelector(selector, 5000);
		await this.page.type(selector, text);
	});

	And(/^I click \"([^\"]*)\"$/, async function(selector) {
		await this.page.waitForSelector(selector, 5000);
		await this.page.click(selector);
	});

	Then(/^\"([^\"]*)\" is contained in the class of the element with selector \"([^\"]*)\"$/, async function(text, selector) {
		await this.page.waitForSelector(selector, 5000);
		const elementText = await this.page.$eval(selector, el => el.value);
		assert(elementText === text);
	});
});