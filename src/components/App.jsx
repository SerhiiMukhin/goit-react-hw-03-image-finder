import React from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';

export default class App extends React.Component {
  state = {
    searchQuery: '',
  };

  getSearchQuery = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <div>
        <Searchbar getSearchQuery={this.getSearchQuery}></Searchbar>
        <ImageGallery searchQuery={this.state.searchQuery}></ImageGallery>
      </div>
    );
  }
}
