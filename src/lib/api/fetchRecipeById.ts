
import axios from 'axios';

export const fetchRecipeById = async (productId:number) => {
  const response = await fetch(`https://dummyjson.com/recipes/${productId}`);
  const data = await response.json();
  return data;
};
