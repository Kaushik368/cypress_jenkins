const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  // require('cypress-mochawesome-reporter/plugin')(on);
  //implement node event listeners here
  //this is required for the preprocessor to be generate json, were my test are written
  return config;
  }

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    

    
   specPattern:'cypress/integration/*.js',

  
  },
 chromeWebSecurity:false
});
