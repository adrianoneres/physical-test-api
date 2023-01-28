import { InvalidUsernameLengthError } from '@errors/InvalidUsernameLengthError';

export class Username {
  private readonly username: string;

  get value(): string {
    return this.username;
  }

  private validateUsernameLenght(username: string): boolean {
    return !!username && username.length >= 3 && username.length <= 240;
  }

  constructor(username: string) {
    const isUsernameLengthValid = this.validateUsernameLenght(username);

    if (!isUsernameLengthValid) {
      throw new InvalidUsernameLengthError();
    }

    this.username = username;
  }
}
