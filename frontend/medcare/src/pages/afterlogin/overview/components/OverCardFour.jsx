import { Box, Grid, List, ListItem, Typography } from "@mui/material"
import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../../App"

const OverCardFour = () => {
  const [medication, setMedication] = useState([])
  const user = useContext(UserContext)
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8080/api/medication/?patient=${user.userId}`
      )
      setMedication(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
        borderRadius: "6px 6px 6px 6px",
        height: 340,
      }}
    >
      <Typography
        sx={{
          pl: 4,
          pt: 2,
          color: "#00544f",
          fontSize: "22px",
        }}
      >
        Current Prescription
      </Typography>
      <List sx={{ pl: 2, pt: 2 }}>
        {medication.map((med) => (
          <ListItem>
            <Box
              sx={{
                backgroundColor: "#068466",
                width: 20,
                height: 20,
                borderRadius: "100%",
                mr: 3,
              }}
            ></Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "19px",
                  fontFamily: "'Rubik', sans-serif",
                  color: "#068466",
                }}
              >
                {med.medicine_prescribed}
              </Typography>
              <Typography sx={{ color: "#aaaaaa", fontSize: "12px" }}>
                {med.how_many}x per day - every {med.time_between} hours
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default OverCardFour
