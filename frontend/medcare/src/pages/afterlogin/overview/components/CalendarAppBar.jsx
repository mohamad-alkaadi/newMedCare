import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material"
import NotificationsIcon from "@mui/icons-material/Notifications"

import React, { useState } from "react"

const CalendarAppBar = () => {
  return (
    <>
      <AppBar
        position="static"
        variant="none"
        sx={{
          backgroundColor: "white",
          width: "100%",
          borderLeft: "1px solid #e6e6e6",
          borderRadius: "6px 6px 0 0",
        }}
      >
        <Toolbar>
          <Box sx={{ textDecoration: "none" }}>
            <Typography sx={{ color: "#00544f", fontSize: "20px" }}>
              Calendar
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default CalendarAppBar
