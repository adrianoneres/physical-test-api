import { Injectable } from '@nestjs/common';

import { PhysicalTestsRepository } from '@app/ports/physical-tests-repository';
import { PhysicalTestNotFoundError } from '@errors/physical-test-not-found-error';
import { PhysicalTestViewModel } from '@infra/http/view-models/physical-test-view-model';

interface FindPhysicalTestRequest {
  id: string;
}

type CreatePhysicalTestResponse = {
  physicalTest: {
    date: Date;
    name: string;
    gender: string;
    birthdate: Date;
    height: number;
    weight: number;
    flexibilityFirstAttempt?: number;
    flexibilitySecondAttempt?: number;
    flexibilityEvaluator?: string;
    wingspan?: number;
    wingspanEvaluator?: string;
    strengthResistance?: number;
    strengthResistanceEvaluator?: string;
    muscularEnduranceFirstAttempt?: number;
    muscularEnduranceSecondAttempt?: number;
    muscularEnduranceEvaluator?: string;
    lowerLimbStrengthFirstAttempt?: number;
    lowerLimbStrengthSecondAttempt?: number;
    lowerLimbStrengthEvaluator?: string;
    upperLimbStrengthFirstAttempt?: number;
    upperLimbStrengthSecondAttempt?: number;
    upperLimbStrengthEvaluator?: string;
    agilityFirstAttempt?: number;
    agilitySecondAttempt?: number;
    agilityEvaluator?: string;
    generalResistance?: number;
    generalResistanceEvaluator?: string;
    speed?: number;
    speedEvaluator?: string;
  };
};

@Injectable()
export class FindPhysicalTestService {
  constructor(private physicalTestsRepository: PhysicalTestsRepository) {}

  async execute({
    id,
  }: FindPhysicalTestRequest): Promise<CreatePhysicalTestResponse> {
    const physicalTest = await this.physicalTestsRepository.findByid(id);

    if (!physicalTest) {
      throw new PhysicalTestNotFoundError();
    }

    return { physicalTest: PhysicalTestViewModel.toHttp(physicalTest) };
  }
}
