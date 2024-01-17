import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material"
import { format } from "date-fns"
import React, { useEffect, useState } from "react"
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined"
import axios from "axios"
const CardFour = ({ info }) => {
  const [buttonOneActive, setButtonOneActive] = useState(true)
  const [appointmentsUpcoming, setAppointmentsUpcoming] = useState("")
  const [appointmentsPast, setAppointmentsPast] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const responseUpcoming = await axios.get(
        "http://127.0.0.1:8000/api/appointment/?patient=1&upcoming=True"
      )
      const responsePast = await axios.get(
        "http://127.0.0.1:8000/api/appointment/?patient=1&upcoming=False"
      )
      setAppointmentsUpcoming(responseUpcoming.data)
      setAppointmentsPast(responsePast.data)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  const formattedDate = (apidate) => {
    const date = new Date(apidate)
    const options = { year: "2-digit", month: "short", day: "numeric" }
    const formattedDate = date.toLocaleDateString(undefined, options)
    return formattedDate
  }

  return (
    <Grid
      container
      columns={12}
      sx={{
        mr: 4,
        backgroundColor: "white",
        border: "1px solid #e6e6e6",
        borderRadius: 2,
        boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Grid item xs={12}>
        <Box
          sx={{
            backgroundColor: "#eff1f7",
            p: "4px",
            m: 3,
            borderRadius: 2,
            width: "447px",
          }}
        >
          <button
            className={`pt-2 pb-2 pr-8 pl-8 mr-1 rounded-md ${
              buttonOneActive
                ? `bg-[#00544f] text-white hover:bg-[#068466]`
                : "text-[#00544f]"
            }`}
            onClick={() => setButtonOneActive(true)}
          >
            Upcoming Appointments
          </button>
          <button
            className={`pt-2 pb-2 pr-8 pl-8 rounded-md ${
              !buttonOneActive
                ? `bg-[#00544f] text-white hover:bg-[#068466]`
                : "text-[#00544f]"
            }`}
            onClick={() => setButtonOneActive(false)}
          >
            Past Appointments
          </button>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            ml: 3,
            mr: 3,
            backgroundColor: "#eff1f7",
            pl: 4,
            pr: 4,
            pt: 3,
            pb: 3,
            borderRadius: "8px 8px 0 0",
            borderBottom: "1px solid #e6e6e6",
          }}
        >
          <Typography sx={{ color: "#00544f" }}>Upcoming</Typography>
        </Box>
        <Box
          sx={{
            ml: 3,
            mr: 3,
            mb: 3,
            backgroundColor: "#eff1f7",
            height: "230px",
            overflow: "auto",
          }}
        >
          <List>
            {isLoading ? (
              <Typography>Loading...</Typography>
            ) : buttonOneActive ? (
              appointmentsUpcoming.length > 0 ? (
                appointmentsUpcoming.map((data) => (
                  <ListItem key={data.id}>
                    <Grid container columns={12} sx={{ mr: 2 }}>
                      <Grid
                        item
                        xs={1}
                        sx={{
                          display: "grid",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div className="m-12 h-[150px] w-1 bg-[#068466] absolute overflow-x-visible">
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 bg-[#eff1f7] border-[#6e7c7b]"></div>
                        </div>
                      </Grid>
                      <Grid item xs={11} sx={{ backgroundColor: "white" }}>
                        <Grid container columns={12}>
                          <Grid
                            item
                            xs={3}
                            sx={{
                              pl: 2,
                              pr: 0,
                              pt: 3,
                              pb: 3,
                            }}
                          >
                            <Typography
                              sx={{
                                borderRight: "1px solid #e6e6e6",
                                fontSize: "23px",
                              }}
                            >
                              {formattedDate(data.date)}
                            </Typography>
                            <Typography
                              sx={{
                                borderRight: "1px solid #e6e6e6",
                                fontSize: "10px",
                              }}
                            >
                              {data.time}
                            </Typography>
                          </Grid>
                          <Grid item xs={3} sx={{ pl: 2, pr: 0, pt: 3, pb: 3 }}>
                            <Typography
                              sx={{
                                borderRight: "1px solid #e6e6e6",
                                fontSize: "10px",
                              }}
                            >
                              specialization
                            </Typography>
                            <Typography
                              sx={{
                                borderRight: "1px solid #e6e6e6",
                                fontSize: "20px",
                              }}
                            >
                              {data.doctor.specialization}
                            </Typography>
                          </Grid>
                          <Grid item xs={3} sx={{ pl: 2, pr: 0, pt: 3, pb: 3 }}>
                            <Typography
                              sx={{
                                borderRight: "1px solid #e6e6e6",
                                fontSize: "10px",
                              }}
                            >
                              Doctor
                            </Typography>
                            <Typography
                              sx={{
                                borderRight: "1px solid #e6e6e6",
                                fontSize: "20px",
                              }}
                            >
                              {data.doctor.name}
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={3}
                            sx={{
                              pl: 2,
                              pr: 0,
                              pt: 3,
                              pb: 3,
                              display: "grid",
                              justifyContent: "start",
                              alignItems: "center",
                            }}
                          >
                            <Button variant="text" size="small">
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: "#068466",
                                }}
                              >
                                <TextSnippetOutlinedIcon sx={{ width: 13 }} />
                                <Typography sx={{ pl: "2px", fontSize: 12 }}>
                                  Notes
                                </Typography>
                              </Box>
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </ListItem>
                ))
              ) : (
                <Typography>No upcoming appointments.</Typography>
              )
            ) : appointmentsPast.length > 0 ? (
              appointmentsPast.map((data) => (
                <ListItem key={data.id}>
                  <Grid container columns={12} sx={{ mr: 2 }}>
                    <Grid
                      item
                      xs={1}
                      sx={{
                        display: "grid",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="m-12 h-[150px] w-1 bg-[#068466] absolute overflow-x-visible">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 bg-[#eff1f7] border-[#6e7c7b]"></div>
                      </div>
                    </Grid>
                    <Grid item xs={11} sx={{ backgroundColor: "white" }}>
                      <Grid container columns={12}>
                        <Grid
                          item
                          xs={3}
                          sx={{
                            pl: 2,
                            pr: 0,
                            pt: 3,
                            pb: 3,
                          }}
                        >
                          <Typography
                            sx={{
                              borderRight: "1px solid #e6e6e6",
                              fontSize: "23px",
                            }}
                          >
                            {formattedDate(data.date)}
                          </Typography>
                          <Typography
                            sx={{
                              borderRight: "1px solid #e6e6e6",
                              fontSize: "10px",
                            }}
                          >
                            {data.time}
                          </Typography>
                        </Grid>
                        <Grid item xs={3} sx={{ pl: 2, pr: 0, pt: 3, pb: 3 }}>
                          <Typography
                            sx={{
                              borderRight: "1px solid #e6e6e6",
                              fontSize: "10px",
                            }}
                          >
                            specialization
                          </Typography>
                          <Typography
                            sx={{
                              borderRight: "1px solid #e6e6e6",
                              fontSize: "20px",
                            }}
                          >
                            {data.doctor.specialization}
                          </Typography>
                        </Grid>
                        <Grid item xs={3} sx={{ pl: 2, pr: 0, pt: 3, pb: 3 }}>
                          <Typography
                            sx={{
                              borderRight: "1px solid #e6e6e6",
                              fontSize: "10px",
                            }}
                          >
                            Doctor
                          </Typography>
                          <Typography
                            sx={{
                              borderRight: "1px solid #e6e6e6",
                              fontSize: "20px",
                            }}
                          >
                            {data.doctor.name}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={3}
                          sx={{
                            pl: 2,
                            pr: 0,
                            pt: 3,
                            pb: 3,
                            display: "grid",
                            justifyContent: "start",
                            alignItems: "center",
                          }}
                        >
                          <Button variant="text" size="small">
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "#068466",
                              }}
                            >
                              <TextSnippetOutlinedIcon sx={{ width: 13 }} />
                              <Typography sx={{ pl: "2px", fontSize: 12 }}>
                                Notes
                              </Typography>
                            </Box>
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </ListItem>
              ))
            ) : (
              <Typography>No past appointments.</Typography>
            )}
          </List>
        </Box>
      </Grid>
    </Grid>
  )
}

export default CardFour
