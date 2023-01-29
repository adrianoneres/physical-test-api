import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class InvalidEmailDomainSegmentError extends AppError {
  constructor(message = 'email: invalid domain segment') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
