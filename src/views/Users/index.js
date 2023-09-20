import React, { useContext } from 'react'
import User from '../../components/User/User'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from '../../redux/user/slice';
import { ThemeContext } from '../../context/ThemeContext';
import Theme from '../../components/Theme/Theme';
const Users = () => {
  const users = useSelector(state => state.userReducer)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getUsers())


  }, [])

  return (
    <>

      <div className='flex justify-center mt-10 text-5xl font-bold dark:text-white' >User List</div>
      <div className='flex justify-center mt-10'>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex justify-start'>
          {users.users && users.users?.users?.map((user, index) => <User user={user} key={index} />)}


        </div>
      </div>
    </>
  )
}

export default Users