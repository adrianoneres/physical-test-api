import { InvalidGenderError } from '@errors/invalid-gender-error';

export class Gender {
  private readonly gender: 'M' | 'F';

  get value(): 'M' | 'F' {
    return this.gender;
  }

  private validateGenderOptions(gender: string): boolean {
    return ['m', 'f', 'M', 'F'].includes(gender);
  }

  constructor(gender: string) {
    const isGenderValid = this.validateGenderOptions(gender);

    if (!isGenderValid) {
      throw new InvalidGenderError();
    }

    this.gender = gender.toUpperCase() as 'M' | 'F';
  }
}
