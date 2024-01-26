import { Box, Grid } from "@mui/material"
import React, { useContext, useState } from "react"
import PrimaryAppBar from "../components/PrimaryAppBar"
import PrimaryDrawer from "../components/PrimaryDrawer"
import HistoryDataGrid from "./components/HistoryDataGrid"
// import { ActivePageContext, ActivePageContext } from "../AfterLogin"
import { UserContext } from "../../../App"

const History = ({ activePage, setActivePage }) => {
  const [activeBar, setActiveBar] = useState("History")

  const user = useContext(UserContext)
  user.setActivePage("history")

  return (
    <div>
      <Grid container columns={16}>
        <Grid item xs={2}>
          <PrimaryDrawer activePage={user.activePage} />
        </Grid>
        <Grid item xs={14}>
          <Box>
            <Grid container columns={12}>
              <Grid item xs={12}>
                <PrimaryAppBar
                  activeBar={activeBar}
                  setActiveBar={setActiveBar}
                />
              </Grid>
              <Grid item xs={12} sx={{ backgroundColor: "#f2f5f9" }}>
                <HistoryDataGrid />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default History
