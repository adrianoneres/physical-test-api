import { Injectable } from '@nestjs/common';

import { Professional } from '@app/entities/professional';
import { ProfessionalsRepository } from '@app/ports/professionals-repository';
import { Name } from '@app/entities/name';
import { Registration } from '@app/entities/registration';

interface CreateProfessionalRequest {
  name: string;
  registration: string;
}

type CreateProfessionalResponse = void;

@Injectable()
export class CreateProfessionalService {
  constructor(private professionalsRepository: ProfessionalsRepository) {}

  async execute(
    request: CreateProfessionalRequest,
  ): Promise<CreateProfessionalResponse> {
    const professional = new Professional({
      name: new Name(request.name, false),
      registration: new Registration(request.registration, false),
    });

    await this.professionalsRepository.create(professional);
  }
}
