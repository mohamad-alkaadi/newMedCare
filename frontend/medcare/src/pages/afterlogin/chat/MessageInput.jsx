import { IconButton } from "@mui/material"
import React from "react"
import SendIcon from "@mui/icons-material/Send"
const MessageInput = () => {
  return (
    <div className="p-3">
      <input
        type="text"
        className="focus:outline-none focus:border-none w-[1280px]"
        placeholder="write a message"
      />
      <IconButton>
        <SendIcon sx={{ color: "#185e4d" }} />
      </IconButton>
    </div>
  )
}

export default MessageInput
