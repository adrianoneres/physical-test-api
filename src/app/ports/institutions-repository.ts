import { Institution } from '@app/entities/institution';

export interface FindManyProps {
  name?: string;
  page: number;
  size: number;
}

export interface CountProps {
  name?: string;
}

export abstract class InstitutionsRepository {
  abstract count(props: CountProps): Promise<number>;
  abstract findMany(props: FindManyProps): Promise<Institution[]>;
  abstract findById(id: string): Promise<Institution | null>;
  abstract create(institution: Institution): Promise<void>;
  abstract save(institution: Institution): Promise<void>;
}
