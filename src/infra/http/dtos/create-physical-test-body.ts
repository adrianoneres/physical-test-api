import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Length,
} from 'class-validator';

export class CreatePhysicalTestBody {
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
  @IsNumber({ maxDecimalPlaces: 2 })
  height: number;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  weight: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  flexibility_first_attempt: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  flexibility_second_attempt: number;

  @IsOptional()
  @Length(3, 240)
  flexibility_evaluator: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
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
  @IsNumber({ maxDecimalPlaces: 2 })
  lower_limb_strength_first_attempt: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  lower_limb_strength_second_attempt: number;

  @IsOptional()
  @Length(3, 240)
  lower_limb_strength_evaluator: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  upper_limb_strength_first_attempt: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  upper_limb_strength_second_attempt: number;

  @IsOptional()
  @Length(3, 240)
  upper_limb_strength_evaluator: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  agility_first_attempt: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  agility_second_attempt: number;

  @IsOptional()
  @Length(3, 240)
  agility_evaluator: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  general_resistance: number;

  @IsOptional()
  @Length(3, 240)
  general_resistance_evaluator: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  speed: number;

  @IsOptional()
  @Length(3, 240)
  speed_evaluator: string;
}
