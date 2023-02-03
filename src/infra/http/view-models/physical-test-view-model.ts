import { PhysicalTest } from '@app/entities/physical-test';

export class PhysicalTestViewModel {
  static toHttp(physicalTest: PhysicalTest) {
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
}
