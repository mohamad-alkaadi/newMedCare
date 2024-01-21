import { Box, Grid, Typography } from "@mui/material"
import React from "react"
import docOne from "../../../../assets/docOne.png"
import docTwo from "../../../../assets/docOne.png"
const DoctorListItem = () => {
  return (
    <Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img className="w-[60px] rounded-[100%]" src={docOne} />
        <div className="grid ml-3">
          <p className="text-[27px]">dr. suzan ahmad</p>
          <p className="text-[13px]">nural</p>
        </div>
      </Box>
    </Box>
  )
}

export default DoctorListItem
