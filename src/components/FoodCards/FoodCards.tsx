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
          if (index >= 0 && index <= 19)
            return <Card key={recipe.id} recipe={recipe} />;
        })}
      </div>
    </>
  );
}
