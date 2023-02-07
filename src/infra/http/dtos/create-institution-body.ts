import { IsNotEmpty, Length } from 'class-validator';

export class CreateInstitutionBody {
  @IsNotEmpty()
  @Length(3, 240)
  name: string;
}
