import { Box, Grid } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import React, { useEffect, useState } from "react"
import axios from "axios"
const columns = [
  { field: "id", headerName: "id", width: 60 },
  { field: "appointment", headerName: "Appointment", width: 130 },
  { field: "reason", headerName: "Reason", width: 300 },
  { field: "description", headerName: "Description", width: 300 },
  { field: "medicine", headerName: "Medicine", width: 150 },
  { field: "doctor", headerName: "Doctor", width: 150 },
  { field: "date", headerName: "Date", width: 150 },
  { field: "notes", headerName: "Notes", width: 150 },
]

const HistoryDataGrid = () => {
  const [buttonOneActive, setButtonOneActive] = useState(true)

  const [appButtonActive, setAppButtonActive] = useState(true)
  const [surButtonActive, setSurButtonActive] = useState(false)
  const [allButtonActive, setAllButtonActive] = useState(false)
  const [checkUp, setCheckUp] = useState([])
  const [surgery, setSurgery] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [rows, setRows] = useState([])

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const checkUp = await axios.get(
        "http://127.0.0.1:8000/api/appointment/?patient=1&appointment_type=checkup"
      )
      const surgery = await axios.get(
        "http://127.0.0.1:8000/api/appointment/?patient=1&appointment_type=surgery"
      )
      setIsLoading(false)

      const checkUpRows = checkUp.data.map((item) => ({
        id: item.id,
        appointment: item.appointment_type,
        doctor: item.doctor.name,
        reason: item.reason,
        description: item.description,
        date: item.date,
        medicine: item.medicine_prescribed,
        notes: item.notes,
      }))

      const surgeryRows = surgery.data.map((item) => ({
        id: item.id,
        appointment: item.appointment_type,
        doctor: item.doctor.name,
        reason: item.reason,
        description: item.description,
        date: item.date,
        medicine: item.medicine_prescribed,
        notes: item.notes,
      }))

      // --------------------------attention ----------------------------------
      // make it to render a button inside notes and pass it a prop of the value of item.notes
      // const surgeryRows = surgery.data.map((item) => ({
      //   id: item.id,
      //   appointment: item.appointment_type,
      //   doctor: item.doctor.name,
      //   reason: item.reason,
      //   description: item.description,
      //   date: item.date,
      //   medicine: item.medicine_prescribed,
      //   notes: <NoteButton note={item.notes}/>,
      // }))
      // --------------------------attention ----------------------------------

      setCheckUp([...checkUpRows])
      setSurgery([...surgeryRows])
      setRows([...checkUpRows])
      // setRows([...checkUpRows, ...surgeryRows])
      // setRows([...checkUpRows, ...checkUpRows, ...checkUpRows, ...surgeryRows])
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleAppointment = () => {
    setAppButtonActive(true)
    setSurButtonActive(false)
    setAllButtonActive(false)
    setRows([])
    setRows([...checkUp])
  }
  const handleSurgery = () => {
    setAppButtonActive(false)
    setSurButtonActive(true)
    setAllButtonActive(false)
    setRows([])
    setRows([...surgery])
  }
  const handleAll = () => {
    setAppButtonActive(false)
    setSurButtonActive(false)
    setAllButtonActive(true)
    setRows([...checkUp, ...surgery])
  }

  return (
    <>
      <Grid container columns={12}>
        <Grid item xs={12} sx={{ backgroundColor: "#fff", pr: 2 }}>
          <Box
            sx={{
              backgroundColor: "#eff1f7",
              p: "4px",
              m: 3,
              borderRadius: 2,
              width: "359px",
            }}
          >
            <button
              className={`pt-2 pb-2 pr-8 pl-8 mr-1 rounded-md ${
                appButtonActive ? `bg-[#fff] text-green-400` : null
              }`}
              onClick={() => handleAppointment()}
            >
              Appointments
            </button>
            <button
              className={`pt-2 pb-2 pr-8 pl-8 mr-1 rounded-md ${
                surButtonActive ? `bg-[#fff] text-green-400` : null
              }`}
              onClick={() => handleSurgery()}
            >
              Surgeries
            </button>
            <button
              className={`pt-2 pb-2 pr-4 pl-4 rounded-md ${
                allButtonActive ? `bg-[#fff] text-green-400` : null
              }`}
              onClick={() => handleAll()}
            >
              all
            </button>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ pr: 2, pl: 2 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 12,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
            sx={{ pl: 1 }}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default HistoryDataGrid
