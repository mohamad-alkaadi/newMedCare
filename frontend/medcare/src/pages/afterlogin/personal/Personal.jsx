import { Avatar, Box, Button, Grid, Typography } from "@mui/material"
import React from "react"
import PrimaryAppBar from "../components/PrimaryAppBar"
import hello from "../../../assets/temp.jpg"
import CardTwo from "./components/CardTwo"
import CardThree from "./components/CardThree"
import CardFour from "./components/CardFour"
import CardOne from "./components/CardOne"
const Personal = () => {
  return (
    <Box sx={{ backgroundColor: "#f2f5f9", pb: 5 }}>
      <PrimaryAppBar />
      <Grid container columns={15} sx={{ pt: 2, p: 2 }}>
        <CardOne />
        <Grid
          item
          xs={5}
          sx={{
            border: "1px solid #e6e6e6",
            pb: 2,
            borderRadius: 2,
            backgroundColor: "white",
          }}
        >
          <CardThree />
        </Grid>
        <Grid xs={10}>
          <CardFour />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Personal
