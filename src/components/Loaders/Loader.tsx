import React from "react";
import {CircularProgress} from "@mui/material";

const Loader = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-white">
        <CircularProgress size={60} sx={{ color: "#4caf50" }} />
      </div>
    </>
  );
};

export default Loader;
