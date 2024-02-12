import { useState, createContext } from "react"
import "./App.css"
// import AfterLogin from "./pages/afterlogin/AfterLogin"
import SignIn from "./pages/signin/SignIn"
import { useAppWindowSize } from "./customHooks/useAppWindowSize"
import Overview from "./pages/afterlogin/overview/Overview"
import Personal from "./pages/afterlogin/personal/Personal"
import History from "./pages/afterlogin/History/History"
import Chat from "./pages/afterlogin/chat/Chat"
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
      <Route path="/patient/chat/" element={<Chat />} />
    </Route>
  )
)
function App() {
  const [userId, setUserId] = useState(0)
  const [activePage, setActivePage] = useState("")
  const [doctorId, setDoctorId] = useState(0)
  const [doctorName, setDoctorName] = useState("")
  console.log("this is user id", userId)
  console.log("this is user id", userId)
  console.log("this is user id", userId)
  console.log("this is doctor id", doctorId)
  console.log("this is doctor id", doctorId)
  console.log("this is doctor name", doctorName)
  console.log("this is doctor name", doctorName)

  return (
    <>
      <UserContext.Provider
        value={{
          userId,
          setUserId,
          activePage,
          setActivePage,
          doctorId,
          setDoctorId,
          doctorName,
          setDoctorName,
        }}
      >
        <RouterProvider router={Router} />
      </UserContext.Provider>
    </>
  )
}

export default App
