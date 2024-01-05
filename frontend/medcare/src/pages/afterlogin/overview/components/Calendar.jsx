import React from "react"
import CalendarAppBar from "./CalendarAppBar"
import { Box, Grid } from "@mui/material"
import CalendarCard from "./CalendarCard"

const Calendar = () => {
  return (
    <Box sx={{ pt: 2, pr: 2, mb: 4 }}>
      <Box
        sx={{
          boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
          borderRadius: "6px 6px 6px 6px",
        }}
      >
        <CalendarAppBar />
        <Box
          sx={{
            backgroundColor: "white",
            borderLeft: "1px solid #e6e6e6",
            height: "750px",
            overflow: "auto",
            borderRadius: "0 0 6px 6px",
          }}
        >
          <CalendarCard />
        </Box>
      </Box>
    </Box>
  )
}

export default Calendar
