// import React from "react"
import PrimaryAppBar from "../components/PrimaryAppBar"
import { Box, Grid } from "@mui/material"

import React, { useState } from "react"
import OverviewBar from "./components/overviewBar"
import Calendar from "./components/Calendar"
import OverCardOne from "./components/OverCardOne"
import OverCardTwo from "./components/OverCardTwo"
import OverCardThree from "./components/OverCardThree"
import OverCardFour from "./components/OverCardFour"
import OverCardFiveDouble from "./components/OverCardFiveDouble"
import OverCardSix from "./components/OverCardSix"
import OverCardSeven from "./components/OverCardSeven"

const Overview = ({ activePage, setActivePage }) => {
  const [activeBar, setActiveBar] = useState("Overview")

  setActivePage("overview")

  return (
    <div>
      <Box sx={{ backgroundColor: "#f2f5f9" }}>
        <Grid container columns={12}>
          <Grid item xs={12}>
            <PrimaryAppBar activeBar={activeBar} setActiveBar={setActiveBar} />
          </Grid>
          <Grid item xs={12}>
            <Grid container columns={15}>
              <Grid item xs={11}>
                <Grid container columns={15}>
                  <Grid item xs={10} sx={{ pl: 2, pt: 2, pr: 2, pb: 2 }}>
                    <OverCardOne />
                  </Grid>
                  <Grid item xs={5} sx={{ pt: 2, pr: 2, pb: 2 }}>
                    <OverCardTwo />
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sx={{
                      pl: 2,
                      pb: 2,
                    }}
                  >
                    <OverCardFour />
                  </Grid>
                  <Grid
                    item
                    xs={10}
                    sx={{
                      pl: 2,
                      pb: 2,
                      pr: 2,
                    }}
                  >
                    <OverCardThree />
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sx={{
                      pl: 2,
                      pb: 2,
                      pr: 2,
                    }}
                  >
                    <OverCardFiveDouble />
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sx={{
                      pl: 2,
                      pb: 2,
                      pr: 2,
                    }}
                  >
                    <OverCardSeven />
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sx={{
                      pb: 2,
                      pr: 2,
                    }}
                  >
                    <OverCardSix />
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
