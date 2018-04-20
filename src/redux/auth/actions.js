const authActons = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGOUT: 'LOGOUT',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  
  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_ERROR: 'SIGNUP_ERROR',

  login: authData => ({
    type: authActons.LOGIN_REQUEST,
    authData
  }),
  
  logout: () => ({
    type: authActons.LOGOUT
  }),

  signup: userData => ({
    type: authActons.SIGNUP_REQUEST,
    userData
  })
}
export default authActons
