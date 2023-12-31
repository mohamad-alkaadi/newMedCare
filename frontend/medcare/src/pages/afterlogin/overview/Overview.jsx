// import React from "react"
import PrimaryAppBar from "../components/PrimaryAppBar"
import { Box, Grid } from "@mui/material"

import React, { useState } from "react"
import OverviewBar from "./components/overviewBar"
import Calendar from "./components/Calendar"
import OverCardOne from "./components/OverCardOne"
import OverCardTwo from "./components/OverCardTwo"
const Overview = () => {
  const [activePage, setActivePage] = useState("Overview")

  return (
    <div>
      <Box sx={{ backgroundColor: "#f2f5f9" }}>
        <Grid container columns={12}>
          <Grid item xs={12}>
            <PrimaryAppBar
              activePage={activePage}
              setActivePage={setActivePage}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container columns={15}>
              <Grid item xs={11}>
                <Grid container columns={15}>
                  <Grid
                    item
                    xs={10}
                    sx={{ backgroundColor: "red", pl: 2, pt: 2, pr: 2, pb: 2 }}
                  >
                    <OverCardOne />
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sx={{ backgroundColor: "red", pt: 2, pr: 2, pb: 2 }}
                  >
                    <OverCardTwo />
                  </Grid>
                  <Grid item xs={2} sx={{ backgroundColor: "lightcyan" }}>
                    x
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    sx={{ backgroundColor: "lightgoldenrodyellow" }}
                  >
                    x
                  </Grid>
                  <Grid item xs={2} sx={{ backgroundColor: "lightblue" }}>
                    x
                  </Grid>
                  <Grid item xs={2} sx={{ backgroundColor: "lightblue" }}>
                    x
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Calendar />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Overview
