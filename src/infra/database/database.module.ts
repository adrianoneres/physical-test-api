import { Module } from '@nestjs/common';

import { UsersRepository } from '@app/ports/users-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUsersRepository } from './prisma/repositories/prisma-users-repository';
import { InstitutionsRepository } from '@app/ports/institutions-repository';
import { PrismaInstitutionsRepository } from './prisma/repositories/prisma-institutions-repository';
import { ProfessionalsRepository } from '@app/ports/professionals-repository';
import { PrismaProfessionalsRepository } from './prisma/repositories/prisma-professionals-repository';
import { PhysicalTestsRepository } from '@app/ports/physical-tests-repository';
import { PrismaPhysicalTestsRepository } from './prisma/repositories/prisma-physical-tests-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
    {
      provide: InstitutionsRepository,
      useClass: PrismaInstitutionsRepository,
    },
    {
      provide: ProfessionalsRepository,
      useClass: PrismaProfessionalsRepository,
    },
    {
      provide: PhysicalTestsRepository,
      useClass: PrismaPhysicalTestsRepository,
    },
  ],
  exports: [
    UsersRepository,
    InstitutionsRepository,
    ProfessionalsRepository,
    PhysicalTestsRepository,
  ],
})
export class DatabaseModule {}
