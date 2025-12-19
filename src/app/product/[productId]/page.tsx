"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { recipeType } from "@/types/RecipeTypes/Recipe";
import { fetchRecipeById } from "@/lib/api/fetchRecipeById";
import Hero from "@/components/Product/Hero";
import ProductHighlights from "@/components/Product/ProductHighlights";
import Ingredients from "@/components/Product/Ingredients";
import Instructions from "@/components/Product/Instructions";
import NutritionInfo from "@/components/Product/NutritionInfo";
import Loader from "@/components/Loaders/Loader";

const RecipeDetailPage = () => {
  
  const { productId } = useParams<{ productId: string }>();
  const [recipe, setRecipe] = useState<recipeType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRecipeById(Number(productId) || 1);
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };
    fetchData();
    
  }, [productId]);

  // useEffect(() => {
  //   console.log(checkedIngredients);
  // }, [checkedIngredients]);


  if (!recipe) {
    return (
      <Loader/>
    );
  }
  

  return (
    <div className="pt-30 pb-20 bg-gradient-to-br from-green-50 via-white to-green-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero recipe={recipe}/>

        <ProductHighlights recipe={recipe}/>

        <div className="flex flex-col lg:flex-row gap-8">

          <Ingredients recipe={recipe} />

          <div className="flex-1">

            <Instructions recipe={recipe}/>

            <NutritionInfo recipe={recipe}/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
