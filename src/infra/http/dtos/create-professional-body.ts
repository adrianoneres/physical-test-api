import { IsNotEmpty, Length } from 'class-validator';

export class CreateProfessionalBody {
  @IsNotEmpty()
  @Length(3, 240)
  name: string;

  @IsNotEmpty()
  @Length(3, 240)
  registration: string;
}
