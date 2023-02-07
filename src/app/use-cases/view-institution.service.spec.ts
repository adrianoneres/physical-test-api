import { RegisterNotFoundError } from '@errors/register-not-found-error';
import { makeInstitution } from '@test/factories/institution-factory';
import { InMemoryInstitutionsRepository } from '@test/repositories/in-memory-institutions-repository';
import { ViewInstitutionService } from './view-institution.service';

describe('ViewInstitutionService', () => {
  it('should be able to find an institution', async () => {
    const institution = await makeInstitution();

    const institutionsRepository = new InMemoryInstitutionsRepository();
    institutionsRepository.create(institution);

    const viewinstitutionService = new ViewInstitutionService(
      institutionsRepository,
    );

    const registeredinstitution = await viewinstitutionService.execute({
      id: institution.id,
    });

    expect(registeredinstitution).toBeTruthy();
  });

  it('should throw an error when trying to find an unexistent institution', async () => {
    const institutionsRepository = new InMemoryInstitutionsRepository();
    const viewinstitutionService = new ViewInstitutionService(
      institutionsRepository,
    );

    expect(
      async () =>
        await viewinstitutionService.execute({
          id: 'unexistent-id',
        }),
    ).rejects.toThrow(RegisterNotFoundError);
  });
});
