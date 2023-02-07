import { Professional as RawProfessional } from '@prisma/client';

import { Professional } from '@app/entities/professional';
import { Name } from '@app/entities/name';
import { Registration } from '@app/entities/registration';

export class PrismaProfessionalMapper {
  static toPrisma(professional: Professional) {
    return {
      id: professional.id,
      name: professional.name.value,
      registration: professional.registration.value,
      isActive: professional.isActive,
    };
  }

  static toDomain(raw: RawProfessional): Professional {
    return new Professional(
      {
        name: new Name(raw.name),
        registration: new Registration(raw.registration),
        isActive: raw.isActive,
      },
      raw.id,
    );
  }
}
