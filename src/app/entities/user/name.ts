import { InvalidNameLengthError } from '@errors/InvalidNameLengthError';

export class Name {
  private readonly name: string;

  get value(): string {
    return this.name;
  }

  private validateNameLenght(name: string): boolean {
    return !!name && name.length >= 3 && name.length <= 240;
  }

  constructor(name: string) {
    const isNameLengthValid = this.validateNameLenght(name);

    if (!isNameLengthValid) {
      throw new InvalidNameLengthError();
    }

    this.name = name;
  }
}
