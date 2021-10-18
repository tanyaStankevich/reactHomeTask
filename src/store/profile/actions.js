// export const PROFILE_ACTION = "PROFILE_ACTION";
export const CHANGE_NAME = "PROFILE_ACTION::CHANGE_NAME";

// export const profileAction = {
//   type: PROFILE_ACTION
// }

export const changeName = (nameProfile) => ({
  type: CHANGE_NAME,
  payload: nameProfile,
});
