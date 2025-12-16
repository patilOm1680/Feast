"use client"

import Card from '@/components/FoodCards/Card'
import { useAppSelector } from '@/lib/store/store'
import React from 'react'

const page = () => {
    const likedItems=useAppSelector((state)=>state.likes.items)
  return (
    <>
        
        <div className='flex items-center flex-wrap pt-30 gap-10 mx-22'>
            {likedItems.map(obj=>{
                return <Card key={obj.id} recipe={obj}/>
            })}
        </div>
    
    
    
    </>
  )
}

export default page