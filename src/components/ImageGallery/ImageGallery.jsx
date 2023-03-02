import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import React from 'react'
import css from './ImageGallery.module.css'

export const ImageGallery = () => (
<ul className={css.gallery}>
    <ImageGalleryItem></ImageGalleryItem>
{/* <!-- Набір <li> із зображеннями --> */}
</ul>
)
