import { hash, compare } from 'bcryptjs';

import { HashProvider } from '@app/ports/hash-provider';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BCryptHashAdapter extends HashProvider {
  generate(payload: string): Promise<string> {
    return hash(payload, 0);
  }
  compare(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}
