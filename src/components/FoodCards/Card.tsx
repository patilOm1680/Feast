"use client"
import { recipeType } from "@/types/RecipeTypes/Recipe";
import React from "react";
import { styled } from '@mui/material/styles';
import { Rating } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const Card = ({ recipe }: { recipe: recipeType }) => {
  return (
    <>
      <div className="flex flex-col w-[385px] bg-white p-3 rounded-2xl shadow gap-3 font-serif">
        <div className="bg-emerald-100 rounded-2xl w-full">
          <img
            src={recipe.image}
            alt=""
            className="object-cover h-60 rounded-2xl w-full"
          />
        </div>
        <div className="flex items-center justify-between px-2 gap-5">
          <h1 className="font-bold text-2xl line-clamp-1">{recipe.name}</h1>
          <div className="flex items-center gap-2">
            <Rating name="customized-10" defaultValue={1} max={1} readOnly/>
            <p className="text-[22px] text-gray-500">{recipe.rating}</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-2 gap-5">
          <h1 className="font-bold text-2xl text-amber-600">
            {recipe.prepTimeMinutes} min
          </h1>
          
          <div className="flex items-center gap-2">
            <span className="font-bold  text-white bg-green-500 px-3 rounded-2xl">
            {recipe.cuisine}
          </span>
            <StyledRating
              name="customized-color"
              defaultValue={1}
              getLabelText={(value: number) =>
                `${value} Heart${value !== 1 ? "s" : ""}`
              }
              max={1}
              precision={1}
              icon={<FavoriteIcon fontSize="inherit" />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
          </div>
        </div>
        {/* <div>
        <p className="text-[20px] line-clamp-3">{obj.description}</p>
      </div> */}
      </div>
    </>
  );
};

export default Card;
