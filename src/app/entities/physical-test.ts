import { BaseEntity } from './base-entity';
import { Gender } from './gender';
import { Name } from './name';
import { PastDate } from './past-date';
import { PositiveDecimal } from './positive-decimal';
import { PositiveInteger } from './positive-integer';

export interface PhysicalTestProps {
  date: PastDate;
  name: Name;
  gender: Gender;
  birthdate: PastDate;
  height: PositiveDecimal;
  weight: PositiveDecimal;
  flexibilityFirstAttempt?: PositiveDecimal;
  flexibilitySecondAttempt?: PositiveDecimal;
  flexibilityEvaluator?: Name;
  wingspan?: PositiveDecimal;
  wingspanEvaluator?: Name;
  strengthResistance?: PositiveInteger;
  strengthResistanceEvaluator?: Name;
  muscularEnduranceFirstAttempt?: PositiveInteger;
  muscularEnduranceSecondAttempt?: PositiveInteger;
  muscularEnduranceEvaluator?: Name;
  lowerLimbStrengthFirstAttempt?: PositiveDecimal;
  lowerLimbStrengthSecondAttempt?: PositiveDecimal;
  lowerLimbStrengthEvaluator?: Name;
  upperLimbStrengthFirstAttempt?: PositiveDecimal;
  upperLimbStrengthSecondAttempt?: PositiveDecimal;
  upperLimbStrengthEvaluator?: Name;
  agilityFirstAttempt?: PositiveDecimal;
  agilitySecondAttempt?: PositiveDecimal;
  agilityEvaluator?: Name;
  generalResistance?: PositiveDecimal;
  generalResistanceEvaluator?: Name;
  speed?: PositiveDecimal;
  speedEvaluator?: Name;
}

export class PhysicalTest extends BaseEntity {
  private props: PhysicalTestProps;

  constructor(props: PhysicalTestProps, id?: string) {
    super(id);
    this.props = props;
  }

  public get date(): PastDate {
    return this.props.date;
  }

  public set date(date: PastDate) {
    this.props.date = date;
  }

  public get name(): Name {
    return this.props.name;
  }

  public set name(name: Name) {
    this.props.name = name;
  }

  public get gender(): Gender {
    return this.props.gender;
  }

  public set gender(gender: Gender) {
    this.props.gender = gender;
  }

  public get birthdate(): PastDate {
    return this.props.birthdate;
  }

  public set birthdate(birthdate: PastDate) {
    this.props.birthdate = birthdate;
  }

  public get height(): PositiveDecimal {
    return this.props.height;
  }

  public set height(height: PositiveDecimal) {
    this.props.height = height;
  }

  public get weight(): PositiveDecimal {
    return this.props.weight;
  }

  public set weight(weight: PositiveDecimal) {
    this.props.weight = weight;
  }

  public get flexibilityFirstAttempt(): PositiveDecimal | undefined {
    return this.props.flexibilityFirstAttempt;
  }

  public set flexibilityFirstAttempt(
    flexibilityFirstAttempt: PositiveDecimal | undefined,
  ) {
    this.props.flexibilityFirstAttempt = flexibilityFirstAttempt;
  }

  public get flexibilitySecondAttempt(): PositiveDecimal | undefined {
    return this.props.flexibilitySecondAttempt;
  }

  public set flexibilitySecondAttempt(
    flexibilitySecondAttempt: PositiveDecimal | undefined,
  ) {
    this.props.flexibilitySecondAttempt = flexibilitySecondAttempt;
  }

  public get flexibilityEvaluator(): Name | undefined {
    return this.props.flexibilityEvaluator;
  }

  public set flexibilityEvaluator(flexibilityEvaluator: Name | undefined) {
    this.props.flexibilityEvaluator = flexibilityEvaluator;
  }

  public get wingspan(): PositiveDecimal | undefined {
    return this.props.wingspan;
  }

  public set wingspan(wingspan: PositiveDecimal | undefined) {
    this.props.wingspan = wingspan;
  }

  public get wingspanEvaluator(): Name | undefined {
    return this.props.wingspanEvaluator;
  }

  public set wingspanEvaluator(wingspanEvaluator: Name | undefined) {
    this.props.wingspanEvaluator = wingspanEvaluator;
  }

  public get strengthResistance(): PositiveInteger | undefined {
    return this.props.strengthResistance;
  }

  public set strengthResistance(
    strengthResistance: PositiveInteger | undefined,
  ) {
    this.props.strengthResistance = strengthResistance;
  }

  public get strengthResistanceEvaluator(): Name | undefined {
    return this.props.strengthResistanceEvaluator;
  }

  public set strengthResistanceEvaluator(
    strengthResistanceEvaluator: Name | undefined,
  ) {
    this.props.strengthResistanceEvaluator = strengthResistanceEvaluator;
  }

  public get muscularEnduranceFirstAttempt(): PositiveInteger | undefined {
    return this.props.muscularEnduranceFirstAttempt;
  }

