import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import {
  CountProps,
  FindManyProps,
  ProfessionalsRepository,
} from '@app/ports/professionals-repository';
import { Professional } from '@app/entities/professional';
import { PrismaProfessionalMapper } from '../mappers/prisma-professional-mapper';

@Injectable()
export class PrismaProfessionalsRepository implements ProfessionalsRepository {
  constructor(private prismaService: PrismaService) {}

  async count({ name, registration }: CountProps): Promise<number> {
    return this.prismaService.professional.count({
      where: {
        isActive: true,
        name: {
          contains: name,
          mode: 'insensitive',
        },
        registration: {
          contains: registration,
          mode: 'insensitive',
        },
      },
    });
  }

  async findMany({
    name,
    registration,
    page,
    size,
  }: FindManyProps): Promise<Professional[]> {
    const queryPage = !page || page === 0 ? 1 : page;
    const skip = queryPage === 1 ? undefined : (queryPage - 1) * size;

    const professionals = await this.prismaService.professional.findMany({
      take: size,
      skip,
      where: {
        isActive: true,
        name: {
          contains: name,
          mode: 'insensitive',
        },
        registration: {
          contains: registration,
          mode: 'insensitive',
        },
      },
      orderBy: {
        name: 'asc',
      },
    });

    return professionals.map(PrismaProfessionalMapper.toDomain);
  }

  async findByid(id: string): Promise<Professional | null> {
    const professional = await this.prismaService.professional.findUnique({
      where: {
        id,
      },
    });

    if (!professional) {
      return null;
    }

    return PrismaProfessionalMapper.toDomain(professional);
  }

  async create(professional: Professional): Promise<void> {
    const raw = PrismaProfessionalMapper.toPrisma(professional);

    await this.prismaService.professional.create({
      data: raw,
    });
  }

  async save(professional: Professional): Promise<void> {
    const raw = PrismaProfessionalMapper.toPrisma(professional);

    await this.prismaService.professional.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.professional.delete({
      where: {
        id,
      },
    });
  }
}
