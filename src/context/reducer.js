const reducer = (state, action) => {
  if (action.type === 'SETUP_USER_SUCCESS') {
    return {
      ...state,
      user: action.payload.user,
    }
  }
  if (action.type === 'ERROR') {
    return {
      ...state,
      user: undefined,
      alertMessage: action.payload.msg,
    }
  }
}
export default reducer
