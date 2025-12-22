import axios from "axios";
import React from "react";
import Card from "./Card";
import { fetchData } from "@/lib/api/fetchData";
import { recipeArr } from "@/types/RecipeTypes/Recipe";

export default async function FoodCards() {
  const data: recipeArr = await fetchData();
  return (
    <>
      <div className="flex items-center flex-wrap mt-8 gap-10">
        {data.map((recipe, index) => {
          if (index >= 0 && index <= 7)
            return <Card key={recipe.id} recipe={recipe} />;
        })}
        <div className="w-full md:-mb-4 mb-0">
          <p className="text-[30px] md:text-[34px] font-bold ps-4 md:ps-0">Recommended Recipes</p>
        </div>
        {data.map((recipe, index) => {
          if (index >= 8 && index <= 15)
            return <Card key={recipe.id} recipe={recipe} />;
        })}
      </div>
    </>
  );
}
