import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class InvalidUsernameOrPasswordError extends AppError {
  constructor(message = 'username/password: invalid username or password') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
