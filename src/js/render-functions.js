export const createGalleryCardTemplate = ({ alt_description: alt, urls: { regular: src } }) => {
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

export const createPostCardTemplate = ({ title, body, id }) => {
  /*
  <li class="posts-item">
    <h2 class="posts-title"></h2>
    <p class="posts-text"></p>
    <p class="posts-id">id: </p>
  </li> 
  */
  return `
    <li class="posts-item">
      <h2 class="posts-title">${title}</h2>
      <p class="posts-text">${body}</p>
      <p class="posts-id">id: ${id}</p>
    </li> 
  `;
};
