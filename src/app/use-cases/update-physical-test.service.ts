import { Injectable } from '@nestjs/common';

import { PhysicalTestsRepository } from '@app/ports/physical-tests-repository';
import { PastDate } from '@app/entities/past-date';
import { Name } from '@app/entities/name';
import { Gender } from '@app/entities/gender';
import { PositiveDecimal } from '@app/entities/positive-decimal';
import { PositiveInteger } from '@app/entities/positive-integer';
import { PhysicalTestNotFoundError } from '@errors/physical-test-not-found-error';

interface UpdatePhysicalTestRequest {
  id: string;
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

type UpdatePhysicalTestResponse = void;

@Injectable()
export class UpdatePhysicalTestService {
  constructor(private physicalTestsRepository: PhysicalTestsRepository) {}

  async execute(
    request: UpdatePhysicalTestRequest,
  ): Promise<UpdatePhysicalTestResponse> {
    const physicalTest = await this.physicalTestsRepository.findByid(
      request.id,
    );

    if (!physicalTest) {
      throw new PhysicalTestNotFoundError();
    }

    physicalTest.date = new PastDate(request.date, false);
    physicalTest.name = new Name(request.name, false);
    physicalTest.gender = new Gender(request.gender, false);
    physicalTest.birthdate = new PastDate(request.birthdate, false);
    physicalTest.height = new PositiveDecimal(request.height, false);
    physicalTest.weight = new PositiveDecimal(request.weight, false);
    physicalTest.flexibilityFirstAttempt = new PositiveDecimal(
      request?.flexibility_first_attempt,
    );
    physicalTest.flexibilitySecondAttempt = new PositiveDecimal(
      request?.flexibility_second_attempt,
    );
    physicalTest.flexibilityEvaluator = new Name(
      request?.flexibility_evaluator,
    );
    physicalTest.wingspan = new PositiveDecimal(request?.wingspan);
    physicalTest.wingspanEvaluator = new Name(request.wingspan_evaluator);
    physicalTest.strengthResistance = new PositiveInteger(
      request?.strength_resistance,
    );
    physicalTest.strengthResistanceEvaluator = new Name(
      request?.strength_resistance_evaluator,
    );
    physicalTest.muscularEnduranceFirstAttempt = new PositiveInteger(
      request?.muscular_endurance_first_attempt,
    );
    physicalTest.muscularEnduranceSecondAttempt = new PositiveInteger(
      request?.muscular_endurance_second_attempt,
    );
    physicalTest.muscularEnduranceEvaluator = new Name(
      request?.muscular_endurance_evaluator,
    );
    physicalTest.lowerLimbStrengthFirstAttempt = new PositiveDecimal(
      request?.lower_limb_strength_first_attempt,
    );
    physicalTest.lowerLimbStrengthSecondAttempt = new PositiveDecimal(
      request?.lower_limb_strength_second_attempt,
    );
    physicalTest.lowerLimbStrengthEvaluator = new Name(
      request?.lower_limb_strength_evaluator,
    );
    physicalTest.upperLimbStrengthFirstAttempt = new PositiveDecimal(
      request?.upper_limb_strength_first_attempt,
    );
    physicalTest.upperLimbStrengthSecondAttempt = new PositiveDecimal(
      request?.upper_limb_strength_second_attempt,
    );
    physicalTest.upperLimbStrengthEvaluator = new Name(
      request?.upper_limb_strength_evaluator,
    );
    physicalTest.agilityFirstAttempt = new PositiveDecimal(
      request?.agility_first_attempt,
    );
    physicalTest.agilitySecondAttempt = new PositiveDecimal(
      request?.agility_second_attempt,
    );
    physicalTest.agilityEvaluator = new Name(request?.agility_evaluator, true);
    physicalTest.generalResistance = new PositiveDecimal(
      request?.general_resistance,
      true,
    );
    physicalTest.generalResistanceEvaluator = new Name(
      request?.general_resistance_evaluator,
      true,
    );
    physicalTest.speed = new PositiveDecimal(request?.speed, true);
    physicalTest.speedEvaluator = new Name(request?.speed_evaluator, true);

    await this.physicalTestsRepository.save(physicalTest);
  }
}
