import { makePhysicalTest } from '@test/factories/physical-test-factory';
import { InMemoryPhysicalTestsRepository } from '@test/repositories/in-memory-physical-tests-repository';
import { CreatePhysicalTestService } from './create-physical-test.service';

describe('CreatePhysicalTestService', () => {
  it('should be able to create a physical test', async () => {
    const physicalTest = await makePhysicalTest();

    const physicalTestsRepository = new InMemoryPhysicalTestsRepository();
    const createPhysicalTestService = new CreatePhysicalTestService(
      physicalTestsRepository,
    );

    await createPhysicalTestService.execute({
      name: physicalTest.name.value,
      date: physicalTest.date.value,
      gender: physicalTest.gender.value,
      birthdate: physicalTest.birthdate.value,
      height: physicalTest.height!.value,
      weight: physicalTest.weight!.value,
      flexibility_first_attempt: physicalTest.flexibilityFirstAttempt!.value,
      flexibility_second_attempt: physicalTest.flexibilitySecondAttempt!.value,
      flexibility_evaluator: physicalTest.flexibilityEvaluator!.value,
      wingspan: physicalTest.wingspan!.value,
      wingspan_evaluator: physicalTest.wingspanEvaluator!.value,
      strength_resistance: physicalTest.strengthResistance!.value,
      strength_resistance_evaluator:
        physicalTest.strengthResistanceEvaluator!.value,
      muscular_endurance_first_attempt:
        physicalTest.muscularEnduranceFirstAttempt!.value,
      muscular_endurance_second_attempt:
        physicalTest.muscularEnduranceSecondAttempt!.value,
      muscular_endurance_evaluator:
        physicalTest.muscularEnduranceEvaluator!.value,
      lower_limb_strength_first_attempt:
        physicalTest.lowerLimbStrengthFirstAttempt!.value,
      lower_limb_strength_second_attempt:
        physicalTest.lowerLimbStrengthSecondAttempt!.value,
      lower_limb_strength_evaluator:
        physicalTest.lowerLimbStrengthEvaluator!.value,
      upper_limb_strength_first_attempt:
        physicalTest.upperLimbStrengthFirstAttempt!.value,
      upper_limb_strength_second_attempt:
        physicalTest.upperLimbStrengthSecondAttempt!.value,
      upper_limb_strength_evaluator:
        physicalTest.upperLimbStrengthEvaluator!.value,
      agility_first_attempt: physicalTest.agilityFirstAttempt!.value,
      agility_second_attempt: physicalTest.agilitySecondAttempt!.value,
      agility_evaluator: physicalTest.agilityEvaluator!.value,
      general_resistance: physicalTest.generalResistance!.value,
      general_resistance_evaluator:
        physicalTest.generalResistanceEvaluator!.value,
      speed: physicalTest.speed!.value,
      speed_evaluator: physicalTest.speedEvaluator!.value,
    });

    const physicalTests = await physicalTestsRepository.findAll();

    expect(physicalTests.length).toBe(1);
  });
});
