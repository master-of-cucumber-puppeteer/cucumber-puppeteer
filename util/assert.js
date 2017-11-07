const assert = require('assert')
const uuid = require('uuid')

const cwd = process.cwd();

function _wrapAssertion (assertionMethod) {
  return async function assert (page, condition, message) {
    try {
      assertionMethod(condition, message)
    } catch (err) {
      const path = `${cwd}/${uuid.v4()}.png`

      await page.screenshot({ path })

      throw err
    }
  }
}

const wrappedAssert = _wrapAssertion(assert)

for (const key in assert) {
  wrappedAssert[key] = _wrapAssertion(assert[key])
}

module.exports = wrappedAssert
