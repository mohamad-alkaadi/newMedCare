import React, { useState } from "react"
import Personal from "./personal/Personal"
import PrimaryAppBar from "./components/PrimaryAppBar"
import PrimaryDrawer from "./components/PrimaryDrawer"
import { Grid } from "@mui/material"
import Overview from "./overview/Overview"

const AfterLogin = () => {
  return (
    <div>
      <Grid container columns={16}>
        {/* <PrimaryAppBar activePage={activePage} /> */}
        <Grid item xs={2} sx={{ backgroundColor: "red" }}>
          <PrimaryDrawer />
        </Grid>
        <Grid item xs={14}>
          {/* <Personal /> */}
          <Overview />
        </Grid>
      </Grid>
    </div>
  )
}

export default AfterLogin
