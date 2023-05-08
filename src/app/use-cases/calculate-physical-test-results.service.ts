import { Injectable } from '@nestjs/common';
import { endOfDay, startOfDay } from 'date-fns';

import { PhysicalTest } from '@app/entities/physical-test';
import { PhysicalTestsRepository } from '@app/ports/physical-tests-repository';
import {
  calculateImcResult,
  calculateLower,
  calculatePhysicalTestResult,
} from 'src/helpers/result.helper';
import { calculateAge } from 'src/helpers/date.helper';
import { PhysicalTestType } from '@app/types/physical-test-type';
import { calculateHigher } from 'src/helpers/result.helper';

interface CalculatePhysicalTestResultsRequest {
  name?: string;
  dateFrom?: Date;
  dateTo?: Date;
}

type PhysicalTestResult = {
  id: string;
  physicalTest: PhysicalTest;
  results: {
    age: number;
    imc: number;
    imcLevel: string;
    agilityBest: number;
    agilityLevel: string;
    flexibilityBest: number;
    flexibilityLevel: string;
    generalResistanceLevel: string;
    lowerLimbStrengthBest: number;
    lowerLimbStrengthLevel: string;
    muscularEnduranceBest: number;
    muscularEnduranceLevel: string;
    speedLevel: string;
    strengthResistanceLevel: string;
    upperLimbStrengthBest: number;
    upperLimbStrengthLevel: string;
  };
};

type CalculatePhysicalTestResultsResponse = {
  data: PhysicalTestResult[];
};

@Injectable()
export class CalculatePhysicalTestResultsService {
  constructor(private physicalTestsRepository: PhysicalTestsRepository) {}

  async execute({
    name,
    dateFrom,
    dateTo,
  }: CalculatePhysicalTestResultsRequest): Promise<CalculatePhysicalTestResultsResponse> {
    const findDateFrom = !!dateFrom ? startOfDay(dateFrom) : undefined;
    const findDateTo = !!dateTo ? endOfDay(dateTo) : undefined;
    const physicalTests = await this.physicalTestsRepository.findMany({
      name,
      dateFrom: findDateFrom,
      dateTo: findDateTo,
      page: 1,
      size: Number.MAX_SAFE_INTEGER,
    });

    const data = physicalTests.map(physicalTest => {
      const age = calculateAge(physicalTest.birthdate.value);
      const gender = physicalTest.gender.value;

      const imc = Number(
        (
          Math.round(
            (physicalTest.weight.value /
              (physicalTest.height.value * physicalTest.height.value)) *
              100,
          ) / 100
        ).toFixed(2),
      );

      const imcLevel = calculateImcResult(imc);

      const agilityBest = calculateLower(
        physicalTest.agilityFirstAttempt!.value,
        physicalTest.agilitySecondAttempt!.value,
      );

      const agilityLevel = calculatePhysicalTestResult({
        type: PhysicalTestType.Agility,
        age,
        gender,
        value: agilityBest,
      });

      const flexibilityBest = calculateHigher(
        physicalTest.flexibilityFirstAttempt!.value,
        physicalTest.flexibilitySecondAttempt!.value,
      );

      const flexibilityLevel = calculatePhysicalTestResult({
        type: PhysicalTestType.Flexibility,
        age,
        gender,
        value: flexibilityBest,
      });

      const generalResistanceLevel = calculatePhysicalTestResult({
        type: PhysicalTestType.GeneralResistance,
        age,
        gender,
        value: physicalTest.generalResistance!.value,
      });

      const lowerLimbStrengthBest = calculateHigher(
        physicalTest.lowerLimbStrengthFirstAttempt!.value,
        physicalTest.lowerLimbStrengthSecondAttempt!.value,
      );

      const lowerLimbStrengthLevel = calculatePhysicalTestResult({
        type: PhysicalTestType.LowerLimbStrength,
        age,
        gender,
        value: lowerLimbStrengthBest,
      });

      const muscularEnduranceBest = calculateHigher(
        physicalTest.muscularEnduranceFirstAttempt!.value,
        physicalTest.muscularEnduranceSecondAttempt!.value,
      );

      const muscularEnduranceLevel = calculatePhysicalTestResult({
        type: PhysicalTestType.MuscularEndurance,
        age,
        gender,
        value: muscularEnduranceBest,
      });

      const speedLevel = calculatePhysicalTestResult({
        type: PhysicalTestType.Speed,
        age,
        gender,
        value: physicalTest.speed!.value,
      });

      const strengthResistanceLevel = calculatePhysicalTestResult({
        type: PhysicalTestType.StrengthResistance,
        age,
        gender,
        value: physicalTest.strengthResistance!.value,
      });

      const upperLimbStrengthBest = calculateHigher(
        physicalTest.upperLimbStrengthFirstAttempt!.value,
        physicalTest.upperLimbStrengthSecondAttempt!.value,
      );

      const upperLimbStrengthLevel = calculatePhysicalTestResult({
        type: PhysicalTestType.UpperLimbStrength,
        age,
        gender,
        value: upperLimbStrengthBest,
      });

      return {
        id: physicalTest.id,
        physicalTest: physicalTest,
        results: {
          age,
          imc,
          imcLevel,
          agilityBest,
          agilityLevel,
          flexibilityBest,
          flexibilityLevel,
          generalResistanceLevel,
          lowerLimbStrengthBest,
          lowerLimbStrengthLevel,
          muscularEnduranceBest,
          muscularEnduranceLevel,
          speedLevel,
          strengthResistanceLevel,
          upperLimbStrengthBest,
          upperLimbStrengthLevel,
        },
      } as PhysicalTestResult;
    });

    return { data };
  }
}
