import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(({ id, webformatURL, tags }) => {
        return (
          <li key={id} className={css.ImageGalleryItem}>
            <ImageGalleryItem image={webformatURL} tags={tags} />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
