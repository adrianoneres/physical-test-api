import { Decimal } from 'decimal.js';

import { InvalidPositiveDecimalError } from '@errors/invalid-positive-decimal-error';

export class PositiveDecimal {
  private readonly decimal: number;

  get value(): number {
    return this.decimal;
  }

  private validateDecimalPositive(decimal: number | Decimal | null): boolean {
    return !!decimal && decimal > 0;
  }

  constructor(decimal: number | Decimal | null) {
    console.log('>> is positive decimal?', decimal);
    const isDecimalPositive = this.validateDecimalPositive(decimal);

    if (!isDecimalPositive) {
      throw new InvalidPositiveDecimalError();
    }

    this.decimal = new Decimal(decimal!).toNumber();
  }
}
