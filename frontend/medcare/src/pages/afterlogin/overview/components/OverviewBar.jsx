import React, { useState } from "react"
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material"
import NotificationsIcon from "@mui/icons-material/Notifications"

const OverviewBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <AppBar
        position="static"
        variant="none"
        sx={{
          backgroundColor: "#f2f5f9",
          width: "100%",
        }}
      >
        <Toolbar>
          <Box sx={{ textDecoration: "none", flexGrow: 1 }}>
            <Typography sx={{ color: "black", fontSize: 35, mt: 2 }}>
              Hello, Mohamad
            </Typography>
            <Typography sx={{ color: "black", fontSize: 13 }}>
              Monday, 20 October 2021
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default OverviewBar
