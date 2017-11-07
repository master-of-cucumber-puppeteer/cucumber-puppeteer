const { defineSupportCode } = require('cucumber')

const puppeteer = require('puppeteer')

defineSupportCode(({ Given }) => {
  Given('on page', async function () {
    return this.page.goto('https://google.com');
  })
})
