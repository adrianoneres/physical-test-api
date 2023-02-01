import { PhysicalTest as RawPhysicalTest } from '@prisma/client';

import { PhysicalTest } from '@app/entities/physical-test';
import { Name } from '@app/entities/name';
import { PastDate } from '@app/entities/past-date';
import { Gender } from '@app/entities/gender';
import { PositiveDecimal } from '@app/entities/positive-decimal';
import { PositiveInteger } from '@app/entities/positive-integer';

export class PrismaPhysicalTestMapper {
  static toPrisma(physicalTest: PhysicalTest) {
    return {
      id: physicalTest.id,
      date: physicalTest.date.value,
      name: physicalTest.name.value,
      gender: physicalTest.gender.value,
      birthdate: physicalTest.birthdate.value,
      height: physicalTest.height.value,
      weight: physicalTest.weight.value,
      flexibilityFirstAttempt: physicalTest.flexibilityFirstAttempt?.value,
      flexibilitySecondAttempt: physicalTest.flexibilitySecondAttempt?.value,
      flexibilityEvaluator: physicalTest.flexibilityEvaluator?.value,
      wingspan: physicalTest.wingspan?.value,
      wingspanEvaluator: physicalTest.wingspanEvaluator?.value,
      strengthResistance: physicalTest.strengthResistance?.value,
      strengthResistanceEvaluator:
        physicalTest.strengthResistanceEvaluator?.value,
      muscularEnduranceFirstAttempt:
        physicalTest.muscularEnduranceFirstAttempt?.value,
      muscularEnduranceSecondAttempt:
        physicalTest.muscularEnduranceSecondAttempt?.value,
      muscularEnduranceEvaluator:
        physicalTest.muscularEnduranceEvaluator?.value,
      lowerLimbStrengthFirstAttempt:
        physicalTest.lowerLimbStrengthFirstAttempt?.value,
      lowerLimbStrengthSecondAttempt:
        physicalTest.lowerLimbStrengthSecondAttempt?.value,
      lowerLimbStrengthEvaluator:
        physicalTest.lowerLimbStrengthEvaluator?.value,
      upperLimbStrengthFirstAttempt:
        physicalTest.upperLimbStrengthFirstAttempt?.value,
      upperLimbStrengthSecondAttempt:
        physicalTest.upperLimbStrengthSecondAttempt?.value,
      upperLimbStrengthEvaluator:
        physicalTest.upperLimbStrengthEvaluator?.value,
      agilityFirstAttempt: physicalTest.agilityFirstAttempt?.value,
      agilitySecondAttempt: physicalTest.agilitySecondAttempt?.value,
      agilityEvaluator: physicalTest.agilityEvaluator?.value,
      generalResistance: physicalTest.generalResistance?.value,
      generalResistanceEvaluator:
        physicalTest.generalResistanceEvaluator?.value,
      speed: physicalTest.speed?.value,
      speedEvaluator: physicalTest.speedEvaluator?.value,
    };
  }

  static toDomain(raw: RawPhysicalTest): PhysicalTest {
    return new PhysicalTest(
      {
        date: new PastDate(raw.date),
        name: new Name(raw.name),
        gender: new Gender(raw.gender),
        birthdate: new PastDate(raw.birthdate),
        height: new PositiveDecimal(raw.height),
        weight: new PositiveDecimal(raw.weight),
        flexibilityFirstAttempt: new PositiveDecimal(
          raw.flexibilityFirstAttempt,
        ),
        flexibilitySecondAttempt: new PositiveDecimal(
          raw.flexibilitySecondAttempt,
        ),
        flexibilityEvaluator: new Name(raw.flexibilityEvaluator),
        wingspan: new PositiveDecimal(raw.wingspan),
        wingspanEvaluator: new Name(raw.wingspanEvaluator),
        strengthResistance: new PositiveInteger(raw.strengthResistance),
        strengthResistanceEvaluator: new Name(raw.strengthResistanceEvaluator),
        muscularEnduranceFirstAttempt: new PositiveInteger(
          raw.muscularEnduranceFirstAttempt,
        ),
        muscularEnduranceSecondAttempt: new PositiveInteger(
          raw.muscularEnduranceSecondAttempt,
        ),
        muscularEnduranceEvaluator: new Name(raw.muscularEnduranceEvaluator),
        lowerLimbStrengthFirstAttempt: new PositiveDecimal(
          raw.lowerLimbStrengthFirstAttempt,
        ),
        lowerLimbStrengthSecondAttempt: new PositiveDecimal(
          raw.lowerLimbStrengthSecondAttempt,
        ),
        lowerLimbStrengthEvaluator: new Name(raw.lowerLimbStrengthEvaluator),
        upperLimbStrengthFirstAttempt: new PositiveDecimal(
          raw.upperLimbStrengthFirstAttempt,
        ),
        upperLimbStrengthSecondAttempt: new PositiveDecimal(
          raw.upperLimbStrengthSecondAttempt,
        ),
        upperLimbStrengthEvaluator: new Name(raw.upperLimbStrengthEvaluator),
        agilityFirstAttempt: new PositiveDecimal(raw.agilityFirstAttempt),
        agilitySecondAttempt: new PositiveDecimal(raw.agilitySecondAttempt),
        agilityEvaluator: new Name(raw.agilityEvaluator),
        generalResistance: new PositiveDecimal(raw.generalResistance),
        generalResistanceEvaluator: new Name(raw.generalResistanceEvaluator),
        speed: new PositiveDecimal(raw.speed),
        speedEvaluator: new Name(raw.speedEvaluator),
      },
      raw.id,
    );
  }
}
