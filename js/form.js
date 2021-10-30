const form = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');

const disableForm = () => {
  form.classList.add('ad-form--disabled');
  Array.from(form.children).forEach((element) => {
    element.classList.add('disabled');
  });
  mapFiltersForm.classList.add('map__filters--disabled');
  Array.from(mapFiltersForm.children).forEach((element) => {
    element.classList.add('disabled');
  });
};

const activateForm = () => {
  form.classList.remove('ad-form--disabled');
  Array.from(form.children).forEach((element) => {
    element.classList.remove('disabled');
  });
  mapFiltersForm.classList.remove('map__filters--disabled');
  Array.from(mapFiltersForm.children).forEach((element) => {
    element.classList.remove('disabled');
  });
};

export {activateForm, disableForm};
