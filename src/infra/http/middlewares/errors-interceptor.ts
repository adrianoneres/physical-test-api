import {
  CallHandler,
  ExecutionContext,
  HttpException,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable, throwError } from 'rxjs';

import { AppError } from '../../../errors/app-error';

export class ErrorsInterceptor implements NestInterceptor {
  intercept(
    _: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next
      .handle()
      .pipe(
        catchError((error: AppError) =>
          throwError(() => new HttpException(error.message, error.statusCode)),
        ),
      );
  }
}
