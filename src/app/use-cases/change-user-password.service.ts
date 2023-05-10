import { Injectable } from '@nestjs/common';

import { UsersRepository } from '@app/ports/users-repository';
import { HashProvider } from '@app/ports/hash-provider';
import { InvalidPasswordConfirmationError } from '@errors/invalid-password-confirmation-error';
import { RegisterNotFoundError } from '@errors/register-not-found-error';
import { InvalidUsernameOrPasswordError } from '@errors/invalid-username-password-error';

interface ChangeUserPasswordRequest {
  id: string;
  password: string;
  new_password: string;
  new_password_confirmation: string;
}

type ChangeUserPasswordResponse = void;

@Injectable()
export class ChangeUserPasswordService {
  constructor(
    private usersRepository: UsersRepository,
    private hashProvider: HashProvider,
  ) {}

  async execute({
    id,
    password,
    new_password,
    new_password_confirmation,
  }: ChangeUserPasswordRequest): Promise<ChangeUserPasswordResponse> {
    if (new_password !== new_password_confirmation) {
      throw new InvalidPasswordConfirmationError();
    }

    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new RegisterNotFoundError('user: not found');
    }

    const userPassword = user.username.value + password;
    const isPasswordMatches = await this.hashProvider.compare(
      userPassword,
      user.password.value,
    );

    if (!isPasswordMatches) {
      throw new InvalidUsernameOrPasswordError();
    }

    const userNewPassword = user.username.value + new_password;
    const userNewPasswordHash = await this.hashProvider.generate(
      userNewPassword,
    );

    await this.usersRepository.changePassword(id, userNewPasswordHash);
  }
}
