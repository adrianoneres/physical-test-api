import { Injectable } from '@nestjs/common';

import { User } from '@app/entities/user';
import { CountProps, UsersRepository } from '@app/ports/users-repository';
import { PrismaUserMapper } from '../mappers/prisma-user-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prismaService: PrismaService) {}

  async count({ name, email, username }: CountProps): Promise<number> {
    return this.prismaService.user.count({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
        email: {
          contains: email,
          mode: 'insensitive',
        },
        username: {
          contains: username,
          mode: 'insensitive',
        },
      },
    });
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return null;
    }

    return PrismaUserMapper.toDomain(user);
  }

  async findByUsername(username: string): Promise<User | null> {
    const user = await this.prismaService.user.findFirst({
      where: {
        username,
      },
    });

    if (!user) {
      return null;
    }

    return PrismaUserMapper.toDomain(user);
  }

  async create(user: User): Promise<void> {
    const raw = PrismaUserMapper.toPrisma(user);

    await this.prismaService.user.create({
      data: raw,
    });
  }

  async changePassword(id: string, password: string): Promise<void> {
    await this.prismaService.user.update({
      where: { id },
      data: {
        password,
      },
    });
  }
}
