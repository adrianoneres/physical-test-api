import { IsNotEmpty, Length } from 'class-validator';

export class UpdateProfessionalBody {
  @IsNotEmpty()
  @Length(3, 240)
  name: string;

  @IsNotEmpty()
  @Length(3, 240)
  registration: string;
}
