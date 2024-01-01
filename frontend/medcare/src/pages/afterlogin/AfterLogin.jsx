import React, { useState } from "react"
import Personal from "./personal/Personal"
import PrimaryAppBar from "./components/PrimaryAppBar"
import PrimaryDrawer from "./components/PrimaryDrawer"
import { Grid } from "@mui/material"

const AfterLogin = () => {
  const [activePage, setActivePage] = useState("personal")
  return (
    <div>
      <Grid container columns={16}>
        {/* <PrimaryAppBar activePage={activePage} /> */}
        <Grid item xs={2} sx={{ backgroundColor: "red" }}>
          <PrimaryDrawer />
        </Grid>
        <Grid item xs={14}>
          <Personal />
        </Grid>
      </Grid>
    </div>
  )
}

export default AfterLogin
