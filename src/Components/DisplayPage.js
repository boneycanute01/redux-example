import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function DisplayPage() {
  const navigate = useNavigate();
  const data = useSelector(state=>state.myKey);
  return (
    <div>
        <button onClick={()=>{navigate(-1)}}>GO BACK</button>
         <h1>DisplayPage</h1>
         {data.length==0 && <h3>Nothing to show</h3>}
         <ol>
         {
            data.map((value,index)=>{
              return(
                <li key={index}>{value.name}</li>
              )
            })
          }
         </ol>
    </div>
  )
}

export default DisplayPage