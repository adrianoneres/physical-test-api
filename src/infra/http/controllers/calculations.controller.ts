import { Controller, Get, Query } from '@nestjs/common';

import { CalculateImcService } from '@app/use-cases/calculate-imc.service';
import { CalculateImcQuery } from '../dtos/calculate-imc-query';

@Controller('calculations')
export class CalculationsController {
  constructor(private readonly calculateImcService: CalculateImcService) {}

  @Get('/imc')
  async calculateImc(@Query() query: CalculateImcQuery) {
    return await this.calculateImcService.execute(query);
  }
}
