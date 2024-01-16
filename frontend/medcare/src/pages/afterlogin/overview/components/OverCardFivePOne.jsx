import { Box, Grid, List, ListItem, Typography } from "@mui/material"
import React from "react"

const OverCardFivePOne = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
        borderRadius: "6px 6px 6px 6px",
        width: "395px",
        height: "144px",
        background: "linear-gradient(to right, #9191f1, #6b6de3)",
      }}
    >
      <Typography sx={{ pl: 3, pt: 2, color: "white" }}>Alert</Typography>
      <Typography sx={{ pl: 3, pt: 1, color: "whitesmoke", mb: 1 }}>
        You have 2 visits today:
      </Typography>

      <ul>
        <li className="flex justify-between pl-6 pr-8">
          <Typography sx={{ display: "flex", color: "white" }}>
            <Box
              sx={{
                width: 7,
                height: 7,
                backgroundColor: "white",
                borderRadius: "100%",
                justifySelf: "center",
                alignSelf: "center",
                mr: 2,
              }}
            ></Box>
            dr Anthony Wagner
          </Typography>
          <Typography sx={{ color: "whitesmoke" }}>dermatologist</Typography>
        </li>
        <li className="flex justify-between pl-6 pr-8">
          <Typography sx={{ display: "flex", color: "white" }}>
            <Box
              sx={{
                width: 7,
                height: 7,
                backgroundColor: "white",
                borderRadius: "100%",
                justifySelf: "center",
                alignSelf: "center",
                mr: 2,
              }}
            ></Box>
            dr Anthony Wagner
          </Typography>
          <Typography sx={{ color: "whitesmoke" }}>dermatologist</Typography>
        </li>
      </ul>
    </Box>
  )
}

export default OverCardFivePOne
