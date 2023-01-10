import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import css from './Modal.module.css';
const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, largeImageURL, tags }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  const handleBackDrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <div className={css.Overlay} onClick={handleBackDrop}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
