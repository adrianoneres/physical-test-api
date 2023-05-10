import { Decimal } from 'decimal.js';

import { InvalidIntegerError } from '@errors/invalid-integer';
import { InvalidPositiveIntegerError } from '@errors/invalid-positive-integer-error';
import { RequiredValueError } from '@errors/required-value-error';

export class PositiveInteger {
  private readonly integer: number;

  get value(): number {
    return this.integer;
  }

  private validateIntegerValue(integer?: number | null): boolean {
    return (
      integer !== undefined &&
      integer !== null &&
      new Decimal(integer).isInteger()
    );
  }

  private validateIntegerPositive(integer?: number | null): boolean {
    return integer != undefined && integer != null && integer >= 0;
  }

  constructor(integer?: number | null, optional = true) {
    if (!optional && !integer) {
      throw new RequiredValueError('integer: required value');
    }

    const isIntegerValid = this.validateIntegerValue(integer);

    if (!isIntegerValid) {
      throw new InvalidIntegerError();
    }

    const isIntegerPositive = this.validateIntegerPositive(integer);

    if (!isIntegerPositive) {
      throw new InvalidPositiveIntegerError();
    }

    this.integer = integer!;
  }
}
