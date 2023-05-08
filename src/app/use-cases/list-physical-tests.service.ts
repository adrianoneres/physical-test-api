import { Injectable } from '@nestjs/common';
import { endOfDay, startOfDay } from 'date-fns';

import { PhysicalTestsRepository } from '@app/ports/physical-tests-repository';
import { PhysicalTest } from '@app/entities/physical-test';

interface ListPhysicalTestsRequest {
  name?: string;
  dateFrom?: Date;
  dateTo?: Date;
  page: number;
  size: number;
}

type ListPhysicalTestsResponse = {
  data: PhysicalTest[];
  pagination: {
    page: number;
    pages: number;
    size: number;
    total: number;
  };
};

@Injectable()
export class ListPhysicalTestsService {
  constructor(private physicalTestsRepository: PhysicalTestsRepository) {}

  async execute({
    name,
    dateFrom,
    dateTo,
    page,
    size,
  }: ListPhysicalTestsRequest): Promise<ListPhysicalTestsResponse> {
    const findDateFrom = !!dateFrom ? startOfDay(dateFrom) : undefined;
    const findDateTo = !!dateTo ? endOfDay(dateTo) : undefined;
    const physicalTests = await this.physicalTestsRepository.findMany({
      name,
      dateFrom: findDateFrom,
      dateTo: findDateTo,
      page,
      size,
    });

    const total = await this.physicalTestsRepository.count({
      name,
      dateFrom: findDateFrom,
      dateTo: findDateTo,
    });

    return {
      data: physicalTests,
      pagination: {
        page,
        size,
        total,
        pages: Math.ceil(total / size),
      },
    };
  }
}
