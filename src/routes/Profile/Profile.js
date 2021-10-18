import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeName } from '../../store/profile/actions'

export default function Profile() {
  
  
  // const action = useSelector((state) => {
  //   return state;
  // });

    const {nameProfile} = useSelector((state) => state.profile);
  

  const dispatch = useDispatch();
  const [value, setValue] = useState('');
 
 
  const handleChange = useCallback((e) => {
     
    setValue(e.target.value);
    
  }, []);
  

  const setNameProfile = useCallback(() => {
    dispatch(changeName(value))
  }, [dispatch, value],
  
);


  return (
    <div>
      <h1>Profile</h1>

      <input type='text'  value={value} onChange={handleChange} />
      <button  onClick={setNameProfile}>Создать профиль</button>
      
    </div>
  )
  }
