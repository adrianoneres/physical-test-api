import { makeInstitution } from '@test/factories/institution-factory';
import { InMemoryInstitutionsRepository } from '@test/repositories/in-memory-institutions-repository';
import { ListInstitutionsService } from './list-institutions.service';

describe('ListInstitutionsService', () => {
  it('should be able to list institutions', async () => {
    const institution = await makeInstitution();

    const institutionsRepository = new InMemoryInstitutionsRepository();
    institutionsRepository.create(institution);
    institutionsRepository.create(institution);

    const listPhysicalTestsService = new ListInstitutionsService(
      institutionsRepository,
    );

    const institutions = await listPhysicalTestsService.execute({
      page: 1,
      size: 10,
    });

    expect(institutions.data.length).toEqual(2);
    expect(institutions.pagination.page).toEqual(1);
    expect(institutions.pagination.pages).toEqual(1);
    expect(institutions.pagination.size).toEqual(10);
    expect(institutions.pagination.total).toEqual(2);
  });
});
