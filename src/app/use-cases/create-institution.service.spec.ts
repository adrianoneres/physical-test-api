import { makeInstitution } from '@test/factories/institution-factory';
import { InMemoryInstitutionsRepository } from '@test/repositories/in-memory-institutions-repository';
import { CreateInstitutionService } from './create-institution.service';

describe('CreateInstitutionService', () => {
  it('should be able to create an institution', async () => {
    const institution = await makeInstitution();

    const institutionsRepository = new InMemoryInstitutionsRepository();
    const createInstitutionsService = new CreateInstitutionService(
      institutionsRepository,
    );

    await createInstitutionsService.execute({
      name: institution.name.value,
    });

    const institutions = await institutionsRepository.findMany({
      page: 1,
      size: 10,
    });

    expect(institutions.length).toBe(1);
  });
});
