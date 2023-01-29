import { makeUser } from '@test/factories/user-factory';
import { makeEvaluator } from '@test/factories/evaluator-factory';
import { Name } from './name';

describe('Evaluator', () => {
  it('should be able to create an evaluator', async () => {
    const user = await makeEvaluator();

    expect(user.name.value).toEqual('Jane Doe');
  });

  it('should be able set name', async () => {
    const user = await makeUser();

    user.name = new Name('John Doe');

    expect(user.name.value).toEqual('John Doe');
  });
});
