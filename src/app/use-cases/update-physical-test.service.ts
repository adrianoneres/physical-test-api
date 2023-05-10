import { Injectable } from '@nestjs/common';

import { PhysicalTestsRepository } from '@app/ports/physical-tests-repository';
import { PastDate } from '@app/entities/past-date';
import { Name } from '@app/entities/name';
import { Gender } from '@app/entities/gender';
import { PositiveDecimal } from '@app/entities/positive-decimal';
import { PositiveInteger } from '@app/entities/positive-integer';
import { RegisterNotFoundError } from '@errors/register-not-found-error';
import { InstitutionsRepository } from '@app/ports/institutions-repository';
import { ProfessionalsRepository } from '@app/ports/professionals-repository';

interface UpdatePhysicalTestRequest {
  id: string;
  institution_id: string;
  professional_id: string;
  date: Date;
  name: string;
  gender: string;
  birthdate: Date;
  height: number;
  weight: number;
  flexibility_first_attempt?: number;
  flexibility_second_attempt?: number;
  wingspan?: number;
  strength_resistance?: number;
  muscular_endurance_first_attempt?: number;
  muscular_endurance_second_attempt?: number;
  lower_limb_strength_first_attempt?: number;
  lower_limb_strength_second_attempt?: number;
  upper_limb_strength_first_attempt?: number;
  upper_limb_strength_second_attempt?: number;
  agility_first_attempt?: number;
  agility_second_attempt?: number;
  general_resistance?: number;
  speed?: number;
}

type UpdatePhysicalTestResponse = void;

@Injectable()
export class UpdatePhysicalTestService {
  constructor(
    private physicalTestsRepository: PhysicalTestsRepository,
    private institutionsRepository: InstitutionsRepository,
    private professionalsRepository: ProfessionalsRepository,
  ) {}

  async execute(
    request: UpdatePhysicalTestRequest,
  ): Promise<UpdatePhysicalTestResponse> {
    const physicalTest = await this.physicalTestsRepository.findById(
      request.id,
    );

    if (!physicalTest) {
      throw new RegisterNotFoundError();
    }

    const institution = await this.institutionsRepository.findById(
      request.institution_id,
    );

    if (!institution) {
      throw new RegisterNotFoundError('institution: not found');
    }

    const professional = await this.professionalsRepository.findById(
      request.professional_id,
    );

    if (!professional) {
      throw new RegisterNotFoundError('professional: not found');
    }

    physicalTest.date = new PastDate(request.date, false);
    physicalTest.institution = institution;
    physicalTest.professional = professional;
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
    physicalTest.wingspan = new PositiveDecimal(request?.wingspan);
    physicalTest.strengthResistance = new PositiveInteger(
      request?.strength_resistance,
    );
    physicalTest.muscularEnduranceFirstAttempt = new PositiveInteger(
      request?.muscular_endurance_first_attempt,
    );
    physicalTest.muscularEnduranceSecondAttempt = new PositiveInteger(
      request?.muscular_endurance_second_attempt,
    );
    physicalTest.lowerLimbStrengthFirstAttempt = new PositiveDecimal(
      request?.lower_limb_strength_first_attempt,
    );
    physicalTest.lowerLimbStrengthSecondAttempt = new PositiveDecimal(
      request?.lower_limb_strength_second_attempt,
    );
    physicalTest.upperLimbStrengthFirstAttempt = new PositiveDecimal(
      request?.upper_limb_strength_first_attempt,
    );
    physicalTest.upperLimbStrengthSecondAttempt = new PositiveDecimal(
      request?.upper_limb_strength_second_attempt,
    );
    physicalTest.agilityFirstAttempt = new PositiveDecimal(
      request?.agility_first_attempt,
    );
    physicalTest.agilitySecondAttempt = new PositiveDecimal(
      request?.agility_second_attempt,
    );
    physicalTest.generalResistance = new PositiveDecimal(
      request?.general_resistance,
      true,
    );
    physicalTest.speed = new PositiveDecimal(request?.speed, true);

    await this.physicalTestsRepository.save(physicalTest);
  }
}
