"use client";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRouter } from "next/navigation";
const Category = ({
  data,
  CategoryColor,
}: {
  data: string;
  CategoryColor: string;
}) => {
  const router=useRouter();
  const handleCategoryClick = () => {
    if(data==="Healthy Dinner Recipe"){
      router.push(`/category/dinner`)
    }else if (data==='Quick Lunch Ideas'){
      router.push(`/category/lunch`)
  }else if(data==='Tasty Appetizer Bites'){
      router.push(`/category/appetizer`)
  }else if(data==="Refreshing Drinks"){
      router.push(`/category/beverage`)
  }else{
      router.push(`/category/breakfast`)
  }
    
  }
  return (
    <div
      className="
        flex items-center gap-2
        min-w-[260px] md:w-78
        py-6 md:py-8
        rounded-2xl
        justify-center
        font-medium
        cursor-pointer
        z-40
      "
      style={{ backgroundColor: CategoryColor }}
      onClick={handleCategoryClick}
    >
      <p className="text-white text-lg md:text-2xl whitespace-nowrap">
        {data}
      </p>
      <ChevronRightIcon fontSize="large" sx={{ color: "white" }} />
    </div>
  );
};

export default Category;
