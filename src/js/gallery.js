// https://unsplash.com/documentation
import { createGalleryCardTemplate } from './render-functions';
import { fetchPhotosByQuery } from './unsplash-api';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  gallery: document.querySelector('.js-gallery'),
  loader: document.querySelector('.js-loader'),
  loadMoreBtn: document.querySelector('.js-load-more'),
};

let currentPage = 1;
let searchedQuery = '';

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    const { target: searchForm } = event;

    searchedQuery = searchForm.elements.user_query.value;

    refs.loader.classList.add('active');

    refs.gallery.innerHTML = '';

    refs.loadMoreBtn.classList.add('is-hidden');

    currentPage = 1;

    const { data } = await fetchPhotosByQuery(searchedQuery, currentPage);

    if (data.total === 0) {
      alert(`Зображень по ключовому слову ${searchedQuery} не знайдено`);

      refs.gallery.innerHTML = '';

      return;
    }

    if (data.total_pages > 1) {
      refs.loadMoreBtn.classList.remove('is-hidden');
      refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
    }

    const galleryCardsTemplate = data.results.map(pictureInfo => createGalleryCardTemplate(pictureInfo)).join('');

    refs.gallery.innerHTML = galleryCardsTemplate;
  } catch (err) {
    console.log(err);
  }
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);

const onLoadMoreBtnClick = async event => {
  try {
    currentPage++;

    const { data } = await fetchPhotosByQuery(searchedQuery, currentPage);

    const galleryCardsTemplate = data.results.map(pictureInfo => createGalleryCardTemplate(pictureInfo)).join('');

    refs.gallery.insertAdjacentHTML('beforeend', galleryCardsTemplate);

    if (currentPage === data.total_pages) {
      refs.loadMoreBtn.classList.add('is-hidden');
      refs.loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
    }
  } catch (err) {
    console.log(err);
  }
};
