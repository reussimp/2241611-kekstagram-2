function getRandomInt (from, to) {
  let fromTemp = from;
  let toFrom = to;
  if (from < 0 || to < 0) {
    throw new RangeError ('Числа в диапазоне должны быть положительными');
  }

  if (typeof from === 'number' || typeof to === 'string') {
    if (from === to) {
      return from;
    }
    if (from > to) {
      fromTemp = to;
      toFrom = from;
    }
    return Math.round(Math.random() * (toFrom - fromTemp) + fromTemp);
  }
}

export {getRandomInt};