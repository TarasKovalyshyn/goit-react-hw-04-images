import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loade';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { ToastContainer, toast } from 'react-toastify';
import { fetchImages } from './api';


export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: '',
    loading: false,
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.setState({ loading: true });

      try {
        const response = await fetchImages(searchQuery, page);

        if (response.length === 0) {
          toast.warn('Didn`t find anything, please change search query');
        }
        this.setState(prevState => {
          return { images: [...prevState.images, ...response], loading: false };
        });
      } catch (error) {
        toast.error('we have a problem');
      }
    }
  }

  handleFormSubmit = async searchQuery => {
    this.setState({ searchQuery, images: [], page: 1 });
    // this.setState({ searchQuery });
    // this.setState({ images: [] });
    // this.setState({ page: 1 });
  };

  incrementPage = () =>
    this.setState(prevState => ({ page: prevState.page + 1 }));

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  render() {
    const { loading, images } = this.state;
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
        {loading && <Loader />}
        {images && <ImageGallery images={images} />}
        {images.length !== 0 && <Button onClick={this.incrementPage} />}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
