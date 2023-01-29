import { BCryptHashAdapter } from '@infra/hash/bcrypt/bcrypt-hash-adapter';
import { JsonwebtokenJwtAdapter } from '@infra/jwt/jsonwebtoken/jsonwebtoken-jwt-adapter';
import { makeUser } from '@test/factories/user-factory';
import { InMemoryUsersRepository } from '@test/ports/in-memory-users-repository';
import { SignInService } from './sign-in.service';

describe('SignInService', () => {
  it('should be able to sign in', async () => {
    const user = await makeUser();

    const usersRepository = new InMemoryUsersRepository();
    const hashAdapter = new BCryptHashAdapter();
    const jwtAdapter = new JsonwebtokenJwtAdapter();
    await usersRepository.create(user);

    const signIn = new SignInService(usersRepository, hashAdapter, jwtAdapter);

    const response = await signIn.execute({
      username: 'johndoe',
      password: '123456',
    });

    expect(response).toBeTruthy();
    expect(response.user.name.value).toEqual('John Doe');
    expect(response.user.email.value).toEqual('johndoe@email.com');
    expect(response.user.username.value).toEqual('johndoe');
  });
});
