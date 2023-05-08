import { Module } from '@nestjs/common';

import { SignInController } from './controllers/sign-in.controller';
import { CalculationsController } from './controllers/calculations.controller';
import { InstitutionsController } from './controllers/institutions.controller';
import { ProfessionalsController } from './controllers/professionals.controller';
import { PhysicalTestsController } from './controllers/physical-tests.controller';
import { SignInService } from '@app/use-cases/sign-in.service';
import { CalculateImcService } from '@app/use-cases/calculate-imc.service';
import { ListInstitutionsService } from '@app/use-cases/list-institutions.service';
import { ViewInstitutionService } from '@app/use-cases/view-institution.service';
import { CreateInstitutionService } from '@app/use-cases/create-institution.service';
import { UpdateInstitutionService } from '@app/use-cases/update-institution.service';
import { DeleteInstitutionService } from '@app/use-cases/delete-institution.service';
import { ListProfessionalsService } from '@app/use-cases/list-professionals.service';
import { ViewProfessionalService } from '@app/use-cases/view-professional.service';
import { CreateProfessionalService } from '@app/use-cases/create-professional.service';
import { UpdateProfessionalService } from '@app/use-cases/update-professional.service';
import { DeleteProfessionalService } from '@app/use-cases/delete-professional.service';
import { CalculatePhysicalTestResultsService } from '@app/use-cases/calculate-physical-test-results.service';
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
    ProfessionalsController,
    PhysicalTestsController,
  ],
  providers: [
    SignInService,
    CalculateImcService,
    ListInstitutionsService,
    ViewInstitutionService,
    CreateInstitutionService,
    UpdateInstitutionService,
    DeleteInstitutionService,
    ListProfessionalsService,
    ViewProfessionalService,
    CreateProfessionalService,
    UpdateProfessionalService,
    DeleteProfessionalService,
    CalculatePhysicalTestResultsService,
    ListPhysicalTestsService,
    ViewPhysicalTestService,
    CreatePhysicalTestService,
    UpdatePhysicalTestService,
    DeletePhysicalTestService,
  ],
})
export class HttpModule {}
