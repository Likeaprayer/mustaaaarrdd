import { Request, Response, NextFunction } from 'express';
import { BaseError } from '../../utils/errors';

export const errorHandlingMiddleware = async (error: BaseError, req: Request, res: Response, next: NextFunction) => {
    let parsed_error = error;
  
    res.status(500)
    .json({
      status: 'error',
      data: {
        message: parsed_error.message || 'Something went wrong',
        code: error?.status || 500,
        stack:
          process.env.NODE_ENV === 'development'
            ? error.stack
            : {},
      },
    });
};