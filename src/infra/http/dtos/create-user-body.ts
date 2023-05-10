import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty()
  @Length(3, 240)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(3, 240)
  username: string;

  @IsNotEmpty()
  @Length(6, 240)
  password: string;

  @IsNotEmpty()
  @Length(6, 240)
  password_confirmation: string;
}
