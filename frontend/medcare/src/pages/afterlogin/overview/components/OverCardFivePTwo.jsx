import { Box, List, ListItem, Typography } from "@mui/material"
import React from "react"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"

const OverCardFivePTwo = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
        borderRadius: "6px 6px 6px 6px",
        mt: 2,
        width: "395px",
        height: "144px",
        background: "linear-gradient(to right, #f5c7c7, #fea2a3)",
      }}
    >
      <Typography sx={{ pl: 3, pt: 2, color: "white" }}>
        Canceld visits
      </Typography>
      <Typography sx={{ pl: 3, pt: 1, color: "whitesmoke", mb: 1 }}>
        You have one canceled visit:
      </Typography>
      <ul>
        <li className="pl-6">
          <Typography sx={{ display: "flex", color: "#c67477" }}>
            dr Anthony Wagner - dermatologist
          </Typography>
          <Box display="flex">
            <CalendarMonthIcon
              sx={{ width: "12px", mr: 1, mb: "2px", color: "white" }}
            />
            <Typography
              sx={{
                fontSize: "13px",
                justifySelf: "center",
                alignSelf: "center",
                color: "white",
              }}
            >
              20/07/2018
            </Typography>
          </Box>
        </li>
      </ul>
    </Box>
  )
}

export default OverCardFivePTwo
