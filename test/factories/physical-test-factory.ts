import { Gender } from '@app/entities/gender';
import { Name } from '@app/entities/name';
import { PastDate } from '@app/entities/past-date';
import { PhysicalTest, PhysicalTestProps } from '@app/entities/physical-test';
import { PositiveDecimal } from '@app/entities/positive-decimal';
import { PositiveInteger } from '@app/entities/positive-integer';

type Override = Partial<PhysicalTestProps>;

export async function makePhysicalTest(override: Override = {}) {
  return new PhysicalTest({
    date: new PastDate(new Date(2023, 0, 1)),
    name: new Name('John Doe'),
    gender: new Gender('M'),
    birthdate: new PastDate(new Date(2000, 0, 1)),
    height: new PositiveDecimal(1.85),
    weight: new PositiveDecimal(85.5),
    flexibilityFirstAttempt: new PositiveDecimal(0.35),
    flexibilitySecondAttempt: new PositiveDecimal(0.45),
    flexibilityEvaluator: new Name('Jane Doe'),
    wingspan: new PositiveDecimal(1.85),
    wingspanEvaluator: new Name('Jane Doe'),
    strengthResistance: new PositiveInteger(30),
    strengthResistanceEvaluator: new Name('Jane Doe'),
    muscularEnduranceFirstAttempt: new PositiveInteger(15),
    muscularEnduranceSecondAttempt: new PositiveInteger(17),
    muscularEnduranceEvaluator: new Name('Jane Doe'),
    lowerLimbStrengthFirstAttempt: new PositiveDecimal(1.15),
    lowerLimbStrengthSecondAttempt: new PositiveDecimal(1.25),
    lowerLimbStrengthEvaluator: new Name('Jane Doe'),
    upperLimbStrengthFirstAttempt: new PositiveDecimal(1.35),
    upperLimbStrengthSecondAttempt: new PositiveDecimal(1.45),
    upperLimbStrengthEvaluator: new Name('Jane Doe'),
    agilityFirstAttempt: new PositiveDecimal(5.23),
    agilitySecondAttempt: new PositiveDecimal(5.42),
    agilityEvaluator: new Name('Jane Doe'),
    generalResistance: new PositiveDecimal(2.33),
    generalResistanceEvaluator: new Name('Jane Doe'),
    speed: new PositiveDecimal(11.23),
    speedEvaluator: new Name('Jane Doe'),
    ...override,
  });
}
