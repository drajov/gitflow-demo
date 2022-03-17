import { SwaggerDefinition } from "swagger-jsdoc";
import env from "../config/env";
const swaggerDefinition: SwaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Node server bolierplate documentation",
    version: process.env.npm_package_version || "1.0.0",
  },
  servers: [
    {
      url: `http://localhost:${env.port}/v1`,
    },
  ],
};

export default swaggerDefinition;
