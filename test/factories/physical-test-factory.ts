import { Gender } from '@app/entities/gender';
import { Name } from '@app/entities/name';
import { PastDate } from '@app/entities/past-date';
import { PhysicalTest, PhysicalTestProps } from '@app/entities/physical-test';
import { PositiveDecimal } from '@app/entities/positive-decimal';
import { PositiveInteger } from '@app/entities/positive-integer';
import { makeInstitution } from './institution-factory';
import { makeProfessional } from './professional-factory';

type Override = Partial<PhysicalTestProps>;

export async function makePhysicalTest(override: Override = {}) {
  return new PhysicalTest({
    date: new PastDate(new Date(2023, 0, 1)),
    institution: await makeInstitution(),
    professional: await makeProfessional(),
    name: new Name('John Doe'),
    gender: new Gender('M'),
    birthdate: new PastDate(new Date(2000, 0, 1)),
    height: new PositiveDecimal(1.85),
    weight: new PositiveDecimal(85.5),
    flexibilityFirstAttempt: new PositiveDecimal(0.35),
    flexibilitySecondAttempt: new PositiveDecimal(0.45),
    wingspan: new PositiveDecimal(1.85),
    strengthResistance: new PositiveInteger(30),
    muscularEnduranceFirstAttempt: new PositiveInteger(15),
    muscularEnduranceSecondAttempt: new PositiveInteger(17),
    lowerLimbStrengthFirstAttempt: new PositiveDecimal(1.15),
    lowerLimbStrengthSecondAttempt: new PositiveDecimal(1.25),
    upperLimbStrengthFirstAttempt: new PositiveDecimal(1.35),
    upperLimbStrengthSecondAttempt: new PositiveDecimal(1.45),
    agilityFirstAttempt: new PositiveDecimal(5.23),
    agilitySecondAttempt: new PositiveDecimal(5.42),
    generalResistance: new PositiveDecimal(2.33),
    speed: new PositiveDecimal(11.23),
    ...override,
  });
}
