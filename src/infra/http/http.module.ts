import { Module } from '@nestjs/common';

import { SignInService } from '@app/use-cases/sign-in.service';
import { ListPhysicalTestsService } from '@app/use-cases/list-physical-tests.service';
import { CreatePhysicalTestService } from '@app/use-cases/create-physical-test.service';
import { ViewPhysicalTestService } from '@app/use-cases/view-physical-test.service';
import { UpdatePhysicalTestService } from '@app/use-cases/update-physical-test.service';
import { DeletePhysicalTestService } from '@app/use-cases/delete-physical-test.service';
import { SignInController } from './controllers/sign-in.controller';
import { DatabaseModule } from '@infra/database/database.module';
import { HashModule } from '@infra/hash/hash.module';
import { JwtModule } from '@infra/jwt/jwt.module';
import { PhysicalTestsController } from './controllers/physical-tests.controller';

@Module({
  imports: [DatabaseModule, HashModule, JwtModule],
  controllers: [SignInController, PhysicalTestsController],
  providers: [
    SignInService,
    ListPhysicalTestsService,
    ViewPhysicalTestService,
    CreatePhysicalTestService,
    UpdatePhysicalTestService,
    DeletePhysicalTestService,
  ],
})
export class HttpModule {}
