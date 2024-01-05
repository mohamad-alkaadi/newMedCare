import { Box, Grid, Typography } from "@mui/material"
import React from "react"

const OverCardTwo = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
        borderRadius: "6px 6px 6px 6px",
        pt: 3,
        pb: "28px",
        pr: 3,
        pl: 3,
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ mr: "12px" }}>Blood type:</Typography>
        <Typography>A-</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ mr: "39px" }}>Height:</Typography>
        <Typography>173</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ mr: "36px" }}>Weight:</Typography>
        <Typography>173</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ mr: "27px" }}>allergies:</Typography>
        <Typography>peanuts, milk</Typography>
      </Box>
    </Box>
  )
}

export default OverCardTwo
