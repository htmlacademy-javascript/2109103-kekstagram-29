import './miniature-list.js';
import { isEscapeKey } from './util.js';

const userBigPicture = document.querySelector('.big-picture');

const miniatureList = document.querySelector('.pictures');

const userBigPictureClose = userBigPicture.querySelector('.cancel');

function openUserModal() {
  userBigPicture.classList.remove('hidden');

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      userBigPicture.classList.add('hidden');
    }
  });
}

function closeUserModal() {
  userBigPicture.classList.add('hidden');

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      userBigPicture.classList.add('hidden');
    }
  });
}

miniatureList.addEventListener('click', () => {
  openUserModal();
});

userBigPictureClose.addEventListener('click', () => {
  closeUserModal();
});

// document.addEventListener('keydown', (evt) => {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     userBigPicture.classList.add('hidden');
//   }
// });
