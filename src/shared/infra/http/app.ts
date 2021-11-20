import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";

import "express-async-errors";
import { AppError } from '@shared/Errors/AppError';
import { router } from './routes';

import "../../container";
import "../typeorm/index";

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
