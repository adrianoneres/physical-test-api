import { Injectable } from '@nestjs/common';

import { PhysicalTestsRepository } from '@app/ports/physical-tests-repository';
import { InstitutionsRepository } from '@app/ports/institutions-repository';
import { ProfessionalsRepository } from '@app/ports/professionals-repository';
import { PastDate } from '@app/entities/past-date';
import { PhysicalTest } from '@app/entities/physical-test';
import { Name } from '@app/entities/name';
import { Gender } from '@app/entities/gender';
import { PositiveDecimal } from '@app/entities/positive-decimal';
import { PositiveInteger } from '@app/entities/positive-integer';
import { RegisterNotFoundError } from '@errors/register-not-found-error';

interface CreatePhysicalTestRequest {
  date: Date;
  institution_id: string;
  professional_id: string;
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

type CreatePhysicalTestResponse = void;

@Injectable()
export class CreatePhysicalTestService {
  constructor(
    private physicalTestsRepository: PhysicalTestsRepository,
    private institutionsRepository: InstitutionsRepository,
    private professionalsRepository: ProfessionalsRepository,
  ) {}

  async execute(
    request: CreatePhysicalTestRequest,
  ): Promise<CreatePhysicalTestResponse> {
    const institution = await this.institutionsRepository.findByid(
      request.institution_id,
    );

    if (!institution) {
      throw new RegisterNotFoundError('institution: not found');
    }

    const professional = await this.professionalsRepository.findByid(
      request.professional_id,
    );

    if (!professional) {
      throw new RegisterNotFoundError('professional: not found');
    }

    const physicalTest = new PhysicalTest({
      date: new PastDate(request.date, false),
      institution,
      professional,
      name: new Name(request.name, false),
      gender: new Gender(request.gender, false),
      birthdate: new PastDate(request.birthdate, false),
      height: new PositiveDecimal(request.height, false),
      weight: new PositiveDecimal(request.weight, false),
      flexibilityFirstAttempt: new PositiveDecimal(
        request?.flexibility_first_attempt,
      ),
      flexibilitySecondAttempt: new PositiveDecimal(
        request?.flexibility_second_attempt,
      ),
      wingspan: new PositiveDecimal(request?.wingspan),
      strengthResistance: new PositiveInteger(request?.strength_resistance),

      muscularEnduranceFirstAttempt: new PositiveInteger(
        request?.muscular_endurance_first_attempt,
      ),
      muscularEnduranceSecondAttempt: new PositiveInteger(
        request?.muscular_endurance_second_attempt,
      ),

      lowerLimbStrengthFirstAttempt: new PositiveDecimal(
        request?.lower_limb_strength_first_attempt,
      ),
      lowerLimbStrengthSecondAttempt: new PositiveDecimal(
        request?.lower_limb_strength_second_attempt,
      ),
      upperLimbStrengthFirstAttempt: new PositiveDecimal(
        request?.upper_limb_strength_first_attempt,
      ),
      upperLimbStrengthSecondAttempt: new PositiveDecimal(
        request?.upper_limb_strength_second_attempt,
      ),
      agilityFirstAttempt: new PositiveDecimal(request?.agility_first_attempt),
      agilitySecondAttempt: new PositiveDecimal(
        request?.agility_second_attempt,
      ),
      generalResistance: new PositiveDecimal(request?.general_resistance, true),
      speed: new PositiveDecimal(request?.speed, true),
    });

    await this.physicalTestsRepository.create(physicalTest);
  }
}
