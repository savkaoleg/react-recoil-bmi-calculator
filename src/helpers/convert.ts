// weight
const poundInKg = 2.205;

export const kgToPound = (kg: number) => {
  return kg * poundInKg;
};

export const poundToKg = (pound: number) => {
  return pound / poundInKg;
};

// height
export const inchInFeet = 12;
const inchInCm = 0.393;

export const cmToInch = (cm: number) => {
  return cm * inchInCm;
};

export const inchToCm = (inch: number) => {
  return inch / inchInCm;
};
