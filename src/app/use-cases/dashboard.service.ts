import { Injectable } from '@nestjs/common';

import { UsersRepository } from '@app/ports/users-repository';
import { ProfessionalsRepository } from '@app/ports/professionals-repository';
import { InstitutionsRepository } from '@app/ports/institutions-repository';

type DashboardResponse = {
  countProfessionals: number;
  countInstitutions: number;
  countPhysicalTests: number;
};

@Injectable()
export class DashboardService {
  constructor(
    private professionalsRepository: ProfessionalsRepository,
    private institutionsRepository: InstitutionsRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute(): Promise<DashboardResponse> {
    const [countProfessionals, countInstitutions, countPhysicalTests] =
      await Promise.all([
        this.professionalsRepository.count({}),
        this.institutionsRepository.count({}),
        this.usersRepository.count({}),
      ]);

    return {
      countProfessionals,
      countInstitutions,
      countPhysicalTests,
    };
  }
}
