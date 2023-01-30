import { Decimal } from 'decimal.js';

import { InvalidPositiveDecimalError } from '@errors/invalid-positive-decimal-error';

export class PositiveDecimal {
  private readonly decimal: number;

  get value(): number {
    return this.decimal;
  }

  private validateDecimalPositive(decimal: number): boolean {
    return decimal > 0;
  }

  constructor(decimal: number) {
    const isDecimalPositive = this.validateDecimalPositive(decimal);

    if (!isDecimalPositive) {
      throw new InvalidPositiveDecimalError();
    }

    this.decimal = new Decimal(decimal).toNumber();
  }
}
