import { InvalidRegistrationLengthError } from '@errors/invalid-registration-length-error';
import { RequiredValueError } from '@errors/required-value-error';

export class Registration {
  private readonly registration: string;

  get value(): string {
    return this.registration;
  }

  private validateRegistrationLenght(registration?: string | null): boolean {
    return (
      !!registration && registration.length >= 3 && registration.length <= 240
    );
  }

  constructor(registration?: string | null, optional = true) {
    if (!optional && !registration) {
      throw new RequiredValueError('registration: required vaule');
    }

    const isRegistrationLengthValid =
      this.validateRegistrationLenght(registration);

    if (!isRegistrationLengthValid) {
      throw new InvalidRegistrationLengthError();
    }

    this.registration = registration!;
  }
}
