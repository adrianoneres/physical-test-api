import { format } from 'date-fns';

import { PhysicalTest } from '@app/entities/physical-test';

export class PhysicalTestViewModel {
  static toHttp(physicalTest: PhysicalTest) {
    return {
      id: physicalTest.id,
      date: format(physicalTest.date.value, 'yyyy-MM-dd'),
      institution: {
        id: physicalTest.institution.id,
        name: physicalTest.institution.name.value,
      },
      professional: {
        id: physicalTest.professional.id,
        name: physicalTest.professional.name.value,
        registration: physicalTest.professional.registration.value,
      },
      name: physicalTest.name.value,
      gender: physicalTest.gender.value,
      birthdate: format(physicalTest.birthdate.value, 'yyyy-MM-dd'),
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
    };
  }
}
