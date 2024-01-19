import { Box, Typography } from "@mui/material"
import React from "react"
const OverCardSeven = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
        borderRadius: "6px 6px 6px 6px",
        height: 304,
      }}
    >
      <Typography
        sx={{ color: "#00544f", fontSize: "20px", pl: 3, pt: "11px" }}
      >
        Current doctors
      </Typography>
    </Box>
  )
}

export default OverCardSeven
