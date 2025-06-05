import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

const refs = {
  loader: document.querySelector('.js-loader'),
};

axios.interceptors.response.use(
  function (response) {
    refs.loader.classList.remove('active');

    return response;
  },
  function (error) {
    refs.loader.classList.remove('active');

    return Promise.reject(error);
  }
);

export const fetchPhotosByQuery = (searchedQuery, currentPage) => {
  const requestParams = {
    query: searchedQuery,
    page: currentPage,
    per_page: 8,
    color: 'black_and_white',
    orientation: 'portrait',
    client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
  };

  return axios.get(`/search/photos`, { params: requestParams });
};
