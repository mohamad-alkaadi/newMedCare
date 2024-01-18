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
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import AccountBoxIcon from "@mui/icons-material/AccountBox"
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications"
import NotificationsIcon from "@mui/icons-material/Notifications"
const PrimaryAppBar = ({ activeBar, setActiveBar }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <AppBar
        position="static"
        variant="none"
        sx={{
          backgroundColor: "white",
          width: "100%",
          borderBottom: "1px solid #e6e6e6",
        }}
      >
        <Toolbar>
          <Box sx={{ textDecoration: "none", flexGrow: 1 }}>
            <Typography
              sx={{
                color: "black",
                fontSize: 22,
                color: "#00514c",
              }}
            >
              {activeBar}
            </Typography>
          </Box>
          <Box>
            <IconButton onClick={() => setMenuOpen(true)}>
              <NotificationsIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <Menu
              anchorOrigin={{ horizontal: "right", vertical: "top" }}
              transformOrigin={{ horizontal: "right", vertical: "bottom" }}
              open={menuOpen}
              onClose={() => setMenuOpen(false)}
              sx={{ mt: 5 }}
            >
              <MenuItem>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default PrimaryAppBar
