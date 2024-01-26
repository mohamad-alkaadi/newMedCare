// import React, { createContext, useState } from "react"
// import Personal from "./personal/Personal"
// import PrimaryAppBar from "./components/PrimaryAppBar"
// import PrimaryDrawer from "./components/PrimaryDrawer"
// import { Grid } from "@mui/material"
// import Overview from "./overview/Overview"
// import History from "./History/History"
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom"

// export const ActivePageContext = createContext()

// const SignedRouter = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="/dashboard/" element={<Overview />} />
//       <Route path="/personal/" element={<Personal />} />
//       <Route path="/history/" element={<History />} />
//     </Route>
//   )
// )

// const AfterLogin = ({ userId }) => {
//   const [activePage, setActivePage] = useState("")
//   console.log(userId)
//   return (
//     <div>
//       <Grid container columns={16}>
//         <Grid item xs={2}>
//           <PrimaryDrawer activePage={activePage} />
//         </Grid>
//         <Grid item xs={14}>
//           <ActivePageContext.Provider value={{ activePage, setActivePage }}>
//             <RouterProvider router={SignedRouter} />
//           </ActivePageContext.Provider>
//         </Grid>
//       </Grid>
//     </div>
//   )
// }

// export default AfterLogin

// // import React, { useState } from "react"
// // import Personal from "./personal/Personal"
// // import PrimaryAppBar from "./components/PrimaryAppBar"
// // import PrimaryDrawer from "./components/PrimaryDrawer"
// // import { Grid } from "@mui/material"
// // import Overview from "./overview/Overview"
// // import History from "./History/History"
// // import {
// //   createBrowserRouter,
// //   createRoutesFromElements,
// //   Route,
// //   RouterProvider,
// // } from "react-router-dom"

// // export const activePageContext = createContext()

// // const Router = createBrowserRouter(
// //   createRoutesFromElements(
// //     <Route>
// //       <Route path="/personal/" element={<Personal />} />
// //       <Route path="/dashboard/" element={<Overview />} />
// //       <Route path="/history/" element={<History />} />
// //     </Route>
// //   )
// // )

// // const AfterLogin = ({ userId }) => {
// //   const [activePage, setActivePage] = useState("")
// //   console.log(userId)
// //   return (
// //     <div>
// //       <Grid container columns={16}>
// //         {/* <PrimaryAppBar activePage={activePage} /> */}
// //         <Grid item xs={2}>
// //           <PrimaryDrawer activePage={activePage} />
// //         </Grid>
// //         <Grid item xs={14}>
// //           <Personal activePage={activePage} setActivePage={setActivePage} />
// //           {/* <Overview activePage={activePage} setActivePage={setActivePage} /> */}
// //           {/* <History activePage={activePage} setActivePage={setActivePage} /> */}
// //         </Grid>
// //       </Grid>
// //     </div>
// //   )
// // }

// // export default AfterLogin
