import { Avatar, Box, Button, Grid, Typography } from "@mui/material"
import React from "react"
import CardTwo from "./CardTwo"
import hello from "../../../../assets/temp.jpg"

const CardOne = ({ info }) => {
  return (
    <Grid item xs={10}>
      <Grid container columns={11} sx={{ pr: 2 }}>
        <Grid
          sx={{
            border: "1px solid #e6e6e6",
            pb: 2,
            borderRadius: 2,
            backgroundColor: "white",
            boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
          }}
          item
          xs={3}
        >
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
              <Avatar
                sx={{ width: 100, height: 100 }}
                alt="big pic"
                src={hello}
              />
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
                  sx={{ color: "black", border: "1px solid #e6e6e6" }}
                >
                  Update info
                </Button>
              </Grid>
              <Grid
                container
                columns={6}
                alignItems="center"
                justifyContent="center"
              >
                <Button
                  variant="outlined"
                  sx={{ color: "black", border: "1px solid #e6e6e6" }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            border: "1px solid #e6e6e6",
            pb: 2,
            borderRadius: 2,
            backgroundColor: "white",
            boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          <CardTwo info={info} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CardOne
