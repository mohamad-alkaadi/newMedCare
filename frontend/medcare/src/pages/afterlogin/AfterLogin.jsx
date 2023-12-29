import React, { useState } from "react"
import Personal from "./personal/Personal"
import PrimaryAppBar from "./components/PrimaryAppBar"

const AfterLogin = () => {
  const [activePage, setActivePage] = useState("personal")
  return (
    <>
      <PrimaryAppBar activePage={activePage} />
      <Personal />
    </>
  )
}

export default AfterLogin
