import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import DoctorListItem from "./DoctorListItem"
import AddIcon from "@mui/icons-material/Add"
import axios from "axios"
const OverCardSeven = () => {
  const [doctorList, setDoctorList] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8080/api/doctor_list/")
      setDoctorList(response.data)
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
        bgcolor: "white",
        boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
        borderRadius: "6px 6px 6px 6px",
        height: 304,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ color: "#00544f", fontSize: "20px", ml: 3, mt: "11px" }}
        >
          Current Doctors
        </Typography>
        <Button
          size="small"
          sx={{ textTransform: "none", color: "#068466", mr: 2, mt: "11px" }}
          startIcon={<AddIcon />}
        >
          Add Doctor
        </Button>
      </Box>
      <Box sx={{ overflow: "auto", height: "240px" }}>
        <List>
          {doctorList.map((data) => (
            <ListItem>
              <DoctorListItem
                name={data.name}
                specialization={data.specialization}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  )
}

export default OverCardSeven
