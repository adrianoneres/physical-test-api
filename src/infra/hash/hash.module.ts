import { Module } from '@nestjs/common';

import { HashProvider } from '@app/ports/hash-provider';
import { BCryptHashAdapter } from './bcrypt/bcrypt-hash-adapter';

@Module({
  providers: [
    {
      provide: HashProvider,
      useClass: BCryptHashAdapter,
    },
  ],
  exports: [HashProvider],
})
export class HashModule {}
