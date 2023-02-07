import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import {
  CountProps,
  FindManyProps,
  InstitutionsRepository,
} from '@app/ports/institutions-repository';
import { Institution } from '@app/entities/institution';
import { PrismaInstitutionMapper } from '../mappers/prisma-institution-mapper';

@Injectable()
export class PrismaInstitutionsRepository implements InstitutionsRepository {
  constructor(private prismaService: PrismaService) {}

  async count({ name }: CountProps): Promise<number> {
    return this.prismaService.institution.count({
      where: {
        isActive: true,
        name: {
          contains: name,
        },
      },
      orderBy: {
        name: 'asc',
      },
    });
  }

  async findMany({ name, page, size }: FindManyProps): Promise<Institution[]> {
    const queryPage = !page || page === 0 ? 1 : page;
    const skip = queryPage === 1 ? undefined : (queryPage - 1) * size;

    const institutions = await this.prismaService.institution.findMany({
      take: size,
      skip,
      where: {
        isActive: true,
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
      orderBy: {
        name: 'asc',
      },
    });

    return institutions.map(PrismaInstitutionMapper.toDomain);
  }

  async findByid(id: string): Promise<Institution | null> {
    const institution = await this.prismaService.institution.findUnique({
      where: {
        id,
      },
    });

    if (!institution) {
      return null;
    }

    return PrismaInstitutionMapper.toDomain(institution);
  }

  async create(institution: Institution): Promise<void> {
    const raw = PrismaInstitutionMapper.toPrisma(institution);

    await this.prismaService.institution.create({
      data: raw,
    });
  }

  async save(institution: Institution): Promise<void> {
    const raw = PrismaInstitutionMapper.toPrisma(institution);

    await this.prismaService.institution.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.institution.delete({
      where: {
        id,
      },
    });
  }
}
