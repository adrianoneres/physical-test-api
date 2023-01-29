import { Body, Controller, Post } from '@nestjs/common';

import { SignInService } from '@app/use-cases/sign-in.service';
import { CreateSignInBody } from '../dtos/create-sign-in-body';
import { UserViewModel } from '../view-models/user-view-model';

@Controller('sign-in')
export class SignInController {
  constructor(private readonly signInService: SignInService) {}

  @Post()
  async create(@Body() body: CreateSignInBody) {
    const { username, password } = body;

    const { access_token, user } = await this.signInService.execute({
      username,
      password,
    });

    return { access_token, user: UserViewModel.toHttp(user) };
  }
}
