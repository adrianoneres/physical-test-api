import { Email } from './email';
import { Name } from './name';
import { Password } from './password';
import { makeUser } from '@test/factories/user-factory';

describe('User', () => {
  it('should be able to create an user', async () => {
    const user = await makeUser();

    expect(user.name.value).toEqual('John Doe');
    expect(user.email.value).toEqual('johndoe@email.com');
    expect(user.username.value).toEqual('johndoe');
    expect(user.isAdmin).toEqual(false);
  });

  it('should be able set name', async () => {
    const user = await makeUser();

    user.name = new Name('Jane Doe');

    expect(user.name.value).toEqual('Jane Doe');
  });

  it('should be able set email', async () => {
    const user = await makeUser();

    user.email = new Email('johndoe@email.com');

    expect(user.email.value).toEqual('johndoe@email.com');
  });

  it('should be able set password', async () => {
    const user = await makeUser();

    user.password = new Password('654321');

    expect(user.password.value).toEqual('654321');
  });
});
