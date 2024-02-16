import { Box, Grid, Typography } from "@mui/material"
import React from "react"

const OverCardTwo = ({ blood, height, weight, allergies }) => {
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
        background: "linear-gradient(to right, #fda99e, #fcb699)",
        color: "white",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ mr: "12px" }}>Blood type:</Typography>
        <Typography>{blood}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ mr: "39px" }}>Height:</Typography>
        <Typography>{height} cm</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ mr: "36px" }}>Weight:</Typography>
        <Typography>{weight} kg</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ mr: "27px" }}>allergies:</Typography>
        <Typography>{allergies}</Typography>
      </Box>
    </Box>
  )
}

export default OverCardTwo
