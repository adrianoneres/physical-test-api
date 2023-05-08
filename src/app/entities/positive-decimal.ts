import { Decimal } from 'decimal.js';

import { InvalidPositiveDecimalError } from '@errors/invalid-positive-decimal-error';
import { RequiredValueError } from '@errors/required-value-error';

export class PositiveDecimal {
  private readonly decimal: number;

  get value(): number {
    return this.decimal;
  }

  private validateDecimalPositive(decimal?: number | Decimal | null): boolean {
    if (decimal === null || decimal === undefined) return false;

    if (decimal instanceof Decimal) {
      return decimal.gte(0);
    }

    return decimal >= 0;
  }

  constructor(decimal?: number | Decimal | null, optional = true) {
    if (!optional && !decimal) {
      throw new RequiredValueError('decimal: required value');
    }

    const isDecimalPositive = this.validateDecimalPositive(decimal);

    if (!isDecimalPositive) {
      throw new InvalidPositiveDecimalError();
    }

    this.decimal = new Decimal(decimal!).toNumber();
  }
}
