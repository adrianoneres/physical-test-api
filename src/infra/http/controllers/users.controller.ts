import { Body, Controller, Patch, Post, Req } from '@nestjs/common';

import { CreateUserBody } from '../dtos/create-user-body';
import { ChangeUserPasswordBody } from '../dtos/change-user-password-body';
import { CreateUserService } from '@app/use-cases/create-user.service';
import { ChangeUserPasswordService } from '@app/use-cases/change-user-password.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly changeUserPasswordService: ChangeUserPasswordService,
  ) {}

  @Post()
  async create(@Req() request: any, @Body() body: CreateUserBody) {
    const id = request.user.id;
    await this.createUserService.execute({ id, ...body });
  }

  @Patch('change-password')
  async changePassword(
    @Req() request: any,
    @Body() body: ChangeUserPasswordBody,
  ) {
    const id = request.user.id;
    await this.changeUserPasswordService.execute({ id, ...body });
  }
}
