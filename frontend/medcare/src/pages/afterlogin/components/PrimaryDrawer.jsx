import {
  Avatar,
  Box,
  ButtonBase,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material"
import React, { useState } from "react"
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard"
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined"
import PersonIcon from "@mui/icons-material/Person"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import MessageIcon from "@mui/icons-material/Message"
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined"
import LocalHospitalIcon from "@mui/icons-material/LocalHospital"
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined"
import VaccinesIcon from "@mui/icons-material/Vaccines"
import VaccinesOutlinedIcon from "@mui/icons-material/VaccinesOutlined"
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined"
import HelpIcon from "@mui/icons-material/Help"
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined"
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined"
import tempimg from "../../../assets/temp.jpg"

const PrimaryDrawer = ({ activePage }) => {
  const [highlight, setHighlight] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <CssBaseline />
      <Drawer sx={{ width: "200px" }} variant="permanent" anchor="left">
        <List sx={{ flexGrow: 1 }}>
          <ListItem>
            <ListItemText
              primary={
                <Typography
                  component="div"
                  sx={{
                    fontFamily: `'Comfortaa', cursive`,
                    color: "#00544f",
                    fontWeight: 600,
                    fontSize: "30px",
                    pl: 2,
                  }}
                >
                  MedCare{" "}
                  <span style={{ color: "#8a8a8a", fontSize: "20px" }}></span>
                </Typography>
              }
            />
          </ListItem>

          <ListItem
            sx={
              activePage === "overview"
                ? { bgcolor: "#00544f", color: "#fff" }
                : null
            }
          >
            <ListItemButton>
              <ListItemIcon
                sx={activePage === "overview" ? { color: "#fff" } : null}
              >
                {!highlight ? (
                  <SpaceDashboardOutlinedIcon />
                ) : (
                  <SpaceDashboardIcon />
                )}
              </ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItemButton>
          </ListItem>

          <ListItem
            sx={
              activePage === "personal"
                ? { bgcolor: "#00544f", color: "#fff" }
                : null
            }
          >
            <ListItemButton>
              <ListItemIcon
                sx={activePage === "personal" ? { color: "#fff" } : null}
              >
                {!highlight ? <PersonOutlineOutlinedIcon /> : <PersonIcon />}
              </ListItemIcon>
              <ListItemText primary="Personal Details" />
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={
              activePage === "messages"
                ? { bgcolor: "#00544f", color: "#fff" }
                : null
            }
          >
            <ListItemButton>
              <ListItemIcon
                sx={activePage === "messages" ? { color: "#fff" } : null}
              >
                {!highlight ? <MessageOutlinedIcon /> : <MessageIcon />}
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItemButton>
          </ListItem>

          <ListItem
            sx={
              activePage === "history"
                ? { bgcolor: "#00544f", color: "#fff" }
                : null
            }
          >
            <ListItemButton>
              <ListItemIcon
                sx={activePage === "history" ? { color: "#fff" } : null}
              >
                {!highlight ? (
                  <LocalHospitalOutlinedIcon />
                ) : (
                  <LocalHospitalIcon />
                )}
              </ListItemIcon>
              <ListItemText primary="Medical History" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem
            sx={
              activePage === "help"
                ? { bgcolor: "#00544f", color: "#fff" }
                : null
            }
          >
            <ListItemButton>
              <ListItemIcon
                sx={activePage === "help" ? { color: "#fff" } : null}
              >
                {!highlight ? <HelpOutlineOutlinedIcon /> : <HelpIcon />}
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItemButton>
          </ListItem>
          {/* <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Avatar alt={temp.text} src={temp.src} />
              </ListItemIcon>
              <ListItemText primary={temp.text} />
            </ListItemButton>
          </ListItem> */}
        </List>
        <Box>
          <ButtonBase
            id="basic-button"
            onClick={handleClick}
            sx={{ width: "100%" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                pl: 0,
                pb: 2,
                pt: 2,
                borderTop: "1px solid #e6e6e6",
              }}
            >
              <Avatar alt="Mohamad Alkaadi" />
              <Typography
                sx={{
                  ml: 1,
                  fontSize: 14,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "start",
                  width: "114px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Mohamad Alkaadi
                <span className="text-[12px]">Patient</span>
              </Typography>
              <ArrowForwardIosOutlinedIcon sx={{ width: 12, ml: 2 }} />
            </Box>
          </ButtonBase>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{ ml: 26 }}
          >
            <MenuItem>Edit info</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Box>
      </Drawer>
    </Box>
  )
}

export default PrimaryDrawer
