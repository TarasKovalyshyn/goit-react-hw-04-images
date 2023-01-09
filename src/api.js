import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const API_KEY = '30729549-2bd6081b47c896583f9f8b2cd';
const PER_PAGE = 12;

export const fetchImages = async (searchQuery, page) => {
  const params = {
    page: page,
    q: searchQuery,
    per_page: PER_PAGE,
    key: API_KEY,
    orientation: 'horizontal',
    image_type: 'photo',
  };
  const response = await axios.get('/', { params });

  const responseImages = normalisedImages(response.data.hits);
  const totalPages = Math.ceil(response.data.totalHits / PER_PAGE);
  return { responseImages, totalPages };
};

const normalisedImages = responseImages =>
  responseImages.map(({ id, webformatURL, largeImageURL, tags }) => ({
    id,
    webformatURL,
    largeImageURL,
    tags,
  }));
