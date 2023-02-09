import { Injectable } from '@nestjs/common';

import { PhysicalTestsRepository } from '@app/ports/physical-tests-repository';
import { RegisterNotFoundError } from '@errors/register-not-found-error';

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
      throw new RegisterNotFoundError();
    }

    physicalTest.isActive = false;

    await this.physicalTestsRepository.save(physicalTest);
  }
}
