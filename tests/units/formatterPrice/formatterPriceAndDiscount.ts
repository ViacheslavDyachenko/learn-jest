const formatterPrice = (price: number) => {
  const decimalPlaces = function(num: number, p: number) {
    const formated = Math.round(num * (Math.pow(10, p)))/Math.pow(10, p);
    let result: string;
    if (formated.toString().length === 2) {
      result = '0' + formated.toString();
    } else if (formated.toString().length === 1) {
      result = '00' + formated.toString();
    } else {
      result = formated.toString();
    }
    return result
  };
  const result = decimalPlaces(price % 1000, 2);
  return price !== 0 ? `${Math.floor(price / 1000) || ''} ${price >= 1000 ? result : parseInt(result)} ₽` : '0';
}
const formatterDiscount = (discount: number) => {
  const decimalPlaces = function(num: number, p: number) {
    const formated = Math.round(num * (Math.pow(10, p)))/Math.pow(10, p);
    let result: string;
    if (formated.toString().length === 2) {
      result = '0' + formated.toString();
    } else if (formated.toString().length === 1) {
      result = '00' + formated.toString();
    } else {
      result = formated.toString();
    }
    return result
  };
  const result = decimalPlaces(discount % 1000, 2);
  return discount !== 0 ? `-${discount >= 1000 ? ' ' : ''}${Math.floor(discount / 1000) || ''} ${discount >= 1000 ? result : parseInt(result)} ₽` : '0';
}

module.exports = { formatterPrice, formatterDiscount }