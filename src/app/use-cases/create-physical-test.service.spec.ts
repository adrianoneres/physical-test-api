import { makeInstitution } from '@test/factories/institution-factory';
import { makePhysicalTest } from '@test/factories/physical-test-factory';
import { makeProfessional } from '@test/factories/professional-factory';
import { InMemoryInstitutionsRepository } from '@test/repositories/in-memory-institutions-repository';
import { InMemoryPhysicalTestsRepository } from '@test/repositories/in-memory-physical-tests-repository';
import { InMemoryProfessionalsRepository } from '@test/repositories/in-memory-professionals-repository';
import { CreatePhysicalTestService } from './create-physical-test.service';

describe('CreatePhysicalTestService', () => {
  it('should be able to create a physical test', async () => {
    const physicalTest = await makePhysicalTest();
    const institution = await makeInstitution();
    const professional = await makeProfessional();

    const physicalTestsRepository = new InMemoryPhysicalTestsRepository();
    const institutionsRepository = new InMemoryInstitutionsRepository();
    const professionalsRepository = new InMemoryProfessionalsRepository();

    institutionsRepository.create(institution);
    professionalsRepository.create(professional);

    const createPhysicalTestService = new CreatePhysicalTestService(
      physicalTestsRepository,
      institutionsRepository,
      professionalsRepository,
    );

    await createPhysicalTestService.execute({
      date: physicalTest.date.value,
      institution_id: institution.id,
      professional_id: professional.id,
      name: physicalTest.name.value,
      gender: physicalTest.gender.value,
      birthdate: physicalTest.birthdate.value,
      height: physicalTest.height!.value,
      weight: physicalTest.weight!.value,
      flexibility_first_attempt: physicalTest.flexibilityFirstAttempt!.value,
      flexibility_second_attempt: physicalTest.flexibilitySecondAttempt!.value,
      wingspan: physicalTest.wingspan!.value,
      strength_resistance: physicalTest.strengthResistance!.value,
      muscular_endurance_first_attempt:
        physicalTest.muscularEnduranceFirstAttempt!.value,
      muscular_endurance_second_attempt:
        physicalTest.muscularEnduranceSecondAttempt!.value,
      lower_limb_strength_first_attempt:
        physicalTest.lowerLimbStrengthFirstAttempt!.value,
      lower_limb_strength_second_attempt:
        physicalTest.lowerLimbStrengthSecondAttempt!.value,
      upper_limb_strength_first_attempt:
        physicalTest.upperLimbStrengthFirstAttempt!.value,
      upper_limb_strength_second_attempt:
        physicalTest.upperLimbStrengthSecondAttempt!.value,
      agility_first_attempt: physicalTest.agilityFirstAttempt!.value,
      agility_second_attempt: physicalTest.agilitySecondAttempt!.value,
      general_resistance: physicalTest.generalResistance!.value,
      speed: physicalTest.speed!.value,
    });

    const physicalTests = await physicalTestsRepository.findMany({
      page: 1,
      size: 10,
    });

    expect(physicalTests.length).toBe(1);
  });
});
