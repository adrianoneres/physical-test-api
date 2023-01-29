import { Module } from '@nestjs/common';

import { SignInService } from '@app/use-cases/sign-in.service';
import { SignInController } from './controllers/sign-in.controller';
import { DatabaseModule } from '@infra/database/database.module';
import { HashModule } from '@infra/hash/hash.module';
import { JwtModule } from '@infra/jwt/jwt.module';

@Module({
  imports: [DatabaseModule, HashModule, JwtModule],
  controllers: [SignInController],
  providers: [SignInService],
})
export class HttpModule {}
