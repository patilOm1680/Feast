"use client"

import EmptyLikeList from '@/components/EmptyLikeList/EmptyLikeList'
import Card from '@/components/FoodCards/Card'
import { useAppSelector } from '@/lib/store/store'
import React from 'react'

const page = () => {
    const likedItems=useAppSelector((state)=>state.likes.items)
  return (
    <>

      {
        (likedItems.length!==0)? (<div className='flex items-center flex-wrap  pt-20 md:pt-30 gap-10 mx-0 md:mx-22'>
            {likedItems.map(obj=>{
                return <Card key={obj.id} recipe={obj}/>
            })}
        </div>):(<EmptyLikeList/>)
      }
        
        
    
    
    
    </>
  )
}

export default page