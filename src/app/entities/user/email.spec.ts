import { InvalidEmailDomainError } from '@errors/invalid-email-domain-error';
import { InvalidEmailDomainSegmentError } from '@errors/invalid-email-domain-segment-error';
import { InvalidEmailLengthError } from '@errors/invalid-email-length-error';
import { InvalidEmailLocalError } from '@errors/invalid-email-local-error';
import { InvalidEmailPatternError } from '@errors/invalid-email-pattern-error';
import { Email } from './email';

describe('Email', () => {
  it('should be able to create an email', () => {
    const name = new Email('johndoe@email.com');

    expect(name.value).toBeTruthy();
  });

  it('should not be able to create an email with less than 5 characters', () => {
    expect(() => new Email('j@em')).toThrow(InvalidEmailLengthError);
  });

  it('should not be able to create an email with more than 320 characters', () => {
    expect(() => new Email('j'.repeat(321))).toThrow(InvalidEmailLengthError);
  });

  it('should not be able to create an email with an invalid pattern', () => {
    expect(() => new Email('johndoeemailcom')).toThrow(
      InvalidEmailPatternError,
    );
  });

  it('should not be able to create an email with an email local with more than 64 characters', () => {
    expect(() => new Email('a'.repeat(65) + '@email.com')).toThrow(
      new InvalidEmailLocalError(),
    );
  });

  it('should not be able to create an email with an email domain with more than 240 characters', () => {
    expect(() => new Email('johndoe@email.' + 'c'.repeat(241))).toThrow(
      InvalidEmailDomainError,
    );
  });

  it('should not be able to create an email with segments with more than 63 characters', () => {
    expect(() => new Email('johndoe@email.com.' + 'a'.repeat(64))).toThrow(
      InvalidEmailDomainSegmentError,
    );
  });
});
