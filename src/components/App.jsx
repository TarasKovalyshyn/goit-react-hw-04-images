import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loade';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { ToastContainer, toast } from 'react-toastify';
import { fetchImages } from '../api';
import { useState, useEffect } from 'react';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState('');

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    async function test() {
      try {
        setLoading(true);
        const { responseImages, totalPages } = await fetchImages(
          searchQuery,
          page
        );

        if (responseImages.length === 0) {
          toast.warn('Didn`t find anything, please change search query');
        }

        setImages(prevState => [...prevState, ...responseImages]);
        setTotalPages(totalPages);
      } catch (error) {
        toast.error('we have a problem');
      } finally {
        setLoading(false);
      }
    }
    test();
  }, [searchQuery, page]);

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const incrementPage = () => setPage(prevState => prevState + 1);

  return (
    <div
      style={{
        display: `grid`,
        gridTemplateColumns: `1fr`,
        gridGap: `16px`,
        paddingBottom: `24px`,
      }}
    >
      <Searchbar onSubmit={handleFormSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {loading && <Loader />}
      {images.length !== 0 && totalPages !== page && !loading && (
        <Button onClick={incrementPage} />
      )}
      <ToastContainer autoClose={3000} />
    </div>
  );
};
