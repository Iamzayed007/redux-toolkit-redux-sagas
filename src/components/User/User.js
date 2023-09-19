import React from 'react'

const User = ({user}) => {
    // console.log(user);
    const {image,firstName,lastName,email} =user
    let displayName = firstName && lastName ? `${firstName} ${lastName}` : firstName
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md mt-4 dark:bg-slate-700 dark:text-white">
  <img className="w-full" src={image} alt="Sunset in the mountains"/>
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