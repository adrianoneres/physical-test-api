import { Injectable } from '@nestjs/common';

import { PhysicalTestsRepository } from '@app/ports/physical-tests-repository';
import { PhysicalTestNotFoundError } from '@errors/physical-test-not-found-error';

interface DeletePhysicalTestRequest {
  id: string;
}

type DeletePhysicalTestResponse = void;

@Injectable()
export class DeletePhysicalTestService {
  constructor(private physicalTestsRepository: PhysicalTestsRepository) {}

  async execute({
    id,
  }: DeletePhysicalTestRequest): Promise<DeletePhysicalTestResponse> {
    const physicalTest = await this.physicalTestsRepository.findByid(id);

    if (!physicalTest) {
      throw new PhysicalTestNotFoundError();
    }

    await this.physicalTestsRepository.delete(id);
  }
}
