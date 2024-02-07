import { Box, Grid } from "@mui/material"
import React, { useContext, useState, useEffect } from "react"
import Message from "./Message"
import MessageInput from "./MessageInput"
import WebSocket from "ws"
import { UserContext } from "../../../App"
const messageOne = "hello"
const messageTwo = "hi"
const messageThree = "How are you"
const messageFour = "fine"
const ChatArea = ({ activeUser, doctorUserId }) => {
  const user = useContext(UserContext)

  return (
    <>
      {activeUser ? (
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
            Dr. {activeUser}
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
            <Message sent message={messageOne} />
            <Message received message={messageTwo} />
            <Message sent message={messageThree} />
            <Message received message={messageFour} />
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
            <MessageInput />
          </Box>
        </>
      ) : (
        <div className="bg-[#bdbdbd] w-[1344px] h-[872px]"></div>
      )}
    </>
  )
}

export default ChatArea
