import {getRandomNumber, getArrayElement} from './utils.js';
const NUMBER_OF_OBJECTS = 25;
const descriptionPhoto = [
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !',
];
const createArrayFixLength = () => {
  const arrayUnicNumbers = [];
  while (arrayUnicNumbers.length < NUMBER_OF_OBJECTS) {
    const randomNumber = getRandomNumber(1, NUMBER_OF_OBJECTS);
    if(arrayUnicNumbers.indexOf(randomNumber) === -1) {
      arrayUnicNumbers.push(randomNumber);
    }
  }
  return arrayUnicNumbers;
};
const createPhoto = function(unicNumberId, unicNumberOfPhoto) {
  return {
    id: unicNumberId,
    url: `photos/${unicNumberOfPhoto}.jpg`,
    description: descriptionPhoto[getArrayElement()],
    likes: getRandomNumber(15, 200),
    comments: getRandomNumber(0, 200)
  };
};

const photos = () => {
  const arrayOfObjects = [];
  const unicId = createArrayFixLength(NUMBER_OF_OBJECTS);
  const unicNumberOfPhoto = createArrayFixLength(NUMBER_OF_OBJECTS);
  for(let i = 0; i < NUMBER_OF_OBJECTS; i++) {
    arrayOfObjects.push(createPhoto(unicId[i],unicNumberOfPhoto[i]));
  }
  return arrayOfObjects;
};
export {photos, descriptionPhoto};
