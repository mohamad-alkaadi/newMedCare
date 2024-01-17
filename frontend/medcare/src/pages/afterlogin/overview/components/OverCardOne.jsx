import { Avatar, Box, Grid, Typography } from "@mui/material"
import React from "react"

const OverCardOne = () => {
  return (
    <Grid
      container
      columns={18}
      sx={{
        backgroundColor: "white",
        borderRadius: "6px 6px 6px 6px",
        boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Grid
        item
        xs={4}
        sx={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          pt: 3,
          pb: 3,
        }}
      >
        <Avatar alt="intro" sx={{ width: "100px", height: "100px" }} />
      </Grid>
      <Grid
        item
        xs={14}
        sx={{
          pt: 3,
          pl: 0,
          pb: 3,
          borderRadius: "0px 6px 6px 0px",
        }}
      >
        <Grid container columns={12}>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: 25, mb: "1px" }}>
              Mohamad Alkaadi
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ mr: 2 }}>Birth:</Typography>
                <Typography>30 Apr 1993 (25yo)</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ mr: 1 }}>Email:</Typography>
                <Typography>mohamadalkaadi@gmail.com</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ mr: 2 }}>Birth:</Typography>
                <Typography>30 Apr 1993 (25yo)</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ mr: 1 }}>Email:</Typography>
                <Typography>mohamadalkaadi@gmail.com</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default OverCardOne
