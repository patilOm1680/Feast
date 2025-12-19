import { recipeType } from '@/types/RecipeTypes/Recipe'
import React from 'react'
import {Rating,Chip} from "@mui/material";
const Hero = ({recipe}:{recipe:recipeType}) => {
  return (
    <>
        <div className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl">

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10">
          </div>
          
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-96 md:h-[500px] object-cover"
          />
          <div className="absolute bottom-8 left-8 right-8 z-20">
            <div className="bg-transparent w-[500px] backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl text-white">
              <div className="flex flex-wrap gap-2 mb-4">
                {recipe.tags?.slice(0, 3).map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    size="small"
                    sx={{
                      background: "#449C6D",
                      color: "white",
                      fontWeight: 600,
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  />
                ))}
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                {recipe.name}
              </h1>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Rating
                    value={recipe.rating}
                    precision={0.1}
                    readOnly
                    size="large"
                    sx={{ color: "#fbbf24" }}
                  />
                  <span className="text-xl font-bold text-white">
                    {recipe.rating}
                  </span>
                </div>
                <span className="text-sm text-white font-medium">
                  ({recipe.reviewCount} reviews)
                </span>
              </div>

              {/* <div className="flex flex-wrap gap-3">
                <Button
                  variant="contained"
                  startIcon={<PlayCircle />}
                  sx={{
                    background: "#7551AA",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "15px",
                    px: 4,
                    py: 1.5,
                    borderRadius: "12px",
                    textTransform: "none",
                    boxShadow: "0 4px 20px rgba(102, 126, 234, 0.4)",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 25px rgba(102, 126, 234, 0.5)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Start Cooking
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<BookmarkBorder />}
                  sx={{
                    borderColor: "#d1d5db",
                    color: "#374151",
                    fontWeight: 600,
                    px: 3,
                    py: 1.5,
                    borderRadius: "12px",
                    textTransform: "none",
                    borderWidth: 2,
                    "&:hover": {
                      borderColor: "#667eea",
                      backgroundColor: "#f3f4f6",
                      borderWidth: 2,
                    },
                  }}
                >
                  Save
                </Button>
                <IconButton
                  sx={{
                    border: "2px solid #d1d5db",
                    "&:hover": {
                      backgroundColor: "#f3f4f6",
                      borderColor: "#667eea",
                    },
                  }}
                >
                  <Share />
                </IconButton>
              </div> */}
            </div>
          </div>
        </div>
    </>
  )
}

export default Hero