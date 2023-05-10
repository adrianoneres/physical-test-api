import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { DatabaseModule } from '@infra/database/database.module';
import { HttpModule } from '@infra/http/http.module';
import { AuthenticationMiddleware } from '@infra/http/middlewares/authentication-middleware';

@Module({
  imports: [DatabaseModule, HttpModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes(
        'dashboard',
        'institutions',
        'professionals',
        'physical-tests',
        'users',
      );
  }
}
