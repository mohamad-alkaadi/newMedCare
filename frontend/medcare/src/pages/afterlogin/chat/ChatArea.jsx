import { Box, Grid } from "@mui/material"
import React, { useContext, useState, useEffect } from "react"
import Message from "./Message"
import MessageInput from "./MessageInput"
import WebSocket from "ws"
import { UserContext } from "../../../App"
const ChatArea = ({
  activeUser,
  doctorUserId,
  getMessages,
  messages,
  setMessages,
}) => {
  const user = useContext(UserContext)
  console.log("user id", user.userId)
  // useEffect(() => {
  //   getMessages()
  // }, [])
  return (
    <>
      {user.doctorName ? (
        <>
          <Box
            sx={{
              pl: 1,
              pt: 2,
              pb: 2,
              fontSize: "18px",
              borderBottom: "1px solid #e6e6e6",
              color: "#00514c",
            }}
          >
            Dr. {user.doctorName}
          </Box>

          <Box
            sx={{
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
              height: "749px",
              bgcolor: "#e6e6e6",
              pb: 2,
            }}
          >
            {messages.map((message) => (
              <Message sender={message.sender} message={message.message} />
            ))}
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              bgcolor: "#fff",
              width: "1344px",
              borderTop: "1px solid #e6e6e6",
            }}
          >
            <MessageInput
              patientId={user.id}
              doctorId={user.doctorId}
              getMessages={getMessages}
              activeUser={user.userId}
            />
          </Box>
        </>
      ) : (
        <div className="bg-[#bdbdbd] w-[1344px] h-[872px]"></div>
      )}
    </>
  )
}

export default ChatArea
