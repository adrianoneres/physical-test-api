import { ImcResult, PhysicalTestResult } from '@app/types/physical-test-result';
import { PhysicalTestType } from '@app/types/physical-test-type';

interface CalculatePhysicalTestResultProps {
  type: PhysicalTestType;
  age: number;
  gender: 'M' | 'F';
  value: number;
}

type PhysicalTestParameter = [number, number, number, number];

export const calculateLower = (first: number, second: number) => {
  return Math.min(first, second);
};

export const calculateHigher = (first: number, second: number) => {
  return Math.max(first, second);
};

export const calculateImcResult = (imc: number): ImcResult => {
  if (imc < 18.5) {
    return ImcResult.Meagerness;
  } else if (imc >= 18.5 && imc < 25) {
    return ImcResult.Normal;
  } else if (imc >= 25 && imc < 30) {
    return ImcResult.Overweight;
  } else if (imc >= 30 && imc < 40) {
    return ImcResult.Obesity;
  }

  return ImcResult.SevereObesity;
};

export const calculatePhysicalTestResult = ({
  type,
  age,
  gender,
  value,
}: CalculatePhysicalTestResultProps): PhysicalTestResult => {
  const parameters = getPhysicalTestParameters(type, age, gender);

  const lowerBetter =
    type === PhysicalTestType.Agility || type === PhysicalTestType.Speed;

  if (lowerBetter) {
    if (value <= parameters[0]) return PhysicalTestResult.Excellent;
    if (value <= parameters[1]) return PhysicalTestResult.VeryGood;
    if (value <= parameters[2]) return PhysicalTestResult.Good;
    if (value <= parameters[3]) return PhysicalTestResult.Moderate;
    return PhysicalTestResult.Weak;
  }

  if (value <= parameters[0]) return PhysicalTestResult.Weak;
  if (value <= parameters[1]) return PhysicalTestResult.Moderate;
  if (value <= parameters[2]) return PhysicalTestResult.Good;
  if (value <= parameters[3]) return PhysicalTestResult.VeryGood;
  return PhysicalTestResult.Excellent;
};

const getPhysicalTestParameters = (
  type: PhysicalTestType,
  age: number,
  gender: 'M' | 'F',
): number[] => {
  const isMale = gender === 'M';

  switch (type) {
    case PhysicalTestType.Agility:
      return isMale
        ? getAgilityMaleParameters(age)
        : getAgilityFemaleParameters(age);
    case PhysicalTestType.Flexibility:
      return isMale
        ? getFlexibilityMaleParameters(age)
        : getFlexibilityFemaleParameters(age);
    case PhysicalTestType.GeneralResistance:
      return isMale
        ? getGeneralResistanceMaleParameters(age)
        : getGeneralResistanceFemaleParameters(age);
    case PhysicalTestType.LowerLimbStrength:
      return isMale
        ? getLowerLimbStrengthMaleParameters(age)
        : getLowerLimbStrengthFemaleParameters(age);
    case PhysicalTestType.MuscularEndurance:
      return isMale
        ? getMuscularEnduranceMaleParameters(age)
        : getMuscularEnduranceFemaleParameters(age);
    case PhysicalTestType.Speed:
      return isMale
        ? getSpeedMaleParameters(age)
        : getSpeedFemaleParameters(age);
    case PhysicalTestType.StrengthResistance:
      return isMale
        ? getStrengthResistanceMaleParameters(age)
        : getStrengthResistanceFemaleParameters(age);
    case PhysicalTestType.UpperLimbStrength:
      return isMale
        ? getUpperLimbStrengthMaleParameters(age)
        : getUpperLimbStrengthFemaleParameters(age);
    default:
      return [];
  }
};

const getAgilityMaleParameters = (age: number): PhysicalTestParameter => {
  if (age <= 6) return [6.19, 7.1, 7.6, 8.07];
  if (age <= 7) return [6, 6.9, 7.39, 7.85];
  if (age <= 8) return [5.84, 6.71, 7.2, 7.65];
  if (age <= 9) return [5.68, 6.43, 7, 7.45];
  if (age <= 10) return [5.53, 6.35, 6.81, 7.25];
  if (age <= 11) return [5.36, 6.15, 6.6, 7.02];
  if (age <= 12) return [5.21, 5.98, 6.41, 6.82];
  if (age <= 13) return [5.07, 5.8, 6.22, 6.62];
  if (age <= 14) return [4.92, 5.62, 6.03, 6.42];
  if (age <= 15) return [4.75, 5.42, 5.81, 6.19];
  if (age <= 16) return [4.61, 5.24, 5.62, 5.99];

  return [4.46, 5.07, 5.43, 5.79];
};

