import { Avatar, Box, Button, Typography } from "@mui/material"
import React, { useContext, useEffect } from "react"
import { UserContext } from "../../../App"

const ChatUser = ({
  userid,
  name,
  specialization,
  setDoctorUserId,
  setActiveUser,
  activeUser,
  activeUserStyle,
  setActiveUserStyle,
  id,
  getMessages,
}) => {
  console.log(activeUser)
  const user = useContext(UserContext)

  return (
    <>
      <Button
        onClick={() => {
          setDoctorUserId(id)
          // setActiveUser(name)
          setActiveUserStyle(name)
          user.setDoctorId(id)
          user.setDoctorName(name)
          getMessages()
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Avatar sx={{ width: 48, height: 48 }}></Avatar>
          <Box sx={{ ml: 2, color: "black", alignSelf: "center" }}>
            <Typography
              sx={{
                fontSize: "15px",
                color: id === 3 ? "#fff" : "black",
              }}
            >
              Dr. {name}
            </Typography>
            <Typography
              sx={{
                textAlign: "start",
                fontSize: "10px",
                ml: "1px",
                textTransform: "none",
                color: id === 3 ? "#fff" : "black",
              }}
            >
              {specialization}
            </Typography>
          </Box>
        </Box>
      </Button>
    </>
  )
}

export default ChatUser
