import { useState } from "react"
import "./App.css"
import AfterLogin from "./pages/afterlogin/AfterLogin"
import SignIn from "./pages/signin/SignIn"
import { useAppWindowSize } from "./customHooks/useAppWindowSize"

function App() {
  const [userId, setUserId] = useState(null)
  const size = useAppWindowSize()
  return (
    <>
      {/* <SignIn userId={userId} setUserId={setUserId} /> */}
      <AfterLogin userId={userId} />
    </>
  )
}

export default App
