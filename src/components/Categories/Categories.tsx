import React from "react";
import Category from "./Category";

const Categories = () => {
  return (
    <div
      className="
        mt-4 md:-mt-16
        z-30
        flex flex-col
        gap-4
        md:flex-row
        md:gap-6
        md:justify-between
        px-4 md:px-0
      "
    >
      <Category data="Healthy Dinner Recipe" CategoryColor="#F5784C" />
      <Category data="Quick Lunch Ideas" CategoryColor="#C4D633" />
      <Category data="Tasty Appetizer Bites" CategoryColor="#EAAB30" />
      <Category data="Refreshing Drinks" CategoryColor="#EC8C2C" />
      <Category data="Fresh Breakfast" CategoryColor="#83BE28" />
    </div>
  );
};

export default Categories;
