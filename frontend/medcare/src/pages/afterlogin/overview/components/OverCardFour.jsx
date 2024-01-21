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
      <Typography
        sx={{
          pl: 4,
          pt: 2,
          color: "#00544f",
          fontSize: "22px",
        }}
      >
        Current Prescription
      </Typography>
      <List sx={{ pl: 2, pt: 2 }}>
        <ListItem>
          <Box
            sx={{
              backgroundColor: "#068466",
              width: 20,
              height: 20,
              borderRadius: "100%",
              mr: 3,
            }}
          ></Box>
          <Box>
            <Typography
              sx={{
                fontSize: "19px",
                fontFamily: "'Rubik', sans-serif",
                color: "#068466",
              }}
            >
              Vitamin C
            </Typography>
            <Typography sx={{ color: "#aaaaaa", fontSize: "12px" }}>
              5mg - 2x per day
            </Typography>
          </Box>
        </ListItem>
        <ListItem>
          <Box
            sx={{
              backgroundColor: "#068466",
              width: 20,
              height: 20,
              borderRadius: "100%",
              mr: 3,
            }}
          ></Box>
          <Box>
            <Typography
              sx={{
                fontSize: "19px",
                fontFamily: "'Rubik', sans-serif",
                color: "#068466",
              }}
            >
              Vitamin C
            </Typography>
            <Typography sx={{ color: "#aaaaaa", fontSize: "12px" }}>
              5mg - 2x per day
            </Typography>
          </Box>
        </ListItem>
        <ListItem>
          <Box
            sx={{
              backgroundColor: "#068466",
              width: 20,
              height: 20,
              borderRadius: "100%",
              mr: 3,
            }}
          ></Box>
          <Box>
            <Typography
              sx={{
                fontSize: "19px",
                fontFamily: "'Rubik', sans-serif",
                color: "#068466",
              }}
            >
              Vitamin C
            </Typography>
            <Typography sx={{ color: "#aaaaaa", fontSize: "12px" }}>
              5mg - 2x per day
            </Typography>
          </Box>
        </ListItem>
        <ListItem>
          <Box
            sx={{
              backgroundColor: "#068466",
              width: 20,
              height: 20,
              borderRadius: "100%",
              mr: 3,
            }}
          ></Box>
          <Box>
            <Typography
              sx={{
                fontSize: "19px",
                fontFamily: "'Rubik', sans-serif",
                color: "#068466",
              }}
            >
              Vitamin C
            </Typography>
            <Typography sx={{ color: "#aaaaaa", fontSize: "12px" }}>
              5mg - 2x per day
            </Typography>
          </Box>
        </ListItem>
      </List>
    </Box>
  )
}

export default OverCardFour
