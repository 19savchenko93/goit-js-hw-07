import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const paletteContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCardMarkup(galleryItems);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createImageCardMarkup(galleryItems) {
   return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    })
        .join('');
};

paletteContainer.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const currentIMG = event.target.dataset.source;
  const instance = basicLightbox.create(`
       <img src="${currentIMG}" width="800" height="600">
`)

instance.show()
};
