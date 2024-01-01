import { Avatar, Box, Button, Grid, Typography } from "@mui/material"
import React from "react"
import PrimaryAppBar from "../components/PrimaryAppBar"
import hello from "../../../assets/temp.jpg"
import CardTwo from "./components/CardTwo"
import CardThree from "./components/CardThree"
const Personal = () => {
  return (
    <Box sx={{ backgroundColor: "#f2f5f9", pb: 5 }}>
      <PrimaryAppBar />
      <Grid container columns={15} sx={{ pt: 2, p: 2 }}>
        <Grid item xs={10}>
          <Grid container columns={11} sx={{ pr: 2 }}>
            <Grid
              sx={{
                border: "1px solid #e6e6e6",
                pb: 2,
                borderRadius: 2,
                backgroundColor: "white",
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
                    Mohamad ALkaadi
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
                    mohamadalkaadi@gmail.com
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
              }}
            >
              <CardTwo />
            </Grid>
          </Grid>
        </Grid>
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
      </Grid>
    </Box>
  )
}

export default Personal
