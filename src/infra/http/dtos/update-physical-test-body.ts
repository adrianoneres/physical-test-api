import {
  IsDateString,
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsOptional,
  Length,
} from 'class-validator';

export class UpdatePhysicalTestBody {
  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsNotEmpty()
  @Length(3, 240)
  name: string;

  @IsNotEmpty()
  @Length(1)
  gender: string;

  @IsNotEmpty()
  @IsDateString()
  birthdate: string;

  @IsNotEmpty()
  @IsDecimal()
  height: number;

  @IsNotEmpty()
  @IsDecimal()
  weight: number;

  @IsOptional()
  @IsDecimal()
  flexibility_first_attempt: number;

  @IsOptional()
  @IsDecimal()
  flexibility_second_attempt: number;

  @IsOptional()
  @Length(3, 240)
  flexibility_evaluator: string;

  @IsOptional()
  @IsDecimal()
  wingspan: number;

  @IsOptional()
  @Length(3, 240)
  wingspan_evaluator: string;

  @IsOptional()
  @IsInt()
  strength_resistance: number;

  @IsOptional()
  @Length(3, 240)
  strength_resistance_evaluator: string;

  @IsOptional()
  @IsInt()
  muscular_endurance_first_attempt: number;

  @IsOptional()
  @IsInt()
  muscular_endurance_second_attempt: number;

  @IsOptional()
  @Length(3, 240)
  muscular_endurance_evaluator: string;

  @IsOptional()
  @IsDecimal()
  lower_limb_strength_first_attempt: number;

  @IsOptional()
  @IsDecimal()
  lower_limb_strength_second_attempt: number;

  @IsOptional()
  @Length(3, 240)
  lower_limb_strength_evaluator: string;

  @IsOptional()
  @IsDecimal()
  upper_limb_strength_first_attempt: number;

  @IsOptional()
  @IsDecimal()
  upper_limb_strength_second_attempt: number;

  @IsOptional()
  @Length(3, 240)
  upper_limb_strength_evaluator: string;

  @IsOptional()
  @IsDecimal()
  agility_first_attempt: number;

  @IsOptional()
  @IsDecimal()
  agility_second_attempt: number;

  @IsOptional()
  @Length(3, 240)
  agility_evaluator: string;

  @IsOptional()
  @IsDecimal()
  general_resistance: number;

  @IsOptional()
  @Length(3, 240)
  general_resistance_evaluator: string;

  @IsOptional()
  @IsDecimal()
  speed: number;

  @IsOptional()
  @Length(3, 240)
  speed_evaluator: string;
}
