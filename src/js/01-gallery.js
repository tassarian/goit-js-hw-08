// Add imports above this line


import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from "simplelightbox"

import "simplelightbox/dist/simple-lightbox.min.css"


console.log(galleryItems);

const gallery = document.querySelector('.gallery');
gallery.style.listStyle = 'none'

const imgCollection = galleryItems
    .map(({ original, description, preview }) =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>
 `
    )
    .join('');

gallery.insertAdjacentHTML('beforeend', imgCollection)

const lightbox = new SimpleLightbox('.gallery a', {
    captionsPosition: 'bottom',
    captionsDelay: 250,
    captionsData: 'alt',
    scrollZoom: false
    })
