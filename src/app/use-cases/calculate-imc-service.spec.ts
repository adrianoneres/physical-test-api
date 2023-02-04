import { CalculateImcService } from './calculate-imc.service';

describe('CalcuateImc', () => {
  it('should be able to calculate an imc', async () => {
    const calculateImcService = new CalculateImcService();

    const registeredPhysicalTest = await calculateImcService.execute({
      height: 2,
      weight: 1,
    });

    expect(registeredPhysicalTest.value).toEqual(0.25);
    expect(registeredPhysicalTest.status).toEqual('meagerness');
  });
});
