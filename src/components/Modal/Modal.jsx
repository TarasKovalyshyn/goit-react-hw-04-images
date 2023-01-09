import { createPortal } from 'react-dom';
// import React, { Component } from 'react';
import { useEffect } from 'react';
import css from './Modal.module.css';
const modalRoot = document.querySelector('#modal-root');

// class Modal extends Component {
//   componentDidMount() {
// window.addEventListener('keydown', this.handleKeyDown);
//   }
//   componentWillUnmount() {
// window.removeEventListener('keydown', this.handleKeyDown);
//   }
// handleKeyDown = e => {
//   if (e.code === 'Escape') {
//     this.props.onClose();
//   }
// };
// handleBackDrop = e => {
//   if (e.currentTarget === e.target) {
//     this.props.onClose();
//   }
// };

//   render() {
//     const { tags, largeImageURL } = this.props;
//     return createPortal(
//       <div className={css.Overlay} onClick={this.handleBackDrop}>
//         <div className={css.Modal}>
//           <img src={largeImageURL} alt={tags} />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }

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
