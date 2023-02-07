import { IsNotEmpty, Length } from 'class-validator';

export class UpdateInstitutionBody {
  @IsNotEmpty()
  @Length(3, 240)
  name: string;
}
