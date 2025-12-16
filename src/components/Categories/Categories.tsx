import React from 'react'
import Category from './Category'

const Categories = () => {
  return (
    <>
    <div className=' -mt-16 flex items-center justify-between z-50'>
        <Category data="Healthy Dinner Recipe" CategoryColor="#F5784C"/>
        <Category data="Quick Lunch Ideas" CategoryColor="#C4D633"/>
        <Category data="Tasty Appetizer Bites" CategoryColor="#EAAB30"/>
        <Category data="Refreshing Drinks" CategoryColor="#EC8C2C"/>
        <Category data="Fresh Breakfast" CategoryColor="#83BE28"/>
    </div>
        
    </>
  )
}

export default Categories