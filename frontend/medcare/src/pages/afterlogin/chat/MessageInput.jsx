import { IconButton } from "@mui/material"
import React, { useEffect, useState } from "react"
import SendIcon from "@mui/icons-material/Send"
import axios from "axios"

const MessageInput = ({ patientId, doctorId, getMessages, activeUser }) => {
  const [messageValue, setMessageValue] = useState("")

  console.log(patientId)
  const sendMessages = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8080/chat/", {
        sender: "patient",
        message: `${messageValue}`,
        doctor: `${doctorId}`,
        patient: `${activeUser}`,
      })
      setMessageValue(response.data)
      getMessages()
      setMessageValue("")
    } catch (error) {
      console.log(error)
    }
  }
  // useEffect(() => {
  //   document.addEventListener("click", () => {
  //     getMessages()
  //   })
  // }, [])
  return (
    <div className="p-3">
      <input
        type="text"
        className="focus:outline-none focus:border-none w-[1280px]"
        placeholder="write a message"
        value={messageValue}
        onChange={(e) => setMessageValue(e.target.value)}
      />
      <IconButton onClick={sendMessages}>
        <SendIcon sx={{ color: "#185e4d" }} />
      </IconButton>
    </div>
  )
}

export default MessageInput
