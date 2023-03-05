import React from 'react';
import css from './Modal.module.css';

export const Modal = ({ src, alt }) => {
  <div className={css.overlay}>
    <div className={css.modal}>
      <img src={src} alt={alt} />
    </div>
  </div>;
};
