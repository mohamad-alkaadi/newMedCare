import { Avatar, Box, Button, Grid, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import PrimaryAppBar from "../components/PrimaryAppBar"
import hello from "../../../assets/temp.jpg"
import CardTwo from "./components/CardTwo"
import CardThree from "./components/CardThree"
import CardFour from "./components/CardFour"
import CardOne from "./components/CardOne"
import CardFive from "./components/CardFive"
import axios from "axios"

const Personal = () => {
  const [info, setInfo] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [activePage, setActivePage] = useState("Personal Details")

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/patient/1/")
      setInfo(response.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  console.log(info)

  return (
    <Box sx={{ backgroundColor: "#f2f5f9", pb: 5 }}>
      <PrimaryAppBar activePage={activePage} setActivePage={setActivePage} />
      <Grid container columns={15} sx={{ pt: 2, p: 2 }}>
        <Grid
          sx={{
            border: "1px solid #e6e6e6",
            pb: 2,
            mb: "12px",
            borderRadius: 2,
            backgroundColor: "white",
            boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
          }}
          item
          xs={3}
        >
          <CardOne info={info} />
        </Grid>
        <Grid
          item
          xs={7}
          sx={{
            pr: 2,
            pl: 2,
          }}
        >
          <CardTwo info={info} />
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            border: "1px solid #e6e6e6",
            pb: 2,
            borderRadius: 2,
            backgroundColor: "white",
            boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          <CardThree />
        </Grid>
        <Grid
          item
          xs={10}
          sx={{
            pr: 2,
            pt: 1,
          }}
        >
          <CardFour info={info} />
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            backgroundColor: "white",
            mt: 2,
            borderRadius: 2,
            boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          <CardFive />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Personal
