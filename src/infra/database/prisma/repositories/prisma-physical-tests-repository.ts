import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import {
  FindByNameAndDateProps,
  PhysicalTestsRepository,
} from '@app/ports/physical-tests-repository';
import { PhysicalTest } from '@app/entities/physical-test';
import { PrismaPhysicalTestMapper } from '../mappers/prisma-physical-test-mapper';

@Injectable()
export class PrismaPhysicalTestsRepository implements PhysicalTestsRepository {
  constructor(private prismaService: PrismaService) {}
  async findAll(): Promise<PhysicalTest[]> {
    const physicalTests = await this.prismaService.physicalTest.findMany();

    if (!physicalTests || physicalTests.length === 0) {
      return [];
    }

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

  async findByNameOrDate(
    props: FindByNameAndDateProps,
  ): Promise<PhysicalTest[]> {
    const physicalTests = await this.prismaService.physicalTest.findMany({
      where: {
        OR: [
          {
            name: props.name,
          },
          {
            date: props.date,
          },
        ],
      },
    });

    if (!physicalTests || physicalTests.length === 0) {
      return [];
    }

    return physicalTests.map(PrismaPhysicalTestMapper.toDomain);
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
