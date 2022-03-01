import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"

const ResultPage = () => {
  useProtectedPage()
  return (
    <div>
      <p>ResultPage</p>
    </div>
  )
}

export default ResultPage