import { Professional } from '@app/entities/professional';

export class ProfessionalViewModel {
  static toHttp(professional: Professional) {
    return {
      id: professional.id,
      registration: professional.registration.value,
      name: professional.name.value,
    };
  }
}
