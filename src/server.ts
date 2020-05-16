import http from "http";
import express from "express";
import { applyMiddleware } from "./utils";
import middleware from "./middleware";

const router = express();
const { PORT = 3000 } = process.env;
const server = http.createServer(router);

applyMiddleware(middleware, router);

server.listen(PORT, () => {
  console.log(`Server is runing http://localhost:${PORT}...`);
});
