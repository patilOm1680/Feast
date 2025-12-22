
import axios from 'axios';

export const fetchData = async () => {
  const url=`${process.env.NEXT_PUBLIC_RECIPIES}`
  const response = await axios.get(url);
  return response.data.recipes;
};
