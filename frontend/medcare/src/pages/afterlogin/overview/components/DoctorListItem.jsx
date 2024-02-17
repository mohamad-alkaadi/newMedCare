import { Box, Grid, Typography } from "@mui/material"
import React from "react"
import docOne from "../../../../assets/docOne.png"
import docTwo from "../../../../assets/docOne.png"
const DoctorListItem = ({ name, specialization }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 1,
          ml: 1,
        }}
      >
        <img className="w-[50px] rounded-[100%]" src={docOne} />
        <div className="grid ml-3">
          <Typography
            sx={{
              fontSize: "23px",
              color: "#013d39",
              fontFamily: "'Noto Sans Indic Siyaq Numbers', sans-serif",
            }}
          >
            Dr. {name}
          </Typography>
          <Typography
            sx={{ color: "#aaaaaa", fontSize: "12px" }}
            className="text-[13px]"
          >
            {specialization}
          </Typography>
        </div>
      </Box>
    </Box>
  )
}

export default DoctorListItem
