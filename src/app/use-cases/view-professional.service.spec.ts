import { RegisterNotFoundError } from '@errors/register-not-found-error';
import { makeProfessional } from '@test/factories/professional-factory';
import { InMemoryProfessionalsRepository } from '@test/repositories/in-memory-professionals-repository';
import { ViewProfessionalService } from './view-professional.service';

describe('ViewProfessionalService', () => {
  it('should be able to find an professional', async () => {
    const professional = await makeProfessional();

    const professionalsRepository = new InMemoryProfessionalsRepository();
    professionalsRepository.create(professional);

    const viewprofessionalService = new ViewProfessionalService(
      professionalsRepository,
    );

    const registeredprofessional = await viewprofessionalService.execute({
      id: professional.id,
    });

    expect(registeredprofessional).toBeTruthy();
  });

  it('should throw an error when trying to find an unexistent professional', async () => {
    const professionalsRepository = new InMemoryProfessionalsRepository();
    const viewprofessionalService = new ViewProfessionalService(
      professionalsRepository,
    );

    expect(
      async () =>
        await viewprofessionalService.execute({
          id: 'unexistent-id',
        }),
    ).rejects.toThrow(RegisterNotFoundError);
  });
});
