import { InvalidIntegerError } from '@errors/invalid-integer';
import { InvalidPositiveIntegerError } from '@errors/invalid-positive-integer-error';
import { PositiveInteger } from './positive-integer';

describe('PositiveInteger', () => {
  it('should be able to create a positive integer', () => {
    const positiveInteger = new PositiveInteger(1);

    expect(positiveInteger.value).toEqual(1);
  });

  it('should not be able to create a positive integer with a decimal number', () => {
    expect(() => new PositiveInteger(1.1)).toThrow(InvalidIntegerError);
  });

  it('should not be able to create a positive integer with a negative number', () => {
    expect(() => new PositiveInteger(-1)).toThrow(InvalidPositiveIntegerError);
  });
});
