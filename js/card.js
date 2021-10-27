import {getType, addFeature, addPhoto} from './data.js';

const createCards = (cards) => {
  const mapCanvas = document.querySelector('#map-canvas');
  const similarCardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const similarCardFragment = document.createDocumentFragment();
  cards.forEach(({author, offer}) => {
    const cardElement = similarCardTemplate.cloneNode(true);
    cardElement.querySelector('.popup__title').textContent = offer.title;
    cardElement.querySelector('.popup__text--address').textContent = offer.address;
    cardElement.querySelector('.popup__text--price').textContent = `${offer.price  }₽/ночь`;
    cardElement.querySelector('.popup__type').textContent = getType(offer.type);
    cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнат(ы) для ${offer.guests} гостей`;
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    cardElement.querySelector('.popup__description').textContent = offer.description;
    cardElement.querySelector('.popup__avatar').src = author.avatar;
    /* features */
    const featuresList = cardElement.querySelectorAll('.popup__feature');
    addFeature(featuresList, offer.features);
    /* photos */
    const photosList = cardElement.querySelector('.popup__photos');
    addPhoto(photosList, offer.photos);
    similarCardFragment.appendChild(cardElement);
  });
  mapCanvas.appendChild(similarCardFragment);
  return cards;
};

export {createCards};


