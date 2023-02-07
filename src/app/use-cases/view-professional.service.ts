import { Injectable } from '@nestjs/common';

import { Professional } from '@app/entities/professional';
import { ProfessionalsRepository } from '@app/ports/professionals-repository';
import { RegisterNotFoundError } from '@errors/register-not-found-error';

interface ViewProfessionalRequest {
  id: string;
}

type ViewProfessionalResponse = {
  professional: Professional;
};

@Injectable()
export class ViewProfessionalService {
  constructor(private professionalsRepository: ProfessionalsRepository) {}

  async execute({
    id,
  }: ViewProfessionalRequest): Promise<ViewProfessionalResponse> {
    const professional = await this.professionalsRepository.findByid(id);

    if (!professional) {
      throw new RegisterNotFoundError();
    }

    return { professional };
  }
}
