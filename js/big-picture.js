import { isEscapeKey } from './util.js';

const userBigPicture = document.querySelector('.big-picture');
const bigPictureLikes = userBigPicture.querySelector('.likes-count');
const bigPictureCommentsCount = userBigPicture.querySelector('.comments-count');
const bigPictureComments = userBigPicture.querySelector('.social-comments');
const userBigPictureImage = userBigPicture.querySelector('.big-picture__img img');
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

// picturesList.addEventListener('click', () => {
//   openUserModal();
// });

userBigPictureClose.addEventListener('click', () => {
  closeUserModal();
});

export { userBigPicture, userBigPictureImage, openUserModal, bigPictureLikes, bigPictureCommentsCount, bigPictureComments };
