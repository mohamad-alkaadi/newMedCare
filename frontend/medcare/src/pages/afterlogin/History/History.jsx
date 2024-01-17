import { Box, Grid } from "@mui/material"
import React, { useState } from "react"
import PrimaryAppBar from "../components/PrimaryAppBar"
import HistoryDataGrid from "./components/HistoryDataGrid"

const History = ({ activePage, setActivePage }) => {
  const [activeBar, setActiveBar] = useState("History")

  setActivePage("history")

  return (
    <Box>
      <Grid container columns={12}>
        <Grid item xs={12}>
          <PrimaryAppBar activeBar={activeBar} setActiveBar={setActiveBar} />
        </Grid>
        <Grid item xs={12} sx={{ backgroundColor: "#f2f5f9" }}>
          <HistoryDataGrid />
        </Grid>
      </Grid>
    </Box>
  )
}

export default History
