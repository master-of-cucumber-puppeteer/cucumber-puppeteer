const fs = require('fs')
const util = require('util')

const screenshotsDir = `${process.cwd()}/.screenshots`
const statAsync = util.promisify(fs.stat)
const mkdirAsync = util.promisify(fs.mkdir)

;(async function () {
  console.log('Ensuring that screenshots directory exists....')
  try {
    await mkdirAsync(screenshotsDir)
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.log('Screenshots directory already exists')
    } else {
      console.error('Error creating screenshots directory', err)
    }
  }
})()
