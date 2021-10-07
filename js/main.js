const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
};

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const ADS_COUNT = 10;
const authorAvatar = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const offerType = ['palace', 'flat', 'house', 'bungalo'];
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

const createAd = (quantity) => {
  const ads = [];
  for (let i=0; i < quantity; i++) {
    const ad = {
      author: {
        avatar: 'img/avatars/user' + authorAvatar[i] + '.png',
      },
      offer: {
        title: 'Объявление',
        address: getRandomPositiveFloat(35.65000, 35.70000, 5) + ', ' + getRandomPositiveFloat(139.70000, 139.80000, 5),
        price: getRandomPositiveInteger(1000, 10000),
        type: getRandomArrayElement(offerType),
        rooms: getRandomPositiveInteger(1, 10),
        guests: getRandomPositiveInteger(1, 100),
        checkin: getRandomArrayElement(checkin),
        checkout: getRandomArrayElement(checkout),
        features: features.slice(0, getRandomPositiveInteger(0, features.length - 1)),
        description: 'Описание помещения',
        photos: getRandomArrayElement(photos),
      },
    };
    ads[i] = ad;
  }
  return ads;
};

createAd(ADS_COUNT);
