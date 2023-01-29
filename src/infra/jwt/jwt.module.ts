import { Module } from '@nestjs/common';

import { JwtProvider } from '@app/ports/jwt-provider';
import { JsonwebtokenJwtAdapter } from './jsonwebtoken/jsonwebtoken-jwt-adapter';

@Module({
  providers: [
    {
      provide: JwtProvider,
      useClass: JsonwebtokenJwtAdapter,
    },
  ],
  exports: [JwtProvider],
})
export class JwtModule {}
