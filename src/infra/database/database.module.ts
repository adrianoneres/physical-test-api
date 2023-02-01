import { Module } from '@nestjs/common';

import { UsersRepository } from '@app/ports/users-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUsersRepository } from './prisma/repositories/prisma-users-repository';
import { PhysicalTestsRepository } from '@app/ports/physical-tests-repository';
import { PrismaPhysicalTestsRepository } from './prisma/repositories/prisma-physical-tests-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: PhysicalTestsRepository,
      useClass: PrismaPhysicalTestsRepository,
    },
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
  ],
  exports: [PhysicalTestsRepository, UsersRepository],
})
export class DatabaseModule {}
