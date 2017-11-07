const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'foundation',
  jsonFile: '.reports/cucumber_report.json',
  output: '.reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true
};

reporter.generate(options);
