const formatter = (num: number, p: number) => Math.round(num * (Math.pow(10, p)))/Math.pow(10, p);

const decimalPlaces = function(num: number, p: number) {
  let result: string;
  const formatted = formatter(num, p);
  if (formatted.toString().length === 2) {
    result = '0' + formatted.toString();
  } else if (formatted.toString().length === 1) {
    result = '00' + formatted.toString();
  } else {
    result = formatted.toString();
  }
  return result
};

const formatterPrice = (price: number) => {
  const result = decimalPlaces(price % 1000, 2);
  return price !== 0 ? `${Math.floor(price / 1000) || ''}${price >= 1000 ? ' ' : ''}${price >= 1000 ? result : parseInt(result)} ₽` : '0';
}
const formatterDiscount = (discount: number) => {
  const result = decimalPlaces(discount % 1000, 2);
  return discount !== 0 ? `-${discount >= 1000 ? ' ' : ''}${Math.floor(discount / 1000) || ''} ${discount >= 1000 ? result : parseInt(result)} ₽` : '0';
}

export { formatterPrice, formatterDiscount, formatter }