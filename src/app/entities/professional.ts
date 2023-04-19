import { Replace } from 'src/helpers/replace.helper';
import { BaseEntity } from './base-entity';
import { Name } from './name';
import { Registration } from './registration';

export interface ProfessionalProps {
  name: Name;
  registration: Registration;
  isActive: boolean;
}

export class Professional extends BaseEntity {
  private props: ProfessionalProps;

  constructor(
    props: Replace<ProfessionalProps, { isActive?: boolean }>,
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

  public get registration(): Registration {
    return this.props.registration;
  }

  public set registration(registration: Registration) {
    this.props.registration = registration;
  }

  public get isActive(): boolean {
    return this.props.isActive;
  }

  public set isActive(isActive: boolean) {
    this.props.isActive = isActive;
  }
}
