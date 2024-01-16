import { Box, Grid, List, ListItem, Typography } from "@mui/material"
import React from "react"

const OverCardFour = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
        borderRadius: "6px 6px 6px 6px",
        height: 340,
      }}
    >
      <Typography sx={{ pl: 4, pt: 2, fontSize: 30 }}>
        Current prescription
      </Typography>
      <List sx={{ pl: 2, pt: 2 }}>
        <ListItem>
          <Box
            sx={{
              backgroundColor: "#c0cff5",
              width: 20,
              height: 20,
              borderRadius: "100%",
              mr: 3,
            }}
          ></Box>
          <Box>
            <Typography sx={{ fontSize: "19px" }}>Vitamin C</Typography>
            <Typography sx={{ color: "gray", fontSize: "13px" }}>
              5mg - 2x per day
            </Typography>
          </Box>
        </ListItem>
        <ListItem>
          <Box
            sx={{
              backgroundColor: "#c0cff5",
              width: 20,
              height: 20,
              borderRadius: "100%",
              mr: 3,
            }}
          ></Box>
          <Box>
            <Typography sx={{ fontSize: "19px" }}>Vitamin C</Typography>
            <Typography sx={{ color: "gray", fontSize: "13px" }}>
              5mg - 2x per day
            </Typography>
          </Box>
        </ListItem>
        <ListItem>
          <Box
            sx={{
              backgroundColor: "#c0cff5",
              width: 20,
              height: 20,
              borderRadius: "100%",
              mr: 3,
            }}
          ></Box>
          <Box>
            <Typography sx={{ fontSize: "19px" }}>Vitamin C</Typography>
            <Typography sx={{ color: "gray", fontSize: "13px" }}>
              5mg - 2x per day
            </Typography>
          </Box>
        </ListItem>
      </List>
    </Box>
  )
}

export default OverCardFour
