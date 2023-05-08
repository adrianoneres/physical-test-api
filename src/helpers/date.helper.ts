import { differenceInYears, startOfDay } from 'date-fns';

export const calculateAge = (date: Date): number => {
  const birthdate = startOfDay(date);
  const today = startOfDay(new Date());

  return differenceInYears(today, birthdate);
};
