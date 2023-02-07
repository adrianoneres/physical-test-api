import { Institution as RawInstitution } from '@prisma/client';

import { Institution } from '@app/entities/institution';
import { Name } from '@app/entities/name';

export class PrismaInstitutionMapper {
  static toPrisma(institution: Institution) {
    return {
      id: institution.id,
      name: institution.name.value,
      isActive: institution.isActive,
    };
  }

  static toDomain(raw: RawInstitution): Institution {
    return new Institution(
      {
        name: new Name(raw.name),
        isActive: raw.isActive,
      },
      raw.id,
    );
  }
}
