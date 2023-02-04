import { makePhysicalTest } from '@test/factories/physical-test-factory';
import { InMemoryPhysicalTestsRepository } from '@test/repositories/in-memory-physical-tests-repository';
import { ListPhysicalTestsService } from './list-physical-tests.service';

describe('ListPhysicalTestsService', () => {
  it('should be able to list physical tests', async () => {
    const physicalTest = await makePhysicalTest();

    const physicalTestsRepository = new InMemoryPhysicalTestsRepository();
    physicalTestsRepository.create(physicalTest);
    physicalTestsRepository.create(physicalTest);

    const listPhysicalTestsService = new ListPhysicalTestsService(
      physicalTestsRepository,
    );

    const physicalTests = await listPhysicalTestsService.execute({
      page: 1,
      size: 10,
    });

    expect(physicalTests.data.length).toEqual(2);
    expect(physicalTests.pagination.page).toEqual(1);
    expect(physicalTests.pagination.pages).toEqual(1);
    expect(physicalTests.pagination.size).toEqual(10);
    expect(physicalTests.pagination.total).toEqual(2);
  });
});
