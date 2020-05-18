import { Router, Request, Response, NextFunction } from "express";
import * as ErrorHandler from "../utils/errorHandler";

const handler404Error = (router: Router) => {
  router.use((req: Request, res: Response) => {
    ErrorHandler.notFoundError();
  });
};

const handlerClientError = (router: Router) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.clientError(err, res, next);
  });
};

const handlerServerError = (router: Router) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.serverError(err, res, next);
  });
};

export default [handler404Error, handlerClientError, handlerServerError];
