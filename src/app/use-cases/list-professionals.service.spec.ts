import { makeProfessional } from '@test/factories/professional-factory';
import { InMemoryProfessionalsRepository } from '@test/repositories/in-memory-professionals-repository';
import { ListProfessionalsService } from './list-professionals.service';

describe('ListProfessionalsService', () => {
  it('should be able to list professionals', async () => {
    const professional = await makeProfessional();

    const professionalsRepository = new InMemoryProfessionalsRepository();
    professionalsRepository.create(professional);
    professionalsRepository.create(professional);

    const listPhysicalTestsService = new ListProfessionalsService(
      professionalsRepository,
    );

    const professionals = await listPhysicalTestsService.execute({
      page: 1,
      size: 10,
    });

    expect(professionals.data.length).toEqual(2);
    expect(professionals.pagination.page).toEqual(1);
    expect(professionals.pagination.pages).toEqual(1);
    expect(professionals.pagination.size).toEqual(10);
    expect(professionals.pagination.total).toEqual(2);
  });
});
