const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/TEST-[hash].xml',
  },
  eyesIsDisabled: false,
  eyesFailCypressOnDiff: true,
  eyesDisableBrowserFetching: false,
  eyesTestConcurrency: 5,
  appliConfFile: {
    appName: 'Automation Bookstore',
    batch: {
      id: '009c4792-5497-4341-951f-ce3b83c27fc8',
    },
  },
  eyesIsGlobalHooksSupported: false,
  eyesPort: 45057,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://abookstore.azurewebsites.net/',
    specPattern: './cypress/integration' //automation-bookstore/e2e/cypress/fixtures
  },
})


require('@applitools/eyes-cypress')(module);
