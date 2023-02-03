import { Decimal } from 'decimal.js';

import { InvalidPositiveDecimalError } from '@errors/invalid-positive-decimal-error';
import { RequiredValueError } from '@errors/required-value-error';

export class PositiveDecimal {
  private readonly decimal: number;

  get value(): number {
    return this.decimal;
  }

  private validateDecimalPositive(decimal?: number | Decimal | null): boolean {
    return !!decimal && decimal > 0;
  }

  constructor(decimal?: number | Decimal | null, optional = true) {
    if (!optional && !decimal) {
      throw new RequiredValueError('decimal: required vaule');
    }

    const isDecimalPositive = this.validateDecimalPositive(decimal);

    if (!isDecimalPositive) {
      throw new InvalidPositiveDecimalError();
    }

    this.decimal = new Decimal(decimal!).toNumber();
  }
}
