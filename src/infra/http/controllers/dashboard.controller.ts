import { Controller, Get } from '@nestjs/common';

import { DashboardService } from '@app/use-cases/dashboard.service';
import { DashboardViewModel } from '../view-models/dashboard-view-model';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  async create() {
    const dashboard = await this.dashboardService.execute();

    return DashboardViewModel.toHttp(dashboard);
  }
}
