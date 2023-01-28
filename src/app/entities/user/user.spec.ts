import { Email } from './email';
import { User } from './user';
import { Name } from './name';
import { Username } from './username';
import { Password } from './password';

describe('User', () => {
  it('should be able to create an user', () => {
    const user = new User({
      name: new Name('John Doe'),
      email: new Email('johndoe@email.com'),
      username: new Username('johndoe'),
      password: new Password('123456'),
    });

    expect(user.name.value).toEqual('John Doe');
    expect(user.email.value).toEqual('johndoe@email.com');
    expect(user.username.value).toEqual('johndoe');
    expect(user.password.value).toEqual('123456');
    expect(user.admin).toEqual(false);
  });

  it('should be able set name', () => {
    const user = new User({
      name: new Name('John Doe'),
      email: new Email('johndoe@email.com'),
      username: new Username('johndoe'),
      password: new Password('123456'),
    });

    user.name = new Name('Jane Doe');

    expect(user.name.value).toEqual('Jane Doe');
  });

  it('should be able set email', () => {
    const user = new User({
      name: new Name('John Doe'),
      email: new Email('johndoe@email.com'),
      username: new Username('johndoe'),
      password: new Password('123456'),
    });

    user.email = new Email('johndoe@email.com');

    expect(user.email.value).toEqual('johndoe@email.com');
  });

  it('should be able set password', () => {
    const user = new User({
      name: new Name('John Doe'),
      email: new Email('johndoe@email.com'),
      username: new Username('johndoe'),
      password: new Password('123456'),
    });

    user.password = new Password('654321');

    expect(user.password.value).toEqual('654321');
  });
});
