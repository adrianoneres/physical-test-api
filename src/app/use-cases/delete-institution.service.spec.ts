import { RegisterNotFoundError } from '@errors/register-not-found-error';
import { makeInstitution } from '@test/factories/institution-factory';
import { InMemoryInstitutionsRepository } from '@test/repositories/in-memory-institutions-repository';
import { DeleteInstitutionService } from './delete-institution.service';

describe('DeleteInstitutionService', () => {
  it('should be able to delete an institution', async () => {
    const institution = await makeInstitution();

    const institutionsRepository = new InMemoryInstitutionsRepository();
    institutionsRepository.create(institution);

    const deleteInstitutionService = new DeleteInstitutionService(
      institutionsRepository,
    );

    await deleteInstitutionService.execute({
      id: institution.id,
    });

    const institutions = await institutionsRepository.findMany({
      page: 1,
      size: 10,
    });

    expect(institutions.length).toEqual(0);
  });

  it('should throw an error when trying to find an unexistent institution', async () => {
    const institutionsRepository = new InMemoryInstitutionsRepository();
    const deleteInstitutionsService = new DeleteInstitutionService(
      institutionsRepository,
    );

    expect(
      async () =>
        await deleteInstitutionsService.execute({
          id: 'unexistent-id',
        }),
    ).rejects.toThrow(RegisterNotFoundError);
  });
});
