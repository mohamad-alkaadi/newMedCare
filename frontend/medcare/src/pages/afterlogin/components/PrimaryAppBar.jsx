import React from "react"
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
const PrimaryAppBar = ({ activePage }) => {
  return (
    <>
      <AppBar
        ة
        sx={{
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <Toolbar>
          <Link sx={{ textDecoration: "none" }}>
            <Typography
              component="div"
              sx={{
                fontFamily: `'Comfortaa', cursive`,
                color: "#00544f",
                fontWeight: 600,
                fontSize: "30px",
              }}
            >
              MedCare{" "}
              <span style={{ color: "#8a8a8a", fontSize: "20px" }}>
                {activePage}
              </span>
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default PrimaryAppBar
