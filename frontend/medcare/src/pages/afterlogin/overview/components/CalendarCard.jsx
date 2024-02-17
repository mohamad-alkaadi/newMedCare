import { Box, Grid, List, ListItem, Typography } from "@mui/material"
import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../../App"

const CalendarCard = () => {
  const [appointmentsUpcoming, setAppointmentsUpcoming] = useState([])
  const user = useContext(UserContext)

  // Use state to store grouped appointments
  const [groupedAppointments, setGroupedAppointments] = useState({})
  const formatTime = (time) => {
    return time.slice(0, 5)
  }

  const fetchData = async () => {
    try {
      const responseUpcoming = await axios.get(
        `http://127.0.0.1:8080/api/appointment/?patient=${user.userId}&upcoming=True`
      )

      setAppointmentsUpcoming(responseUpcoming.data)
      // Group appointments by date after fetching data
      const groupedData = responseUpcoming.data.reduce((acc, appointment) => {
        const date = appointment.date
        if (!acc[date]) {
          acc[date] = []
        }
        acc[date].push(appointment)
        return acc
      }, {})
      setGroupedAppointments(groupedData)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Box sx={{ ml: 1 }}>
      <Grid container columns={8}>
        <Grid item xs={8}>
          <List>
            {/* Iterate over grouped appointments object */}
            {Object.entries(groupedAppointments).map(([date, appointments]) => (
              <>
                <ListItem
                  sx={{
                    fontFamily: "'Noto Sans Indic Siyaq Numbers', sans-serif",
                    fontWeight: 500,
                    color: "#97a1aa",
                  }}
                >
                  {date}
                </ListItem>
                <List>
                  {/* Render appointments for each date */}
                  {appointments.map((appointment) => (
                    <ListItem key={appointment.id}>
                      <Grid container columns={5}>
                        <Grid item xs={1} sx={{ color: "#00514c" }}>
                          {formatTime(appointment.time)}
                        </Grid>
                        <Grid item xs={4}>
                          <Box sx={{ pl: 2, borderLeft: "2px solid #068466" }}>
                            <Typography
                              sx={{
                                fontFamily:
                                  "'Noto Sans Indic Siyaq Numbers', sans-serif",
                                fontWeight: 500,
                                color: "#97a1aa",
                                fontSize: "14px",
                              }}
                            >
                              {appointment.doctor.specialization}
                            </Typography>
                            <Typography
                              sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                color: "#00514c",
                              }}
                            >
                              Dr. {appointment.doctor.name}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </ListItem>
                  ))}
                </List>
              </>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CalendarCard
