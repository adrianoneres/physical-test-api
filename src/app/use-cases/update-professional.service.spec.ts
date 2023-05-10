import { RegisterNotFoundError } from '@errors/register-not-found-error';
import { makeProfessional } from '@test/factories/professional-factory';
import { InMemoryProfessionalsRepository } from '@test/repositories/in-memory-professionals-repository';
import { UpdateProfessionalService } from './update-professional.service';

describe('UpdateProfessionalService', () => {
  it('should be able to update an professional', async () => {
    const professional = await makeProfessional();

    const professionalsRepository = new InMemoryProfessionalsRepository();
    professionalsRepository.create(professional);

    const updateProfessionalService = new UpdateProfessionalService(
      professionalsRepository,
    );

    await updateProfessionalService.execute({
      id: professional.id,
      name: 'updated value',
      registration: '654321',
    });

    const updatedProfessional = await professionalsRepository.findById(
      professional.id,
    );

    expect(updatedProfessional?.name.value).toEqual('updated value');
    expect(updatedProfessional?.registration.value).toEqual('654321');
  });

  it('should throw an error when trying to update an unexistent professional', async () => {
    const professional = await makeProfessional();

    const professionalsRepository = new InMemoryProfessionalsRepository();
    const updateProfessionalService = new UpdateProfessionalService(
      professionalsRepository,
    );

    expect(
      async () =>
        await updateProfessionalService.execute({
          id: professional.id,
          name: 'updated value',
          registration: '654321',
        }),
    ).rejects.toThrow(RegisterNotFoundError);
  });
});
