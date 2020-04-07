import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getRoles() {
  return Cookies.get("roles");
}

export function setRoles(roles) {
  return Cookies.set("roles", roles);
}

export function getUser() {
  return {
    id: Cookies.get("id"),
    name: Cookies.get("name")
  }
}

