import axios from "axios";
import React from "react";
import Card from "./Card";
import { recipeArr } from "@/types/RecipeTypes/Recipe";

export default async function FoodCards() {
  const response = await fetch("https://dummyjson.com/recipes?limit=100", {
    cache:"force-cache",
  });

  let recipes = await response.json();
  const data: recipeArr = recipes.recipes;
  // console.log(data);
  return (
    <>
      <div className="flex items-center flex-wrap mt-8 gap-10">
        {data.map((recipe, index) => {
          if (index >= 0 && index <= 19)
            return <Card key={recipe.id} recipe={recipe} />;
        })}
      </div>
    </>
  );
}
