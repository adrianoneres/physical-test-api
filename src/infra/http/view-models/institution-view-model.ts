import { Institution } from '@app/entities/institution';

export class InstitutionViewModel {
  static toHttp(institution: Institution) {
    return {
      id: institution.id,
      name: institution.name.value,
    };
  }
}
