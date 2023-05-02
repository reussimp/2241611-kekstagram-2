import {descriptionPhoto} from './data.js';

//генерируем числа в диапазоне
const getRandomNumber = (from, to) => {
  if (from < 0 || to < 0) {
    return NaN;
  }
  if (Number.isInteger(from) && Number.isInteger(to)) {
    if (from < to) {
      return Math.floor(Math.random() * (to - from + 1)) + from;
    } else {
      return NaN;
    }
  } else {
    return NaN;
  }
};

//Создание индекса массива описаний фотографий
const getArrayElement = () => getRandomNumber(0, descriptionPhoto.length - 1);

export {getArrayElement, getRandomNumber};