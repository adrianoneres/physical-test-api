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
  flexibility_first_attempt?: number;
  flexibility_second_attempt?: number;
  flexibility_evaluator?: string;
  wingspan?: number;
  wingspan_evaluator?: string;
  strength_resistance?: number;
  strength_resistance_evaluator?: string;
  muscular_endurance_first_attempt?: number;
  muscular_endurance_second_attempt?: number;
  muscular_endurance_evaluator?: string;
  lower_limb_strength_first_attempt?: number;
  lower_limb_strength_second_attempt?: number;
  lower_limb_strength_evaluator?: string;
  upper_limb_strength_first_attempt?: number;
  upper_limb_strength_second_attempt?: number;
  upper_limb_strength_evaluator?: string;
  agility_first_attempt?: number;
  agility_second_attempt?: number;
  agility_evaluator?: string;
  general_resistance?: number;
  general_resistance_evaluator?: string;
  speed?: number;
  speed_evaluator?: string;
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
      flexibilityFirstAttempt: request.flexibility_first_attempt
        ? new PositiveDecimal(request.flexibility_first_attempt)
        : undefined,
      flexibilitySecondAttempt: request.flexibility_second_attempt
        ? new PositiveDecimal(request.flexibility_second_attempt)
        : undefined,
      flexibilityEvaluator: request.flexibility_evaluator
        ? new Name(request.flexibility_evaluator)
        : undefined,
      wingspan: request.wingspan
        ? new PositiveDecimal(request.wingspan)
        : undefined,
      wingspanEvaluator: request.wingspan_evaluator
        ? new Name(request.wingspan_evaluator)
        : undefined,
      strengthResistance: request.strength_resistance
        ? new PositiveInteger(request.strength_resistance)
        : undefined,
      strengthResistanceEvaluator: request.strength_resistance_evaluator
        ? new Name(request.strength_resistance_evaluator)
        : undefined,
      muscularEnduranceFirstAttempt: request.muscular_endurance_first_attempt
        ? new PositiveInteger(request.muscular_endurance_first_attempt)
        : undefined,
      muscularEnduranceSecondAttempt: request.muscular_endurance_second_attempt
        ? new PositiveInteger(request.muscular_endurance_second_attempt)
        : undefined,
      muscularEnduranceEvaluator: request.muscular_endurance_evaluator
        ? new Name(request.muscular_endurance_evaluator)
        : undefined,
      lowerLimbStrengthFirstAttempt: request.lower_limb_strength_first_attempt
        ? new PositiveDecimal(request.lower_limb_strength_first_attempt)
        : undefined,
      lowerLimbStrengthSecondAttempt: request.lower_limb_strength_second_attempt
        ? new PositiveDecimal(request.lower_limb_strength_second_attempt)
        : undefined,
      lowerLimbStrengthEvaluator: request.lower_limb_strength_evaluator
        ? new Name(request.lower_limb_strength_evaluator)
        : undefined,
      upperLimbStrengthFirstAttempt: request.upper_limb_strength_first_attempt
        ? new PositiveDecimal(request.upper_limb_strength_first_attempt)
        : undefined,
      upperLimbStrengthSecondAttempt: request.upper_limb_strength_second_attempt
        ? new PositiveDecimal(request.upper_limb_strength_second_attempt)
        : undefined,
      upperLimbStrengthEvaluator: request.upper_limb_strength_evaluator
        ? new Name(request.upper_limb_strength_evaluator)
        : undefined,
      agilityFirstAttempt: request.agility_first_attempt
        ? new PositiveDecimal(request.agility_first_attempt)
        : undefined,
      agilitySecondAttempt: request.agility_second_attempt
        ? new PositiveDecimal(request.agility_second_attempt)
        : undefined,
      agilityEvaluator: request.agility_evaluator
        ? new Name(request.agility_evaluator)
        : undefined,
      generalResistance: request.general_resistance
        ? new PositiveDecimal(request.general_resistance)
        : undefined,
      generalResistanceEvaluator: request.general_resistance_evaluator
        ? new Name(request.general_resistance_evaluator)
        : undefined,
      speed: request.speed ? new PositiveDecimal(request.speed) : undefined,
      speedEvaluator: request.speed_evaluator
        ? new Name(request.speed_evaluator)
        : undefined,
    });

    await this.physicalTestsRepository.create(physicalTest);
  }
}
