import { Grid, Typography } from "@mui/material"
import React from "react"
function capitalizeFirstLetter(str) {
  if (str === undefined) {
    return ""
  }
  return str.charAt(0).toUpperCase() + str.slice(1)
}
const CardTwo = ({ info }) => {
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
          {capitalizeFirstLetter(info.sex)}
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
          {info.date_of_birth}
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
          {info.phone_number}
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
          {info.blood_type}
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
          {info.height} cm
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
          {info.weight} kg
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ width: "200px", pt: 4 }}>Allergies</Typography>
        <Typography
          sx={{
            width: "200px",
            borderBottom: "1px solid #e6e6e6",
            pb: 2,
            pt: "1px",
          }}
        >
          {info.allergies_exist ? "Yes" : "No"}
          {/* if yes make it a link that open a prompt that tels you what is the allergies */}
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
          {capitalizeFirstLetter(info.sub_plans)}
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
          {info.registered_date}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default CardTwo
