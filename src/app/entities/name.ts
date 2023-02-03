import { InvalidNameLengthError } from '@errors/invalid-name-length-error';
import { RequiredValueError } from '@errors/required-value-error';

export class Name {
  private readonly name: string;

  get value(): string {
    return this.name;
  }

  private validateNameLenght(name?: string | null): boolean {
    return !!name && name.length >= 3 && name.length <= 240;
  }

  constructor(name?: string | null, optional = true) {
    if (!optional && !name) {
      throw new RequiredValueError('name: required vaule');
    }

    const isNameLengthValid = this.validateNameLenght(name);

    if (!isNameLengthValid) {
      throw new InvalidNameLengthError();
    }

    this.name = name!;
  }
}
