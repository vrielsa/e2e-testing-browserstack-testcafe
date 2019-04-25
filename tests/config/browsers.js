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

exports.desktop = DESKTOP_BROWSERS;
exports.mobile = MOBILE_BROWSERS;