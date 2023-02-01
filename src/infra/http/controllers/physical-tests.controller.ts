import { Body, Controller, Post } from '@nestjs/common';
import { parseISO } from 'date-fns';

import { CreatePhysicalTestService } from '@app/use-cases/create-physical-test.service';
import { CreatePhysicalTestBody } from '../dtos/create-physical-test-body';

@Controller('physical-tests')
export class PhysicalTestsController {
  constructor(
    private readonly createPhysicalTestService: CreatePhysicalTestService,
  ) {}

  @Post()
  async create(@Body() body: CreatePhysicalTestBody) {
    await this.createPhysicalTestService.execute({
      ...body,
      date: parseISO(body.date),
      birthdate: parseISO(body.birthdate),
    });
  }
}
