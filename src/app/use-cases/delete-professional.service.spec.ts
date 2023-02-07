import { RegisterNotFoundError } from '@errors/register-not-found-error';
import { makeProfessional } from '@test/factories/professional-factory';
import { InMemoryProfessionalsRepository } from '@test/repositories/in-memory-professionals-repository';
import { DeleteProfessionalService } from './delete-professional.service';

describe('DeleteProfessionalService', () => {
  it('should be able to delete an professional', async () => {
    const professional = await makeProfessional();

    const professionalsRepository = new InMemoryProfessionalsRepository();
    professionalsRepository.create(professional);

    const deleteProfessionalService = new DeleteProfessionalService(
      professionalsRepository,
    );

    await deleteProfessionalService.execute({
      id: professional.id,
    });

    const professionals = await professionalsRepository.findMany({
      page: 1,
      size: 10,
    });

    expect(professionals.length).toEqual(0);
  });

  it('should throw an error when trying to find an unexistent professional', async () => {
    const professionalsRepository = new InMemoryProfessionalsRepository();
    const deleteProfessionalsService = new DeleteProfessionalService(
      professionalsRepository,
    );

    expect(
      async () =>
        await deleteProfessionalsService.execute({
          id: 'unexistent-id',
        }),
    ).rejects.toThrow(RegisterNotFoundError);
  });
});
