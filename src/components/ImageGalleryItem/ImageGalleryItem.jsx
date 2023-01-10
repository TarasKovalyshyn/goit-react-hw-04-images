import css from './ImageGalleryItem.module.css';
import { useState } from 'react';
import Modal from '../Modal/Modal';

function ImageGalleryItem({ image, tags, largeImageURL }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <>
      <img
        src={image}
        alt={tags}
        className={css.ImageGalleryItem_image}
        onClick={toggleModal}
      />
      {showModal && (
        <Modal largeImageURL={largeImageURL} onClose={toggleModal} />
      )}
    </>
  );
}

export default ImageGalleryItem;
