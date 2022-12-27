import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '30729549-2bd6081b47c896583f9f8b2cd';

export const fetchImages = async (searchQuery, page) => {
  const params = {
    orientation: 'horizontal',
    per_page: '12',
    image_type: 'photo',
    page: page,
    q: searchQuery,
  };
  const response = await axios.get(`/?key=${API_KEY}&page=${page}`, {
    params,
  });
  console.log(params);
  console.log('response', response.data.hits)
  return response.data.hits;
};
