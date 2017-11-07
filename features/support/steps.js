const { defineSupportCode } = require('cucumber')

const assert = require('../../util/assert');

defineSupportCode(({ Given }) => {
  Given('on page', async function () {
    await this.page.goto('https://google.com');
  })
})
