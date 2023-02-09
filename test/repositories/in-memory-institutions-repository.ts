import { Institution } from '@app/entities/institution';
import { InstitutionsRepository } from '@app/ports/institutions-repository';
import { CountProps, FindManyProps } from '@app/ports/institutions-repository';

export class InMemoryInstitutionsRepository extends InstitutionsRepository {
  public institutions: Institution[] = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  count(_: CountProps): Promise<number> {
    return Promise.resolve(
      this.institutions.filter(institution => institution.isActive).length,
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findMany(props: FindManyProps): Promise<Institution[]> {
    return Promise.resolve(
      this.institutions.filter(institution => institution.isActive),
    );
  }

  findByid(id: string): Promise<Institution | null> {
    return Promise.resolve(
      this.institutions.find(item => item.id === id) || null,
    );
  }

  create(institution: Institution): Promise<void> {
    this.institutions.push(institution);
    return Promise.resolve();
  }

  save(institution: Institution): Promise<void> {
    const index = this.institutions.findIndex(
      item => item.id === institution.id,
    );

    if (index >= 0) {
      this.institutions[index] = institution;
    }

    return Promise.resolve();
  }
}
