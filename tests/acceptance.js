require('dotenv').config({
  path: './tests/.env'
});
const glob = require('glob-promise');
const createTestCafe = require('testcafe');
const browsers = require('./config/browsers');

async function createTestCafeInstance(browsers, testFiles) {
  let testCafe;
  await createTestCafe()
    .then(testCafeInstance => {
      testCafe = testCafeInstance;
      return testCafe
        .createRunner()
        .src(testFiles)
        .browsers(browsers)
        .run({
          skipJsErrors: true
        });
    })
    .then(() => {
      testCafe.close();
    })
    .catch(error => console.error(error));
}

async function getScenarioFiles(pattern) {
  return await glob(pattern)
    .then(files => files)
    .catch(error => console.error(error));
}

async function startTests(browsers, createTestCafeInstance, mobile = false) {
  const folder = mobile ? 'mobile' : 'desktop';
  const scenarioFiles = await getScenarioFiles(`tests/scenarios/${folder}/*.js`);

  for (let index = 0; index < browsers.length; index++) {
    await createTestCafeInstance(browsers[index], scenarioFiles)
  }
}

startTests(browsers.desktop, createTestCafeInstance)
  .then(() => startTests(browsers.mobile, createTestCafeInstance, true));