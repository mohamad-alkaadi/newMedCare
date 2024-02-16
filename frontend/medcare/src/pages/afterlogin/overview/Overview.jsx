// import React from "react"
import PrimaryAppBar from "../components/PrimaryAppBar"
import { Box, Grid } from "@mui/material"

import React, { useContext, useEffect, useState } from "react"
import OverviewBar from "./components/overviewBar"
import Calendar from "./components/Calendar"
import OverCardOne from "./components/OverCardOne"
import OverCardTwo from "./components/OverCardTwo"
import OverCardThree from "./components/OverCardThree"
import OverCardFour from "./components/OverCardFour"
import OverCardFiveDouble from "./components/OverCardFiveDouble"
import PrimaryDrawer from "../components/PrimaryDrawer"

import OverCardSix from "./components/OverCardSix"
import OverCardSeven from "./components/OverCardSeven"
// import { ActivePageContext } from "../AfterLogin"
import { UserContext } from "../../../App"
import axios from "axios"
const Overview = () => {
  const [activeBar, setActiveBar] = useState("Overview")
  const [info, setInfo] = useState("")
  const user = useContext(UserContext)
  user.setActivePage("overview")
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8080/api/patient/${user.userId}/`
      )
      setInfo(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <Grid container columns={16}>
        <Grid item xs={2}>
          <PrimaryDrawer activePage={user.activePage} />
        </Grid>
        <Grid item xs={14}>
          <div>
            <Box sx={{ backgroundColor: "#f2f5f9" }}>
              <Grid container columns={12}>
                <Grid item xs={12}>
                  <PrimaryAppBar
                    activeBar={activeBar}
                    setActiveBar={setActiveBar}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Grid container columns={15}>
                    <Grid item xs={11}>
                      <Grid container columns={15}>
                        <Grid item xs={10} sx={{ pl: 2, pt: 2, pr: 2, pb: 2 }}>
                          <OverCardOne
                            first_name={info.first_name}
                            last_name={info.last_name}
                            dob={info.date_of_birth}
                            phone={info.phone_number}
                            email={info.email}
                            plan={info.sub_plans}
                          />
                        </Grid>
                        <Grid item xs={5} sx={{ pt: 2, pr: 2, pb: 2 }}>
                          <OverCardTwo
                            blood={info.blood_type}
                            height={info.height}
                            weight={info.weight}
                            allergies={info.allergies}
                          />
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
        </Grid>
      </Grid>
    </div>
  )
}

export default Overview
