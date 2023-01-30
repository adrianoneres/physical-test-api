import { InvalidPastDateError } from '@errors/invalid-past-date-error';
import { PastDate } from './past-date';

describe('PastDate', () => {
  it('should be able to create a past date', () => {
    const pastDate = new PastDate(new Date(1900, 0, 1));

    expect(pastDate.value).toBeTruthy();
  });

  it('should not be able to create a past date in a future date', () => {
    const nextYear = new Date().getFullYear() + 1;

    expect(() => new PastDate(new Date(nextYear, 0, 1))).toThrow(
      InvalidPastDateError,
    );
  });
});
