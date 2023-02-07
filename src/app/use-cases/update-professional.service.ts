import { Injectable } from '@nestjs/common';

import { Name } from '@app/entities/name';
import { RegisterNotFoundError } from '@errors/register-not-found-error';
import { ProfessionalsRepository } from '@app/ports/professionals-repository';
import { Registration } from '@app/entities/registration';

interface UpdateProfessionalRequest {
  id: string;
  name: string;
  registration: string;
}

type UpdateProfessionalResponse = void;

@Injectable()
export class UpdateProfessionalService {
  constructor(private professionalsRepository: ProfessionalsRepository) {}

  async execute(
    request: UpdateProfessionalRequest,
  ): Promise<UpdateProfessionalResponse> {
    const professional = await this.professionalsRepository.findByid(
      request.id,
    );

    if (!professional) {
      throw new RegisterNotFoundError();
    }

    professional.name = new Name(request.name, false);
    professional.registration = new Registration(request.registration, false);

    await this.professionalsRepository.save(professional);
  }
}
