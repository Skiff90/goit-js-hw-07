import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery')

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) { 
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
      `;
    }).join(''); 
}

// function createGalleryMarkup(galleryItems) { 
//     return galleryItems
//       .reduce((acc, { preview, original, description }) => {
//         return ` ${acc}
//         <a class="gallery__item" href="${original}">
//         <img class="gallery__image" src="${preview}" alt="${description}" />
//       </a>
//         `;
//       }); 
//   }

galleryRef.addEventListener('click', onClickSimpleLightBox)
  
function onClickSimpleLightBox(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
    const fullSizeImage = e.target.parentNode;

  let lightbox = new SimpleLightbox('.gallery a',
    {
      captionsData: 'alt',
      captionDelay: '250ms'
      })
}
