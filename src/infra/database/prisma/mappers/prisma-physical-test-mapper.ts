import {
  Institution,
  PhysicalTest as RawPhysicalTest,
  Professional,
} from '@prisma/client';

import { PhysicalTest } from '@app/entities/physical-test';
import { Name } from '@app/entities/name';
import { PastDate } from '@app/entities/past-date';
import { Gender } from '@app/entities/gender';
import { PositiveDecimal } from '@app/entities/positive-decimal';
import { PositiveInteger } from '@app/entities/positive-integer';
import { PrismaInstitutionMapper } from './prisma-institution-mapper';
import { PrismaProfessionalMapper } from './prisma-professional-mapper';

export class PrismaPhysicalTestMapper {
  static toPrisma(physicalTest: PhysicalTest) {
    return {
      id: physicalTest.id,
      institutionId: physicalTest.institution.id,
      professionalId: physicalTest.professional.id,
      date: physicalTest.date.value,
      name: physicalTest.name.value,
      gender: physicalTest.gender.value,
      birthdate: physicalTest.birthdate.value,
      height: physicalTest.height.value,
      weight: physicalTest.weight.value,
      flexibilityFirstAttempt: physicalTest.flexibilityFirstAttempt?.value,
      flexibilitySecondAttempt: physicalTest.flexibilitySecondAttempt?.value,
      wingspan: physicalTest.wingspan?.value,
      strengthResistance: physicalTest.strengthResistance?.value,
      muscularEnduranceFirstAttempt:
        physicalTest.muscularEnduranceFirstAttempt?.value,
      muscularEnduranceSecondAttempt:
        physicalTest.muscularEnduranceSecondAttempt?.value,
      lowerLimbStrengthFirstAttempt:
        physicalTest.lowerLimbStrengthFirstAttempt?.value,
      lowerLimbStrengthSecondAttempt:
        physicalTest.lowerLimbStrengthSecondAttempt?.value,
      upperLimbStrengthFirstAttempt:
        physicalTest.upperLimbStrengthFirstAttempt?.value,
      upperLimbStrengthSecondAttempt:
        physicalTest.upperLimbStrengthSecondAttempt?.value,
      agilityFirstAttempt: physicalTest.agilityFirstAttempt?.value,
      agilitySecondAttempt: physicalTest.agilitySecondAttempt?.value,
      generalResistance: physicalTest.generalResistance?.value,
      speed: physicalTest.speed?.value,
      isActive: physicalTest.isActive,
    };
  }

  static toDomain(
    raw: RawPhysicalTest,
    institution: Institution,
    profesisonal: Professional,
  ): PhysicalTest {
    return new PhysicalTest(
      {
        date: new PastDate(raw.date),
        institution: PrismaInstitutionMapper.toDomain(institution),
        professional: PrismaProfessionalMapper.toDomain(profesisonal),
        name: new Name(raw.name),
        gender: new Gender(raw.gender),
        birthdate: new PastDate(raw.birthdate),
        height: new PositiveDecimal(raw.height),
        weight: new PositiveDecimal(raw.weight),
        flexibilityFirstAttempt: new PositiveDecimal(
          raw?.flexibilityFirstAttempt,
          true,
        ),
        flexibilitySecondAttempt: new PositiveDecimal(
          raw.flexibilitySecondAttempt,
        ),
        wingspan: new PositiveDecimal(raw.wingspan),
        strengthResistance: new PositiveInteger(raw.strengthResistance),
        muscularEnduranceFirstAttempt: new PositiveInteger(
          raw.muscularEnduranceFirstAttempt,
        ),
        muscularEnduranceSecondAttempt: new PositiveInteger(
          raw.muscularEnduranceSecondAttempt,
        ),
        lowerLimbStrengthFirstAttempt: new PositiveDecimal(
          raw.lowerLimbStrengthFirstAttempt,
        ),
        lowerLimbStrengthSecondAttempt: new PositiveDecimal(
          raw.lowerLimbStrengthSecondAttempt,
        ),
        upperLimbStrengthFirstAttempt: new PositiveDecimal(
          raw.upperLimbStrengthFirstAttempt,
        ),
        upperLimbStrengthSecondAttempt: new PositiveDecimal(
          raw.upperLimbStrengthSecondAttempt,
        ),
        agilityFirstAttempt: new PositiveDecimal(raw.agilityFirstAttempt),
        agilitySecondAttempt: new PositiveDecimal(raw.agilitySecondAttempt),
        generalResistance: new PositiveDecimal(raw.generalResistance),
        speed: new PositiveDecimal(raw.speed),
        isActive: raw.isActive,
      },
      raw.id,
    );
  }
}
