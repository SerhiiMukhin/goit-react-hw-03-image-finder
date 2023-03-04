import React from 'react';
// import axios from 'axios';
import ImageGallery from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';

export default class App extends React.Component {
  state = {
    searchQuery: '',
  };

  getSearchQuery = searchQuery => {
    this.setState({ searchQuery });
  };

  // async componentDidMount() {
  //   const API_KEY = '32648236-214cf230cab87b8c686639ba9';
  //   const searchQuery = this.state.searchQuery;
  //   const URL = `https://pixabay.com/api/?q=${searchQuery}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  //   this.setState({ isLoading: true });

  //   const response = await axios.get(URL);
  //   this.setState({ results: response.data.hits, isLoading: false });
  // }

  render() {
    return (
      <div>
        <Searchbar getSearchQuery={this.getSearchQuery}></Searchbar>
        {this.state.isLoading ? (
          <Loader></Loader>
        ) : (
          <ImageGallery searchQuery={this.state.searchQuery}></ImageGallery>
        )}
      </div>
    );
  }
}
