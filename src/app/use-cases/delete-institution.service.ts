import { Injectable } from '@nestjs/common';

import { RegisterNotFoundError } from '@errors/register-not-found-error';
import { InstitutionsRepository } from '@app/ports/institutions-repository';

interface DeleteInstitutionRequest {
  id: string;
}

type DeleteInstitutionResponse = void;

@Injectable()
export class DeleteInstitutionService {
  constructor(private institutionsRepository: InstitutionsRepository) {}

  async execute({
    id,
  }: DeleteInstitutionRequest): Promise<DeleteInstitutionResponse> {
    const institution = await this.institutionsRepository.findById(id);

    if (!institution) {
      throw new RegisterNotFoundError();
    }

    institution.isActive = false;

    await this.institutionsRepository.save(institution);
  }
}
