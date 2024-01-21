import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material"
import React from "react"
import DoctorListItem from "./DoctorListItem"
import AddIcon from "@mui/icons-material/Add"
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ color: "#00544f", fontSize: "20px", ml: 3, mt: "11px" }}
        >
          Current Doctors
        </Typography>
        <Button
          size="small"
          sx={{ textTransform: "none", color: "#068466", mr: 2, mt: "11px" }}
          startIcon={<AddIcon />}
        >
          Add Doctor
        </Button>
      </Box>
      <List>
        <ListItem>
          <DoctorListItem />
        </ListItem>
        <ListItem>
          <DoctorListItem />
        </ListItem>
        <ListItem>
          <DoctorListItem />
        </ListItem>
      </List>
    </Box>
  )
}

export default OverCardSeven
