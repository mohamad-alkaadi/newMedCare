import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material"
import React, { useState } from "react"

const OverCardThreeSelect = () => {
  const [age, setAge] = useState("")
  const [specialization, setSpecialization] = useState("")

  const handleChange = (event) => {
    setAge(event.target.value)
  }
  const handleSpecializationChange = (event) => {
    setSpecialization(event.target.value)
  }
  return (
    <form className="h-[100%]" action="">
      <Box
        sx={{
          height: "100%",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
            borderRadius: "6px 6px 6px 6px",
            display: "grid",
            justifyContent: "center",
            width: 280,
            height: 300,
            pt: 2,
            pb: 2,
          }}
        >
          <Typography sx={{ mb: 1, fontSize: 20, fontWeight: 600 }}>
            Search a hospital
          </Typography>
          <FormControl sx={{ width: 230 }}>
            <InputLabel id="demo-simple-select-label">Rating</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>1 star</MenuItem>
              <MenuItem value={20}>2 star</MenuItem>
              <MenuItem value={30}>3 star</MenuItem>
              <MenuItem value={40}>4 star</MenuItem>
              <MenuItem value={50}>5 star</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="specialization">Specialization</InputLabel>
            <Select
              labelId="specialization"
              id="specialization"
              value={specialization}
              label="Specialization"
              onChange={handleSpecializationChange}
            >
              <MenuItem value={10}>General</MenuItem>
              <MenuItem value={20}>Eye</MenuItem>
              <MenuItem value={30}>Skin</MenuItem>
              <MenuItem value={30}>Children</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo">Hospital type</InputLabel>
            <Select
              labelId="demo"
              id="demo"
              value={specialization}
              label="Specialization"
              onChange={handleSpecializationChange}
            >
              <MenuItem value={10}>Public</MenuItem>
              <MenuItem value={20}>Private</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
        </Box>
      </Box>
    </form>
  )
}

export default OverCardThreeSelect
