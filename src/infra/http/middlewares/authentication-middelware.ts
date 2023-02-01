import { NestMiddleware } from '@nestjs/common';
import { verify } from 'jsonwebtoken';

import { auth } from '@config/auth';
import { UnauthorizedUserError } from '@errors/unauthorized-user-error';

export interface TokenPaylodProps {
  iat: number;
  exp: number;
  sub: string;
}

export class AuthenticationMiddleware implements NestMiddleware {
  use(request: any, response: any, next: (error?: any) => void) {
    try {
      const authorizationHeader = request.headers.authorization;

      if (!authorizationHeader) {
        throw new UnauthorizedUserError('token: unexistent');
      }

      const [, token] = authorizationHeader.split(' ');
      const { secret } = auth;
      const decoded = verify(token, secret as string);

      const { sub } = decoded as TokenPaylodProps;

      request.user = {
        id: sub,
      };

      return next();
    } catch {
      throw new UnauthorizedUserError('token: invalid');
    }
  }
}
