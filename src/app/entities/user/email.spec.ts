import { InvalidEmailDomainError } from '@errors/InvalidEmailDomainError';
import { InvalidEmailDomainSegmentError } from '@errors/InvalidEmailDomainSegmentError';
import { InvalidEmailLengthError } from '@errors/InvalidEmailLengthError';
import { InvalidEmailLocalError } from '@errors/InvalidEmailLocalError';
import { InvalidEmailPatternError } from '@errors/InvalidEmailPatternError';
import { Email } from './email';

describe('Email', () => {
  it('should be able to create an email', () => {
    const name = new Email('johndoe@email.com');

    expect(name.value).toBeTruthy();
  });

  it('should not be able to create an email with less than 5 characters', () => {
    expect(() => new Email('j@em')).toThrowError(new InvalidEmailLengthError());
  });

  it('should not be able to create an email with more than 320 characters', () => {
    expect(() => new Email('j'.repeat(321))).toThrowError(
      new InvalidEmailLengthError(),
    );
  });

  it('should not be able to create an email with an invalid pattern', () => {
    expect(() => new Email('johndoeemailcom')).toThrow(
      new InvalidEmailPatternError(),
    );
  });

  it('should not be able to create an email with an email local with more than 64 characters', () => {
    expect(() => new Email('a'.repeat(65) + '@email.com')).toThrow(
      new InvalidEmailLocalError(),
    );
  });

  it('should not be able to create an email with an email domain with more than 240 characters', () => {
    expect(() => new Email('johndoe@email.' + 'c'.repeat(241))).toThrow(
      new InvalidEmailDomainError(),
    );
  });

  it('should not be able to create an email with segments with more than 63 characters', () => {
    expect(() => new Email('johndoe@email.com.' + 'a'.repeat(64))).toThrow(
      new InvalidEmailDomainSegmentError(),
    );
  });
});
