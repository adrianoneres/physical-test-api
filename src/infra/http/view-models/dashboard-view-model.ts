interface Dashboard {
  countProfessionals: number;
  countInstitutions: number;
  countPhysicalTests: number;
}

export class DashboardViewModel {
  static toHttp(dashboard: Dashboard) {
    return {
      professionals: dashboard.countProfessionals,
      institutions: dashboard.countInstitutions,
      physicalTests: dashboard.countPhysicalTests,
    };
  }
}
