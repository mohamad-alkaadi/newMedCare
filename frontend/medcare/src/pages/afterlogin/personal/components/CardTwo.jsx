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
    <Grid
      container
      columns={6}
      sx={{
        pl: 4,
        pr: 4,
        pt: 7,
        pb: 10,
        backgroundColor: "white",
        boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
        borderRadius: 2,
        border: "1px solid #e6e6e6",
        height: "375px",
      }}
    >
      <Grid item xs={2}>
        <Typography
          sx={{
            width: "200px",
            fontFamily: "'Noto Sans Indic Siyaq Numbers', sans-serif",
            fontWeight: 500,
            color: "#97a1aa",
            fontSize: "15px",
          }}
        >
          Gender
        </Typography>
        <Typography
          sx={{
            width: "200px",
            borderBottom: "1px solid #e6e6e6",
            pb: 2,
            pt: "3px",
            fontSize: "17px",
            color: "#003d39",

            // color: "#7a7a7a",
          }}
        >
          {capitalizeFirstLetter(info.sex)}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          sx={{
            width: "200px",
            fontFamily: "'Noto Sans Indic Siyaq Numbers', sans-serif",
            fontWeight: 500,
            color: "#97a1aa",
            fontSize: "15px",
          }}
        >
          Birthday
        </Typography>
        <Typography
          sx={{
            width: "200px",
            borderBottom: "1px solid #e6e6e6",
            pb: 2,
            pt: "3px",
            fontSize: "17px",
            color: "#003d39",
          }}
        >
          {info.date_of_birth}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          sx={{
            width: "200px",
            fontFamily: "'Noto Sans Indic Siyaq Numbers', sans-serif",
            fontWeight: 500,
            color: "#97a1aa",
            fontSize: "15px",
          }}
        >
          Phone Number
        </Typography>
        <Typography
          sx={{
            width: "200px",
            borderBottom: "1px solid #e6e6e6",
            pb: 2,
            pt: "3px",
            fontSize: "17px",
            color: "#003d39",
          }}
        >
          {info.phone_number}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          sx={{
            width: "200px",
            pt: 4,
            fontFamily: "'Noto Sans Indic Siyaq Numbers', sans-serif",
            fontWeight: 500,
            color: "#97a1aa",
            fontSize: "15px",
          }}
        >
          Blood Type
        </Typography>
        <Typography
          sx={{
            width: "200px",
            borderBottom: "1px solid #e6e6e6",
            pb: 2,
            pt: "3px",
            fontSize: "17px",
            color: "#003d39",
          }}
        >
          {info.blood_type}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          sx={{
            width: "200px",
            pt: 4,
            fontFamily: "'Noto Sans Indic Siyaq Numbers', sans-serif",
            fontWeight: 500,
            color: "#97a1aa",
            fontSize: "15px",
          }}
        >
          Height
        </Typography>
        <Typography
          sx={{
            width: "200px",
            borderBottom: "1px solid #e6e6e6",
            pb: 2,
            pt: "3px",
            fontSize: "17px",
            color: "#003d39",
          }}
        >
          {info.height} cm
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          sx={{
            width: "200px",
            pt: 4,
            fontFamily: "'Noto Sans Indic Siyaq Numbers', sans-serif",
            fontWeight: 500,
            color: "#97a1aa",
            fontSize: "15px",
          }}
        >
          Weight
        </Typography>
        <Typography
          sx={{
            width: "200px",
            borderBottom: "1px solid #e6e6e6",
            pb: 2,
            pt: "3px",
            fontSize: "17px",
            color: "#003d39",
          }}
        >
          {info.weight} kg
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          sx={{
            width: "200px",
            pt: 4,
            fontFamily: "'Noto Sans Indic Siyaq Numbers', sans-serif",
            fontWeight: 500,
            color: "#97a1aa",
            fontSize: "15px",
          }}
        >
          Allergies
        </Typography>
        <Typography
          sx={{
            width: "200px",
            borderBottom: "1px solid #e6e6e6",
            pb: 2,
            pt: "3px",
            fontSize: "17px",
            color: "#003d39",
          }}
        >
          {info.allergies_exist ? "Yes" : "No"}
          {/* if yes make it a link that open a prompt that tels you what is the allergies */}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          sx={{
            width: "200px",
            pt: 4,
            fontFamily: "'Noto Sans Indic Siyaq Numbers', sans-serif",
            fontWeight: 500,
            color: "#97a1aa",
            fontSize: "15px",
          }}
        >
          Subscription Plan
        </Typography>
        <Typography
          sx={{
            width: "200px",
            borderBottom: "1px solid #e6e6e6",
            pb: 2,
            pt: "3px",
            fontSize: "17px",
            color: "#003d39",
          }}
        >
          {capitalizeFirstLetter(info.sub_plans)}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          sx={{
            width: "200px",
            pt: 4,
            fontFamily: "'Noto Sans Indic Siyaq Numbers', sans-serif",
            fontWeight: 500,
            color: "#97a1aa",
            fontSize: "15px",
          }}
        >
          Registered Date
        </Typography>
        <Typography
          sx={{
            width: "200px",
            borderBottom: "1px solid #e6e6e6",
            pb: 2,
            pt: "3px",
            // fontSize: "17px",
            color: "#003d39",
          }}
        >
          {info.registered_date}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default CardTwo
