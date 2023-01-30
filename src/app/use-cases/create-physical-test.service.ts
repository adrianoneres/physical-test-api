import { Injectable } from '@nestjs/common';

import { PhysicalTestsRepository } from '@app/ports/physical-tests-repository';
import { PastDate } from '@app/entities/past-date';
import { PhysicalTest } from '@app/entities/physical-test';
import { Name } from '@app/entities/name';
import { Gender } from '@app/entities/gender';
import { PositiveDecimal } from '@app/entities/positive-decimal';
import { PositiveInteger } from '@app/entities/positive-integer';

interface CreatePhysicalTestRequest {
  date: Date;
  name: string;
  gender: string;
  birthdate: Date;
  height: number;
  weight: number;
  flexibility_first_attempt: number;
  flexibility_second_attempt: number;
  flexibility_evaluator: string;
  wingspan: number;
  wingspan_evaluator: string;
  strength_resistance: number;
  strength_resistance_evaluator: string;
  muscular_endurance_first_attempt: number;
  muscular_endurance_second_attempt: number;
  muscular_endurance_evaluator: string;
  lower_limb_strength_first_attempt: number;
  lower_limb_strength_second_attempt: number;
  lower_limb_strength_evaluator: string;
  upper_limb_strength_first_attempt: number;
  upper_limb_strength_second_attempt: number;
  upper_limb_strength_evaluator: string;
  agility_first_attempt: number;
  agility_second_attempt: number;
  agility_evaluator: string;
  general_resistance: number;
  general_resistance_evaluator: string;
  speed: number;
  speed_evaluator: string;
}

type CreatePhysicalTestResponse = void;

@Injectable()
export class CreatePhysicalTestService {
  constructor(private physicalTestsRepository: PhysicalTestsRepository) {}

  async execute(
    request: CreatePhysicalTestRequest,
  ): Promise<CreatePhysicalTestResponse> {
    const physicalTest = new PhysicalTest({
      date: new PastDate(request.date),
      name: new Name(request.name),
      gender: new Gender(request.gender),
      birthdate: new PastDate(request.birthdate),
      height: new PositiveDecimal(request.height),
      weight: new PositiveDecimal(request.weight),
      flexibilityFirstAttempt: new PositiveDecimal(
        request.flexibility_first_attempt,
      ),
      flexibilitySecondAttempt: new PositiveDecimal(
        request.flexibility_second_attempt,
      ),
      flexibilityEvaluator: new Name(request.flexibility_evaluator),
      wingspan: new PositiveDecimal(request.wingspan),
      wingspanEvaluator: new Name(request.wingspan_evaluator),
      strengthResistance: new PositiveInteger(request.strength_resistance),
      strengthResistanceEvaluator: new Name(
        request.strength_resistance_evaluator,
      ),
      muscularEnduranceFirstAttempt: new PositiveInteger(
        request.muscular_endurance_first_attempt,
      ),
      muscularEnduranceSecondAttempt: new PositiveInteger(
        request.muscular_endurance_second_attempt,
      ),
      muscularEnduranceEvaluator: new Name(
        request.muscular_endurance_evaluator,
      ),
      lowerLimbStrengthFirstAttempt: new PositiveDecimal(
        request.lower_limb_strength_first_attempt,
      ),
      lowerLimbStrengthSecondAttempt: new PositiveDecimal(
        request.lower_limb_strength_second_attempt,
      ),
      lowerLimbStrengthEvaluator: new Name(
        request.lower_limb_strength_evaluator,
      ),
      upperLimbStrengthFirstAttempt: new PositiveDecimal(
        request.upper_limb_strength_first_attempt,
      ),
      upperLimbStrengthSecondAttempt: new PositiveDecimal(
        request.upper_limb_strength_second_attempt,
      ),
      upperLimbStrengthEvaluator: new Name(
        request.upper_limb_strength_evaluator,
      ),
      agilityFirstAttempt: new PositiveDecimal(request.agility_first_attempt),
      agilitySecondAttempt: new PositiveDecimal(request.agility_second_attempt),
      agilityEvaluator: new Name(request.agility_evaluator),
      generalResistance: new PositiveDecimal(request.general_resistance),
      generalResistanceEvaluator: new Name(
        request.general_resistance_evaluator,
      ),
      speed: new PositiveDecimal(request.speed),
      speedEvaluator: new Name(request.speed_evaluator),
    });

    await this.physicalTestsRepository.create(physicalTest);
  }
}
