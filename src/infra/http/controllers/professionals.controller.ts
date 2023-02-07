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

import { ListProfessionalsService } from '@app/use-cases/list-professionals.service';
import { ViewProfessionalService } from '@app/use-cases/view-professional.service';
import { CreateProfessionalService } from '@app/use-cases/create-professional.service';
import { UpdateProfessionalService } from '@app/use-cases/update-professional.service';
import { DeleteProfessionalService } from '@app/use-cases/delete-professional.service';
import { ProfessionalViewModel } from '../view-models/professional-view-model';
import { CreateProfessionalBody } from '../dtos/create-professional-body';
import { UpdateProfessionalBody } from '../dtos/update-professional-body';

@Controller('professionals')
export class ProfessionalsController {
  constructor(
    private readonly listProfessionalsService: ListProfessionalsService,
    private readonly viewProfessionalService: ViewProfessionalService,
    private readonly createProfessionalService: CreateProfessionalService,
    private readonly updateProfessionalService: UpdateProfessionalService,
    private readonly deleteProfessionalService: DeleteProfessionalService,
  ) {}

  @Get()
  async list(
    @Query('name') name: string,
    @Query('registration') registration: string,
    @Query('page') page: number,
    @Query('size') size: number,
  ) {
    const { data, pagination } = await this.listProfessionalsService.execute({
      name,
      registration,
      page: !!page ? Number(page) : 1,
      size: !!size ? Number(size) : 10,
    });

    return {
      data: data.map(ProfessionalViewModel.toHttp),
      pagination,
    };
  }

  @Get('/:id')
  async view(@Param('id') id: string) {
    const { professional } = await this.viewProfessionalService.execute({ id });

    return ProfessionalViewModel.toHttp(professional);
  }

  @Post()
  async create(@Body() body: CreateProfessionalBody) {
    await this.createProfessionalService.execute(body);
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() body: UpdateProfessionalBody) {
    await this.updateProfessionalService.execute({
      ...body,
      id,
    });
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    await this.deleteProfessionalService.execute({ id });
  }
}
