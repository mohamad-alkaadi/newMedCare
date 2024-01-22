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
          <Typography
            sx={{
              mb: 1,
              fontSize: 20,
              fontWeight: 600,
              color: "#00524d",
              fontFamily: "'Noto Sans Indic Siyaq Numbers', sans-serif",
            }}
          >
            Search a hospital
          </Typography>
          <FormControl sx={{ width: 230 }}>
            <InputLabel id="demo-simple-select-label">Rating</InputLabel>
            <Select
              color="success"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
              sx={{ boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)", mb: "3px" }}
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
              color="success"
              labelId="specialization"
              id="specialization"
              value={specialization}
              label="Specialization"
              onChange={handleSpecializationChange}
              sx={{
                boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
                mb: "3px",
              }}
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
              color="success"
              id="demo"
              value={specialization}
              label="Specialization"
              onChange={handleSpecializationChange}
              sx={{
                boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
                mb: "3px",
              }}
            >
              <MenuItem value={10}>Public</MenuItem>
              <MenuItem value={20}>Private</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: "#00524d",
              height: "50px",
              fontSize: "15px",
              "&:hover": {
                bgcolor: "#068466",
              },
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
    </form>
  )
}

export default OverCardThreeSelect
