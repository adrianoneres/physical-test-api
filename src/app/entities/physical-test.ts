import { Replace } from 'src/helpers/Replace';
import { BaseEntity } from './base-entity';
import { Gender } from './gender';
import { Institution } from './institution';
import { Name } from './name';
import { PastDate } from './past-date';
import { PositiveDecimal } from './positive-decimal';
import { PositiveInteger } from './positive-integer';
import { Professional } from './professional';

export interface PhysicalTestProps {
  date: PastDate;
  institution: Institution;
  professional: Professional;
  name: Name;
  gender: Gender;
  birthdate: PastDate;
  height: PositiveDecimal;
  weight: PositiveDecimal;
  flexibilityFirstAttempt?: PositiveDecimal;
  flexibilitySecondAttempt?: PositiveDecimal;
  wingspan?: PositiveDecimal;
  strengthResistance?: PositiveInteger;
  muscularEnduranceFirstAttempt?: PositiveInteger;
  muscularEnduranceSecondAttempt?: PositiveInteger;
  lowerLimbStrengthFirstAttempt?: PositiveDecimal;
  lowerLimbStrengthSecondAttempt?: PositiveDecimal;
  upperLimbStrengthFirstAttempt?: PositiveDecimal;
  upperLimbStrengthSecondAttempt?: PositiveDecimal;
  agilityFirstAttempt?: PositiveDecimal;
  agilitySecondAttempt?: PositiveDecimal;
  generalResistance?: PositiveDecimal;
  speed?: PositiveDecimal;
  isActive: boolean;
}

export class PhysicalTest extends BaseEntity {
  private props: PhysicalTestProps;

  constructor(
    props: Replace<PhysicalTestProps, { isActive?: boolean }>,
    id?: string,
  ) {
    super(id);
    this.props = { ...props, isActive: props.isActive ?? true };
  }

  public get date(): PastDate {
    return this.props.date;
  }

  public set date(date: PastDate) {
    this.props.date = date;
  }

  public get institution(): Institution {
    return this.props.institution;
  }

  public set institution(institution: Institution) {
    this.props.institution = institution;
  }

  public get professional(): Professional {
    return this.props.professional;
  }

  public set professional(professional: Professional) {
    this.props.professional = professional;
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

  public get wingspan(): PositiveDecimal | undefined {
    return this.props.wingspan;
  }

  public set wingspan(wingspan: PositiveDecimal | undefined) {
    this.props.wingspan = wingspan;
  }

  public get strengthResistance(): PositiveInteger | undefined {
    return this.props.strengthResistance;
  }

  public set strengthResistance(
    strengthResistance: PositiveInteger | undefined,
  ) {
    this.props.strengthResistance = strengthResistance;
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

  public get generalResistance(): PositiveDecimal | undefined {
    return this.props.generalResistance;
  }

  public set generalResistance(generalResistance: PositiveDecimal | undefined) {
    this.props.generalResistance = generalResistance;
  }

  public get speed(): PositiveDecimal | undefined {
    return this.props.speed;
  }

  public set speed(speed: PositiveDecimal | undefined) {
    this.props.speed = speed;
  }

  public get isActive(): boolean {
    return this.props.isActive;
  }

  public set isActive(isActive: boolean) {
    this.props.isActive = isActive;
  }
}
