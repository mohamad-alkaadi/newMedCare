import { Box, Grid, List, ListItem, Typography } from "@mui/material"
import React from "react"

const OverCardFivePOne = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
        borderRadius: "6px 6px 6px 6px",
        width: "395px",
        height: "144px",
      }}
    >
      <Typography>Alert</Typography>
      <Typography>You have 2 visits today:</Typography>
      <List>
        <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>dr Anthony Wagner</Typography>
          <Typography>dermatologist</Typography>
        </ListItem>
        <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>dr Anthony Wagner</Typography>
          <Typography>dermatologist</Typography>
        </ListItem>
      </List>
    </Box>
  )
}

export default OverCardFivePOne
