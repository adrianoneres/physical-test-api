import { IsNotEmpty } from 'class-validator';

export class ChangeUserPasswordBody {
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  new_password: string;

  @IsNotEmpty()
  new_password_confirmation: string;
}