const getAgilityFemaleParameters = (age: number): PhysicalTestParameter => {
  if (age <= 6) return [6.66, 7.67, 8.26, 8.85];
  if (age <= 7) return [6.31, 7.35, 7.93, 8.47];
  if (age <= 8) return [6.08, 7.09, 7.64, 8.15];
  if (age <= 9) return [5.98, 6.87, 7.37, 7.85];
  if (age <= 10) return [5.8, 6.66, 7.14, 7.6];
  if (age <= 11) return [5.66, 6.49, 6.95, 7.39];
  if (age <= 12) return [5.6, 6.37, 6.82, 7.27];
  if (age <= 13) return [5.46, 6.25, 6.7, 7.15];
  if (age <= 14) return [5.31, 6.11, 6.58, 7.05];
  if (age <= 15) return [5.2, 6, 6.48, 6.97];
  if (age <= 16) return [5.11, 5.92, 6.42, 6.92];

  return [5.01, 5.84, 6.36, 6.88];
};

const getFlexibilityMaleParameters = (age: number): PhysicalTestParameter => {
  if (age <= 6) return [34.2, 41.2, 50.3, 73.9];
  if (age === 7) return [34.2, 41.2, 50.3, 73.9];
  if (age === 8) return [34.2, 41.2, 50.3, 73.9];
  if (age === 9) return [34.2, 41.2, 50.3, 73.9];
  if (age === 10) return [34.2, 41.2, 50.3, 73.9];
  if (age === 11) return [34.2, 41.2, 50.3, 73.9];
  if (age === 12) return [34.2, 41.2, 50.3, 73.9];
  if (age === 13) return [34.2, 41.2, 50.3, 73.9];
  if (age === 14) return [34.2, 41.2, 50.3, 73.9];
  if (age === 15) return [34.2, 41.2, 50.3, 73.9];
  if (age === 16) return [34.2, 41.2, 50.3, 73.9];

  return [28.6, 36.8, 47.9, 76.1];
};

const getFlexibilityFemaleParameters = (age: number): PhysicalTestParameter => {
  if (age <= 6) return [36.9, 43.8, 52.5, 73.4];
  if (age <= 7) return [35.2, 41.8, 49.9, 69.1];
  if (age <= 8) return [33.7, 40.0, 47.8, 65.7];
  if (age <= 9) return [32.3, 38.6, 46.2, 63.6];
  if (age <= 10) return [31.2, 37.5, 45.3, 62.6];
  if (age <= 11) return [30.5, 36.7, 44.2, 61.0];
  if (age <= 12) return [30.3, 36.3, 43.6, 60.1];
  if (age <= 13) return [30.2, 36.6, 44.5, 62.9];
  if (age <= 14) return [30.0, 37.2, 46.5, 69.5];
  if (age <= 15) return [29.5, 37.8, 48.8, 77.1];
  if (age <= 16) return [29.1, 37.8, 49.5, 80.1];

  return [28.8, 37.4, 48.9, 79.0];
};

const getGeneralResistanceMaleParameters = (
  age: number,
): PhysicalTestParameter => {
  if (age <= 6) return [729, 826, 956, 1316];
  if (age === 7) return [751, 848, 975, 1302];
  if (age === 8) return [773, 870, 995, 1300];
  if (age === 9) return [796, 894, 1018, 1309];
  if (age === 10) return [816, 916, 1040, 1322];
  if (age === 11) return [836, 938, 1062, 1338];
  if (age === 12) return [859, 964, 1090, 1366];
  if (age === 13) return [894, 1004, 1136, 1421];
  if (age === 14) return [938, 1057, 1197, 1498];
  if (age === 15) return [987, 1112, 1262, 1584];
  if (age === 16) return [1014, 1148, 1306, 1643];

  return [1037, 1176, 1341, 1691];
};

