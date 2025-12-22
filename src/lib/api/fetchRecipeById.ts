
import axios from 'axios';

export const fetchRecipeById = async (productId:number) => {
  const url=`${process.env.NEXT_PUBLIC_FETCH_RECIPE_BY_ID}/${productId}`
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
