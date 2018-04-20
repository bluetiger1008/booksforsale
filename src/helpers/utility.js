import { Map } from 'immutable'

export function clearToken() {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
}

export function getToken() {
  try {
    const access_token = localStorage.getItem('access_token')
    const refresh_token = localStorage.getItem('refresh_token')
    return new Map({ access_token, refresh_token })
  } catch (err) {
    clearToken()
    return new Map()
  }
}
