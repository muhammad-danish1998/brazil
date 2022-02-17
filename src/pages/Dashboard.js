import React, { useContext } from 'react'
import { GlobalContext } from '../context/ContextProvider'

function Dashboard() {
  const {currentUserData} = useContext(GlobalContext)
  return (
    <div>
      <div className='d-flex dashboard_container'>
      Welcome to Dashboard {currentUserData?.name}{" "}{currentUserData?.lastName}
      </div>
    </div>
  )
}

export default Dashboard