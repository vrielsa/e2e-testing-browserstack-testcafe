const glob = require('glob-promise');
const createTestCafe = require('testcafe');

const DESKTOP_BROWSERS = [
  'browserstack:safari',
  'browserstack:edge@15.0:Windows 10',
  'browserstack:ie',
  'browserstack:chrome',
  'browserstack:firefox'
];

const MOBILE_BROWSERS = [
  'browserstack:iPhone 6S@12',
  'browserstack:Google Pixel 2@9.0'
];

async function createTestCafeInstance(browsers, testFiles) {
  let testcafe;
  await createTestCafe()
    .then(tc => {
      testcafe = tc;
      return testcafe
        .createRunner()
        .src(testFiles)
        .browsers(browsers)
        .run();
    })
    .then(() => {
      testcafe.close();
    })
    .catch(err => console.error(err));
}

async function getFiles(pattern) {
  return await glob(pattern)
    .then(files => files)
    .catch(e => console.error(e));
}

async function startTests(browsers, createTestCafeInstance, mobile = false) {
  const folder = mobile ? 'mobile' : 'desktop';
  let files = await getFiles(`tests/scenarios/${folder}/*.js`);

  for (let index = 0; index < browsers.length; index++) {
    await createTestCafeInstance(browsers[index], files)
  }
}

startTests(DESKTOP_BROWSERS, createTestCafeInstance)
  .then(() => startTests(MOBILE_BROWSERS, createTestCafeInstance, true));