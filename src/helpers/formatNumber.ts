const formatNumber = (value: number | string) => {
  return `${Number(value).toFixed(1)}`;
};

export const formatFeet = (value: number | string) => {
  return `${Number(value).toFixed(0)}`;
};

export default formatNumber;
