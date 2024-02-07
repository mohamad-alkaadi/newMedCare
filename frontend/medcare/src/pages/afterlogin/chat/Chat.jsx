import { Box, Grid } from "@mui/material"
import React, { useContext, useState, useEffect } from "react"
import PrimaryDrawer from "../components/PrimaryDrawer"
import { UserContext } from "../../../App"
import PrimaryAppBar from "../components/PrimaryAppBar"
import ChatUsersList from "./ChatUsersList"
import ChatArea from "./ChatArea"
import axios from "axios"
const Chat = () => {
  const [activeBar, setActiveBar] = useState("Chat")
  const [doctorUserId, setDoctorUserId] = useState(0)
  const [doctorList, setDoctorList] = useState([])
  const [activeUser, setActiveUser] = useState()

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

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Grid container columns={16}>
        <Grid item xs={2}>
          <PrimaryDrawer activePage={user.activePage} />
        </Grid>
        <Grid item xs={14}>
          <Box>
            <Grid container columns={15}>
              <Grid item xs={15}>
                <PrimaryAppBar
                  activeBar={activeBar}
                  setActiveBar={setActiveBar}
                />
              </Grid>

              <Grid item xs={3} sx={{ borderRight: "1px solid #e6e6e6" }}>
                <ChatUsersList
                  setDoctorUserId={setDoctorUserId}
                  doctorList={doctorList}
                  setDoctorList={setDoctorList}
                  activeUser={activeUser}
                  setActiveUser={setActiveUser}
                />
              </Grid>
              <Grid item xs={12}>
                <ChatArea activeUser={activeUser} doctorUserId={doctorUserId} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Chat
