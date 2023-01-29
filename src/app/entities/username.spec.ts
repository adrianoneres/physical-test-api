import { InvalidUsernameLengthError } from '@errors/invalid-username-length-error';
import { Username } from './username';

describe('Username', () => {
  it('should be able to create an username', () => {
    const username = new Username('johndoe');

    expect(username.value).toBeTruthy();
  });

  it('should not be able to create an username with less than 3 characters', () => {
    expect(() => new Username('j')).toThrow(InvalidUsernameLengthError);
  });

  it('should not be able to create an username with more than 240 characters', () => {
    expect(() => new Username('j'.repeat(241))).toThrow(
      InvalidUsernameLengthError,
    );
  });
});
