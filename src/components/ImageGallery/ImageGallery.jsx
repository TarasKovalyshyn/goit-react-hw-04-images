import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
// import Modal from 'components/Modal/Modal';

export const ImageGallery = ({ images, onClick, showModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <li key={id} className={css.ImageGalleryItem} >
            <ImageGalleryItem
              image={webformatURL}
              tags={tags}
              onClick={onClick}
              largeImageURL={largeImageURL}
              showModal={showModal}
            >
              
            </ImageGalleryItem>
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
