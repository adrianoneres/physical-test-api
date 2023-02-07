import { Professional } from '@app/entities/professional';
import { ProfessionalsRepository } from '@app/ports/professionals-repository';
import { CountProps, FindManyProps } from '@app/ports/professionals-repository';

export class InMemoryProfessionalsRepository extends ProfessionalsRepository {
  public professionals: Professional[] = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  count(_: CountProps): Promise<number> {
    return Promise.resolve(this.professionals.length);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findMany(props: FindManyProps): Promise<Professional[]> {
    return Promise.resolve(
      this.professionals.filter(professional => professional.isActive),
    );
  }

  findByid(id: string): Promise<Professional | null> {
    return Promise.resolve(
      this.professionals.find(item => item.id === id) || null,
    );
  }

  create(professional: Professional): Promise<void> {
    this.professionals.push(professional);
    return Promise.resolve();
  }

  save(professional: Professional): Promise<void> {
    const index = this.professionals.findIndex(
      item => item.id === professional.id,
    );

    if (index >= 0) {
      this.professionals[index] = professional;
    }

    return Promise.resolve();
  }
}
