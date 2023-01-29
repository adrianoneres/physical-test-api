import { InvalidPasswordLengthError } from '@errors/invalid-password-length-error';
import { Password } from './password';

describe('Password', () => {
  it('should be able to create a password', () => {
    const name = new Password('123456');

    expect(name.value).toBeTruthy();
  });

  it('should not be able to create a password with less than 5 characters', () => {
    expect(() => new Password('1')).toThrow(InvalidPasswordLengthError);
  });

  it('should not be able to create a password with more than 240 characters', () => {
    expect(() => new Password('1'.repeat(241))).toThrow(
      InvalidPasswordLengthError,
    );
  });
});
