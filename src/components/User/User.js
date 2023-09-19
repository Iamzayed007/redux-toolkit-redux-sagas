import React from 'react'

const User = ({user}) => {
    console.log(user);
    const {image,firstName,lastName,email} =user
    let displayName = firstName && lastName ? `${firstName} ${lastName}` : firstName
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md mt-4">
  <img className="w-full" src={image} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{displayName}</div>
    <p className="text-gray-700 text-base">
Email : {email}
    </p>
  </div>

</div>
  )
}

export default User