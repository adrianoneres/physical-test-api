import { Injectable } from '@nestjs/common';

import { UsersRepository } from '@app/ports/users-repository';
import { HashProvider } from '@app/ports/hash-provider';
import { JwtProvider } from '@app/ports/jwt-provider';
import { InvalidUsernameOrPasswordError } from '@errors/invalid-username-password-error';
import { User } from '@app/entities/user';

interface SignInRequest {
  username: string;
  password: string;
}

interface SignInResponse {
  access_token: string;
  user: User;
}

@Injectable()
export class SignInService {
  constructor(
    private usersRepository: UsersRepository,
    private hashProvider: HashProvider,
    private jwtProvider: JwtProvider,
  ) {}

  async execute(request: SignInRequest): Promise<SignInResponse> {
    const { username, password } = request;

    const user = await this.usersRepository.findByUsername(username);

    if (!user) {
      throw new InvalidUsernameOrPasswordError();
    }

    const isPasswordMatches = await this.hashProvider.compare(
      password,
      user.password.value,
    );

    if (!isPasswordMatches) {
      throw new InvalidUsernameOrPasswordError();
    }

    const token = await this.jwtProvider.generate({
      id: user.id,
      name: user.name.value,
    });

    return { access_token: token, user };
  }
}
