import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"

const ProfilePage = () => {
  useProtectedPage()
  return (
    <div>
      <p>ProfilePage</p>
    </div>
  )
}

export default ProfilePage