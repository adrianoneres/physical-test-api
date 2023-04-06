import { Injectable } from '@nestjs/common';
import { Secret, sign, verify } from 'jsonwebtoken';

import { JwtProps, JwtProvider } from '@app/ports/jwt-provider';
import { auth } from '@config/auth';
import { InvalidTokenError } from '@errors/invalid-token-error';

interface TokenProps {
  iat: number;
  exp: number;
  sub: string;
  name: string;
  email: string;
  username: string;
}

@Injectable()
export class JsonwebtokenJwtAdapter implements JwtProvider {
  public async generate({
    id,
    name,
    email,
    username,
  }: JwtProps): Promise<string> {
    const { secret, expiresIn } = auth;

    const token = sign({ name, email, username }, secret as Secret, {
      subject: id,
      expiresIn,
    });

    return token;
  }

  public async verify(token: string): Promise<JwtProps> {
    try {
      const { secret } = auth;

      const decoded = verify(token, secret as Secret);
      const { sub, name, email, username } = decoded as TokenProps;

      return {
        id: sub,
        name,
        email,
        username,
      };
    } catch (error) {
      throw new InvalidTokenError();
    }
  }
}
