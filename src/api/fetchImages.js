import axios from 'axios';

const API_URL = 'https://api.unsplash.com/search/photos';
const API_KEY = 'ls_uT3-LB_ZhJDaGOtAcC-3zKSpo1lxMXE6vYexLetM';

export const fetchImagesAPI = async (searchQuery, page) => {
  const response = await axios.get(API_URL, {
    params: {
      query: searchQuery,
      page,
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
  });

  return response.data.results;
};
