import { InvalidPasswordLengthError } from '@errors/InvalidPasswordLengthError';

export class Password {
  private readonly password: string;

  get value(): string {
    return this.password;
  }

  private validatePasswordLenght(password: string): boolean {
    return !!password && password.length >= 6 && password.length <= 24;
  }

  constructor(password: string) {
    const isPasswordLengthValid = this.validatePasswordLenght(password);

    if (!isPasswordLengthValid) {
      throw new InvalidPasswordLengthError();
    }

    this.password = password;
  }
}
