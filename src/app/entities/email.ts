import { InvalidEmailDomainError } from '@errors/invalid-email-domain-error';
import { InvalidEmailDomainSegmentError } from '@errors/invalid-email-domain-segment-error';
import { InvalidEmailLengthError } from '@errors/invalid-email-length-error';
import { InvalidEmailLocalError } from '@errors/invalid-email-local-error';
import { InvalidEmailPatternError } from '@errors/invalid-email-pattern-error';

const PATTERN =
  /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

export class Email {
  private readonly email: string;

  get value(): string {
    return this.email;
  }

  private validateEmailLength(email: string): boolean {
    return !!email && email.length > 5 && email.length <= 320;
  }

  private validateEmailPattern(email: string): boolean {
    return PATTERN.test(email);
  }

  private validateEmailLocal(email: string): boolean {
    const [local] = email.split('@');

    return !!local && local.length > 0 && local.length <= 64;
  }

  private validateEmailDomain(email: string): boolean {
    const [, domain] = email.split('@');

    return !!domain && domain.length > 0 && domain.length <= 240;
  }

  private validateDomainSegments(email: string): boolean {
    const [, domain] = email.split('@');
    const domainSegments = domain.split('.');

    const hasInvalidSegmentLength = domainSegments.some(
      segment => segment.length > 63,
    );

    return !!domainSegments && !hasInvalidSegmentLength;
  }

  constructor(email: string) {
    const isEmailLengthValid = this.validateEmailLength(email);

    if (!isEmailLengthValid) {
      throw new InvalidEmailLengthError();
    }

    const isValidEmailPattern = this.validateEmailPattern(email);

    if (!isValidEmailPattern) {
      throw new InvalidEmailPatternError();
    }

    const isValidEmailLocal = this.validateEmailLocal(email);

    if (!isValidEmailLocal) {
      throw new InvalidEmailLocalError();
    }

    const isValidEmailDomain = this.validateEmailDomain(email);

    if (!isValidEmailDomain) {
      throw new InvalidEmailDomainError();
    }

    const isValidEmailDomainSegments = this.validateDomainSegments(email);

    if (!isValidEmailDomainSegments) {
      throw new InvalidEmailDomainSegmentError();
    }

    this.email = email;
  }
}
