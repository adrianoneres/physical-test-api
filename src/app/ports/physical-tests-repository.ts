import { PhysicalTest } from '@app/entities/physical-test';

export interface FindByNameAndDateProps {
  name: string;
  date: Date;
}

export abstract class PhysicalTestsRepository {
  abstract findAll(): Promise<PhysicalTest[]>;
  abstract findByid(id: string): Promise<PhysicalTest | null>;
  abstract findByNameOrDate(
    props: FindByNameAndDateProps,
  ): Promise<PhysicalTest | null>;
  abstract create(physicalTest: PhysicalTest): Promise<void>;
  abstract save(physicalTest: PhysicalTest): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
