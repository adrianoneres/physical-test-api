import { Injectable } from '@nestjs/common';

import { Name } from '@app/entities/name';
import { InstitutionsRepository } from '@app/ports/institutions-repository';
import { Institution } from '@app/entities/institution';

interface CreateInstitutionRequest {
  name: string;
}

type CreateInstitutionResponse = void;

@Injectable()
export class CreateInstitutionService {
  constructor(private institutionsRepository: InstitutionsRepository) {}

  async execute({
    name,
  }: CreateInstitutionRequest): Promise<CreateInstitutionResponse> {
    const institution = new Institution({
      name: new Name(name, false),
    });

    await this.institutionsRepository.create(institution);
  }
}
