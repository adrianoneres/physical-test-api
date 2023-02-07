import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import {
  CountProps,
  FindManyProps,
  PhysicalTestsRepository,
} from '@app/ports/physical-tests-repository';
import { PhysicalTest } from '@app/entities/physical-test';
import { PrismaPhysicalTestMapper } from '../mappers/prisma-physical-test-mapper';

@Injectable()
export class PrismaPhysicalTestsRepository implements PhysicalTestsRepository {
  constructor(private prismaService: PrismaService) {}

  async count({ name, date }: CountProps): Promise<number> {
    const queryDate = date ? date : { lte: new Date() };

    return this.prismaService.physicalTest.count({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
        date: queryDate,
      },
    });
  }

  async findMany({
    name,
    date,
    page,
    size,
  }: FindManyProps): Promise<PhysicalTest[]> {
    const queryPage = !page || page === 0 ? 1 : page;
    const skip = queryPage === 1 ? undefined : (queryPage - 1) * size;
    const queryDate = date ? date : { lte: new Date() };

    const physicalTests = await this.prismaService.physicalTest.findMany({
      take: size,
      skip,
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
        date: queryDate,
      },
      orderBy: {
        name: 'asc',
      },
    });

    return physicalTests.map(PrismaPhysicalTestMapper.toDomain);
  }

  async findByid(id: string): Promise<PhysicalTest | null> {
    const physicalTest = await this.prismaService.physicalTest.findUnique({
      where: {
        id,
      },
    });

    if (!physicalTest) {
      return null;
    }

    return PrismaPhysicalTestMapper.toDomain(physicalTest);
  }

  async create(physicalTest: PhysicalTest): Promise<void> {
    const raw = PrismaPhysicalTestMapper.toPrisma(physicalTest);

    await this.prismaService.physicalTest.create({
      data: raw,
    });
  }

  async save(physicalTest: PhysicalTest): Promise<void> {
    const raw = PrismaPhysicalTestMapper.toPrisma(physicalTest);

    await this.prismaService.physicalTest.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.physicalTest.delete({
      where: {
        id,
      },
    });
  }
}
