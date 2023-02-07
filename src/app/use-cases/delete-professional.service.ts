import { Injectable } from '@nestjs/common';

import { RegisterNotFoundError } from '@errors/register-not-found-error';
import { ProfessionalsRepository } from '@app/ports/professionals-repository';

interface DeleteProfessionalRequest {
  id: string;
}

type DeleteProfessionalResponse = void;

@Injectable()
export class DeleteProfessionalService {
  constructor(private professionalsRepository: ProfessionalsRepository) {}

  async execute({
    id,
  }: DeleteProfessionalRequest): Promise<DeleteProfessionalResponse> {
    const professional = await this.professionalsRepository.findByid(id);

    if (!professional) {
      throw new RegisterNotFoundError();
    }

    professional.isActive = false;

    await this.professionalsRepository.save(professional);
  }
}
