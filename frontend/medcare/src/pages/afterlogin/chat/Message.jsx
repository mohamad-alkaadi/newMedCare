import { Box } from "@mui/material"
import React from "react"

const Message = ({ sender, message }) => {
  return (
    <div
      className={`text-white ${
        sender === "patient"
          ? "mr-5 mt-5 p-2 bg-[#068466] justify-self-end self-end rounded-[10%] rounded-br-none"
          : "ml-5 mt-5 p-2 bg-[#185e4d] justify-self-end self-start rounded-[10%] rounded-bl-none"
      }`}
    >
      {message}
    </div>
  )
}

export default Message
