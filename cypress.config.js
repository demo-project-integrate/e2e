const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://20.244.102.186:8081",
    env: {
      apiUrl: "http://20.244.102.185:8081"
    }
  }
});
