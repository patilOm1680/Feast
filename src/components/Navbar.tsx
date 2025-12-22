"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/lib/store/store";
import SearchBar from "./Search/SearchBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const totalLikes = useAppSelector((state) => state.likes.items.length);
  const cartItems=useAppSelector((state)=>state.cart.cartItems);
  const pathname=usePathname();
  return (
    <>
      <div className="bg-white shadow fixed top-0 left-0 w-full py-3 px-4 sm:px-6 md:px-8 lg:pl-14 z-[9999]">
        <div className="container flex items-center justify-between gap-2 sm:gap-4 lg:gap-6 mx-auto lg:mx-20 pt-2">
          <Link
            href="/"
            className="w-32 sm:w-40 md:w-48 lg:w-[300px] flex-shrink-0"
          >
            <img
              src="/navbar/appLogo.png"
              className="h-8 sm:h-9 md:h-10 w-auto"
              alt=""
              loading="eager"
            />
          </Link>
          <div className="hidden xl:flex flex-1 max-w-2xl">
            <SearchBar />
          </div>

          <nav className="contents">
            <ul className="flex items-center gap-3 sm:gap-4 md:gap-6 justify-end">
              <li className="hidden md:inline-block">
                <Link
                  className={`text-sm md:text-base hover:border-b-2 font-bold ${pathname=='/'?"border-b-2":""}`}
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li className="hidden md:inline-block">
                <Link
                  className="text-sm md:text-base hover:text-gray-600 transition-colors font-bold"
                  href="/"
                >
                  Help
                </Link>
              </li>

              <li className="relative inline-block">
                <Link href="/like">
                  {totalLikes > 0 && (
                    <div className="absolute -top-1 right-0 z-10 h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] bg-red-400 text-xs font-medium px-1 py-0.5 rounded-full flex justify-center items-center text-white">
                      {totalLikes}
                    </div>
                  )}

                  <svg
                    className="h-8 sm:h-9 lg:h-10 p-2 text-gray-500 svg-inline--fa fa-heart fa-w-16 fa-9x"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="heart"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li className="relative inline-block">
                <Link className="" href="/shopping-cart">
                  {cartItems.length > 0 && (
                    <div className="absolute -top-3 -right-2 z-10 h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] bg-red-400 text-xs font-medium px-1 py-0.5 rounded-full flex justify-center items-center text-white">
                      {cartItems.length}
                    </div>
                  )}
          
                  <ShoppingCartOutlinedIcon/>
                </Link>
              </li>

              {/* <img
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
                className="relative inline-block h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 !rounded-full object-cover object-center ml-2 sm:ml-4 md:ml-6"
              /> */}
              <SignedOut>
                <SignInButton>
                  <button className="bg-white text-ceramic-white rounded-full font-bold text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer hover:border-1 border-gray-400">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="bg-[#99DD31] text-ceramic-white rounded-full font-bold text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer md:block hidden">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
