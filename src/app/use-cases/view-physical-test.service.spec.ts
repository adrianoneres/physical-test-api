import { RegisterNotFoundError } from '@errors/register-not-found-error';
import { makePhysicalTest } from '@test/factories/physical-test-factory';
import { InMemoryPhysicalTestsRepository } from '@test/repositories/in-memory-physical-tests-repository';
import { ViewPhysicalTestService } from './view-physical-test.service';

describe('ViewPhysicalTestService', () => {
  it('should be able to find a physical test', async () => {
    const physicalTest = await makePhysicalTest();

    const physicalTestsRepository = new InMemoryPhysicalTestsRepository();
    physicalTestsRepository.create(physicalTest);

    const viewPhysicalTestService = new ViewPhysicalTestService(
      physicalTestsRepository,
    );

    const registeredPhysicalTest = await viewPhysicalTestService.execute({
      id: physicalTest.id,
    });

    expect(registeredPhysicalTest).toBeTruthy();
  });

  it('should throw an error when trying to find an unexistent physical test', async () => {
    const physicalTestsRepository = new InMemoryPhysicalTestsRepository();
    const viewPhysicalTestService = new ViewPhysicalTestService(
      physicalTestsRepository,
    );

    expect(
      async () =>
        await viewPhysicalTestService.execute({
          id: 'unexistent-id',
        }),
    ).rejects.toThrow(RegisterNotFoundError);
  });
});
