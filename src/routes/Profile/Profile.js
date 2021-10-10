import React from "react";

import { useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store/index";
import { ProfileReducer, initialState } from "../../store/profile/reducer";
import { profileAction } from '../../store/profile/actions'

export default function Profile() {
 
  const action = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const setShowName = useCallback(() =>
    dispatch(profileAction),
  
    [dispatch])
  
  return (
    <div>
      <h1>Profile</h1>
      <input type='checkbox' checked={action.show} value={action.show} onChange={setShowName} />

      {action.show && <p>{action.nameChat}</p>}
    </div>
  )
  }
