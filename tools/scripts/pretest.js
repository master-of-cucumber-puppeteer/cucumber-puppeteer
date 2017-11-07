const fs = require('fs')
const util = require('util')

const screenshotsDir = `${process.cwd()}/.screenshots`
const reportsDir = `${process.cwd()}/.reports`

const statAsync = util.promisify(fs.stat)
const mkdirAsync = util.promisify(fs.mkdir)

async function ensureDirectoryExists (directory) {
  console.log(`Ensuring that directory ${directory} exists....`)
  try {
    await mkdirAsync(directory)
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.log(`Directory ${directory} already exists`)
    } else {
      console.error(`Error creating directory ${directory}`, err)
    }
  }
}

;(async function () {
  await ensureDirectoryExists(screenshotsDir)
  await ensureDirectoryExists(reportsDir)
})()
