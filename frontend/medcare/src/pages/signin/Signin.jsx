import React, { useState } from "react"
import { useAppWindowSize } from "../../customHooks/useAppWindowSize"
import { Box, Grid, TextField, Typography } from "@mui/material"
import axios from "axios"
const SignIn = ({ userId, setUserId }) => {
  const [usernameInput, setUsernameInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const size = useAppWindowSize()
  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post("http://127.0.0.1:8000/login/", {
        username: usernameInput,
        password: passwordInput,
      })
      .then((response) => setUserId(response.data.patient[0].id))
      .catch((error) => console.error(error))
  }
  return (
    <Box
      sx={{
        width: size.width,
        height: size.height,
        backgroundColor: "#ecfafe",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "496px",
          height: "517px",
          backgroundColor: "#fff",
          boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            // mt: "2.375rem",
            mt: 10,
            fontFamily: "'Comfortaa', cursive",
            fontSize: "2.2em",
            color: "#00544f",
            mb: 5,
          }}
        >
          MedCare
        </Typography>
        <form className="w-[100%]" onSubmit={handleSubmit}>
          <div className="w-[100%] grid justify-center mb-[1px]">
            <input
              type="text"
              placeholder="Username"
              className="pl-[1rem] w-[400px] h-[54px] border-[1px] border-[#f1f1f1] focus:outline-none focus:border-[#00544f]"
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
            />
          </div>
          <div className="w-[100%] grid justify-center mb-4">
            <input
              type="password"
              placeholder="Password"
              className="pl-[1rem] w-[400px] h-[54px] border-[1px] border-[#f1f1f1] focus:outline-none focus:border-[#00544f]"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </div>
          <div className="w-[100%] grid justify-center mb-[1px]">
            <button
              type="submit"
              className=" w-[400px] h-[54px] bg-[#00544f] text-white hover:bg-[#007e78] text-[.9rem]"
            >
              SIGN IN
            </button>
          </div>
        </form>
      </Box>
    </Box>
  )
}

export default SignIn
