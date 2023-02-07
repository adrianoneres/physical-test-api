import { Injectable } from '@nestjs/common';

import { Professional } from '@app/entities/professional';
import { ProfessionalsRepository } from '@app/ports/professionals-repository';

interface ListProfessionalsRequest {
  name?: string;
  registration?: string;
  page: number;
  size: number;
}

type ListProfessionalsResponse = {
  data: Professional[];
  pagination: {
    page: number;
    pages: number;
    size: number;
    total: number;
  };
};

@Injectable()
export class ListProfessionalsService {
  constructor(private professionalsRepository: ProfessionalsRepository) {}

  async execute({
    name,
    registration,
    page,
    size,
  }: ListProfessionalsRequest): Promise<ListProfessionalsResponse> {
    const professionals = await this.professionalsRepository.findMany({
      name,
      registration,
      page,
      size,
    });

    const total = await this.professionalsRepository.count({
      name,
      registration,
    });

    return {
      data: professionals,
      pagination: {
        page,
        size,
        total,
        pages: Math.ceil(total / size),
      },
    };
  }
}
