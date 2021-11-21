import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";

import "express-async-errors";
import { router } from './routes';

import "../../container";
import "../typeorm/index";
import { AppError } from '@shared/Errors/AppError';

const app = express();

app.use(express.json());
app.use(router);

app.use(
  (err: Error, _request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
