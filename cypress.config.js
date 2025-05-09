const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://homolog-shop-ecommerce.szsolucoes.com.br",
    viewportWidth: 1280,   // Aumenta largura
    viewportHeight: 800    // Aumenta altura
  }
});