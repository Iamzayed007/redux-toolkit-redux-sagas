import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUser } from '../../redux/userDetails/slice'
import { useDispatch, useSelector } from 'react-redux'

const UserDetails = () => {
  const { userId } = useParams()
  const dispatch = useDispatch()
  const { user, loading } = useSelector(state => state.useDetailsReducer)
  const { image, firstName, lastName,email,phone,address } = user
  console.log(user, loading);

  useEffect(() => {
    dispatch(getUser(userId))


  }, [])

  return (
    <div className='dark:bg-slate-900 min-h-screen flex justify-center'>
{!loading &&      <div>
  <div className='flex justify-center my-10 text-5xl font-bold dark:text-white' >User Details</div>
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-slate-700 dark:hover:bg-gray-700">
          <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{firstName + ' ' + lastName}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Email: {email} </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Phone: {phone} </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Address: {address?.address + ', '+ address?.city} </p>
          </div>
        </div>
      </div>
        }

    </div>
  )
}

export default UserDetails