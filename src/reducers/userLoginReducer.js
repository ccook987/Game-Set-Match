import constants from './../constants';
const { initialState, types } = constants;

const userLoginReducer = (state = initialState, action) => {
  let user;
  let newUserStateSlice;
  switch (action.type) {
    case types.LOGIN_USER:
      newUserStateSlice = Object.assign({}, {
        isFetching: true,
        googleEmail: action.user.email
      });
      console.log(newUserStateSlice);
      return newUserStateSlice;

  default:
    return state;
  }
}

export default userLoginReducer;
