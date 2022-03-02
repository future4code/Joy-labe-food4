import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"

const CardPage = () => {
  useProtectedPage()
  return (
    <div>
      <p>CardPage</p>
    </div>
  )
}

export default CardPage