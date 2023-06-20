import './miniature-list.js';
import { isEscapeKey } from './util.js';

const userBigPicture = document.querySelector('.big-picture');

const userBigPictureImage = userBigPicture.querySelector('.big-picture__img');

const miniatureList = document.querySelector('.pictures');

const userBigPictureClose = userBigPicture.querySelector('.cancel');

const onDocumentKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    userBigPicture.classList.add('hidden');
  }
};

function openUserModal() {
  userBigPicture.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeyDown);
}

function closeUserModal() {
  userBigPicture.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeyDown);
}

miniatureList.addEventListener('click', (evt) => {
  if (evt.target.matches('.picture')) {
    const miniatureUrl = evt.target.src;
    userBigPictureImage.src = miniatureUrl;
  }

  openUserModal();
});

userBigPictureClose.addEventListener('click', () => {
  closeUserModal();
});

export {userBigPicture};
