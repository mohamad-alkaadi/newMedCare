import { useState } from "react"
import "./App.css"
import AfterLogin from "./pages/afterlogin/AfterLogin"
import SignIn from "./pages/signin/SignIn"
import { useAppWindowSize } from "./customHooks/useAppWindowSize"

function App() {
  const size = useAppWindowSize()
  console.log(size)
  return (
    <>
      {/* <AfterLogin /> */}
      <SignIn />
    </>
  )
}

export default App
