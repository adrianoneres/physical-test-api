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

import { ListInstitutionsService } from '@app/use-cases/list-institutions.service';
import { ViewInstitutionService } from '@app/use-cases/view-institution.service';
import { CreateInstitutionService } from '@app/use-cases/create-institution.service';
import { UpdateInstitutionService } from '@app/use-cases/update-institution.service';
import { DeleteInstitutionService } from '@app/use-cases/delete-institution.service';
import { InstitutionViewModel } from '../view-models/institution-view-model';
import { CreateInstitutionBody } from '../dtos/create-institution-body';
import { UpdateInstitutionBody } from '../dtos/update-institution-body';

@Controller('institutions')
export class InstitutionsController {
  constructor(
    private readonly listInstitutionsService: ListInstitutionsService,
    private readonly viewInstitutionService: ViewInstitutionService,
    private readonly createInstitutionService: CreateInstitutionService,
    private readonly updateInstitutionService: UpdateInstitutionService,
    private readonly deleteInstitutionService: DeleteInstitutionService,
  ) {}

  @Get()
  async list(
    @Query('name') name: string,
    @Query('page') page: number,
    @Query('size') size: number,
  ) {
    const { data, pagination } = await this.listInstitutionsService.execute({
      name,
      page: !!page ? Number(page) : 1,
      size: !!size ? Number(size) : 10,
    });

    return {
      data: data.map(InstitutionViewModel.toHttp),
      pagination,
    };
  }

  @Get('/:id')
  async view(@Param('id') id: string) {
    const { institution } = await this.viewInstitutionService.execute({ id });

    return InstitutionViewModel.toHttp(institution);
  }

  @Post()
  async create(@Body() body: CreateInstitutionBody) {
    await this.createInstitutionService.execute(body);
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() body: UpdateInstitutionBody) {
    await this.updateInstitutionService.execute({
      ...body,
      id,
    });
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    await this.deleteInstitutionService.execute({ id });
  }
}
