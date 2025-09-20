// config/swagger.js
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Product - Supplier API",
      version: "1.0.0",
      description: "RESTful API cho quản lý Suppliers và Products",
    },
    servers: [
      {
        url: "http://localhost:3000", // URL backend
      },
    ],
  },
  apis: ["./routes/*.js"], // Quét comment trong route
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerSpec };
