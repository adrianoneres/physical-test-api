import { PhysicalTestNotFoundError } from '@errors/physical-test-not-found-error';
import { makePhysicalTest } from '@test/factories/physical-test-factory';
import { InMemoryPhysicalTestsRepository } from '@test/ports/in-memory-physical-tests-repository';
import { UpdatePhysicalTestService } from './update-physical-test.service';

describe('UpdatePhysicalTestService', () => {
  it('should be able to update a physical test', async () => {
    const physicalTest = await makePhysicalTest();

    const physicalTestsRepository = new InMemoryPhysicalTestsRepository();
    physicalTestsRepository.create(physicalTest);

    const updatePhysicalTestService = new UpdatePhysicalTestService(
      physicalTestsRepository,
    );

    await updatePhysicalTestService.execute({
      id: physicalTest.id,
      name: 'updated value',
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

    const updatedPhysicalTest = await physicalTestsRepository.findByid(
      physicalTest.id,
    );

    expect(updatedPhysicalTest?.name.value).toEqual('updated value');
  });

  it('should throw an error when trying to update an unexistent physical test', async () => {
    const physicalTest = await makePhysicalTest();

    const physicalTestsRepository = new InMemoryPhysicalTestsRepository();
    const updatePhysicalTestService = new UpdatePhysicalTestService(
      physicalTestsRepository,
    );

    expect(
      async () =>
        await updatePhysicalTestService.execute({
          id: physicalTest.id,
          name: 'updated value',
          date: physicalTest.date.value,
          gender: physicalTest.gender.value,
          birthdate: physicalTest.birthdate.value,
          height: physicalTest.height!.value,
          weight: physicalTest.weight!.value,
        }),
    ).rejects.toThrow(PhysicalTestNotFoundError);
  });
});
