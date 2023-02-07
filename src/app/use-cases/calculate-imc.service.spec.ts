import { CalculateImcService } from './calculate-imc.service';

describe('CalcuateImc', () => {
  it('should be able to calculate an imc - meagerness', async () => {
    const calculateImcService = new CalculateImcService();

    const registeredPhysicalTest = await calculateImcService.execute({
      height: 1,
      weight: 1,
    });

    expect(registeredPhysicalTest.value).toEqual(1);
    expect(registeredPhysicalTest.status).toEqual('meagerness');
  });

  it('should be able to calculate an imc - normal', async () => {
    const calculateImcService = new CalculateImcService();

    const registeredPhysicalTest = await calculateImcService.execute({
      height: 1,
      weight: 18.5,
    });

    expect(registeredPhysicalTest.value).toEqual(18.5);
    expect(registeredPhysicalTest.status).toEqual('normal');
  });

  it('should be able to calculate an imc - overweight', async () => {
    const calculateImcService = new CalculateImcService();

    const registeredPhysicalTest = await calculateImcService.execute({
      height: 1,
      weight: 25,
    });

    expect(registeredPhysicalTest.value).toEqual(25);
    expect(registeredPhysicalTest.status).toEqual('overweight');
  });

  it('should be able to calculate an imc - obesity', async () => {
    const calculateImcService = new CalculateImcService();

    const registeredPhysicalTest = await calculateImcService.execute({
      height: 1,
      weight: 30,
    });

    expect(registeredPhysicalTest.value).toEqual(30);
    expect(registeredPhysicalTest.status).toEqual('obesity');
  });

  it('should be able to calculate an imc - severe obesity', async () => {
    const calculateImcService = new CalculateImcService();

    const registeredPhysicalTest = await calculateImcService.execute({
      height: 1,
      weight: 40,
    });

    expect(registeredPhysicalTest.value).toEqual(40);
    expect(registeredPhysicalTest.status).toEqual('severe obesity');
  });
});
