export const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const capitalizeFirstLetters = (str: string) =>
  str
    .toLowerCase()
    .split(' ')
    .map(word => capitalizeFirstLetter(word))
    .join(' ');

export const formatCurrency = (
  num: number,
  countryCode: string,
  currency: string,
  fractionDigits: number
) => {
  return num.toLocaleString(countryCode, {
    style: 'currency',
    currency,
    minimumFractionDigits: fractionDigits,
  });
};
