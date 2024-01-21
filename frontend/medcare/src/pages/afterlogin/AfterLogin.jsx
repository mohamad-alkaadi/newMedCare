import React, { useState } from "react"
import Personal from "./personal/Personal"
import PrimaryAppBar from "./components/PrimaryAppBar"
import PrimaryDrawer from "./components/PrimaryDrawer"
import { Grid } from "@mui/material"
import Overview from "./overview/Overview"
import History from "./History/History"

const AfterLogin = () => {
  const [activePage, setActivePage] = useState("")

  return (
    <div>
      <Grid container columns={16}>
        {/* <PrimaryAppBar activePage={activePage} /> */}
        <Grid item xs={2}>
          <PrimaryDrawer activePage={activePage} />
        </Grid>
        <Grid item xs={14}>
          {/* <Personal activePage={activePage} setActivePage={setActivePage} /> */}
          <Overview activePage={activePage} setActivePage={setActivePage} />
          {/* <History activePage={activePage} setActivePage={setActivePage} /> */}
        </Grid>
      </Grid>
    </div>
  )
}

export default AfterLogin
