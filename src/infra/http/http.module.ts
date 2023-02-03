import { Module } from '@nestjs/common';

import { SignInService } from '@app/use-cases/sign-in.service';
import { SignInController } from './controllers/sign-in.controller';
import { DatabaseModule } from '@infra/database/database.module';
import { HashModule } from '@infra/hash/hash.module';
import { JwtModule } from '@infra/jwt/jwt.module';
import { PhysicalTestsController } from './controllers/physical-tests.controller';
import { CreatePhysicalTestService } from '@app/use-cases/create-physical-test.service';
import { ViewPhysicalTestService } from '@app/use-cases/view-physical-test.service';

@Module({
  imports: [DatabaseModule, HashModule, JwtModule],
  controllers: [SignInController, PhysicalTestsController],
  providers: [
    SignInService,
    CreatePhysicalTestService,
    ViewPhysicalTestService,
  ],
})
export class HttpModule {}
