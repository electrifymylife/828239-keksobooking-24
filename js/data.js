import {getRandomPositiveFloat, getRandomPositiveInteger} from './util.js';

const ADS_COUNT = 10;
const authorAvatar = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const offerType = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createAd = (quantity) => {
  const ads = [];
  // eslint-disable-next-line id-length
  for (let i=0; i < quantity; i++) {
    const lat = getRandomPositiveFloat(35.65000, 35.70000, 5);
    const lng = getRandomPositiveFloat(139.70000, 139.80000, 5);
    ads[i] = {
      author: {
        avatar: `img/avatars/user${authorAvatar[i]}.png`,
      },
      offer: {
        title: 'Объявление',
        address: `${lat}, ${lng}`,
        price: getRandomPositiveInteger(1000, 10000),
        type: getRandomArrayElement(offerType),
        rooms: getRandomPositiveInteger(1, 10),
        guests: getRandomPositiveInteger(1, 100),
        checkin: getRandomArrayElement(checkin),
        checkout: getRandomArrayElement(checkout),
        features: features.slice(0, getRandomPositiveInteger(0, features.length - 1)),
        description: 'Описание помещения',
        photos: photos.slice(0, getRandomPositiveInteger(0, photos.length)),
      },
      location: {
        lat: lat,
        lng: lng,
      },
    };
  }
  return ads;
};

const getType = (type) => {
  switch (type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    case 'hotel':
      return 'Отель';
    default:
      return 'Тип не определен';
  }
};

const addFeature = (featuresAll, featuresUser) => {
  featuresAll.forEach((featuresItem) => {
    const isNecessary = featuresUser.some(
      (cardFeature) => featuresItem.classList.contains(`popup__feature--${  cardFeature}`),
    );
    if (!isNecessary) {
      featuresItem.remove();
    }
  });
};

const addPhoto = (photosAll, photosUser) => {
  if (photosUser.length) {
    photosAll.innerHTML = '';
    for (let i = 0; i < photosUser.length; i++) {
      const photoImg = `<img class="popup__photo" width="45" height="40" alt="Фотография жилья" src=${photosUser[i]}>`;
      photosAll.insertAdjacentHTML('afterbegin', photoImg);
    }
  } else {
    photosAll.style.display = 'none';
  }
};

export {createAd, ADS_COUNT, getType, addFeature, addPhoto};
