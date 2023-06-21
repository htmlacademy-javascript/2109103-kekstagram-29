import { bigPictureComments, bigPictureCommentsCount, bigPictureLikes, openUserModal, userBigPictureImage } from './big-picture.js';
import { getRandomDescriptions } from './data.js';

const picturesList = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

const usersPictures = getRandomDescriptions();

const renderMiniatures = () => {
  const picturesFragment = document.createDocumentFragment();

  usersPictures.forEach(({ url, description, likes, comment }) => {
    const picturesElement = picturesTemplate.cloneNode(true);
    const pictureImage = picturesElement.querySelector('.picture__img');
    const picturesLikes = picturesElement.querySelector('.picture__likes');
    const pictureComments = picturesElement.querySelector('.picture__comments');

    pictureImage.src = url;
    pictureImage.alt = description;
    picturesLikes.textContent = likes;
    pictureComments.textContent = comment.length;

    picturesList.appendChild(picturesElement);

    picturesList.addEventListener('click', (evt) => {
      openUserModal();

      const miniatureImage = evt.target.closest('.picture__img');

      if (miniatureImage) {
        userBigPictureImage.src = miniatureImage.src;
        bigPictureLikes.textContent = picturesLikes.textContent;
        bigPictureCommentsCount.textContent = pictureComments.textContent;

        const commentItem = bigPictureComments.cloneNode(true);

      }
    });
  });

  picturesList.appendChild(picturesFragment);
};

export {renderMiniatures, picturesList};
