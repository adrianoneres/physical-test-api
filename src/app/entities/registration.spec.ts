import { InvalidRegistrationLengthError } from '@errors/invalid-registration-length-error';
import { Registration } from './registration';

describe('Registration', () => {
  it('should be able to create a registration', () => {
    const registration = new Registration('John Doe');

    expect(registration.value).toBeTruthy();
  });

  it('should not be able to create a registration with less than 3 characters', () => {
    expect(() => new Registration('1')).toThrow(InvalidRegistrationLengthError);
  });

  it('should not be able to create a registration with more than 240 characters', () => {
    expect(() => new Registration('1'.repeat(241))).toThrow(
      InvalidRegistrationLengthError,
    );
  });
});
