import { Grid, Typography } from "@mui/material"
import React from "react"

const CardTwo = () => {
  return (
    <Grid container columns={6} sx={{ pl: 4, pr: 4, pt: 7 }}>
      <Grid item xs={2}>
        <Typography sx={{ width: "200px" }}>Gender</Typography>
        <Typography
          sx={{
            width: "200px",
            borderBottom: "1px solid #e6e6e6",
            pb: 2,
            pt: "1px",
          }}
        >
          Male
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ width: "200px" }}>Birthday</Typography>
        <Typography
          sx={{
            width: "200px",
            borderBottom: "1px solid #e6e6e6",
            pb: 2,
            pt: "1px",
          }}
        >
          1998-06-20
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ width: "200px" }}>Phone Number</Typography>
        <Typography
          sx={{
            width: "200px",
            borderBottom: "1px solid #e6e6e6",
            pb: 2,
            pt: "1px",
          }}
        >
          123-123451234
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ width: "200px", pt: 4 }}>Blood Type</Typography>
        <Typography
          sx={{
            width: "200px",
            borderBottom: "1px solid #e6e6e6",
            pb: 2,
            pt: "1px",
          }}
        >
          A-
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ width: "200px", pt: 4 }}>Height</Typography>
        <Typography
          sx={{
            width: "200px",
            borderBottom: "1px solid #e6e6e6",
            pb: 2,
            pt: "1px",
          }}
        >
          1,73
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ width: "200px", pt: 4 }}>Weight</Typography>
        <Typography
          sx={{
            width: "200px",
            borderBottom: "1px solid #e6e6e6",
            pb: 2,
            pt: "1px",
          }}
        >
          70
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ width: "200px", pt: 4 }}>Allergy</Typography>
        <Typography
          sx={{
            width: "200px",
            borderBottom: "1px solid #e6e6e6",
            pb: 2,
            pt: "1px",
          }}
        >
          Banana
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ width: "200px", pt: 4 }}>
          Subscription Plan
        </Typography>
        <Typography
          sx={{
            width: "200px",
            borderBottom: "1px solid #e6e6e6",
            pb: 2,
            pt: "1px",
          }}
        >
          Standard
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ width: "200px", pt: 4 }}>Registered Date</Typography>
        <Typography
          sx={{
            width: "200px",
            borderBottom: "1px solid #e6e6e6",
            pb: 2,
            pt: "1px",
          }}
        >
          2022-11-01
        </Typography>
      </Grid>
    </Grid>
  )
}

export default CardTwo
