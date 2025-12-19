
import axios from 'axios';

export const fetchData = async () => {
  const response = await axios.get('https://dummyjson.com/recipes?limit=100');
  return response.data.recipes;
};
