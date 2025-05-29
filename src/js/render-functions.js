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
