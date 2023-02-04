import { IsDecimal, IsNotEmpty } from 'class-validator';

export class CalculateImcQuery {
  @IsNotEmpty()
  @IsDecimal()
  height: number;

  @IsNotEmpty()
  @IsDecimal()
  weight: number;
}
