import React from "react"
import CalendarAppBar from "./CalendarAppBar"
import { Box, Grid } from "@mui/material"
import CalendarCard from "./CalendarCard"

const Calendar = () => {
  return (
    <div className="pt-3 pr-3">
      <CalendarAppBar />
      <Box
        sx={{
          backgroundColor: "white",
          borderLeft: "1px solid #e6e6e6",
          height: "707px",
          overflow: "auto",
        }}
      >
        <CalendarCard />
      </Box>
    </div>
  )
}

export default Calendar
