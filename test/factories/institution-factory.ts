import { Institution, InstitutionProps } from '@app/entities/institution';
import { Name } from '@app/entities/name';

type Override = Partial<InstitutionProps>;

export async function makeInstitution(override: Override = {}) {
  return new Institution({
    name: new Name('Test Institution'),
    ...override,
  });
}
