import React, { useState } from "react"
import { Box, Button, CircularProgress, Grid, IconButton } from "@mui/material"
import MapContainer from "./MapContainer"
import map from "../../../../assets/mapTwo.png"
import OverCardThreeSelect from "./OverCardThreeSelect"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
const OverCardThree = () => {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      )
    }, 900)

    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <Box
      sx={{
        boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
        borderRadius: "6px 6px 6px 6px",
        height: 340,
      }}
    >
      <Grid container columns={12} sx={{ height: "100%" }}>
        <Grid
          item
          xs={1}
          sx={{
            height: "100%",
            display: "grid",
            justifyContent: "start",
            alignItems: "end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <IconButton
              sx={{
                bgcolor: "white",
                borderRadius: 0,
                width: "21px",
                height: "21px",
                ml: 1,
              }}
            >
              <AddIcon />
            </IconButton>
            <IconButton
              sx={{
                bgcolor: "white",
                borderRadius: 0,
                width: "21px",
                height: "21px",
                mt: "3px",
                mb: 1,
                ml: 1,
              }}
            >
              <RemoveIcon />
            </IconButton>
          </Box>
        </Grid>

        <Grid
          item
          xs={6}
          sx={{
            height: "100%",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress
            sx={{ color: "#00514c" }}
            variant="determinate"
            value={progress}
          />
        </Grid>
        <Grid item xs={5} sx={{ height: "100%" }}>
          <OverCardThreeSelect />
        </Grid>
      </Grid>
      {/* <MapContainer /> */}
    </Box>
  )
}

export default OverCardThree
