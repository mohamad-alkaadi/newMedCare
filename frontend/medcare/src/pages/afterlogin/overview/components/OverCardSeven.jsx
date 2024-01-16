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
      <Typography sx={{ fontSize: 30 }}>current doctors</Typography>
    </Box>
  )
}

export default OverCardSeven
