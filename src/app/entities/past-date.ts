import { isPast } from 'date-fns';

import { InvalidPastDateError } from '@errors/invalid-past-date-error';
import { RequiredValueError } from '@errors/required-value-error';

export class PastDate {
  private readonly date: Date;

  get value(): Date {
    return this.date;
  }

  private validatePastDate(date?: Date): boolean {
    return isPast(date!);
  }

  constructor(date?: Date, optional = true) {
    if (!optional && !date) {
      throw new RequiredValueError('date: required vaule');
    }

    const isPastDate = this.validatePastDate(date);

    if (!isPastDate) {
      throw new InvalidPastDateError();
    }

    this.date = date!;
  }
}
