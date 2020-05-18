import { Response, NextFunction } from "express";
import { Http404Error, HttpClientError } from "./httpErrors";

export const notFoundError = () => {
  throw new Http404Error("Method not found.");
};

export const clientError = (err: Error, res: Response, next: NextFunction) => {
  if (err instanceof HttpClientError) {
    console.warn(err);
    res.status(err.statusCode).send(err.message);
  } else {
    next(err);
  }
};

export const serverError = (err: Error, res: Response, next: NextFunction) => {
  console.log(err);
  if (process.env.NODE_ENV === "production") {
    res.status(500).send("Internal Server Error");
  } else {
    res.status(500).send(err.stack);
  }
};
