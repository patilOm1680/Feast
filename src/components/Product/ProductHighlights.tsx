import { recipeType } from '@/types/RecipeTypes/Recipe'
import React from 'react'
import {Card,CardContent} from "@mui/material";
import {AccessTime,LocalFireDepartment,Restaurant,BarChart} from "@mui/icons-material";
const ProductHighlights = ({recipe}:{recipe:recipeType}) => {
  return (
    <>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-5 text-center">
              <AccessTime className="text-blue-600 mb-2" fontSize="large" />
              <div className="text-xs text-blue-700 uppercase font-bold mb-1">
                Prep Time
              </div>
              <div className="text-xl font-black text-blue-900">
                {recipe.prepTimeMinutes} mins
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-5 text-center">
              <LocalFireDepartment
                className="text-orange-600 mb-2"
                fontSize="large"
              />
              <div className="text-xs text-orange-700 uppercase font-bold mb-1">
                Cook Time
              </div>
              <div className="text-xl font-black text-orange-900">
                {recipe.cookTimeMinutes} mins
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-500 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-5 text-center">
              <Restaurant className="text-green-600 mb-2" fontSize="large" />
              <div className="text-xs text-green-700 uppercase font-bold mb-1">
                Servings
              </div>
              <div className="text-xl font-black text-green-900">
                {recipe.servings}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-5 text-center">
              <BarChart className="text-purple-600 mb-2" fontSize="large" />
              <div className="text-xs text-purple-700 uppercase font-bold mb-1">
                Difficulty
              </div>
              <div className="text-xl font-black text-purple-900">
                {recipe.difficulty}
              </div>
            </CardContent>
          </Card>
        </div>
    </>
  )
}

export default ProductHighlights