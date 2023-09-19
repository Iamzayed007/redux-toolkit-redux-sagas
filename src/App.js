import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from './redux/user/slice';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  const userSelector = useSelector(state=> state.userReducer)
  const dispatch =useDispatch()
  console.log(userSelector);
  useEffect(() => {
    dispatch(getUsers())
  
   
  }, [])
  
  return (
    <div className="App">
    ok
    </div>
  );
}

export default App;
