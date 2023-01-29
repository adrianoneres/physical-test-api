import { BaseEntity } from './base-entity';
import { Name } from './name';

export interface EvaluatorProps {
  name: Name;
}

export class Evaluator extends BaseEntity {
  private props: EvaluatorProps;

  constructor(props: EvaluatorProps, id?: string) {
    super(id);
    this.props = props;
  }

  public get name(): Name {
    return this.props.name;
  }

  public set name(name: Name) {
    this.props.name = name;
  }
}
