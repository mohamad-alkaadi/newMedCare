import { useState, createContext } from "react"
import "./App.css"
// import AfterLogin from "./pages/afterlogin/AfterLogin"
import SignIn from "./pages/signin/SignIn"
import { useAppWindowSize } from "./customHooks/useAppWindowSize"
import Overview from "./pages/afterlogin/overview/Overview"
import Personal from "./pages/afterlogin/personal/Personal"
import History from "./pages/afterlogin/History/History"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

export const UserContext = createContext()

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/signin/" element={<SignIn />} />
      <Route path="/patient/overview/" element={<Overview />} />
      <Route path="/patient/personal/" element={<Personal />} />
      <Route path="/patient/history/" element={<History />} />
    </Route>
  )
)
function App() {
  const [userId, setUserId] = useState(null)
  const [activePage, setActivePage] = useState("")

  return (
    <>
      <UserContext.Provider
        value={{ userId, setUserId, activePage, setActivePage }}
      >
        <RouterProvider router={Router} />
      </UserContext.Provider>
    </>
  )
}

export default App
// import { useState, createContext } from "react"
// import "./App.css"
// import AfterLogin from "./pages/afterlogin/AfterLogin"
// import SignIn from "./pages/signin/SignIn"
// import { useAppWindowSize } from "./customHooks/useAppWindowSize"
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom"

// export const UserContext = createContext()

// const Router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="/signin/" element={<SignIn />} />
//       <Route path="/patient/" element={<AfterLogin />} />
//     </Route>
//   )
// )
// function App() {
//   const [userId, setUserId] = useState(null)

//   return (
//     <>
//       <UserContext.Provider value={{ userId, setUserId }}>
//         <RouterProvider router={Router} />
//       </UserContext.Provider>
//     </>
//   )
// }

// export default App
