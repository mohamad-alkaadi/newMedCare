import { Box, List, ListItem, Typography } from "@mui/material"
import React from "react"
import DoctorListItem from "./DoctorListItem"
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
      <Typography
        sx={{ color: "#00544f", fontSize: "20px", pl: 3, pt: "11px" }}
      >
        Current Doctors
      </Typography>
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