const getGeneralResistanceFemaleParameters = (
  age: number,
): PhysicalTestParameter => {
  if (age <= 6) return [671, 767, 900, 1276];
  if (age <= 7) return [690, 779, 891, 1158];
  if (age <= 8) return [706, 791, 895, 1131];
  if (age <= 9) return [719, 805, 910, 1148];
  if (age <= 10) return [728, 818, 931, 1199];
  if (age <= 11) return [735, 831, 953, 1250];
  if (age <= 12) return [742, 835, 947, 1191];
  if (age <= 13) return [748, 839, 947, 1178];
  if (age <= 14) return [750, 847, 969, 1256];
  if (age <= 15) return [747, 858, 1005, 1390];
  if (age <= 16) return [745, 865, 1021, 1401];

  return [743, 870, 1027, 1389];
};

const getLowerLimbStrengthMaleParameters = (
  age: number,
): PhysicalTestParameter => {
  if (age <= 6) return [100, 111.5, 125.6, 157.9];
  if (age <= 7) return [107.5, 118.9, 132.9, 164.1];
  if (age <= 8) return [114.6, 126.2, 140.1, 170.6];
  if (age <= 9) return [122.1, 133.9, 147.8, 178];
  if (age <= 10) return [129.5, 141.5, 155.7, 185.8];
  if (age <= 11) return [136.5, 148.8, 163.2, 193.3];
  if (age <= 12) return [143, 155.8, 170.5, 201.1];
  if (age <= 13) return [152.5, 166.1, 181.8, 213.8];
  if (age <= 14) return [163.9, 178.8, 195.7, 229.9];
  if (age <= 15) return [175.2, 191.3, 218.1, 255.2];
  if (age <= 16) return [188.4, 205.8, 225, 262.5];

  return [188.4, 205.8, 225, 262.5];
};

const getLowerLimbStrengthFemaleParameters = (
  age: number,
): PhysicalTestParameter => {
  if (age <= 6) return [88.2, 99.2, 112.8, 143.1];
  if (age <= 7) return [96.1, 107.3, 120.8, 151];
  if (age <= 8) return [103.4, 114.6, 128.3, 158.4];
  if (age <= 9) return [110.7, 122.1, 135.9, 166.2];
  if (age <= 10) return [117.6, 129.2, 143.3, 174.0];
  if (age <= 11) return [123.8, 135.8, 150.3, 181.7];
  if (age <= 12) return [127.9, 140.3, 155.3, 187.6];
  if (age <= 13) return [130.7, 143.7, 159.3, 193];
  if (age <= 14) return [131.9, 145.6, 161.9, 197.3];
  if (age <= 15) return [131.7, 146.2, 163.5, 200.7];
  if (age <= 16) return [131.1, 146.2, 164.3, 203.2];

  return [130.4, 146.2, 165.1, 205.6];
};

const getMuscularEnduranceMaleParameters = (
  age: number,
): PhysicalTestParameter => {
  if (age <= 19) return [17, 22, 28, 29];
  if (age <= 29) return [16, 21, 28, 35];
  if (age <= 39) return [11, 16, 21, 29];
  if (age <= 49) return [9, 12, 16, 21];
  if (age <= 59) return [6, 9, 12, 20];

  return [4, 7, 10, 17];
};

const getMuscularEnduranceFemaleParameters = (
  age: number,
): PhysicalTestParameter => {
  if (age <= 19) return [11, 17, 24, 32];
  if (age <= 29) return [9, 14, 20, 29];
  if (age <= 39) return [7, 12, 19, 26];
  if (age <= 49) return [4, 10, 14, 23];
  if (age <= 59) return [1, 6, 10, 22];

  return [1, 4, 11, 16];
};

const getSpeedMaleParameters = (age: number): PhysicalTestParameter => {
  if (age <= 6) return [3.6, 4.21, 4.57, 4.94];
  if (age <= 7) return [3.51, 4.08, 4.42, 4.75];
  if (age <= 8) return [3.43, 3.97, 4.28, 4.59];
  if (age <= 9) return [3.36, 3.86, 4.15, 4.44];
  if (age <= 10) return [3.29, 3.76, 4.03, 4.3];
  if (age <= 11) return [3.21, 3.65, 3.91, 4.16];
  if (age <= 12) return [3.13, 3.56, 3.8, 4.04];
  if (age <= 13) return [3.03, 3.44, 3.68, 3.91];
  if (age <= 14) return [2.91, 3.3, 3.54, 3.78];
  if (age <= 15) return [2.77, 3.16, 3.39, 3.63];
  if (age <= 16) return [2.67, 3.05, 3.28, 3.53];

  return [2.57, 2.95, 3.19, 3.43];
};

