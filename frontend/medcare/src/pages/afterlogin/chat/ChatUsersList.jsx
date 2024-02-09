import { AppBar, Box, Drawer, List, ListItem } from "@mui/material"
import React, { useEffect, useState } from "react"
import ChatUser from "./ChatUser"
import axios from "axios"
const ChatUsersList = ({
  setDoctorUserId,
  doctorList,
  setActiveUser,
  activeUser,
  getMessages,
}) => {
  const [activeUserStyle, setActiveUserStyle] = useState(null)
  console.log("style", activeUserStyle)
  console.log(activeUser)
  return (
    <Box>
      <Box
        sx={{
          pl: 3,
          pt: 2,
          pb: 2,
          fontSize: "18px",
          borderBottom: "1px solid #e6e6e6",
          color: "#00514c",
        }}
      >
        Doctor List
      </Box>
      <Box sx={{ height: "812px", overflow: "auto" }}>
        <List>
          {doctorList.map((doctor) => (
            <ListItem
              key={doctor.doctor.id}
              sx={{
                bgcolor: doctor.doctor.id === 3 ? "#068466" : "#fff",
              }}
              onClick={() => getMessages}
            >
              <ChatUser
                userid={doctor.doctor.user_id}
                name={doctor.doctor.name}
                specialization={doctor.doctor.specialization}
                setDoctorUserId={setDoctorUserId}
                setActiveUser={setActiveUser}
                activeUser={activeUser}
                setActiveUserStyle={setActiveUserStyle}
                activeUserStyle={activeUserStyle}
                id={doctor.doctor.id}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  )
}

export default ChatUsersList
