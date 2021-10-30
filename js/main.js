import {createAd, ADS_COUNT} from './data.js';
import {createCards} from './card.js';
import {activateForm} from './form.js';

activateForm();
createCards(createAd(ADS_COUNT));
