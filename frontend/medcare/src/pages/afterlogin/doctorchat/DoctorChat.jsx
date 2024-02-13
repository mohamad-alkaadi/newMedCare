import { Box, Grid } from "@mui/material"
import React, { useContext, useState, useEffect } from "react"
import { UserContext } from "../../../App"
import PrimaryAppBar from "../components/PrimaryAppBar"

import axios from "axios"
import DoctorChatUsersList from "./DoctorChatUsersList"
import DoctorChatArea from "./DoctorChatArea"
const DoctorChat = () => {
  const [activeBar, setActiveBar] = useState("Chat")
  const [doctorUserId, setDoctorUserId] = useState(0)
  const [doctorList, setDoctorList] = useState([])
  // const [activeUser, setActiveUser] = useState()
  const [messages, setMessages] = useState([])

  const user = useContext(UserContext)
  user.setActivePage("chat")

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8080/api/doctor_list/")
      setDoctorList(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const getMessages = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8080/chat?doctor=${user.doctorId}&patient=${user.userId}`
      )
      setMessages(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <Grid container columns={15}>
        <Grid item xs={15}>
          <PrimaryAppBar activeBar={activeBar} setActiveBar={setActiveBar} />
        </Grid>

        <Grid item xs={3} sx={{ borderRight: "1px solid #e6e6e6" }}>
          <DoctorChatUsersList
            setDoctorUserId={setDoctorUserId}
            doctorList={doctorList}
            setDoctorList={setDoctorList}
            activeUser={user.userId}
            // setActiveUser={setActiveUser}
            getMessages={getMessages}
          />
        </Grid>
        <Grid item xs={12}>
          <DoctorChatArea
            activeUser={user.userId}
            doctorUserId={doctorUserId}
            getMessages={getMessages}
            messages={messages}
            setMessages={setMessages}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default DoctorChat
