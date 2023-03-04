import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import css from './ImageGallery.module.css';
import axios from 'axios';
import { Loader } from 'components/Loader/Loader';

const API_KEY = '32648236-214cf230cab87b8c686639ba9';

export default class ImageGallery extends React.Component {
  state = {
    results: [],
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ isLoading: true });
      axios
        .get(
          `https://pixabay.com/api/?q=${this.props.searchQuery}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(response => {
          this.setState({ results: response.data.hits, isLoading: false });
        })
        .catch(error => console.log(error));
    }
  }

  render() {
    return this.state.isLoading ? (
      <Loader></Loader>
    ) : (
      <ul className={css.gallery}>
        {this.state.results.map(({ largeImageURL, tags, id }) => (
          <ImageGalleryItem
            url={largeImageURL}
            title={tags}
            key={id}
          ></ImageGalleryItem>
        ))}
      </ul>
    );
  }
}
