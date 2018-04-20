import { all, takeEvery, takeLatest, put, fork, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import { clearToken } from '../../helpers/utility'
import { loginAPI, logoutAPI, signupAPI } from '../../helpers/apis'
import actions from './actions'

export function* loginRequest() {
  yield takeLatest('LOGIN_REQUEST', function*(payload) {
    const authData = payload.authData

    let user

    try {
      user = yield call(loginAPI, authData)
      console.log(user)
      yield put({
        type: actions.LOGIN_SUCCESS,
        access_token: user.access_token,
        refresh_token: user.refresh_token,
      })
      
      yield put(push('/'))
    } catch (error) {
      yield put({ type: actions.LOGIN_ERROR })
    }
  })
}

export function* signupRequest() {
  yield takeLatest('SIGNUP_REQUEST', function*(payload) {
    const userData = payload.userData

    let user

    try {
      user = yield call(signupAPI, userData)
      yield put({
        type: actions.SIGNUP_SUCCESS,
      })
    } catch (error) {
      yield put({ type: actions.SIGNUP_ERROR })
    }
  })
}

export function* loginSuccess() {
  yield takeEvery(actions.LOGIN_SUCCESS, function*(payload) {
    yield localStorage.setItem('access_token', payload.access_token)
    yield localStorage.setItem('refresh_token', payload.refresh_token)
  })
}

export function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function*() {})
}

export function* logout() {
  yield takeEvery(actions.LOGOUT, function*() {
    let user

    try {
      user = yield call(logoutAPI)
      clearToken()
      yield put(push('/'))
    } catch (error) {}
  })
}

export default function* rootSaga() {
  yield all([
    fork(loginRequest),
    fork(loginSuccess),
    fork(loginError),
    fork(logout),
    fork(signupRequest)])
}
