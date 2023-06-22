import { bigPictureComments, bigPictureCommentsCount, bigPictureLikes, openUserModal, userBigPictureImage } from './big-picture.js';
import { getRandomDescriptions } from './data.js';

const picturesList = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

const usersPictures = getRandomDescriptions();

console.log(usersPictures);

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

        const pictureComment = bigPictureComments.querySelector('.social__comment');
        const pictureCommentImage = pictureComment.querySelector('.social__picture');
        const pictureCommentText = pictureComment.querySelector('.social__text');

        comment.forEach(({ avatar, name, message }) => {
          pictureCommentImage.src = avatar;
          pictureCommentImage.alt = name;
          pictureCommentText.textContent = message;
        });
      }
    });
  });

  picturesList.appendChild(picturesFragment);
};

export {renderMiniatures, picturesList};


// const usersComments = createRandomComment();

// usersComments.forEach(({ avatar, name, message}) => {
//   const commentsList = bigPictureComments.cloneNode(true);
//   const commentItem = commentsList.querySelector('.social__comment');
//   const commentImage = commentItem.querySelector('.social__picture');
//   const commentText = commentItem.querySelector('.social__text');

//   commentImage.src = avatar;
//   commentImage.alt = name;
//   commentText.textContent = message;

//   console.log(commentImage);

//   usersComments.appendChild(commentsList);
// });
