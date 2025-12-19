import { recipeType } from "@/types/RecipeTypes/Recipe";
import React from "react";
import {Card,CardContent,Stepper,Step,StepLabel,StepContent,Box,Avatar,} from "@mui/material";
const Instructions = ({ recipe }: { recipe: recipeType }) => {
  return (
    <>
      <Card className="shadow-xl mb-8 border-none overflow-hidden">
        <div className="bg-[#7551AA] p-6">
          <h3 className="text-3xl font-black text-white flex items-center gap-3">
            <span className="text-4xl">👨‍🍳</span> Instructions
          </h3>
        </div>

        <CardContent className="p-8">
          <Stepper
            orientation="vertical"
            sx={{
              "& .MuiStepLabel-root": {
                padding: 0,
              },
              "& .MuiStepContent-root": {
                borderLeft: "3px solid #e5e7eb",
                marginLeft: "20px",
                paddingLeft: "30px",
              },
            }}
          >
            {recipe.instructions?.map((instruction, index) => (
              <Step key={index} expanded>
                <StepLabel
                  StepIconComponent={() => (
                    <Avatar
                      sx={{
                        width: 42,
                        height: 42,
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        fontWeight: 900,
                        fontSize: "18px",
                        boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
                      }}
                    >
                      {index + 1}
                    </Avatar>
                  )}
                >
                  <span className="text-xl font-bold text-gray-900 ml-3">
                    Step {index + 1}
                  </span>
                </StepLabel>
                <StepContent>
                  <Box className="bg-gradient-to-br from-gray-50 to-purple-50 p-6 rounded-2xl mt-3 mb-6 border-l-4 border-purple-500 shadow-md">
                    <p className="text-base text-gray-800 leading-relaxed font-medium">
                      {instruction}
                    </p>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </CardContent>
      </Card>
    </>
  );
};

export default Instructions;
