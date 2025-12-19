"use client";
import EmptyCart from "@/components/EmptyCart/EmptyCart";
import { clearCartItems } from "@/lib/store/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/store";
import React from "react";

const page = () => {
  const shoppingList = useAppSelector((state) => state.cart.cartItems);
  const dispatch=useAppDispatch();
  const clearCart = () => {
    dispatch(clearCartItems());
  }
  return (
    <>
    {
      (shoppingList.length==0)?(<EmptyCart/>):(<div className="pt-36 min-h-screen bg-gradient-to-br from-green-50 to-white px-4 py-10">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold text-gray-800">
              🛒 Shopping List
            </h1>
            <p className="text-gray-600 mt-2">
              Ingredients you need for your recipe
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">
            {shoppingList.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border-b last:border-b-0 pb-4"
              >
                <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <span className="text-lg text-gray-800 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-3">
              <button className="bg-gray-400 cursor-pointer text-white p-3 rounded-2xl" onClick={clearCart}>Clear cart</button>
          </div>
          
        </div>
      </div>)
    }
      
    </>
  );
};

export default page;
