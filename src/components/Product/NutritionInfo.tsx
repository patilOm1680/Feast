import { recipeType } from "@/types/RecipeTypes/Recipe";
import React from "react";
import { Card, CardContent, Chip } from "@mui/material";

const NutritionInfo = ({ recipe }: { recipe: recipeType }) => {
  return (
    <>
      <Card className="shadow-xl border-none overflow-hidden rounded-t-3xl">
        <div className="bg-[#7551AA] p-6 rounded-t-3xl">
          <h3 className="text-2xl font-black text-white flex items-center gap-2">
            <span className="text-3xl">📊</span> Nutrition & Info
          </h3>
        </div>

        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border-l-4 border-blue-500 shadow-md hover:shadow-lg transition-all">
              <div className="text-xs text-blue-700 uppercase font-bold mb-2 tracking-wider">
                Cuisine
              </div>
              <div className="text-2xl font-black text-blue-900">
                {recipe.cuisine}
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl border-l-4 border-red-500 shadow-md hover:shadow-lg transition-all">
              <div className="text-xs text-red-700 uppercase font-bold mb-2 tracking-wider">
                Calories
              </div>
              <div className="text-2xl font-black text-red-900">
                {recipe.caloriesPerServing} kcal
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border-l-4 border-blue-500 shadow-md hover:shadow-lg transition-all">
              <div className="text-xs text-blue-700 uppercase font-bold mb-2 tracking-wider">
                Meal Type
              </div>
              <div className="text-2xl font-black text-green-900">
                {recipe.mealType?.join(", ")}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t-2 border-gray-200">
            <h4 className="text-sm text-gray-600 uppercase font-bold mb-4 tracking-wider flex items-center gap-2">
              <span className="text-xl">🏷️</span> Related Tags
            </h4>
            <div className="flex flex-wrap gap-3">
              {recipe.tags?.map((tag, index) => (
                <Chip
                  key={index}
                  label={`#${tag}`}
                  sx={{
                    background: "#7551AA",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "13px",
                    px: 1,
                    py: 2.5,
                    borderRadius: "10px",
                    "&:hover": {
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default NutritionInfo;
