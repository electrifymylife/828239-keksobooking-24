import {createAd, ADS_COUNT, getType} from './data.js';

const mapCanvas = document.querySelector('#map-canvas');
const similarCardTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarCards = createAd(ADS_COUNT);
const similarCardFragment = document.createDocumentFragment();

similarCards.forEach(({author, offer}) => {

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
  featuresList.forEach((featuresItem) => {
    const isNecessary = offer.features.some(
      (cardFeature) => featuresItem.classList.contains(`popup__feature--${  cardFeature}`),
    );
    if (!isNecessary) {
      featuresItem.remove();
    }
  });
  /* end features */
  /* photos */
  if (offer.photos.length) {
    cardElement.querySelector('.popup__photos').innerHTML = '';
    for (let i=0;i<offer.photos.length;i++){
      const photoImg = '<img src="" class="popup__photo" width="45" height="40" alt="Фотография жилья">';
      cardElement.querySelector('.popup__photos').insertAdjacentHTML('afterbegin', photoImg);
      cardElement.querySelector('.popup__photo').classList.add(`popup__photo__${  i}`);
      cardElement.querySelector('.popup__photo').src = offer.photos[i];
    }
  } else {
    cardElement.querySelector('.popup__photos').style.display = 'none';
  }
  /* end photos */
  similarCardFragment.appendChild(cardElement);
});
mapCanvas.appendChild(similarCardFragment);
