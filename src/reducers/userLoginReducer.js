import constants from './../constants';
import { FETCH_USER } from '../constants/ActionTypes';

const { initialState, types } = constants;

export default (state = false, action) => {
  let NewGoogleUserSlice;
  switch (action.type) {
    case FETCH_USER:
    NewGoogleUserSlice = Object.assign({}, {
      user: action.payload
    });
    console.log(NewGoogleUserSlice);
      return NewGoogleUserSlice || null;
    default:
      return state;
  }
};

// const userLoginReducer = (state = initialState.user, action) => {
//   let newUserStateSlice;
//   switch (action.type) {
//     case types.LOGIN_USER:
//       newUserStateSlice = Object.assign({}, {
//         user: action.user
//       });
//       // console.log(user);
//       return newUserStateSlice;
//     case types.LOGOUT_USER:
//       newUserStateSlice = Object.assign({}, {
//         user: null
//       });
//   default:
//     return state;
//   }
// }

// export default userLoginReducer;
