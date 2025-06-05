// https://jsonplaceholder.typicode.com/
import { fetchPosts } from './jsonplaceholder-api';
import { createPostCardTemplate } from './render-functions';

const refs = {
  postsList: document.querySelector('.js-posts'),
  loadMoreBtn: document.querySelector('.js-load-more'),
};

let currentPage = 1;

const renderPosts = async () => {
  try {
    const { data } = await fetchPosts(currentPage);

    const postsCardsTemplate = data.map(post => createPostCardTemplate(post)).join('');

    refs.postsList.innerHTML = postsCardsTemplate;

    refs.loadMoreBtn.classList.remove('is-hidden');

    refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
  } catch (err) {
    console.log(err);
  }
};

renderPosts();

const onLoadMoreBtnClick = async event => {
  try {
    currentPage++;

    const { data } = await fetchPosts(currentPage);

    if (data.length === 0) {
      refs.loadMoreBtn.classList.add('is-hidden');
      refs.loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);

      return;
    }

    const postsCardsTemplate = data.map(post => createPostCardTemplate(post)).join('');

    refs.postsList.insertAdjacentHTML('beforeend', postsCardsTemplate);
  } catch (err) {
    console.log(err);
  }
};
