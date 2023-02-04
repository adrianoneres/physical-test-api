import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { parseISO } from 'date-fns';

import { CreatePhysicalTestService } from '@app/use-cases/create-physical-test.service';
import { UpdatePhysicalTestService } from '@app/use-cases/update-physical-test.service';
import { ViewPhysicalTestService } from '@app/use-cases/view-physical-test.service';
import { CreatePhysicalTestBody } from '../dtos/create-physical-test-body';
import { UpdatePhysicalTestBody } from '../dtos/update-physical-test-body';
import { PhysicalTestViewModel } from '../view-models/physical-test-view-model';
import { DeletePhysicalTestService } from '@app/use-cases/delete-physical-test.service';
import { ListPhysicalTestsService } from '@app/use-cases/list-physical-tests.service';

@Controller('physical-tests')
export class PhysicalTestsController {
  constructor(
    private readonly listPhysicalTestsService: ListPhysicalTestsService,
    private readonly viewPhysicalTestService: ViewPhysicalTestService,
    private readonly createPhysicalTestService: CreatePhysicalTestService,
    private readonly updatePhysicalTestService: UpdatePhysicalTestService,
    private readonly deletePhysicalTestService: DeletePhysicalTestService,
  ) {}

  @Get()
  async list(
    @Query('name') name: string,
    @Query('date') date: string,
    @Query('page') page: number,
    @Query('size') size: number,
  ) {
    const { data, pagination } = await this.listPhysicalTestsService.execute({
      name,
      date: !!date ? parseISO(date) : undefined,
      page: !!page ? Number(page) : 1,
      size: !!size ? Number(size) : 10,
    });

    return {
      data: data.map(PhysicalTestViewModel.toHttp),
      pagination,
    };
  }

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

  @Put('/:id')
  async update(@Param('id') id: string, @Body() body: UpdatePhysicalTestBody) {
    await this.updatePhysicalTestService.execute({
      ...body,
      id,
      date: parseISO(body.date),
      birthdate: parseISO(body.birthdate),
    });
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    await this.deletePhysicalTestService.execute({ id });
  }
}
