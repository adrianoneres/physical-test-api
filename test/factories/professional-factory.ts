import { Professional, ProfessionalProps } from '@app/entities/professional';
import { Name } from '@app/entities/name';
import { Registration } from '@app/entities/registration';

type Override = Partial<ProfessionalProps>;

export async function makeProfessional(override: Override = {}) {
  return new Professional({
    name: new Name('Jane Doe'),
    registration: new Registration('123456'),
    ...override,
  });
}