  public set muscularEnduranceFirstAttempt(
    muscularEnduranceFirstAttempt: PositiveInteger | undefined,
  ) {
    this.props.muscularEnduranceFirstAttempt = muscularEnduranceFirstAttempt;
  }

  public get muscularEnduranceSecondAttempt(): PositiveInteger | undefined {
    return this.props.muscularEnduranceSecondAttempt;
  }

  public set muscularEnduranceSecondAttempt(
    muscularEnduranceSecondAttempt: PositiveInteger | undefined,
  ) {
    this.props.muscularEnduranceSecondAttempt = muscularEnduranceSecondAttempt;
  }

  public get muscularEnduranceEvaluator(): Name | undefined {
    return this.props.muscularEnduranceEvaluator;
  }

  public set muscularEnduranceEvaluator(
    muscularEnduranceEvaluator: Name | undefined,
  ) {
    this.props.muscularEnduranceEvaluator = muscularEnduranceEvaluator;
  }

  public get lowerLimbStrengthFirstAttempt(): PositiveDecimal | undefined {
    return this.props.lowerLimbStrengthFirstAttempt;
  }

  public set lowerLimbStrengthFirstAttempt(
    lowerLimbStrengthFirstAttempt: PositiveDecimal | undefined,
  ) {
    this.props.lowerLimbStrengthFirstAttempt = lowerLimbStrengthFirstAttempt;
  }

  public get lowerLimbStrengthSecondAttempt(): PositiveDecimal | undefined {
    return this.props.lowerLimbStrengthSecondAttempt;
  }

  public set lowerLimbStrengthSecondAttempt(
    lowerLimbStrengthSecondAttempt: PositiveDecimal | undefined,
  ) {
    this.props.lowerLimbStrengthSecondAttempt = lowerLimbStrengthSecondAttempt;
  }

  public get lowerLimbStrengthEvaluator(): Name | undefined {
    return this.props.lowerLimbStrengthEvaluator;
  }

  public set lowerLimbStrengthEvaluator(
    lowerLimbStrengthEvaluator: Name | undefined,
  ) {
    this.props.lowerLimbStrengthEvaluator = lowerLimbStrengthEvaluator;
  }

  public get upperLimbStrengthFirstAttempt(): PositiveDecimal | undefined {
    return this.props.upperLimbStrengthFirstAttempt;
  }

  public set upperLimbStrengthFirstAttempt(
    upperLimbStrengthFirstAttempt: PositiveDecimal | undefined,
  ) {
    this.props.upperLimbStrengthFirstAttempt = upperLimbStrengthFirstAttempt;
  }

  public get upperLimbStrengthSecondAttempt(): PositiveDecimal | undefined {
    return this.props.upperLimbStrengthSecondAttempt;
  }

  public set upperLimbStrengthSecondAttempt(
    upperLimbStrengthSecondAttempt: PositiveDecimal | undefined,
  ) {
    this.props.upperLimbStrengthSecondAttempt = upperLimbStrengthSecondAttempt;
  }

  public get upperLimbStrengthEvaluator(): Name | undefined {
    return this.props.upperLimbStrengthEvaluator;
  }

  public set upperLimbStrengthEvaluator(
    upperLimbStrengthEvaluator: Name | undefined,
  ) {
    this.props.upperLimbStrengthEvaluator = upperLimbStrengthEvaluator;
  }

  public get agilityFirstAttempt(): PositiveDecimal | undefined {
    return this.props.agilityFirstAttempt;
  }

  public set agilityFirstAttempt(
    agilityFirstAttempt: PositiveDecimal | undefined,
  ) {
    this.props.agilityFirstAttempt = agilityFirstAttempt;
  }

  public get agilitySecondAttempt(): PositiveDecimal | undefined {
    return this.props.agilitySecondAttempt;
  }

  public set agilitySecondAttempt(
    agilitySecondAttempt: PositiveDecimal | undefined,
  ) {
    this.props.agilitySecondAttempt = agilitySecondAttempt;
  }

  public get agilityEvaluator(): Name | undefined {
    return this.props.agilityEvaluator;
  }

  public set agilityEvaluator(agilityEvaluator: Name | undefined) {
    this.props.agilityEvaluator = agilityEvaluator;
  }

  public get generalResistance(): PositiveDecimal | undefined {
    return this.props.generalResistance;
  }

  public set generalResistance(generalResistance: PositiveDecimal | undefined) {
    this.props.generalResistance = generalResistance;
  }

  public get generalResistanceEvaluator(): Name | undefined {
    return this.props.generalResistanceEvaluator;
  }

  public set generalResistanceEvaluator(
    generalResistanceEvaluator: Name | undefined,
  ) {
    this.props.generalResistanceEvaluator = generalResistanceEvaluator;
  }

  public get speed(): PositiveDecimal | undefined {
    return this.props.speed;
  }

  public set speed(speed: PositiveDecimal | undefined) {
    this.props.speed = speed;
  }

  public get speedEvaluator(): Name | undefined {
    return this.props.speedEvaluator;
  }

  public set speedEvaluator(speedEvaluator: Name | undefined) {
    this.props.speedEvaluator = speedEvaluator;
  }
}
