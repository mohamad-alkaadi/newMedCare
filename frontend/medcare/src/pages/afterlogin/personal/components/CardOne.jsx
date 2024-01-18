import { Avatar, Box, Button, Grid, Typography } from "@mui/material"
import React from "react"
import CardTwo from "./CardTwo"
import hello from "../../../../assets/temp.jpg"

const CardOne = ({ info }) => {
  return (
    <Grid container columns={6}>
      <Grid
        item
        xs={6}
        sx={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          pt: 6,
          pb: 4,
        }}
      >
        <Avatar sx={{ width: 100, height: 100 }} alt="big pic" src={hello} />
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            margin: "auto",
            fontSize: 22,
            fontWeight: 600,
            fontFamily: "'Noto Sans Indic Siyaq Numbers', sans-serif",
            color: "#003d39",
            pb: "2px",
          }}
        >
          {info.first_name} {info.last_name}
        </Typography>

        <Typography
          sx={{
            margin: "auto",
            fontSize: 15,
            pb: 2,
            mb: 1,
            borderBottom: "1px solid #e6e6e6",
            color: "#97a1aa",
          }}
        >
          {info.email}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Grid
          container
          columns={6}
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 1, mb: 1 }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "white",
              // border: "1px solid #e6e6e6",
              border: "none",
              textTransform: "none",
              bgcolor: "#00544f",
              "&:hover": {
                bgcolor: "#068466",
                border: "none",
              },
            }}
          >
            Update Info
          </Button>
        </Grid>
        <Grid container columns={6} alignItems="center" justifyContent="center">
          <Button
            variant="outlined"
            sx={{
              color: "white",
              // border: "1px solid #e6e6e6",
              border: "none",
              textTransform: "none",
              bgcolor: "#00544f",
              "&:hover": {
                bgcolor: "#068466",
                border: "none",
              },
            }}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CardOne
