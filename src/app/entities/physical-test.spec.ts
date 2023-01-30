import { makePhysicalTest } from '@test/factories/physical-test-factory';
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
    expect(physicalTest.flexibilityEvaluator?.value).toEqual('Jane Doe');
    expect(physicalTest.wingspan?.value).toEqual(1.85);
    expect(physicalTest.wingspanEvaluator?.value).toEqual('Jane Doe');
    expect(physicalTest.strengthResistance?.value).toEqual(30);
    expect(physicalTest.strengthResistanceEvaluator?.value).toEqual('Jane Doe');
    expect(physicalTest.muscularEnduranceFirstAttempt?.value).toEqual(15);
    expect(physicalTest.muscularEnduranceSecondAttempt?.value).toEqual(17);
    expect(physicalTest.muscularEnduranceEvaluator?.value).toEqual('Jane Doe');
    expect(physicalTest.lowerLimbStrengthFirstAttempt?.value).toEqual(1.15);
    expect(physicalTest.lowerLimbStrengthSecondAttempt?.value).toEqual(1.25);
    expect(physicalTest.lowerLimbStrengthEvaluator?.value).toEqual('Jane Doe');
    expect(physicalTest.upperLimbStrengthFirstAttempt?.value).toEqual(1.35);
    expect(physicalTest.upperLimbStrengthSecondAttempt?.value).toEqual(1.45);
    expect(physicalTest.upperLimbStrengthEvaluator?.value).toEqual('Jane Doe');
    expect(physicalTest.agilityFirstAttempt?.value).toEqual(5.23);
    expect(physicalTest.agilitySecondAttempt?.value).toEqual(5.42);
    expect(physicalTest.agilityEvaluator?.value).toEqual('Jane Doe');
    expect(physicalTest.generalResistance?.value).toEqual(2.33);
    expect(physicalTest.generalResistanceEvaluator?.value).toEqual('Jane Doe');
    expect(physicalTest.speed?.value).toEqual(11.23);
    expect(physicalTest.speedEvaluator?.value).toEqual('Jane Doe');
  });

  it('should be able set date', async () => {
    const user = await makePhysicalTest();

    user.date = new PastDate(new Date(1999, 11, 31));

    expect(user.date.value).toEqual(new Date(1999, 11, 31));
  });

  it('should be able set name', async () => {
    const user = await makePhysicalTest();

    user.name = new Name('Jane Doe');

    expect(user.name.value).toEqual('Jane Doe');
  });

  it('should be able set gender', async () => {
    const user = await makePhysicalTest();

    user.gender = new Gender('F');

    expect(user.gender.value).toEqual('F');
  });

  it('should be able set birthdate', async () => {
    const user = await makePhysicalTest();

    user.birthdate = new PastDate(new Date(1999, 11, 31));

    expect(user.birthdate.value).toEqual(new Date(1999, 11, 31));
  });

  it('should be able set height', async () => {
    const user = await makePhysicalTest();

    user.height = new PositiveDecimal(0.01);

    expect(user.height.value).toEqual(0.01);
  });

  it('should be able set weight', async () => {
    const user = await makePhysicalTest();

    user.weight = new PositiveDecimal(0.01);

    expect(user.weight.value).toEqual(0.01);
  });

  it('should be able set flexibility first attempt', async () => {
    const user = await makePhysicalTest();

    user.flexibilityFirstAttempt = new PositiveDecimal(0.01);

    expect(user.flexibilityFirstAttempt.value).toEqual(0.01);
  });

  it('should be able set flexibility second attempt', async () => {
    const user = await makePhysicalTest();

    user.flexibilitySecondAttempt = new PositiveDecimal(0.01);

    expect(user.flexibilitySecondAttempt.value).toEqual(0.01);
  });

  it('should be able set flexibility evaluator', async () => {
    const user = await makePhysicalTest();

    user.flexibilityEvaluator = new Name('John Doe');

    expect(user.flexibilityEvaluator.value).toEqual('John Doe');
  });

  it('should be able set wingspan', async () => {
    const user = await makePhysicalTest();

    user.wingspan = new PositiveDecimal(0.01);

    expect(user.wingspan.value).toEqual(0.01);
  });

  it('should be able set wingspan evaluator', async () => {
    const user = await makePhysicalTest();

    user.wingspanEvaluator = new Name('John Doe');

    expect(user.wingspanEvaluator.value).toEqual('John Doe');
  });

  it('should be able set strength resistance', async () => {
    const user = await makePhysicalTest();

    user.strengthResistance = new PositiveInteger(1);

    expect(user.strengthResistance.value).toEqual(1);
  });

  it('should be able set strength resistance evaluator', async () => {
    const user = await makePhysicalTest();

    user.strengthResistanceEvaluator = new Name('John Doe');

    expect(user.strengthResistanceEvaluator.value).toEqual('John Doe');
  });

  it('should be able set muscular endurance first attempt', async () => {
    const user = await makePhysicalTest();

    user.muscularEnduranceFirstAttempt = new PositiveInteger(1);

    expect(user.muscularEnduranceFirstAttempt.value).toEqual(1);
  });

  it('should be able set muscular endurance second attempt', async () => {
    const user = await makePhysicalTest();

    user.muscularEnduranceSecondAttempt = new PositiveInteger(1);

    expect(user.muscularEnduranceSecondAttempt.value).toEqual(1);
  });

  it('should be able set muscular endurance evaluator', async () => {
    const user = await makePhysicalTest();

    user.muscularEnduranceEvaluator = new Name('John Doe');

    expect(user.muscularEnduranceEvaluator.value).toEqual('John Doe');
  });

  it('should be able set lower limb strength first attempt', async () => {
    const user = await makePhysicalTest();

    user.lowerLimbStrengthFirstAttempt = new PositiveDecimal(0.01);

    expect(user.lowerLimbStrengthFirstAttempt.value).toEqual(0.01);
  });

  it('should be able set lower limb strength second attempt', async () => {
    const user = await makePhysicalTest();

    user.lowerLimbStrengthSecondAttempt = new PositiveDecimal(0.01);

    expect(user.lowerLimbStrengthSecondAttempt.value).toEqual(0.01);
  });

  it('should be able set lower limb strength evaluator', async () => {
    const user = await makePhysicalTest();

    user.lowerLimbStrengthEvaluator = new Name('John Doe');

    expect(user.lowerLimbStrengthEvaluator.value).toEqual('John Doe');
  });

  it('should be able set upper limb strength first attempt', async () => {
    const user = await makePhysicalTest();

    user.upperLimbStrengthFirstAttempt = new PositiveDecimal(0.01);

    expect(user.upperLimbStrengthFirstAttempt.value).toEqual(0.01);
  });

  it('should be able set upper limb strength second attempt', async () => {
    const user = await makePhysicalTest();

    user.upperLimbStrengthSecondAttempt = new PositiveDecimal(0.01);

    expect(user.upperLimbStrengthSecondAttempt.value).toEqual(0.01);
  });

  it('should be able set upper limb strength evaluator', async () => {
    const user = await makePhysicalTest();

    user.upperLimbStrengthEvaluator = new Name('John Doe');

    expect(user.upperLimbStrengthEvaluator.value).toEqual('John Doe');
  });

  it('should be able set agility first attempt', async () => {
    const user = await makePhysicalTest();

    user.agilityFirstAttempt = new PositiveDecimal(0.01);

    expect(user.agilityFirstAttempt.value).toEqual(0.01);
  });

  it('should be able set agility second attempt', async () => {
    const user = await makePhysicalTest();

    user.agilitySecondAttempt = new PositiveDecimal(0.01);

    expect(user.agilitySecondAttempt.value).toEqual(0.01);
  });

  it('should be able set agility evaluator', async () => {
    const user = await makePhysicalTest();

    user.agilityEvaluator = new Name('John Doe');

    expect(user.agilityEvaluator.value).toEqual('John Doe');
  });

  it('should be able set general resistance', async () => {
    const user = await makePhysicalTest();

    user.generalResistance = new PositiveDecimal(0.01);

    expect(user.generalResistance.value).toEqual(0.01);
  });

  it('should be able set general resistance evaluator', async () => {
    const user = await makePhysicalTest();

    user.generalResistanceEvaluator = new Name('John Doe');

    expect(user.generalResistanceEvaluator.value).toEqual('John Doe');
  });

  it('should be able set speed', async () => {
    const user = await makePhysicalTest();

    user.speed = new PositiveDecimal(0.01);

    expect(user.speed.value).toEqual(0.01);
  });

  it('should be able set speed evaluator', async () => {
    const user = await makePhysicalTest();

    user.speedEvaluator = new Name('John Doe');

    expect(user.speedEvaluator.value).toEqual('John Doe');
  });
});
