import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {updateData,deleteData} from './Slice';

function MainPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("Store Data",useSelector(state=>state.myKey));

  const handleFetch = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').
    then(response => dispatch(updateData(response.data))).catch((err)=>{console.log('Error : ',err)});
  } 

  const handleDisplay = ()=>{
    navigate('/display');
  }

  const handleDelete = ()=>{
    dispatch(deleteData());
  }

  return (  
    <>
        <h1>MainPage</h1>
        <button onClick={handleFetch}>Fetch</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleDisplay}>Display</button>
    </>
  )
}

export default MainPage