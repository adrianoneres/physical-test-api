import { Injectable } from '@nestjs/common';

import { Name } from '@app/entities/name';
import { RegisterNotFoundError } from '@errors/register-not-found-error';
import { InstitutionsRepository } from '@app/ports/institutions-repository';

interface UpdateInstitutionRequest {
  id: string;
  name: string;
}

type UpdateInstitutionResponse = void;

@Injectable()
export class UpdateInstitutionService {
  constructor(private institutionsRepository: InstitutionsRepository) {}

  async execute(
    request: UpdateInstitutionRequest,
  ): Promise<UpdateInstitutionResponse> {
    const institution = await this.institutionsRepository.findByid(request.id);

    if (!institution) {
      throw new RegisterNotFoundError();
    }

    institution.name = new Name(request.name, false);

    await this.institutionsRepository.save(institution);
  }
}
