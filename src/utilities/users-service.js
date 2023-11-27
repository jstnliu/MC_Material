// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from 
import * as usersAPI from './users-api';

export async function signUp(userData) {
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    const token = await usersAPI.signUp(userData)
    //persist the 'token'
    localStorage.setItem('token', token)
    return getUser()
}

export async function login(credentials) {
    const token = await usersAPI.login(credentials)
    localStorage.setItem('token', token)
    return getUser()
}

export function logOut() {
    localStorage.removeItem('token')
}

// SETTING USER STATE WHEN PAGE IS LOADED OR REFRESHED ------
export function getToken() {
    // getItem returns null if there's no string
    // 1. Retrieve the token from localStorage.
    const token = localStorage.getItem('token')
    // 2. If there isn't a token, set user to null.
    if(!token) return null
    // obtain the payload of the token
    const payload = JSON.parse(atob(token.split('.')[1]))
    // a JWT's exp is expressed in seconds, not millisecs, so convert
    // 3. If there's an expired token, remove it from localStorage and set user to null.
    if (payload.exp < Date.now() / 1000) {
        // Token has expired - remove it from localStorage
        localStorage.removeItem('token')
        return null
    }
    return token
}

// 4. If the token hasn't expired, extract the user object 
// from the payload use set the user state to that object.
export function getUser() {
    const token = getToken()
    // if there's a token, return the user in the payload, otherwise return null
    return token ? JSON.parse(atob(token.split('.')[1])).user : null
}
// -----------------------------------------------------------

export function checkToken() {
    return usersAPI.checkToken()
    // checkToken returns a string, but let's
    // make it a Date object for more flexibility
    .then(dateStr => new Date(dateStr))
}