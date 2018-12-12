import constants from './../constants';
const { initialState, types } = constants;

const getLoggedInUserReducer = (state = initialState, action) => {
  let user;
  let newLoggedInUserStateSlice;
  // console.log('getting called');
  switch (action.type) {
    case types.USER_LOGIN:
    newLoggedInUserStateSlice = Object.assign({}, {
      user: action.user,
      googleEmail: action.user.email
    });
    console.log(newLoggedInUserStateSlice);
    return newLoggedInUserStateSlice;


    case types.USER_LOGOUT:
    newLoggedInUserStateSlice = Object.assign({}, {
      user: null
    });
    return newLoggedInUserStateSlice;
  default:
    return state;
  }
}

export default getLoggedInUserReducer;
