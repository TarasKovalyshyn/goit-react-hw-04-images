import css from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({image, tags}) => {
  // console.log('searchQuery', searchQuery);
  return (
    <img src={image} alt={tags} className={css.ImageGalleryItem_image} />
  );
};
export default ImageGalleryItem;
