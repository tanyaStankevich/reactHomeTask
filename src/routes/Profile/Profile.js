import React from "react";

import { useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store/index";
import { ProfileReducer, initialState } from "../../store/profile/reducer";
import { PROFILE_ACTION } from '../../store/profile/actions'

export default function Profile() {
 
  const action = useSelector((state) => {
    return state.show;
  });

  const dispatch = useDispatch();

  const setShowName = useCallback(() =>
    dispatch(PROFILE_ACTION),
  
    [dispatch])
  
  return (
    <div>
      <h1>Profile</h1>
      <input type='checkbox' checked={ show} value={show} onChange={setShowName} />

      {show && <p>{nameChat}</p>}
    </div>
  )
  }
