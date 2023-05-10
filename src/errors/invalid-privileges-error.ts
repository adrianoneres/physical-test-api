import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class InvalidPrivilegesError extends AppError {
  constructor(message = 'invalid privileges') {
    super(message, StatusCodes.FORBIDDEN);
  }
}
