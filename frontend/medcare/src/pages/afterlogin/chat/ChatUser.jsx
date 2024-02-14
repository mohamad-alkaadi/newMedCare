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
  setStyle,
  index,
}) => {
  console.log(activeUser)
  const user = useContext(UserContext)
  const isActiveUser = activeUserStyle === name
  // if (activeUserStyle === name) {
  //   setStyle(true)
  // } else {
  //   setStyle(false)
  // }
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
        sx={{
          bgcolor: isActiveUser ? "#068466" : "#fff",
          width: "100%",
          display: "flex",
          justifyContent: "start",
          "&:hover": {
            bgcolor: isActiveUser ? "#068466" : "#08a580",
          },
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Avatar sx={{ width: 48, height: 48 }}></Avatar>
          <Box sx={{ ml: 2, color: "black", alignSelf: "center" }}>
            <Typography
              sx={{
                fontSize: "15px",
                color: isActiveUser ? "#fff" : "#00514c",
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
                color: isActiveUser ? "#fff" : "#00514c",

                // color: id === 3 ? "#fff" : "black",
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
