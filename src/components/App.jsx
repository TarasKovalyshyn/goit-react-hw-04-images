import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loade';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { ToastContainer, toast } from 'react-toastify';
import { fetchImages } from './api';

// export class App extends Component {
//   state = {
//     searchQuery: '',
//     images: [],
//     page: 1,
//     loading: false,
//     totalPages: null,
//   };

//   async componentDidUpdate(_, prevState) {
//     const { searchQuery, page } = this.state;

//     if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
//       this.setState({ loading: true });

//       try {
//         const { responseImages, totalPages } = await fetchImages(
//           searchQuery,
//           page
//         );
//         // console.log(responseImages);
//         // console.log(totalPages);

//         if (responseImages.length === 0) {
//           toast.warn('Didn`t find anything, please change search query');
//         }

//         this.setState(prevState => {
//           return { images: [...prevState.images, ...responseImages] };
//         }, this.setState({ totalPages }));
//       } catch (error) {
//         toast.error('we have a problem');
//       }

//       this.setState({ loading: false });
//     }
//   }

//   handleFormSubmit = async searchQuery => {
//     this.setState({ searchQuery, images: [], page: 1 });
//   };

//   incrementPage = () =>
//     this.setState(prevState => ({ page: prevState.page + 1 }));

//   render() {
//     const { images, loading, page, totalPages } = this.state;
//     return (
//       <div
//         style={{
//           display: `grid`,
//           gridTemplateColumns: `1fr`,
//           gridGap: `16px`,
//           paddingBottom: `24px`,
//         }}
//       >
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         {images.length > 0 && <ImageGallery images={images} />}
//         {loading && <Loader />}
//         {images.length !== 0 && totalPages !== page && !loading && (
//           <Button onClick={this.incrementPage} />
//         )}
//         <ToastContainer autoClose={3000} />
//       </div>
//     );
//   }
// }
import { useState, useEffect } from 'react';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState('');

  useEffect(() => {
    async function test() {
      try {
        setLoading(true);

        const { responseImages, totalPages } = await fetchImages(
          searchQuery,
          page
        );
        console.log(responseImages);
        if (responseImages.length === 0) {
          toast.warn('Didn`t find anything, please change search query');
        }

        setImages(prevState => {
          return [...prevState, ...responseImages];
        }, setTotalPages(totalPages));
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
