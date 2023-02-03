import { PhysicalTestNotFoundError } from '@errors/physical-test-not-found-error';
import { makePhysicalTest } from '@test/factories/physical-test-factory';
import { InMemoryPhysicalTestsRepository } from '@test/ports/in-memory-physical-tests-repository';
import { FindPhysicalTestService } from './find-physical-test.service';

describe('FindPhysicalTestService', () => {
  it('should be able to find a physical test', async () => {
    const physicalTest = await makePhysicalTest();

    const physicalTestsRepository = new InMemoryPhysicalTestsRepository();
    physicalTestsRepository.create(physicalTest);

    const findPhysicalTestService = new FindPhysicalTestService(
      physicalTestsRepository,
    );

    const registeredPhysicalTest = await findPhysicalTestService.execute({
      id: physicalTest.id,
    });

    expect(registeredPhysicalTest).toBeTruthy();
  });

  it('should throw an error when trying to find an unexistent physical test', async () => {
    const physicalTestsRepository = new InMemoryPhysicalTestsRepository();
    const findPhysicalTestService = new FindPhysicalTestService(
      physicalTestsRepository,
    );

    expect(
      async () =>
        await findPhysicalTestService.execute({
          id: 'unexistent-id',
        }),
    ).rejects.toThrow(PhysicalTestNotFoundError);
  });
});
