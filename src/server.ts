import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import errorHandlers from './middleware/errorHandlers';
import routes from "./services";

const router = express();
const { PORT = 3000 } = process.env;
const server = http.createServer(router);

applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

process.on("uncaughtException", (e) => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", (e) => {
  console.log(e);
  process.exit(1);
});

server.listen(PORT, () => {
  console.log(`Server is runing http://localhost:${PORT}...`);
});
