// https://unsplash.com/documentation

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  gallery: document.querySelector('.js-gallery'),
};

const createGalleryCardTemplate = ({ alt_description: alt, urls: { regular: src } }) => {
  /*
    <li class="gallery-card">
      <img class="gallery-img" src="" alt="" />
    </li>
  */
  return `
    <li class="gallery-card">
      <img class="gallery-img" src="${src}" alt="${alt}" />
    </li>
  `;
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const { target: searchForm } = event;

  const searchedQuery = searchForm.elements.user_query.value;

  fetch(
    `https://api.unsplash.com/search/photos?query=${searchedQuery}&per_page=6&client_id=N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(data => {
      console.log(data);

      const galleryCardsTemplate = data.results.map(pictureInfo => createGalleryCardTemplate(pictureInfo)).join('');

      refs.gallery.innerHTML = galleryCardsTemplate;
    })
    .catch(err => {
      console.log(err);
    });
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
