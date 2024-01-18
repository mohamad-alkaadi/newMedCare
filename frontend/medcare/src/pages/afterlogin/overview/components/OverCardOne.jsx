import { Avatar, Box, Grid, Typography } from "@mui/material"
import React from "react"
import pic from "../../../../assets/temp.jpg"

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
        <Avatar
          alt="intro"
          src={pic}
          sx={{ width: "100px", height: "100px" }}
        />
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
            <Typography
              sx={{
                fontSize: 25,
                mb: "5px",
                fontWeight: 500,
                fontFamily: "'Noto Sans Indic Siyaq Numbers', sans-serif",
                color: "#013d39",
              }}
            >
              Mohamad Alkaadi
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    mr: 2,
                    fontFamily: "'Noto Sans Indic Siyaq Numbers', sans-serif",
                    fontWeight: 500,
                    color: "#97a1aa",
                    fontSize: "15px",
                  }}
                >
                  Birth:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "#013d39",
                    fontFamily: "'Noto Sans Indic Siyaq Numbers', sans-serif",
                  }}
                >
                  30 Apr 1993 (25yo)
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    mr: 1,
                    fontFamily: "'Noto Sans Indic Siyaq Numbers', sans-serif",
                    fontWeight: 500,
                    color: "#97a1aa",
                    fontSize: "15px",
                  }}
                >
                  Email:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "#013d39",
                    ml: "3px",
                    fontFamily: "'Noto Sans Indic Siyaq Numbers', sans-serif",
                  }}
                >
                  mohamadalkaadi@gmail.com
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    mr: 2,
                    fontFamily: "'Noto Sans Indic Siyaq Numbers', sans-serif",
                    fontWeight: 500,
                    color: "#97a1aa",
                    fontSize: "15px",
                  }}
                >
                  Phone:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "#013d39",
                    fontFamily: "'Noto Sans Indic Siyaq Numbers', sans-serif",
                  }}
                >
                  0912345677
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    mr: 1,
                    fontFamily: "'Noto Sans Indic Siyaq Numbers', sans-serif",
                    fontWeight: 500,
                    color: "#97a1aa",
                    fontSize: "15px",
                  }}
                >
                  Plan:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "#013d39",
                    ml: "21px",
                    fontFamily: "'Noto Sans Indic Siyaq Numbers', sans-serif",
                  }}
                >
                  Basic
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default OverCardOne
