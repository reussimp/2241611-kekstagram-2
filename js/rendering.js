import './data.js';
import { descriptions } from './data.js';

const userPhotosTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photoConteiner = document.querySelector('.pictures');
const userPhotos = descriptions;
const photoListFragment = document.createDocumentFragment();

userPhotos.forEach(({url, likes, comments}) => {
  const photoElement = userPhotosTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoListFragment.append(photoElement);
});

photoConteiner.innerHTML = '';
photoConteiner.append(photoListFragment);