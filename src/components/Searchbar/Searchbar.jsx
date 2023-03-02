import React from 'react';
import css from './Searchbar.module.css';
import { BiSearch } from 'react-icons/bi'

export const Searchbar = ({onSubmit}) => (
  <header className={css.searchbar}>
    <form class={css.form}>
      <button type="submit" className={css.button} onSubmit="onSubmit">
      <BiSearch className={css.icon}></BiSearch>
      </button>

      <input
        className={css.input}
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);
