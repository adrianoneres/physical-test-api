import { Evaluator } from '@app/entities/evaluator';
import { Name } from '@app/entities/name';
import { UserProps } from '@app/entities/user';

type Override = Partial<UserProps>;

export async function makeEvaluator(override: Override = {}) {
  return new Evaluator({
    name: new Name('Jane Doe'),
    ...override,
  });
}
