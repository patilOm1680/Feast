import React, { useState } from "react";
import { Card, CardContent, Button } from "@mui/material";
import { ShoppingCart, CheckCircle } from "@mui/icons-material";
import { recipeType } from "@/types/RecipeTypes/Recipe";
import { useAppDispatch } from "@/lib/store/store";
import { add } from "@/lib/store/features/cartSlice";

const Ingredients = ({ recipe }: { recipe: recipeType }) => {
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);
  const toggleIngredient = (ingredient: string) => {
    setCheckedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  const dispatch = useAppDispatch();
  const addToCart = () => {
    dispatch(add(checkedIngredients));
  };
  return (
    <>
      <div className="w-full lg:w-96 lg:sticky lg:top-24 lg:self-start">
        <Card className="shadow-xl border-none  bg-[#449C6D]  overflow-hidden">
          <div className="bg-[#449C6D] p-6 rounded-t-3xl">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-black text-white flex items-center gap-2">
                <CheckCircle /> Ingredients
              </h3>
              {/* <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl p-1">
                    <IconButton
                      size="small"
                      onClick={() => setServings(Math.max(1, servings - 1))}
                      sx={{
                        color: "white",
                        "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                      }}
                    >
                      <Remove fontSize="small" />
                    </IconButton>
                    <span className="px-3 text-lg font-black text-white min-w-8 text-center">
                      {servings}
                    </span>
                    <IconButton
                      size="small"
                      onClick={() => setServings(servings + 1)}
                      sx={{
                        color: "white",
                        "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                      }}
                    >
                      <Add fontSize="small" />
                    </IconButton>
                  </div> */}
            </div>
          </div>

          <CardContent className="p-6">
            <div className="flex flex-col gap-2">
              {recipe.ingredients?.map((ingredient, index) => (
                <label
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl hover:bg-green-50 cursor-pointer transition-all duration-200 group border-2 border-transparent hover:border-green-200"
                >
                  <input
                    type="checkbox"
                    checked={checkedIngredients.includes(ingredient)}
                    onChange={() => toggleIngredient(ingredient)}
                    className="w-5 h-5 mt-0.5 accent-green-600 cursor-pointer rounded"
                  />
                  <span
                    className={`text-sm font-medium leading-relaxed transition-all ${
                      checkedIngredients.includes(ingredient)
                        ? "line-through text-gray-400"
                        : "text-gray-800 group-hover:text-green-700"
                    }`}
                  >
                    {ingredient}
                  </span>
                </label>
              ))}
            </div>

            <Button
              variant="contained"
              startIcon={<ShoppingCart />}
              fullWidth
              sx={{
                mt: 4,
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                color: "white",
                fontWeight: 700,
                py: 1.8,
                borderRadius: "12px",
                textTransform: "none",
                fontSize: "15px",
                boxShadow: "0 4px 15px rgba(16, 185, 129, 0.3)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #059669 0%, #047857 100%)",
                  boxShadow: "0 6px 20px rgba(16, 185, 129, 0.4)",
                },
              }}
              onClick={addToCart}
            >
              Add to Shopping List
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Ingredients;
