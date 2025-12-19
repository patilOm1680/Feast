
import axios from 'axios';
import { fetchData } from './fetchData';
import { recipeArr } from '@/types/RecipeTypes/Recipe';

export const categoryData = async (category:string) => {
  const recipes:recipeArr=await fetchData();
  const categoryData=recipes.filter((obj)=>{
    if(!obj.mealType) return false;
    for (const cat of obj.mealType) {
        if(cat.toLowerCase()===category) return true;
    }
    return false;
  })
  return categoryData;
};
