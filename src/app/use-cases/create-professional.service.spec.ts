import { makeProfessional } from '@test/factories/professional-factory';
import { InMemoryProfessionalsRepository } from '@test/repositories/in-memory-professionals-repository';
import { CreateProfessionalService } from './create-professional.service';

describe('CreateProfessionalService', () => {
  it('should be able to create an professional', async () => {
    const professional = await makeProfessional();

    const professionalsRepository = new InMemoryProfessionalsRepository();
    const createProfessionalsService = new CreateProfessionalService(
      professionalsRepository,
    );

    await createProfessionalsService.execute({
      name: professional.name.value,
      registration: professional.registration.value,
    });

    const professionals = await professionalsRepository.findMany({
      page: 1,
      size: 10,
    });

    expect(professionals.length).toBe(1);
  });
});
