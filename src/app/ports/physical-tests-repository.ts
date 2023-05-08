import { PhysicalTest } from '@app/entities/physical-test';

export interface FindManyProps {
  name?: string;
  dateFrom?: Date;
  dateTo?: Date;
  page: number;
  size: number;
}

export interface CountProps {
  name?: string;
  dateFrom?: Date;
  dateTo?: Date;
}

export abstract class PhysicalTestsRepository {
  abstract count(props: CountProps): Promise<number>;
  abstract findMany(props: FindManyProps): Promise<PhysicalTest[]>;
  abstract findByid(id: string): Promise<PhysicalTest | null>;
  abstract create(physicalTest: PhysicalTest): Promise<void>;
  abstract save(physicalTest: PhysicalTest): Promise<void>;
}
