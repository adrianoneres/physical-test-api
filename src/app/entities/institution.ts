import { Replace } from 'src/helpers/Replace';
import { BaseEntity } from './base-entity';
import { Name } from './name';

export interface InstitutionProps {
  name: Name;
  isActive: boolean;
}

export class Institution extends BaseEntity {
  private props: InstitutionProps;

  constructor(
    props: Replace<InstitutionProps, { isActive?: boolean }>,
    id?: string,
  ) {
    super(id);
    this.props = { ...props, isActive: props.isActive ?? true };
  }

  public get name(): Name {
    return this.props.name;
  }

  public set name(name: Name) {
    this.props.name = name;
  }

  public get isActive(): boolean {
    return this.props.isActive;
  }

  public set isActive(isActive: boolean) {
    this.props.isActive = isActive;
  }
}
