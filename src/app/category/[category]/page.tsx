"use client"
import Card from '@/components/FoodCards/Card';
import Loader from '@/components/Loaders/Loader';
import { categoryData } from '@/lib/api/categoryData';
import { recipeArr } from '@/types/RecipeTypes/Recipe';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
    const {category}=useParams<{category:string}>();
    const [data,setData]=useState<recipeArr>([]);
    useEffect(() => {
      const fetchData=async ()=>{
        const recipes=await categoryData(category);
        setData(recipes)
      }
      fetchData();
    }, []);

    if (data.length==0) {
    return (
      <Loader/>
    );
  }
    
  return (
    <>
    <div className='flex items-center flex-wrap  pt-20 md:pt-30 gap-10 mx-0 md:mx-22'>
            {data.map(obj=>{
                return <Card key={obj.id} recipe={obj}/>
            })}
        </div>
    </>
  )
}

export default page