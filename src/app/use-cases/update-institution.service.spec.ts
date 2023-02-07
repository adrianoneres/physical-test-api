import { RegisterNotFoundError } from '@errors/register-not-found-error';
import { makeInstitution } from '@test/factories/institution-factory';
import { InMemoryInstitutionsRepository } from '@test/repositories/in-memory-institutions-repository';
import { UpdateInstitutionService } from './update-institution.service';

describe('UpdateInstitutionService', () => {
  it('should be able to update an institution', async () => {
    const institution = await makeInstitution();

    const institutionsRepository = new InMemoryInstitutionsRepository();
    institutionsRepository.create(institution);

    const updateInstitutionService = new UpdateInstitutionService(
      institutionsRepository,
    );

    await updateInstitutionService.execute({
      id: institution.id,
      name: 'updated value',
    });

    const updatedInstitution = await institutionsRepository.findByid(
      institution.id,
    );

    expect(updatedInstitution?.name.value).toEqual('updated value');
  });

  it('should throw an error when trying to update an unexistent institution', async () => {
    const institution = await makeInstitution();

    const institutionsRepository = new InMemoryInstitutionsRepository();
    const updateInstitutionService = new UpdateInstitutionService(
      institutionsRepository,
    );

    expect(
      async () =>
        await updateInstitutionService.execute({
          id: institution.id,
          name: 'updated value',
        }),
    ).rejects.toThrow(RegisterNotFoundError);
  });
});
