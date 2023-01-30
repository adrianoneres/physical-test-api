import { InvalidPositiveDecimalError } from '@errors/invalid-positive-decimal-error';
import { PositiveDecimal } from './positive-decimal';

describe('PositiveDecimal', () => {
  it('should be able to create a positive decimal', () => {
    const positiveDecimal = new PositiveDecimal(1.42);

    expect(positiveDecimal.value).toEqual(1.42);
  });

  it('should not be able to create a positive decimal with a negative number', () => {
    expect(() => new PositiveDecimal(-0.42)).toThrow(
      InvalidPositiveDecimalError,
    );
  });
});
