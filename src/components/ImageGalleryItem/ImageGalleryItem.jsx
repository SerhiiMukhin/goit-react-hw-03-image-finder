import React from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = () => (
  <li className={css.item}>
    <img className={css.item_image} src="" alt="" />
  </li>
);
