import React from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ url, title, onClick }) => (
  <li className={css.item}>
    <img loading="lazy" className={css.item_image} src={url} alt={title} onClick={onClick} />
  </li>
);
