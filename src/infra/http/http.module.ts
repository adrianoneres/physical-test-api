import { Module } from '@nestjs/common';

import { SignInController } from './controllers/sign-in.controller';
import { CalculationsController } from './controllers/calculations.controller';
import { InstitutionsController } from './controllers/institutions.controller';
import { PhysicalTestsController } from './controllers/physical-tests.controller';
import { SignInService } from '@app/use-cases/sign-in.service';
import { CalculateImcService } from '@app/use-cases/calculate-imc.service';
import { ListInstitutionsService } from '@app/use-cases/list-institutions.service';
import { ViewInstitutionService } from '@app/use-cases/view-institution.service';
import { CreateInstitutionService } from '@app/use-cases/create-institution.service';
import { UpdateInstitutionService } from '@app/use-cases/update-institution.service';
import { DeleteInstitutionService } from '@app/use-cases/delete-institution.service';
import { ListPhysicalTestsService } from '@app/use-cases/list-physical-tests.service';
import { CreatePhysicalTestService } from '@app/use-cases/create-physical-test.service';
import { ViewPhysicalTestService } from '@app/use-cases/view-physical-test.service';
import { UpdatePhysicalTestService } from '@app/use-cases/update-physical-test.service';
import { DeletePhysicalTestService } from '@app/use-cases/delete-physical-test.service';
import { DatabaseModule } from '@infra/database/database.module';
import { HashModule } from '@infra/hash/hash.module';
import { JwtModule } from '@infra/jwt/jwt.module';

@Module({
  imports: [DatabaseModule, HashModule, JwtModule],
  controllers: [
    SignInController,
    CalculationsController,
    InstitutionsController,
    PhysicalTestsController,
  ],
  providers: [
    SignInService,
    CalculateImcService,
    ListPhysicalTestsService,
    ViewPhysicalTestService,
    CreatePhysicalTestService,
    UpdatePhysicalTestService,
    DeletePhysicalTestService,
    ListInstitutionsService,
    ViewInstitutionService,
    CreateInstitutionService,
    UpdateInstitutionService,
    DeleteInstitutionService,
  ],
})
export class HttpModule {}
