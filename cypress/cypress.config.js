const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://www.amazon.in/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight:800,
    viewportWidth:1300
  },
  chromeWebSecurity: false
});
