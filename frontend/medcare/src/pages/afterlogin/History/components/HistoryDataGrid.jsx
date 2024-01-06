// import { Box, Grid } from "@mui/material"
// import React, { useEffect, useState } from "react"

// // const columns = [
// //   { field: "appointment", headerName: "Appointment", width: 80 },
// //   { field: "doctor", headerName: "Doctor", width: 80 },
// //   { field: "reason", headerName: "Reason", width: 80 },
// //   { field: "description", headerName: "Description", width: 80 },
// //   { field: "date", headerName: "Date", width: 80 },
// //   { field: "medicine", headerName: "Medicine", width: 80 },
// //   { field: "notes", headerName: "Notes", width: 80 },
// // ]

// const HistoryDataGrid = () => {
//   const [buttonOneActive, setButtonOneActive] = useState(true)

//   const [surgery, setSurgery] = useState("")
//   const [checkUp, setCheckUp] = useState("")
//   const [isLoading, setIsLoading] = useState(false)

//   const fetchData = async () => {
//     setIsLoading(true)
//     try {
//       const checkUp = await axios.get(
//         "http://127.0.0.1:8000/api/appointment/?patient=1&appointment_type=follow-up"
//       )
//       const surgery = await axios.get(
//         "http://127.0.0.1:8000/api/appointment/?patient=1&upcoming=False"
//       )
//       setCheckUp(checkUp.data)
//       setSurgery(surgery.data)
//       setIsLoading(false)
//     } catch (error) {
//       console.error(error)
//       setIsLoading(false)
//     }
//   }
//   useEffect(() => {
//     fetchData()
//   }, [])
//   return (
//     <>
//       <Grid container columns={12} sx={{ m: 2 }}>
//         <Grid item xs={12} sx={{ backgroundColor: "#fff", pr: 2 }}>
//           <Box
//             sx={{
//               backgroundColor: "#eff1f7",
//               p: "4px",
//               m: 3,
//               borderRadius: 2,
//               width: "447px",
//             }}
//           >
//             <button
//               className={`pt-2 pb-2 pr-8 pl-8 mr-1 rounded-md ${
//                 buttonOneActive ? `bg-[#fff] text-green-400` : null
//               }`}
//               onClick={() => setButtonOneActive(true)}
//             >
//               Appointments
//             </button>
//             <button
//               className={`pt-2 pb-2 pr-8 pl-8 rounded-md ${
//                 !buttonOneActive ? `bg-[#fff] text-green-400` : null
//               }`}
//               onClick={() => setButtonOneActive(false)}
//             >
//               Surgeries
//             </button>
//           </Box>
//         </Grid>
//         <Grid item xs={12}>
//           <table>
//             <th>
//               <td>appointment</td>
//               <td>doctor</td>
//               <td>reason</td>
//               <td>description</td>
//               <td>date</td>
//               <td>medicine</td>
//               <td>notes</td>
//             </th>
//             <tb>
//               <td>{surgery.}</td>
//             </tb>
//           </table>
//         </Grid>
//       </Grid>
//     </>
//   )
// }

// export default HistoryDataGrid

// // const columns = [
// //     { field: "appointment", headerName: "Appointment", width: 80 },
// //     { field: "doctor", headerName: "Doctor", width: 80 },
// //     { field: "reason", headerName: "Reason", width: 80 },
// //     { field: "description", headerName: "Description", width: 80 },
// //     { field: "date", headerName: "Date", width: 80 },
// //     { field: "medicine", headerName: "Medicine", width: 80 },
// //     { field: "notes", headerName: "Notes", width: 80 },
// //   ]
