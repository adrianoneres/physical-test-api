import { Institution } from '@app/entities/institution';

export class InstitutionViewModel {
  static toHttp(physicalTest: Institution) {
    return {
      id: physicalTest.id,
      name: physicalTest.name.value,
    };
  }
}
