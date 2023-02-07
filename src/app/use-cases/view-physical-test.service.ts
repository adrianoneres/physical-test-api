import { Injectable } from '@nestjs/common';

import { PhysicalTestsRepository } from '@app/ports/physical-tests-repository';
import { PhysicalTest } from '@app/entities/physical-test';
import { RegisterNotFoundError } from '@errors/register-not-found-error';

interface ViewPhysicalTestRequest {
  id: string;
}

type ViewPhysicalTestResponse = {
  physicalTest: PhysicalTest;
};

@Injectable()
export class ViewPhysicalTestService {
  constructor(private physicalTestsRepository: PhysicalTestsRepository) {}

  async execute({
    id,
  }: ViewPhysicalTestRequest): Promise<ViewPhysicalTestResponse> {
    const physicalTest = await this.physicalTestsRepository.findByid(id);

    if (!physicalTest) {
      throw new RegisterNotFoundError();
    }

    return { physicalTest };
  }
}
