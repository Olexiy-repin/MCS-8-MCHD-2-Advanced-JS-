// https://unsplash.com/documentation
import { createGalleryCardTemplate } from './render-functions';
import { fetchPhotosByQuery } from './unsplash-api';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  gallery: document.querySelector('.js-gallery'),
  loader: document.querySelector('.js-loader'),
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const { target: searchForm } = event;

  const searchedQuery = searchForm.elements.user_query.value;

  refs.loader.classList.add('active');

  refs.gallery.innerHTML = '';

  fetchPhotosByQuery(searchedQuery)
    .finally(() => {
      refs.loader.classList.remove('active');
    })
    .then(data => {
      if (data.total === 0) {
        alert(`Зображень по ключовому слову ${searchedQuery} не знайдено`);

        refs.gallery.innerHTML = '';

        return;
      }

      const galleryCardsTemplate = data.results.map(pictureInfo => createGalleryCardTemplate(pictureInfo)).join('');

      refs.gallery.innerHTML = galleryCardsTemplate;
    })
    .catch(err => {
      console.log(err);
    });
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
