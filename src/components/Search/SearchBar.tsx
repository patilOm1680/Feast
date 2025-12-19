"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
import { recipeArr } from "@/types/RecipeTypes/Recipe";
import { fetchData } from "@/lib/api/fetchData";
export default function SearchBar() {
  const [searchData, setSearchData] = useState<recipeArr>([]);
  const [filteredData, setFilteredData] = useState<recipeArr>([]);
  const [selectedValue, setSelectedValue] = useState("All");

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setSearchData(data);
      setFilteredData(data);
    };
    getData();
  }, []);

  useEffect(() => {
    if (selectedValue === "All") {
      setFilteredData(searchData);
    } else {
      const updated = searchData.filter((obj) => {
        if (!obj.mealType) return false;

        return obj.mealType.some(
          (meal) => meal.toLowerCase() === selectedValue.toLowerCase()
        );
      });

      setFilteredData(updated);
    }
  }, [selectedValue, searchData]);

  const router = useRouter();
  const handleSearchChange = (e: React.SyntheticEvent, value: string) => {
    const filterData = searchData.filter((obj) => obj.name === value);
    // console.log(filterData);
    router.push(`/product/${filterData[0].id}`);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    // console.log(selectedValue);
  };

  return (
    <>
      <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
        <select
          className="bg-transparent uppercase font-bold text-sm p-4 mr-4 outline-none"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value="All">All Categories</option>
          <option value="Dinner">Dinner</option>
          <option value="Lunch">Lunch</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Beverage">Beverage</option>
          <option value="Dessert">Dessert</option>
        </select>

        {/* <input
          className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4 w-full outline-none"
          type="text"
          placeholder="I'm searching for ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <svg
          className=" h-5 px-4 text-gray-500 svg-inline--fa fa-search fa-w-16 fa-9x"
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="search"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
          ></path>
        </svg>
        <ul className="absolute right-[600px] top-18 w-[490px] h-auto bg-red-700">
          {results.map((item, index) => {
            if (index >= 0 && index <= 10)
              return <li key={item.name}>{item.name}</li>;
          })}
        </ul> */}

        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          className="w-full"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },
          }}
          onChange={handleSearchChange}
          options={filteredData.map((option) => option.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search recipe"
              slotProps={{
                input: {
                  ...params.InputProps,
                  type: "search",
                },
              }}
            />
          )}
        />
        <div className="cursor-pointer h-5 px-4 text-gray-500 svg-inline--fa fa-search fa-w-16 fa-9x">
          <SearchIcon />
        </div>
      </div>
    </>
  );
}
