import { Professional } from '@app/entities/professional';

export interface FindManyProps {
  name?: string;
  registration?: string;
  page: number;
  size: number;
}

export interface CountProps {
  name?: string;
  registration?: string;
}

export abstract class ProfessionalsRepository {
  abstract count(props: CountProps): Promise<number>;
  abstract findMany(props: FindManyProps): Promise<Professional[]>;
  abstract findById(id: string): Promise<Professional | null>;
  abstract create(professional: Professional): Promise<void>;
  abstract save(professional: Professional): Promise<void>;
}
