import { Injectable } from '@nestjs/common';

import { ProfessionalsRepository } from '@app/ports/professionals-repository';
import { InstitutionsRepository } from '@app/ports/institutions-repository';
import { PhysicalTestsRepository } from '@app/ports/physical-tests-repository';

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
    private physicalTestsRepository: PhysicalTestsRepository,
  ) {}

  async execute(): Promise<DashboardResponse> {
    const [countProfessionals, countInstitutions, countPhysicalTests] =
      await Promise.all([
        this.professionalsRepository.count({}),
        this.institutionsRepository.count({}),
        this.physicalTestsRepository.count({}),
      ]);

    return {
      countProfessionals,
      countInstitutions,
      countPhysicalTests,
    };
  }
}
