import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const User = ({ user }) => {
  let location = useLocation()
  let navigate =useNavigate()
  const { image, firstName, lastName, email ,id} = user
  let displayName = firstName && lastName ? `${firstName} ${lastName}` : firstName
  const onClickHandler =()=>{
    navigate(`/${id}`)
  }
  
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md mt-4 cursor-pointer dark:bg-slate-700 dark:text-white"
     onClick={onClickHandler}
    >
      <img className="w-full" src={image} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{displayName}</div>
        <p className="text-gray-700 text-base text-center dark:text-white">
          Email : {email}
        </p>
      </div>

    </div>
  )
}

export default User