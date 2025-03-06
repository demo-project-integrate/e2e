const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://<frontend-private-ip>",
    env: {
      apiUrl: "http://<backend-private-ip>"
    }
  }
});
