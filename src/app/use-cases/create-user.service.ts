import { Injectable } from '@nestjs/common';

import { Name } from '@app/entities/name';
import { Email } from '@app/entities/email';
import { Username } from '@app/entities/username';
import { Password } from '@app/entities/password';
import { User } from '@app/entities/user';
import { UsersRepository } from '@app/ports/users-repository';
import { HashProvider } from '@app/ports/hash-provider';
import { InvalidPrivilegesError } from '@errors/invalid-privileges-error';
import { DuplicateRegisterError } from '@errors/duplicate-register-error';
import { InvalidPasswordConfirmationError } from '@errors/invalid-password-confirmation-error';

interface CreateUserRequest {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  password_confirmation: string;
}

type CreateUserResponse = void;

@Injectable()
export class CreateUserService {
  constructor(
    private usersRepository: UsersRepository,
    private hashProvider: HashProvider,
  ) {}

  async execute({
    id,
    name,
    email,
    username,
    password,
    password_confirmation,
  }: CreateUserRequest): Promise<CreateUserResponse> {
    const user = await this.usersRepository.findById(id);

    if (!user?.isAdmin) {
      throw new InvalidPrivilegesError();
    }

    const existingUser = await this.usersRepository.findByUsername(username);

    if (!!existingUser) {
      throw new DuplicateRegisterError(`duplicate: user ${username}`);
    }

    if (password !== password_confirmation) {
      throw new InvalidPasswordConfirmationError();
    }

    const userPassword = await this.hashProvider.generate(username + password);

    const newUser = new User({
      name: new Name(name, false),
      email: new Email(email),
      username: new Username(username),
      password: new Password(userPassword),
    });

    await this.usersRepository.create(newUser);
  }
}
