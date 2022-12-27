import css from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';

export const ImageGalleryItem = ({
  image,
  tags,
  onClick,
  largeImageURL,
  showModal,
}) => {
  return (
    <>
      <img
        src={image}
        alt={tags}
        className={css.ImageGalleryItem_image}
        onClick={onClick}
      />
     { showModal && <Modal  largeImageURL={largeImageURL}/>}
      
    </>
  );
};
export default ImageGalleryItem;
