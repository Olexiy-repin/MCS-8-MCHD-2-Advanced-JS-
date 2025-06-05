import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = currentPage => {
  const requestParams = {
    _page: currentPage,
    _limit: 10,
  };

  return axios.get('/posts', { params: requestParams });
};
