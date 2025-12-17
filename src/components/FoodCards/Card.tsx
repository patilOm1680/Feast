"use client";
import { recipeType } from "@/types/RecipeTypes/Recipe";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAppDispatch, useAppSelector } from "@/lib/store/store";
import { add, remove } from "@/lib/store/features/likeSlice";
import { useRouter } from "next/navigation";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Image from "next/image";


const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const Card = ({ recipe }: { recipe: recipeType }) => {
  const dispatch = useAppDispatch();

  const arr = useAppSelector((state) => state.likes.items);

  const [isLiked, setIsLiked] = useState(0);

  const isPresentInLiked = () => {
    for (let obj of arr) {
      if (obj.id === recipe.id) {
        return true;
      }
    }
    return false;
  };
  useEffect(() => {
    if (isPresentInLiked()) {
      setIsLiked(1);
    } else setIsLiked(0);
  }, [arr]);

  const handleLikeChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => {
    event.stopPropagation();
    if (newValue === 1) {
      dispatch(add(recipe));
    } else {
      dispatch(remove(recipe));
    }
  };

  const router=useRouter();
  const handleCardClick = () => {
    router.push(`/product/${recipe.id}`)
  }
  return (
    <>
      <div className="flex flex-col w-[385px] bg-white p-3 rounded-2xl shadow gap-3 font-serif cursor-pointer" onClick={handleCardClick}>
        <div className="bg-emerald-100 rounded-2xl w-full">
          <Image
            src={recipe.image || "../../assets/navbar/appLogo.png"}
            alt=""
            className="object-cover h-60 rounded-2xl w-full"
            width={300}
            height={250}
          />
        </div>
        <div className="flex items-center justify-between px-2 gap-5">
          <h1 className="font-bold text-2xl line-clamp-1">{recipe.name}</h1>
          <div className="flex items-center gap-2">
            <Rating name="customized-10" defaultValue={1} max={1} readOnly />
            <p className="text-[22px] text-gray-500">{recipe.rating}</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-2 gap-5">
          <h1 className="font-bold text-2xl text-amber-600">
            <AccessTimeIcon sx={{marginRight:"4px",marginBottom:"4px"}}/>
            {recipe.prepTimeMinutes} min
          </h1>

          <div className="flex items-center gap-2">
            <StyledRating
              name="customized-color"
              value={isLiked}
              getLabelText={(value: number) =>
                `${value} Heart${value !== 1 ? "s" : ""}`
              }
              max={1}
              precision={1}
              icon={<FavoriteIcon fontSize="inherit" />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              onClick={(e) => e.stopPropagation()} 
              onChange={handleLikeChange}
            />
            <span className="font-bold  text-white bg-green-500 px-3 rounded-2xl">
              {recipe.cuisine}
            </span>
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
