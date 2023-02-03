import { InvalidUsernameOrPasswordError } from '@errors/invalid-username-password-error';
import { BCryptHashAdapter } from '@infra/hash/bcrypt/bcrypt-hash-adapter';
import { JsonwebtokenJwtAdapter } from '@infra/jwt/jsonwebtoken/jsonwebtoken-jwt-adapter';
import { makeUser } from '@test/factories/user-factory';
import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository';
import { SignInService } from './sign-in.service';

describe('SignInService', () => {
  it('should be able to sign in', async () => {
    const user = await makeUser();

    const usersRepository = new InMemoryUsersRepository();
    const hashAdapter = new BCryptHashAdapter();
    const jwtAdapter = new JsonwebtokenJwtAdapter();
    await usersRepository.create(user);

    const signInService = new SignInService(
      usersRepository,
      hashAdapter,
      jwtAdapter,
    );

    const response = await signInService.execute({
      username: 'johndoe',
      password: '123456',
    });

    expect(response).toBeTruthy();
    expect(response.user.name.value).toEqual('John Doe');
    expect(response.user.email.value).toEqual('johndoe@email.com');
    expect(response.user.username.value).toEqual('johndoe');
  });

  it('should not be able to sign in with an unexistent user', async () => {
    const usersRepository = new InMemoryUsersRepository();
    const hashAdapter = new BCryptHashAdapter();
    const jwtAdapter = new JsonwebtokenJwtAdapter();

    const signInService = new SignInService(
      usersRepository,
      hashAdapter,
      jwtAdapter,
    );

    expect(
      async () =>
        await signInService.execute({
          username: 'johndoe',
          password: '123456',
        }),
    ).rejects.toThrow(InvalidUsernameOrPasswordError);
  });

  it('should not be able to sign in with an invalid password', async () => {
    const user = await makeUser();

    const usersRepository = new InMemoryUsersRepository();
    const hashAdapter = new BCryptHashAdapter();
    const jwtAdapter = new JsonwebtokenJwtAdapter();
    await usersRepository.create(user);

    const signInService = new SignInService(
      usersRepository,
      hashAdapter,
      jwtAdapter,
    );

    expect(
      async () =>
        await signInService.execute({
          username: 'johndoe',
          password: 'wrong-password',
        }),
    ).rejects.toThrow(InvalidUsernameOrPasswordError);
  });
});
