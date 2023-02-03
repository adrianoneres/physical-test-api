import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { parseISO } from 'date-fns';

import { CreatePhysicalTestService } from '@app/use-cases/create-physical-test.service';
import { CreatePhysicalTestBody } from '../dtos/create-physical-test-body';
import { ViewPhysicalTestService } from '@app/use-cases/view-physical-test.service';
import { PhysicalTestViewModel } from '../view-models/physical-test-view-model';

@Controller('physical-tests')
export class PhysicalTestsController {
  constructor(
    private readonly viewPhysicalTestService: ViewPhysicalTestService,
    private readonly createPhysicalTestService: CreatePhysicalTestService,
  ) {}

  @Get('/:id')
  async view(@Param('id') id: string) {
    const { physicalTest } = await this.viewPhysicalTestService.execute({ id });

    return PhysicalTestViewModel.toHttp(physicalTest);
  }

  @Post()
  async create(@Body() body: CreatePhysicalTestBody) {
    await this.createPhysicalTestService.execute({
      ...body,
      date: parseISO(body.date),
      birthdate: parseISO(body.birthdate),
    });
  }
}
