import { Injectable } from '@nestjs/common';

import { PhysicalTestsRepository } from '@app/ports/physical-tests-repository';
import { PhysicalTestNotFoundError } from '@errors/physical-test-not-found-error';
import { PhysicalTest } from '@app/entities/physical-test';

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
      throw new PhysicalTestNotFoundError();
    }

    return { physicalTest };
  }
}
