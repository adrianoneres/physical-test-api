import { isPast } from 'date-fns';

import { InvalidPastDateError } from '@errors/invalid-past-date-error';

export class PastDate {
  private readonly date: Date;

  get value(): Date {
    return this.date;
  }

  private validateDateInPast(date: Date): boolean {
    return isPast(date);
  }

  constructor(date: Date) {
    const isDateInPastValid = this.validateDateInPast(date);

    if (!isDateInPastValid) {
      throw new InvalidPastDateError();
    }

    this.date = date;
  }
}
