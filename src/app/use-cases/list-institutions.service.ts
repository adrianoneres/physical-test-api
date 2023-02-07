import { Injectable } from '@nestjs/common';

import { Institution } from '@app/entities/institution';
import { InstitutionsRepository } from '@app/ports/institutions-repository';

interface ListInstitutionsRequest {
  name?: string;
  page: number;
  size: number;
}

type ListInstitutionsResponse = {
  data: Institution[];
  pagination: {
    page: number;
    pages: number;
    size: number;
    total: number;
  };
};

@Injectable()
export class ListInstitutionsService {
  constructor(private institutionsRepository: InstitutionsRepository) {}

  async execute({
    name,
    page,
    size,
  }: ListInstitutionsRequest): Promise<ListInstitutionsResponse> {
    const institutions = await this.institutionsRepository.findMany({
      name,
      page,
      size,
    });

    const total = await this.institutionsRepository.count({ name });

    return {
      data: institutions,
      pagination: {
        page,
        size,
        total,
        pages: Math.ceil(total / size),
      },
    };
  }
}
