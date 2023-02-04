import { PhysicalTestNotFoundError } from '@errors/physical-test-not-found-error';
import { makePhysicalTest } from '@test/factories/physical-test-factory';
import { InMemoryPhysicalTestsRepository } from '@test/repositories/in-memory-physical-tests-repository';
import { DeletePhysicalTestService } from './delete-physical-test.service';

describe('DeletePhysicalTestService', () => {
  it('should be able to delete a physical test', async () => {
    const physicalTest = await makePhysicalTest();

    const physicalTestsRepository = new InMemoryPhysicalTestsRepository();
    physicalTestsRepository.create(physicalTest);

    const deletePhysicalTestService = new DeletePhysicalTestService(
      physicalTestsRepository,
    );

    await deletePhysicalTestService.execute({
      id: physicalTest.id,
    });

    const physicalTests = await physicalTestsRepository.findMany({
      page: 1,
      size: 10,
    });

    expect(physicalTests.length).toEqual(0);
  });

  it('should throw an error when trying to find an unexistent physical test', async () => {
    const physicalTestsRepository = new InMemoryPhysicalTestsRepository();
    const deletePhysicalTestService = new DeletePhysicalTestService(
      physicalTestsRepository,
    );

    expect(
      async () =>
        await deletePhysicalTestService.execute({
          id: 'unexistent-id',
        }),
    ).rejects.toThrow(PhysicalTestNotFoundError);
  });
});
