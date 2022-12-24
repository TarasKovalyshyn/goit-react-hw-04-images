import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '30729549-2bd6081b47c896583f9f8b2cd';

export const fetchImages = async searchQuery => {
  const params = {
    orientation: 'horizontal',
    per_page: '12',
    image_type: 'photo',
    page: 1,
    q: searchQuery,
  };
  const response = await axios.get(`/?key=${API_KEY}`, {
    params,
  });
  console.log(params);
  return response.data.hits;
};
