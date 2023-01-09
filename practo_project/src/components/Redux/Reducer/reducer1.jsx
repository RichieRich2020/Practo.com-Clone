/** @format */
const initialState = {
  user: {},
  appoint: {},
  appointuser: {},
  logindetail: {},
  time: null,
  isAuth: false,
};

//complete the reducer function
const reducer = (state = initialState, action) => {
  if (action.type === 'ADD') {
    state.user = action.work;
  }
  if (action.type === 'ADDcalendar') {
    state.appoint = action.appo;
    state.appointuser = action.work;
    state.time = action.time;
  }
  if (action.type === 'login') {
    state.logindetail = action.work;
    state.isAuth = true;
  }
  // if (action.type === 'logout') {
  //   state.isAuth = action.isAuth;
  // }
  return { ...state };
};

export { reducer };
