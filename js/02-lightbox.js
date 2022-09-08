import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

console.log(galleryItems);

const paletteContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCardMarkup(galleryItems);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createImageCardMarkup(galleryItems) {
   return galleryItems.map(({ preview, original, description }) => {
       return `

  <a class="gallery__item" href="${preview}">
    <img
      class="gallery__image"
      src="${original}"
      alt="${description}"
    />
  </a>
`;})
    .join('');
};

paletteContainer.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
    
    new SimpleLightbox('.gallery a',{
        captionsData: "alt",
    })
};

