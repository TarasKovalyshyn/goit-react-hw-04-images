import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { ToastContainer } from 'react-toastify';
import { fetchImages } from './api';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
  };
  async componentDidMount() {
    try {
      const response = await fetchImages(this.state.searchQuery);
      this.setState({ images: response });
    } catch (error) {}
  }
  handleFormSubmit = async searchQuery => {
    this.setState({ searchQuery });
    const response = await fetchImages(searchQuery);
    this.setState({ images: response });
  };

  render() {
    return (
      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `1fr`,
          gridGap: `16px`,
          paddingBottom: `24px`,
        }}
      >
        <Searchbar onSubmit={this.handleFormSubmit} />

        {this.state.images && <ImageGallery images={this.state.images} />}
        <Button />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
