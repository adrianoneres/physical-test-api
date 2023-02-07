import { Injectable } from '@nestjs/common';

import { Institution } from '@app/entities/institution';
import { InstitutionsRepository } from '@app/ports/institutions-repository';
import { RegisterNotFoundError } from '@errors/register-not-found-error';

interface ViewInstitutionRequest {
  id: string;
}

type ViewInstitutionResponse = {
  institution: Institution;
};

@Injectable()
export class ViewInstitutionService {
  constructor(private institutionsRepository: InstitutionsRepository) {}

  async execute({
    id,
  }: ViewInstitutionRequest): Promise<ViewInstitutionResponse> {
    const institution = await this.institutionsRepository.findByid(id);

    if (!institution) {
      throw new RegisterNotFoundError();
    }

    return { institution };
  }
}
