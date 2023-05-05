import { onPictureClick } from './zoom.js';
const userPhotosTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photoConteiner = document.querySelector('.pictures');
const createPhoto = (photo) => {
  const photoElement = userPhotosTemplate.cloneNode(true);
  const photoImg = photoElement.querySelector('.picture__img');

  photoImg.src = photo.url;
  photoImg.alt = photo.description;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
  photoElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    onPictureClick(photo);
  });

  return photoElement;
};

const renderPhotos = (data) => {
  const fragment = document.createDocumentFragment();
  data.forEach((item) => {
    const element = createPhoto(item);
    fragment.append(element);
  });
  photoConteiner.innerHTML = '';
  photoConteiner.append(fragment);
};

export { renderPhotos };
