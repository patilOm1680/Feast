"use client"
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Category = ({data,CategoryColor}:{data:string,CategoryColor:string}) => {
  return (
    <div className='flex items-center gap-2 w-78 py-8 rounded-2xl justify-center font-medium cursor-pointer z-40' style={{backgroundColor:CategoryColor}}>
        <p className='text-white text-2xl'>{data}</p>
        <ChevronRightIcon fontSize='large' sx={{color:"white"}}/>
    </div>
  )
}

export default Category