import { useState, createContext } from "react"
import "./App.css"
import AfterLogin from "./pages/afterlogin/AfterLogin"
import SignIn from "./pages/signin/SignIn"
import { useAppWindowSize } from "./customHooks/useAppWindowSize"
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
      <Route path="/patient/" element={<AfterLogin />} />
    </Route>
  )
)
function App() {
  const [userId, setUserId] = useState(null)

  return (
    <>
      <UserContext.Provider value={{ userId, setUserId }}>
        <RouterProvider router={Router} />
      </UserContext.Provider>
    </>
  )
}

export default App
