import css from './Modal.module.css';
const Modal = ({tags, largeImageURL}) => {
  return (
    <div className={css.Overlay}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};
export default Modal;