const getSpeedFemaleParameters = (age: number): PhysicalTestParameter => {
  if (age <= 6) return [3.97, 4.56, 4.91, 5.27];
  if (age <= 7) return [3.83, 4.39, 4.72, 5.05];
  if (age <= 8) return [3.71, 4.23, 4.55, 4.86];
  if (age <= 9) return [3.59, 4.09, 4.39, 4.68];
  if (age <= 10) return [3.49, 3.97, 4.25, 4.53];
  if (age <= 11) return [3.49, 3.86, 4.14, 4.41];
  if (age <= 12) return [3.33, 3.79, 4.06, 4.33];
  if (age <= 13) return [3.26, 3.73, 4, 4.28];
  if (age <= 14) return [3.19, 3.68, 3.96, 4.25];
  if (age <= 15) return [3.1, 3.61, 3.91, 4.22];
  if (age <= 16) return [3.02, 3.55, 3.87, 4.21];

  return [2.94, 3.49, 3.83, 4.19];
};

const getStrengthResistanceMaleParameters = (
  age: number,
): PhysicalTestParameter => {
  if (age <= 6) return [17, 22, 27, 38];
  if (age <= 7) return [19, 25, 30, 42];
  if (age <= 8) return [22, 27, 33, 45];
  if (age <= 9) return [24, 29, 35, 47];
  if (age <= 10) return [25, 31, 36, 48];
  if (age <= 11) return [26, 32, 38, 49];
  if (age <= 12) return [28, 34, 39, 51];
  if (age <= 13) return [29, 35, 41, 53];
  if (age <= 14) return [31, 37, 43, 56];
  if (age <= 15) return [33, 39, 46, 59];
  if (age <= 16) return [34, 41, 47, 61];

  return [35, 42, 48, 62];
};

const getStrengthResistanceFemaleParameters = (
  age: number,
): PhysicalTestParameter => {
  if (age <= 6) return [16, 21, 26, 37];
  if (age <= 7) return [18, 23, 29, 40];
  if (age <= 8) return [19, 25, 31, 43];
  if (age <= 9) return [20, 26, 32, 45];
  if (age <= 10) return [21, 27, 33, 45];
  if (age <= 11) return [22, 28, 33, 46];
  if (age <= 12) return [22, 28, 34, 46];
  if (age <= 13) return [23, 29, 35, 48];
  if (age <= 14) return [23, 29, 35, 49];
  if (age <= 15) return [23, 29, 35, 49];
  if (age <= 16) return [22, 29, 35, 49];

  return [22, 29, 35, 48];
};

const getUpperLimbStrengthMaleParameters = (
  age: number,
): PhysicalTestParameter => {
  if (age <= 6) return [136.1, 154.9, 180.3, 248.9];
  if (age <= 7) return [154.8, 175.5, 175.6, 261.3];
  if (age <= 8) return [173.3, 195.8, 223.2, 284.2];
  if (age <= 9) return [192.1, 216.7, 246.9, 315.2];
  if (age <= 10) return [209.1, 235.6, 268.7, 345.3];
  if (age <= 11) return [230, 259.1, 295, 376.7];
  if (age <= 12) return [255.1, 287.6, 327.3, 416.1];
  if (age <= 13) return [295.5, 333.9, 379.9, 479.6];
  if (age <= 14) return [348.4, 393.9, 446.4, 554.4];
  if (age <= 15) return [405, 456.1, 512.9, 623.4];
  if (age <= 16) return [448.2, 501.6, 560, 670.8];

  return [486.7, 541.2, 600.1, 710.3];
};

const getUpperLimbStrengthFemaleParameters = (
  age: number,
): PhysicalTestParameter => {
  if (age <= 6) return [129.6, 146.6, 167.4, 214.8];
  if (age <= 7) return [141.6, 159.9, 182, 230.4];
  if (age <= 8) return [156.5, 176.4, 200.3, 252.1];
  if (age <= 9) return [174, 195.8, 222.1, 279.5];
  if (age <= 10) return [191.8, 215.5, 244.3, 308];
  if (age <= 11) return [214.2, 240.2, 271.8, 341.8];
  if (age <= 12) return [236.7, 265, 298.9, 372.1];
  if (age <= 13) return [261.2, 292.1, 328.2, 403.4];
  if (age <= 14) return [283.4, 316.5, 354.4, 431.7];
  if (age <= 15) return [299.8, 334.1, 373.4, 452.8];
  if (age <= 16) return [309.6, 344.6, 385, 468];

  return [318.3, 353.7, 395.5, 484];
};
