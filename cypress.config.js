const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com/',
    pageLoadTimeout: 30000,  // Increase page load timeout to 30 seconds
    defaultCommandTimeout: 15000, // Increase command timeout to 15 seconds
  },
});
