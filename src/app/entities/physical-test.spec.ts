import { makeInstitution } from '@test/factories/institution-factory';
import { makePhysicalTest } from '@test/factories/physical-test-factory';
import { makeProfessional } from '@test/factories/professional-factory';
import { Gender } from './gender';
import { Name } from './name';
import { PastDate } from './past-date';
import { PositiveDecimal } from './positive-decimal';
import { PositiveInteger } from './positive-integer';

describe('PhysicalTest', () => {
  it('should be able to create a physical test', async () => {
    const physicalTest = await makePhysicalTest();

    expect(physicalTest.date.value).toEqual(new Date(2023, 0, 1));
    expect(physicalTest.name.value).toEqual('John Doe');
    expect(physicalTest.gender.value).toEqual('M');
    expect(physicalTest.birthdate.value).toEqual(new Date(2000, 0, 1));
    expect(physicalTest.height?.value).toEqual(1.85);
    expect(physicalTest.weight?.value).toEqual(85.5);
    expect(physicalTest.flexibilityFirstAttempt?.value).toEqual(0.35);
    expect(physicalTest.flexibilitySecondAttempt?.value).toEqual(0.45);
    expect(physicalTest.wingspan?.value).toEqual(1.85);
    expect(physicalTest.strengthResistance?.value).toEqual(30);
    expect(physicalTest.muscularEnduranceFirstAttempt?.value).toEqual(15);
    expect(physicalTest.muscularEnduranceSecondAttempt?.value).toEqual(17);
    expect(physicalTest.lowerLimbStrengthFirstAttempt?.value).toEqual(1.15);
    expect(physicalTest.lowerLimbStrengthSecondAttempt?.value).toEqual(1.25);
    expect(physicalTest.upperLimbStrengthFirstAttempt?.value).toEqual(1.35);
    expect(physicalTest.upperLimbStrengthSecondAttempt?.value).toEqual(1.45);
    expect(physicalTest.agilityFirstAttempt?.value).toEqual(5.23);
    expect(physicalTest.agilitySecondAttempt?.value).toEqual(5.42);
    expect(physicalTest.generalResistance?.value).toEqual(2.33);
    expect(physicalTest.speed?.value).toEqual(11.23);
  });

  it('should be able set date', async () => {
    const physicalTest = await makePhysicalTest();

    physicalTest.date = new PastDate(new Date(1999, 11, 31));

    expect(physicalTest.date.value).toEqual(new Date(1999, 11, 31));
  });

  it('should be able set institution', async () => {
    const physicalTest = await makePhysicalTest();

    physicalTest.institution = await makeInstitution({
      name: new Name('New Institution'),
    });

    expect(physicalTest.institution.name.value).toEqual('New Institution');
  });

  it('should be able set professional', async () => {
    const physicalTest = await makePhysicalTest();

    physicalTest.professional = await makeProfessional({
      name: new Name('New Professional'),
    });

    expect(physicalTest.professional.name.value).toEqual('New Professional');
  });

  it('should be able set name', async () => {
    const physicalTest = await makePhysicalTest();

    physicalTest.name = new Name('Jane Doe');

    expect(physicalTest.name.value).toEqual('Jane Doe');
  });

  it('should be able set gender', async () => {
    const physicalTest = await makePhysicalTest();

    physicalTest.gender = new Gender('F');

    expect(physicalTest.gender.value).toEqual('F');
  });

  it('should be able set birthdate', async () => {
    const physicalTest = await makePhysicalTest();

    physicalTest.birthdate = new PastDate(new Date(1999, 11, 31));

    expect(physicalTest.birthdate.value).toEqual(new Date(1999, 11, 31));
  });

  it('should be able set height', async () => {
    const physicalTest = await makePhysicalTest();

    physicalTest.height = new PositiveDecimal(0.01);

    expect(physicalTest.height.value).toEqual(0.01);
  });

  it('should be able set weight', async () => {
    const physicalTest = await makePhysicalTest();

    physicalTest.weight = new PositiveDecimal(0.01);

    expect(physicalTest.weight.value).toEqual(0.01);
  });

  it('should be able set flexibility first attempt', async () => {
    const physicalTest = await makePhysicalTest();

    physicalTest.flexibilityFirstAttempt = new PositiveDecimal(0.01);

    expect(physicalTest.flexibilityFirstAttempt.value).toEqual(0.01);
  });

  it('should be able set flexibility second attempt', async () => {
    const physicalTest = await makePhysicalTest();

    physicalTest.flexibilitySecondAttempt = new PositiveDecimal(0.01);

    expect(physicalTest.flexibilitySecondAttempt.value).toEqual(0.01);
  });

  it('should be able set wingspan', async () => {
    const physicalTest = await makePhysicalTest();

    physicalTest.wingspan = new PositiveDecimal(0.01);

    expect(physicalTest.wingspan.value).toEqual(0.01);
  });

  it('should be able set strength resistance', async () => {
    const physicalTest = await makePhysicalTest();

    physicalTest.strengthResistance = new PositiveInteger(1);

    expect(physicalTest.strengthResistance.value).toEqual(1);
  });

  it('should be able set muscular endurance first attempt', async () => {
    const physicalTest = await makePhysicalTest();

    physicalTest.muscularEnduranceFirstAttempt = new PositiveInteger(1);

    expect(physicalTest.muscularEnduranceFirstAttempt.value).toEqual(1);
  });

  it('should be able set muscular endurance second attempt', async () => {
    const physicalTest = await makePhysicalTest();

    physicalTest.muscularEnduranceSecondAttempt = new PositiveInteger(1);

    expect(physicalTest.muscularEnduranceSecondAttempt.value).toEqual(1);
  });

  it('should be able set lower limb strength first attempt', async () => {
    const physicalTest = await makePhysicalTest();

    physicalTest.lowerLimbStrengthFirstAttempt = new PositiveDecimal(0.01);

    expect(physicalTest.lowerLimbStrengthFirstAttempt.value).toEqual(0.01);
  });

  it('should be able set lower limb strength second attempt', async () => {
    const physicalTest = await makePhysicalTest();

    physicalTest.lowerLimbStrengthSecondAttempt = new PositiveDecimal(0.01);

    expect(physicalTest.lowerLimbStrengthSecondAttempt.value).toEqual(0.01);
  });

  it('should be able set upper limb strength first attempt', async () => {
    const physicalTest = await makePhysicalTest();

    physicalTest.upperLimbStrengthFirstAttempt = new PositiveDecimal(0.01);

    expect(physicalTest.upperLimbStrengthFirstAttempt.value).toEqual(0.01);
  });

  it('should be able set upper limb strength second attempt', async () => {
    const physicalTest = await makePhysicalTest();

    physicalTest.upperLimbStrengthSecondAttempt = new PositiveDecimal(0.01);

    expect(physicalTest.upperLimbStrengthSecondAttempt.value).toEqual(0.01);
  });

  it('should be able set agility first attempt', async () => {
    const physicalTest = await makePhysicalTest();

    physicalTest.agilityFirstAttempt = new PositiveDecimal(0.01);

    expect(physicalTest.agilityFirstAttempt.value).toEqual(0.01);
  });

  it('should be able set agility second attempt', async () => {
    const physicalTest = await makePhysicalTest();

    physicalTest.agilitySecondAttempt = new PositiveDecimal(0.01);

    expect(physicalTest.agilitySecondAttempt.value).toEqual(0.01);
  });

  it('should be able set general resistance', async () => {
    const physicalTest = await makePhysicalTest();

    physicalTest.generalResistance = new PositiveDecimal(0.01);

    expect(physicalTest.generalResistance.value).toEqual(0.01);
  });

  it('should be able set speed', async () => {
    const physicalTest = await makePhysicalTest();

    physicalTest.speed = new PositiveDecimal(0.01);

    expect(physicalTest.speed.value).toEqual(0.01);
  });
});
