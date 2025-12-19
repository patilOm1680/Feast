"use client";
import { recipeType } from "@/types/RecipeTypes/Recipe";
import React, { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import StarIcon from "@mui/icons-material/Star";
import { styled } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "@/lib/store/store";
import { add, remove } from "@/lib/store/features/likeSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CircleIcon from '@mui/icons-material/Circle';

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": { color: "#ff4d6d" },
  "& .MuiRating-iconHover": { color: "#ff1e56" },
});

const Card = ({ recipe }: { recipe: recipeType }) => {
  const dispatch = useAppDispatch();
  const likedItems = useAppSelector((state) => state.likes.items);
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(0);
  const [isVeg,setIsVeg]=useState(true);
  useEffect(() => {
    if(recipe.ingredients)
    for (const ingredient of recipe.ingredients) {
      if(ingredient.toLocaleLowerCase().includes("chicken") || ingredient.toLocaleLowerCase().includes("eggs")){
          setIsVeg(false);
      } 
    }
  }, []);
  useEffect(() => {
    setIsLiked(likedItems.some((i) => i.id === recipe.id) ? 1 : 0);
  }, [likedItems, recipe.id]);

  const handleLikeChange = (
    e: React.SyntheticEvent,
    value: number | null
  ) => {
    e.stopPropagation();
    value === 1 ? dispatch(add(recipe)) : dispatch(remove(recipe));
  };

  return (
    <div
      onClick={() => router.push(`/product/${recipe.id}`)}
      className="w-[385px] md:mx-0 mx-5 bg-white rounded-[28px] shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div className="relative h-64">
        <Image
          src={recipe.image || '/navbar/appLogo.png'}
          alt="card Image"
          fill
          className="object-cover"
          priority
        />

        <span className="absolute top-4 left-4 bg-white text-xs font-semibold px-3 py-1 rounded-full shadow flex items-center gap-1" style={{border:isVeg?"2px solid green":"2px solid red"}}>
          <CircleIcon sx={{fontSize:"16px",color:isVeg?"green":"red"}}/>
          <p style={{color:isVeg?"green":"red"}}>{isVeg?"VEG":"NON-VEG"}</p>
          
        </span>

        <div
          className="absolute -bottom-5 right-4 bg-white h-[55px] w-[55px] rounded-full shadow-lg flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <StyledRating
            value={isLiked}
            max={1}
            icon={<FavoriteIcon fontSize="large" />}
            emptyIcon={<FavoriteBorderIcon fontSize="large" />}
            onChange={handleLikeChange}
          />
        </div>
      </div>

      <div className="pt-6 px-5 pb-6 space-y-5">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-800 leading-snug line-clamp-2">
            {recipe.name}
          </h2>

          <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1.5 rounded-full shadow-sm">
            <StarIcon className="text-yellow-500 text-[18px]" />
            <span className="font-bold text-gray-800">
              {recipe.rating}
            </span>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-2xl w-1/2">
            <AccessTimeIcon className="text-orange-500" />
            <div>
              <p className="text-xs text-gray-500 font-semibold tracking-wide">
                PREP TIME
              </p>
              <p className="font-bold text-gray-800">
                {recipe.prepTimeMinutes} min
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-2xl w-1/2">
            <LocalFireDepartmentIcon className="text-red-500" />
            <div>
              <p className="text-xs text-gray-500 font-semibold tracking-wide">
                CALORIES
              </p>
              <p className="font-bold text-gray-800">
                {recipe.caloriesPerServing}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
