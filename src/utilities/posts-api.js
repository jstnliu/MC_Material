import sendRequest from './send-request';

const BASE_URL = '/api/posts';

// retrieve all posts
export function getAllPosts() {
    return sendRequest(BASE_URL)
}

// create new post
export function createPost(postData) {
    const response = sendRequest(`${BASE_URL}/new`, 'POST', postData)
    console.log('Post success:', response)
    return response
}

// retrieve specific post
export function viewPost(id) {
    const response = sendRequest(`${BASE_URL}/${id}`)
    console.log('Post success grab:', response)
    return response
}

// find specific post for deletion
export function deletePost(id) {
    const response = sendRequest(`${BASE_URL}/${id}`, 'DELETE')
    console.log('Post deletion fx from front end', response)
    return response
}