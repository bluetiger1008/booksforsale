import { Map } from 'immutable'

export function clearToken() {
  localStorage.removeItem('idToken')
}

export function getToken() {
  try {
    const idToken = localStorage.getItem('idToken')
    const userEmail = localStorage.getItem('userEmail')
    return new Map({ idToken, userEmail })
  } catch (err) {
    clearToken()
    return new Map()
  }
}
