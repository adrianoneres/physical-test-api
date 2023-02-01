import { InvalidNameLengthError } from '@errors/invalid-name-length-error';

export class Name {
  private readonly name: string;

  get value(): string {
    return this.name;
  }

  private validateNameLenght(name: string | null): boolean {
    return !!name && name.length >= 3 && name.length <= 240;
  }

  constructor(name: string | null) {
    const isNameLengthValid = this.validateNameLenght(name);

    if (!isNameLengthValid) {
      throw new InvalidNameLengthError();
    }

    this.name = name!;
  }
}
