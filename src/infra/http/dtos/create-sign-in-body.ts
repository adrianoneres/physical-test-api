import { IsNotEmpty, Length } from 'class-validator';

export class CreateSignInBody {
  @IsNotEmpty()
  @Length(5, 240)
  username: string;

  @IsNotEmpty()
  password: string;
}
