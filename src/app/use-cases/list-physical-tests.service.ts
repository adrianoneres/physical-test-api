import { Injectable } from '@nestjs/common';

import { PhysicalTestsRepository } from '@app/ports/physical-tests-repository';
import { PhysicalTest } from '@app/entities/physical-test';

interface ListPhysicalTestsRequest {
  name?: string;
  date?: Date;
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
    date,
    page,
    size,
  }: ListPhysicalTestsRequest): Promise<ListPhysicalTestsResponse> {
    const physicalTests = await this.physicalTestsRepository.findMany({
      name,
      date,
      page,
      size,
    });

    const total = await this.physicalTestsRepository.count({ name, date });

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
