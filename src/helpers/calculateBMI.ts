import Measurements from "../static/measurements";
import { Weight } from "../recoil/weight/type";
import { Height } from "../recoil/height/type";
import { inchToCm, poundToKg, kgToPound } from "./convert";

export type BMI = number | undefined;

type Props = {
  measurement: Measurements;
  weight: Weight;
  height: Height;
};

const calculateBMIMetric = (weight: number, height: number) => {
  return weight / ((height * height) / 10000);
};

const getWeightByBMIMetric = (bmi: number, height: number) => {
  return bmi * ((height * height) / 10000);
};

export const calculateBMI = ({ measurement, weight, height }: Props): BMI => {
  let bmi;
  if (weight <= 0) {
    return undefined;
  }

  if (height <= 0) {
    return undefined;
  }

  if (measurement === Measurements.metric) {
    bmi = calculateBMIMetric(weight, height);
  }

  if (measurement === Measurements.standard) {
    bmi = calculateBMIMetric(poundToKg(weight), inchToCm(height));
  }
  return bmi;
};

export const calculateNormalBMI = ({
  measurement,
  height,
}: Pick<Props, "measurement" | "height">): number[] | undefined => {
  const bmi: number[] = [];

  if (height <= 0) {
    return undefined;
  }

  if (measurement === Measurements.metric) {
    bmi[0] = getWeightByBMIMetric(NORMAL_BMI_MIN, height);
    bmi[1] = getWeightByBMIMetric(NORMAL_BMI_MAX, height);
  }

  if (measurement === Measurements.standard) {
    bmi[0] = kgToPound(getWeightByBMIMetric(NORMAL_BMI_MIN, inchToCm(height)));
    bmi[1] = kgToPound(getWeightByBMIMetric(NORMAL_BMI_MAX, inchToCm(height)));
  }

  return bmi;
};

export const NORMAL_BMI_MIN = 18.5;
export const NORMAL_BMI_MAX = 25;
